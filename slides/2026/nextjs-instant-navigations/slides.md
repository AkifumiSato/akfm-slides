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

# Next.js<br><span class="instant-title">Instant</span> Navigations

JavaScriptによるWeb Navigationチューニングの歴史と最高到達点

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.instant-title {
  display: inline-block;
  font-weight: 400;
  text-decoration: underline;
  background: linear-gradient(90deg, #ff6ec4, #7873f5, #4fd1c5, #ff6ec4);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: instant-shine 10s linear infinite;
}

@keyframes instant-shine {
  to { background-position: 300% 0; }
}
</style>

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

## _Next.js <span v-mark="{ color: 'red', type: 'circle' }">Instant</span> Navigations_

---
layout: fact
---

## なぜInstant Navigationsが『最高到達点』なのか？<br>今までと何が違うのか？

---
layout: section
---

section 1

# Navigation最適化の歴史

---

# Classic SSR

〜2010年代前半: フレームワークや言語が様々選べた時代

<div class="flex justify-center mt-6">
  <img src="/classic-ssr.svg" alt="クラシックSSR" class="h-90">
</div>

---

# SPA(Single Page Application)

2010年代半ば〜: バックエンドAPIを分離してクライアントはReactやVue

<div class="flex justify-center mt-6">
  <img src="/spa.svg" alt="SPA" class="h-90">
</div>

---

# SSR(Server Side Rendering)

2016年頃: ReactやVueでSSR

<div class="flex justify-center mt-6">
  <img src="/ssr.svg" alt="SSR" class="h-90">
</div>

---

# SSG(Static Site Generation)

2018年頃: 「SSRが遅い」を解決する手段としての静的化

<div class="flex justify-center mt-6">
  <img src="/ssg.svg" alt="SSG" class="h-90">
</div>

---

# Streaming SSR

2022年頃: HTTP Streamingの活用

<div class="flex justify-center mt-6">
  <img src="/streaming-ssr.svg" alt="Streaming SSR" class="h-90">
</div>

---
layout: fact
---

## 2026年、Instant Navigationsへ...

---
layout: section
---

section 2

# Instant Navigations

---

# 従来のNavigation最適化の課題

最適解と手段がケースバイケース

- 前提: 完全に静的化できるならそれが最適
- 課題
  - 静的か動的かで実装方法が異なる
  - その時は良くても恒久的に静的にできるとは限らない
  - 開発者側に高度な理解と判断が求められた

---

# Instant Navigationsとは

Instant Navigations=瞬時のNavigation

- Navigation"s"=Hard Navigation, Soft Navigation
- Next.jsのCache Componentsで提唱されたコンセプト（next@17でデフォルトに）

ref: https://x.com/aurorascharff/status/2107837635792146621

---

# Instant Navigations

PPR + Cache + Prefetch

<div class="flex justify-center mt-6">
  <img src="/instant-navigations.svg" alt="Instant Navigations" class="h-90">
</div>

---
layout: fact
---

## Instant Navigationsを構成する技術的要素は大きく３つ

---

# PPR(Partial Pre-Rendering)

静的レンダリングの活用による高速化

ページの外側を静的に・部分的に動的にレンダリング

<div class="flex justify-center mt-10">
  <img src="/ppr.png" alt="PPR">
</div>

---
transition: fade
---

# Cache戦略

Cache活用による高速化

- `"use cache"`でコンポーネントや関数のキャッシュ可能を宣言
- Opt-in型なRSCの拡張設計、**開発者体験をトレードオフにしない**
- `cacheLife(profile)`や`cacheTag(tagName)`などでCacheの寿命を制御

---
transition: fade
---

# Cache戦略

Cache活用による高速化

<div class="flex justify-center mt-10">
  <img src="/rsc-doors.png" alt="RSC" class="h-80">
</div>

---

# Cache戦略

Cache活用による高速化

<div class="flex justify-center mt-10">
  <img src="/cache-doors.png" alt="Next.js Cache Door" class="h-80">
</div>

---

# Prefetch戦略

Prefetchによる高速化

- 静的な部分・Cache部分はPrefetchしてもサーバー負荷にならない（なりづらい）
- `partialPrefetching`と呼ばれる、細粒度なPrefetch戦略
  - 細かくすることでprefetchの無駄を防ぐ

TBW: Linkやawait prefetchの実装例

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
