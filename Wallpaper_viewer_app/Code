from tkinter import *
from PIL import ImageTk, Image
import os

def next_img():
    global counter
    img_label.config(image=img_array[counter%len(img_array)])
    counter = counter+1


counter = 0
root = Tk()
root.title("Wallpaper Viewer")

root.geometry('350x450')
root.configure(background="black")

files = os.listdir("wallpapers") #lists all files in wallpapers folder
img_array = []
for file in files:
    img = Image.open(os.path.join('wallpapers', file))
    resized_image = img.resize((300,200))
    img_array.append(ImageTk.PhotoImage(resized_image))

img_label = Label(root,image = img_array[0])
img_label.pack(pady=(20,10))

next_btn = Button(root,text = 'Next', bg = "white", fg = "black", width=30, height=2, command=next_img)
next_btn.pack()


root.mainloop()
