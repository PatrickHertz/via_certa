    const submeterFormulario = () => {
        const rangeInicial = document.getElementById("rangeInicial").value;
        const rangeFinal = document.getElementById("rangeFinal").value;
        const minhaAposta = document.getElementById("minhaAposta").value;
        realizarsorteio(+rangeInicial, +rangeFinal, +minhaAposta);
    }



    const realizarsorteio = (rangeInicial, rangeFinal, minhaAposta) => {
      if (!rangeInicial){
          alert('Informe o range inicial');
          return;
      }
      if (!rangeFinal){
        alert('Informe o range final');
        return;
    }
    if (rangeInicial > rangeFinal ){
        alert('O range inicial não pode ser maior que o range final');
        return
    }
    if ((minhaAposta > rangeFinal) || (minhaAposta < rangeInicial)){
        alert('A aposta deve estar entre o range inicial e o final!'); 
        return;
    }
    const numeroSorteado = novoSorteio(rangeInicial, rangeFinal);
    if(numeroSorteado === minhaAposta){
        alert('Parabéns você acertou');
        return; 
    }
    alert(`O número sorteado foi ${numeroSorteado}`);
    }
    const novoSorteio = (rangeInicial, rangeFinal) => {
        return (Math.floor(Math.random() * (rangeFinal - rangeInicial + 1 )) + rangeInicial);
    }