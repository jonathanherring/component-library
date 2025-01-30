import { filterObjectsBySearch, filterComponentsByCategory, removeDuplicates, gatherCategories } from './objectTransformations';
import { Component as ComponentType } from '../data/componentsData';

const sampleComponents: ComponentType[] = [
    { Name: "Button", Categories: ["Controls"] },
    { Name: "Input Field", Categories: ["Controls", "Inputs"] },
    { Name: "Checkbox", Categories: ["Controls", "Inputs"] },
    { Name: "Radio Button", Categories: ["Controls", "Inputs"] },
    { Name: "Bar Chart", Categories: ["Charts"] },
    { Name: "Line Chart", Categories: ["Charts"] },
    { Name: "Free Form Container", Categories: ["Layout"] },
    { Name: "Flex Container", Categories: ["Layout"] }
];

describe("filterObjectsBySearch", () => {
    test("filters objects by search term", () => {
        const result = filterObjectsBySearch(sampleComponents, "button", "Name");
        expect(result).toEqual([
            { Name: "Button", Categories: ["Controls"] },
            { Name: "Radio Button", Categories: ["Controls", "Inputs"] }
        ]);
    });

    test("returns all objects when search term is empty", () => {
        const result = filterObjectsBySearch(sampleComponents, "", "Name");
        expect(result).toEqual(sampleComponents);
    });

    test("is case insensitive", () => {
        const result = filterObjectsBySearch(sampleComponents, "bUtToN", "Name");
        expect(result).toEqual([
            { Name: "Button", Categories: ["Controls"] },
            { Name: "Radio Button", Categories: ["Controls", "Inputs"] }
        ]);
    });

    test("returns an empty array if no matches", () => {
        const result = filterObjectsBySearch(sampleComponents, "nonexistent", "Name");
        expect(result).toEqual([]);
    });
});

describe("filterComponentsByCategory", () => {
    test("filters components by category", () => {
        const result = filterComponentsByCategory("Inputs", sampleComponents);
        expect(result).toEqual([
            { Name: "Input Field", Categories: ["Controls", "Inputs"] },
            { Name: "Checkbox", Categories: ["Controls", "Inputs"] },
            { Name: "Radio Button", Categories: ["Controls", "Inputs"] }
        ]);
    });

    test("returns an empty array if no components match category", () => {
        const result = filterComponentsByCategory("Nonexistent", sampleComponents);
        expect(result).toEqual([]);
    });
});

describe("removeDuplicates", () => {
    test("removes duplicate values from an array", () => {
        const arr = ["a", "b", "a", "c", "b"];
        const result = removeDuplicates(arr);
        expect(result).toEqual(["a", "b", "c"]);
    });

    test("returns the same array if there are no duplicates", () => {
        const arr = ["a", "b", "c"];
        const result = removeDuplicates(arr);
        expect(result).toEqual(["a", "b", "c"]);
    });

    test("works with numbers", () => {
        const arr = [1, 2, 2, 3, 4, 4, 5];
        const result = removeDuplicates(arr);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test("returns an empty array if given an empty array", () => {
        const result = removeDuplicates([]);
        expect(result).toEqual([]);
    });
});

describe("gatherCategories", () => {
    test("extracts unique categories from components", () => {
        const result = gatherCategories(sampleComponents);
        expect(result.sort()).toEqual(["Controls", "Inputs", "Charts", "Layout"].sort());
    });

    test("returns an empty array if no components", () => {
        const result = gatherCategories([]);
        expect(result).toEqual([]);
    });
});