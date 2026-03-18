---

# 🎮 TG Client — Word Guessing Game (Termo Clone)

A web-based word guessing game inspired by Termo, where players must discover a secret word within a limited number of attempts.

## 🚀 Overview

TG Client is a frontend application built with modern web technologies that replicates the core mechanics of popular word puzzle games like Wordle.

The goal is simple: guess the hidden word in a fixed number of tries. After each guess, the game provides feedback by coloring the letters, helping you get closer to the correct answer.

## 🧠 How to Play

* You have a limited number of attempts to guess the secret word.
* Each guess must be a valid word.
* After submitting a guess, each letter will be highlighted with a color indicating its accuracy:

  * 🟩 **Green**: The letter is in the correct position.
  * 🟨 **Yellow**: The letter exists in the word but is in the wrong position.
  * ⬜ **Gray / Uncolored**: The letter is not in the word.

Use these hints to refine your next guesses and find the correct word before you run out of attempts.

## 🛠️ Tech Stack

This project was built using:

* ⚛️ **React** — UI library for building interactive interfaces
* 🟦 **TypeScript** — Static typing for better maintainability
* 🧠 **Redux** — State management for predictable application behavior

## 📦 Getting Started

Follow these steps to run the project locally:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd tg-client
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

   or simply:

   ```bash
   yarn
   ```

4. Start the development server:

   ```bash
   yarn start
   ```

5. Open your browser and go to:

   ```
   http://localhost:3000/
   ```

## 🔮 Future Improvements

* Add difficulty levels
* Daily challenge mode
* Score tracking and statistics
* Animations and sound effects

---

If you want, I can also tailor this README for GitHub (with badges, screenshots, and deploy links).
