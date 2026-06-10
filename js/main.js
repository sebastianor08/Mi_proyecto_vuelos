const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const contraseña = document.querySelector("#contraseña");
const enviar = document.querySelector("#enviar");
const mensaje = document.querySelector("#mensaje");

enviar.addEventListener("click", () => {
    mensaje.textContent = "Hola " + nombre.value + " " + apellido.value;
})