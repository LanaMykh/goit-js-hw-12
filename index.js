import{a as u,S as m,i as p}from"./assets/vendor-DWaGEket.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const d=({webformatURL:r,largeImageURL:s,tags:t,likes:n,views:e,comments:a,downloads:o})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <img
          class="gallery-image"
          src="${r}"
          alt="${t}"
        />
      <div class="image-caption">
        <span class="caption-item">
          <span class="caption-label">Likes</span>
          <span class="caption-value">${n}</span>
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
  `,y="45640148-48faf1be46dd1becbe9886964";u.defaults.baseURL="https://pixabay.com";const f=async(r,s)=>{const t={params:{key:y,orientation:"horizontal",image_type:"photo",safesearch:"true",per_page:15,page:s,q:r}},{data:n}=await u.get("/api/",t);return n},c=document.querySelector(".search-form"),i=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new m(".gallery a",{captionsData:"alt",captionDelay:250});let h=1;const b=async r=>{try{r.preventDefault(),i.innerHTML="",l.style.display="inline-block";const s=c.elements.user_query.value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ").split(" ").join("+"),t=await f(s,h);if(t.hits.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.style.display="none",i.innerHTML="",c.reset();return}const n=t.hits.map(e=>d(e)).join("");i.innerHTML=n,l.style.display="none",g.refresh()}catch(s){p.error({message:s.message,position:"topRight"})}};c.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
