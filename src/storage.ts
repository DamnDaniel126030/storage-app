import "../src/storage.css"
import "bootstrap/dist/css/bootstrap.min.css"


interface ingredient {
    id: number,
    name : string,
    imgName: string,

}[]


document.addEventListener("DOMContentLoaded", () =>{

    document.getElementById("storage")?.addEventListener("click", () =>{
        window.location.assign("index.html");
    })


    async function getIngredientData(){
        await fetch('../ingredient.json')
            .then((response) => response.json())
            .then((data) => createCards(data));
    };
            
    getIngredientData();

    

    function createCards(ingredient_data : ingredient[]){
        let cards = "";
        ingredient_data.forEach(element => {
            
            let card = 
            `
            <div class="card" id="card">
                <img class="card-img-top" style="width:100px" src="${"../image/ingredients/"+element.imgName}" alt="Card image cap">
                <p class="card-text">${element.name}</p>
            </div>
            `;
            cards += card;
        });

        document.getElementById("ingredient")!.innerHTML = cards;
    };
        
})