#!/usr/bin/env python3

import math
class Votes:
    def __init__(self,v):
        self.v = v
    
    def __add__(self, n):
        return self.v + n.v