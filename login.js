//Login

const log = document.getElementById("login")


log.logButton.onclick = function Login(event) {
    event.preventDefault()
    let usuario = log.usuario.value;
    let password = log.password.value;
    console.log(usuario, password)
    if (usuario === "NICOLAS" && password === "1234") {
        window.location.href = "pedidos.html"
    }
    if (usuario != "NICOLAS" && password != "1234") {
        swal("Ingrese datos validos", {
            icon: "error",
        });
    }
}