
//Login, lo hice pensando en que va a volver a tocar el boton y va a volver a llamar a la funcion con el nuevo usuario y password, por eso no vuelve a llamar a los prompt
let usuario = window.prompt('Ingrese usuario (admin)');
let password = window.prompt('Ingrese contraseña (admin)');
login();

function login(usuario,password){
    if(usuario !== 'admin' || password !== 'admin'){
        window.alert('Datos incorrectos, por favor volver a ingresar los datos')
    }
    else{
        window.alert('Ingreso con exito!')
    }
}

//Añadir al carrito (sumar productos)
let total = 0
let price = 0;
const cart = (product) => total += product;
do{
    if(price === ''){
        window.alert(`Por favor no dejar vacio, ingrese algo.\nIngrese 0 para salir`);
    }else{
        price = parseInt(window.prompt(`Ingresar precio del producto.\nIngrese 0 para salir`));
        cart(price)
    }
}while(price!== 0)

window.alert(`El precio final es: \n${total}`)

//Sacar cuotas
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
