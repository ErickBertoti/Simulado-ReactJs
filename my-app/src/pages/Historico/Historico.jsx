// pages/Historico/Historico.jsx
import React, { useState } from 'react';
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard';
import styles from './Historico.module.css';

const Historico = () => {
  const [treinosConcluidos, setTreinosConcluidos] = useState([
    { id: 1, nome: 'Corrida Matinal', duracao: 30, dataConclusao: '2024-06-22' },
    { id: 2, nome: 'Yoga Relaxante', duracao: 45, dataConclusao: '2024-06-23' }
  ]);

  return (
    <div className={`${styles.container} ${styles['theme-claro']}`}>
      <h2>Histórico de Treinos Concluídos</h2>
      {treinosConcluidos.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
};

export default Historico;
