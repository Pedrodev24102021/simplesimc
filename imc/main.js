const calcular = document.getElementById('btn');
const dicaumlocal = document.getElementById('dicaumlocal');
const dicadoislocal = document.getElementById('dicadoislocal');
const dicatreslocal = document.getElementById('dicatreslocal');
const btnum = document.getElementById('btnabaixo');
const btndois = document.getElementById('btnregular');
const btntres = document.getElementById('btnacima');

function imc() {
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('inputresultado');
  const dicaumlocal = document.getElementById('dicaumlocal');
  const dicadoislocal = document.getElementById('dicadoislocal');
  const dicatreslocal = document.getElementById('dicatreslocal');

  if (nome !== '' && altura !== '' && peso !== '') {
    const valorImc = (peso / (altura * altura)).toFixed(1);
    let estadocorporal = '';
    dicaumlocal.classList.remove('ativado');
    dicadoislocal.classList.remove('ativado');
    dicatreslocal.classList.remove('ativado');

    if (valorImc < 18.5) {
      dicatreslocal.classList.add('desativado');
      dicadoislocal.classList.add('desativado');
      estadocorporal = 'você está muito abaixo do peso';
      btndois.classList.remove('active');
      btndois.classList.add('desativado');
      btntres.classList.remove('active');
      btntres.classList.add('desativado');
      btnum.classList.remove('desativado');
      btnum.classList.add('active');
    } else if (valorImc < 25) {
      dicatreslocal.classList.add('desativado');
      dicaumlocal.classList.add('desativado');
      btnum.classList.remove('active');
      btnum.classList.add('desativado');
      estadocorporal = 'você está no peso ideal';
      btntres.classList.remove('active');
      btntres.classList.add('desativado');
      btndois.classList.add('active');
    } else if (valorImc > 30) {
      dicaumlocal.classList.add('desativado');
      dicadoislocal.classList.add('desativado');
      btnum.classList.remove('active');
      btnum.classList.add('desativado');
      btndois.classList.remove('active');
      btndois.classList.add('desativado');
      estadocorporal = 'você está muito  a cima do peso cuidado';
      btntres.classList.add('active');
    }
    resultado.textContent = `${nome},Seu IMC é de ${valorImc} ${estadocorporal}`;
  }
}
function dicaimcbaixo() {
  dicaumlocal.classList.remove('desativado');
  dicaumlocal.classList.add('ativado');
}
function dicaimcregular() {
  dicadoislocal.classList.remove('desativado');
  dicadoislocal.classList.add('ativado');
}
function dicaimcacima() {
  dicatreslocal.classList.remove('desativado');
  dicatreslocal.classList.add('ativado');
}
btntres.addEventListener('click', dicaimcacima);
btndois.addEventListener('click', dicaimcregular);
btnum.addEventListener('click', dicaimcbaixo);
calcular.addEventListener('click', imc);
