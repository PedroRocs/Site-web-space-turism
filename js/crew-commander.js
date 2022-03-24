const url = "https://pedro2862.github.io/jsonData.github.io/data.json";
const descricaoPlaneta = document.querySelector(".titulo-descricao-planeta");
const distanceInfo = document.querySelector("#distance-info");
const tempoDistance = document.querySelector("#time-distance");
const image = document.querySelector(".planet");
const opcao = document.querySelectorAll(".nome-planet h2");


fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let dados = data.crew;
        let contadoraAnterior;
        for (let i = 0; i < opcao.length; i++) {

            function createElement(element) {

                if (element == "h2") {
                    descricaoPlaneta.innerHTML = "";
                    let h2 = document.createElement(element);
                    h2.textContent = dados[i].name;
                    return h2
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


    

       

    

   