import React, { useReducer, useRef } from 'react';
import './App.css';
import NewPost from './Components/post';

export const ACTION_TYPE = {
  AddPost: 'AddPost',
  Toggle: 'Toggle',
};

function App() {
  const inputRef = useRef();
  const [state, dispatch] = useReducer(reducer, []);
  
  function reducer(state, action) {
    switch (action.type) {
      case ACTION_TYPE.AddPost:
        return [...state, { id: Date.now(), name: action.payload.name, toggle: true }];
      case ACTION_TYPE.Toggle:
        return state.map((post) =>
          post.id === action.payload.id ? { ...post, toggle: !post.toggle } : post
        );
      default:
        return state;
    }
  }

  const submit = (tye) => {
    tye.preventDefault();
    const inputText = inputRef.current.value.trim();
    if (inputText === '') {
      alert('Type something, please.');
      return;
    }
    dispatch({ type: ACTION_TYPE.AddPost, payload: { name: inputText } });
    inputRef.current.value = '';
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input ref={inputRef} type="text" />
        <button type="submit">Add</button>
      </form>

      {state.map((post) => (
        <NewPost key={post.id} post={post} dispatch={dispatch} />
      ))}

      <button onClick={() => inputRef.current.focus()}>GO BACK</button>
    </div>
  );
}

export default App;
