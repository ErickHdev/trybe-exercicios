let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Bem-vinda, ' + info.personagem)

  info.recorrente = 'Sim';
  console.log(info)

  for(keys in info){
    console.log(keys)
  }
  console.log('==========')
  console.log('')
  for(keys in info){
    console.log(info[keys])
  }
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

    console.log(info.personagem + ' e ' + info2.personagem)
    console.log(info.origem + 'e' + info2.origem)
    console.log(info.nota + ' e ' + info2.nota)
    if((info.recorrente && info2.recorrente) === 'Sim'){
        console.log('Ambos recorrentes')
    }