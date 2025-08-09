import './App.css';
import SingleQuestion from './Question'
import data from './Data'
import { useState } from 'react';

function App() {
  const [questions , setQuestions] = useState(data)
  return (
    <div className="container">
      <h3>سوالی برایتان به وجود آمده است؟</h3>
      <div className='info'>
        {
          questions.map((question) => {
            return  <SingleQuestion {...question}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
