# Leeyc package

leeyc-package의 패키지를 관리하는 모노레포 입니다
<br>
<br>

## Getting Started

- [node](https://nodejs.org/ko/download) 설치
- [pnpm](https://pnpm.io/installation) 설치
- node module 설치

```command
pnpm install --frozen-lockfile
```

- 패키지 빌드

```command
pnpm build
```

## 프로젝트 기본 정보

### STACKS

---

![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078d7?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![IntelliJ IDEA](https://img.shields.io/badge/IntelliJ_IDEA-%23000000?style=for-the-badge&logo=intellij-idea&logoColor=white)
![TurboRepo](https://img.shields.io/badge/TurboRepo-EF4444?style=for-the-badge&logo=turborepo&logoColor=white)
![HTML](https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Css](https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white)
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)
![Storybook](https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=Storybook&logoColor=white)
![NextJs](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white)
![Node JS](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=whit)
![Git Lab](https://img.shields.io/badge/gitlab-F05032?style=for-the-badge&logo=gitlab&logoColor=#FC6D26)
![Bash](https://img.shields.io/badge/BASH-F15A24?style=for-the-badge&logo=Zsh&logoColor=white)
![Docker Compose](https://img.shields.io/badge/docker-%232496ED?style=for-the-badge&logo=docker&logoColor=white)
<br>
<br>

### 프로젝트 구성도

---

<br>
<br>

### Coding Convention

| 항목                    | 링크                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------ |
| **Eslint Rule**         | [packages/config/eslint/src/index.js](packages/config/eslint/src/index.js)           |
| **Prettier Formatter**  | [packages/config/prettier/src/index.js](packages/config/prettier/src/index.js)       |
| **Typescript Compiler** | [packages/config/typescript/src/base.json](packages/config/typescript/src/base.json) |

<br>
<br>

### Git Commit Convention

---

### 구조

- body 와 footer 는 생략 가능

```
type: Subject

body

footer
```

### Type

- 타입은 소문자

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷 변경, 세미콜론 누락, 코드 수정이 없는 경우
modify: 기존 코드의 기능을 추가하거나 변경
refactor: 중복 코드 제거나 변수명 변경, 가독성 향상 등 기존 코드 개선
test: 테스트 코드. 리펙토링 테스트 코드를 추가한 경우
chore: 빌드 업무 수정, 패키지 매니저 수정
remove: 파일 및 코드 삭제
rename: 파일 및 코드명 변경
```

### Subject

- 제목. 코드 변경사항에 대한 짧은 요약
- 마침표 및 특수 기호는 사용하지 않음
- 영문으로 표기하는 경우 동사를 가장 앞에 두고 첫 글자는 대문자로 표기

```
Add: 코드나 테스트, 예제, 문서등의 파일 생성이 있는 경우
Update: 라이브러리, 프레임워크등의 업데이트가 있는 경우
Simplify: 복잡한 코드를 단순화 하는 작업
Comment: 주석 추가 및 변경
Move: 코드 이동
```

### Body

- 한 줄에 72자 이내로 작성
- 어떻게 보다는 무엇을, 왜 변경했는지를 작성
- 최대한 자세히 작성

### Footer

- issue tracker id 를 명시할 때 사용
- 여러 개의 이슈를 참조할 때는 콤마로 구분하여 사용

```
Fixes: 이슈 수정 중
Resolves: 이슈를 해결했을 때
Ref: 참고할 이슈가 있을 때
Related to: 해당 커밋에 관련된 이슈가 있을 때
```

### e.g)

```
feat: Add login page

or

feat: 로그인 페이지 추가

or

feat: 로그인 기능 구현

로그인 시 토큰 정보를 스토어에 저장

Resolves: Global-12676
Ref: Global-123
Related to: Global-234, Global-435
```

<br>
<br>

### 프로젝트 구조

---

프로젝트 구조는 다음과 같습니다.

- third party 라이브러리들은 packages 하위로 구성합니다
- docs와 같이 애플리케이션 배포가 이루어지는것은 apps 하위로 구성합니다

```
leeyc-package
├── apps
    ├── docs
├── packages
    ├── config
        ├── eslint
        ├── prettier
        ├── typescript
    ├── ui
    └── icons
    └── utils
└── scripts
```

<br>
<br>

### Package

```command
pnpm install --frozen-lockfile
```

패키지가 업데이트되거나, 최초 실행 시 위 명령어로 패키지 설치가 필요합니다.

```command
pnpm store prune
pnpm clean
```

or

```command
pnpm clear-install
```

패키지가 꼬여 빌드 등이 되지 않을 땐 위 명령어로 정리할 수 있습니다.

모든 패키지는 [TypeScript](https://www.typescriptlang.org/)를 사용합니다.

의존성 추가 및 삭제는 다음 명령을 통해 진행할수있습니다

```command
pnpm add $PACKAGE_NAME
pnpm remove $PACKAGE_NAME
or
pnpm add -D $PACKAGE_NAME

# Example
pnpm add -D react
pnpm remove react
```

### Nexus Publish

- 각각 패키지별 수정내역을 남기기 위해 `changeset`을 사용 합니다.

```command
pnpm changeset
```

- `pnpm changeset` 명령어를 입력하면 터미널에 패키지 리스트가 나열되고 `방향키 + 스페이스 (선택)`으로 버전(major, minor, patch) 변경할 패키지를 선택합니다
- major, minor, patch 변경 버전을 입력후 CHANGESETLOG.md 에 남길 메시지를 작성합니다
- .changeset/\*\*.md 파일이 생성된것을 확인합니다

```command
pnpm changeset:version
```

- `pnpm changeset:version`명령어로 changeset으로 생성한 md 파일을 각 패키지의 CHANGELOG.md를 업데이트 합니다

```command
pnpm changeset:publish
```

- `pnpm changeset:publish`명령어로 Nexus에 배포합니다 package.json > publishConfig 에 해당하는 registry로 패키지가 배포됩니다

---
