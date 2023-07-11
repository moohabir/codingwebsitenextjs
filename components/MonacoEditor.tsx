'use client';
import Editor from '@monaco-editor/react';
import { useState } from 'react';

const files: any = {
  'index.html': {
    name: 'index.html',
    language: 'html',
    value: '// Start Practicing Html',
  },
  'style.css': {
    name: 'style.css',
    language: 'css',
    value: '/* Start Practicing css*/',
  },
  'script.js': {
    name: 'script.js',
    language: 'javascript',
    value: '// Start Practicing Javascript',
  },
  'script.py': {
    name: 'script.py',
    language: 'python',
    value: '// Start Practicing Paython',
  },
};
export default function MonacoEditor() {
  const [fileName, setFilename] = useState('index.html');
  const file = files[fileName];
  return (
    <div className="p-4 bg-black text-white">
      MonacoEditor
      <div className="flex flex-col justify-start">
        <button
          onClick={() => setFilename('index.html')}
          className="p-4"
        >
          Html
        </button>
        <button
          onClick={() => setFilename('style.css')}
          className="p-4"
        >
          Css
        </button>
        <button
          onClick={() => setFilename('script.js')}
          className="p-4"
        >
          Javascript
        </button>
      </div>
      <Editor
        height="90vh"
        theme="vs-dark"
        path={file.name}
        defaultLanguage={file.language}
        value={file.value}
      />
    </div>
  );
}
