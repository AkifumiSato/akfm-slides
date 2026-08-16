---
theme: default
# https://unsplash.com/ja
background: https://images.unsplash.com/photo-1624002716397-e1c876108c68?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
class: text-center
highlighter: shiki
lineNumbers: false
colorSchema: "dark"
drawings:
  persist: false
transition: slide-left
title: ユーザーから始まるNext.jsの設計思想
routerMode: hash
mdc: true
---

# ユーザーから始まる<br>Next.jsの設計思想

デフォルトで高いパフォーマンス・優れた開発者体験

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

## 今日話すこと: 『Next.jsの設計思想』の話

---
layout: section
---

section 1

# Next.jsの歴史

---
transition: fade
---

# Next.jsの歴史

| 年月    | 概要            | 詳細                                |
| ------- | --------------- | ----------------------------------- |
| 2013/05 | Reactが公開     |                                     |
| 2016/10 | Next.jsが公開   | 今で言うPages Router                |
| 2018~   | Gatsby.jsの台頭 | SSGが注目される                     |
| 2019/07 | Next.js@v9.0    | dynamicルーティング・TypeScript対応 |
| 2020/03 | Next.js@v9.3    | SSG対応                             |
| 2020/07 | Next.js@v9.5    | ISR対応                             |

---
transition: fade
---

# Next.jsの歴史

| 年月    | 概要           | 詳細                                               |
| ------- | -------------- | -------------------------------------------------- |
| 2022/05 | App Router発表 | [Layouts RFC](https://nextjs.org/blog/layouts-rfc) |
| 2022/10 | Next.js@v13.0  | App Router Beta                                    |
| 2023/05 | Next.js@v13.4  | App Router Stable                                  |
| 2023/10 | Next.js@v14.0  | PPR                                                |
| 2024/10 | Next.js@v15.0  | `params`などの破壊的変更                           |
| 2025/10 | Next.js@v16.0  | Cache Components                                   |
| 2026/06 | Next.js@v16.3  | Instant Navigationなど                             |

---

# Next.jsの歴史

おおまかに言うと...

1. Pages Router: 過去のNext.js
2. App Router: 現在のNext.js
3. App Router(Cache Components): これからのNext.js

最新版（v16.3）で<span v-mark="{ color: 'red' }" class="font-bold">これらは全て動く</span>

---

# Pages Router

過去のNext.js

- 2016年当初からあるRouter
- 現状の実態としては、<span v-mark="{ color: 'red' }" class="font-bold">非推奨扱いに近い</span>
  - 明示的に「非推奨」と宣言するのは、メリットよりデメリットが多い
  - 脆弱性サポートなどはされているが、機能開発は皆無

---

# App Router

現在のNext.js

- 2022年に発表されたRouter
- RSCサポートなフレームワークの代表格、<span v-mark="{ color: 'red' }" class="font-bold">Pages Routerとは全く異なる設計</span>
  - Server Components, Server Functions
  - Nested Layout
  - 多層で設定指向なCache

---

# App Router(Cache Components)

これからのNext.js

- 2025年に発表された、App Routerにおける<span v-mark="{ color: 'red' }" class="font-bold">新しい機能群をopt-inするモード</span>
  - PPR・`"use cache"`などを統合
  - Cacheにまつわる開発者体験と最適化を大きく改善
- experimentalな時期を終えたが、まだデフォルトではない
- 「これから」と言いつつも、成熟しつつある（v17でデフォルトになる可能性も？）

---
layout: statement
---

## Next.jsは過去・現在・これからで<br>設計も考え方も全然違う

---
layout: statement
---

## なぜこうなったのか？

---
layout: section
---

section 2

# Next.jsへの要求

---

# フレームワークへの矛盾した要求

人によって求めることは様々

- <span v-mark="{ color: 'red' }" class="font-bold">普遍性</span>: 容易なアップデートと長期サポート
  - 「フレームワークの更新でビジネスを停滞させるべきではない」
  - 「フレームワークは恒久的にサポートを続けるべきだ」
- <span v-mark="{ color: 'red' }" class="font-bold">大胆な進化</span>: API・体験の根本的改善
  - 「フレームワークは常により良いUXや開発者体験を追求すべきだ」
  - 進化を怠ったフレームワークは時代遅れとして選ばれなくなるという現実

---
layout: statement
---

## 『普遍性』と『大胆な進化』は一見矛盾した要求

---
layout: statement
---

## Next.jsはVercelのビジネスを担っているため<br>ユーザーからの要望の影響が大きい

---

# Next.jsにおける『普遍性』と『大胆な進化』

一見矛盾した要求にうまく対処している

- <span v-mark="{ color: 'red' }" class="font-bold">最小限の破壊的変更</span>: APIの破壊的変更は基本避ける
- <span v-mark="{ color: 'red' }" class="font-bold">慎重な抽象化</span>: 過度な抽象化は避け、愚直に実装する
- <span v-mark="{ color: 'red' }" class="font-bold">新規設計の分離</span>: 大きな変更はモードやRouter自体分けて行う

<br>

> "It's much easier to recover from no abstraction than the wrong abstraction."
>
> 「間違った抽象化から回復するよりも、抽象化がない状態から回復する方がずっと簡単だ」

by [Sebastian Markbåge](https://ja.react.dev/community/team#sebastian-markb%C3%A5ge)氏

---
layout: statement
---

## Next.jsは<br>『普遍性』と『大胆な進化』のバランスが優れている

---
layout: statement
---

## Next.jsはエンタープライズ指向のフレームワークとも言える<br>しかし...

---
layout: statement
---

## そもそも『大胆な進化』で<br>Next.jsは何を得たいのだろうか？<br>何を目指しているのか？

---
layout: section
---

section 3

# Next.jsの普遍的なコンセプト

---

# 『設計思想』の分類

『設計思想』を段階的に分解してみる

1. <span v-mark="{ color: 'orange', type: 'circle' }">Concept</span>
2. Model
3. Rules
4. Interfaceなど

---
layout: statement
---

Next.jsのコンセプト:

## 「**デフォルトで高いパフォーマンス、優れた開発者体験**」

---
layout: statement
---

## Next.jsはパフォーマンス<br>つまりユーザー体験が最初に来るフレームワーク

---

# デフォルトで高いパフォーマンス

デフォルト通り実装すれば、高いパフォーマンスが得られる

1. Pages Router時代: SSR by default（[リッチなWebアプリケーションのための7つの原則](https://yosuke-furukawa.hatenablog.com/entry/2014/11/14/141415)）
2. App Router時代: Nested LayoutとStreaming SSR
3. Cache Components時代: Instant Navigation

---

# 優れた開発者体験

一般的に開発者がフレームワークに求めるもの

1. Pages Router時代: 0 config（webpack）、ファイルベースルーティング
2. App Router時代: RSCサポートによるコロケーション設計のサポート
3. Cache Components時代: Cacheは設定から合成へ

---
layout: statement
---

## 「そこまでパフォーマンス重要？」

---

# なぜパフォーマンスが重要なのか？

[Why site performance matters](https://vercel.com/kb/guide/why-site-performance-matters)

- パフォーマンスはビジネス成果に直接的に影響する
  - 購買行動やSEOへの大きな影響
- 個人的経験では、パフォーマンスは短期ではなく中長期において問題になりやすい
  - 後からパフォーマンスを改善するのは非常に困難
  - パフォーマンスや品質への信頼は、一度失うと取り戻すのが困難

---
layout: statement
---

## 「デフォルトで高いパフォーマンス」は<br>中長期的にビジネスや我々開発者を守ってくれる<br>（エンタープライズ指向）

---

# 余談: Instant Navigation

Instant Navigationは非常にNext.jsらしい世界観の主張

- [**Instant Navigation**](https://nextjs.org/docs/app/guides/instant-navigation)
  - 遷移先のレンダリングが即座に開始され、サーバー側処理はStreamingで遅延
  - ハードナビゲーション時のパフォーマンスなど、従来のSPAと異なる
- 時間のかかる非同期処理にはCacheかStreamingが必須＝「**デフォルトで高いパフォーマンス**」
- 合成可能なCache、開発中のエラーやデバッグツールにより解消方法が明確＝「**優れた開発者体験**」

---
layout: statement
---

## Next.jsが目指す方向性は変わっていない

---
layout: statement
---

## 『設計思想』は何も変わっていないのか？

---
layout: section
---

section 4

# Next.jsのモデル進化

---

# 『設計思想』の分類

『設計思想』を段階的に分解してみる

1. Concept
2. <span v-mark="{ color: 'orange', type: 'circle' }">Model</span>
3. Rules
4. Interfaceなど

---

# App Routerでアップデートされた『モデル』

歴史を重ねることで、Pages Routerの設計では限界があることがわかってきた

1. Pages Router: 中央集権的なモデル
2. App Router: 自律分散的なモデル
3. App Router(Cache Components): Cache含め自律分散的なモデル

---

# Pages Router: 中央集権的なモデル

旧来のWeb MVC同様、技術的関心事でレイヤーを切るモデル

<div class="flex justify-center">
  <img src="/pages-router-architecture.png" alt="Pages Router" class="w-100">
</div>

---

# App Router: 自律分散的なモデル

レイヤー指向ではなくコロケーション指向

<div class="flex justify-center mt-10">
  <img src="/rsc-architecture.png" alt="RSC" class="h-80">
</div>

---

# Cache Components: Cache含め自律分散的なモデル

CacheがRSCのモデルに組み込まれた

<div class="flex justify-center mt-10">
  <img src="/cache-components-architecture.png" alt="Cache Components" class="h-80">
</div>

---

# 余談: Pages RouterとTanStack Start

これらはどちらも中央集権的なモデル

- `getServerSideProps()`相当が`loader()`+`createServerFn()`
- TanStack Startの方がPages Routerより後発な分、洗練された開発者体験と言える
  - `createServerFn()`はServer Functions相当
  - `createServerOnlyFn()`や`<ClientOnly>`など、Next.jsにはない機能群

---
layout: section
---

section -1

# Wrap up

---

# 『ユーザーから始まるNext.jsの設計思想』

Next.jsはエンドユーザーと開発者、どちらの要求にも応えようとしている

- Next.jsは『普遍性』と『大胆な進化』という要求を満たすべく、以下の戦略を取っている
  - 『最小限の破壊的変更』
  - 『慎重な抽象化』
  - 『新規設計の分離』
- Next.jsのコンセプト: 「デフォルトで高いパフォーマンス・優れた開発者体験」
- Next.jsのモデルはApp Routerで大きく変わった
  - Pages Router: 中央集権的なモデル
  - App Router: 自律分散的なモデル
  - App Router(Cache Components): Cache含め自律分散的なモデル
