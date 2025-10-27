const URL = "/api/liturgia";
console.log(URL);

async function liturgiaDiariaApi() {
  try {
    const resposta = await fetch(URL);
    if(resposta.status === 200){
      const obj = await resposta.json();
      console.log(obj);

      document.getElementById('referencia').textContent = obj.leituras.evangelho[0].referencia;
      document.getElementById('title').textContent = obj.leituras.evangelho[0].titulo;
      
      let textoEvangelho = obj.leituras.evangelho[0].texto;
      textoEvangelho = textoEvangelho.replace(/(\d+)/g, '<span class="numero">$1 </span>');
      
      document.getElementById('evangelho').innerHTML = textoEvangelho;
      
    } else {
      console.error('Erro na requisição:', resposta.status);
    }
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
}

liturgiaDiariaApi();