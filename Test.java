import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.Map;
import java.util.TreeSet;

public class Test {
    public static void main(String[] args) {

        String str = "yes";
        String str2 = "yes";
        String str3 = new String("yes");
        String str4 = new String("yes");
        System.out.println(str == str2);
        System.out.println(str.equals(str2));
        System.out.println(str3 == str4);
        System.out.println(str3.equals(str4));

        ArrayList<Integer> al = new ArrayList<>();
        al.add(10);
        al.add(20);
        al.add(30);

        ArrayList<Integer> al2 = new ArrayList<>();
        al2.add(30);
        al2.add(40);
        al2.add(60);
        al2.add(50);

        al.addAll(al2);
        Iterator<Integer> iterator = al.iterator();

        while (iterator.hasNext()) {
            System.out.print(iterator.next() + " ");
        }
        System.out.println();
        for (int i : al) {
            System.out.print(i + ", ");
        }
        System.out.println();
        // ArrayList al3 = new ArrayList<>();
        LinkedList al3 = new LinkedList();
        al3.add(30);
        al3.add(50);
        al3.add(40);
        al3.add("salao");
        al3.add("salao");
        al3.add(null);
        al3.add(null);

        Iterator itr = al3.iterator();
        while (itr.hasNext()) {
            System.out.println(itr.next());
        }

        for (Object i : al3) {
            System.out.print(i + ", ");
        }

        System.out.println();
        Map<String, String> map = new HashMap<>();

        TreeSet treeSet = new TreeSet<>();
        treeSet.add(10);
        treeSet.add(10);
        treeSet.add(30);
        treeSet.add(20);
        // treeSet.add(null);

        System.out.println(treeSet);

    }

    public int demo() {
        return 1;
    }

    public static int demo1() {
        return 1;
    }
}