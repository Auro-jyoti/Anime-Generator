const btnEl = document.getElementById("btn");
const animeContainerEle = document.querySelector(".anime-container");
const imgEle = document.querySelector(".anime-img");
const nameEle = document.querySelector(".anime-name");


btnEl.addEventListener("click", async function () {
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        nameEle.innerText = "Loading...";
        imgEle.src = "Spinner.svg";
        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();
        // console.log(data);
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        animeContainerEle.style.display = "block";
        imgEle.src = data.url;
        nameEle.innerText = data.artist;

    } catch (error) {
        animeContainerEle.innerText = "No Internet";
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
    }
});