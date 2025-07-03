// login
document.getElementById('loginForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
    const msg = document.getElementById('loginMsg');
    if(u==='Admin' && p==='123@4') {
      window.location = 'veiculos.html';
    } else {
      msg.textContent = 'Usuário ou senha incorretos';
    }
  });
  
  // escolher veículo
  function escolherVeiculo(nome) {
    sessionStorage.setItem('veiculo', nome);
    window.location = 'formulario.html';
  }
  
  // enviar formulário motorista
  document.getElementById('formMotorista')?.addEventListener('submit', e => {
    e.preventDefault();
    const nome = document.getElementById('motoristaNome').value;
    const cnh = document.getElementById('motoristaCNH').value;
    const veic = sessionStorage.getItem('veiculo');
    document.getElementById('confirmMsg').textContent =
      `Aluguel efetuado com sucesso! 🚗\n` +
      `Veículo: ${veic}\nMotorista: ${nome}, CNH: ${cnh}`;
  });

  