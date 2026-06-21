---
theme: default
background: https://images.unsplash.com/photo-1549074862-6173e20d02a8?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
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

Reactチームの価値観考察

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

# Reactのミッション

- UXの抽象化
  - コンポーネント指向
  - 純粋性
  - JSX
- 実現すべきUX要件が時代ごとに変わってきてる
  1. インタラクション
  2. SSR
  3. 非同期UI
- AI時代にこそ、Reactの哲学理解が非常に重要になる

---

# UI = ?

- UI=f(state)
- await UI=await f(await state)
- UI=f(data)(state)

---

# UX哲学

- 即時フィードバック（楽観的UI、transition）
- 非同期UI（Suspense）
  - fallbackは必須
  - Streaming SSRなど、初期ロード時の体験は段階的になることを想定してる
  - Suspense Listから見てもCLS対策は重視してる
  - ポップコーンUIはNG

---

# 設計哲学

- 人間工学
- 後方互換性
- JSX
- 補足: バンドルサイズ

---
layout: section
---

# End
