// components/ExerciseCard.js
import React from 'react';

const ExerciseCard = ({ exercise, onAdd, onRemove, onConclude }) => {
  return (
    <div className="exercise-card">
      <h3>{exercise.nome}</h3>
      <p>{exercise.descricao}</p>
      <p>Duração: {exercise.duracao} minutos</p>
      {onAdd && <button onClick={() => onAdd(exercise)}>Adicionar ao Meu Plano</button>}
      {onRemove && <button onClick={() => onRemove(exercise)}>Remover</button>}
      {onConclude && <button onClick={() => onConclude(exercise)}>Concluir Treino</button>}
      {exercise.dataConclusao && <p>Data de Conclusão: {exercise.dataConclusao}</p>}
    </div>
  );
};

export default ExerciseCard;
