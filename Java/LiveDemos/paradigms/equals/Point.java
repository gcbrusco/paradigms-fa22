package paradigms.equals;
class Point {
	private int x;
	private int y;

	public Point(int x, int y){
		this.x = x;
		this.y = y;
	}
	
	// Reflexive:	a.equals(a) = true
	// Symetric:	a.equals(b) = b.equals(a)
	// Transitive:	a.equals(b) and b.equals(c) then a.equals(c)
	// Non-null:	a.equals(null) = false
	// TODO: implement equals based on x and y
	
	// @Override
	// public boolean equals(Object other){
	// }

	
	@Override
	public String toString(){
		return "(" + x + ", " + y + ")";
	}

	
	// @Override
	// public int hashCode(){
	// 	//  TODO: hash = <prime number> * hash + var_code;
	// 	return 0;
	// }
}