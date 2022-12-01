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

const codigoMaterialPrincipal = document.getElementById('categoria-quatro')
const selecaoMaterialPrincipal = document.querySelectorAll('.btncat4')

for (const select of selecaoMaterialPrincipal) {
  select.addEventListener('click', e => {
    const categoriaMaterialPrincipal = e.target.id
    console.log(categoriaMaterialPrincipal)
  
  codigoMaterialPrincipal.innerHTML = ` 
  <p class="codigo-gerado">${categoriaMaterialPrincipal}</p>
  `
  });
}

const codigoEspecificacaoDoDocumento = document.getElementById('categoria-cinco')
const selecaoEspecificacaoDoDocumento = document.querySelectorAll('.btncat5')

for (const select of selecaoEspecificacaoDoDocumento) {
  select.addEventListener('click', e => {
    const categoriaEspecificacaoDoDocumento = e.target.id
    console.log(categoriaEspecificacaoDoDocumento)
  
  codigoEspecificacaoDoDocumento.innerHTML = ` 
  <p class="codigo-gerado">${categoriaEspecificacaoDoDocumento}</p>
  `
  });
}

const codigoTipoDeDocumento = document.getElementById('categoria-seis')
const selecaoTipoDeDocumento = document.querySelectorAll('.btncat6')

for (const select of selecaoTipoDeDocumento) {
  select.addEventListener('click', e => {
    const categoriaTipoDeDocumento = e.target.id
    console.log(categoriaTipoDeDocumento)
  
  codigoTipoDeDocumento.innerHTML = ` 
  <p class="codigo-gerado">${categoriaTipoDeDocumento}</p>
  `
  });
}

const codigoTamanhoDoFormatoDoDocumento = document.getElementById('categoria-sete')
const selecaoTamanhoDoFormatoDoDocumento = document.querySelectorAll('.btncat7')

for (const select of selecaoTamanhoDoFormatoDoDocumento) {
  select.addEventListener('click', e => {
    const categoriaTamanhoDoFormatoDoDocumento = e.target.id
    console.log(categoriaTamanhoDoFormatoDoDocumento)
  
  codigoTamanhoDoFormatoDoDocumento.innerHTML = ` 
  <p class="codigo-gerado">${categoriaTamanhoDoFormatoDoDocumento}</p>
  `
  });
}

