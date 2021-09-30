import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const [translation, setTranslation] = useState("");

  const mappings = {
    "🌇": "Sunset",
    "🗾": "Map of Japan",
    "⛰️": "Mountain",
    "🌋": "Volcano",
    "🏕️": "Camping",
    "🏖️": "Beach with Umbrella",
    "🏜️": "Desert"
  };

  const updateTranslation = (value) => {
    const translation = mappings[value];
    if (translation) {
      setTranslation(`Translation is ${translation}`);
    } else {
      setTranslation("Emoji not supported");
    }
  };

  return (
    <div className="App">
      <h1 style={{ color: "darkblue" }}>
        🌇 Travel & Places Emojis Translator
      </h1>
      <input
        onChange={(e) => updateTranslation(e.target.value)}
        placeholder="Enter emoji"
        maxLength={10}
      />
      <h2>{translation}</h2>
      <h3>Supported emojis</h3>
      {Object.keys(mappings).map((emoji) => (
        <button onClick={() => setTranslation(mappings[emoji])}>{emoji}</button>
      ))}
    </div>
  );
}
