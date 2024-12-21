// Linked List!
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(data) {
    const node = new Node(data);

    let current;

    if (this.head === null) {
      this.head = node;
    } else {

      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;

    }

  }

  prepend(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
    } else {
      const current = this.head;
  
      this.head = node;
  
      this.head.next = current;
    }

  }

  size() {
    let current;
    let size = 0;

    if (this.head === null) {
      return 0;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
        size++;
      }

      return size + 1;
    }
  }

  tail() {

    let current;
    let tail;
    
    if (this.head === null) {
      return null;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;

        if (current.next === null) {
          tail = current;
          break;
        }
      }

      return tail;

    }
  }

  at(index) {
    let current;
    let size = 0;

    if (this.head === null) {
      return 0;
    } else {
      current = this.head;

      if (index >= this.size() || index < 0) return null;

      while (current.next) {
        if (index !== size) {
          current = current.next;
          size++;
        } else if (index === size) {
          break;
        }
      }

      return current;
    }
  }

  pop() {
    let current;

    if (this.head === null) {
      return null;
    } else {
      current = this.head;

      while (current?.next) {
        if (current.next.next === null) {
          const tail = current.next;
          current.next = null;
          return tail;
        }
        current = current.next
      }
    }
  }

  find(value) {
    let current;
    let index = 0;
    
    if (this.head === null) {
      return null;
    } else {

      current = this.head;

      while (current.data !== value) {
        current = current.next;
        index++;
        
        if (!current?.data) {
          return null;
        }
      }

      return index;
    }
  }

  toString() {
    let values = '';
    
    let current;

    if (this.head === null) {
      return '';
    } else {
      
      current = this.head;

      while (current !== null) {
        values += `(${current.data}) => `;

        current = current.next;

      }

      if (current === null) {
        values += 'null';
      }
      return values;
    }
  }

}


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.append('tiger');
list.prepend('elephant');
list.prepend('rabbit')

console.log(
  list
)

console.log(
  list.toString()
)




/*
  INCORRECT SOLUTION TO LINKED LIST
  The following is incorrect because you're saving each new member of the list to an array and accessing the array.
  This is NOT a correct implementation of a Linked list as linked lists operate via references, not by storing them in a particular memory or location

class LinkedList {
  constructor() {
    this.elements = [];
  }

  append(value) {
    const node = new Node(value);

    if (this.elements.length > 0) {
      this.elements[this.elements.length - 1].reference = node.data;
    }

    this.elements.push(node);
  }

  prepend(value) {
    const node = new Node(value);

    if (this.elements.length > 0) {
      node.reference = this.elements[0].data;
    }

    this.elements.unshift(node);
  }

  size() {
    return this.elements.length;
  }

  head() {
    return this.elements[0];
  }

  tail() {
    return this.elements[this.elements.length - 1];
  }

  at(index) {
    if (this.elements[index]) {
      return this.elements[index];
    } else {
      return null;
    }
  }

  pop() {
    const removedValue = this.elements.pop();

    if (this.elements.length > 1) {
      this.elements[this.elements.length - 1].reference = null;
    }

    return removedValue
  }

  contains(value) {
    return this.elements.some((element) => element.data === value);
  }

  find(value) {
    if (this.contains(value)) {
      return [...this.elements].map(element => element.data).indexOf(value);
    } else {
      return null;
    }
  }

}

class Node {
  constructor(data, reference = null) {
    this.data = data;
    this.reference = reference;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(
  list.elements,
)

console.log(
  list.find('purple')
)



*/












/*

Binary Search
function binary(arr, target) {
  const middle = Math.floor((0 + arr.length - 1) / 2);

  console.log(middle);

  if (arr[middle] === target) {
    return middle;
  } else {

    if (target < arr[middle]) {
      const leftArray = [...arr].slice(0, middle);
      console.log(leftArray);

      return binary(leftArray, target)
    } else if (target > arr[middle]) {
      const rightArray = [...arr].slice(middle + 1, arr.length);
      console.log(rightArray)

      return binary(rightArray, target);
    }

    return middle;
  }
}

console.log(
  binary([9, 11, 17, 25, 46, 87, 108], 108)
);

*/