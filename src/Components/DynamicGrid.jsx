import React, { useState } from "react";

const DynamicGrid = () => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [grid, setGrid] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGrid = Array.from({ length: rows }, (_, rowIndex) =>
      Array.from({ length: columns }, (_, colIndex) => ({
        name: `input_${rowIndex + 1}_${colIndex + 1}`,
        value: "",
      }))
    );
    setGrid(newGrid);
  };

  const handleInputChange = (rowIndex, colIndex, event) => {
    const updatedGrid = [...grid];
    updatedGrid[rowIndex][colIndex].value = event.target.value;
    setGrid(updatedGrid);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dynamic Grid of Inputs</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter Rows"
          value={rows}
          onChange={(e) => setRows(Number(e.target.value))}
          required
        />
        <input
          type="number"
          placeholder="Enter Columns"
          value={columns}
          onChange={(e) => setColumns(Number(e.target.value))}
          required
        />
        <button type="submit">Generate Grid</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        {grid.length > 0 && (
          <div>
            <h3>Generated Grid:</h3>
            {grid.map((row, rowIndex) => (
              <div key={rowIndex} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                {row.map((cell, colIndex) => (
                  <input
                    key={colIndex}
                    name={cell.name}
                    value={cell.value}
                    placeholder={cell.name}
                    onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicGrid;
