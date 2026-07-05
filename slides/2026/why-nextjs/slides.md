---
theme: default
# https://unsplash.com/ja
background: https://images.unsplash.com/photo-1749562816176-40795c166f34?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
class: text-center
highlighter: shiki
lineNumbers: false
colorSchema: "dark"
drawings:
  persist: false
transition: slide-left
title: なぜNext.jsを使うの？
routerMode: hash
mdc: true
---

# なぜNext.jsを使うの？

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
layout: intro
---

## 「なぜフレームワークを使うの？」

---
layout: quote
---

> フレームワークとは、新しいアプリケーションの開発をより効率的にする再利用可能なソフトウェアコンポーネントを集めたものです。

---
layout: intro
---

## 「なぜNext.jsを使うの？」

---
layout: fact
---

## 一番多い解答「みんなが使ってるから」

---

# Next.jsを使うメリット

様々な観点で考えるNext.jsを使うメリット

- 精神的メリット: 「みんなが使ってるから」
- 開発生産性メリット: 関連ライブラリや知見が世の中に豊富で高速な開発に期待できる
- 技術的メリット: <span v-mark="{ color: 'red' }" class="font-bold">デフォルトで高いパフォーマンス</span>

---

# Next.jsを使うデメリット

様々な観点で考えるNext.jsを使うデメリット

- 学習コスト
  - 「フレームワークがやってること」を知らなくていい
  - 「フレームワークでできること」は知る必要がある
- 安定性: Next.js自体が複雑なため、バグに遭遇すると解決が困難
- プラットフォーム問題: デプロイ先によってパフォーマンスや構築難易度に大きな差がある

<span v-mark="{ color: 'red' }" class="font-bold">「学習コストが高い」「複雑」「ベンダーロックイン」とは一概に言えない</span>

---

# まとめ

「なぜNext.jsを使うの？」

- 精神的メリット: 「みんなが使ってるから」
- 開発生産性メリット: 関連ライブラリや知見が世の中に豊富
- 技術的メリット: デフォルトで高いパフォーマンス

ただし人によってトレードオフが伴う。<span v-mark="{ color: 'red' }" class="font-bold">銀の弾丸ではない</span>

---
layout: section
---

# End
