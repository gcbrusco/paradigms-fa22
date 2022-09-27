var a = 100;
func = (a) => {
    a = 2;
    ////console.log(a);
}
func2 = () => {
    console.log("func2");
}

func3 = (func2) => {
    func2
    console.log("func3")
}

func2();
func3();
console.log(a);