import React,{useState} from 'react';
import './App.css';

const App=()=> {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const [operations, setOperations] = useState('+');
  const [result, setResult] = useState(0);

  const handleSubmit =()=>{
    if(operations === '+'){
      setResult(parseInt(valueA) + parseInt(valueB));
    }
    else if(operations === '-'){
      setResult(parseInt(valueA) - parseInt(valueB));
    }
    else if(operations === '*'){
      setResult(parseInt(valueA) * parseInt(valueB));
    }
    else if(operations === '/'){
      setResult(parseInt(valueA) / parseInt(valueB));
    }
    else
    {

      alert('enter right value');

    }
  }

  const setValuehanderA =(e)=>{
    setValueA(e.target.value);
  }

  const setValuehanderB =(e)=>{
    setValueB(e.target.value);
  }


  return (
    <div className="App">
    <h1>Simple Calculator</h1>
      <h3>{result}</h3>
        <div>
        <input type="text" value={valueA} onChange={setValuehanderA}/>
        <input type="text" value={valueB} onChange={setValuehanderB}/>
        <button onClick={handleSubmit} className='operation'>Submit</button>
        </div>
        <span>{operations}</span>
        <div className="valueoperation">
        <button onClick={()=>setOperations('+')}>+</button>
        <button onClick={()=>setOperations('-')}>-</button>
        <button onClick={()=>setOperations('*')}>*</button>
        <button onClick={()=>setOperations('/')}>/</button>
        </div>
    </div>
  );
}

export default App;
