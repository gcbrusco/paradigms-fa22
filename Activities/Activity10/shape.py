from tkinter import *

class Shape(Frame):

    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        self.master.title("Shapes")
        self.pack(fill=BOTH, expand=1)

        canvas = Canvas(self)
        canvas.create_rectangle(230, 15, 290, 15, outline = "black", fill="blue, width=2")

        canvas.pack(fill=BOTH, expand=1)

def main():
    root = Tk()
    shape = Shape()
    root.geometry("330x220+300+300")
    root.mainloop()

main()