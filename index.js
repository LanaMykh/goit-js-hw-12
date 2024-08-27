import{S as p,i as u}from"./assets/vendor-Bg-92U7s.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const m=({webformatURL:r,largeImageURL:t,tags:s,likes:n,views:e,comments:a,downloads:o})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${r}"
          alt="${s}"
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
  `,d="45640148-48faf1be46dd1becbe9886964",f="https://pixabay.com/api/",y=r=>{const t=new URLSearchParams({orientation:"horizontal",image_type:"photo",safesearch:"true"});return fetch(`${f}?key=${d}&q=${r}&${t}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},l=document.querySelector(".search-form"),c=document.querySelector(".gallery"),i=document.querySelector(".loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250}),g=r=>{r.preventDefault(),i.style.display="inline-block";const t=l.elements.user_query.value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ").split(" ").join("+");y(t).then(s=>{if(s.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.style.display="none",c.innerHTML="",l.reset();return}const n=s.hits.map(e=>m(e)).join("");c.innerHTML=n,i.style.display="none",h.refresh()}).catch(s=>{console.log(s)})};l.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
