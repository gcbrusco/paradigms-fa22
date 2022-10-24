#!/usr/bin/env python3

class move_robot:
    def __init__(self, n):
        self.n = n
        self.i = 0
        self.x = 0
        self.y = 0
        self.directions = [(0,1),(1,0),(0,-1),(-1,0)]

    def __iter__(self): # creates the iterable object
        return self
    
    def __next__(self): # invoked at every iteration
        while self.i <= self.n:
            i = self.i
            it = self.i - 1
            self.x = self.x + (i * self.directions[it%4][0])
            self.y = self.y + (i * self.directions[it%4][1])
            #print(f'x:{self.x}  y:{self.y}   i:{i}  direction:{self.directions[i%4]}')
            self.i += 1
            return (self.x,self.y)
        else:
            raise StopIteration() # stops iteration