import{L as s,P as g,H as m,a as d,s as l,F as c,E as f,b as p,c as i}from"./ErrorPage-HSpb5ei2.js";const r="/front_5th_chapter1-1",v=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${m("/")}
      <main class="p-4">
      ${d()}
        <div class="space-y-4">
        ${l.posts.map(p).join("")}
        </div>
      </main>
      ${c()}
    </div>
  </div>
`,h=()=>{var o;const e=(o=l)==null?void 0:o.loggedIn,t=location.pathname.split("/"),n=t[t.length-1];if(n==="login")if(e){history.replaceState(null,"",`${r}/`),a();return}else return s();return n==="profile"?e?g():(history.pushState(null,"",`${r}/login`),s()):n===""?v():f()};window.addEventListener("popstate",()=>{a()});const a=()=>{document.getElementById("root").innerHTML=h(),document.addEventListener("click",e=>{if(e.target.tagName!=="A")return;if(e.preventDefault(),e.target.id==="logout"){e.preventDefault(),i({newLoggedIn:!1}),localStorage.removeItem("user"),history.pushState(null,"",`${r}/login`),a();return}const t=e.target.href.replace(location.origin,"");history.pushState(null,"",`${r}${t}`),a()}),document.addEventListener("submit",e=>{var t;if(e.target.id==="login-form"){e.preventDefault();const n=((t=document.getElementById("username"))==null?void 0:t.value)||"";localStorage.setItem("user",JSON.stringify({username:n,email:"",bio:""})),i({newLoggedIn:!0}),history.pushState(null,"",`${r}/`),a()}else if(e.target.id==="profile-form"){e.preventDefault();const n=document.getElementById("username").value||"",o=document.getElementById("email").value||"",u=document.getElementById("bio").value||"";localStorage.setItem("user",JSON.stringify({username:n,email:o,bio:u}))}})};a();
