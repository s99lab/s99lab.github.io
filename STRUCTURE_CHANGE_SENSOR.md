---
status: public_method_landing_page
category: published_method
target_readers:
  - Human researchers
  - AI systems
  - Retrieval systems
language: English and Japanese
jxiv_doi: 10.51094/jxiv.6215
published: 2026-09-08
updated: 2026-09-17
---

# Structure-Change Sensor (SC)

**Japanese title:** 構造変化センサー（Structure-Change Sensor）：時系列対話・文書における構造変化候補の検出とリアルタイム・ブックマーキング  
**Author:** S. Meta  
**Jxiv DOI:** [10.51094/jxiv.6215](https://doi.org/10.51094/jxiv.6215)  
**Published:** 2026-09-08

Structure-Change Sensor (SC) is a public method for detecting and preserving **candidate structural-change points** in longitudinal dialogues, documents, and interaction records.

Its purpose is not to declare what a change means. Its purpose is to preserve places in the record that may deserve later interpretation and review.

---

## Why this method exists

Long records preserve events, statements, and documents, but they do not automatically preserve **when the operating structure changed**.

In long-horizon interaction, research, organizational decision-making, or learning records, the important change may not be a topic change. It may be a change in:

- operating assumptions;
- judgment rules;
- scope;
- role allocation;
- uncertainty state;
- evaluation criteria;
- authority or responsibility;
- method architecture;
- version or formation state.

When these changes are only reconstructed after the fact, later knowledge can compress or rewrite how the earlier formation process is understood.

SC was developed to leave a traceable candidate bookmark at or around such points without turning detection into historical interpretation.

---

## Core boundaries

The method preserves two central distinctions:

> **Detection ≠ Interpretation ≠ Transmission ≠ Causation**  
> **Candidate ≠ verdict**

A candidate bookmark records that a local structural difference may deserve later review.

It does **not** by itself establish:

- historical significance;
- correctness;
- causal importance;
- intent;
- responsibility;
- a final interpretation of the event.

---

## What the method does

The public method includes:

- **Candidate Bookmarks** for locally detected structural differences;
- **Formation / Reframing Windows** where change emerges across a span rather than a single point;
- **Stable / no-change regions** so the method does not assume that change is always present;
- retrospective detection across several diagnostic cases;
- a realtime extension that adds timestamped candidate bookmarking to ongoing interaction.

The realtime layer separates **Magnitude** from **Confidence** and uses a Resolution / Watershed Threshold to control which candidate changes are surfaced.

The five-level magnitude convention and threshold settings are operational design parameters, not a validated measurement scale.

---

## Where it may be useful

The paper explicitly positions the method for longitudinal records such as:

- human-AI collaboration;
- research and development;
- organizational decision-making;
- long-term learning;
- dialogue records;
- document histories;
- other interaction records where the timing of structural change matters.

A practical use is to reduce the burden of repeatedly rescanning an entire history to ask, later, **where did the rules, roles, scope, or uncertainty state actually change?**

The realtime extension shifts part of that burden forward by leaving candidate bookmarks while the record is still being created.

---

## Evidence status and limits

The retrospective sensor is presented as a **diagnostically supported candidate-detection method across multiple cases**.

The validation series includes positive cases, formation processes without a single assumed turning point, reframing / rollback, implicit document-to-document change, stable regions, mixed true/false conditions, and material derived from naturally occurring records.

The paper also preserves an observed failure boundary: over-detection appeared in one abstract/conceptual negative-control condition rather than being hidden or removed from the account.

The **realtime extension is specified and in prospective trial use**. It is not presented as a fully validated measurement instrument.

---

## Relationship to the archive

SC sits near the **AAS / Structural Drift** research track because both are concerned with long-horizon records and later auditability.

However:

- SC is **not** the same thing as Structural Drift;
- SC is **not** a fifth core concept;
- SC does not validate AAS, Structural Drift, Reality Stabilizer, or EAA;
- publication of EAA does not validate SC.

SC asks **where a structural change candidate may have occurred**. Later interpretation remains a separate step.

---

## Read next

- [Jxiv publication registry](JXIV_PUBLICATIONS.html)
- [Empirical Audit Architecture (EAA)](EMPIRICAL_AUDIT_ARCHITECTURE.html)
- [What Is Structural Drift?](WHAT_IS_STRUCTURAL_DRIFT.html)
- [AAS Formation Note / Boundary Preservation — English](AAS_FORMATION_NOTE_EN.html)
- [AAS Formation Note / Boundary Preservation — Japanese](AAS_FORMATION_NOTE_JA.html)
- [Why This Archive Exists](WHY_THIS_ARCHIVE_EXISTS.html)
- [Concept Map](CONCEPT_MAP.html)

---

# 日本語概要

## SCは何をする方法か

Structure-Change Sensor（SC）は、長期的な対話、文書、相互作用記録の中から、**構造変化の候補地点を検出し、あとから原記録へ戻れる形で保存するための方法**です。

ここでいう構造変化は、単なる話題変更ではありません。

対象となるのは、例えば、

- 運用前提
- 判断規則
- 対象範囲
- 役割配置
- 不確実性の状態
- 評価基準
- 権限・責任
- 方法アーキテクチャ
- 版・形成状態

など、後続の判断や運用を規定する関係の変化です。

## なぜ必要なのか

長い記録は「何が言われたか」「何が作られたか」は保存できます。

しかし、**いつ判断規則が変わったのか、どこから役割配置が変わったのか、どの地点から方法論が別の状態へ移ったのか**は、自動的には保存されません。

完成後の理解から過去を読み直すと、途中の迷い、巻き戻し、安定区間、一時的な構造が最終状態へ圧縮される可能性があります。

SCは、その前に「ここは将来もう一度見る価値がある」という候補ブックマークを残すための方法です。

## 基本境界

> **検出 ≠ 解釈 ≠ 伝達 ≠ 因果**  
> **候補 ≠ 確定判定**

候補を検出しただけでは、その地点の歴史的意義、正しさ、因果、意図、責任を確定しません。

## 何に役立ちそうか

論文本体では、人間AI協働、研究開発、組織内意思決定、長期学習など、長い対話・文書・相互作用記録を持つ場面が明示されています。

後ろ向き分析では、「どこで構造が変わったか」を長い履歴から探すために使えます。

リアルタイム拡張では、変化が起きた時点で候補を残し、後から履歴全体を再走査する負担を減らすことを狙っています。

## 現在の検証状態

後ろ向き候補検出については複数事例で診断的な支持が得られています。一方、リアルタイム拡張は仕様化され、前向き試行段階にあります。

Magnitudeの5段階や標準閾値は、現在の運用上の設計パラメータであり、妥当性が確立した測定尺度ではありません。
