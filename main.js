$(document).ready(function(){
    $('#enviarBtn').click(function(event) {
      event.preventDefault(); // Evita o comportamento padrão do botão de envio
      
      alert('Enviado!'); // Exibe um alerta com a mensagem "Enviado!"
    });
  });