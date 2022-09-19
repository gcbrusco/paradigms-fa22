#  Syntax:
#  (expression) -> ...
# 		this gets translated to function(expression) {...}
#  (expression) => ...
# 		this gets translated to (expression) => ...

# Formula = |x1 - x2| + |y1 - y2|
manhattanDistance = (x1, y1, x2, y2) ->  Math.abs(x1 - x2) + Math.abs(y1 - y2)

# Formula = √((x1 - x2)² + (y1 - y2)²)
euclideanDistance = (x1, y1, x2, y2) ->  Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2))

distance = (p1, p2, metric = "manhattan") ->
	console.log metric == "manhattan"
	if metric == "manhattan"
		manhattanDistance(p1[0],p1[1],p2[0],p2[1])
	if metric == "euclidean"
		euclideanDistance(p1[0],p1[1],p2[0],p2[1])
	null


p1 = [4,4]
p2 = [9,7]
# manhattan distance = 8
# euclidean distance = 5.83
console.log "Manhattan distance #{p1} and #{p2} = #{distance(p1,p2)}"