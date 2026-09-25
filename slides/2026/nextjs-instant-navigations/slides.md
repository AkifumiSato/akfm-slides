---
theme: default
# https://unsplash.com/ja
background: https://images.unsplash.com/photo-1650541971908-71f0585f60f1?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
class: text-center
highlighter: shiki
lineNumbers: false
colorSchema: "dark"
drawings:
  persist: false
transition: slide-left
title: Next.js Instant Navigations - JavaScriptによるWeb Navigationチューニングの歴史と最高到達点
routerMode: hash
mdc: true
---

# Next.js<br>**Instant** Navigations

JavaScriptによるWeb Navigationチューニングの歴史と最高到達点

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

## Next.js <span v-mark="{ color: 'red', type: 'underline' }">Instant</span> Navigations

---
layout: fact
---

## _瞬時のNavigation_

---
layout: fact
---

## Instant Navigations:<br>Next.jsのコンセプトや機能群を意味する

---
layout: fact
---

## なぜInstant Navigationsが『最高到達点』なのか？<br>今までと何が違うのか？

---
layout: section
---

section 1:

# Navigation最適化の歴史

---

# クラシックSSR

〜2010年代前半

- サーバー側でページをレンダリングするのみ
- JSP(Java), PHP, Ruby on Rails, etc...
- JavaScriptは最小限にして、一部装飾のために使う程度

---

# SPA(Single Page Application)

2010年代半ば〜

- JavaScriptの進化
- ネイティブアプリの出現も相まったバックエンドAPI分離の流れ
- 様々なトレードオフ
  - Hard Navigation問題
  - セキュリティ問題
  - エコシステムの未成熟
  - etc...

---

# SSR(Server Side Rendering)

2016年、Next.js Pages Routerの登場

- Hard Navigation問題を高速化
- Server Centric回帰
- 代わりに、Soft Navigationが少し遅くなった
  - クラシックSSR < SSR < SPA

---

# SSG(Static Site Generation)

2018年頃、Gatsby.jsの台頭（2018年頃）

- 静的化することでSPA, SSRの問題の多くを解決
  - 高速なHard Navigation/Soft Navigation
  - フロントエンド側のセキュリティ向上
  - データフェッチライフサイクルの定義
- しかし、現実的なWebアプリケーションには向かないアーキテクチャだった

---

# Streaming SSR

2022年、Next.js App Routerの登場

- Hard Navigation/Soft NavigationをStreaming対応
  - UIの段階的表示が簡単に実装できるようになった
  - Next.js+SWRで行うパフォーマンス最適化などが不要に
- 以前としてSSR or SSGどちらにすべきかは開発者に委ねられた

---

# PPR(Partial Pre-Rendering)

2023年、PPRの発表

- 1つのページ内で外側を静的に・部分的に動的にという構成が可能に
  - SSG/SSR論争に終止符
  - 理論上非常に高速だと思われる
- 従来のページ志向なアーキテクチャではキャッシュの内部活用が非効率だが、改善は困難だった

---
layout: fact
---

## 2026年、Instant Navigationsへ...

---
layout: section
---

section 2:

# Instant Navigations

---
layout: section
---

# End

---

# memo

- Instant Navigations(10m)
  - メモ: デモ作ってナビゲーションを比較しても良いかも
  - Motivation
    - 従来のSPA相当のソフトナビゲーション体験
    - ハードナビゲーション時はStreaming SSR
    - ハード・ソフトナビゲーションどちらでも高いパフォーマンス体験
  - 定義
    - Cache Componentsで実現される機能名称
      - PPR,use cache,dynamicIOの統合
    - 一応オプトアウトが可能
    - demo挟む(プロダクトページのサンプル作る)
  - Prefetch App Shell
    - App Shellはstaticなのでprefetchしまくれる
    - 並列に多数リクエスト走る(メリデメあり)
  - Streaming
    - 1HTTPリクエストで完結する
    - Astroとかとは違う
  - Caching
    - App Shell(use cacheが含まれる)
    - 末端もキャッシュ可能
    - use cache remoteとか色々、高度なオプションもある
- 考察: Instant NavigationsはNext.jsらしい(3m)
  - デフォルトで高いパフォーマンス、優れた開発者体験
  - (過去の機能との比較など)
- トレードオフ(2m)
  - Vercelのアーキテクチャを模倣しないと、パフォーマンスは再現が難しい
  - 他フレームワークの追従が困難(差別化とも言える)
- まとめ(2m)
