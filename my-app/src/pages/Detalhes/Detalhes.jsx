// pages/Detalhes/Detalhes.jsx
import React, { useState } from 'react';
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard';
import styles from './Detalhes.module.css';

const Detalhes = () => {
  const [detalhesTreino, setDetalhesTreino] = useState({
    nome: 'Corrida Matinal',
    descricao: 'Corrida leve pela manhã',
    duracao: 30,
    dataConclusao: '2024-06-24' // Exemplo de data de conclusão
  });

  const concluirTreino = (exercise) => {
    // Lógica para concluir o exercício
    console.log('Treino concluído:', exercise.nome);
  };

  return (
    <div className={`${styles.container} ${styles['theme-claro']}`}>
      <h2>Detalhes do Treino</h2>
      <ExerciseCard exercise={detalhesTreino} onConclude={concluirTreino} />
    </div>
  );
};

export default Detalhes;
