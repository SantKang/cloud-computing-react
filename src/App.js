import logo from './logo.svg';
 import React, { useState } from 'react';
 import './App.css';
 
 function App() {    //HOX! Tähän App funktioon käytetty apuna Chatgpt, koska omat HTML taidot olivat hieman ruosteessa. Kysymys oli: Miten voisin luoda funktion HTML-kielellä, joka voisi analysoida käyttäjän syötettä ja kertoa, onko se positiivinen, negatiivinen vai neutraali
   const [inputText, setInputText] = useState('');
   const [result, setResult] = useState('');
 
   const analyzeSentiment = (e) => {
     e.preventDefault();
     
     if (inputText.toLowerCase().includes('tykkään') || inputText.toLowerCase().includes('iloinen')) {
       setResult('Positiivinen');
     } else if (inputText.toLowerCase().includes('vihaan') || inputText.toLowerCase().includes('surullinen')) {
       setResult('Negatiivinen');
     } else {
       setResult('Neutraali');
     }
   };
 
   return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <p>
           MOIKKA miten menee
         </p>
         <h1>Sentimenttianalyysi</h1>
         <p>Syötä teksti</p>
         
         <form onSubmit={analyzeSentiment}>
           <textarea
             value={inputText}
             onChange={(e) => setInputText(e.target.value)}
             placeholder="Syötä teksti tähän..."
             rows="4"
           />
           <button type="submit">Analysoi</button>
         </form>
 
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
         <div id="result-container">
           <h2>{result}</h2>
         </div>
         <h1>HOX!</h1>
         <p>Tämä yksinkertainen funktio ymmärtää sanat: "tykkään", "iloinen" "vihaan" ja "surullinen". Jos haluat kokeilla tuloksia, kannattaa käyttää näitä sanoja.</p>
       </header>
     </div>
   );
  }