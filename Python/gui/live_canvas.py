import tkinter as tk 

class CanvasExample:
	width = 500
	height = 500
	
	def __init__(self, root):
		self.root = root
		self.root.title("Canvas Example")
		
		# creates the canvas
		self.canvas = tk.Canvas(self.root, width=self.width,height=self.height)
		self.canvas.pack()

		# renders pet on the screen
		self.pets = [tk.PhotoImage(file="imgs/pea.png"), tk.PhotoImage(file="imgs/nash.png"), tk.PhotoImage(file="imgs/ravan.png")]
		self.curr_pet = 0
		self.pet = self.canvas.create_image(0, 0, image=self.pets[self.curr_pet], anchor=tk.NW)

		# register events
		self.root.bind("<Up>", self.move)

	def move(self, event):
		pass
			
	
if __name__ == '__main__':
	# creates main window
	root = tk.Tk()
	# instantiates our UI class
	app = CanvasExample(root)
	# enters the main loop
	root.mainloop()
