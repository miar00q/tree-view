import { useState, useMemo, useCallback } from "react";
import { buildGraph } from "../utils/layout";

function collectAllIds(node, ids = []) {
  ids.push(node.id);
  (node.children || []).forEach((c) => collectAllIds(c, ids));
  return ids;
}

function collectParentIds(node, ids = []) {
  if (node.children && node.children.length > 0) {
    ids.push(node.id);
    node.children.forEach((c) => collectParentIds(c, ids));
  }
  return ids;
}

export function useTree(tree) {
  const [collapsed, setCollapsed] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const toggle = useCallback((id) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const expandAll = useCallback(() => setCollapsed(new Set()), []);

  const collapseAll = useCallback(() => {
    const parentIds = collectParentIds(tree);
    // collapse everything except root
    parentIds.shift();
    setCollapsed(new Set(parentIds));
  }, [tree]);

  const { nodes, edges } = useMemo(() => {
    const { nodes, edges } = buildGraph(tree, collapsed, searchTerm, selectedId);

    // inject toggle handler into each node's data
    const decoratedNodes = nodes.map((n) => ({
      ...n,
      data: {
        ...n.data,
        onToggle: () => toggle(n.id),
        onClick: () => setSelectedId((prev) => (prev === n.id ? null : n.id)),
      },
    }));

    return { nodes: decoratedNodes, edges };
  }, [tree, collapsed, searchTerm, selectedId, toggle]);

  return { nodes, edges, collapsed, toggle, expandAll, collapseAll, searchTerm, setSearchTerm, selectedId, setSelectedId };
}
