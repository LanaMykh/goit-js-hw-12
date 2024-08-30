import{a as m,S as v,i as d}from"./assets/vendor-DWaGEket.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const g=({webformatURL:n,largeImageURL:s,tags:t,likes:r,views:e,comments:a,downloads:i})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <img
          class="gallery-image"
          src="${n}"
          alt="${t}"
        />
      <div class="image-caption">
        <span class="caption-item">
          <span class="caption-label">Likes</span>
          <span class="caption-value">${r}</span>
        </span>
        <span class="caption-item">
          <span class="caption-label">Views</span>
          <span class="caption-value">${e}</span>
        </span>
        <span class="caption-item">
          <span class="caption-label">Comments</span>
          <span class="caption-value">${a}</span>
        </span>
        <span class="caption-item">
          <span class="caption-label">Downloads</span>
          <span class="caption-value">${i}</span>
        </span>
      </div>
      </a>
    </li>
  `,S="45640148-48faf1be46dd1becbe9886964";m.defaults.baseURL="https://pixabay.com";const h=async(n,s)=>{const t={params:{key:S,orientation:"horizontal",image_type:"photo",safesearch:"true",per_page:15,page:s,q:n}},{data:r}=await m.get("/api/",t);return r},u=document.querySelector(".search-form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader"),o=document.querySelector(".load-more"),f=new v(".gallery a",{captionsData:"alt",captionDelay:250});let p=1,y="",b=0,L=0;const q=async n=>{try{n.preventDefault(),l.innerHTML="",p=1,o.classList.add("is-hidden"),c.style.display="inline-block",y=u.elements.user_query.value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ").split(" ").join("+");const s=await h(y,p);if(s.hits.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.style.display="none",l.innerHTML="",u.reset();return}const t=s.hits.map(e=>g(e)).join("");l.innerHTML=t,b=l.querySelector("li").getBoundingClientRect().height,L=Math.ceil(s.totalHits/15),c.style.display="none",f.refresh(),o.classList.remove("is-hidden")}catch(s){d.error({message:s.message,position:"topRight"})}},C=async n=>{try{p+=1,o.classList.add("is-hidden"),c.style.display="inline-block";const t=(await h(y,p)).hits.map(r=>g(r)).join("");l.insertAdjacentHTML("beforeend",t),scrollBy({top:b*2,behavior:"smooth"}),c.style.display="none",o.classList.remove("is-hidden"),f.refresh(),p===L&&(o.classList.add("is-hidden"),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(s){d.error({message:s.message,position:"topRight"})}};u.addEventListener("submit",q);o.addEventListener("click",C);
//# sourceMappingURL=index.js.map
