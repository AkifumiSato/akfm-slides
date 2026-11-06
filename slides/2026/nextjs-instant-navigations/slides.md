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
title: Next.js Instant Navigations - Navigation最適化の最高到達点
routerMode: hash
mdc: true
---

# Next.js<br><span class="instant-title">Instant</span> Navigations

Navigation最適化の最高到達点

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

## _Next.js <span v-mark="{ color: 'red', type: 'underline' }">Instant</span> Navigations_

---

# Outline

なぜ『最高到達点』なのか？

1. Hard Navigation最適化の歴史
2. Instant Navigations
3. Instant Navigationsを構成する技術

---
layout: section
---

section 1

# Hard Navigation最適化の歴史

---
transition: fade
---

# 0. 従来のSPAの課題

2010年代半ば〜

SPAの登場により、<span v-mark="{ color: 'red', type: 'underline' }" class="font-bold">Soft Navigation</span>という概念が誕生

- Hard Navigation: ブラウザ標準の仕組みでドキュメント全体を読み直すNavigation
- Soft Navigation: History API等を利用して、必要な部分だけJavaScriptで差し替えるNavigation

しかし、ReactやVueで実装したSPAはHard Navigationが疎かになりがちだった

---

# 0. 従来のSPAの課題

2010年代半ば

<div class="flex justify-center mt-6">
  <img src="/spa.svg" alt="SPA" class="h-90">
</div>

---
transition: fade
---

# 1. Pages Router

SPAのHard Navigation課題解決

- React系フレームワークとしてルーティングやbuild周りなど、基盤実装を提供
- SPAにおける<span v-mark="{ color: 'red', type: 'underline' }" class="font-bold">Hard Navigation課題を解決</span>すべく、Server Side Rendering（SSR）を採用
- 2016年にはStatic Site Generation（SSG）もサポート

---
transition: fade
---

# 1. Pages Router

SSR

<div class="flex justify-center mt-6">
  <img src="/ssr.svg" alt="SSR" class="h-90">
</div>

---

# 1. Pages Router

SSG

<div class="flex justify-center mt-6">
  <img src="/ssg.svg" alt="SSG" class="h-90">
</div>

---
transition: fade
---

# 2. App Router(Legacy)

SSRの進化とスケーラブルな設計

- RSCサポートなフレームワークとしてNext.jsを再設計
  - データフェッチコロケーションによるスケーラブルな設計
  - バンドルサイズや処理の効率化
- <span v-mark="{ color: 'red', type: 'underline' }" class="font-bold">Streaming SSR</span>によりSSRのボトルネックを分離可能に

---

# 2. App Router(Legacy)

Streaming SSR

<div class="flex justify-center mt-6">
  <img src="/streaming-ssr.svg" alt="Streaming SSR" class="h-90">
</div>

---
transition: fade
---

# App Routerの不評

「優れた開発者体験」の破綻

- Next.jsのコンセプト: **デフォルトで高いパフォーマンス、優れた開発者体験**
- App Router初期の思想: CacheやSSGをデフォルトで積極的に活用
  - Cacheがデフォルトで有効＆暗黙的で認知負荷が高い
  - ドキュメントの不足
  - devモードとproductionで挙動が違う
  - etc...

---
transition: fade
---

# 3. App Router(Cache Components)

より直感的に、よりRSCらしく、より再粒度に

- `"use cache"`によるOpt-in型なCache設計
- 動的処理に`<Suspense>`必須化によりTTFBやFCPを高速化
- <span v-mark="{ color: 'red', type: 'underline' }" class="font-bold">Partial Pre-Rendering</span>(PPR)による細粒度なレンダリング戦略

---
transition: fade
---

# 3. App Router(Cache Components)

Partial Pre-Rendering

<div class="flex justify-center mt-10">
  <img src="/ppr.svg" alt="PPR" class="h-90">
</div>

---

# 3. App Router(Cache Components)

Cache戦略: `"use cache"`はCacheへのドア

<div class="flex justify-center mt-10">
  <img src="/cache-doors.png" alt="Next.js Cache Door" class="h-72">
</div>

---
layout: fact
---

## Next.jsの歴史はHard Navigation中心<br>Soft Navigationは若干疎かだった

---
layout: section
---

section 2

# Instant Navigations

---

# Instant Navigationsとは

これまで通り高速なHard Navigation、SPAのような高速なSoft Navigation

- Next.jsのCache Componentsに含まれる機能群
- PPRやCache、Prefetchなどを発展させ、Soft Navigationを高速化

---
layout: fact
---

## [Demo](https://nextjs-cache-components-demo.vercel.app/instant-navigations)

https://github.com/AkifumiSato/nextjs-cache-components-demo

---
layout: fact
---

## Instant NavigationsはいわゆるSPA回帰**ではない**<br>（もっと高度に最適化されてる）

---
layout: section
---

section 3

# Instant Navigationsを<br>構成する技術

---

# Instant Navigationsを構成する技術

これまでNext.jsが取り組んできた技術発展の延長線上

- **Static Shell活用**: PPRのStatic Shell活用
- **Segment Cache**: クライアントCacheの効率化
- **Partial Prefetching**: 細粒度なPrefetchのコントロール

---

# Static Shell活用

PPRのStatic ShellはSoft Navigationでも積極的に活用

<ul>
  <li>PPRではbuild時にStatic Shell（HTMLとRSC Payload）を生成</li>
  <li>Soft NavigationではRSC Payloadをやりとりする</li>
  <li>Staticなのでprefetchしてもサーバー負担が少なく、クライアントサイドでも使いまわしやすい</li>
</ul>
<div class="flex justify-center w-full">
  <img src="/ppr.svg" alt="PPR" class="h-80">
</div>

---

# Segment Cache

Cache ComponentsではクライアントサイドのCacheを細粒度に管理

- 従来URL単位で行ってたクライアントCacheをSegment単位（e.g. `/chat/[id]`）に再実装
- Cacheの再利用性が高まった

<div class="flex justify-center mt-10">
  <img src="/segment-cache-request.png" alt="Segment Cache Request" class="h-50">
</div>

---
transition: fade
---

# Partial Prefetching

`partialPrefetching`と呼ばれる、細粒度なPrefetch戦略

- Static Shellは積極的にPrefetch
- Dynamic ContentはPrefetchを細かく制御したい
  - Opt-in方式: `<Link>`の`prefetch={true}`でOpt-in
  - レンダリング範囲: Prefetch時にどこまでレンダリングするかも制御可能

---

# Partial Prefetching

Prefetch時にどこまでレンダリングするか細かく制御できる

```tsx
import { navigation, prefetch } from "next/cache";

async function ProductStock({ id }: { id: string }) {
  // ⚠️ build時は解決しない、prefetch時に解決
  await prefetch();

  return <StockView stock={await getStock(id)} />;
}

async function ProductRecommendations({ id }: { id: string }) {
  // ⚠️ build時もprefetch時も解決しない、navigation時に解決
  await navigation();

  return <RecommendationsView recommendations={await getRecommendations(id)} />;
}
```

---
transition: fade
---

# Soft Navigationの進化（Next.js）

Dynamic Contentを含むページのSoft Navigation時処理

<div class="flex justify-center mt-10">
  <img src="/instant-navigation-sequence.svg" alt="Instant Navigation Sequence" class="h-90">
</div>

---

# Soft Navigationの進化（Next.js・SPA）

Dynamic Contentを含むページのSoft Navigation時処理

<div class="flex justify-center mt-10">
  <img src="/spa-vs-instant-navigations.svg" alt="Instant Navigation vs SPA" class="h-90">
</div>

---
layout: section
---

section 5

# Outro & Message

---

# Outro: Instant Navigations

Instant Navigationsは今実現できる最高のNavigation

- ユーザーにとって瞬時のNavigationを実現
  - Next.jsにおいて疎かになりがちだったSoft Navigationを極限まで最適化
  - 技術的要素: Static Shell活用, Segment Cache, Partial Prefetching
- Next.jsのコンセプトである「_デフォルトで高いパフォーマンス、優れた開発者体験_」に相応しい機能設計

---

# 最後に: AI時代だからこそ

AI時代だからこそ、Instant Navigationsの話をしたかった

- AIで実装コストが下がったからこそ、UXの差は現れやすい
- NavigationのUXは非常に重要
- より良いUX・より良いNavigationについてみんなで考えていきましょう

---
layout: section
---

# End
