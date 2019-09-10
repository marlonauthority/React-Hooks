import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [tecnologias, attTecnologias] = useState(['ReactJS', 'React Native']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    // o state ainda eé imutavel, por isso deve-se copiar tudo e atualizar seu valor posteriormente a copia spread operators
    attTecnologias([...tecnologias, newTech]);
    setNewTech('');
  }

  // no 2º parametro se nao for passado nada, o useEffect executara uma unica vez, como se fosse o componentDidMount
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      attTecnologias(JSON.parse(storageTech));
    }
  }, []);

  // O 1º parãmetro é a funcao a ser executada () => {}
  // 2º parãmetro é quando sera executada, eé um array de dependencias que fica monitoriando as variaveis
  // Nota-se ser paracido com o componentDidUpdate
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tecnologias));
  }, [tecnologias]);

  // O useMemo fica monitorando uma varialvel, e com isso pode realizar um calculo por exemplo, sem que seja necessario ficar fazendo dentro do render
  const techSize = useMemo(() => tecnologias.length, [tecnologias]);

  return (
    <>
      <ul>
        {tecnologias.map(tecnologia => (
          <li key={tecnologia}>{tecnologia}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adcionar
      </button>
    </>
  );
}

export default App;
