import { Sorter } from "./Sorter";
class Node {
    next: Node | null = null;

    constructor(public data: number) {}
}

export class LinkedList extends Sorter {
    head: Node | null = null;

    constructor() {
        super();
    }
    add(data: number): void {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
            return;
        }

        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }

        tail.next = node;
    }

    get length(): number {
        if (!this.head) {
            return 0;
        }

        let tail = this.head;
        var counter = 1;
        while (tail.next) {
            counter += 1;
            tail = tail.next;
        }
        return counter;
    }

    at(index: number): Node {
        if (!this.head) {
            throw new Error("Index out of bounds");
        }

        let node: Node | null = this.head;
        var counter = 0;
        while (node) {
            if (counter === index) {
                return node;
            }
            node = node.next;
            counter += 1;
        }
        throw new Error("Index out of bounds");
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if (!this.head) {
            throw new Error("List is empty");
        }

        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }

    print(): void {
        if (!this.head) {
            return;
        }

        let node: Node | null = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
