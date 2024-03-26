"use client";

import React, { useState } from "react";

const CoolQuoteGenerator = () => {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the midst of chaos, there is also opportunity. - Sun Tzu",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  ];

  const [currentQuote, setCurrentQuote] = useState("");

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <h2>Quote Generator</h2>
      <p>{currentQuote}</p>
      <button onClick={generateRandomQuote}>Generate Quote</button>
    </div>
  );
};

export default CoolQuoteGenerator;
