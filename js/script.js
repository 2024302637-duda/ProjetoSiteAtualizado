

// VALIDAÇÃO DO FORMULÁRIO DE CONTATO
// Localiza o Formulário
const formulario = document.getElementById("formContato");
// Identifica quando o usuário tenta enviar o formulário
formulario.addEventListener("submit", function(event) {
    // Impede o envio padrão que é enviar os dados e recarregar a página 
    event.preventDefault();
    // Verifica se os campos estão preenchidos corretamente
    if (!formulario.checkValidity()) {
        event.stopPropagation();
        formulario.classList.add("was-validated");
        return;
    }
// O event stop interrompe a ação caso tenha um campo inválido
    // O was--valided adiciona a classe do brootstrap que mostra quais campos precism ser corrigidos
    // Cria uma janela modal utilizando o bootstrap
    const modal = new bootstrap.Modal(
        document.getElementById("modalSucesso")
    );
// Mostra a janela de confirmação
    modal.show();
    // Limpa os campos após o envio 
    formulario.reset();
// Remove as indicações de validação anteriores
    formulario.classList.remove("was-validated");

});
