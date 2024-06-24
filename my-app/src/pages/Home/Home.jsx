// pages/Home/Home.jsx
import React, { useState } from 'react';
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard';
import styles from './Home.module.css';

const Home = () => {
  const [treinosRecomendados, setTreinosRecomendados] = useState([
    { id: 1, nome: 'Corrida Matinal', descricao: 'Corrida leve pela manhã', duracao: 30 },
    { id: 2, nome: 'Yoga Relaxante', descricao: 'Sessão de yoga para relaxamento', duracao: 45 },
    { id: 3, nome: 'Musculação', descricao: 'Treino de musculação completo', duracao: 60 }
  ]);

  const adicionarAoPlano = (exercise) => {
    // Lógica para adicionar o exercício ao plano do usuário
    console.log('Adicionar ao plano:', exercise.nome);
  };

  return (
    <div className={`${styles.container} ${styles['theme-claro']}`}>
      <h2>Treinos Recomendados</h2>
      {treinosRecomendados.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} onAdd={adicionarAoPlano} />
      ))}
    </div>
  );
};

export default Home;
