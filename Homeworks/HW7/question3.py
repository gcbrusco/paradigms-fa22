#!/usr/bin/env python3
import tkinter as tk 

class CanvasExample:
    width = 400
    height = 300
    
    def __init__(self, root):
        self.root = root
        self.root.title("tk")
        self.i = 0
        self.directions = [(0,-10),(-10,0),(0,10),(10,0)]
        
        # creates the canvas
        self.canvas = tk.Canvas(self.root, width=self.width,height=self.height)
        self.canvas.configure(bg="white")
        self.create_grid()
        self.canvas.pack()

        # renders bot on the screen
        self.create_bot()

        #  events
        self.root.bind("<ButtonRelease-1>", self.move)

    def create_bot(self):
        self.img = tk.PhotoImage(file="robot-32x32.png")
        self.bot = self.canvas.create_image(self.width/2, self.height/2, image=self.img, anchor=tk.CENTER)

    def create_grid(self):
        # Creates all vertical lines at intevals of 100
        for i in range(0, self.width+10, 10):
            self.canvas.create_line([(i, 0), (i, self.height)], fill="red")

        # Creates all horizontal lines at intevals of 100
        for i in range(0, self.height+10, 10):
            self.canvas.create_line([(0, i), (self.width, i)], fill="red")

    def move(self, event):
        if self.canvas.coords(self.bot)[1] == 0.0:
            self.i = 0
            self.canvas.delete(self.img)
            self.create_bot()
        self.i += 1
        i = self.i
        it = self.i - 1
        self.canvas.move(self.bot, i* self.directions[it%4][0], i*self.directions[it%4][1])
        print(self.canvas.coords(self.bot))  
    
if __name__ == '__main__':
    # creates main window
    root = tk.Tk()
    # instantiates our UI class
    app = CanvasExample(root)
    # enters the main loop
    root.mainloop()