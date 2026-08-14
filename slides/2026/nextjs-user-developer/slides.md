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

## 今日話すこと: 『Next.jsの設計思想』の話

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
transition: fade
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

# Next.jsの歴史

おおまかに言うと...

1. Pages Router
2. App Router
3. Cache Components

最新版（v16.3）で<span v-mark="{ color: 'red' }" class="font-bold">これらは全て動く</span>

---

# Pages Routerの立ち位置

一応現役という扱いだが...

- 実質的非推奨
  - 明示的に「非推奨」と宣言するのは、メリットよりデメリットが多い
  - 脆弱性サポートなどはされてるが、機能開発は皆無
- App Routerへの移行は、段階的に可能だが難易度は高い

---

# App Routerの立ち位置

登場から4年が経った

- App Router＝「今のNext.js」
- RSCサポートなフレームワークの代表格
- 様々な進化を続けてる
  - Vercel以外へのデプロイサポート
  - MCPやCLIなどのツール拡充

---

# Cache Componentsの立ち位置

Next.js開発チーム3年間の集大成

- 一言で言うと<span v-mark="{ color: 'red' }" class="font-bold">真のApp Router</span>
  - PPR・`"use cache"`などを統合
  - Cacheにまつわる開発者体験と最適化を大きく改善
- （個人的には、まだexperimental的立ち位置）

---
layout: quote
---

> "It's much easier to recover from no abstraction than the wrong abstraction."
>
> 「間違った抽象化から回復するよりも、抽象化がない状態から回復する方がずっと簡単だ」

by [Sebastian Markbåge](https://ja.react.dev/community/team#sebastian-markb%C3%A5ge)氏

---

# Next.jsの進化と破壊的変更

「Next.jsはよく変わるフレームワーク」か？

- 実はNext.jsは、破壊的変更を最小限にしている
  - v15であった`params`が非同期になったとかくらい（codemodあり）
  - 大きな変更は既存から切り離して実装されてる
- Pages Routerは機能開発こそされてないが、最新版（v16.3）でも動く
  - App Routerへの段階的移行も可能

Next.jsは<span v-mark="{ color: 'red' }" class="font-bold">フレームワークの長期サポート</span>が開発者体験における重要な要素だと考えている

---
layout: statement
---

## Next.jsは長期サポートを重視しながら<br>なぜ大きな進化を繰り返すのか？

---
layout: statement
---

## Next.jsは一体、何を目指しているのか？

---
layout: section
---

# 『Next.jsの設計思想』<br> ~ 普遍的なコンセプト ~

---
layout: statement
---

## 一言で言うと<br>「**デフォルトで高いパフォーマンス、優れた開発者体験**」

---
layout: statement
---

## Next.jsではパフォーマンス<br>つまりユーザー体験が最初に来るフレームワーク

---

# デフォルトで高いパフォーマンス

デフォルト通り実装すれば、高いパフォーマンスが得られる

1. Pages Router時代: `getServerSideProps()`
2. App Router時代: Static by default
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

「デフォルトで高いパフォーマンス」が我々開発者やビジネスを守ってくれる

---
layout: statement
---

## Next.jsってずっとこのコンセプトなの？

---

# 最初のNext.jsとSSR

参考: [【翻訳】リッチなWebアプリケーションのための7つの原則](https://yosuke-furukawa.hatenablog.com/entry/2014/11/14/141415)

- Vercel社長のGuillermo氏は元々Socket.ioなどを開発していたが、Reactが登場してフレームワークを作ることにした
- リッチなWebアプリケーションでは、パフォーマンスのためにSSRは必須だと主張していた

---

# 最新のNext.jsとInstant Navigation

Instant Navigationは非常にNext.jsらしい世界観の主張

- Instant Navigation: 瞬時にページ遷移が開始され、サーバー側処理はStreamingされるような体験
- デフォルトではCacheかStreamingが必須＝「デフォルトで高いパフォーマンス」
- 合成可能なCache、開発中のエラーやデバッグツールにより解消方法が明確＝「優れた開発者体験」

---
layout: statement
---

## 『設計思想』は何も変わっていないのか？

---
layout: section
---

# 『Next.jsの設計思想』<br> ~ 変化したアプローチ ~

---

# Next.jsで変わった設計思想

歴史を重ねることで、Pages Routerの設計では限界があることがわかってきた

- Pages Router時代: 中央集権的な設計思想
- App Router時代: 自律分散的な設計思想

---

# Pages Router時代: 中央集権的な設計思想

旧来のWeb MVC同様、技術的関心毎でレイヤーを切る設計思想

<div class="flex justify-center">
  <img src="/pages-router-architecture.png" alt="Pages Router" class="w-100">
</div>

---

# App Router時代: 自律分散的な設計思想

レイヤー指向ではなくコロケーション指向

<div class="flex justify-center mt-10">
  <img src="/rsc-architecture.png" alt="RSC" class="w-100">
</div>

---

# 余談: Pages RouterとTanStack Start

これらはどちらも中央集権的な設計思想

- `getServerSideProps()`相当が`loader()`+`createServerFn()`
- TanStack Startの方がPages Routerより後発な分、洗練された開発者体験と言える
  - `createServerFn()`はServer Functions相当
  - `createServerOnlyFn()`や`<ClientOnly>`など、Next.jsにはない機能群

---
layout: section
---

# まとめ

---

# まとめ

Next.jsはパフォーマンスから

- Next.jsは長期サポートを重視しており、破壊的変更より段階的な進化を採用してる
- Next.jsのコンセプトは「デフォルトで高いパフォーマンス・優れた開発者体験」
- Next.jsはApp Routerで、中央集権的 -> 自律分散的な設計にアプローチを変更した
