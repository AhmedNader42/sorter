import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { Sorter } from "./Sorter";

const nc = new NumbersCollection([100, 10, -1, 2, -2]);
const cc = new CharactersCollection("Hello World AA");

const nsorter = new Sorter(nc);
nsorter.sort();
console.log(nc);

const cSorted = new Sorter(cc);
cSorted.sort();
console.log(cc);
