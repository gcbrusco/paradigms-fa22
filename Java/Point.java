
public class Point {
    private int x;
    private int y;

    @Override
    public boolean equals(Object other){
        // reflexive
        if(other == this)
            return true;
        // non-null
        if(other == null)
            return false;
        // don't even bother! they have different types
        if(getClass() != other.getClass())
            return false;
        Point point = (Point) other; // why do we need this type cast?
        return x == point.x && y == point.y;
    }

    @Override
    public int hashCode(){
        int hash = 41 + x;
        hash = 41 * hash + y;
        return hash;
    }

    @Override
    public String toString() {
        return "[" + x + ", " + y + "]";
    }

    public static void main(String[] args) {
        Point p1 = new Point(1,2);
        Point p2 = new Point(1,2);
        Point p3 = new Point(3,4);


        System.out.println("p1 == p2 ? " + (p1 == p2));
        System.out.println("p1.equals(p2) ? " + p1.equals(p2));
        System.out.println("p2.equals(p3) ? " + p2.equals(p3));

        System.out.println(p1.hashCode());

        System.out.print(p1);
    }


}
