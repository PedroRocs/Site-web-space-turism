const url = "https://pedro2862.github.io/jsonData.github.io/data.json";
let descriptionCrew = document.querySelector(".description-crew");
let imgCrew = document.querySelector(".img-people");
let bolinhas = document.querySelectorAll(".bolinha");



fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let dados = data.crew;
        let contadoraAnterior;
        for (let i = 0; i < dados.length; i++) {
            console.log(dados[i])
            function createElement(element) {

                if (element == "h2") {
                   
                    let h2 = document.createElement(element);
                    h2.textContent = dados[i].name;
                    return h2
                }

                if (element == "h3") {
                    descriptionCrew.innerHTML = "";
                     let h3 = document.createElement(element);
                     h3.textContent = dados[i].role;               ;
                     return h3
                 }

                 if (element == "p") {
                  
                     let p = document.createElement(element);
                     p.textContent = dados[i].bio;
                     return p
                 }

                 if (element == "img") {
                  imgCrew.innerHTML="";
                    let img = document.createElement(element);
                    img.src=dados[i].images.png
                    return img
                }

            }

            bolinhas[i].addEventListener("click", () => {
                if (bolinhas[0].classList == "bolinha","after" && i >= 1) {
                    bolinhas[0].classList.remove("after");
                    console.log("removeu")
                }
                descriptionCrew.appendChild(createElement("h3"));
               descriptionCrew.appendChild(createElement("h2"));
               descriptionCrew.appendChild(createElement("p"));
                imgCrew.appendChild(createElement("img"));
                
                bolinhas[i].classList.add("after");
                if (contadoraAnterior != undefined) {
                    bolinhas[contadoraAnterior].classList.remove("after");
                }
                contadoraAnterior = i;
            });
        }})
    .catch(function (error) {
        window.innerHTML = "Recarregue a pegina";
    });


    

       

    

   