const formEl = document.querySelector(".search-form");
const listEl = document.querySelector(".gallery");
const btnLoadEl = document.querySelector(".btn-load");

const API_KEY = "53251288-0c39733b1864ffef8bb63504c";
const PER_PAGE = 12;
let page = 1;
let searchText = "";

async function getImageApi() {
  try {
    const url = ` https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchText}&page=${page}&per_page=${PER_PAGE}&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.hits;
  } catch (error) {
    console.log(error);
  }
}

async function showImages(img) {
  try {
    const card = img
      .map(({ webformatURL, likes, views, comments, downloads }) => {
        return `<li class="gelery_items">
    <div class="photo-card">
  <img src="${webformatURL}" alt="${comments}" />

  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
   ${likes}
    </p>

    <p class="stats-item">
      <i class="material-icons">visibility</i>
      ${views}
    </p>

    <p class="stats-item">
      <i class="material-icons">comment</i>
     ${comments}
    </p>

    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      ${downloads}
    </p>
  </div>
</div>
</li>`;
      })
      .join("");
    listEl.insertAdjacentHTML("beforeend", card);
  } catch (error) {
    console.log(error);
  }
}


async function load(isItem) {
  try {
      if (isItem) {
          listEl.innerHTML = ""
          page = 1
    }

    const images = await getImageApi();
    console.log(images);
      showImages(images);
      
      if (images.length === PER_PAGE) {
          page += 1;
          btnLoadEl.style.display = "flex"
      }

  } catch (error) {
    console.log(error);
  }
}

formEl.addEventListener("submit", async (evt) => {
  evt.preventDefault();
  const text = evt.currentTarget.elements.query.value.trim();
  searchText = text;
  await load(true);
});


btnLoadEl.addEventListener("click", async () => {
    page += 1;
    await load(false)
})