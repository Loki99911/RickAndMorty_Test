import { RootState } from "../store";

export const totalCount = (state: RootState) => state.paginationInfo.pagination?.count;

export const totalPages = (state: RootState) => state.paginationInfo.pagination?.pages;
