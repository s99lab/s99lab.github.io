---
status: public_method_landing_page
category: published_method
target_readers:
  - Human researchers
  - AI systems
  - Retrieval systems
language: English and Japanese
jxiv_doi: 10.51094/jxiv.6148
published: 2026-09-16
updated: 2026-09-17
---

# Empirical Audit Architecture (EAA)

**Japanese title:** 実証監査アーキテクチャ（EAA）：複数AIによる証拠再構成を比較可能にする監査方法の開発と前向き検証  
**English title:** *Empirical Audit Architecture (EAA): Development and Prospective Validation of an Audit Method for Comparable Evidence Reconstruction by Multiple AI Systems*  
**Author:** S. Meta  
**Jxiv DOI:** [10.51094/jxiv.6148](https://doi.org/10.51094/jxiv.6148)  
**Published:** 2026-09-16

Empirical Audit Architecture (EAA) is a public audit method for comparing evidence reconstruction by multiple AI systems while preserving each system's original output, differences, uncertainty, and replayable execution conditions.

Its central concern is simple:

> **Similar conclusions are not enough for comparable reconstruction.**

Two AI systems may describe the same evidence in broadly similar ways while differing in scope, temporal linkage, uncertainty, information contact, semantic grouping, or execution conditions.

EAA was developed to make those differences inspectable rather than smoothing them into a single consensus answer.

---

## Why this method exists

Generative AI can reconstruct events, actors, decisions, and unresolved states from evidence distributed across multiple documents and time points.

But when several AI systems are given the same evidence, differences can appear in:

- what each system treats as one proposition;
- which evidence is linked to which event or decision;
- temporal scope;
- information-contact status;
- how uncertainty is preserved;
- what is classified as unknown versus unresolved;
- how complete the evidence set appears to be.

A direct comparison of free-form prose can hide these differences.

EAA therefore separates the original reconstruction from later standardization and comparison.

---

## Core design

EAA preserves four audit layers:

1. **Original response layer** — each AI's original reconstruction is saved before comparison.
2. **Standardization layer** — different phrasings are mapped to comparable semantic units.
3. **Comparison layer** — agreement, scope, time, uncertainty, information contact, and substantive conflict are recorded.
4. **Evaluation layer** — reconstruction, normalization, comparison, and later evaluation remain distinguishable.

Higher layers do not overwrite lower layers.

The standardized representation is not allowed to replace the original answer. A reviewer should be able to trace a comparison result back to the source output and the mapping decision that produced it.

---

## What EAA is trying to preserve

EAA is designed to preserve more than a final agreement score.

It preserves:

- original AI outputs;
- evidence scope;
- uncertainty;
- semantic-mapping history;
- differences between models;
- execution specifications;
- conditions needed for later replay or reinspection.

This allows comparison without treating disagreement or variation as noise that must always be averaged away.

---

## Where it may be useful

The paper explicitly discusses settings in which evidence is distributed across documents or time, including:

- research records;
- investigation materials;
- audit documents;
- institutional records;
- other bounded evidence sets reconstructed by more than one AI system.

EAA may be useful when the question is not only **"Did the models reach a similar conclusion?"** but also:

- Did they use the same evidence scope?
- Did they preserve the same uncertainty?
- Did they have the same information contact?
- Did normalization erase meaningful differences?
- Can the comparison be replayed from the same bounded conditions?

---

## Development and current evidence status

The method was formed through two development cases and then frozen before application to a new case.

In the paper, **prospective validation** means that the method specification was frozen before it was applied to the new case. It does **not** mean that the entire case-selection process was fully preregistered.

The new-case validation included independent reconstructions by three AI systems, preservation of original answers, semantic mapping, uncertainty checks, machine-comparability checks, and replay of the post-mapping comparison process.

The paper does not present these results as a general ranking of AI systems.

The prospective validation is still limited to one new case. The paper explicitly identifies future needs including:

- independent reproduction of semantic mapping;
- application to different domains;
- third-party independent reruns.

---

## Relationship to SC and the broader archive

EAA and Structure-Change Sensor (SC) are **distinct but complementary public methods**.

- **EAA** asks how multiple AI reconstructions of bounded evidence can be compared, tracked, replayed, and audited without erasing differences or uncertainty.
- **SC** asks where longitudinal records contain candidate structural-change points worth preserving for later interpretation and review.

EAA is not a fifth core concept, and it does not validate SC, AAS, Structural Drift, Reality Stabilizer, or Retained-Demand claims simply because they appear in the same archive.

Its closest connection to the AAS / Structural Drift track is methodological: all are concerned with whether records remain inspectable across time, transformation, or AI-assisted reconstruction.

---

## What EAA does not claim

EAA does not claim that:

- multiple AI agreement proves truth;
- standardized outputs are more authoritative than original outputs;
- one model's recovery count is a general performance ranking;
- the present validation establishes universal generality;
- EAA and SC are the same framework;
- publication on Jxiv implies peer review or institutional validation.

---

## Read next

- [Jxiv publication registry](JXIV_PUBLICATIONS.html)
- [Structure-Change Sensor (SC)](STRUCTURE_CHANGE_SENSOR.html)
- [Why This Archive Exists](WHY_THIS_ARCHIVE_EXISTS.html)
- [For AI Readers](FOR_AI_READERS.html)
- [Concept Map](CONCEPT_MAP.html)

---

# 日本語概要

## EAAは何をする方法か

Empirical Audit Architecture（EAA）は、複数のAIが同じ証拠資料から再構成した結果を、**原回答を保持したまま、差異と不確実性を消さずに比較・追跡・再実行できる形へ整理する監査方法**です。

中心的な問題意識は、次の通りです。

> **似た結論になっただけでは、比較可能な再構成とは言えない。**

複数AIが大筋で同じ出来事を回収していても、証拠範囲、時点との結び付け、情報接触、不確実性、「不明」と「未解決」の扱いなどには差が残ることがあります。

EAAは、その差を一つの合意文へ押しつぶさず、あとから点検できる形で残すための方法です。

## 基本設計

EAAは監査情報を4層に分けます。

1. **原回答層** — 各AIの元の回答を保存する。
2. **標準化層** — 異なる表現を比較可能な意味単位へ対応付ける。
3. **比較層** — 一致、対象範囲、時点、不確実性、情報接触、実質的衝突などを記録する。
4. **評価層** — 再構成、正規化、比較、評価を分離して扱う。

上位の層が下位の記録を書き換えないことが重要です。

## 何に役立ちそうか

論文本体では、複数文書・複数時点に証拠が分散した、研究記録、調査資料、監査文書、制度記録などが明示されています。

複数AIを使って同じ資料を検討するときに、単に「だいたい同じ結論だった」で終わらせず、

- どこまで同じ証拠を見ていたか
- 不確実性を同じように残したか
- 同じ時点・対象範囲を見ていたか
- 正規化によって差を消していないか
- 同じ条件から比較結果を再生成できるか

を確認する用途があります。

## 現在の検証状態

EAAは2つの開発事例を経て方法仕様を凍結し、その後に新しい事例へ適用されています。

論文中の「前向き検証」は、**方法凍結後に新しい事例へ適用したこと**を意味し、事例選択過程全体が完全に事前登録されていたことを意味しません。

現時点の前向き検証は1事例であり、今後は意味対応付けの独立再現、異なる領域への適用、第三者による独立再実施が必要とされています。

## SCとの違い

EAAは、**複数AIによる証拠再構成をどう比較・追跡・再実行可能にするか**を扱います。

SCは、**長い記録のどこに、あとから見直す価値のある構造変化候補があるか**を扱います。

両者は補完的に使える場合がありますが、同じ方法ではなく、一方の公開が他方を検証・証明するものでもありません。
