
import './App.css';
import React, {useState} from 'react';

function App() {
    const api = {
      key: "60be2f0bfc5426d053220a9ae0e85abc",
      base: "http://api.openweathermap.org/data/2.5"
    }

    const [query, setQuery] = useState('');
    const [tempo, setTempo] = useState({});
    

    const pesquisa = evt => {
      if(evt.key === "Enter"){
        //fetch(`${api.base}weather?q=${query}$units=metric$APPID=${api.key}`)
        fetch( `http://api.openweathermap.org/data/2.5/weather?q=${query},br&lang=pt_br&appid=609534aa35617a0992ed124181158475`)
    .then(res => res.json()).then(resultado => {
      setTempo(resultado)
      setQuery('')

        })
      }
    }

    const datasCal = (d) => {
    let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'junho','julho','Agosto',
    'Setembro','Outubro','Novembro','Dezembro']
    let dias =['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sabádo']

    let dia = dias[d.getDay()]
    let data = d.getDate()
    let mes = meses[d.getMonth()]
    let ano = d.getFullYear()

    return `${dia} ${data} ${mes} ${ano}`
    }
    
   
   
   
  return (
    <div className="App">
      <main>
       <div className="caixa-pesquisa">
         <input type="text" className="barra-pesquisa" 
         placeholder="Pesquisar..." 
         onChange={ e => setQuery(e.target.value)} value={query} 
         onKeyPress ={pesquisa}/>
       </div>
       <div>

         {(typeof tempo.main != "undefined") ? (
          <div>
        <div className="caixa-localizacao">
          <div className="localizacao">{tempo.name}</div>
          <div className="data">{datasCal(new Date())}</div>
        </div>
        <div className="caixa-tempo">
          <div className="temperatura">{Math.round(tempo.main.temp - 273)}</div>
          <div className="tempo"> {tempo.weather.description}</div>
        </div>
        </div>
  ):('')}
       </div>
     
      </main>
    </div>
  );
}

export default App;
