import React, { useState, useEffect } from 'react';

function useExerciseManager() {
  const [exercises, setExercises] = useState([]);
  const [newExerciseName, setNewExerciseName] = useState('');
  const [editExerciseName, setEditExerciseName] = useState('');
  const [editExerciseId, setEditExerciseId] = useState(null);

  useEffect(() => {
    const storedExercises = JSON.parse(localStorage.getItem('exercises')) || [];
    setExercises(storedExercises);
  }, []);

  useEffect(() => {
    localStorage.setItem('exercises', JSON.stringify(exercises));
  }, [exercises]);

  return {
    exercises,
    newExerciseName,
    editExerciseName,
    editExerciseId,
    setNewExerciseName,
    setEditExerciseName,
    setEditExerciseId,
  };
}

function App() {
  const {
    exercises,
    newExerciseName,
    editExerciseName,
    editExerciseId,
    setNewExerciseName,
    setEditExerciseName,
    setEditExerciseId,
  } = useExerciseManager();

  const handleAdd = () => {
    if (newExerciseName.trim() !== '') {
      const newExercise = {
        id: exercises.length + 1,
        name: newExerciseName,
      };
      setExercises([...exercises, newExercise]);
      setNewExerciseName('');
    }
  };

  const handleEditStart = (id) => {
    const exerciseToEdit = exercises.find((ex) => ex.id === id);
    setEditExerciseName(exerciseToEdit.name);
    setEditExerciseId(id);
  };

  const handleEditConfirm = () => {
    const updatedExercises = exercises.map((ex) =>
      ex.id === editExerciseId ? { ...ex, name: editExerciseName } : ex
    );
    setExercises(updatedExercises);
    setEditExerciseName('');
    setEditExerciseId(null);
  };

  const handleDelete = (id) => {
    const filteredExercises = exercises.filter((ex) => ex.id !== id);
    setExercises(filteredExercises);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter new exercise"
        value={newExerciseName}
        onChange={(e) => setNewExerciseName(e.target.value)}
      />
      <button onClick={handleAdd}>Add Exercise</button>

      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            {exercise.name}
            {editExerciseId === exercise.id ? (
              <span>
                <input
                  type="text"
                  value={editExerciseName}
                  onChange={(e) => setEditExerciseName(e.target.value)}
                />
                <button onClick={handleEditConfirm}>Confirm Edit</button>
              </span>
            ) : (
              <span>
                <button onClick={() => handleEditStart(exercise.id)}>Edit</button>
                <button onClick={() => handleDelete(exercise.id)}>Delete</button>
              </span>
            )}
          </li>
        ))}
      </ul>

      {exercises.length === 0 && <div>No exercises available.</div>}
    </div>
  );
}

export default App;
