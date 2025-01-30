import React from "react";
import { Component as ComponentType } from "../../data/componentsData";

interface CategoryListProps {
    categories: string[];
    components: ComponentType[];
    selectedCategory: string | null;
    onCategorySelect: (category: string | null) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
    categories,
    components,
    selectedCategory,
    onCategorySelect,
}) => {
    return (
        <>
            <h5>Categories</h5>
            <ul className="list-group">
                <li
                    className={`list-group-item ${selectedCategory === null ? "active" : ""}`}
                    onClick={() => onCategorySelect(null)}
                    style={{ cursor: "pointer" }}
                >
                    All ({components.length})
                </li>
                {categories.map((category) => (
                    <li
                        key={category}
                        className={`list-group-item ${category === selectedCategory ? "active" : ""
                            }`}
                        onClick={() => onCategorySelect(category)}
                        style={{ cursor: "pointer" }}
                    >
                        {category} (
                        {components.filter((component) => component.Categories.includes(category)).length})
                    </li>
                ))}

            </ul>
        </>
    );
};

export default CategoryList;