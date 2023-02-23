import Navigation from "@/components/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState, useEffect } from "@/utilities";
import axios from "axios";
import { getBook } from "@/api/books";
import { addToCart } from "@/utilities/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const Products_detail = function (id) {
  const param = new URLSearchParams(location.search);
  const id_cate = param.get("id_categories");
  const [book, setBook] = useState({});
  const [relatedBook, setRelatedBook] = useState([]);

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

  useEffect(function () {
    axios
      .get(`http://localhost:3000/book?categories.id=${id_cate}`)
      .then(function (data) {
        setRelatedBook(data.data);
      });
  }, []);

  // console.log(relatedBook);
  useEffect(function () {
    const buy = document.querySelector("#add-to-card");
    const inputValue = document.querySelector("#inputValue");
    buy.addEventListener("click", async (e) => {
      const book = await (await getBook(id)).data;
      addToCart(
        { ...book, quantity: Number(inputValue.value) ? +inputValue.value : 1 },
        function () {
          toastr.success(`Thêm sản phẩm ${book.name}`);
        }
      );
    });
  });
  return /*html*/ `
  ${Header()}
  ${Navigation()}
  <div class="bg-gray-100">
  <div class="bg-[#F5F5FA] sm:hidden md:hidden">
  <div class="container mx-auto">
    <div class="flex items-center h-10 text-sm">
      <div class="mr-1 text-[#808089]">Trang chủ</div>
      <span class="mr-2"><img src="/src/images/tenphai.svg" alt="" /></span>
      <div class="mr-1 text-[#808089]">Nhà Sách Tiki</div>
      <span class="mr-2"><img src="/src/images/tenphai.svg" alt="" /></span>
      <div class="mr-1 text-[#808089]">Sách tiếng Việt</div>
      <span class="mr-2"><img src="/src/images/tenphai.svg" alt="" /></span>
      <div class="mr-1 text-[#808089]">Sách kỹ năng sống</div>
      <span class="mr-2"><img src="/src/images/tenphai.svg" alt="" /></span>
      <div class="mr-1 text-[#808089]">${book.categories?.name}</div>
      <span class="mr-2"><img src="/src/images/tenphai.svg" alt="" /></span>
      <div class="mr-1 text-[#808089]">
      ${book.name}
      </div>
    </div>
  </div>
  </div>
  <div class="container mx-auto 2xl:flex gap-3 bg-white pt-4">
  <div>
  <div>
  <div class="sm:flex sm:justify-center sm:items-center md:flex md:justify-center md:items-center lg:flex lg:justify-center lg:items-center">
    <img
      src="${book.images?.[0].large_url}"
      alt=""
      class="w-[444px] h-[444px] p-4 sm:w-[250px] sm:h-[250px] object-contain"
    />
  </div>
  <div class="flex sm:hidden md:justify-center w-full lg:justify-center">
  ${book.images?.map((images) => {
    return /*html*/ `<img src="${images.base_url}" class="max-w-[90px] max-h-[90px] p-3 object-cover md:max-w-[110px] md:max-h-[110px]" >
    `;
  })}
  </div>
  <div class="flex items-center mt-6 mb-11 px-4 sm:hidden md:mb-6">
    <div class="mr-2">Chia sẻ:</div>
    <div class="mr-2"><img src="/src/images/fb.svg" alt="" /></div>
    <div class="mr-2"><img src="/src/images/mess.svg" alt="" /></div>
    <div class="mr-2"><img src="/src/images/linkkin.svg" alt="" /></div>
    <div class="mr-2"><img src="/src/images/tw.svg" alt="" /></div>
    <div class="mr-2">
      <img src="/src/images/backlink.svg" alt="" />
    </div>
  </div>
  </div>
  <div class="2xl:hidden p-4 md:hidden lg:hidden">
    <div class="">${book.name}</div>
    <div class="flex py-2 ">
      <img src="/src/images/sao.svg" alt="" />
      <img src="/src/images/sao.svg" alt="" />
      <img src="/src/images/sao.svg" alt="" />
      <img src="/src/images/sao.svg" alt="" />
      <img src="/src/images/sao.svg" alt=""  />
        <p class="ml-2   sm:text-[10px] sm:leading-5 text-[14px] leading-6">${
          book.quantity_sold?.value ? book.quantity_sold.value : ""
        }     </p>
        <p class="ml-2   sm:text-[10px] sm:leading-5 text-[14px] leading-6">${
          book.quantity_sold?.text ? book.quantity_sold.text : ""
        }     </p>
  </div>
  <div class="flex items-end"><div class="mr-2 text-[32px] text-[#FF424E] font-medium leading-10">
  ${book?.current_seller?.price?.toLocaleString("de-DE")}₫
                                </div>
            <div class="pr-1 text-[#808089]">${book?.original_price?.toLocaleString(
              "de-DE"
            )} ₫              </div></div>
    <div>
      <div class="flex items-center justify-between lg:hidden">      
      <div class=" text-[13px] leading-4 mr-[4px]">15 Mã giảm giá</div>
      <div class="flex items-center my-2 ">
        <div
          class="rounded-lg border-[#0D5CB6] border mr-3 px-2 py-2 text-[12px] leading-5 text-[#0D5CB6] cursor-pointer"
        >
          Giảm 10k
        </div>
        <div
          class="rounded-lg border-[#0D5CB6] border mr-3 px-[4px] py-2 text-[12px] leading-5 text-[#0D5CB6] cursor-pointer"
        >
          Giảm 20k
        </div>
        <div
          class="rounded-lg border-[#0D5CB6] border mr-3 px-[4px] py-2 text-[12px] leading-5 text-[#0D5CB6] cursor-pointer"
        >
          Giảm 30k
        </div>
        <img
          src="/src/images/tenphai.svg"
          alt=""
          class="w-4 h-4 mx-1 cursor-pointer"
        />
      </div> 
      </div>
    </div>
  
  <div class="flex mt-3 items-center">
  <span class="flex bg-[#f2f0fe] border cursor-pointer">
    <img class="mx-1" src="/src/images/tensao.svg" alt="" />
    <span class="text-[#402da1] text-sm"
      >Thưởng lên đến 7,31 ASA ≈ 3.969 Xu</span
    >
    <img src="/src/images/hoicham.svg" alt="" class="mx-1" />
  </span>
  </div>
  </div>
      <div class="2xl:hidden lg:hidden">
      <div class="p-4 flex  items-center justify-between">
      <div class="p-3">
        <div class="text-[13px] leading-5 font-medium">
          8 nhà bán khác
        </div>
        <div class="text-[13px] leading-5 text-[#808089]">
          Giá từ 75.210 ₫
        </div>
      </div>
      <div class="flex items-center justify-center p-3">
        <button
          class="border py-1 px-3 border-[#0D5CB6] font-medium text-[#0D5CB6] rounded"
        >
          So Sánh
        </button>
      </div>
    </div>                 
      </div>
  </div>
  <div class="border-l mr-3 sm:hidden ">
      <div class="flex items-center ml-3 mt-6 text-sm ">
  <p class="mr-4">
      Tác giả: <span class="text-[#0D5CB6]">${
        book.authors ? book.authors[0].name : "Đang cập nhập"
      }</span>
  </p>
  <p class="mr-1">Đứng thứ 13 trong</p>
  <p>Top 1000 Sách tư duy - Kỹ năng sống bán chạy tháng này</p>
      </div>
  <h2 class="ml-3 text-2xl">
  ${book.name}
  </h2>
  <div class="flex div ml-3 mt-1 mb-4">
  <div class="flex items-center mr-2">
      <img src="/src/images/sao.svg" alt="" />
      <img src="/src/images/sao.svg" alt="" />
      <img src="/src/images/sao.svg" alt="" />
      <img src="/src/images/sao.svg" alt="" />
      <img src="/src/images/sao.svg" alt="" />
  </div>
  <a href="" lass="" class="mr-4 text-[#808089]">(Xem 1874 đánh giá)</a>
  <div class="div">
      <div href="" class=" text-[#808089]">${
        book.quantity_sold?.text ? book.quantity_sold.text : ""
      }</div>
  </div>
  </div>
  <div class="px-4 pb-3 flex flex-grow">
  <div class="max-w-[480px] ">
      <div class="bg-[#FAFAFA] w-[480px] lg:w-[600px]">
      <div class="flex ml-4 mt-3 items-end">
          <div class="mr-2 text-[32px] text-[#FF424E] font-medium leading-10">
          ${book.current_seller?.price?.toLocaleString("de-DE")}₫
          </div>
          <div class="pr-1 text-[#808089]">${book.original_price?.toLocaleString(
            "de-DE"
          )} ₫</div>
          <button class="border text-[#FF424E] border-[#FF424E] px-1 ml-1">
          -23%
          </button>
      </div>
      <div class="flex rounded ml-4 mt-3 items-center">
        <span class="flex bg-[#f2f0fe] border cursor-pointer">
          <img class="mx-1" src="/src/images/tensao.svg" alt="" />
          <span class="text-[#402da1] text-sm"
            >Thưởng lên đến 7,31 ASA ≈ 3.969 Xu</span
          >
          <img src="/src/images/hoicham.svg" alt="" class="mx-1" />
        </span>
      </div>
      
    </div>
    <div>
      <div class="mt-8 pt-3 border-t">15 Mã giảm giá</div>
      <div class="flex items-center mt-1 relative">
        <div
          class="rounded-lg border-[#0D5CB6] border mr-3 px-3 py-1 text-[13px] leading-5 text-[#0D5CB6] icon cursor-pointer"
        >
          Giảm 10k
        </div>
        <div
          class="rounded-lg border-[#0D5CB6] border mr-3 px-3 py-1 text-[13px] leading-5 text-[#0D5CB6] icon1 cursor-pointer"
        >
          Giảm 20k
        </div>
        <div
          class="rounded-lg border-[#0D5CB6] border mr-3 px-3 py-1 text-[13px] leading-5 text-[#0D5CB6] icon2 cursor-pointer"
        >
          Giảm 30k
        </div>
        <img
          src="/src/images/tenphai.svg"
          alt=""
          class="w-4 h-4 mx-1 cursor-pointer"
        />
      </div>
      
    </div>
    <div class="mt-5 pt-3">
      <div class="flex py-3 border-t items-center cursor-pointer">
        <div class="mr-1 text-sm">Giao đến</div>
        <div class="font-medium text-[15px] leading-6 underline">
          Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội
        </div>
        <div class="mx-1">-</div>
        <div class="text-[#0D5CB6] font-medium">Đổi địa chỉ</div>
      </div>
      <div class="flex items-center pb-4 border-b md:border-none">
        <div class="p-1 rounded-xl border mr-3">
          <div class="flex items-end mt-2">
            <img
              src="/src/images/tikinow2.svg"
              alt=""
              class="mr-1 ml-3"
            />
            <div class="border-l h-[16px]"></div>
            <div class="ml-1 text-[13px] text-[#00AB56] font-medium">
              Trước 18:00 hôm nay
            </div>
          </div>
          <div class="px-3 text-sm mt-1">19.000đ</div>
          <div class="flex items-center">
            <div class="flex items-center mr-3 mb-3 mt-1">
              <span
                class="flex bg-[#f2f0fe] border rounded-md text-[11px] mx-2 leading-4 cursor-pointer"
              >
                <img class="mx-1" src="/src/images/tensao.svg" alt="" />
                <span class="text-[#402da1]"
                  >Freeship 100% chỉ với 34 ASA</span
                >
                <img
                  src="/src/images/hoicham.svg"
                  alt=""
                  class="mx-1"
                />
              </span>
            </div>
          </div>
        </div>
        
        <div class="p-1 rounded-xl border">
          <div class="flex mt-2">
            <div>
              <img
                src="/src/images/tikifast.svg"
                alt=""
                class="mr-1 ml-3"
              />
            </div>
            <div class="border-l h-[16px]"></div>
  
            <div class="ml-1 text-[13px] text-[#00AB56] font-medium">
              Ngày mai, trước 23:00
            </div>
          </div>
          <div class="px-3 text-sm mt-1">
            10.000đ (Freeship 30K đh 149K)
          </div>
          <div class="flex items-center">
            <div class="flex items-center mr-3 mb-3 mt-1">
              <span
                class="flex bg-[#f2f0fe] border rounded-md text-[11px] mx-2 leading-4 cursor-pointer"
              >
                <img class="mx-1" src="/src/images/tensao.svg" alt="" />
                <span class="text-[#402da1]"
                  >Freeship 100% chỉ với 34 ASA</span
                >
                <img
                  src="/src/images/hoicham.svg"
                  alt=""
                  class="mx-1"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-[120px] md:hidden">
        <div class="text-[15px] leading-relaxed my-[10px]">
          Số lượng
        </div>
        <div class="flex r items-center">
          <button class="p-2 border rounded" id="tru">
            <img
              src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
              alt=""
            />
          </button>
          <input
            type="number"
            class="w-10 border h-[35px] text-center outline-0" 
            min="0"
            id="inputValue"
            value="1"
          />
          <button class="p-2 border rounded" id="add">
            <img
              src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
              alt=""
            />
          </button>
        </div>
      </div>
      <div
        class="border max-w-[300px] h-[48px] flex justify-center mt-4 bg-[#FF424E] rounded items-center mb-4 cursor-pointer md:hidden "  
      >
        <button class="p-[6px] text-white font-medium" id="add-to-card"  >
          Chọn mua
        </button>
      </div>
    </div>
  </div>
  <div>
    <div class="ml-3 border max-w-[255px] rounded lg:w-[400px]">
      <div class="flex items-center px-3 py-2">
        <img
          src="${book.current_seller?.logo}"
          alt="${book.current_seller?.name}"
          class="mr-3 rounded-[50%] w-10 h-10 text-[12px] leading-4"
        />
        <div class="flex flex-col items-center">
          <div class="w-full">
            <img src="/src/images/tikitrading.svg" alt="" />
          </div>
          <div class="w-full">
            <img src="/src/images/office.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center py-3">
        <div class="flex flex-col">
          <div class="flex ml-7">
            <span>${book.rating_average} / 5</span>
            <img src="/src/images/sao.svg" alt="" />
          </div>
          <div class="text-[#808089] text-xs ml-11">4.7tr+</div>
          <div class="border-l-[#808089]"></div>
        </div>
        <div class="border-l h-4"></div>
        <div class="pr-8 flex flex-col w-[87px]">
          <div class="flex"><span>408k+</span></div>
          <div class="text-[#808089] text-xs">Theo dõi</div>
        </div>
      </div>
      <div
        class="flex px-3 items-center justify-center gap-3 border-b py-3"
      >
        <div
          class="flex items-center border max-w-[105px] rounded py-2 px-1 text-sm justify-center text-[#0D5CB6] border-[#0D5CB6] cursor-pointer  md:text-[13px] md:leading-4 "
        >
          <i class="fas fa-home mr-1"></i>
          <span class="font-medium">Xem Shop</span>
        </div>
        <div
          class="flex items-center border max-w-[105px] rounded text-sm py-2 px-1 justify-center text-[#0D5CB6] border-[#0D5CB6] cursor-pointer 
          md:text-[13px] md:leading-4 "
        >
          <i class="fas fa-plus mr-1"></i>
          <span class="font-medium">Theo dõi</span>
        </div>
      </div>
  
      <div class="flex justify-center items-center">
        <div
          class="flex flex-col justify-center items-center text-[13px] leading-5 p-1 md:text-[11px]"
        >
          <img src="/src/images/check.svg" alt="" />
          <div class="mt-[2px] ">Hoàn tiền</div>
          <div class="mt-[2px] font-medium">111%</div>
          <div class="mt-[2px]">nếu hàng giả</div>
        </div>
        <div
          class="flex flex-col justify-center items-center text-[13px] leading-5 p-1 md:text-[11px]"
        >
          <img src="/src/images/like.svg" alt="" />
          <div class="mt-[2px]">Mở hộp</div>
          <div class="mt-[2px]">kiểm tra</div>
          <div class="mt-[2px]">nhận hàng</div>
        </div>
        <div
          class="flex flex-col justify-center items-center text-[13px] leading-5 p-1 md:text-[11px]"
        >
          <img src="/src/images/quaylaitrai.svg" alt="" />
          <div class="mt-[2px]">Đổi trả trong</div>
          <div class="mt-[2px] font-medium">30 ngày</div>
          <div class="mt-[2px]">nếu sp lỗi</div>
        </div>
      </div>
    </div>
    <div class="ml-3 grid grid-cols-2 border mt-4 rounded md:hidden">
      <div class="p-3">
        <div class="text-[15px] leading-6 font-medium">
          8 nhà bán khác
        </div>
        <div class="text-[13px] leading-5 text-[#808089]">
          Giá từ 75.210 ₫
        </div>
      </div>
  
      <div class="flex items-center justify-center p-3">
        <button
          class="border py-1 px-3 border-[#0D5CB6] font-medium text-[#0D5CB6] rounded"
        >
          So Sánh
        </button>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
                          <div class="container mx-auto bg-white p-4 border ">
                            <div class="text-xl my-2">Sản phẩm tương tự</div>
                            <div class="grid grid-cols-6 gap-3 sm:grid-cols-2 md:grid-cols-3 sm:p-3 mb-3 similar_product lg:grid-cols-4" >
                            ${relatedBook.map((item) => {
                              return /*html*/ `<a href="" id="pro">
                              <img src="${
                                item.images[0].base_url
                              }" alt="" class="object-contain w-[180px] h-[180px] sm:w-full  lg:max-w-full lg:max-h-[180px] md:w-full ">
                            <div class="p-3 mt-3 sm:p-3 md:p-3">
                              <img src="/src/images/tikinow2.svg" alt="">
                              <p class="text-xanh text-xs sm:my-2">GIAO SIÊU TỐC 2H</p>
                              <p class="mb-1 text-sm sm:text-xs sm:mb-2 line-clamp-2 md:text-[13px] md:leading-5 ">${
                                item.name
                              }</p>
                              <div class="flex relative sm:my-1">
                                <img src="/src/images/sao.svg" alt="">
                                <img src="/src/images/sao.svg" alt="">
                                <img src="/src/images/sao.svg" alt="">
                                <img src="/src/images/sao.svg" alt="">
                                <img src="/src/images/sao.svg" alt="" class="border-r pr-1 sm:pr-[2px]">
                                <p class="ml-2 sm:text-[10px] sm:leading-5 text-[14px] leading-6">${
                                  item.quantity_sold?.text
                                    ? item.quantity_sold.text
                                    : ""
                                }</p>
                              </div>
                              <p class="text-[#FF424E]">
                              ${item.current_seller.price?.toLocaleString(
                                "de-DE"
                              )}đ
                              </p>
                              <img src="/src/images/rehonhoantien.svg" alt="">
                            </div>
                          </a>`;
                            })}
                            </div>
                          </div>
                          
  <div class="bg-gray-100">
  <div class="container mx-auto bg-white px-4 border-b pb-4">
  <div class="text-xl py-[16px]">Thông tin chi tiết</div>
  
    <table class=" w-full" >
      <tbody class="flex p-4">
          <tr class=" flex flex-col w-[220px] bg-[#EFEFEF]">
          ${book.specifications?.[0].attributes
            .map(function (image) {
              return `<td class="my-2 pl-4 text-base sm:text-xs"> ${image.name}</td>`;
            })
            .join("")}
          </tr>
          <tr class="flex flex-col">
          ${book.specifications?.[0].attributes
            .map(function (image) {
              return `<td class="my-2 pl-4 text-base sm:text-xs"> ${image.value}</td>`;
            })
            .join("")}
          </tr>
      </tbody>
  </table>
          
          <div class="py-4" >
            <div class="text-xl py-2">Mô tả sản phẩm</div>
            <div class="text-sm" >${book.description}</div>
          </div>
          <div class="flex justify-center items-center my-2" 
          >
              <button class="border-[#0D5CB6] border px-14 h-[40px] rounded text-[#0D5CB6] font-medium">Xem Thêm Nội Dung</button>
          </div>
          
  </div>
  </div>
  ${Footer()}  
  `;
};
(id) => {
  Products_detail(id);
};
export default Products_detail;
