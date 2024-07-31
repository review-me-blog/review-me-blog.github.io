---
slug: code-convention
sidebar_position: 2
---

# 프론트엔드 코드 컨벤션

## 0. 리액트

- 컴포넌트를 정의할 때, 함수형 컴포넌트만 사용한다.
- 절대 경로 사용
  - frontend/src/
- 폴더 index를 통해서 export한다.

  ```tsx
  // src/components
  import Header from "./Header";
  //....

  export { Header, Footer };

  // src/pages/Home
  import { Header, Footer } from "./components";
  ```

## 1. 변수(함수)명

- 변수, 함수명을 작성할 때는 `camelCase`를 사용한다.
  ```tsx
  camelCase(O);
  ```
- 함수명을 작성할 때는 `동사 + 명사` 형태로 구성한다.
- 이름이 너무 길어진다 싶으면 팀원과 상의한다.
- flag 변수(boolean 타입)의 경우, 기본적으로 `is`를 사용한다.
  - 특수한 경우 `has`를 허용한다.
  ```tsx
  isNum - True/False인 경우
  hasNum - 포함되는 경우
  ```
- 약어는 사용하지 않는다.

  ```tsx
  idx(X);
  index(O);

  arr(X);
  array(O);

  string2Number(X);
  stringToNumber(O);
  ```

- 상수명의 경우 `UPPER_CASE`로 정의한다.

  - 하위 변수명은 `camelCase`로 정의한다.

  ```tsx
  const MESSAGE = {
    errorMessage: "에러 메시지입니다.",
    goodMessage: "좋은 메시지입니다.",
  };

  console.log(MESSAGE.errorMessage);
  ```

- 값이 배열 타입인 경우에만 `-list` suffix를 사용한다. 이외의 경우에는 모두 `단수형`을 사용한다.

  ```jsx
  const lotto = {
    rank: [],
    numbers: [1, 2, 3, 4],
  };
  ```

- API 호출 함수명은 \*Api로 끝나게 한다.
  ```jsx
  ex). deleteReviewApi, getReviewApi
  // 추후에 deleteReview 라는 기능 메서드명이 생길 수 있기 때문에 api 호출 이름과 구분 짓기 위함
  ```

## 2. 파일 및 폴더명

### 파일명

- 사용자 정의 컴포넌트의 경우 `PascalCase` 를 사용한다.
  ```tsx
  Button.tsx(O);
  ReviewForm.tsx(O);
  ```
- 사용자 정의 컴포넌트를 제외한 모든 파일은 `camelCase` 를 사용한다.

  ```tsx
  useCustomHook.ts(O);
  constants.ts(O);
  ```

- 커스텀 훅을 정의할 때는 `use-` prefix를 사용한다.
  ```tsx
  useReview.ts(O);
  ```

### 폴더명

- `pages`, `hooks` 와 같이 폴더 이름을 지을 때, 항상 복수형으로 쓴다.

### 폴더 구조

- 컴포넌트에 종속되는 `컴포넌트 파일`, `스타일링 파일`, `테스트 파일`은 하나의 컴포넌트 폴더에서 보관한다.
  ```tsx
  📂Button
  └ 📄index.tsx
  └ 📄styles.ts
  └ 📄test.tsx
  ```
- 하나의 페이지에서만 사용되는 컴포넌트는 `src/pages` 하위에서 관리하고, 여러 페이지에서 공통적으로 사용되는 컴포넌트는 `src/components` 하위에서 관리한다.
- 컴포넌트에 종속되지 않는 `hooks`, `global style`, `type`, `api` 등은 `src/` 하위에서 관리한다.

  ```tsx
  📂src
  └ 📂hooks
  └ 📂styles
  └ 📂types
  └ 📂apis
  └ 📂constants
  ```

- 컴포넌트 파일명은 index로 통일한다.

## 3. 최대 indent depth 제한

- 제한을 두지 않지만, 불편함을 겪으면 제한한다.
- 단일 책임의 원칙을 최대한 따른다.
  ```tsx
  const func = () => {
  	// 1
  	if () {
  		// 2
  		arr.map(() => {
  			// 3
  			if () {
  				// 4
  				// ...
  ```

## 4. 주석 규칙

- 모든 주석은 한 줄 주석(`//`)으로 사용한다.

  ```tsx
  // 한 줄 주석

  // 여러 줄
  // 주석
  ```

- 코드에서 주석이 필요하다고 생각하는 경우 적극적으로 기입한다.
  - 함수 동작이 복잡하거나 코드 자체에 대한 자세한 설명이 필요할 때는 TSDoc을 활용한다.
  - 그 외에는 일반 주석을 사용한다.

## 5. 중괄호 규칙

- 조건문 등에서 body가 한 줄인 경우에는 중괄호를 사용하지 않는다.

  ```cpp
  (O)
  if(!flag) return;

  (X)
  if(!flag) {
    return;
  }
  ```

## 6. 매직 넘버 지양

- 매직 넘버를 최대한 지양하고, 상수화한다.

## 7. 컴포넌트 정의 방법

- 컴포넌트를 선언할 때는 `arrow function`을 사용한다. `export` 구문은 아래에 별도로 작성한다.

```tsx
const func = () => {
  // ...
};

export default func;
```

- 하나의 파일에는 하나의 컴포넌트만 정의한다. `export default`만 사용한다.

## 8. 함수 사용

- else의 사용을 지양하고 early return 위주로 코드를 작성한다.
- `arrow function`만 사용한다.
- 함수의 인자의 개수를 최대 3개로 제한한다. 가능하면 2개를 권장한다.
- Promise의 사용을 지양하고 async/await 를 사용한다.
  - 불가피하게 Promise를 사용한다면 주석으로 이유를 작성한다.

## 9. Type/Interface

- null과 undefined를 구분한다. 값이 없을 때 `null`을 사용한다.
- 조건문에서 truthy/falsy를 검사할 때

```tsx
const flag = null;

// (O);
if (!flag) {
  // ...
}

// (X);
if (flag !== null) {
  // ...
}
```

- 주로 `interface`를 사용하고, 사용 불가능한 상황에서는 `type alias`를 사용한다.
- props가 하나 이상이면 그에 관련된 `interface`를 반드시 컴포넌트 위에 정의한다. props는 구조 분해 할당을 통해 받는다.

```tsx
interface ComponentProps = {
	// ...
}

const Component = ({a, b}: ComponentProps) => {
	// ...
}
```

- props에서 `children`을 사용하는 경우에 타입을 `PropsWithChildren<>`로 지정한다.

## 10. CSS

### rem 단위 사용

픽셀(px)은 고정된 크기를 제공하여 일관된 디자인을 유지하는 데 유리하지만, 유연성과 접근성 면에서는 제한적이다. 반면, rem은 사용자가 브라우저에서 폰트 크기를 변경하면 레이아웃도 함께 조정되어 유연성과 접근성을 제공한다.

```css
font-size: 10rem;
```

### 스타일 컴포넌트 네이밍 규칙

모든 스타일 컴포넌트의 이름은 의미를 쉽게 파악할 수 있고, 기능을 유추할 수 있는 단어를 사용한다.

| 스타일 컴포넌트 네이밍 | 의미                                               |
| :--------------------: | :------------------------------------------------- |
|         Layout         | 최상위 레이아웃을 설정할 때 사용한다.              |
|       Container        | 여러 개의 요소를 묶을 때 사용한다.                 |
|        Wrapper         | 하나의 요소를 감쌀 때 사용한다.                    |
|          List          | `ul` 태그를 사용할 때 권장한다.                    |
|          Item          | `li` 태그 또는 반복되는 요소를 사용할 때 권장한다. |
