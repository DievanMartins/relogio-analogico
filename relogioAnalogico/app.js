//variável dos ponteiros
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
  //responsavel por atualizar o relógio
  //a primeiar coisa que temos que fazer no relógio é pegarmos a hora atual com a variavel let now = nem Date, que é classe que gente usa para manipilação de data.
  let now = new Date();
  //let hour = now.getHours(); é função resposavel pela hora
  let hour = now.getHours();
  //let minute = now.getMinutes(); é função resposavel pela minuto
  let minute = now.getMinutes();
  //let second = now.getSeconds(); é função resposavel pelo segundo
  let second = now.getSeconds();


  //essas 3 variáveis são responsaveis pela movimento dos ponteiros em graus. segundo é dividido em 360/60. o -90 é apenas para compessar o css, pois todos os ponteiros se encontram no numeral III
  let sDeg = ((360 / 60) * second) - 90;
  let mDeg = ((360 / 60) * minute) - 90;
  //hora é dividido por 12, pois em relógio de ponteiro eles marcam apenas 12hs.
  let hDeg = ((360 / 12) * hour) - 90;

  //nessa parte é onde alteramos o rotate das variáveis que criamos no inicio. elas vão fazer com que possam ser alteradas o transform = rotate no graus calculados nas variáveis acima.
  sElement.style.transform = `rotate(${sDeg}deg)`;
  mElement.style.transform = `rotate(${mDeg}deg)`;
  hElement.style.transform = `rotate(${hDeg}deg)`;
}


//intervalo para relógio atualizar a cada segundo na função updateClock
setInterval(updateClock, 1000);