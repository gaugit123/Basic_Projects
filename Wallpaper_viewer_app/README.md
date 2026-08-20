# 🖼️ Wallpaper Viewer

A simple **Wallpaper Viewer desktop application** built with **Python, Tkinter, and Pillow (PIL)**.

The application loads images from a wallpapers folder and allows the user to browse through them using a **Next** button.

## 🛠️ Technologies Used

* **Python**
* **Tkinter** — for the graphical user interface
* **Pillow (PIL)** — for loading and resizing images
* **OS module** — for accessing files in the wallpapers folder

## ⚙️ Installation

### 1. Clone the repository

git clone https://github.com/gaugit123/Wallpaper_viewer_app.git
cd Wallpaper_viewer_app

### 2. Install Pillow

Tkinter usually comes with Python. Install Pillow using:

pip install pillow

### 3. Add wallpapers

Create a folder named `wallpapers` in the project directory and add your images:

wallpapers/
├── image1.jpg
├── image2.png
└── image3.jpeg

### 4. Run the application

python main.py

## 🖥️ How It Works

1. The application looks for images inside the `wallpapers` folder.
2. Each image is opened using Pillow.
3. Images are resized to `300 × 200` pixels.
4. The first wallpaper is displayed when the application starts.
5. Clicking the **Next** button displays the next wallpaper.
6. When the last wallpaper is reached, the application starts again from the first wallpaper.

If you found this project useful, feel free to ⭐ the repository!
