class Point
    constructor: (@x,@y) ->
    print1: () ->
        console.log "print1 = (#{@x},#{@y})"
        innerFn = () => (console.log "inner in print1 = (#{@x},#{@y})" )
        innerFn()
    print2: () =>
        console.log "print2 = (#{@x},#{@y})"
        innerFn = () -> (console.log "inner in print2 = (#{@x},#{@y})" ) 
        innerFn()

p = new Point(1,2)
p.print1()
p.print2()