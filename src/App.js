import React from 'react';
import ReactDOM from 'react-dom';
import GitHubProfile from './components/GitHubProfile';
const App = () => {
  const myGitHubUsername = 'JuanIgnacioMarchetto';
  return (
    <div>
      <GitHubProfile username={myGitHubUsername} />
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



