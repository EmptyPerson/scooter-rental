export function ProductFactory(productName, colorImageMap, years, brakeSystems) {
    const product = {
        productName,
        colorImageMap,
        year: years,
        brakeSystem: brakeSystems,
    };
    return product;
}