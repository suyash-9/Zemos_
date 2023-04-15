// Importing all neccesary libraries
//import "./App.css";
import React, { useRef } from "react";
import Webcam from "react-webcam";
import { drawHand } from "./utilities";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import * as fp from "fingerpose";
import { Link } from "react-router-dom";

// Importing pre-defined gesture (using fingerpose library)
import { Stop } from "./stop";
import { Start } from "./start";
import { Left } from "./left";
import { Right } from "./right";
import { Movedown } from "./movedown";
import { Moveup } from "./moveup";
import "./game.css";

function Game() {
  // Styling of the unity container and the camera feed window.
  return (
    <>
      <div class="container">
        <h1 style={{color: '#19e89c'}}>ZEMOS</h1>
        <p>
          Zemos is a web solution hand gesture (through webcam of your laptop) as an input to move
          a 3D character model in a 3D environment build in Unity 3D.
          <br />
          Zemos is derived from the Greek word "zemio," which means "to
          gesture." The name is a perfect fit for a gesture-based gaming service
          that allows users to play games on their computer using hand gestures.
          <br />
          This gaming website uses hand gestures to play games, allowing users
          to move around and engage in physical activity while playing. It not only provides a fun and interactive
          experience but also helps promote mobility and improve health. By
          leveraging computer vision and machine learning techniques, such a
          website can recognize and interpret hand gestures, translating them
          into game actions. Additionally, the website can offer a range of
          games that cater to different levels of physical activity, making it
          accessible to a broad range of users.
        </p>
      </div>
      <div class="container2">
        <div class="row">
          <div class="column">
            <h1 style={{color: '#19e89c'}}>FEATURES</h1>
            <p>
              Currently there are 6 hand gestures used in the project:
              <ul>
                <li>Move Front</li>
                <li>Stop</li>
                <li>Move Left</li>
                <li>Move Right</li>
                <li>Jump</li>
                <li>Crouch</li>
              </ul>
              Background music is also integrated with the environment.
            </p>
          </div>
          <div class="column">
            <img src="https://github.com/chaitanya-chafale/Hand-Gesture-Gaming/raw/main/public/Unity%20Environment.gif" />
          </div>
        </div>
      </div>
      <div className="container">
        <h1 style={{color: '#19e89c'}}>INSTRUCTIONS</h1>
        <p>
          The following are the hand gestures that are supported to play the game :
        </p>
        
        <br />
        <img
          src="https://user-images.githubusercontent.com/57006874/120470102-cc150980-c3c0-11eb-9034-3cea8e26c10a.png"
          alt="Game Screenshot"
        />

        <br />
        <Link to="/Hand-Gesture-Gaming/">
          <button class="glowing-button">Play Now</button>
        </Link>
      </div>
    </>
  );
}

export default Game;
