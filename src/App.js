import React, { useState } from 'react';
import './App.css';

function App() {    //HOX! Tähän App funktioon käytetty apuna Chatgpt, koska omat HTML taidot olivat hieman ruosteessa. Kysymys oli: Miten voisin luoda funktion HTML-kielellä, joka voisi analysoida käyttäjän syötettä ja kertoa, onko se positiivinen, negatiivinen vai neutraali
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');

  const analyzeSentiment = async (text) => {
    const response = await fetch("http://sentiment-analysis-route-cloud-computing-module4.2.rahtiapp.fi ", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
    });

    const result = await response.json();
    return result;
};


  return (
    <div className="App">
      <header className="App-header">
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

        <div id="result-container">
          <h2>{result}</h2>
        </div>
        <h1>HOX!</h1>
        <p>Tämä yksinkertainen funktio ymmärtää sanat: "tykkään", "iloinen" "vihaan" ja "surullinen". Jos haluat kokeilla tuloksia, kannattaa käyttää näitä sanoja.</p>
      </header>
    </div>
  );
}

export default App;
