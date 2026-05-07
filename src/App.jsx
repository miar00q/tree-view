import { useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { initialTree } from "./data/treeData";
import { useTree } from "./hooks/useTree";
import TreeNode from "./components/TreeNode";
import SearchBar from "./components/SearchBar";
import Toolbar from "./components/Toolbar";

const nodeTypes = { treeNode: TreeNode };

function Flow() {
  const { fitView } = useReactFlow();
  const { nodes, edges, expandAll, collapseAll, searchTerm, setSearchTerm } =
    useTree(initialTree);

  const onFitView = useCallback(() => {
    fitView({ padding: 0.15, duration: 500 });
  }, [fitView]);

  const onNodeClick = useCallback((_evt, node) => {
    node.data.onClick?.();
  }, []);

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__brand">
          <span className="app__brand-icon">◈</span>
          <span className="app__brand-name">TreeView</span>
        </div>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <Toolbar
          onExpandAll={expandAll}
          onCollapseAll={collapseAll}
          onFitView={onFitView}
        />
      </header>

      <main className="app__canvas">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodeClick={onNodeClick}
          fitView
          fitViewOptions={{ padding: 0.15 }}
          minZoom={0.2}
          maxZoom={2}
          proOptions={{ hideAttribution: true }}
        >
          <Background color="var(--grid-dot)" size={1.5} gap={24} />
          <Controls className="rf-controls" />
          <MiniMap
            nodeColor={(n) =>
              n.data?.isHighlighted
                ? "var(--highlight)"
                : n.data?.isSelected
                ? "var(--accent)"
                : "var(--node-bg)"
            }
            maskColor="var(--minimap-mask)"
            className="rf-minimap"
          />
        </ReactFlow>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
