const url = "https://pedro2862.github.io/jsonData.github.io/data.json";
const h2 = document.querySelector(".titulo-descricao-planeta h2");
const p = document.querySelector(".titulo-descricao-planeta p");
const distance = document.querySelector("#distance-info");
const tempo = document.querySelector("#time-distance");
const img = document.querySelector(".planet img");
const opcao = document.querySelectorAll(".nome-planet h2");

fetch(url)
.then((resp)=> resp.json())

.then(function(data){
    let dados = data.destinations;
    for(let i = 0; i<opcao.length;i++){
        opcao[i].addEventListener("click", () =>{
            h2.innerHTML=dados[i].name;
            p.innerHTML=dados[i].description;
            distance.innerHTML=dados[i].distance;
            tempo.innerHTML=dados[i].travel;
            img.src=dados[i].images.png;
        });
    }
  
   
           
       }
   
)

.catch(function(error) {
    window.innerHTML="Recarregue a pegina";


});
