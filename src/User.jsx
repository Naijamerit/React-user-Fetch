import React, { useState, useEffect } from 'react';
import './style.css';

export default function User() {
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
          <div className="card" key={user.id}>
            <div>
              <img src={user.avatar_url} />
            </div>
            <div style={{ margin: '20px' }}>
              <b style={{ fontSize: '25px' }}>{user.login}</b>
              <br />
              <span>
                Type:
                <b style={{ color: 'red' }}> {user.type}</b>
                <br />
                <a href={user.events_url}> Events </a>|
                <a href={user.followers_url}> Followers</a> |
                <a href={user.following_url}> Following</a> |
                <a href={user.gists_url}> Gist</a> |<br />
                <a href={user.url}> Web</a> |
                <a href={user.repos_url}> Repository</a>
                <br />
                <a
                  style={{
                    backgroundColor: 'green',
                    border: 'solid green',
                    borderRadius: '5px',
                    color: 'white',
                    fontSize: '9px',
                  }}
                  href={user.subscriptions_url}
                >
                  Subscribe
                </a>
                <br />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
