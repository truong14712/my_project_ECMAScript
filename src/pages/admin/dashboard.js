import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState, useEffect } from "@/utilities";
import axios from "axios";
import { getBooks, deleteBook } from "@/api/books";
const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(function () {
    (async () => {
      try {
        const { data } = await getBooks();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    })();
    // getBooks().then(function (dataAxios) {
    //   setData(dataAxios.data);
    // });
  }, []);
  useEffect(() => {
    const deleteBtns = document.querySelectorAll(".delete_btn");
    for (const btn of deleteBtns) {
      btn.addEventListener("click", async function () {
        const id = btn.dataset.id;
        const parentElement = this.parentElement.parentElement;
        const confirm = window.confirm("Bạn có muốn xóa không?");
        try {
          if (confirm) {
            parentElement.remove();
            await deleteBook(id);
          }
        } catch (error) {
          console.log(error);
        }
      });
    }
  });

  // const deleteBook = (id) => {
  //   axios.delete(`http://localhost:3000/book/${id}`);
  // };

  return /*html*/ `
  ${Header()}
  <div class="container mx-auto my-2">
  <h1 class="text-center text-[28px] p-4 leading-5 font-semibold">Dashboard</h1>
  <table class="border-separate border border-slate-500 ">
  <thead>
    <tr>
      <th class="border border-slate-600 w-[10%]">STT</th>
      <th class="border border-slate-600">Tên</th>
      <th class="border border-slate-600 w-[20%]">Hình Ảnh</th>
      <th class="border border-slate-600 w-[20%]">Chức năng</th>
    </tr>
  </thead>
  <tbody>
  ${data
    .map(
      (book, index) =>
        /*html*/
        `
        <tr >
        <td class="border border-slate-700 text-center">${index + 1}</td>
        <td class="border border-slate-700 text-lg">${book.name}</td>
        <td class="border border-slate-700 w-[150px]">
        <img src="${book.images?.[0].base_url}" class="" alt="">
        </td>
        <td class="border border-slate-700 text-center">
        <button class="hover:shadow-form rounded-md bg-[#57cc53] py-3 px-8 text-base font-semibold text-white outline-none " >
        <a href="/admin/books/${book.id}">Sửa</a>
        </button>
        <button class="hover:shadow-form rounded-md bg-[#f45858] py-3 px-8 text-base font-semibold text-white outline-none delete_btn" data-id="${
          book.id
        }">Xóa</button>
        </td>
        </tr>
        `
    )
    .join("")}
  </tbody>
</table>
  </div>

${Footer()}
    `;
};
export default Dashboard;
