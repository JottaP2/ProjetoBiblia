const URL = "/api/liturgia";
console.log(URL);

async function getLiturgia() {
  try {
    const resposta = await fetch(URL);
    if(resposta.status === 200){
      const obj = await resposta.json();
        return obj
    } else {
      console.error('Erro na requisição:', resposta.status);
    }
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
}

async function loadData() {
  const getInfo = await getLiturgia()
  console.log(getInfo)

  const referencia = document.getElementById('referencia')
  const title = document.getElementById('title')
  const contentText = document.getElementById('contentText')

  const btnPrimeiraLeitura = document.getElementById('btnPrimeiraLeitura')
  const btnSalmo = document.getElementById('btnSalmo')
  const btnEvangelho = document.getElementById('btnEvangelho')
  

  btnSalmo.addEventListener('click', () => {
    referencia.innerHTML = getInfo.leituras.salmo[0].referencia
    title.innerHTML = getInfo.leituras.salmo[0].refrao
    contentText.innerHTML = getInfo.leituras.salmo[0].texto
  })

  btnPrimeiraLeitura.addEventListener('click', () => {
    referencia.innerHTML = getInfo.leituras.primeiraLeitura[0].referencia
    title.innerHTML = getInfo.leituras.primeiraLeitura[0].titulo
    contentText.innerHTML = getInfo.leituras.primeiraLeitura[0].texto
    primeiraLeitura.replace(/(\d+)/g, '<span class="numero">$1 </span>')
  })

  btnEvangelho.addEventListener('click', () => {
    referencia.innerHTML = getInfo.leituras.evangelho[0].referencia
    title.innerHTML = getInfo.leituras.evangelho[0].titulo
    contentText.innerHTML = getInfo.leituras.evangelho[0].texto
  })

  btnPrimeiraLeitura.click()
}

loadData()