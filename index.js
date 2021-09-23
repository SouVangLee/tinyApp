class NodeList {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }

  appendNode(value) {
    const newNode = new NodeList(value);
    this.next = newNode;
    newNode.previous = this;
  }
}

const addNodes = (rootNode, listItems) => {
  let currentNode = rootNode;
  const lastIdx = listItems.length - 1;

  listItems.forEach((item, i) => {
    currentNode.appendNode(item);
    currentNode = currentNode.next;

    if (i === lastIdx) {
      rootNode.previous = currentNode;
      currentNode.next = rootNode;
    }
  });
};


document.addEventListener("DOMContentLoaded", () => {
  const rootNode = new NodeList("app");
  const navList = ["blog", "shop", "note", "game", "graveyard"];
  addNodes(rootNode, navList);

  console.log('rootNode', rootNode);

  const leftButton = document.querySelector(".left");
  const rightButton = document.querySelector(".right");
});