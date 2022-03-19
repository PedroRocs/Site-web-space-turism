const url = "https://pedro2862.github.io/jsonData.github.io/data.json";
const descricaoPlaneta = document.querySelector(".titulo-descricao-planeta");
const distanceInfo = document.querySelector("#distance-info");
const tempoDistance = document.querySelector("#time-distance");
const image = document.querySelector(".planet");
const opcao = document.querySelectorAll(".nome-planet h2")

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let dados = data.destinations;
        let contadoraAnterior;
        for (let i = 0; i < opcao.length; i++) {

            function createElement(element) {

                if (element == "h2") {
                    descricaoPlaneta.innerHTML = "";
                    let h2 = document.createElement(element);
                    h2.textContent = dados[i].name;
                    return h2
                }

                if (element == "p") {

                    let p = document.createElement(element);
                    p.textContent = dados[i].description;
                    return p;

                }

                if (element == "spanTemp") {
                    document.querySelector(".info-add").remove()
                    let span = document.createElement("span");
                    span.classList.add("info-add");
              
                    span.textContent=dados[i].travel;
                    return span;
                    }
                if (element == "spanDistance") {
                    document.querySelector(".info-add").remove()
                        let span = document.createElement("span");
                        span.classList.add("info-add")
                        span.textContent=dados[i].distance;
                        console.log(span);
                        return span;
                        
                        }

                if (element == "div") {
                    let div = document.createElement(element);
                    return div
                }

                if (element == "img") {
                    image.innerHTML = "";
                    let img = document.createElement(element);
                    img.src = dados[i].images.png;
                    return img
                }

            }

            opcao[i].addEventListener("click", () => {
                if (opcao[0].classList == "after" && i == 1) {
                    opcao[0].classList.remove("after");
                }
                descricaoPlaneta.appendChild(createElement("h2"));
                descricaoPlaneta.appendChild(createElement("p"));
                image.appendChild(createElement("img"));
                tempoDistance.appendChild(createElement("spanTemp"));
                distanceInfo.appendChild(createElement("spanDistance"));
                opcao[i].classList.add("after");
                if (contadoraAnterior != undefined) {
                    opcao[contadoraAnterior].classList.remove("after");
                }
                contadoraAnterior = i;
            });
        }})
    .catch(function (error) {
        window.innerHTML = "Recarregue a pegina";
    });


    

       

    

   