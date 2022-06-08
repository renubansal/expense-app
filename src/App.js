import logo from './logo.svg';
import './App.css';

function App() {
  const paragraph = document.createElement('p');
  paragraph.textContent = 'This is paragraph.';
  document.getElementById('root').appendChild(paragraph);
  return (
    <div className="App">
     <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
