let e=document.querySelector(".search-form"),t=document.querySelector(".gallery"),a=document.querySelector(".btn-load"),s=1,i="";async function c(){try{let e=` https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${i}&page=${s}&per_page=12&key=53251288-0c39733b1864ffef8bb63504c`,t=await fetch(e);return(await t.json()).hits}catch(e){console.log(e)}}async function l(e){try{let a=e.map(({webformatURL:e,likes:t,views:a,comments:s,downloads:i})=>`<li class="gelery_items">
    <div class="photo-card">
  <img src="${e}" alt="${s}" />

  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
   ${t}
    </p>

    <p class="stats-item">
      <i class="material-icons">visibility</i>
      ${a}
    </p>

    <p class="stats-item">
      <i class="material-icons">comment</i>
     ${s}
    </p>

    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      ${i}
    </p>
  </div>
</div>
</li>`).join("");t.insertAdjacentHTML("beforeend",a)}catch(e){console.log(e)}}async function o(e){try{e&&(t.innerHTML="",s=1);let i=await c();console.log(i),l(i),12===i.length&&(s+=1,a.style.display="flex")}catch(e){console.log(e)}}e.addEventListener("submit",async e=>{e.preventDefault(),i=e.currentTarget.elements.query.value.trim(),await o(!0)}),a.addEventListener("click",async()=>{s+=1,await o(!1)});
//# sourceMappingURL=mini-project-goit.558dc090.js.map
