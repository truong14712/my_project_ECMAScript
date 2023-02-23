import instance from "./config";

const getBooks = () => {
  return instance.get("/book");
};
const getBook = (id) => {
  return instance.get(`/book/${id}`);
};
const addBook = (book) => {
  return instance.post(`/book`, book);
};
const updateBook = (id,book) => {
  return instance.put(`/book/${id}`, book);
};
const deleteBook = (id) => {
  return instance.delete(`/book/${id}`);
};
export { getBooks, getBook, addBook, deleteBook, updateBook };
