import React, { useReducer } from 'react';

const PokemonInput = ({ onNewNameSubmit }) => {
  const [name, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'SET_NAME':
        return action.payload;
      case 'RESET':
        return '';
      default:
        return state;
    }
  }, '');

  const handleInputChange = (event) => {
    dispatch({ type: 'SET_NAME', payload: event.target.value });
  };

  const handleSubmit = () => {
    if (name.trim()) {
      onNewNameSubmit(name);
      dispatch({ type: 'RESET' });
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={handleInputChange} 
        placeholder="Enter new name"
      />
      <button onClick={handleSubmit}>Change Name</button>
    </div>
  );
};

export default PokemonInput;
