import React, { useState } from 'react';
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard';
import styles from './Plano.module.css';

const Plano = () => {
  const [meuPlano, setMeuPlano] = useState([
    { id: 1, nome: 'Corrida Matinal', descricao: 'Corrida leve pela manhã', duracao: 30 },
    { id: 2, nome: 'Yoga Relaxante', descricao: 'Sessão de yoga para relaxamento', duracao: 45 }
  ]);

  const removerDoPlano = (exercise) => {
    // Lógica para remover o exercício do plano do usuário
    console.log('Remover do plano:', exercise.nome);
  };

  return (
    <div className={`${styles.container} ${styles['theme-claro']}`}>
      <h2>Meu Plano</h2>
      {meuPlano.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} onRemove={removerDoPlano} />
      ))}
    </div>
  );
};

export default Plano;
