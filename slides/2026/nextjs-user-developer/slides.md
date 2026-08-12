---
theme: default
# https://unsplash.com/ja
background: https://images.unsplash.com/photo-1742604004678-2f91a55970cc?q=80&w=2602&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
class: text-center
highlighter: shiki
lineNumbers: false
colorSchema: "dark"
drawings:
  persist: false
transition: slide-left
title: Next.js, User, Developer - Next.jsの価値観に迫る
routerMode: hash
mdc: true
---

# Next.js, User, Developer

Next.jsの価値観に迫る

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

## 今日話すこと: 『Next.jsのテーマ』

---
layout: section
---

# Next.jsの歴史

---
transition: fade
---

# Next.jsの歴史

| 年      | 概要            | 詳細                                |
| ------- | --------------- | ----------------------------------- |
| 2013/05 | Reactが公開     |                                     |
| 2016/10 | Next.jsが公開   | 今で言うPages Router                |
| 2018~   | Gatsby.jsの台頭 | SSGが注目される                     |
| 2019/07 | Next.js@v9.0    | dynamicルーティング・Typescript対応 |
| 2020/03 | Next.js@v9.3    | SSG対応                             |
| 2020/07 | Next.js@v9.5    | ISR対応                             |

---

# Next.jsの歴史

| 年      | 概要           | 詳細                                               |
| ------- | -------------- | -------------------------------------------------- |
| 2022/05 | App Router発表 | [Layouts RFC](https://nextjs.org/blog/layouts-rfc) |
| 2022/10 | Next.js@v13.0  | App Router Beta                                    |
| 2023/05 | Next.js@v13.4  | App Router Stable                                  |
| 2024/10 | Next.js@v15.0  | `params`などの破壊的変更、PPRなど                  |
| 2025/10 | Next.js@v16.0  | Cache Components                                   |
| 2025/10 | Next.js@v16.3  | Instant Navigationなど                             |

---

# Pages Routerの立ち位置

一応現役という扱いだが...

- 実質的非推奨
  - 明示的に「非推奨」と宣言するのは、メリットよりデメリットが多い
  - 脆弱性サポートなどはされてるが、機能開発は皆無
- App Routerへの移行は、段階的に可能だが難易度は高い

---

# App Routerの立ち位置

TBW

---

# App Router（Cache Components）の立ち位置

TBW

---

# Next.jsの進化≒変化

「Next.jsはよく変わるフレームワーク」？

TBW

---
layout: section
---

# 『Next.jsのテーマ』

---
layout: section
---

# 1. デフォルトで高いパフォーマンス

---
layout: section
---

# 2. 優れた開発者体験

---
layout: section
---

# 他フレームワークとの比較

---
layout: section
---

# まとめ

---
layout: section
---

# End
