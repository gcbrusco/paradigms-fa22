#!/usr/bin/env python3

def move_robot(n):
    directions = [(0,1),(1,0),(0,-1),(-1,0)]
    x = 0
    y = 0
    for i in range(n+1):
        it = i - 1
        x = x + (i * directions[it%4][0])
        y = y + (i * directions[it%4][1])
        #print(f'x:{self.x}  y:{self.y}   i:{i}  direction:{self.directions[i%4]}')
        yield (x,y)