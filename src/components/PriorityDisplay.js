const PriorityDisplay = ({ priority }) => {
  return (
    <div className="priority-display">
      <div className="star-container">
        <h3 style={{ color: priority >= 1 ? "rgb(253, 253, 150)" : "" }}>
          <span class="material-symbols-outlined">star</span>
        </h3>
        <h3 style={{ color: priority >= 2 ? "rgb(253, 253, 150)" : "" }}>
          <span class="material-symbols-outlined">star</span>
        </h3>
        <h3 style={{ color: priority >= 3 ? "rgb(253, 253, 150)" : "" }}>
          <span class="material-symbols-outlined">star</span>
        </h3>
        <h3 style={{ color: priority >= 4 ? "rgb(253, 253, 150)" : "" }}>
          <span class="material-symbols-outlined">star</span>
        </h3>
        <h3 style={{ color: priority >= 5 ? "rgb(253, 253, 150)" : "" }}>
          <span class="material-symbols-outlined">star</span>
        </h3>
      </div>
    </div>
  );
};

export default PriorityDisplay;
