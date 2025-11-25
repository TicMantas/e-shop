import { queryOptions, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const GetAllProducts = async () => {
  const base = "https://fakestoreapi.com";
  axios.defaults.baseURL = base;
  const response = await axios.get("/products");
  return response.data;
};
export const GetProductById = async (id: number) => {
  const base = "https://fakestoreapi.com";
  axios.defaults.baseURL = base;
  const response = await axios.get(`/products/${id}`);
  return response.data;
};

export const GetProductsByCategory = async (category: string) => {
  const base = "https://fakestoreapi.com";
  axios.defaults.baseURL = base;
  const response = await axios.get(`/products/category/${category}`);
  return response.data;
};

export const GetAllCategories = async () => {
  const base = "https://fakestoreapi.com";
  axios.defaults.baseURL = base;
  const response = await axios.get("/products/categories");
  return response.data;
};

export const productQueries = {
  useProductById: (id: number) =>
    queryOptions({
      queryKey: ["productId", id],
      queryFn: () => GetProductById(id),
    }),
};
