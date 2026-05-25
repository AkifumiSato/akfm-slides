---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
colorSchema: "dark"
drawings:
  persist: false
transition: slide-left
title: Reactアンチパターン
mdc: true
---

# Reactアンチパターン

初学者やAIにありがちなアンチパターン実装について

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
transition: fade
---

# 安易なuseEffect

要件: 郵便番号が変わったら住所をリセットしたい

```tsx
// 🙅‍♂️ `useEffect()`の乱用
function AddressForm() {
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    setAddress("");
  }, [zipCode]);

  // ...
}
```

---

# 安易なuseEffect

要件: 郵便番号が変わったら住所をリセットしたい

```tsx
// ✅ イベントハンドラでリセットする
function AddressForm() {
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");

  // onChange={(e) => {
  //   setZipCode(e.target.value);
  //   // イベントハンドラ内で明示的にリセットすることで意図が明確
  //   setAddress("");
  // }}
}
```

---
transition: fade
---

# formライブラリを使わない

要件: formのバリデーション

```tsx
export const UseStateForm: React.FC = () => {
  // 🙅‍♂️ 大量の`useState()`
  const [zipCode, setZipCode] = useState("");
  const [zipCodeError, setZipCodeError] = useState(null);
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState(null);
  // ...
};
```

---

# formライブラリを使わない

要件: formのバリデーション

```tsx
const schema = z.object({
  name: z.string(),
  zipCode: z.number(),
  address: z.number(),
});

export function HookForm {
  // ✅ formライブラリを使う
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // <input {..register("name")} />
  // {errors.name && <p role="alert">{errors.name.message}</p>}
};
```

---
transition: fade
---

# useEffectでデータフェッチ

要件: SPAでデータフェッチをしたい

```tsx
function ProductCard({ id }: { id: string }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🙅‍♂️ useEffectでデータフェッチ
  useEffect(() => {
    setLoading(true);
    fetchProduct(id)
      .then(setProduct)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  // ...
}
```

---

# useEffectでデータフェッチ

要件: SPAでデータフェッチをしたい

```tsx
function ProductCard({ id }: { id: string }) {
  // ✅ データフェッチライブラリを使う
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });

  // ...
}
```

---
transition: fade
---

# boomer fetching

要件: データフェッチもコンポーネントにカプセル化したい

```tsx
function ProductCard({ id }: { id: string }) {
  // 🤔 画面全体でいくつのデータフェッチが発生するか
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });

  // ...
}
```

少数のデータフェッチの場合なら問題になりにくい

---

# boomer fetching

要件: データフェッチもコンポーネントにカプセル化したい

```tsx
// Server Components
async function ProductCard({ id }: { id: string }) {
  // ✅ サーバー間通信ならN個の通信でも比較的安定
  // Streamingも駆使すると尚Good
  const product = await fetchProduct(id);

  // ...
}
```

---

# Popcorn UI:

説明し切れないので記事だけ紹介

https://zenn.dev/akfm/articles/popcorn-ui-anti-pattern

---
layout: center
---

- 技術顧問業をしてます
- Next.js、AI、開発プロセス、育成など
- お気軽にご相談ください

---
layout: section
---

# End
