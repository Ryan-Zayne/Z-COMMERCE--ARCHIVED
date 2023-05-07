// transforms data from query to return products directly from api so as to reduce 'data.products.whatever' to just 'data.whatever'
export const transformData = (data) => data.products;
