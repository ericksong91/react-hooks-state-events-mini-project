import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectCategory}) {

  const buttons = categories.map((cat)=>{
    const className = cat === selectedCategory ? "selected" : null;

    return (
      <button key={cat} className={className} onClick={()=>onSelectCategory(cat)}>
        {cat}
      </button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;