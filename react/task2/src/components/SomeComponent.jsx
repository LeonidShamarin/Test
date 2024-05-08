import React from "react";
import CensoredText from "./CensoredText";

export default function SomeComponent() {
  const badWords = ["test", "someBadWord"];
  const someText = "Very long text who containts someBadWord and testWord";

  return (
    <div>
      <CensoredText badWords={badWords}>{someText}</CensoredText>
    </div>
  );
}
