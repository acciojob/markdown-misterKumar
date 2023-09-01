import React from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownPreview({ markdownText }) {
  return (
    <div className="markdown-preview">
      <div className="markdown-preview-content">
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>
    </div>
  );
}

export default MarkdownPreview;

