---
status: public_publication_registry
category: publication_index
language: Japanese
updated: 2026-11-11
---
# Jxiv公開研究｜S. Meta

**言語：日本語** ｜ [English](JXIV_PUBLICATIONS.html) ｜ [日本語トップ](index_ja.html)

S. Meta名義でJxiv（JSTプレプリントサーバ）に公開された4件の研究をまとめています。論文原文はDOIのリンクから確認できます。**論文PDFの言語は原本どおり**です。

---

## 1. Reality Stabilizer / Contact Pressure

**邦題：** 生成AI出力における説明整合性と現実接触の乖離を点検する補助枠  
**著者：** S. Meta  
**公開日：** 2026年7月6日  
**DOI：** [10.51094/jxiv.4696](https://doi.org/10.51094/jxiv.4696)

AIが作った説明が論理的に整っていることと、その説明が実際の制度、責任、費用、実装条件などに触れていることを区別するための横断的な監査概念です。

**中心的な問い：** 説明の整合性は、現実との接触を保証しない。

- [日本語解説](REALITY_STABILIZER_JA.html)
- [English](REALITY_STABILIZER_EN.html)

## 2. Structure-Change Sensor（SC）

**邦題：** 構造変化センサー（Structure-Change Sensor）：時系列対話・文書における構造変化候補の検出とリアルタイム・ブックマーキング  
**著者：** S. Meta  
**提出日：** 2026年8月26日  
**公開日：** 2026年9月8日  
**DOI：** [10.51094/jxiv.6215](https://doi.org/10.51094/jxiv.6215)

長期的な対話・文書・相互作用記録の中から、判断規則や役割などの構造が変わった可能性のある地点を検出し、後から確認できる候補として保存します。

**中心的な区別：** 検出 ≠ 解釈 ≠ 伝達 ≠ 因果。候補は確定判定ではありません。

後ろ向きの候補検出には複数事例で診断的な支持があり、リアルタイム拡張は仕様化と前向き試行の段階にあります。

- [日本語解説](STRUCTURE_CHANGE_SENSOR_JA.html)
- [English](STRUCTURE_CHANGE_SENSOR.html)

## 3. Empirical Audit Architecture（EAA）

**邦題：** 実証監査アーキテクチャ（EAA）：複数AIによる証拠再構成を比較可能にする監査方法の開発と前向き検証  
**英題：** *Empirical Audit Architecture (EAA): Development and Prospective Validation of an Audit Method for Comparable Evidence Reconstruction by Multiple AI Systems*  
**著者：** S. Meta  
**公開日：** 2026年9月16日  
**DOI：** [10.51094/jxiv.6148](https://doi.org/10.51094/jxiv.6148)

複数AIによる同じ証拠資料の再構成を、原回答や不確実性を保持したまま比較し、対応付けや再実行条件まで追跡可能にする監査方法です。

**中心的な問い：** 結論が似ているだけで、比較可能な再構成になっているのか。

方法仕様を凍結した後、新しい1事例に適用して検証しています。ここでいう「前向き検証」は事例選択の全過程を事前登録したことではありません。

- [日本語解説](EMPIRICAL_AUDIT_ARCHITECTURE_JA.html)
- [English](EMPIRICAL_AUDIT_ARCHITECTURE.html)


## 4. SC Evidence Audit｜構造変化の観測と意味の確定（独立した新論文）

**正式邦題：** 構造変化の観測と、その意味の確定をどう分けるか  
**サブタイトル：** Structure-Change Sensor v0.1 の遡及的文書改訂44ペアと証拠監査  
**著者：** S. Meta（独立研究者）  
**DOI：** [10.51094/jxiv.6999](https://doi.org/10.51094/jxiv.6999)  
**Jxiv掲載：** [公開ページ（6999）](https://jxiv.jst.go.jp/index.php/jxiv/preprint/view/6999)  
**投稿日：** 2026年10月29日 01:30:25 UTC  
**初回公開日時（Version 1）：** 2026年11月11日 05:49:49 UTC（日本時間14:49:49）  
**Version 2公開日時：** 2026年11月12日 09:12:35 UTC（日本時間18:12:35）  
**公開版：** Version 2（提出原稿はv1.3.4。Version 1の履歴もJxiv上に保持）  
**ライセンス：** CC BY-NC-ND 4.0  
**公開ファイル：** `PDF_ver.2`（本文18ページ）、`Supplement_PDF_ver.2`（Supplement S1・4ページ）  
**改版理由：** PDF生成時のフォント埋め込み・一部字形表示の修正。Jxiv公開ページの改版理由によれば、本文の記述、研究方法、結果、表、付録および補足資料の内容は不変。版情報は2026年11月12日の著者提供Jxiv公式画面で確認。公開PDF本文の独立再取得・比較は未実施。

**この論文の位置づけ：** 既刊のSC v0.1（DOI 6215）の改版ではなく、**別個の探索的証拠監査論文**。人工業務文書8ペア、自然科学文書36ペア（31論文由来）、計44ペアについて、原文根拠に戻れるか、暫定観測と後日意味が定着する段階を区別できるかを点検しています。

**記録された内訳：** CANDIDATE 11件、STABLE 25件、AMBIGUOUS 8件、Bookmark 11件（合計44ペア）。

**主張しないこと：** SC固有の性能優位、因果関係の成立、将来予測の成功、前向きT0検出の実証。2026年10月28日以降の前向き観測は、独立した進行中の研究として区別します。

**研究間の案内：** [SC v0.1と今回の探索的監査の関係](STRUCTURE_CHANGE_SENSOR_JA.html)


---

## EAAとSCの関係

両者は別個の、補完し得る公開方法です。

- **EAA：** 複数AIの証拠再構成を比較・追跡・再実行可能にする。
- **SC：** 長い記録のどこに構造変化候補があるかを検出・保存する。

どちらかの公開を、他方の有効性の証明とは扱いません。いずれも、人間とAIの長期的な協働における記録の点検可能性という問題に関係しています。

---

## 推奨引用形式

- S. Meta. (2026). *Reality Stabilizer: 生成AI出力における説明整合性と現実接触の乖離を点検する補助枠*. Jxiv. https://doi.org/10.51094/jxiv.4696
- S. Meta. (2026). *構造変化センサー（Structure-Change Sensor）：時系列対話・文書における構造変化候補の検出とリアルタイム・ブックマーキング*. Jxiv. https://doi.org/10.51094/jxiv.6215
- S. Meta. (2026). *実証監査アーキテクチャ（EAA）：複数AIによる証拠再構成を比較可能にする監査方法の開発と前向き検証*. Jxiv. https://doi.org/10.51094/jxiv.6148
- S. Meta. (2026). *構造変化の観測と、その意味の確定をどう分けるか：Structure-Change Sensor v0.1 の遡及的文書改訂44ペアと証拠監査*. Jxiv, Version 2. https://doi.org/10.51094/jxiv.6999

Jxiv掲載は査読済みであることを意味しません。詳細な根拠、適用範囲、留保は各論文原文を参照してください。

**関連資料：** [研究の背景](WHY_THIS_ARCHIVE_EXISTS_JA.html) ・ [SC](STRUCTURE_CHANGE_SENSOR_JA.html) ・ [EAA](EMPIRICAL_AUDIT_ARCHITECTURE_JA.html) ・ [研究トップ](index_ja.html)
