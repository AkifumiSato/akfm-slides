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
title: 『Next.jsの考え方」の伝え方
mdc: true
---

# 「Next.jsの考え方」の<br>伝え方

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

# 『Next.jsの考え方』の伝え方

Agenda

1. 『Next.jsの考え方』とは
1. 『Next.jsの考え方』の目的とスコープ
1. 混乱ポイントと改訂（with Commune）

---
layout: section
---

# 『Next.jsの考え方』とは

---

# 『Next.jsの考え方』

https://zenn.dev/akfm/books/nextjs-basic-principle

<div class="flex justify-center h-70% mt-10">
  <img src="/book-cover.png">
</div>

---
layout: section
---

# 『Next.jsの考え方』の<br>目的とスコープ

---

# 『Next.jsの考え方』の目的

なぜ僕が多くの時間をかけてこの本を書き、改訂を続けてるのか

- 設計思想やベストプラクティスの形式知化
  - **アンチテーゼ**
  - **パブリックドキュメント**
  - **自身の探究**

---

# 『Next.jsの考え方』の目的: アンチテーゼ

誤った理解に基づく批判に対する、自分なりのアンチテーゼ

- 「xxxの方がシンプル」
- 「Next.jsはReactと癒着してる」
- 「`"use client"`みたいなディレクティブは最悪」

これらの議論には本来<span v-mark="{ color: 'red' }" class="font-bold">Next.jsの理解が必要</span>

---

# 『Next.jsの考え方』の目的: パブリックドキュメント

自分の仕事で使うパブリックドキュメントが欲しかった

- フロントエンドエキスパートとして様々なチームと関わる=効率的な布教が重要
  - アクセスが容易なドキュメント
  - 包括的なドキュメント
  - 更新されるドキュメント
- 複数人で更新するより1人の方が品質高められるし自由度も高い

---

# 『Next.jsの考え方』の目的: 自身の探究

執筆過程で理解が深まることを知っていたので、自身の探究目的も兼ねていた

- 前提: Rustの本を書いた時に本の執筆のメリットとデメリットを感じた
  - メリット: 執筆過程で数段詳しくなる
  - デメリット: 商用紙は自由度が低い
- Next.jsの設計思想やプラクティスを体系立てて理解したかった
- 記事や本を書いて人に褒められるのが嬉しかったからまた書いてみたかった

---

# 『Next.jsの考え方』のスコープ

『Next.jsの考え方』が何でないかを理解するとわかりやすい

- 入門書やAPIリファレンスではない
- 思考停止で真似できるプラクティスや構成は書いてない
- あくまで包括的な設計思想とプラクティスを訴求する本

個別の補完や最適解の模索は、<span v-mark="{ color: 'red' }" class="font-bold">僕自身が現場でサポートすべき</span>内容

---
layout: section
---

# 混乱ポイントと改訂<br>（with Commune）

---

# 『Next.jsの考え方』の課題

Communeでも他の会社でも、一定の混乱パターンが見られた

1. バックエンド的レイヤー志向設計のミスマッチ
1. `"use client"`/`"use server"`の責務誤解
1. UIのツリー構造分解不足

---

# バックエンド的レイヤー志向設計のミスマッチ

改訂なし: [データフェッチ コロケーション](https://zenn.dev/akfm/books/nextjs-basic-principle/viewer/part_1_colocation)

- Next.jsはコロケーション志向なので、バックエンド的なレイヤー志向はミスマッチになりやすい
  - [Meta規模の大規模開発研究](https://zenn.dev/akfm/articles/react-team-vision)からコロケーション志向を重視してる
  - Featrue Sliced Designなど一部で研究されてるが、マイノリティ
- Communeにおいても、この章を元に話が進んだので改訂なし

---

# `"use client"`/`"use server"`の責務誤解

追加: [クライアントとサーバーのバンドル境界](https://zenn.dev/akfm/books/nextjs-basic-principle/viewer/part_2_bundle_boundary)

<div class="flex justify-center h-70% mt-10">
  <img src="/rsc-bundle.png">
</div>

---

# UIのツリー構造分解不足

改訂: [UIをツリーに分解する](https://zenn.dev/akfm/books/nextjs-basic-principle/viewer/part_2_container_1st_design)

<div class="flex justify-center h-70% mt-10">
  <img src="/ui-tree.png">
</div>

---
layout: section
---

# まとめ

---

# 『Next.jsの考え方』の伝え方

Next.jsとチーム開発の統合プロセス

- 本: パブリックドキュメント
- 僕: 個別の補完や最適解の模索
- 改善: Communeと関わってく中で改善点が見つかり、それがCommuneにも活きてくる

---
layout: fact
---

## Communeのみなさんと関わっていく中で、<br>お互いの成長を感じています
