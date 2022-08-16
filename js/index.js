const getCardProducts =  async () => {
    
const container = document.getElementById("mainContainer");

const resp = await fetch('./data/products.json')
const data = await resp.json()

        data.forEach((product) => {
            const div = document.createElement('div')
            div.className = 'card'
            div.innerHTML = `
                <img src="${product.picture}" style="height:250px; width: 250px"class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}.</p>
                <a href="#" class="btn btn-primary">Mas informacion</a>
                </div>
            `
   
            container.append(div);
        })
    

}
function main() {
    document.getElementById('search').onclick = function() {
        getProductsFilter();
     }
    verifyUser();
    getCardProducts();
    
}


const verifyUser = () => {

    let user = localStorage.getItem("user");
    if (user !== null) {
        document.getElementById('loginButton').style.display = "none";
    }
}

const getProductsFilter =  async () => {
    
    const container = document.getElementById("mainContainer")
    const search = document.getElementById("inputSearch").value
    const resp = await fetch('./data/products.json')
    const data = await resp.json()
    container.innerHTML = "";
            data.forEach((product) => {
                if (product.name.toLowerCase().includes(search.toLowerCase())) {
                const div = document.createElement('div')
                div.className = 'card'
                div.innerHTML = `
                    <img src="${product.picture}" style="height:250px; width: 250px"class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}.</p>
                    <a href="#" class="btn btn-primary">Mas informacion</a>
                    </div>
                `
                container.append(div)
                } 
            })
    
    }

main()

