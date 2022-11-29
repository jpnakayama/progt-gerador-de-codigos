const codigoCategoriaEquipamento = document.getElementById('categoria-um')
const selecaoCategoriaEquipamento = document.getElementById('categoria-equipamento')

selecaoCategoriaEquipamento.addEventListener('click', e => {
  const categoriaEquipamento = e.target.value    
  
  codigoCategoriaEquipamento.innerHTML = ` 
  <p class="codigo-gerado">${categoriaEquipamento}</p>
  `
  }
);

const codigoCategoriaDimensao = document.getElementById('categoria-dois')
const inputCategoriaEquipamento = document.getElementById('input-dimensao')
const codigoUnidadeDeMedida = document.getElementById('categoria-dois-unidade-de-medida')
const botoesUnidadeMedida = document.querySelectorAll('.btnDimensao')

inputCategoriaEquipamento.addEventListener('keyup', e => {
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



const codigoCategoriaTres = document.getElementById('categoria-tres')
const selecaoCategoriaTres = document.querySelectorAll('.btncat3')

for (const select of selecaoCategoriaTres) {
  select.addEventListener('click', e => {
    const categoriaTres = e.target.id
    console.log(categoriaTres)
  
  codigoCategoriaTres.innerHTML = ` 
  <p class="codigo-gerado">${categoriaTres}</p>
  `
  });
}
