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
  const handleZipChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    // 1. 郵便番号を更新
    setZipCode(value);
    // 2. 関連する項目を明示的にリセット
    // 「変更されたときだけ消す」という意図が明確
    setAddress("");
  };

  // ...
}
```

---
transition: fade
---

# useState地獄

e.g. form

```tsx
import React, { useState } from "react";

export const UseStateForm: React.FC = () => {
  // 大量の`useState()`
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  // 大量のハンドラ
  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setZipCode(value);
    setAddress(""); // 明示的にリセット
  };
  // ...

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ zipCode, address, name });
  };

  // ...
};
```

---

# useState地獄

e.g. form

```tsx
import React from "react";
import { useForm } from "react-hook-form";

// formで保持するデータ型がまとまってて自明（大抵はzodから推論する）
type FormInputs = {
  name: string;
  zipCode: string;
  address: string;
};

export const HookForm: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => console.log(data);

  // ...
};
```

---

# boomer fetching

---

# popcorn UI

---

