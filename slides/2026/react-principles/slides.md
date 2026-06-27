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
title: React哲学
routerMode: hash
mdc: true
---

# React哲学

Reactの価値観を構成する4つの知覚的視座

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

# 概要: React哲学

Reactの価値観を構成する4つの知覚的視座についての自論

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
layout: fact
---

_React is a JavaScript library for building user interfaces._<br>
_（Reactは、ユーザーインターフェースを構築するためのJavaScriptライブラリです。）_

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

1. 2013年〜2017年頃: インタラクション
2. 2018年〜2021年頃: パフォーマンス
3. 2022年~: 非同期UI（シームレスな体験）

---

# 非同期UI

TBW

---

# 補足: パフォーマンスとバンドルサイズ

TBW

---

memo: 以下メモ

---

# 中心的なモデリング: UI = ?

- UI=f(state)
- await UI=await f(await state)
- UI=f(data)(state)

---

# フレームワーク要件: UI哲学

- 実現すべきUI要件が時代ごとに変わってきてる
  1. インタラクション
  2. SSR
  3. 非同期UI
- 非同期UI（Suspense）
  - fallbackは必須
  - Streaming SSRなど、初期ロード時の体験は段階的になることを想定してる
  - Suspense Listから見てもCLS対策は重視してる
  - ポップコーンUIはNG
  - 即時フィードバック（楽観的UI、transition）
- バンドルサイズは比較的Want要件

---

# フレームワーク要件: 開発要件

- 後方互換性
- 大規模開発に適用可能な設計

---
layout: section
---

# End
