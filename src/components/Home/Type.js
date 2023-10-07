import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "FRONT-END web developer",
          "Html  CSS  Javascript",
          "REACT  Boolstrap  Tailwind",
          "Node.js  mongoDB",
          "If you see this message, it mean you stay here very long",
          "Thanks for visited XD",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;
