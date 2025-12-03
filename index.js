import{a as b,S as E,i as n}from"./assets/vendor-DvfmeZXB.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const B="53402842-8b5ac7b96fa102848e26b89cd",I="https://pixabay.com/api/",g=async(e,o=1)=>{try{const t={key:B,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};return(await b.get(I,{params:t})).data}catch(t){throw t}},w=new E(".gallery a",{captions:!0,captionsData:"alt"}),p=e=>{const o=document.getElementById("gallery");if(!o)return;const t=e.map(r=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${r.largeImageURL}">
        <img
          class="gallery-image"
          src="${r.webformatURL}"
          alt="${r.tags}"
        />
      </a>
      <div class="gallery-info">
        <div class="info-item">
          <span class="info-label">Likes</span>
          <span class="info-value">${r.likes}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Views</span>
          <span class="info-value">${r.views}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Comments</span>
          <span class="info-value">${r.comments}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Downloads</span>
          <span class="info-value">${r.downloads}</span>
        </div>
      </div>
    </li>
  `).join("");o.insertAdjacentHTML("beforeend",t),w.refresh()},P=()=>{const e=document.getElementById("gallery");e&&(e.innerHTML="")},h=()=>{const e=document.getElementById("loader");e&&e.classList.remove("is-hidden")},c=()=>{const e=document.getElementById("loader");e&&e.classList.add("is-hidden")},y=()=>{const e=document.getElementById("load-more");e&&e.classList.remove("is-hidden")},l=()=>{const e=document.getElementById("load-more");e&&e.classList.add("is-hidden")},v=document.getElementById("search-form"),f=v.querySelector('input[name="search-text"]'),m=document.getElementById("load-more");let u="",i=1;const L=15;l();v.addEventListener("submit",async e=>{e.preventDefault();const o=f.value.trim();if(o===""){n.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}u=o,i=1,P(),l(),h();try{const t=await g(u,i);if(c(),!t.hits||t.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(t.hits),i*L<t.totalHits?y():(l(),n.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),f.value=""}catch{c(),n.error({title:"Error",message:"Failed to fetch images. Please try again.",position:"topRight"})}});m&&m.addEventListener("click",async()=>{i+=1,l(),h();try{const e=await g(u,i);if(c(),e.hits&&e.hits.length>0){p(e.hits);const t=document.getElementById("gallery").querySelector(".gallery-item");if(t){const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}}i*L>=e.totalHits?(l(),n.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):y()}catch{c(),n.error({title:"Error",message:"Failed to fetch images. Please try again.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
