# EXAMPLE 1: using an inner function invocation (with -> and without =>) 
class Point
	constructor: (@x,@y) -> 
	printThin: () ->
		console.log "printThin = (#{@x},#{@y})"
		innerFn = () => (console.log "inner in printThin = (#{@x},#{@y})" ) # if instead we use the ->, we get a runtime error here!
		innerFn()
	printFat: () =>
		console.log "printFat = (#{@x},#{@y})"
		innerFn = () => (console.log "inner in printFat = (#{@x},#{@y})" ) # if instead we use the ->, we get a runtime error here!
		innerFn()

p = new Point(1,2)
p.printThin()
p.printFat()



# EXAMPLE 2: using setTimeout
class Person
    constructor: (@name) -> 
    tryToSayHelloButFail: (delay) ->
        console.log "name at tryToSayHelloButFail = #{@name}"
        setTimeout (() -> console.log "Hi from #{@name} :("), delay
    sayHello: (delay) ->
        console.log "name at sayHello = #{@name}"
        setTimeout (() -> console.log "Hi from #{@name} :)"), delay


person = new Person "Alice"
person.tryToSayHelloButFail 1 
person.sayHello 1