import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quotes, setQuote] = useState('');
  const fetchQuote = async () => {
    try {
      const response = await fetch('https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '725221ee58msh2f04fb4cee438f4p105022jsn1a527a96f534',
          'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data); 
      console.log(response)
      setQuote(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(() => {
    fetchQuote();
  }, []);
  return (
    <div>
      <h2>Quote of the day:</h2>
      {quotes && <p>{quotes.text}</p>}
    </div>
  );
}
export default Quotes;