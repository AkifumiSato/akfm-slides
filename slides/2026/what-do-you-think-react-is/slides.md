---
theme: default
background: https://images.unsplash.com/photo-1648316206574-544f1448f5a6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
class: text-center
highlighter: shiki
lineNumbers: false
colorSchema: "dark"
drawings:
  persist: false
transition: slide-left
title: 君はReactを何だと思ってるんだ
routerMode: hash
mdc: true
---

# 君はReactを何だと思ってるんだ

Reactを構成する4つの知覚的視座

---

# Profile

<div class="pb-5">
  <img src="https://avatars.githubusercontent.com/u/25711332?v=4" width="100" height="100">
</div>

```jsonc
// profile.jsonc
{
  "name": "佐藤 昭文",
  "alias": ["akfm_sato", "あっきー"],
  "job": ["フロントエンドエキスパート", "技術顧問"],
  "tags": ["Next.js", "React", "UX"],
  "sns": {
    "x": "akfm_sato",
    "zenn.dev": "akfm",
  },
}
```

---
layout: fact
---

## AI時代だからこそ、概念的な理解が重要

---
layout: fact
---

## Reactとは何なのか、様々な視座で考えてみよう

---

# Table of Contents

Reactを構成する4つの知覚的視座について

1. **存在目的**: なぜ存在するのか
2. **要件**: 何を成し遂げたいのか
3. **ユーザー**: 誰が使うのか
4. **モデリング**: どう構造化するのか

---
layout: section
---

# 1. 存在目的

なぜ存在するのか

---
layout: quote
---

_React is a JavaScript library for building user interfaces._<br>
_（Reactは、ユーザーインターフェースを構築するためのJavaScriptライブラリです。）_

[README.md - Github](https://github.com/react/react)

---

# よくある誤解: ReactとUI

Q. ReactってUIライブラリじゃなくなった？

A. No、RSCでよく誤解されるが<span class="font-bold" v-mark="{ at: 1, color: 'red' }">UI構築</span>に含まれる範囲が時代とともに変わった

1. SSRやSSGの台頭により、Reactをサーバーで動かすことが増えた
2. フレームワーク側の実装だけではサーバー活用に限界があった
3. RSCの誕生

---

# よくある誤解: Reactとフレームワーク

Q. React単体でもフレームワークとして十分？

A. （公式的には）No、[まずはフレームワーク使用の検討を](https://ja.react.dev/learn/build-a-react-app-from-scratch#consider-using-a-framework)

> このアプローチを選ぶ際の重要なトレードオフとして、これがその場限りの独自フレームワークを構築しているのと変わらないのだ、ということを認識してください。

---

# よくある誤解: Reactとバックエンド

Q. （RSCについて）Reactがバックエンドも担う時代？

A. No、<span class="font-bold" v-mark="{ at: 1, color: 'red' }">サーバー≠バックエンド</span>でサーバーと統合しやすくなった

- バックエンドが外部APIかDBかはRSCが関与しない部分
- メタフレームワークによって考え方が異なる部分になると思われる

---
layout: section
---

# 2. 要件

何を成し遂げたいのか

---

# 時代とともに変わるReactの要件

UIの進化に伴い、Reactに求められる課題解決も変わってきてる

| 年代     | 主な関心                 | Reactの発展          |
| -------- | ------------------------ | -------------------- |
| 2013年〜 | インタラクション         | hooks                |
| 2018年〜 | パフォーマンス           | Concurrent Rendering |
| 2022年~  | データフェッチ、非同期UI | RSC, Async React     |

---

# 2013年〜: インタラクション

当時の課題: インタラクションを伴うUIの実装

- 宣言的UIやJSXにより秩序ある設計がもたらされた
- hooksの登場により、Classコンポーネントのつらみが払拭

---

# 2018年〜: パフォーマンス

当時の課題: レンダリングパフォーマンスが問題になりがち

- Concurrent Renderingにより高度なチューニングが可能に
- 非制御系formライブラリの登場
- 状態管理もコロケーション指向でレンダリング範囲が適正化

---

# 補足: バンドルサイズ

_「推測するな計測せよ」_

- バンドルサイズとパフォーマンスは異なる
- Reactは現実的なパフォーマンスを重視してる
- 他フレームワークにとってバンドルサイズは差別化しやすい

---

# 2022年~: データフェッチ

当時の課題: データフェッチとReactを切り離して考える認知負荷とパフォーマンス

- Reactチーム「Reactの課題はサーバーを活用できてないこと」
- RSCにより設計負荷・パフォーマンス・セキュリティが向上
- 世間的に受け入れられるのに長い時間がかかってる

---

# 2022年~: 非同期UI

現在の課題: 非同期的なUIの実装負荷が高い

- 非同期UIをうまく制御できないと[ポップコーンUI](https://zenn.dev/akfm/articles/popcorn-ui-anti-pattern)になりがち
- `<Suspense>`や`useTransition()`で非同期的なUI構築が一定容易になったが、まだ理想的でない
- Reactチーム「エコシステム含め改善していこう」 -> <span class="font-bold" v-mark="{ at: 1, color: 'red' }">Async React</span>

---
layout: section
---

# 3. ユーザー

誰が使うのか

---
layout: quote
---

> 独りで開発していても、数千の開発者と共同開発していても、React の開発体験は同じです。個人、チーム、大規模な組織によって書かれたさまざまなコンポーネントを、シームレスに組み合わせながら開発できる。それが React の設計理念です。

[ja.react.dev](https://ja.react.dev/)

---

# 大規模開発の難しさ

Metaのような異次元な大規模開発まで見据えた時の難しさ

- スケーラブルな設計: 大規模開発に適用可能な設計
- 後方互換性: 最小限のアップデートコスト
- 安定性: リリース物が十分にテストされ安定してること

---
layout: section
---

# 4. モデリング

どう構造化するのか

---

# UI = ?

UIを指揮で表すモデリングも変わり続けてる

- 状態をどう扱うか
- データフェッチをどう統合するか
- 非同期UIをどう表現するか

---
layout: statement
---

## React初期: `UI=f(state)`

---
layout: statement
---

## RSC: `UI=f(data)(state)`

---
layout: statement
---

## Async React: `await UI=await f(await state)`

---
layout: section
---

# まとめ

---

# Reactとは何なのか

Reactを構成する4つの知覚的視座について

1. 存在目的: UI構築のためのライブラリ（orフレームワーク）
2. 要件: インタラクション・パフォーマンス・データフェッチ・非同期UI
3. ユーザー: 個人から大規模開発まで
4. モデリング: `UI=f(data)(state)`, `await UI=await f(await state)`

---
layout: section
---

# End
