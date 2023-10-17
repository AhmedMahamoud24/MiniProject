import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [
        { id: 1, name: 'Squat' },
        { id: 2, name: 'Deadlift' },
        { id: 3, name: 'Bench Press' },
      ],  
      showExercises: true,
      newExerciseName: '',
      editExerciseName: '',
      editExerciseId: null,
    };
  }

  handleAdd = () => {
    const { exercises, newExerciseName } = this.state;
    const newExercise = {
      id: exercises.length + 1,
      name: newExerciseName,
    };
    this.setState({
      exercises: [...exercises, newExercise],
      newExerciseName: '',
    });
  }

  handleEditStart = (id) => {
    const exerciseToEdit = this.state.exercises.find(ex => ex.id === id);
    this.setState({ 
      editExerciseName: exerciseToEdit.name,
      editExerciseId: id,
    });
  }

  handleEditConfirm = () => {
    const updatedExercises = this.state.exercises.map(ex => 
      ex.id === this.state.editExerciseId ? { ...ex, name: this.state.editExerciseName } : ex
    );
    this.setState({
      exercises: updatedExercises,
      editExerciseName: '',
      editExerciseId: null,
    });
  }

  handleDelete = (id) => {
    const filteredExercises = this.state.exercises.filter(ex => ex.id !== id);
    this.setState({ exercises: filteredExercises });
  }

  render() {
    return (
      <div>
        
        <input 
          type="text"
          placeholder="Enter new exercise"
          value={this.state.newExerciseName}
          onChange={(e) => this.setState({ newExerciseName: e.target.value })}
        />
        <button onClick={this.handleAdd}>Add Exercise</button>

       
        <ul>
          {this.state.exercises.map(exercise => (
            <li key={exercise.id}>
              {exercise.name} 
              {this.state.editExerciseId === exercise.id ? (
                <span>
                  <input 
                    type="text" 
                    value={this.state.editExerciseName}
                    onChange={(e) => this.setState({ editExerciseName: e.target.value })}
                  />
                  <button onClick={this.handleEditConfirm}>Confirm Edit</button>
                </span>
              ) : (
                <span>
                  <button onClick={() => this.handleEditStart(exercise.id)}>Edit</button>
                  <button onClick={() => this.handleDelete(exercise.id)}>Delete</button>
                </span>
              )}
            </li>
          ))}
        </ul>

  
        {this.state.showExercises && this.state.exercises.length === 0 ? (
          <div>No exercises available.</div>
        ) : null}
      </div>
    );
  }
}

export default App;
