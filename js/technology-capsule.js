const url = "https://pedro2862.github.io/jsonData.github.io/data.json";
const imgTech = document.querySelector(".img-technology");
const descriptionTech = document.querySelector(".description-technology");
const bolinhasSlide = document.querySelectorAll(".bolinha-big");
let contadoraAnterior = 0;
bolinhasSlide[0].classList.add("active");
fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let dados = data.technology;

        for (let index = 0; index < dados.length; index++) {
            if (index == 0) {
                descriptionTech.appendChild(createElement("h2"));
                descriptionTech.appendChild(createElement("h1"));
                descriptionTech.appendChild(createElement("p"));
                imgTech.appendChild(createElement("img"));
            }
            function createElement(tag) {
                if (tag == "h2") {
                    descriptionTech.innerHTML = "";
                    let h2 = document.createElement(tag);
                    h2.innerText = "THE TERMINOLOGY…";
                    return h2
                }

                if (tag == "h1") {

                    let h1 = document.createElement(tag);
                    h1.innerText = dados[index].name;
                    return h1
                }

                if (tag == "p") {
                    let p = document.createElement(tag);
                    p.innerText = dados[index].description;
                    return p
                }

                if (tag == "img") {
                    imgTech.innerHTML = "";
                    let img = document.createElement(tag);

                    if (window.screen.width <= 1080) {
                        img.src = dados[index].images.landscape;
                    }
                    else {
                        img.src = dados[index].images.portrait;
                    }
                    return img;
                }
            }


            bolinhasSlide[index].addEventListener("click", () => {
                if (contadoraAnterior === index) {
                    return false;
                }
                else {
                    descriptionTech.appendChild(createElement("h2"));
                    descriptionTech.appendChild(createElement("h1"));
                    descriptionTech.appendChild(createElement("p"));
                    imgTech.appendChild(createElement("img"));
                    bolinhasSlide[contadoraAnterior].classList.remove("active");
                    bolinhasSlide[index].classList.add("active");
                    contadoraAnterior = index;
                }
            })

        }
    })



window.addEventListener("resize", () => {
    location.reload();

})


