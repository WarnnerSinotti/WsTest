// CONFIGURAÇÃO DE TEMPO - WEBSITE
export const config = {
  timeout: 60000, //TEMPO DE RESPOSTA DO ELEMENTO
  test: 50000, //TEMPO FINAL DO TESTE - VALIZAR APENAS PARA DESENVOLVER
  pageLoad: 2000, //TEMPO PARA CARREGAR A PÁGIN
};


// Screenshot IMG - Detalhamento de Imagem 
let data = new Date();
let dataFormatada = ((data.getDate() )) + "." + ((data.getMonth() + 1)) + "." + data.getFullYear() + "-" + data.getHours() + "." + data.getMinutes() + "." + data.getSeconds(); 

export var printError = {
  browser: 'features/img/' + dataFormatada + 'browser.png',
  mobile: 'features/img/' + dataFormatada + 'mobile.png'
};
