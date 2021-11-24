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

function validateData(data) {
  if (data.indexOf('/') === 2 || data.indexOf('/') === 5) {
    const day = data.slice(0, 2);
    const month = data.slice(3, 5);
    const year = data.slice(6, 10);
    if ((day > 0 && day < 31) && (month > 0 && month <= 12) && (year > 0 && year.length === 4)) {
      return true;
    }
  }
  return false;
}

function checkData() {
  const dataInput = document.querySelector('#data').value;
  const validDate = validateData(dataInput);
  if (validDate !== true){
    alert('Data invalida!')
    dataInput = '';
  }
}