package paradigms.shapes;
public class ShapesApp {
	public static void main(String[] args) {
		// an array of shapes, why does it work?
		Shape [] shapes = 	new Shapes[]{
			new Rectangle(2,3),
			new Circle(4),
			new Triangle(4,5)
		};

		// alternative array iteration syntax
		for(Shape s: shapes){
			System.out.println(s.calculateArea());
			// TODO: check runtime type

			// TODO: print the object (toString())
		}

	}
}