package paradigms.classes;
public class Student{
	private String name;
	private String [] grades;

	public Student(String name, String [] grades){
		this.name = name;
		this.grades = grades;
	}


	/**
     * Computes the student's GPA
     * A  = 4 / A- =3.667 
     * B+ = 3.333 / B = 3 / B- = 2.667
     * C+ = 2.333 / C = 2 / C- = 1.667
     * D = 1 / F = 0
     */
    public float computeGPA(){
    	

    	return 0;
    }
}