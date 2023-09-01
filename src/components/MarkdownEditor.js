import React, { useState } from 'react';

function MarkdownEditor({ onTextChange }) {
  const [markdownText, setMarkdownText] = useState('');

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setMarkdownText(newText);
    onTextChange(newText); // Pass the text to the parent component
  };

  return (
    <div className="markdown-editor">
      <textarea
        className="markdown-input"
        value={markdownText}
        onChange={handleInputChange}

        placeholder="Write your Markdown here..."
      />
    </div>
  );
}

export default MarkdownEditor;


