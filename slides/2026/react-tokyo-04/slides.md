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

# useEffect乱用

巷でもよく言われてるパターン

- データフェッチを扱いたい
- 値の変更時に何か処理を行いたい

---
transition: fade
---

# useEffect乱用

e.g. 郵便番号が変わったら住所をリセットしたい

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

# useEffect乱用

e.g. 郵便番号が変わったら住所をリセットしたい

```tsx
// ✅ イベントハンドラでリセットする
function AddressForm() {
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");

  return (
    <form>
      <input
        type="text"
        placeholder="郵便番号"
        value={zipCode}
        onChange={(e) => {
          // 1. 郵便番号を更新
          setZipCode(e.target.value);
          // 2. 関連する項目を明示的にリセット
          // 「変更されたときだけ消す」という意図が明確
          setAddress("");
        }}
      />
      {/* ... */}
    </div>
  );
}
```

---
transition: fade
---

# useState地獄

巷であまり言及されてない？（自明なため？）

- formやデータフェッチの状態管理をしてしまう
- 状態じゃなくていいものを扱ってしまう
- ブラウザバック時に復元されないことを無視してしまう

---
transition: fade
---

# useState地獄

e.g. form

```tsx
export const UseStateForm: React.FC = () => {
  // 大量の`useState()`
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");

  // ...
};
```

---
transition: fade
---

# useState地獄

e.g. form

```tsx
// formで保持するデータ型がまとまってて自明（大抵はzodから推論する）
type FormInputs = {
  name: string;
  zipCode: string;
  address: string;
};

export const HookForm: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm<FormInputs>({
    // ...
  });

  // ...
};
```

---
transition: fade
---

# useState地獄

e.g. data fetching

```tsx
function ProductCard({ id }: { id: string }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchProduct(id) // 手動で実行
      .then(setProduct)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  // ...
}
```

---

# useState地獄

e.g. data fetching

```tsx
function ProductCard({ id }: { id: string }) {
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });

  // ...
}
```

---

# その他

今日説明し切れなそうなアンチパターン

- boomer fetching: クライアントサイドから多数のデータフェッチを行うパターン
- Popcorn UI: https://zenn.dev/akfm/articles/popcorn-ui-anti-pattern

気になったら声かけてください

---
layout: section
---

# End
