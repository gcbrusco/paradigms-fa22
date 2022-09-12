#!/usr/bin/env python3

def tree_to_text(tree, root_node):
    # your implementation here
    # your function will return a string!
    if root_node is None: return
    size = len(tree[root_node])
    if size == 2:
        tree_to_text(tree, tree[root_node][0])
        print(root_node[3:], end="")
        tree_to_text(tree, tree[root_node][1])
    elif size == 1:
        tree_to_text(tree, tree[root_node][0])
        print(root_node[3:], end="")
    elif size == 0:
        print(root_node[3:], end="")