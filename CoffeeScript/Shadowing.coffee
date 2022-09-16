a = 0
b = 1
c = 2
myFunction = () ->
    a = 100 # Overwrites outer: there's an a out there
    b = 200 # Overwrites outer: there's a b out there
    d = 300 # Local, because there's no d out there


myFunction()
console.log [a,b,c]
console.log d


person =
    name: 'Alice'
    tryToSayHelloButFail: (delay) ->
        setTimeout (() -> console.log "Hi from #{@name} :("), delay
    sayHello: (delay) ->
        setTimeout (() => console.log "Hi from #{@name} :)"),delay

person.tryToSayHelloButFail 1000 # Hi from undefined :(
person.sayHello 1000 #Hi from Alice :)