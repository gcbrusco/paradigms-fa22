changeEnough = (changeInPocket, amount) -> 
	# Your
	# Function
	# implementation
	# here
	changeValues = [.25, .10, .05, .01]
	totalChange = 0
	for i in [0..3]
		totalChange = totalChange + (changeValues[i]*changeInPocket[i]);
	return totalChange >= amount ? true : false
	
# Keep the line below so we can test your code!
module.exports = { changeEnough }