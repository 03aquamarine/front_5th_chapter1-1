import{L as o,P as u,H as m,a as g,s,F as d,E as c,b as f,c as r}from"./ErrorPage-HSpb5ei2.js";const p=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${m("/")}
      <main class="p-4">
      ${g()}
        <div class="space-y-4">
        ${s.posts.map(f).join("")}
        </div>
      </main>
      ${d()}
    </div>
  </div>
`,v=()=>{var t;const e=(t=s)==null?void 0:t.loggedIn;if(location.pathname==="/login")if(e){history.replaceState(null,"","/"),n();return}else return o();return location.pathname==="/profile"?e?u():(history.pushState(null,"","/login"),o()):location.pathname==="/"?p():c()};window.addEventListener("popstate",()=>{n()});const n=()=>{document.getElementById("root").innerHTML=v(),document.addEventListener("click",e=>{if(e.target.tagName!=="A")return;if(e.preventDefault(),e.target.id==="logout"){e.preventDefault(),r({newLoggedIn:!1}),localStorage.removeItem("user"),history.pushState(null,"","/login"),n();return}const t=e.target.href.replace(location.origin,"");history.pushState(null,"",t),n()}),document.addEventListener("submit",e=>{var t;if(e.target.id==="login-form"){e.preventDefault();const a=((t=document.getElementById("username"))==null?void 0:t.value)||"";localStorage.setItem("user",JSON.stringify({username:a,email:"",bio:""})),r({newLoggedIn:!0}),history.pushState(null,"","/"),n()}else if(e.target.id==="profile-form"){e.preventDefault();const a=document.getElementById("username").value||"",i=document.getElementById("email").value||"",l=document.getElementById("bio").value||"";localStorage.setItem("user",JSON.stringify({username:a,email:i,bio:l}))}})};n();
