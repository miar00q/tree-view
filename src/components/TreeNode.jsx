import { Handle, Position } from "@xyflow/react";
import { useEffect, useState } from "react";

export default function TreeNode({ data, isConnectable }) {
  const [hovered, setHovered] = useState(false);
  const [entered, setEntered] = useState(false);
  const { label, meta, hasChildren, isCollapsed, isSelected, isHighlighted, onToggle } = data;

  const metaEntries = meta ? Object.entries(meta).slice(0, 2) : [];

  useEffect(() => {
    const timer = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <div
      className={[
        "tree-node",
        entered ? "tree-node--entered" : "",
        isSelected ? "tree-node--selected" : "",
        isHighlighted ? "tree-node--highlighted" : "",
        hovered ? "tree-node--hovered" : "",
        hasChildren ? "tree-node--parent" : "tree-node--leaf",
      ]
        .filter(Boolean)
        .join(" ")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} className="node-handle" />

      <div className="tree-node__inner">
        <div className="tree-node__label">{label}</div>

        {metaEntries.length > 0 && (
          <div className="tree-node__meta">
            {metaEntries.map(([k, v]) => (
              <span key={k} className="tree-node__tag">
                {k}: {String(v)}
              </span>
            ))}
          </div>
        )}
      </div>

      {hasChildren && (
        <button
          className="tree-node__toggle"
          onClick={(e) => {
            e.stopPropagation();
            onToggle?.();
          }}
          title={isCollapsed ? "Expand" : "Collapse"}
        >
          {isCollapsed ? "+" : "−"}
        </button>
      )}

      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} className="node-handle" />
    </div>
  );
}
