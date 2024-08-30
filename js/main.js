$(document).ready(function () {
    $("#telefone").mask("(00) 0 0000-0000");
  
    $("form").validate({
      rules: {
        nome: { required: true, nome: true },
        email: { required: true, email: true },
        telefone: { required: true },
      },
      messages: {
        nome: "Insira seu nome completo",
        email: "Insira um email valido",
        telefone: "Insira um numero de celular",
      },
      submitHandler: function (form) {
        alert(`Cadastro concluído com sucesso!`);
  
        nome.value = "";
        email.value = "";
        telefone.value = "";
      },
      invalidHandler: function (evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
          alert(`Exitem ${camposIncorretos} campos incorretos ou vazios`);
        }
      },
    });
  });
