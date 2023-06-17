import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Retrieve content from IndexedDB on component mount
    const storedContent = localStorage.getItem('content');
    if (storedContent) {
      setContent(storedContent);
    }
  }, []);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleBlur = () => {
    // Save content to IndexedDB
    localStorage.setItem('content', content);
  };

  return (
    <div className="App">
      <textarea
        value={content}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter text here"
      />
    </div>
  );
}

export default App;
