# 김원태 포트폴리오 수정 가이드

이 프로젝트는 아래 폴더를 VS Code로 열어서 수정하면 됩니다.

```text
C:\Users\wongt\Documents\Codex\2026-05-11\next-js-typescript-tailwind-css-it
```

## 1. 개발툴 설치

가장 추천하는 개발툴은 Visual Studio Code입니다.

- 다운로드: https://code.visualstudio.com/
- 설치 후 `File > Open Folder...`를 눌러 위 프로젝트 폴더를 열면 됩니다.

VS Code에서 같이 설치하면 좋은 확장 프로그램:

- Tailwind CSS IntelliSense
- ESLint
- Prettier - Code formatter
- Korean Language Pack for Visual Studio Code

## 2. 실행 방법

VS Code에서 프로젝트 폴더를 연 뒤, 상단 메뉴에서 `Terminal > New Terminal`을 누릅니다.

터미널에 아래 명령어를 입력합니다.

```bash
pnpm dev
```

그다음 브라우저에서 아래 주소를 열면 됩니다.

```text
http://localhost:3000
```

만약 `pnpm`을 찾을 수 없다고 나오면 Node.js 설치가 필요합니다.

- Node.js 다운로드: https://nodejs.org/

Node.js 설치 후 VS Code를 완전히 껐다가 다시 열고, 다시 `pnpm dev`를 실행하면 됩니다.

## 3. 주로 수정할 파일

### 홈 화면 문구 수정

```text
app/page.tsx
```

홈 화면의 Hero, About, Contact 같은 큰 화면 구성을 수정하는 파일입니다.

### 프로젝트 내용 수정

```text
lib/data.ts
```

프로젝트 카드, 상세 페이지 내용, 역량, 도구 목록 같은 텍스트 데이터가 모여 있습니다.

### 상단 메뉴 수정

```text
components/Header.tsx
```

상단 이름, 메뉴, Resume PDF 버튼을 수정하는 파일입니다.

### 색상/전체 스타일 수정

```text
app/globals.css
```

배경색, 텍스트색, 공통 카드 hover, 전체 여백 같은 스타일을 수정하는 파일입니다.

### 이력서 PDF 교체

```text
public/resume-placeholder.pdf
```

나중에 실제 PDF 파일을 같은 이름으로 교체하면 Resume 버튼이 그대로 동작합니다.

## 4. 수정 후 확인 흐름

1. VS Code에서 파일을 수정합니다.
2. 저장합니다.
3. 브라우저의 `http://localhost:3000` 화면을 확인합니다.
4. 대부분 자동으로 반영됩니다.
5. 반영이 안 되면 브라우저 새로고침을 합니다.

## 5. 폴더 구조 간단히 보기

```text
app/
  page.tsx                 홈 페이지
  projects/[slug]/page.tsx 프로젝트 상세 페이지 공통 템플릿
  globals.css              전체 스타일

components/
  Header.tsx               상단 메뉴와 푸터
  Section.tsx              공통 섹션 UI

lib/
  data.ts                  포트폴리오 텍스트 데이터

public/
  resume-placeholder.pdf   이력서 PDF 자리
```
