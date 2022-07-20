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
/* 
//Login, lo hice pensando en que va a volver a tocar el boton y va a volver a llamar a la funcion con el nuevo usuario y password, por eso no vuelve a llamar a los prompt
let usuario = window.prompt('Ingrese usuario (admin)');
let password = window.prompt('Ingrese contraseña (admin)');




const login = (usuario,password) => {
    if(usuario !== 'admin' || password !== 'admin'){
        window.alert('Datos incorrectos, por favor volver a ingresar los datos')
        return true // por ahora siempre devuelve true para no generar confusiones
    }
    else{
        window.alert('Ingreso con exito!')
        return true // por ahora siempre devuelve true para no generar confusiones
    }
    return true; // por ahora siempre devuelve true para no generar confusiones
};

createProduct(login);

function createProduct(login){
    if(login){
        for ( let i = 1; i <= 2; i++){
        let name = window.prompt(`Ingrese producto (2 en total) ) (Dar de alto el producto)`);
        let price = parseInt(window.prompt(`Ingresar precio del producto`));
        let stock = parseInt(window.prompt(`Ingresar stock del producto`));
        products.push (new product(i, name, price, stock))
        }
    }
    for (const pr of products){
    console.log(pr.name)
    window.alert(`${pr.name} ${pr.price} ${pr.stock}`)
    }
}

searchProduct = () =>{
    let search = window.prompt(`Buscar producto`);
    const found = products.find( product => product.name === search);
    console.log(found);
}

searchProduct();

//Añadir al carrito (sumar productos)
let total = 0
let price = 0;
const cart = (product) => total += product;
do{
     price = parseInt(window.prompt(`Añadir al carrito (precio del producto agregado).\nIngrese 0 para salir`));
    cart(price)
}while(price!== 0)

window.alert(`El precio final es: \n${total}`)

const cuotas = (cuotas) =>{
    switch (cuotas) {
        case 3:
        window.alert(`3 cuotas de: ${total/cuotas} por mes`)
        break;
        case 6:
        window.alert(`6 cuotas de: ${total/cuotas} por mes`)
        break;
        case 12:
        window.alert(`12 cuotas de: ${total/cuotas} por mes`)   
        break;
        default:
        cuotas = 1;
        window.alert(`1 cuota de: ${total/cuotas}`)   
        break;
    }
}
let cantCuotas = parseInt(window.prompt(`Ingresar cuantas cuotas quiere`));
cuotas(cantCuotas);

////


let contenedor = document.createElement("div");
contenedor.innerHTML = `${products.map(product => `<h3>Nombre: ${product.name} Precio: ${product.price}</h3>`)} `
document.body.appendChild(contenedor); */


let formProducts = document.getElementById("formProducts");
let inputName = document.getElementById("inputName");
let inputPrice = document.getElementById("inputPrice");
let labelStock = document.getElementById("labelStock");
let inputStock = document.getElementById("inputStock");
let table = document.getElementById("tableProducts");
let totalProducts = 0
document.getElementById('labelStock').innerHTML
= inputStock.value;

formProducts.onsubmit = (event) => validarFormulario (event);

function validarFormulario (event) {
    event.preventDefault();
    let name = inputName.value;
    let price = inputPrice.value;
    let stock = inputStock.value;
    parseInt(stock);
    totalProducts++;
    let help = productExists( name );
    help !== null ? addToProduct(help,stock) :products.push (new product(products.length+1, name, price, stock));
    console.log(products)
    updateLabelProducts();
    clearTable();
    addToTable();
    productsToLocalStorage();
}

function updateLabel() {
    document.getElementById('labelStock').innerHTML
    = inputStock.value;
}

function updateLabelProducts() {
    document.getElementById('totalProducts').innerHTML = `Cantidad de productos: ${totalProducts}`;
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