import{a as m,S as v,i as d}from"./assets/vendor-DWaGEket.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const g=({webformatURL:n,largeImageURL:t,tags:s,likes:r,views:e,comments:a,downloads:o})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${n}"
          alt="${s}"
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
          <span class="caption-value">${o}</span>
        </span>
      </div>
      </a>
    </li>
  `,S="45640148-48faf1be46dd1becbe9886964";m.defaults.baseURL="https://pixabay.com";const h=async(n,t)=>{const s={params:{key:S,orientation:"horizontal",image_type:"photo",safesearch:"true",per_page:15,page:t,q:n}},{data:r}=await m.get("/api/",s);return r},u=document.querySelector(".search-form"),i=document.querySelector(".gallery"),l=document.querySelector(".loader"),c=document.querySelector(".load-more"),f=new v(".gallery a",{captionsData:"alt",captionDelay:250});let p=1,y="",b=0,L=0;const q=async n=>{try{n.preventDefault(),i.innerHTML="",p=1,l.style.display="inline-block",y=u.elements.user_query.value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ").split(" ").join("+");const t=await h(y,p);if(t.hits.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.style.display="none",i.innerHTML="",u.reset();return}const s=t.hits.map(e=>g(e)).join("");i.innerHTML=s,b=i.querySelector("li").getBoundingClientRect().height,L=Math.ceil(t.totalHits/15),l.style.display="none",f.refresh(),c.classList.remove("is-hidden")}catch(t){d.error({message:t.message,position:"topRight"})}},C=async n=>{try{p+=1,c.classList.add("is-hidden"),l.style.display="inline-block";const s=(await h(y,p)).hits.map(r=>g(r)).join("");i.insertAdjacentHTML("beforeend",s),scrollBy({top:b*2,behavior:"smooth"}),l.style.display="none",c.classList.remove("is-hidden"),f.refresh(),p===L&&(c.classList.add("is-hidden"),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){d.error({message:t.message,position:"topRight"})}};u.addEventListener("submit",q);c.addEventListener("click",C);
//# sourceMappingURL=index.js.map
