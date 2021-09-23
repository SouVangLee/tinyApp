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

  appendTail(value) {
    const newNode = new NodeList(value);
    this.previous = newNode;
    newNode.next = this;
  }
}
