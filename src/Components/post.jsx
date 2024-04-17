import React from 'react';
import { ACTION_TYPE } from '../App';

export default function NewPost({ post, dispatch }) {
  return (
    <div className="new-state">
      <div>
        {post.toggle ? <h3>{post.name}</h3> : <h3>This Content is hidden.</h3>}
      </div>
      <button onClick={() => dispatch({ type: ACTION_TYPE.Toggle, payload: { id: post.id } })}>TOGGLE</button>
    </div>
  );
}
