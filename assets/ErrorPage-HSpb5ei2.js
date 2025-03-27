(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const d=[{key:1,name:"홍길동",createdDate:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{key:2,name:"김철수",createdDate:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{key:3,name:"이영희",createdDate:"25분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{key:4,name:"박민수",createdDate:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{key:5,name:"정수연",createdDate:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],n={loggedIn:!1,posts:d},u=({newLoggedIn:e})=>{n.loggedIn=e},i=e=>{const l=n.loggedIn?`
      <li><a href="/profile" class=${e==="/profile"?"text-blue-600 font-bold":"text-gray-600"}>프로필</a></li>
      <li><a href="#" id="logout" class="text-gray-600">로그아웃</a></li>
      `:`<li><a href="/login" class=${e==="/login"?"text-blue-600 font-bold":"text-gray-600"}>로그인</a></li>`;return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="/" class=${e==="/"?"text-blue-600 font-bold":"text-gray-600"}>홈</a></li>
        ${l}
      </ul>
    </nav>
  `},c=()=>`
  <footer class="bg-gray-200 p-4 text-center">
     <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
  `,m=()=>`
  <div class="mb-4 bg-white rounded-lg shadow p-4">
    <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
    <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
  </div>`,f=({key:e,name:l,createdDate:a,content:o})=>`<div class="bg-white rounded-lg shadow p-4" data-id=${e}>
      <div class="flex items-center mb-2">
        <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
        <div>
          <p class="font-bold">${l}</p>
          <p class="text-sm text-gray-500">${a}</p>
        </div>
      </div>
      <p>${o}</p>
      ${b()}
    </div>`,b=()=>`
  <div class="mt-2 flex justify-between text-gray-500">
    <button>좋아요</button>
    <button>댓글</button>
    <button>공유</button>
  </div>
  `,p=()=>{const e=JSON.parse(localStorage.getItem("user")),l=e==null?void 0:e.username,a=e==null?void 0:e.email,o=e==null?void 0:e.bio;return`
<div id="root">
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${i("/profile")}

      <main class="p-4">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
            내 프로필
          </h2>
          <form id="profile-form">
            <div class="mb-4">
              <label
                for="username"
                class="block text-gray-700 text-sm font-bold mb-2"
                >사용자 이름</label
              >
              <input
                type="text"
                id="username"
                name="username"
                value="${l}"
                class="w-full p-2 border rounded"
              />
            </div>
            <div class="mb-4">
              <label
                for="email"
                class="block text-gray-700 text-sm font-bold mb-2"
                >이메일</label
              >
              <input
                type="email"
                id="email"
                name="email"
                value="${a}"
                class="w-full p-2 border rounded"
              />
            </div>
            <div class="mb-6">
              <label
                for="bio"
                class="block text-gray-700 text-sm font-bold mb-2"
                >자기소개</label
              >
              <textarea
                id="bio"
                name="bio"
                rows="4"
                class="w-full p-2 border rounded"
              >${o}</textarea>
            </div>
            <button
              type="submit"
              id="profileUpdateBtn"
              class="w-full bg-blue-600 text-white p-2 rounded font-bold"
            >
              프로필 업데이트
            </button>
          </form>
        </div>
      </main>

      ${c()}
    </div>
  </div>
</div>
`},x=()=>`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">
          항해플러스
        </h1>
        <form id="login-form">
          <div class="mb-4">
            <input
              type="text"
              id="username"
              placeholder="사용자 이름"
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="mb-6">
            <input
              type="password"
              id="password"
              placeholder="비밀번호"
              class="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            id="loginBtn"
            class="w-full bg-blue-600 text-white p-2 rounded font-bold"
          >
            로그인
          </button>
        </form>
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <hr class="my-6" />
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">
            새 계정 만들기
          </button>
        </div>
      </div>
    </main>
  `,g=()=>`
<main class="bg-gray-100 flex items-center justify-center min-h-screen">
  <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
    <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
    <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
    <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
    <p class="text-gray-600 mb-8">
      요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
    </p>
    <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
      홈으로 돌아가기
    </a>
  </div>
</main>
`;export{g as E,c as F,i as H,x as L,p as P,m as a,f as b,u as c,n as s};
