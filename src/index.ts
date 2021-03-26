import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { Sorter } from "./Sorter";
import { LinkedList } from "./LinkedList";

const nc = new NumbersCollection([100, 10, -1, 2, -2]);
const cc = new CharactersCollection("cccbaXE");

nc.sort();
console.log(nc);

cc.sort();
console.log(cc);

const ll = new LinkedList();
ll.add(3);
ll.add(-1);
ll.add(100);
ll.add(38);

ll.sort();
ll.print();
