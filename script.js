// rastro de símbolos sombrios no mouse
const simbolos = ['†', '♥', '☠', '✖', '♠'];

document.addEventListener('mousemove', (e) => {
  const s = document.createElement('div');
  s.className = 'sp';
  s.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
  s.style.left = e.clientX + 'px';
  s.style.top = e.clientY + 'px';
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 1000);
});

// contagem regressiva pro Halloween (31/10)
function diasPraHalloween() {
  const agora = new Date();
  const hoje = Date.UTC(agora.getFullYear(), agora.getMonth(), agora.getDate());
  let alvo = Date.UTC(agora.getFullYear(), 9, 31);
  if (hoje > alvo) alvo = Date.UTC(agora.getFullYear() + 1, 9, 31);
  return Math.round((alvo - hoje) / 86400000);
}

(function () {
  const n = diasPraHalloween();
  const num = document.getElementById('dias-num');
  const txt = document.getElementById('dias-txt');
  let frase;
  if (n === 0) {
    num.textContent = '0';
    txt.textContent = 'É HOJE!!! FELIZ HALLOWEEN \\m/';
    frase = 'é HOJE!!! feliz Halloween';
  } else if (n === 1) {
    num.textContent = '1';
    txt.textContent = 'dia pro Halloween (é AMANHÃ!!)';
    frase = 'falta 1 dia pro Halloween';
  } else {
    num.textContent = String(n);
    txt.textContent = 'dias pro Halloween';
    frase = 'faltam ' + n + ' dias pro Halloween';
  }
  document.querySelectorAll('[data-frase-dias]').forEach((el) => { el.textContent = frase; });
})();
