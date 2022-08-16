class product{
    constructor(id, product, price, stock){
        this.id = id;
        this.name = product
        this.price = price;
        this.vendido = false;
        this.stock = parseInt(stock)
    }
}
let products = [];

let formProducts = document.getElementById("formProducts");
let inputName = document.getElementById("inputName");
let inputPrice = document.getElementById("inputPrice");
let labelStock = document.getElementById("labelStock");
let inputStock = document.getElementById("inputStock");
let table = document.getElementById("tableProducts");
let totalProducts = 0
document.getElementById("labelStock").innerHTML = inputStock.value;

formProducts.onsubmit = (event) => validarFormulario (event);

function validarFormulario (event) {
    let name = ""
    let price = ""
    let stock = 0
    event.preventDefault();
    if (inputName.value === "" || inputPrice.value === "") {
        swalError("Error en el formulario", "Por favor cargar todos los datos")
    } else {
        name = inputName.value;
        price = inputPrice.value;
        stock = inputStock.value;
        parseInt(stock);
        totalProducts++;
        let help = productExists( name );
        help !== null 
        ?(
        addToProduct(help,stock),
        swalSucess("El producto ya existe", "Se ha agregado el stock al producto existente")  
        )
        :(
        products.push (new product(products.length+1, name, price, stock) ),
        swalSucess("Producto registrado con exito!", "")  
        )   
        console.log(products)
        updateLabelProducts();
        clearTable();
        addToTable();
        productsToLocalStorage();
    }
}

function updateLabel() {
    document.getElementById("labelStock").innerHTML
    = inputStock.value;
}

function updateLabelProducts() {
    document.getElementById("totalProducts").innerHTML = `Cantidad de productos: ${totalProducts}`;
}

function swalSucess(title, text) {
    Swal.fire({
        title: title,
        text: text,
        icon: "success",
        confirmButtonText: "Ok"
    });
}

function swalError(title, text) {
    Swal.fire({
        title: title,
        text: text,
        icon: "error",
        confirmButtonText: "Ok"
    });
}

function productExists( nombre ) {
    
    console.log(products)
    const found = products.findIndex( producto => producto.name.toLowerCase() === nombre.toLowerCase() );
    if (found !== -1) {
        return found
    } else {
        return null
    }
}

function addToProduct(help,stock) {
    debugger
    a = parseInt(stock);
    let aux = [...products];
    b=  parseInt(aux[help].stock);
    products[help].stock = a += b;;
}

function addToTable() {
    products.forEach(({id, name, price, stock}) => {
        let tableRow = document.createElement("tr");
        tableRow.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${price}</td>
        <td>${stock}</td>
        `
        table.tBodies[0].append(tableRow);
    })
}

function clearTable() {
    while(table.rows.length > 1) {
        table.deleteRow(1);
    }
}

function productsToLocalStorage() {
    localStorage.setItem("listProduct", JSON.stringify(products));

}

function getProductsToLocalStorage() {
    let productsInLocalStorage = localStorage.getItem("listProduct");
    productsInLocalStorage !== null 
    ? 
    products = JSON.parse(productsInLocalStorage)
    :
    products = products;
    
}




function main() {

    productsToLocalStorage();
    addToTable();

    
}



main()