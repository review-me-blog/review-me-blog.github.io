---
title: 😺 7월 11일 회의
description: 1차 데모데이 준비
tags: [meeting-notes]
---

# 7월 11일 회의

회의 기록자: 에프이  
회의 MC: 바다

# 오늘 할 일

- 1차 데모데이까지 구현할 기능 추리기
- 공통 시나리오
- 각 분야별 기술 문서 작성

# 1차 데모데이까지 목표 개발 진행

- 디자인 완성
- 리뷰 작성
  - 리뷰 입력 기능
    - 질문 카테고리는 우선 동료 피드백 질문 그대로 사용
    - 에디터 라이브러리 사용 고려
  - 리뷰 제출 기능
- 로그인/회원가입 (시간이 남으면 진행)

# 시나리오

- 현재 페르소나는 모두 리뷰이 기준이기 때문에 리뷰어의 페르소나를 추가했다.

# 깃 컨벤션

merge시, `squash and merge` 방식을 사용하기 때문에 세부 커밋 별로 기능을 명세할 필요는 없다고 판단했다.

Github의 Issue 기능 적극 활용하기!

## 커밋 컨벤션

- `feat`: 새로운 기능 추가 및 기능 업데이트 커밋
- `refactor`: 리팩터링 커밋
- `fix`: 버그 수정 커밋
- `design`: CSS 스타일링 커밋
- `style`: 코드 포맷팅 등 스타일 변경 커밋
- `docs`: 문서 커밋
- `chore`: 오타 수정 등 기타 커밋
- `test`: 테스트 관련 커밋
- `build`: 배포 커밋
- `ci`: CI 설정 파일 및 스크립트 변경, GitHub Actions 설정 추가

## PR 컨벤션

- PR과 Issue는 일대일 관계

### PR 제목 템플릿

`[BE/FE/Release/Common] (기능 등)`

### PR 메시지 템플릿

```
### 이슈 번호 (Resolves #{issue number})
### 어떤 기능을 구현했나요 ?
### 어떻게 해결했나요 ?
### 어떤 부분에 집중해서 리뷰해야 할까요?
### 참고 자료 (optional)
```

## Issue 컨벤션

### Issue 제목 템플릿

`[BE/FE/Release/Common] ~~한다.`

### Issue 메시지 템플릿

```
### 🔍 설명
### ✅ 할 일
### ⏰ 예상 시간
### 🐴 할 말
```

## Git Flow

- main: 운영 배포 브랜치
- develop: 개발 브랜치
- feature: 상세 기능 단위 브랜치
- hotfix: 배포 이후 긴급, 치명적 버그 발생 시 해결 브랜치
  - 해결 이후 main, develop에 모두 merge 필요

## 브랜치명 컨벤션

- 파트별로 나누어진 issue인 경우:
  `[be/fe]/[feature/fix/refactor 등]/[{이슈 번호}-{이슈 설명}`
- 공통 issue인 경우: ex) docs: \{이슈 설명\}
- checkout locally

# 기술 블로그 활성화

- 프론트엔드, 백엔드 각각 순서를 정해서 팀 블로그에 글을 쓴다.
  - 트러블 슈팅
  - 새로 배운 기술적 내용
  - 열띤 토론을 했던 주제
  - 고민되는 점 등등
