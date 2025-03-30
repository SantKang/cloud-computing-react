import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');

  // Function to analyze sentiment
  const analyzeSentiment = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    // Fetch sentiment analysis from the backend
    try {
      const response = await fetch("http://sentiment-analysis-route-cloud-computing-module4.2.rahtiapp.fi/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await response.json();
      setResult(data.sentiment); // Set the result to be displayed
    } catch (error) {
      setResult("Error analyzing sentiment. Please try again later.");
    }
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
          <h2>{result ? `Sentimentti: ${result}` : "Tulos tulee tänne..."}</h2>
        </div>

        <h1>HOX!</h1>
        <p>Tämä yksinkertainen funktio ymmärtää sanat: "tykkään", "iloinen", "vihaan" ja "surullinen". Jos haluat kokeilla tuloksia, kannattaa käyttää näitä sanoja.</p>
      </header>
    </div>
  );
}

export default App;
