import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const categories = [
  { icon: "❤️" },
  { icon: "💻" },
  { icon: "📲" },
  { icon: "🎧" },
  { icon: "🎮" },
  { icon: "🖥️" },


];

const FilterCatagoori = () => {
  const oneClick = (categoryName) => {
    alert(`You clicked on ${categoryName}`);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex flex-wrap justify-content-start">
        {categories.map((category, index) => (
          <div
            key={index}
            className="d-flex flex-column align-items-center m-2"
            style={{ cursor: "pointer" }}
            onClick={() => oneClick(category.name)}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#f0f0f0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
              }}
            >
              {category.icon}
            </div>
            <span style={{ marginTop: "8px", fontSize: "14px" }}>{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCatagoori;
