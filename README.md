# 🏨여기어때 클론 프로젝트
 

여기어때 홈페이지 캡쳐사진

[서비스 링크](https://epicktrees.net/)

(현재 백엔드AWS 계정이 삭제되어 복구중입니다.)

<br>
<br>

## 프로젝트 소개

- 여기어때 서비스를 클론하며, React Hook 및 Next.js에 대한 이해를 기반으로 제작했습니다. 
- 텍스트 검색, 숙박 유형별 조건 검색, 예약 기능, OAuth를 이용한 소셜 로그인 기능을 구현했습니다.
- Skeleton UI, 무한 스크롤 구현을 통해 사용자 경험 증대에 힘썼습니다.
- vercel(서버리스)와 AWS EC2를 통해 직접 배포하였습니다.


일단 커밋이라는 것을 해봅시다 1일 1커밋해야하니까

<br>
<br>

## 프로젝트 개요
> ASAC T아카데미 풀스택 과정 팀프로젝트
> 
> 기간 : 2023-09 ~ 2024-10 (약 2**개월**)
> 
> 
>
> **인원** : 프론트엔드(3명) : 정윤정, 변재정 / 백엔드(3명) : 배규리, 오찬솔, 허수민



<br>
<br>








<br>
<br>


### Stacks(프론트엔드)
`Next.JS`

- 다양한 rendering 패턴을 제공하며 프로젝트 협업에 적합
- CSR SSR ISR SSG등 다양한 rendering 패턴을 제공하는 React framework로 프로젝트 협업에 적합
- 폴더 기반 라우팅, SEO, 확장된 fetch caching, Middleware Cookie 등 다양한 기능 지원


 `Typescript`

 - 안정적인 개발과 높은 수준의 코드 품질을 유지
 - 손쉽게 버그를 예방할 수 있는 
 - 강력한 타입 시스템 기반 컴파일, 버그 예방 및 손쉬운 디버깅
 - 높은 생산성과 호환성





 `MUI ICON`


- 높은 수준의 디자인 퀄리티를 바탕으로 반응형 UI개발이 가능한 Material Design 기반 
- 방대한 컴포넌트 제공
- 높은 리액트 호환성, 방대한 자료



 `Scss`
 
- CSS보다 심플하고 가독성과 재사용성을 높여주어 유지보수 용이
- 프로그래밍 언어에서 사용하는 조건문, 반복문, 모듈화 등 다양한 도구 지원
- 동적 css 관리 가능


 
 `Vercel`
 
- Nextjs 배포에 최적화된 배포 플랫폼
- 빌트인 CI/CD, Live Preview, Analytics, 사이트 성능 측정 제공


 



<br>
<br>

### 서비스 아키텍쳐
![image](https://github.com/BoubleJ/epiktrees-bestchoice/assets/122145341/b99aad87-f609-4abf-8555-1c4746f49a7e)




[피그마 링크](https://www.figma.com/file/FVqAmv3JJEKCCGRtvev61S/%EC%97%AC%EA%B8%B0%EC%96%B4%EB%95%8C-%ED%81%B4%EB%A1%A0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?type=design&node-id=0-1&mode=design&t=53TKMhGvXomUF7vh-0)
<br>
<br>





<br>
<br>

### Key Features


- **로그인** : 소셜(카카오, 페이스북, 구글)로그인
- **홈 화면** : 메인페이지, 숙소찾기, 검색창, 마이페이지 링크
- **검색하기**
- **숙박리스트**
- **숙박 상세페이지**
- **마이페이지** : 예약내역, 찜목록, 공지사항 및 1대1문의
- **개인정보 수정**
- **로그아웃**
  





<br>
<br>


## 화면 구성 및 주요 기능 시현 영상 및 설명



### SNS 로그인 
- OAuth2 인증을 통한 카카오, 구글, 페이스북 계정 로그인 구현

![여기어때 카카오 로그인](https://github.com/BoubleJ/epiktrees-bestchoice/assets/122145341/534f97f1-057e-4498-8563-e2388d82e281)




### 예약 및 찜하기 기능 구현

-  쿠키 내 인증 토큰을 활용하여, 회원 로그인 시 예약 및 찜기능 사용 가능하도록 설계
-  RestApi를 활용해 예약 및 찜내역 CRUD 구현

![여기어때 예약](https://github.com/BoubleJ/epiktrees-bestchoice/assets/122145341/cbcdecf5-7432-4359-93d6-e32e69f96c46)

![여기어때 찜 구현](https://github.com/BoubleJ/epiktrees-bestchoice/assets/122145341/903a4064-2239-414f-a833-a3b6f09d1251)





<br>
<br>
<br>



## 트러블 슈팅
- 사용한 기능 인터넷에서 대충 배껴오기



