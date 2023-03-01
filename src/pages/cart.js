import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState, useEffect } from "@/utilities";
import { increaseQty, decreaseQty, removeItemInCart } from "@/utilities/cart";
const CartPage = () => {
  let cart = [];
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  useEffect(() => {
    const btns = document.querySelectorAll(".btn");
    for (const btn of btns) {
      const id = btn.dataset.id;
      btn.addEventListener("click", () => {
        if (btn.classList.contains("btn-increase")) {
          increaseQty(id);
        } else if (btn.classList.contains("btn-decrease")) {
          decreaseQty(id);
        } else {
          removeItemInCart(id);
        }
      });
    }
  });

  return /*html*/ `
  ${Header()}
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full">
            <thead class="border-b bg-[#4c4c4c] ">
              <tr>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                  Số thứ tự
                </th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                  Tên sản phẩm
                </th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                  Giá sản phẩm
                </th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                  Số lượng
                </th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                Cộng trừ
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
              Chức năng
            </th>
              </tr>
            </thead>
            <tbody>
              ${cart
                .map((item, index, array) => {
                  return /*html */ `
                <tr class="bg-white border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${
                  index + 1
                }</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  ${item.name}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  ${item.original_price}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                ${item.quantity}
                </td>
              
                <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium  leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out text-lg btn btn-increase" data-id="${
                  item.id
                }">+</button>
              <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out btn btn-decrease" data-id="${
                item.id
              }">-</button>
                </td>
               <td>
               <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out btn btn-remove" data-id="${
                 item.id
               }">Xóa</button>
               </td>
               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap total">
               
               </td>
              </tr>
                `;
                })
                .join(" ")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
    `;
};
export default CartPage;
