import { setLoggedIn, state } from "../store/state";

export const Header = (url) => {
  const nav = !!state.loggedIn
    ? /*html*/ `
      <li><a href="/profile" class=${url === "/profile" ? "text-blue-600 font-bold" : "text-gray-600"}>프로필</a></li>
      <li><a href="#" id="logout" class="text-gray-600">로그아웃</a></li>
      `
    : /*html*/ `<li><a href="/login" class=${url === "/login" ? "text-blue-600 font-bold" : "text-gray-600"}>로그인</a></li>`;

  return /*html*/ `
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="/" class=${url === "/" ? "text-blue-600 font-bold" : "text-gray-600"}>홈</a></li>
        ${nav}
      </ul>
    </nav>
  `;
};
