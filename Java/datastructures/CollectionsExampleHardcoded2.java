package datastructures;


import java.util.HashSet;
import java.util.TreeSet;
import java.util.Set;

public class CollectionsExampleHardcoded2{

	public static void main(String [] args){		
		HashSet<String> set = new HashSet<>();
		
		set.add("A");
		set.add("X");
		set.add("Q");
		set.add("F");
		set.add("M");
		set.add("D");
		

		// how can we make this print in order?
		// is there a way to do so with minimal changes to this code?
		// Answer: Set<String> set = new TreeSet<>();
		for(String str: set)
			System.out.println(str);

	}
}


