const apiKey = "AIzaSyACjyY6upKbO6HNygiA2Z4Ge2Wa0uhI_is";
const idGoogleSheet = "1omcmxLOGoOIYA_o0OZHxo_fiv_QodiVGUBfkII_9dqE";
const range = "TALLERES";

async function obtenerDatosDeLaTabla() {
  const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${idGoogleSheet}/values/${range}?key=${apiKey}`);
  const data = await response.json();

  return data.values;
}

const mostrarTabla = (values) => {
  let html = '<table class="tabla-talleres">';

  // Generar filas de la tabla
  for (let i = 0; i < values.length; i++) {
    const esEncabezado = values[i].some(value => value.toUpperCase().includes('LUNES'));
    html += `<tr ${esEncabezado && 'class="sticky-header"'}>`;
    if (values[i].length === 1 && values[i][0].toUpperCase().includes('HORARIO')) {
      html += `<th colspan="6">${values[i][0]}</th>`;
    } else if (values[i].length === 0) {
      // Eliminal filas vacias
      continue;
    } else {
      if (values[i].length < 6) {
        // Completar las celdas vacias
        const dif = 6 - values[i].length;
        for (let j = 0; j < dif; j++) {
          values[i].push('');
        }
      }
      for (let j = 0; j < values[i].length; j++) {
        // Reemplazar saltos de linea por <br>
        const cellData = values[i][j].replace(/\n/g, '<br>');
        html += `<td ${(j === 0 || values[i][0] === '') && 'class="celda-color"'}>${cellData}</td>`;
      }
    }
    html += '</tr>';
  }

  html += '</table>';

  // Mostrar la tabla en el DOM
  const contenedorTabla = document.getElementById('contenedor-talleres');
  contenedorTabla.innerHTML = html;
}

obtenerDatosDeLaTabla().then(data => {
  mostrarTabla(data);
})
