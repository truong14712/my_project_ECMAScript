import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState, useEffect, router } from "@/utilities";
import axios from "axios";
import { addBook } from "@/api/books";
import $ from "jquery";
import validate from "jquery-validation";
const BookAdd = () => {
  useEffect(function () {
    const form = document.getElementById("add-form");
    const name = document.getElementById("name");
    const original_price = document.getElementById("original_price");
    const description = document.getElementById("description");
    const images = document.getElementById("dropzone-file");

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const urls = await uploadFiles(images.files);
      const newBook = {
        name: name.value,
        original_price: original_price.value,
        description: description.value,
        images: urls,
      };
      try {
        await addBook(newBook);
        router.navigate("/admin");
      } catch (error) {
        console.log(error);
      }
    });
  }, []);
  const uploadFiles = async (files) => {
    const CLOUD_NAME = "df9lrxc5n";
    const PRESET_NAME = "upload_anh";
    const FOLDER_NAME = "ECMA";
    const urls = [];
    const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const formData = new FormData();
    formData.append("upload_preset", PRESET_NAME);
    formData.append("folder", FOLDER_NAME);

    for (const file of files) {
      if (files) {
        formData.append("file", file);
        const response = await axios.post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        urls.push(response.data.secure_url);
        console.log(urls);
      } else {
        console.error("lỗi rồi bạn ơi");
      }
    }
    return urls;
  };
  // useEffect(() => {
  //   const form = $("#add-form");

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
  <h1 class="text-center text-[28px] p-4 leading-5 font-semibold">Thêm mới</h1>
 <div class="container mx-auto ">
 <form id="add-form"  >
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
     placeholder= "description"
     class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
   >
 </textarea>
 </div>
 <label
     for="message"
     class="m-3 block text-base font-medium text-[#07074D]"
   >
   Ảnh
   </label>
 <div class="max-[100%] mx-auto mb-4">
	<div class="flex items-center justify-center w-full">
        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> 
            </div>
            <input id="dropzone-file" type="file" class="hidden" multiple  />
        </label>
    </div> 
</div>
 <div class="text-center">
   <button
     class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none "
   >
     Thêm mới
   </button>
 </div>
</form>
 </div>
${Footer()}
  `;
};
export default BookAdd;
