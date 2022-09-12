#!/usr/bin/env python3

def bfs_traversal(graph, initial_node):
    # your implementation here
    # your function will return a list!
    frontier = []
    visited = set()
    frontier.append(initial_node)

    while frontier: 
        node = frontier.pop(0)

        if node in visited:
            continue
        visited.add(node)
        print(node)

        for neighbor in graph[node]:
            frontier.append(neighbor)

    return visited