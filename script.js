/* const-> constante 
let-> pode ser alterado 
variavel-> espaco de memoria que da pra guardar o quiser la dentro
função-> e um trecho de codigo que so excuta quando e chamado
top: 30%;
left:50%;
transform: translatex(-50%);
*/
const form = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
function cliqueinobotao() {
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
}
function escondercliqueinobotao(){
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}