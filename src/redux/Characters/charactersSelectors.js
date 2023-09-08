export const getAllProducts = (state) => state.products.products;
export const getLoadingProducts = (state) => state.products.isLoading;
export const getErrorProducts = (state) => state.products.error;
export const getCurrentProduct = (state) => state.products.currentProduct;
export const getTotalItemsProduct = (state) => state.products.totalItems;
export const isModalOpen = (state) => state.products.isModalOpen;
export const currentPage = (state) => state.products.page;
export const error = (state) => state.products.error;