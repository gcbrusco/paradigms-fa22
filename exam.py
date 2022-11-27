#!/usr/bin/env python3

class fibonacci:                                        
    def __init__(self, num):                      
        self.num = num
        self.count = 0

    def __iter__(self):                           
        self.x = 0
        self.y = 1
        return self

    def __next__(self):                           
        fib = self.x
        self.count = self.count + 1
        if self.num + 1< self.count:
            raise StopIteration                   
        self.x, self.y = self.y, self.x + self.y
        return fib   


for v in fibonacci(6):
    print(v)