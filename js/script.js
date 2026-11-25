

// VALIDAÇÃO DO FORMULÁRIO DE CONTATO

const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event) {

    // Impede o envio padrão
    event.preventDefault();

    // Verifica se os campos estão preenchidos corretamente
    if (!formulario.checkValidity()) {

        event.stopPropagation();

        formulario.classList.add("was-validated");

        return;
    }

    // Abre o modal de sucesso
    const modal = new bootstrap.Modal(
        document.getElementById("modalSucesso")
    );

    modal.show();

    // Limpa os campos após o envio simulado
    formulario.reset();

    formulario.classList.remove("was-validated");

});
