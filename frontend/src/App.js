/**
 *  Author: CastleBomber
 *  Project: React-Tailwind-Image-Gallery
 *  Date: March 20th, 2023
 *
 *  Acknowledgements: Traversy Media's Youtube React & Tailwind CSS Image Gallery tutorial
 *
 *  Tips:
 *  To get app running, affirm correct folder,
 *  npm run server
 *  npm run client
 *  npm run dev - runs both server && client
 *  npm run build - creates folder with static assets for deployment
 *
 *  cmd+D will change opening and closing tag simultaneously
 *  cmd+D (+ D..) change multiple nearby instances of a name
 *  cors-heroku error: open https://cors-anywhere.herokuapp.com/corsdemo
 *
 *  Watch out for:
 *  In app, older syntax 'component', needs to be switched to 'element'
 *  older syntax of 'Switch', need to be 'Router' surrounding 'Route'
 *
 *  URL variables may need ending '/' added to function properly
 *
 *  .gitignore folder holds .env, which holds MongoDB && JWT secrets
 *  because of this, private information could be on primary system
 *
 */
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
