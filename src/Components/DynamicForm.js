import React, { useState } from "react";
import axios from "axios";

const DynamicForm = () => {
  const [sections, setSections] = useState([{ name: "", value: "", description: "" }]);

  const handleChange = (index, e) => {
    const updatedSections = [...sections];
    updatedSections[index][e.target.name] = e.target.value;
    setSections(updatedSections);
  };

  const addSection = () => {
    setSections([...sections, { name: "", value: "", description: "" }]);
  };

  const removeSection = (index) => {
    const updatedSections = sections.filter((_, i) => i !== index);
    setSections(updatedSections);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/form/submit", { sections });
      alert(response.data.message);
      setSections([{ name: "", value: "", description: "" }]); // Reset form
    } catch (error) {
      alert("Error submitting form");
    }
  };

  return (
    <div>
      <h2>Dynamic Form</h2>
      <form onSubmit={handleSubmit}>
        {sections.map((section, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={section.name}
              onChange={(e) => handleChange(index, e)}
              required
            />
            <input
              type="text"
              name="value"
              placeholder="Value"
              value={section.value}
              onChange={(e) => handleChange(index, e)}
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={section.description}
              onChange={(e) => handleChange(index, e)}
              required
            />
            {sections.length > 1 && <button type="button" onClick={() => removeSection(index)}>Remove</button>}
          </div>
        ))}
        <button type="button" onClick={addSection}>Add Section</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DynamicForm;
