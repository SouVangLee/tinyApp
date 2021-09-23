const addNodes = (rootNode, listItems) => {
  let currentNode = rootNode;

  listItems.forEach((item, i) => {
    if (i === listItems.length - 1) currentNode.appendTail(item);
    else currentNode.appendNode(item);
    currentNode = currentNode.next;
  });
};

// module.exports = { addNodes };