const codigoCategoriaEquipamento = document.getElementById('categoria-um')
const selecaoCategoriaEquipamento = document.getElementById('categoria-equipamento')

selecaoCategoriaEquipamento.addEventListener('click', e => {
  const categoriaEquipamento = e.target.value    
  
  codigoCategoriaEquipamento.innerHTML = ` 
  <p class="codigo-gerado">${categoriaEquipamento}</p>
  `
  }
);