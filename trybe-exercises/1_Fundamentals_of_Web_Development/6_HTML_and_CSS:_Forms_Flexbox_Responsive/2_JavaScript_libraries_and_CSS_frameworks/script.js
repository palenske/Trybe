/* <div class="conteudo-linha">
  <label for="estado">Estado: </label>
  <select name="estado" id="estado" value="" required>
    <option value=""></option>
  </select>
</div> */

window.onload = function () {
  const estates = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];
  for (let uf in estates) {
    const selectOfEstates = document.getElementById('estado');
    const estateOpt = document.createElement('option');
    estateOpt.value = estates[uf];
    estateOpt.innerHTML = estates[uf];
    selectOfEstates.appendChild(estateOpt);
  }
}