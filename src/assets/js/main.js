document.getElementById('inject-graph').addEventListener('click', function () {
  var inputFile = document.createElement('input');
  inputFile.type = 'file';

  inputFile.addEventListener('change', function () {
    var selectedFile = inputFile.files[0];
    enviarParaTeste(selectedFile);
  });

  inputFile.click();
});

// Função para enviar o arquivo para teste
function enviarParaTeste(arquivo) {
  console.log('Enviando arquivo para teste:', arquivo);
}
