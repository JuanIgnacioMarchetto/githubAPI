import React from 'react';
import ReactDOM from 'react-dom';
import GitHubProfile from './components/GitHubProfile';
import GitHubSearch from './components/GitHubSearch';
import './App.css'

const App = () => {
  const myGitHubUsername = 'JuanIgnacioMarchetto';
  return (
    <div>
      <GitHubProfile username={myGitHubUsername} />
      <React.StrictMode>
    <GitHubSearch />
  </React.StrictMode>,
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;



