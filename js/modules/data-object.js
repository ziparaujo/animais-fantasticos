export default function initdateObject() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.includes(diaAgora);
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  } else {
    funcionamento.classList.add('fechado');
  }
}

// const data = new Date()
// const dia25 = new Date('Dec 25 2022')

// function transformaDias(tempo) {
//   return tempo / (24 * 60 * 60 * 1000)
// }

// const hoje = transformaDias(data.getTime())
// const natal = transformaDias(dia25.getTime())

// console.log('Faltam ' + Math.floor(natal - hoje) + ' dias para o natal.')
