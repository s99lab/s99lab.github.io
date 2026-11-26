import fs from 'node:fs';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
const root='https://s99lab.github.io/';
const dir=process.argv[2]||'_site';
const sources=fs.readdirSync('.').filter(p=>p.endsWith('.md')&&/^layout: s99lab-article$/m.test(fs.readFileSync(p,'utf8').split(/^---\s*$/m)[1]||''));
assert(sources.length>=33,'Reading pages missing');
const strip=t=>t.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/,'');
const base=process.env.COMPARE_CONTENT_BASE;
for(const file of sources){
 const src=fs.readFileSync(file,'utf8');
 const fm=src.split(/^---\s*$/m)[1];
 const value=k=>fm.match(new RegExp('^'+k+': (.+)$','m'))?.[1]?.trim();
 const name=file.replace(/\.md$/,'.html');
 const lang=value('lang'),canonical=value('canonical_url'),alternate=value('alternate_url');
 assert(['en','ja'].includes(lang),file+' language');
 assert.equal(canonical,root+name,file+' canonical');
 if(base){const prior=execFileSync('git',['show',base+':'+file],{encoding:'utf8'});assert.equal(strip(src),strip(prior),file+' original Markdown body');}
 const html=fs.readFileSync(dir+'/'+name,'utf8');
 assert(html.includes('<html lang="'+lang+'">'),file+' rendered lang');
 assert(html.includes('class="reading-brand"'),file+' brand header');
 assert(html.includes('class="reading-article"'),file+' content shell');
 assert(html.includes('href="'+canonical+'"'),file+' canonical');
 assert(html.includes('href="/assets/css/smeta-article.css"'),file+' CSS');
 assert(/<h1(?:\s[^>]*)?>[\s\S]*?<\/h1>/.test(html),file+' rendered heading');
 assert(!html.includes('{{ content }}'),file+' unrendered layout');
 assert(html.includes('https://orcid.org/0009-0007-0820-7160'),file+' author identity');
 if(alternate){
   const target=alternate.slice(root.length).replace(/\.html$/,'.md');
   assert(sources.includes(target),file+' missing alternate');
   assert(fs.readFileSync(target,'utf8').includes('alternate_url: '+canonical),file+' alternate not reciprocal');
   assert(html.includes('href="'+alternate+'"'),file+' rendered alternate');
 }
}
assert(fs.existsSync(dir+'/assets/css/smeta-article.css'),'CSS output missing');
for(const name of ['index.html','index_ja.html']){const html=fs.readFileSync(dir+'/'+name,'utf8');assert(html.includes('class="s99lab-home"'),name+' home shell');assert(!html.includes('class="reading-article"'),name+' unintended article layout');}
for(const name of ['START_HERE.html','START_HERE_JA.html']){const html=fs.readFileSync(dir+'/'+name,'utf8');assert(/http-equiv=["']refresh["']/i.test(html),name+' redirect missing');}
console.log('Jekyll rendered reading pages: '+sources.length+'; home/redirect isolation PASS'+(base?'; original Markdown bodies identical PASS':''));
