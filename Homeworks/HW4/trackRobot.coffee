trackRobot = (north, east, south, west) -> 
	# Your
	# Function
	# implementation
	# here
	east = east || 0
	west = west || 0
	north = north || 0
	south = south || 0
	return [east-west, north-south]


console.log trackRobot(20, 30, 10, 40)
console.log trackRobot()
console.log trackRobot(-10, 20, 10)

module.exports = { trackRobot }

