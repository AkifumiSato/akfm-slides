---
theme: default
background: https://images.unsplash.com/photo-1761645503059-1d38483343df?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
class: text-center
highlighter: shiki
lineNumbers: false
colorSchema: "dark"
drawings:
  persist: false
transition: slide-left
title: 「Next.jsの考え方」は何が足りないのか
mdc: true
---

# 「Next.jsの考え方」は<br>何が足りないのか

_本を中心に開発を設計する_

in Commune

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
  "job": "フロントエンドエキスパート",
  "tags": ["Next.js", "React", "テスト", "リーン開発"],
  "sns": {
    "x": "akfm_sato",
    "GitHub": "AkifumiSato",
    "zenn.dev": "akfm",
  },
}
```

---

# 「Next.jsの考え方」は何が足りないのか

Agenda

1. 「Next.jsの考え方」とは
1. 「Next.jsの考え方」の目的と運用設計
1. Communeで見えてきた混乱ポイントと改訂
    - `"use client"`/`"use server"`の混乱
    - UIのツリー構造設計

---
layout: fact
---

## 「Next.jsの考え方」

---

TBW

---
layout: fact
---

## 「Next.jsの考え方」の目的

---

# 「Next.jsの考え方」の目的

なぜ僕が多くの時間をかけてこの本を書き、改訂を続けてるのか

- Next.jsアプリケーションにおける設計思想やベストプラクティスの形式知化
  - 無料にすることでアクセスが容易で最新情報に追従した内容にできる
  - 僕の関わるチーム・関わらないチーム双方からのフィードバックで永続的に洗練できる

---

TBW

---
layout: fact
---

## Communeからのフィードバックと改訂

---

TBW

---

# Memo

https://github.com/AkifumiSato/zenn-article/pull/81/changes#diff-036d4c2b13e35ed7603202da55e974ac52aae75b063c568b38ca413b957a9a9e