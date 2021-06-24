import logo from './assets/aa-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Coming Soon</h1>
        <p>
          Inquiries?{' '}
          <a
            href="mailto:alex@aandres.dev"
            title="Use your preferred email client to send me a message"
          >
            alex@aandres.dev
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
