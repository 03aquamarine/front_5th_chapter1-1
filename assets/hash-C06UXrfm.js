import{c as o,L as l,P as c,H as d,a as g,s,F as m,E as u,b as h}from"./ErrorPage-HSpb5ei2.js";const f=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${d("/")}
      <main class="p-4">
      ${g()}
        <div class="space-y-4">
        ${s.posts.map(h).join("")}
        </div>
      </main>
      ${m()}
    </div>
  </div>
`,v=()=>{var n;const t=(n=s)==null?void 0:n.loggedIn;let e=location.hash;if(e.includes("#")||(e="#"+e),e==="#/login")if(t)location.hash="#/",window.dispatchEvent(new Event("hashchange"));else return l();if(e==="#/profile"){if(t)return c();location.hash="#/login",window.dispatchEvent(new Event("hashchange"))}return e==="#/"?f():u()};window.addEventListener("hashchange",()=>{a()});const a=()=>{document.getElementById("root").innerHTML=v(),document.querySelectorAll("a").forEach(t=>{t.addEventListener("click",e=>{if(e.preventDefault(),e.target.id==="logout"){o({newLoggedIn:!1}),localStorage.removeItem("user"),location.hash="/login",a();return}const n=e.target.href.replace(location.origin,"");location.hash=n,a()})}),document.addEventListener("submit",t=>{var e;if(t.target.id==="login-form"){t.preventDefault();const n=((e=document.getElementById("username"))==null?void 0:e.value)||"";localStorage.setItem("user",JSON.stringify({username:n,email:"",bio:""})),o({newLoggedIn:!0}),location.hash="#/",a()}else if(t.target.id==="profile-form"){t.preventDefault();const n=document.getElementById("username").value||"",i=document.getElementById("email").value||"",r=document.getElementById("bio").value||"";localStorage.setItem("user",JSON.stringify({username:n,email:i,bio:r}))}})};a();
