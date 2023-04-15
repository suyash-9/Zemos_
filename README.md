#  <p align =center>Zemos</p>
<p align="center">
  <img width="200" src="https://github.com/suyash-9/Zemos/blob/main/public/game_logo.png" alt="Material Bread logo">
</p>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Unity](https://img.shields.io/badge/unity-%23000000.svg?style=for-the-badge&logo=unity&logoColor=white)
![OpenGL](https://img.shields.io/badge/OpenGL-%23FFFFFF.svg?style=for-the-badge&logo=opengl)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white)
![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)
![Stack Overflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)
![Reddit](https://img.shields.io/badge/Reddit-%23FF4500.svg?style=for-the-badge&logo=Reddit&logoColor=white)

## About
   Zemos is a web solution hand gesture (through webcam of your laptop) as an input to move a 3D character model in a 3D environment build in Unity 3D.
Zemos is derived from the Greek word "zemio," which means "to gesture." The name is a perfect fit for a gesture-based gaming service that allows users to play games on their computer using hand gestures.
This gaming website uses hand gestures to play games, allowing users to move around and engage in physical activity while playing. It not only provides a fun and interactive experience but also helps promote mobility and improve health. By leveraging computer vision and machine learning techniques, such a website can recognize and interpret hand gestures, translating them into game actions. Additionally, the website can offer a range of games that cater to different levels of physical activity, making it accessible to a broad range of users.

## Features
* Currently there are 6 hand gestures used in the project:
  * Move Front
  * Stop
  * Move Left
  * Move Right
  * Jump
  * Crouch
* Background music is also integrated with the environment.

## Workflow

* Building the 3D Environment in **Unity 3D**
  * Creating character in Unity 3D
  * Giving Animations to the Character using Adobe's Mixamo.
  * Developing C# Script for movement of the 3D character.
  * Creating 3D Environment by adding Objects such as trees, elevated lands, bridge, pond
  * Integrating this environment with the character created.
  * Adding sound to the environment.
  
* Integrating the 3D Environment and the Gesture Recognition Model
   * Using **WebGL** library to convert Unity Model to HTML.
   * Calling script functions in C# from React.js using Unity Model Instance.
     
## Instructions To Play the Game
The following are the hand gestures that are supported to play the game :
![image](https://user-images.githubusercontent.com/57006874/120470102-cc150980-c3c0-11eb-9034-3cea8e26c10a.png)

## Preview

<!-- Hand Gesture Recognition

![Hand Gesture Recognition Model](https://user-images.githubusercontent.com/57006874/120469047-81df5880-c3bf-11eb-8644-de02c66c5e06.gif) -->

Unity-Environment

![Environment](https://github.com/chaitanya-chafale/Hand-Gesture-Gaming/blob/main/public/Unity%20Environment.gif)

 
## Tools Used
* React Js
* HTML
* CSS
* Tensorflow
* OpenGL Library
* Unity
* ML Kit