#!/usr/bin/env python3
class odd_numbers:
    def __init__(self, n):
        self.results = [2*x + 1 for x in range(n)]
    
    def __iter__(self): 
        return self

    def __next__(self): 
        if self.results:
            return self.results.pop(0)                                          
        else:
            raise StopIteration() 
x = odd_numbers(3)
for i in odd_numbers(4):    
    print(i)
# class vowels:
#     def __init__(self, word):
#         self.i = 0
#         self.results = []
#         for x in word: 
#             if x in ['a','e','i','o','u']: 
#                 self.results.append(x)

#     def __iter__(self): 
#         return self

#     def __next__(self): 
#         if self.results:
#             return self.results.pop(0)                                          
#         else:
#             raise StopIteration() 


# x = vowels("hello")
# print(x.results)