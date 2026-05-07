# Tree View Renderer (React Flow)

Interactive tree-structure visualizer built with React + Vite + React Flow.  
It renders hierarchical data with clean spacing, keeps parents centered above children, supports expand/collapse for any branch, and recalculates layout when visibility changes.

## Requirements Covered

- Proper tree layout with sibling spacing
- Parent nodes centered over child groups
- Parent-child edges for visible nodes
- Expand/collapse on nodes with children
- Layout recalculates after each collapse/expand action
- Fully client-side (no backend)

## Bonus Features Included

- Node hover and click selection state
- Search by label with highlight
- Node metadata tags
- Fit-view control + minimap for larger trees

## Tech Stack

- React
- Vite
- React Flow (`@xyflow/react`)

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Project Structure

```text
src/
  App.jsx                   # React Flow canvas + top controls
  main.jsx                  # app entry point
  index.css                 # styling
  components/
    TreeNode.jsx            # custom node with toggle button
    SearchBar.jsx           # search input
    Toolbar.jsx             # expand/collapse/fit controls
  data/
    treeData.js             # sample hierarchical dataset
  hooks/
    useTree.js              # tree state + projection to graph
  utils/
    layout.js               # spacing + parent-centering layout logic
```

## Notes

- The constraint stated Tree View UI requirement and is frontend-only by design.
