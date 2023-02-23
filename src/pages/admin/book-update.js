import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState, useEffect, router } from "@/utilities";
import axios from "axios";
import { getBook, updateBook } from "@/api/books";
import $ from "jquery";
import validate from "jquery-validation";
const BookUpdate = (id) => {
  const [book, setBook] = useState({});
  useEffect(function () {
    (async () => {
      try {
        const book = await (await getBook(id)).data;
        setBook(book);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  useEffect(() => {
    const form = document.querySelector("#update-form");
    form.addEventListener("submit", async (e) => {
      const name = document.querySelector("#name").value;
      const original_price = document.querySelector("#original_price").value;
      const description = document.querySelector("#description").value;
      e.preventDefault();
      try {
        await axios.put(`http://localhost:3000/book/${id}`, {
          ...book,
          name,
          original_price,
          description,
        });
        router.navigate("/admin");
      } catch (error) {
        console.log(error);
      }
    });
  });
  // useEffect(() => {
  //   const form = $("#update-form");

  //   form.validate({
  //     rules: {
  //       name: {
  //         required: true,
  //         minlength: 6,
  //       },
  //       original_price: {
  //         required: true,
  //         minlength: 6,
  //       },
  //       description: {
  //         required: true,
  //         minlength: 6,
  //       },
  //     },
  //     messages: {
  //       name: {
  //         required: "<div class='text-red-500 ml-2'>Bắt buộc nhập tên</div>",
  //         minlength:
  //           "<div class='text-red-500 ml-2'>Bắt buộc nhập 6 ký tự</div>",
  //       },
  //       original_price: {
  //         required: "<div class='text-red-500 ml-2'>Bắt buộc nhập giá</div>",
  //         minlength:
  //           "<div class='text-red-500 ml-2'>Bắt buộc nhập 6 ký tự</div>",
  //       },
  //       description: {
  //         required: "<div class='text-red-500 ml-2'>Bắt buộc nhập mô tả</div>",
  //         minlength:
  //           "<div class='text-red-500 ml-2'>Bắt buộc nhập 6 ký tự</div>",
  //       },
  //     },
  //   });
  // });
  return /*html*/ `
  ${Header()}
  <h1 class="text-center text-[28px] p-4 leading-5 font-semibold">Cập nhật</h1>
 <div class="container mx-auto ">
 <form id="update-form">
 <div class="mb-5">
   <label
     for="name"
     class="m-3 block text-base font-medium text-[#07074D]"
   >
     Tên sách
   </label>
   <input
     type="text"
     name="name"
     id="name"
     placeholder="Tên sách"
     class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
     value="${book.name}"
   />
 </div>
 <div class="mb-5">
   <label
     for="email"
     class="m-3 block text-base font-medium text-[#07074D]"
   >
     Giá tiền
   </label>
   <input
     type="text"
     name="original_price"
     id="original_price"
     placeholder="Giá tiền"
     class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
   value="${book.original_price}"
   />
 </div>
 <div class="mb-5">
   <label
     for="message"
     class="m-3 block text-base font-medium text-[#07074D]"
   >
   Mô tả
   </label>
   <textarea
     rows="4"
     name="description"
     id="description"
     placeholder="Describe"
     class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
   >
  ${book.description} </textarea>
 </div>
 <div class="text-center">
   <button
     class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none "
   >
     Sửa
   </button>
 </div>
</form>
 </div>
${Footer()}
  `;
};
export default BookUpdate;
