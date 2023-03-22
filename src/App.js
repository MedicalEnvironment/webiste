import React, { useState } from "react";

function ProductList() {
  const [boxes, setBoxes] = useState([]);

  const handleAddBox = () => {
    // Add a new box to the list
    const newBox = { id: boxes.length + 1, title: `Box ${boxes.length + 1}` };
    setBoxes([...boxes, newBox]);
  };

  const handleDeleteBox = () => {
    // Delete the selected boxes from the list
    const updatedBoxes = boxes.filter((box) => !box.checked);
    setBoxes(updatedBoxes);
  };

  const handleCheckDelete = (boxId) => {
    // Check or uncheck the delete checkbox for a box
    const updatedBoxes = boxes.map((box) => {
      if (box.id === boxId) {
        return { ...box, checked: !box.checked };
      }
      return box;
    });
    setBoxes(updatedBoxes);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px", backgroundColor: "#f9f9f9" }}>

        <h1 style={{ margin: "0" }}>Product List</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button style={{ padding: "10px", backgroundColor: "#4CAF50", color: "white", borderRadius: "4px", border: "none", marginRight: "10px" }} onClick={handleAddBox}>Add</button>
          <button style={{ padding: "10px", backgroundColor: "#f44336", color: "white", borderRadius: "4px", border: "none" }} onClick={handleDeleteBox}>Mass delete</button>
        </div>
      </div>
      <div style={{ flex: "1", padding: "20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {boxes.map((box) => (
            <div key={box.id} style={{ width: "200px", height: "200px", border: "1px solid black", margin: "10px", position: "relative" }}>
              <h3>{box.title}</h3>
              <label style={{ position: "absolute", top: "10px", right: "10px" }}>
                <input type="checkbox" checked={box.checked} onChange={() => handleCheckDelete(box.id)} />
                Delete
              </label>
            </div>
          ))}
        </div>
      </div>
      <div style={{ backgroundColor: "#f9f9f9", padding: "20px", textAlign: "center", borderTop: "1px solid #ccc" }}>
        <p style={{ fontSize: "15px", color: "green" }}>Akbar Abayev test application</p>
      </div>
    </div>
  );
}

export default ProductList;