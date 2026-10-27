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

## _Next.js <span v-mark="{ color: 'red', type: 'underline' }">Instant</span> Navigation<span v-mark="{ color: 'orange', type: 'circle' }">s</span>_

---
layout: fact
---

## なぜ『最高到達点』なのか？

---
layout: section
---

section 1

# Navigation"s"

---

# Navigation"s"

SPAの登場以降、WebのNavigationには2つの方式が存在する

- **Hard Navigation**: ブラウザ標準の仕組みでドキュメント全体を読み直すNavigation
- **Soft Navigation**: History API等を利用して、必要な部分だけJavaScriptで差し替えるNavigation

---
layout: fact
---

## Navigationの最適化＝<span v-mark="{ type: 'underline', color: 'red' }">レンダリング戦略の最適化</span>

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

# レンダリング戦略ごとの課題解決

最適解と手段がケースバイケース

| 手法          | 解決した課題                           | トレードオフ                       |
| ------------- | -------------------------------------- | ---------------------------------- |
| Classic SSR   | -                                      | 画面遷移のたびにフルリロードが走る |
| SPA           | 画面遷移のフルリロード、関心ごとの分離 | LCPが低速、公開APIが必要           |
| SSR           | SPAのLCP課題や公開API                  | TTFBが遅くなりがち                 |
| SSG           | SSRのTTFB                              | Webアプリケーションには不向き      |
| Streaming SSR | SSRのTTFBとLCPの両立                   | CDN活用が困難                      |

---

# 最適解: SSG or Streaming SSR

これらの分断は大きかった

| 観点            | SSG | Streaming SSR |
| --------------- | --- | ------------- |
| Dynamic Content | ❌  | ✅            |
| TTFB（CDN活用） | ✅  | ❌            |
| LCP             | ✅  | ✅            |

※コンテンツにもよるため、上記は参考比較

---
layout: section
---

section 2

# Next.js App Router

---
layout: fact
---

## Next.jsのコンセプト<br>_「デフォルトで高いパフォーマンス、優れた開発者体験」_

---
layout: fact
---

## App Router初期の思想<br>「できるだけSSGに、必要に応じてStreaming SSRに」

---
transition: fade
---

# App Routerの不評

分断したソリューションと「デフォルトで高いパフォーマンス」の掛け合わせによる破綻

- 開発者の認識「デフォルトで動的」 vs Next.js「デフォルトで静的」
- Cacheがデフォルトで有効＆暗黙的で認知負荷が高い
- ドキュメントの不足
- devモードとproductionで挙動が違う
- etc...

---

# App Routerの不評

私見: RSCとページ単位の思想がそもそも相性がよくなかった

- RSC: サーバー処理レベルでコンポーネント志向
- 従来のレンダリング戦略: アプリケーションやページ単位で考えるもの

RSCと親和性が高い、<span class="font-bold" v-mark="{ type: 'underline', color: 'red' }">より細粒度なレンダリング戦略</span>が必要

---
layout: section
---

section 3

# Partial Pre-Rendering

---
transition: fade
---

# Partial Pre-Rendering(PPR)

ページ単位で静的・動的を選ぶのではなく、UI境界ごとに選ぶ形に

<div class="flex justify-center mt-10">
  <img src="/ppr.svg" alt="PPR" class="h-90">
</div>

---
transition: fade
---

# Partial Pre-Rendering(PPR)

開発者は動的な要素を`<Suspense>`で囲うだけ

```tsx
export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div>
      <Suspense fallback={<ProductHeroSkeleton />}>
        <ProductSummary params={params} />
      </Suspense>
      <RecommendationsSection>
        <Suspense fallback={<RecommendationsSkeleton />}>
          <ProductRecommendations params={params} />
        </Suspense>
      </RecommendationsSection>
    </div>
  );
}
```

---

# Partial Pre-Rendering(PPR)

SSGやStreaming SSRのいいとこ取り

| 観点            | PPR | SSG | Streaming SSR |
| --------------- | --- | --- | ------------- |
| Dynamic Content | ✅  | ❌  | ✅            |
| TTFB（CDN活用） | ✅  | ✅  | ❌            |
| LCP             | ✅  | ✅  | ✅            |

※コンテンツにもよるため、上記は参考比較

---

# PPRのトレードオフ

PPRもまた、銀の弾丸ではない

- 現状Next.js固有の技術
- フレームワーク側の実装が複雑
- CDNを活用するにはプラットフォーム側のサポートが必要

---
layout: fact
---

## PPRでNavigation最適化はさらに進化した

---
layout: fact
---

## これで完璧？<br>→No

---

# PPRに残る課題

Dynamic Contentが速くなるわけじゃない

- Soft Navigation時に**通信待ち**が発生する
- Hard / Soft Navigation時に**データ取得待ち**が発生する

---
layout: fact
---

## PPRをベースにNavigationsのさらなる最適化へ

---
layout: section
---

section 4

# Instant Navigations

---

# Instant Navigationsとは

これまで通り高速なHard Navigation、SPAのような高速なSoft Navigation

- Next.jsのCache Componentsに含まれる機能群（next@17でデフォルトに）
- PPR + Cache + Prefetchにより、高速なNavigation"s"を実現

ref: https://x.com/aurorascharff/status/2107837635792146621

---
layout: fact
---

## [Demo](https://nextjs-cache-components-demo.vercel.app/instant-navigations)

https://github.com/AkifumiSato/nextjs-cache-components-demo

---

# Instant Navigations

PPRをベースにCache + Prefetchで全体をさらに最適化

<div class="flex justify-center mt-6">
  <img src="/instant-navigations.svg" alt="Instant Navigations" class="h-90">
</div>

---

# PPRとInstant Navigations

Prefetchで「通信待ち」を、Cacheで「データ取得」を、クリックより前に解消する

<div class="flex justify-center mt-6">
  <img src="/ppr-vs-instant-navigations.svg" alt="PPR vs Instant Navigations" class="h-90">
</div>

---
transition: fade
---

# Cache戦略

Cache活用による高速化

- `"use cache"`でコンポーネントや関数のCacheを宣言
- Opt-in型のRSCの拡張設計、従来のApp Routerから**開発者体験を改善**
- `cacheLife(profile)`や`cacheTag(tagName)`などでCacheの寿命を制御

---
transition: fade
---

# Cache戦略

RSCにおいてディレクティブはServer/Clientのドアの役割

<div class="flex justify-center mt-10">
  <img src="/rsc-doors.png" alt="RSC" class="h-72">
</div>

---
transition: fade
---

# Cache戦略

`"use cache"`はCacheへのドア

<div class="flex justify-center mt-10">
  <img src="/cache-doors.png" alt="Next.js Cache Door" class="h-72">
</div>

---

# Cache戦略

実装イメージ

```tsx
import { cacheLife, cacheTag } from "next/cache";

// Component Level Cache
async function Cached() {
  "use cache";

  return <>...</>;
}

// Function Level Cache
export async function getProduct(id: string) {
  "use cache";

  cacheLife("hours");
  cacheTag(`products/${id}`);

  return fetchProduct(id);
}
```

---
transition: fade
---

# Prefetch戦略

`partialPrefetching`と呼ばれる、細粒度なPrefetch戦略

- 静的な部分・Cache部分はPrefetchしてもサーバー負荷にならない（なりづらい）
- Prefetch時のレンダリングを細かく制御できる
  - `await prefetch()`
  - `await navigation()`

---

# Prefetch戦略

Prefetch時にどこまでレンダリングするか細かく制御できる

```tsx
import { navigation, prefetch } from "next/cache";

async function ProductStock({ id }: { id: string }) {
  // ⚠️ build時は解決しない、prefetch時に解決
  await prefetch();

  return <StockView stock={await getStock(id)} />;
}

async function ProductRecommendations({ id }: { id: string }) {
  // ⚠️ build時は解決しない、navigation時に解決
  await navigation();

  return <RecommendationsView recommendations={await getRecommendations(id)} />;
}
```

---

# Instant NavigationsのOpt-out

ページアクセス時点で認可チェックなどしたいこともある

Route Segment ConfigでOpt-out可能

```tsx
// page.tsx or layout.tsx
export const instant = false;
```

---
layout: fact
---

## Navigation"s"最適化の『最高到達点』

---
layout: section
---

section 5

# Outro & Message

---

# Outro: Instant Navigations

Instant Navigationsは今実現できる最高のNavigation

- SSGとStreaming SSRのいいとこ取りをしたPPRがベース
- PPR + Cache + Prefetchを統合してHard / Soft Navigationを最適化
- 「_デフォルトで高いパフォーマンス、優れた開発者体験_」と呼ぶに相応しい設計
- トレードオフはフレームワーク側の複雑性と、プラットフォーム側サポートが必要なこと

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
