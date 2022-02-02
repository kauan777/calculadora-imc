import './App.css'
import { useState } from 'react'

function App() {

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [message, setMessage] = useState("");

  function HandleCalc(){

    const alt = parseInt(height) / 100;
    const imc = parseInt(weight) / (alt * alt);



    if(imc < 18.6){
      setMessage(`Seu IMC foi ${imc.toFixed(2)}, você está abaixo do peso!`);
    }else if(imc >= 18.6 && imc < 24 ){
      setMessage(`Seu IMC foi ${imc.toFixed(2)}, seu peso está ideal!`);
    }else if(imc >= 24.8 && imc < 34.9 ){
      setMessage(`Seu IMC foi ${imc.toFixed(2)}, você está levemente acima do peso!`);
    }else if(imc >= 34.9){
      setMessage(`Seu IMC foi ${imc.toFixed(2)}, CUIDADO! Você está acima do peso`);
    }
    
  }


  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
        <input 
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          maxLength={3}
          placeholder="Peso em (Kg) Ex: 90"
        />
        <input 
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          maxLength={3}
          placeholder="Altura em (Kg) Ex: 180"
        />

    <div className='btn'>
      <button  id="reset"onClick={()=>{
        setWeight("")
        setHeight("")
        setMessage("")
      }}>
        Limpar
      </button>
      <button onClick={HandleCalc}>
        Calcular
      </button>
    </div>
      </div>

      <h2>{message}</h2>
    </div>
  )
}

export default App
