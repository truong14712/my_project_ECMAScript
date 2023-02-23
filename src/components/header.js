import { useState, useEffect, router, render } from "@/utilities";
import { save_cart } from "@/utilities/cart";
const app = document.querySelector("#app");

const Header = () => {
  save_cart(() => {
    render(Header, app);
  });

  useEffect(() => {
    let cartItem = localStorage.getItem("Numbercart");
    const save = document.querySelector("#save");
    save.textContent = cartItem;
  });

  return /*html*/ `
  <div class="pt-2 bg-[#1A94FF] sm:bg-white sm:hidden md:hidden">
  <div class="container mx-auto">
    <div class="flex items-center h-16">
      <div class="flex basis-40">
        <a href="/"><img class="h-10 cursor-pointer w-14"
            src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" /></a>
      </div>
      <div class="flex items-center flex-1">
        <input type="text" id="searchInput" class="flex-1 h-10 pl-3 rounded-l-lg outline-0"
          placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..." />
        <button class="flex items-center justify-center h-10 text-white rounded-r-lg bg-[#0D5CB6] w-28">
          <img src="/src/images/seach.svg" alt="" />
          <span class=""> Tìm kiếm </span>
        </button>
      </div>
      <div class="flex items-center text-white cursor-pointer">
        <div class="flex items-center ml-4 mr-2">
          <img src="/src/images/user.svg" alt="" />
        </div>
        <div class="flex flex-col">
          <div>
          <span class="text-xs">
          <a href="/login">Đăng nhập</a>
          </span>
          <span class="text-xs">
          <a href="/signup">/ Đăng ký</a>
          </span>
          </div>
          <div>
            <span class="flex items-center text-sm" id="email">Tài khoản
              <img class="w-4 h-4"
                src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png" />
            </span>
          </div>
          <span class="text-xs" id="logout">
         <a>Đăng xuất</a>
          </span>
        </div>

        <div class="relative flex ml-8">
         
        <a href="/cart">
        <div href="" class="flex">
        <div class="cart">
          <img src="/src/images/giohang.svg" alt="" />
          <span id="save"
            class="absolute top-0 flex items-center justify-center w-5 h-4 text-xs text-black left-5 bottom-1 bg-[#FDD835] rounded-3xl">
          </span>
        </div>
        <div class="flex items-end ml-2 text-xs">Giỏ hàng</div>
      </div>
        </a>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between pb-4">
      <div class="cursor-pointer">
        <img src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
          alt="free-ship-badge" height="12" width="83" />
      </div>
      <ul class="flex items-center mr-64 text-xs text-white">
        <li class="mr-3"><a href="">harry potter</a></li>
        <li class="mr-3"><a href="">sherlock holmes</a></li>
        <li class="mr-3"><a href="">cơ thể tự chữa lành</a></li>
        <li class="mr-3"><a href="">nếu biết trăm năm là hữu hạn</a></li>
        <li class="mr-3"><a href="">chú thuật hồi chiến vol 3</a></li>
      </ul>
      <div class="flex items-center px-2 text-white rounded-lg bg-[#53afff]">
        <div class="mr-1"><img src="/src/images/home.svg" alt="" /></div>
        <div class="text-xs">Bán hàng cùng tiki</div>
      </div>
    </div>
  </div>
</div>
  `;
};
export default Header;
