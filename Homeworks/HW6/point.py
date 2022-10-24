#!/usr/bin/env python3
import math

class Point:

    def __init__(self,x,y):
        self.x = x
        self.y = y
    
    def print():
        print("(" + str(self.x)+"," + str(self.y)+")")

    def __eq__(self, other):
        #==
        return distance(self.x, self.y) == distance(other.x, other.y)
    
    def __le__(self, other):
        # <=
        return distance(self.x, self.y) <= distance(other.x, other.y)

    def __ge__(self, other):
        # >=
        return distance(self.x, self.y) >= distance(other.x, other.y)
    
    def __lt__(self,other):
        # <
        return distance(self.x, self.y) < distance(other.x, other.y)
    
    def __gt__(self, other):
        # >
        return distance(self.x, self.y) > distance(other.x, other.y)

def distance(x, y):
    return math.sqrt(pow((x), 2) + pow((y), 2))

p1 = Point(2,3)
p2 = Point(-3,1)
p3 = Point(-2,-3)
print(p1 > p2)
print(p1 == p2)
print(p1 < p2)
print(p1 == p3)

