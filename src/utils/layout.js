const NODE_WIDTH = 160;
const NODE_HEIGHT = 60;
const H_GAP = 24;   // horizontal gap between siblings
const V_GAP = 90;   // vertical gap between levels

// Recursively compute subtree width (leaves = 1 unit)
function getSubtreeWidth(node, collapsed) {
  if (collapsed.has(node.id) || !node.children || node.children.length === 0) {
    return NODE_WIDTH;
  }
  const childrenWidth = node.children.reduce((sum, child, i) => {
    return sum + getSubtreeWidth(child, collapsed) + (i > 0 ? H_GAP : 0);
  }, 0);
  return Math.max(NODE_WIDTH, childrenWidth);
}

// Walk tree and emit flat arrays of nodes/edges
function walk(node, x, y, collapsed, nodes, edges, searchTerm, selectedId) {
  const isCollapsed = collapsed.has(node.id);
  const hasChildren = node.children && node.children.length > 0;
  const matchesSearch = searchTerm
    ? node.label.toLowerCase().includes(searchTerm.toLowerCase())
    : false;

  nodes.push({
    id: node.id,
    type: "treeNode",
    position: { x: x - NODE_WIDTH / 2, y },
    data: {
      label: node.label,
      meta: node.meta,
      hasChildren,
      isCollapsed,
      isSelected: selectedId === node.id,
      isHighlighted: matchesSearch,
    },
  });

  if (!isCollapsed && hasChildren) {
    const totalWidth = node.children.reduce((sum, child, i) => {
      return sum + getSubtreeWidth(child, collapsed) + (i > 0 ? H_GAP : 0);
    }, 0);

    let cursor = x - totalWidth / 2;
    node.children.forEach((child) => {
      const childWidth = getSubtreeWidth(child, collapsed);
      const childX = cursor + childWidth / 2;
      const childY = y + NODE_HEIGHT + V_GAP;

      edges.push({
        id: `e-${node.id}-${child.id}`,
        source: node.id,
        target: child.id,
        type: "smoothstep",
        animated: false,
        style: { stroke: "var(--edge-color)", strokeWidth: 1.5 },
      });

      walk(child, childX, childY, collapsed, nodes, edges, searchTerm, selectedId);
      cursor += childWidth + H_GAP;
    });
  }
}

export function buildGraph(tree, collapsed, searchTerm = "", selectedId = null) {
  const nodes = [];
  const edges = [];
  walk(tree, 0, 0, collapsed, nodes, edges, searchTerm, selectedId);
  return { nodes, edges };
}
