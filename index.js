import{S as i}from"./assets/vendor-DTx2mQCU.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c=document.querySelector(".search-form");console.log(c);const a=document.querySelector(".gallery"),u="45640148-48faf1be46dd1becbe9886964",f="https://pixabay.com/api/",d=({webformatURL:l,largeImageURL:o,tags:t,likes:s,views:e,comments:r,downloads:n})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img
          class="gallery-image"
          src="${l}"
          alt="${t}"
        />
      </a>
    </li>
  `,m=l=>{l.preventDefault();const o=c.elements.user_query.value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ").split(" ").join("+");fetch(`${f}?key=${u}&q=${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{console.log(t);const s=t.hits.map(e=>d(e)).join("");a.innerHTML=s}).catch(t=>{console.log(t)})};c.addEventListener("submit",m);new i(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=index.js.map
