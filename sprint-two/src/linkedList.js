var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null && list.tail === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node; 
    }
  };

  list.removeHead = function() {
    var temp = list.head;
    if (list.head !== null) {
      delete list.head;
      list.head = temp.next;
    } else {
      return null;
    }
    return temp.value;
  };

  list.contains = function(target) {

    var node = list.head;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail: constant O(1)
 removeHead: constant O(1)
 contains: linear O(n)
 */
