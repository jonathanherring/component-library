import React, { useEffect, useState } from "react";
import { Library as LibraryData, Component as ComponentType } from "../../data/componentsData";
import CategoryList from "../CategoryList";
import ComponentList from "../ComponentList";
import SearchBar from "../SearchBar";

const Library: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [displayComponents, setDisplayComponents] = useState<ComponentType[]>(LibraryData.Components)
  const [countComponents, setCountComponents] = useState<ComponentType[]>(LibraryData.Components)
  const [categories, setCategories] = useState<string[]>(LibraryData.Categories)

  function filterComponentsBySearch(components: ComponentType[], searchTerm: string) {
    return components.filter((component) =>
      component.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  function filterComponentsByCategory(category: string, components: ComponentType[]) {
    const result = components.filter((component) => {
      const matchesCategory = component.Categories.includes(category);;
      return matchesCategory;
    })
    return result
  }

  function removeDuplicates(arr: string | any[]) {
    return Array.from(new Set(arr));
  }

  function gatherCategories(components: ComponentType[]) {
    const result = components.flatMap(component => {
      return component.Categories
    })
    return removeDuplicates(result)
  }

  useEffect(() => {
    let updatedComponents = LibraryData.Components
    let updatedCategories = LibraryData.Categories
    setCountComponents(updatedComponents)

    // Step 1: Filter components by search term and update components count
    if (searchTerm) {
      updatedComponents = filterComponentsBySearch(updatedComponents, searchTerm)
      setCountComponents(updatedComponents)
    }
    // Step 2: Filter by category if selected
    if (selectedCategory) {
      updatedComponents = filterComponentsByCategory(selectedCategory, updatedComponents)
    }
    // Step 3: Extract categories from filtered components
    if(searchTerm){
      updatedCategories = gatherCategories(updatedComponents)
    }

    setDisplayComponents(updatedComponents)
    setCategories(updatedCategories)

  }, [searchTerm, selectedCategory])


  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-center">
        <div className="col-md-4 ">
          <h1>Library</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 ">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <CategoryList
            categories={categories}
            components={countComponents}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        </div>
        <div className="col-md-8">
          <ComponentList components={displayComponents} />
        </div>
      </div>
    </div>
  );
};

export default Library;