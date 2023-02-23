const Nav_left = () => {
  return /*html*/ `
  <div class="bg-gray-100">
  <div class="container flex mx-auto">
    <!-- Trái và danh mục -->
    <div class="flex-none px-4 max-w-[260px] text-sm border-r sm:hidden bg-white md:hidden">
      <div>
        <div class="mt-3">DANH MỤC SẢN PHẨM</div>
        <div class="mt-3"><a href="">English Books</a></div>
        <div class="mt-2"><a href="">Sách tiếng Việt</a></div>
        <div class="mt-2"><a href="">Văn phòng phẩm</a></div>
        <div class="mt-2"><a href="">Quà lưu niệm</a></div>
      </div>
      <div>
        <div class="mt-8">ĐỊA CHỈ NHẬN HÀNG</div>
        <div class="mt-3">
          <a href="">Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</a>
        </div>
        <div class="text-header"><a href="">Đổi địa chỉ</a></div>
      </div>
      <div>
        <div class="mt-7">DỊCH VỤ</div>
        <div class="flex items-center mt-3">
          <a href="" class="flex items-center"><input class="mr-2" type="checkbox" name="" id="" />
            <img class="mr-1" src="src/images/tikinow2.svg" alt="" />
            <span>Giao siêu tốc 2H</span></a>
        </div>
        <div class="flex items-center mt-2">
          <a href="" class="flex items-center">
            <input class="mr-2" type="checkbox" name="" id="" />
            <img class="mr-1" src="src/images/freeship.svg" alt="" />
            <span>Không giới hạn</span></a>
        </div>
        <div class="flex items-center mt-2">
          <a href="" class="flex items-center"><input class="mr-2" type="checkbox" name="" id="" />
            <span>Rẻ hơn hoàn tiền</span></a>
        </div>
        <div class="flex items-center mt-2">
          <a href="" class="flex items-center">
            <input class="mr-2" type="checkbox" name="" id="" />
            <span>Trả góp 0%</span></a>
        </div>
      </div>
      <div>
        <div class="mt-7">Nơi bán</div>
        <div class="flex items-center mt-3">
          <a href="" class="flex items-center"><input class="mr-2" type="checkbox" name="" id="" />
            <span>Hà Nội</span></a>
        </div>
        <div class="flex items-center mt-2">
          <a href="" class="flex items-center">
            <input class="mr-2" type="checkbox" name="" id="" />
            <span>Hồ Chí Minh</span></a>
        </div>
        <div class="flex items-center mt-2">
          <a href="" class="flex items-center">
            <input class="mr-2" type="checkbox" name="" id="" />
            <span>Đà Nẵng</span></a>
        </div>
        <div class="flex items-center mt-2">
          <a href="" class="flex items-center">
            <input class="mr-2" type="checkbox" name="" id="" />
            <span>Thái Nguyên</span></a>
        </div>
        <div class="flex items-center mt-2">
          <a href="" class="flex items-center">
            <input class="mr-2" type="checkbox" name="" id="" />
            <span>Bình Dương</span></a>
        </div>
      </div>
      <div class="flex items-center mt-5">
        <a href="" class="flex items-center">
          <div class="text-header">Xem thêm</div>
          <img src="src/images/tenxuong.svg" alt="" />
        </a>
      </div>
      <div>
        <div class="mt-7">Đánh giá</div>
        <div class="flex items-center mt-4">
          <a href="" class="flex items-center">
            <img src="src/images/sao.svg" alt="" />
            <img src="src/images/sao.svg" alt="" />
            <img src="src/images/sao.svg" alt="" />
            <img src="src/images/sao.svg" alt="" />
            <img src="src/images/sao.svg" alt="" />
            <div>từ 5 sao</div>
          </a>
        </div>

        <div class="flex items-center mt-2">
          <a href="" class="flex items-center">
            <img src="src/images/sao.svg" alt="" />
            <img src="src/images/sao.svg" alt="" />
            <img src="src/images/sao.svg" alt="" />
            <img src="src/images/sao.svg" alt="" />
            <img src="src/images/saoden.svg" alt="" />
            <div>từ 4 sao</div>
          </a>
        </div>
        <div class="flex items-center mt-2">
          <a href="" class="flex items-center">
            <img src="src/images/sao.svg" alt="" />
            <img src="src/images/sao.svg" alt="" />
            <img src="src/images/sao.svg" alt="" />
            <img src="src/images/saoden.svg" alt="" />
            <img src="src/images/saoden.svg" alt="" />
            <div>từ 3 sao</div>
          </a>
        </div>
      </div>
      <div>
        <div>Giá</div>
        <a href="">
          <div class="my-3 ml-1">
            <span class="px-3 py-1 border rounded-xl bg-gia">Dưới 40.000</span>
          </div>
        </a>
        <a href="">
          <div class="my-3 ml-1">
            <span class="px-3 py-1 border rounded-xl bg-gia">Dưới 40.000 đến 120.000</span>
          </div>
        </a>
        <a href="">
          <div class="my-3 ml-1">
            <span class="px-3 py-1 border rounded-xl bg-gia">Từ 120.000 đến 280.000</span>
          </div>
        </a>
        <a href="">
          <div class="my-3 ml-1">
            <span class="px-3 py-1 border rounded-xl bg-gia">Trên 280.000</span>
          </div>
        </a>
      </div>
      <div>
        <div class="text-[#808089]">Chọn khoảng giá</div>
        <div class="flex mt-2">
          <input class="w-24 py-1 border rounded-md outline-0" type="text" name="" id="" />
          <div class="mx-1">-</div>
          <input class="w-24 py-1 border rounded-md outline-0" type="text" name="" id="" />
        </div>
        <button class="w-24 py-1 mt-2 border rounded-md text-header border-header">
          Áp dụng
        </button>
      </div>
      <div>
        <div class="mt-6">Thương hiệu</div>
        <div class="flex items-center mt-3">
          <a href="" class="flex items-center">
            <input class="mr-2" type="checkbox" name="" id="" />
            <span>CHONMUA 365</span></a>
        </div>
        <div class="flex items-center mt-2">
          <a href="" class="flex items-center">
            <input class="mr-2" type="checkbox" name="" id="" />
            <span>Deli</span></a>
        </div>
        <div class="flex items-center mt-2">
          <a href="" class="flex items-center"><input class="mr-2" type="checkbox" name="" id="" />
            <span>Stabilo</span></a>
        </div>
        <div class="flex items-center mt-2">
          <a href="" class="flex items-center"><input class="mr-2" type="checkbox" name="" id="" />
            <span>Pentel</span></a>
        </div>
        <div class="flex items-center mt-2">
          <a href="" class="flex items-center">
            <input class="mr-2" type="checkbox" name="" id="" />
            <span>Thiên Long</span></a>
        </div>
      </div>
      <div class="flex items-center mt-5">
        <a href="" class="flex items-center">
          <div class="text-header">Xem thêm</div>
          <img src="src/images/tenxuong.svg" alt="" />
        </a>
      </div>
      <div>
        <div class="mt-6">NHÀ CUNG CẤP</div>
        <div class="flex items-center mt-3">
          <a href="" class="flex items-center">
            <input class="mr-2" type="checkbox" name="" id="" />
            <span>Nhà sách Fahasa</span>
          </a>
        </div>
        <div class="flex items-center mt-2">
          <a href="" class="flex items-center">
            <input class="mr-2" type="checkbox" name="" id="" />
            <span>Tiki Trading</span>
          </a>
        </div>
        <div class="flex mt-2 items-cente">
          <a href="" class="flex items-center"><input class="mr-2" type="checkbox" name="" id="" />
            <span>Nhà Sách Vĩnh Thụy</span></a>
        </div>
        <div class="flex items-center mt-2">
          <a href="" class="flex items-center"><input class="mr-2" type="checkbox" name="" id="" />
            <span>Times Books</span></a>
        </div>
        <div class="flex items-center mt-2">
          <a href="" class="flex items-center"><input class="mr-2" type="checkbox" name="" id="" />
            <span>Minhhabooks</span></a>
        </div>
      </div>
      <div class="flex items-center mt-5">
        <a href="" class="flex items-center">
          <div class="text-header">Xem thêm</div>
          <img src="src/images/tenxuong.svg" alt="" />
        </a>
      </div>
      <div>
        <div class="mt-6">Giao hàng</div>
        <div class="flex items-center mt-3">
          <a href="" class="flex items-center">
            <input class="mr-2" type="radio" />
            <div>Hàng nội địa</div>
          </a>
        </div>
        <div class="flex items-center">
          <a href="" class="flex items-center">
            <input class="mr-2" type="radio" />
            <div>Hàng quốc tế</div>
          </a>
        </div>
      </div>
    </div>
    <!-- Phải và sản phẩm -->
    <div class="bg-white grow">
      <div>
        <div class="p-5 sm:hidden">Nhà sách tiki</div>
        <img src="/src/images/banner.svg" alt="" class="sm:hidden md:hidden" />

        <div>
          <ul class="flex items-start text-sm border-b sm:items-center sm:justify-between">
            <li class="2xl:px-4 text-header py-4 border-b-4 border-header sm:ml-[14px]">
              <a href="" class="">Phổ biến</a>
            </li>
            <li class="px-4 py-4 li hover:text-header">
              <a href="" class="a">Bán chạy</a>
            </li>
            <li class="px-4 py-4 li hover:text-header">
              <a href="" class="a">Hàng mới</a>
            </li>
            <li class="px-4 py-4 li hover:text-header sm:hidden">
              <a href="" class="a">Giá thấp</a>
            </li>
            <li class="px-4 py-4 li hover:text-header sm:hidden">
              <a href="" class="a">Giá cao</a>
            </li>
            <li class="px-4 li hover:text-header 2xl:hidden py-4 sm:mr-[18px] flex">
              <a href="" class="a">Giá</a>
              <div class="flex">
                <div><i class="fas fa-long-arrow-alt-down"></i></div>
                <div><i class="fas fa-long-arrow-alt-up"></i></div>
              </div>
            </li>
          </ul>
        </div>
        <div class="flex p-4 mb-2 sm:p-2">
          <div class="flex items-center 2xl:hidden sm:mr-2">
            <i class="px-3 text-sm fas fa-filter text-[#808089]"></i>
            <div>Lọc</div>
          </div>
          <img src="src/images/tikinow2.svg" alt="" class="ml-4 mr-2 rounded-lg bg-gia sm:ml-0 2xl:px-3 sm:p-1" />
          <img src="src/images/freeship.svg" alt="" class="rounded-lg bg-gia 2xl:px-3" />
          <div class="flex items-center 2xl:hidden">
            <div class="sm:pl-2 sm:text-sm">Nhà cung cấp</div>
            <img src="src/images/tenxuong.svg" alt="" class="" />
          </div>
        </div>
      </div>
      <div class="bg-white">
        <div class="container mx-auto">
          <div class="">
            <div class="grid grid-cols-4 gap-3 sm:grid-cols-2 md:grid-cols-3 sm:p-3" id="product"></div>
          </div>
          <div class="flex items-center justify-end mt-4 sm:justify-center">
            <a href="index.html">
              <div class="mr-5 text-white bg-[#189EFF]">
                <div class="mx-2">1</div>
              </div>
            </a>
            <a href="two.html">
              <div class="mr-5">
                <div class="mx-2">2</div>
              </div>
            </a>
            <a href="three.html">
              <div class="mr-5">
                <div class="mx-2">3</div>
              </div>
            </a>
            <a href="two.html">
              <div class="mr-5">
                <div class="mx-2">4</div>
              </div>
            </a>
            <a href="two.html">
              <div class="mr-5">
                <div class="mx-2">5</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      
    `;
};
export default Nav_left;
