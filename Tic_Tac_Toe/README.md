# Tic-Tac-Toe

A simple and interactive **Tic-Tac-Toe game** built using **HTML, CSS, and JavaScript**.

The game allows two players to play Tic-Tac-Toe in the browser. Players take turns placing **O** and **X** on a 3×3 game board. The game automatically detects the winner and provides options to start a new game or reset the current game.

## Features

* 🎮 Two-player gameplay
* ❌ Player X and ⭕ Player O
* 🏆 Automatic winner detection
* 🔄 Reset Game button
* 🆕 New Game button
* 🚫 Prevents players from selecting an already-used box
* 📱 Responsive game board using CSS viewport units
* 🎨 Simple and colorful user interface

##  Technologies Used

* **HTML5** — for the structure of the game
* **CSS3** — for styling and layout
* **JavaScript** — for game logic and winner detection

## 📁 Project Structure

```text
Tic_Tac_Toe/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

## How to Run

### 1. Clone the repository

```bash
git clone https://github.com/gaugit123/Tic_Tac_Toe.git
cd Tic_Tac_Toe
```

### 2. Open the game

You don't need to install any dependencies.

Simply open:

```text
index.html
```

in your web browser.

## 🏆 Winning Patterns

The game checks these 8 possible winning combinations:

```text
[0, 1, 2]    [3, 4, 5]    [6, 7, 8]

[0, 3, 6]    [1, 4, 7]    [2, 5, 8]

[0, 4, 8]    [2, 4, 6]
```

These represent the three rows, three columns, and two diagonals of the board.

## JavaScript Concepts Used

This project helped implement several important JavaScript concepts:

* DOM manipulation
* `querySelector()` and `querySelectorAll()`
* Event listeners
* Arrays
* `forEach()`
* Functions
* Conditional statements
* Template literals
* Button disabling/enabling
* CSS class manipulation using `classList`

If you enjoyed this project, feel free to ⭐ the repository!
