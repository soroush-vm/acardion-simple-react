import './App.css';
import SingleQuestion from './Question'

function App() {
  return (
    <div className="container">
      <h3>سوالی برایتان به وجود آمده است؟</h3>
      <div className='info'>
        <SingleQuestion />
      </div>
    </div>
  );
}

export default App;
