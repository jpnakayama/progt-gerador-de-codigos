const codigoSequencialDoDocumento = document.getElementById('categoria-oito')
const inputSequencialDoDocumento = document.getElementById('input-sequencial')

function adicionaSequencial() {
   
  codigoSequencialDoDocumento.innerHTML = ` 
  <p class="codigo-gerado">${inputSequencialDoDocumento.value}</p>
  `
}


const codigoCategoriaDimensao = document.getElementById('categoria-dois')
const inputCategoriaDimensao = document.getElementById('input-dimensao')
const codigoUnidadeDeMedida = document.getElementById('categoria-dois-unidade-de-medida')
const botoesUnidadeMedida = document.querySelectorAll('.btnDimensao')

inputCategoriaDimensao.addEventListener('keyup', e => {
  const categoriaDimensao = e.target.value    
  
  codigoCategoriaDimensao.innerHTML = ` 
  <p class="codigo-gerado">${categoriaDimensao}</p>
  `
  }
);

for (const select of botoesUnidadeMedida) {
  select.addEventListener('click', e => {
    const unidadeDeMedida = e.target.id
  
    codigoUnidadeDeMedida.innerHTML = ` 
  <p class="codigo-gerado">${unidadeDeMedida}</p>
  `
  });
}