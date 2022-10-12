import tkinter as tk

class CanvasExample:
	step = 5
	window_width = 500
	window_height = 500
	curr_pet = 0
	def __init__(self, root):
		self.root = root
		self.root.title("Canvas Example")
		
		# creates the canvas
		self.canvas = tk.Canvas(self.root, width=self.window_width, height=self.window_height)
		self.canvas.pack()

		# renders pet on the screen
		self.pets = [ tk.PhotoImage(file=f"imgs/pea.png"), tk.PhotoImage(file=f"imgs/nash.png"), tk.PhotoImage(file=f"imgs/ravan.png")]
		self.previous = (0, 0)
		self.pet = self.canvas.create_image(*self.previous, anchor= tk.NW, image=self.pets[self.curr_pet])
		
		# register events
		self.root.bind('<Up>',self.move)   
		self.root.bind('<Down>',self.move)
		self.root.bind('<Left>',self.move)
		self.root.bind('<Right>',self.move)
		self.root.bind('<Button-2>',self.change_pet)
		self.root.bind('<B1-Motion>',self.drag)
		
	
	def move(self, event):
		d = event.keysym # string
		if d == "Right": 	self.canvas.move(self.pet, self.step, 0)
		if d == "Left": 	self.canvas.move(self.pet, -self.step, 0)
		if d == "Up": 		self.canvas.move(self.pet, 0, -self.step)
		if d == "Down": 	self.canvas.move(self.pet, 0, self.step)

	def drag(self, event):
		widget = event.widget
		xc = widget.canvasx(event.x) 
		yc = widget.canvasy(event.y)
		self.canvas.move(self.pet, xc-self.previous[0], yc-self.previous[1])
		self.previous = (xc, yc)

	def change_pet(self, event):
		self.curr_pet = (self.curr_pet + 1) % len(self.pets)
		self.canvas.itemconfig(self.pet,image=self.pets[self.curr_pet])

	
if __name__ == '__main__':
	root = tk.Tk()
	app = CanvasExample(root)
	root.mainloop()
	