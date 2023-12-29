document.getElementById('inject-graph').addEventListener('click', function () {
  // Cria um elemento input de arquivo
  var inputFile = document.createElement('input');
  inputFile.type = 'file';

  // Adiciona um evento para detectar quando um arquivo é selecionado
  inputFile.addEventListener('change', function () {
    // Aqui você pode acessar o arquivo selecionado
    var selectedFile = inputFile.files[0];
    console.log('Arquivo selecionado:', selectedFile);

    // Adicione aqui o código para lidar com o arquivo selecionado, se necessário
  });

  // Simula um clique no input de arquivo para abrir o diálogo de seleção de arquivo
  inputFile.click();
});