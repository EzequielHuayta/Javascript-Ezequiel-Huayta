
let formLogin = document.getElementById("formLogin");
let inputUsername = document.getElementById("username");
let inputPassword = document.getElementById("password");

formLogin.onsubmit = (event) => validarFormulario (event);

function validarFormulario (event) {
    event.preventDefault();
    if (inputUsername.value !== "admin" || inputPassword.value !== "admin") {
        swalError("Error en el formulario", "Por favor revisar los datos ingresados (username: admin) (password:admin)")
    } else {
        Swal.fire({
            title: 'Logueado con exito',
            text: 'Se lo redigira al home en breve',
            icon: "success",
        });
        username = inputUsername.value;
        password = inputPassword.value;
        userToLocalStorage();
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 2000);
    }
}

function swalError(title, text) {
    Swal.fire({
        title: title,
        text: text,
        icon: "error",
        confirmButtonText: "Ok"
    });
}

function userToLocalStorage() {
    localStorage.setItem("user", JSON.stringify('logged'));
}

function main() {

    userToLocalStorage();
}


main()