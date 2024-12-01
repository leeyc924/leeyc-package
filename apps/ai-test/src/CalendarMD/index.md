# Calendar

## Prompt

- React로 달력 컴포넌트를 만들어줘
- css는 vanilla-extract/css로 작성해줘
- Calendar.png 파일은 css구성하는데만 참고할거야 이미지를 직접사용하진말아줘
- 컴포넌트 파일 이름은 index.tsx 로 해줘
- 스타일 파일 이름은 index.css.ts 로 해줘
- 컴포넌트 파일 위치는 src/CalendarMD 폴더에 넣어줘
- 헤더부분엔 연도와 월이 표시해줘
- 왼쪽 화살표 아이콘과 오른쪽 화살표 아이콘이고 각각 클릭하면 이전, 다음 월로 이동 로직도 함께 구현해줘 ex) 4월에서 3월로 이동하면 3월에 맞는 날짜가 나와야해
- 날짜는 현재월의 날짜 이전 월의 날짜 다음월의 날짜가 같이 표시돼야하며 이전 월의 날짜 와 다음 월의 날짜는 disabled 표시 로직으로 반드시 구현해줘
- 첫번째날짜와 마지막날짜는 backgroundColor: primary500, color: white
- 첫번째날짜와 마지막날짜 사이 색상은 backgroundColor: primary100, color: white
- disabled 날짜는 backgroundColor: disabled, color: gray300
- 그외 날짜 색상은 backgroundColor: white, color: black
- 날짜는 두개 선택 할 수 있으며 useState로 가지고 있을거야 선택한 두개 날짜 사이의 모든 날짜들 색상을 변경해주는 로직을 만들어줘 ex) 14일 선택 21일 선택하면 14일 ~ 21일사이의 모든 날짜가 색상변경이되어야하고 21일 선택 14일 선택하여도 동일하게 14일 ~ 21일사이의 모든 날짜가 색상변경이 되어야해
- palette 색상 정보 primary500: '#006879’, primary100: '#A9EDFF’, disabled: '#ddd’,  gray300: '#aaa'
- 타입에러는 발생하지 않게해줘
- tsconfig.json 파일 설정은 아래와 같아
  ```tsconfig.json
  {
    "strict": true,
    "strictNullChecks": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": false,
    "noUncheckedIndexedAccess": false,
    "isolatedModules": true,
    "allowJs": true,
    "checkJs": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "noEmit": true,
    "moduleResolution": "bundler",
    "module": "esnext",
    "moduleDetection": "force",
    "preserveWatchOutput": true,
    "declarationMap": true,
    "inlineSources": false,
    "declaration": true,
    "composite": false,
    "pretty": true,
    "incremental": true,
  }
  ```
- 웹 접근성을 고려해줘
  - 버튼에 aria-label 속성 추가
  - 선택된 날짜에 aria-selected 속성 추가
  - Click event가 있는 button 태그로 변경
  - 포커스 관한 키보드 이벤트 반드시 추가 해줘
  - Tab 키는 다음 포커스가능한 element로 이동해줘
  - 포커스가 날짜에 있는 상태에서 방향키를 누르면 각해당하는 날짜로 이동하게되
  - 첫번째행에서 방향키 위를 누르면 마지막행에서 부터 포커스가 가능한 행을 찾아 이동해
  - 마지막행에서 방향키 아래를 누르면 첫번쨰행에서 부터 포커스가 가능한 행을 찾아 이동해
  - 첫번째 열에서 방향키 왼쪽을 누르면 마지막 열로 이동해
  - 마지막 열에서 방향키 오른쪽을 누르면 첫번째 열로 이동해
  - 첫째날에서 방향키 왼쪽을 누르면 마지막 날로 이동해
  - 마지막날에서 방향키 오른쪽을 누르면 첫째날로 이동해
- 코드를 전체 다 작성해줘
