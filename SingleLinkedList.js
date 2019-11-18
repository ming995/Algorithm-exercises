/**
 *  单链表
 *  Insert: 插入节点
 *  Remove: 删除节点
 *  Delete List: 删除链表
 *  Count: 统计链表长度
 */

/**
 * 定义节点类
 * @param {*} element 
 */
function Node(element) {
    this.element = element; // 当前节点元素
    this.next = null;       // 定义指向下一个节点指针
}

function SingleLinkedList() {
    this.head = new Node('head');   // 头节点
}

SingleLinkedList.prototype = {
    // 查找方法：链表查找从头开始向后找
    find: function (item) {
        let currentNode = this.head;    // 将当前元素设置为头元素
        while (currentNode.element != item) {
            currentNode = currentNode.next;
        }
        return currentNode;
    },
    /**
     * 
     * @param {*} newItem 新插入的节点
     * @param {*} item 要插入的节点的上一个节点
     */
    insert: function (newItem, item) {
        let newNode = new Node(newItem);
        let currentNode = this.find(item);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    },
    // 显示链表
    desplay: function() {
        let currentNode = this.head;
        while (!(currentNode.next === null)) {
            console.log(currentNode.next.element);
            currentNode = currentNode.next;  
        }
    },
    // 查找上一个元素
    findPrev: function(item) {
        let currentNode = this.head;
        while(!(currentNode.next == null) && (currentNode.next.element !== item)) {
            currentNode = currentNode.next;
        }
        return currentNode;

    },
    // 删除方法
    remove: function(item) {
        let prevItem = this.findPrev(item); // 上一个元素
        if(!(prevItem == null)) {
            prevItem.next = prevItem.next.next;  
        }
    },
    // 获取链表长度
    getListSize: function() {
        let count = 0;
        let currentNode = this.head;
        while(!(currentNode.next == null)) {
            count ++;
            currentNode = currentNode.next
        }
        return count;
    },
    // 清空链表
    clearList: function() {
        let currentNode = this.head;
        while(!(currentNode == null)) {
            nextNode = currentNode.next;
            this.remove(nextNode);
            currentNode = currentNode.next;

        }
        console.log(currentNode);
        return currentNode
    }
}

let singleLinkedList = new SingleLinkedList();
singleLinkedList.insert('js', 'head');
singleLinkedList.insert('go', 'js');
singleLinkedList.insert('python', 'go');
singleLinkedList.insert('ruby', 'go');

singleLinkedList.findPrev('ruby');
console.log('链表长度:', singleLinkedList.getListSize());
singleLinkedList.desplay();
console.log('------------------删除元素前-----------------');
console.log('------------------删除元素后-----------------');
singleLinkedList.remove('python');
singleLinkedList.desplay();
console.log('链表长度:', singleLinkedList.getListSize());
console.log('--------------------------------------------');
console.log('------------------清空链表-------------------');
// singleLinkedList.clearList();