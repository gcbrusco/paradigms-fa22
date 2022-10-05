#!/usr/bin/env python3
import math

class Point:

    def __init__(self,x,y):
        self.x = x
        self.y = y
    
    def print():
        print("(" + str(self.x)+"," + str(self.y)+")")

def distance(p1, p2):
    return math.sqrt(pow((p2.x - p1.x), 2) + pow((p2.y - p1.y), 2))