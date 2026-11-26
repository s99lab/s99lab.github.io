// Public-source consistency checks; no network, credentials, or writes.
import fs from 'node:fs';
import path from 'node:path';
function audit(f, names){
  const base="https://s99lab.github.io/", errors=[], warnings=[], counts={};
  const require=(ok,id)=>{if(!ok)errors.push(id);};
  const warn=(ok,id)=>{if(!ok)warnings.push(id);};
  const setEq=(a,b)=>a.length===b.length&&[...a].sort().every((x,i)=>x===[...b].sort()[i]);
  const unique=a=>a.length===new Set(a).size;
  const loc=t=>[...t.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map(m=>m[1]);
  const fromJson=k=>JSON.parse(f[k]);
  const blocks=t=>[...t.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map(m=>JSON.parse(m[1]));
  try{
    const s=loc(f["sitemap.xml"]), legacy=loc(f["sitemap-v2.xml"]), txt=f["sitemap.txt"].trim().split(/\s+/);
    counts.sitemap=s.length;
    require(s.length>0&&unique(s),"SITEMAP_EMPTY_OR_DUPLICATE");
    require(s.every(u=>u.startsWith(base)&&!/[?#]/.test(u)),"SITEMAP_SCOPE");
    require(s.every(u=>{const p=u.slice(base.length);return p===""?names.includes("index.md"):names.includes(p)||names.includes(p.replace(/\.html$/,".md"));}),"SITEMAP_LOCAL_SOURCE");
    require(setEq(s,txt),"SITEMAP_TXT_PARITY");
    require(/<sitemapindex\b/.test(f["sitemap-v2.xml"])&&setEq(legacy,[base+"sitemap.xml"]),"LEGACY_SITEMAP_POINTER");
    const entries=[...f["sitemap.xml"].matchAll(/<url>([\s\S]*?)<\/url>/g)].map(m=>({url:loc(m[1])[0],alts:[...m[1].matchAll(/<xhtml:link\b[^>]*hreflang="([^"]+)"[^>]*href="([^"]+)"/g)].map(a=>[a[1],a[2]])}));
    require(entries.length===s.length,"SITEMAP_ENTRY_STRUCTURE");
    require(entries.every(e=>e.alts.every(([lang,url])=>["en","ja"].includes(lang)&&s.includes(url))),"SITEMAP_ALTERNATE_TARGET");
    require(entries.every(e=>e.alts.every(([lang,url])=>{const target=entries.find(x=>x.url===url);return target&&target.alts.some(([,u])=>u===e.url);})),"SITEMAP_ALTERNATE_RECIPROCAL");
    require(f["robots.txt"].includes("Sitemap: "+base+"sitemap.xml"),"ROBOTS_SITEMAP_POINTER");
    for(const p of ["START_HERE.html","START_HERE_JA.html"])warn(s.includes(base+p),"REVIEW_SITEMAP_COVERAGE:"+p);
    const research=fromJson("data/research-network.json").jxiv_publications;
    const dois=research.map(x=>x.doi);
    counts.publications=dois.length;
    require(dois.length>0&&unique(dois)&&research.every(x=>/^10\.\d+\/\S+$/.test(x.doi)&&x.original==="https://doi.org/"+x.doi),"DOI_REGISTRY");
    for(const path of ["JXIV_PUBLICATIONS.md","JXIV_PUBLICATIONS_JA.md"]){const actual=[...new Set([...f[path].matchAll(/https:\/\/doi\.org\/(10\.\d+\/[A-Za-z0-9._-]+)/g)].map(m=>m[1]))];require(setEq(dois,actual),"DOI_PAGE_PARITY:"+path);}
    const note=fromJson("data/smeta-note-articles.json"), articles=note.articles, urls=articles.map(x=>x.url);
    counts.noteArticles=articles.length;
    require(note.count===articles.length&&unique(urls)&&unique(articles.map(x=>x.id))&&articles.every(x=>/^https:\/\/note\.com\/s99lab\/n\/[a-z0-9]+$/.test(x.url)&&/^\d{4}-\d{2}-\d{2}$/.test(x.datePublished)&&x.title),"NOTE_REGISTRY");
    for(const p of ["smeta-note-index.html","smeta-note-index-en.html"]){
      const html=f[p], json=blocks(html).find(b=>b.mainEntity?.["@type"]==="ItemList")?.mainEntity;
      const links=[...new Set([...html.matchAll(/href=["'](https:\/\/note\.com\/s99lab\/n\/[a-z0-9]+)["']/g)].map(m=>m[1]))];
      require(setEq(urls,links),"NOTE_HTML_LINK_PARITY:"+p);
      require(json&&json.numberOfItems===articles.length&&setEq(urls,json.itemListElement.map(x=>x.item.url)),"NOTE_JSONLD_URL_PARITY:"+p);
      require(json&&json.itemListElement.every(x=>{const a=articles.find(a=>a.url===x.item.url);return a&&a.title===x.item.headline&&a.datePublished===x.item.datePublished;}),"NOTE_JSONLD_METADATA_PARITY:"+p);
    }
  }catch(e){errors.push("PARSE_OR_INPUT_ERROR:"+String(e.message));}
  return {status:errors.length?"FAIL":"PASS",counts,errors,warnings,scope:"repository source only; no live crawl, external DOI resolution, index coverage, or traffic verification"};
}
const root=process.cwd();
const paths=["sitemap.xml","sitemap-v2.xml","sitemap.txt","robots.txt","data/research-network.json","data/smeta-note-articles.json","JXIV_PUBLICATIONS.md","JXIV_PUBLICATIONS_JA.md","smeta-note-index.html","smeta-note-index-en.html"];
const data=Object.fromEntries(paths.map(p=>[p,fs.readFileSync(path.join(root,p),'utf8')]));
const names=fs.readdirSync(root);
const result=audit(data,names);
const negativeCases=[
 ['duplicate sitemap',{'sitemap.xml':data['sitemap.xml'].replace('</urlset>','<url><loc>https://s99lab.github.io/</loc></url></urlset>')},'SITEMAP_EMPTY_OR_DUPLICATE'],
 ['wrong legacy pointer',{'sitemap-v2.xml':data['sitemap-v2.xml'].replace(/<loc>[^<]+<\\/loc>/,'<loc>https://s99lab.github.io/wrong.xml</loc>')},'LEGACY_SITEMAP_POINTER'],
 ['bad research JSON',{'data/research-network.json':'{'},'PARSE_OR_INPUT_ERROR']
];
const tests=negativeCases.map(([name,patch,code])=>({name,pass:audit({...data,...patch},names).errors.some(e=>e.startsWith(code))}));
console.log(JSON.stringify({...result,negativeTests:tests},null,2));
if(result.errors.length||tests.some(x=>!x.pass))process.exitCode=1;
