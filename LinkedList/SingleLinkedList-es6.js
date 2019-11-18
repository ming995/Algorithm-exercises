/**
 * 单链表 es6 实现
 */
class LinkedList {
    constructor(value) {
        this.head = null;
        this.length = 0;
        this.addToHead(value);
    }
    // 从头部添加
    addToHead(value) {
        const newNode = { value };
        newNode.next = this.head;
        this.head = newNode;
        this.length ++;
        return this;
    }

    // 查找方法
    find(item) {
        let currentNode = this.head;
        while(currentNode.value != item) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    // 添加方法
    insert(newItem, item) {
        const newNode = { newItem }
        newNode.next = this.head;
        this.head = newNode;
        let currentNode = this.find(item);
        console.log(currentNode);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

}

const list = new LinkedList('first')
    .addToHead('second')
    .addToHead('third');
console.log('---------------链表----------------');
console.log(list);

list.insert('four', 'third');
console.log(list);