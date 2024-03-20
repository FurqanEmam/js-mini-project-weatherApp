const data = [
  {
    title: "Tree Start",
  },
  {
    title: "Step 1",
  },
  {
    title: "Step 2",
    child: [
      {
        title: "Sub Tree",
        curve: true,
        child: [
          {
            title: "Step 1",
          },
        ],
      },
      {
        title: "Sub Tree",
        curve: true,
        child: [
          {
            title: "Step 1",
          },
        ],
      },
    ],
  },
];

function createNode(element) {
  const node = document.createElement("div");
  node.classList.add("node");
  node.textContent = element.title;
  if (element.curve) {
    node.classList.add("curve");
  }
  return node;
}

function createTree(parentElement, treeData) {
  treeData.forEach((element) => {
    const node = createNode(element);
    parentElement.appendChild(node);

    if (element.child) {
      const childContainer = document.createElement("div");
      childContainer.classList.add("child-container");
      node.appendChild(childContainer);
      createTree(childContainer, element.child);
    }
  });
}

const treeContainer = document.getElementById("tree-container");
createTree(treeContainer, data);
