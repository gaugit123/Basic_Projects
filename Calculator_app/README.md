# 🧮 Python GUI Calculator

A simple **Calculator desktop application** built using **Python and Tkinter**.

The calculator provides a graphical interface for performing basic arithmetic operations such as addition, subtraction, multiplication, division, and modulus.

## ✨ Features

* Clean and simple graphical user interface
* Addition (`+`)
* Subtraction (`-`)
* Multiplication (`x`)
* Division (`÷`)
* Modulus (`%`)
* Decimal number support
* Delete (`DEL`) button
* Clear (`C`) button
* Fixed-size calculator window

## 🛠️ Technologies Used

* **Python**
* **Tkinter** — for creating the graphical user interface

## 📁 Project Structure

```
Calculator_app/
│
├── main.py
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```
git clone https://github.com/gaugit123/Calculator_app.git
cd Calculator_app
```

### 2. Run the application

No external Python packages are required because Tkinter is included with most standard Python installations.

```
python calculator_app.py
```

## 🖥️ How It Works

The calculator uses Tkinter buttons to receive user input and a label to display the current expression and result.

For example:

```
10 + 5 = 15
20 - 8 = 12
6 x 4 = 24
20 ÷ 5 = 4
10 % 3 = 1
```

The application stores the first number, selected operator, and second number before calculating the final result.

## ⚠️ Known Limitations

This is a beginner-friendly calculator implementation, so some edge cases may not be handled yet, such as invalid expressions, repeated decimal points, or division by zero.

If you found this project useful, feel free to ⭐ the repository!
