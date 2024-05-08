import React, { useState } from "react";
export default function CensoredText({ badWords, children }) {
  const [clickedWord, setClickedWord] = useState("");

  const toggleWord = (word) => {
    setClickedWord(clickedWord === word ? "" : word);
  };

  const censorWord = (word) => {
    if (badWords.includes(word) && clickedWord !== word) {
      return "*".repeat(word.length);
    }
    return word;
  };

  const handleWordClick = (e, word) => {
    e.preventDefault();
    toggleWord(word);
  };

  const censoredContent = children.split(/\b/).map((word, index) => {
    const key = `word_${index}`;
    const censoredWord = censorWord(word);

    if (censoredWord === word) {
      return <React.Fragment key={key}>{word}</React.Fragment>;
    } else {
      return (
        <React.Fragment key={key}>
          <span
            onClick={(e) => handleWordClick(e, word)}
            style={{ cursor: "pointer" }}
          >
            {censoredWord}
          </span>
        </React.Fragment>
      );
    }
  });

  return <p>{censoredContent}</p>;
}
