import React, { useState } from 'react';

function App() {
  const [tecnologias, attTecnologia] = useState(['ReactJS', 'React Native']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    // o state ainda eé imutavel, por isso deve-se copiar tudo e atualizar seu valor posteriormente a copia spread operators
    attTecnologia([...tecnologias, newTech]);
    setNewTech('');
  }
  return (
    <>
      <ul>
        {tecnologias.map(tecnologia => (
          <li key={tecnologia}>{tecnologia}</li>
        ))}
      </ul>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adcionar
      </button>
    </>
  );
}

export default App;
