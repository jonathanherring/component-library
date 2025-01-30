import { Component as ComponentType } from "../data/componentsData";

export function filterObjectsBySearch<T>(items: T[], searchTerm: string, key: keyof T): T[] {
    if (!searchTerm.trim()) return items;

    const lowerCaseSearch = searchTerm.toLowerCase();

    return items.filter((item) =>
        String(item[key]).toLowerCase().includes(lowerCaseSearch)
    );
}
//The below functions could be made generic as above
export function filterComponentsByCategory(category: string, components: ComponentType[]) {
    const result = components.filter((component) => {
        const matchesCategory = component.Categories.includes(category);;
        return matchesCategory;
    })
    return result
}

export function removeDuplicates(arr: string | any[]) {
    return Array.from(new Set(arr));
}

export function gatherCategories(components: ComponentType[]) {
    const result = components.flatMap(component => {
        return component.Categories
    })
    return removeDuplicates(result)
}