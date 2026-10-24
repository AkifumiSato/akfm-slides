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
title: Next.js Instant Navigations - JavaScriptによるNavigationチューニングの歴史と最高到達点
routerMode: hash
mdc: true
---

# Next.js<br><span class="instant-title">Instant</span> Navigations

JavaScriptによるNavigationチューニングの歴史と最高到達点

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

# Hard Navigation / Soft Navigation

SPAの登場以降、WebのNavigationには2つの方式が存在する

- **Hard Navigation**: ブラウザ標準の仕組みでドキュメント全体を読み直すNavigation
- **Soft Navigation**: History API等を利用して、必要な部分だけJavaScriptで差し替えるNavigation

Soft Navigation登場以降、Navigation最適化＝<span class="font-bold" v-mark="{ type: 'underline', color: 'red' }">レンダリング戦略の最適化そのもの</span>

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
layout: section
---

section 2

# Partial Pre-Rendering

---

# 従来のNavigation最適化の課題

最適解と手段がケースバイケース

| 手法          | 解決した問題                           | トレードオフ                       |
| ------------- | -------------------------------------- | ---------------------------------- |
| Classic SSR   | -                                      | 画面遷移のたびにフルリロードが走る |
| SPA           | 画面遷移のフルリロード、関心ごとの分離 | LCPが低速、SEOやセキュリティが弱い |
| SSR           | SPAのLCP課題・SEO                      | TTFBが遅くなりがち                 |
| SSG           | SSRのTTFBやセキュリティ                | Webアプリケーションには不向き      |
| Streaming SSR | SSRのTTFBとLCPの両立                   | CDN活用が困難                      |

---

# SSG vs Streaming SSR

これらの分断は大きかった

| 観点            | SSG | Streaming SSR |
| --------------- | --- | ------------- |
| 動的コンテンツ  | ❌  | ✅            |
| TTFB（CDN活用） | ✅  | ❌            |
| LCP             | ✅  | ✅            |

---
layout: fact
---

## Next.jsのコンセプト<br>_「デフォルトで高いパフォーマンス、優れた開発者体験」_

---
layout: fact
---

## App Router初期の思想<br>「できるだけSSGに、Opt-inでStreaming SSRに」

---

# App Router初期の苦悩

分断したソリューションと「デフォルトで高いパフォーマンス」の掛け合わせによる破綻

- Cacheがデフォルトで有効＆暗黙的で認知負荷が高い
- ドキュメントの不足
- devモードとproductionで挙動が違う
- アプリケーションではほとんどのページをOpt-inしないといけない
- etc...

---
layout: fact
---

## 分断したソリューションではなく<br>バランスの取れるソリューションが必要

---
layout: fact
---

## SSGとStreaming SSRのいいとこ取りをしたい

---
transition: fade
---

# Partial Pre-Rendering(PPR)

ページの外側を静的に・部分的に動的にレンダリング

<div class="flex justify-center mt-10">
  <img src="/ppr.svg" alt="PPR" class="h-90">
</div>

---
transition: fade
---

# Partial Pre-Rendering(PPR)

開発者は動的な要素を`<Suspense>`で囲うだけ

```tsx
export function ProductPage({ params }: { params: Promise<{ id: string }> }) {
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

SSGやStreaming SSRのいいとこどり

| 観点            | PPR | SSG | Streaming SSR |
| --------------- | --- | --- | ------------- |
| 動的コンテンツ  | ✅  | ❌  | ✅            |
| TTFB（CDN活用） | ✅  | ✅  | ❌            |
| LCP             | ✅  | ✅  | ✅            |

---

# PPRのトレードオフ

PPRもまた、銀の弾丸ではない

- （おそらく）Next.jsしかサポートしてない
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
layout: fact
---

## PPRをベースにNavigationsのさらに最適化へ

---
layout: section
---

section 3

# Instant Navigations

---

# Instant Navigationsとは

Instant Navigations = 瞬時の Navigation

- Next.jsのCache Componentsに含まれる機能群（next@17でデフォルトに）
- **Hard / Soft Navigation** の両方を最適化
- PPR + Cache + Prefetch により、高速な Soft Navigation を実現

ref: https://x.com/aurorascharff/status/2107837635792146621

---
layout: fact
---

## SSGとStreaming SSRのいいとこ取りをした上で<br>さらに全体を最適化した

---
layout: fact
---

## Navigation最適化の『最高到達点』

---
layout: fact
---

## [Demo](https://nextjs-cache-components-demo.vercel.app/instant-navigations)

https://github.com/AkifumiSato/nextjs-cache-components-demo

---

# Instant Navigations

PPR + Cache + Prefetch

<div class="flex justify-center mt-6">
  <img src="/instant-navigations.svg" alt="Instant Navigations" class="h-90">
</div>

---

# 技術的要素

Instant Navigationsを構成する技術的要素は大きく3つ

- **PPR**
- **Cache戦略**
- **Prefetch戦略**

---
transition: fade
---

# Cache戦略

Cache活用による高速化

- `"use cache"`でコンポーネントや関数のキャッシュを宣言
- Opt-in 型の RSC の拡張設計、**開発者体験をトレードオフにしない**
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

prefetch時にどこまでレンダリングするか細かく制御できる

```tsx
import { navigation, prefetch } from "next/cache";

// Until Prefetching
async function ProductStock({ id }: { id: string }) {
  await prefetch();

  return <StockView stock={await getStock(id)} />;
}

// Until Navigation
async function ProductRecommendations({ id }: { id: string }) {
  await navigation();

  return <RecommendationsView recommendations={await getRecommendations(id)} />;
}
```

---

# Instant NavigationsのOpt-out

GitHubのように、ページアクセス時点で認可チェックなどしたいこともある

Route Segment ConfigでOpt-out可能

```tsx
// page.tsx or layout.tsx
export const instant = false;
```

---
layout: section
---

section 4

# Outro&Message

---

# Instant Navigations

Navigation最適化の歴史が紡いだバランスソリューション

- SSGとStreaming SSRのいいところどりをしたPPRがベース
- PPR+Cache+Prefetchを統合してHard/Soft Navigationを最適化
- 「_デフォルトで高いパフォーマンス、優れた開発者体験_」と呼ぶに相応しい設計

---
layout: fact
---

## AI時代だからこそ<br>我々開発者は今まで以上にUXと向き合うべきである

---
layout: fact
---

## Instant Navigationsは<br>今我々が向き合う最も重要なテーマの1つ

---
layout: fact
---

## 各々がより良いNavigationを考えることが重要

---
layout: section
---

# End

---

# 修正点Memo

- turbo linkなどとの比較について
- 最高到達点の伏線回収
- Static/Dynamic,Hard/Soft両立が課題だったことを書きたい
- 冒頭に前提知識の補足を入れたい
- 最後OutroとMessageでそれぞれ1枚づつにまとめたい
