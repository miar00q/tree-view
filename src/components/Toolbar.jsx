export default function Toolbar({ onExpandAll, onCollapseAll, onFitView }) {
  return (
    <div className="toolbar">
      <button className="toolbar__btn" onClick={onExpandAll}>
        Expand all
      </button>
      <button className="toolbar__btn" onClick={onCollapseAll}>
        Collapse all
      </button>
      <button className="toolbar__btn" onClick={onFitView}>
        Fit view
      </button>
    </div>
  );
}
