import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      {state.map((user) => {
        console.log(user);
        return (
          <div style={{display:'flex'}} key={user.id}>
            <div>
              <img src={user.avatar_url} width="100" />
            </div>
            <div>
              <span>{user.login}</span><br/>
              <span><a href={user.events_url}>Events</a></span><br/>
              <span><a href={user.followers_url}>Followers</a></span><br/>
              <span><a href={user.repos_url}>Repository</a></span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
