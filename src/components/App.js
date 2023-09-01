import React, { useState } from 'react';
import '../styles/App.css';
import MarkdownEditor from './MarkdownEditor';
import MarkdownPreview from './MarkdownPreview';

function App() {
  const [markdownText, setMarkdownText] = useState('');

  const handleTextChange = (newText) => {
    setMarkdownText(newText);
  };

  return (
    <div className="app">
      <h1>Markdown Editor</h1>
      <div className="markdown-container">
        <div className="left">
          <MarkdownEditor  onTextChange={handleTextChange} />
        </div>
        <div className="preview">
          <MarkdownPreview  markdownText={markdownText} />
        </div>
      </div>
    </div>
  );
}

export default App;


