/* Lógica de Programação
    [] Saber quando o usuário clicou no botão
    [] Mudar o posicionamento do modal
    [] Fazer a máscara ficar visível
    [] Quando clicar na máscara, fechar o modal
*/

const modal = document.querySelector(".modal");
const mascara = document.querySelector(".mascara-modal");

function mostrarModal() {
  modal.style.left = "50%";
  modal.classList.add("ativo");
  mascara.style.visibility = "visible";
}

function esconderModal() {
  modal.classList.remove("ativo");
  modal.style.left = "-30%";
  mascara.style.visibility = "hidden";
}
