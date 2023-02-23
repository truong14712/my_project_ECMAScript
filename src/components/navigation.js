const Navigation = function () {
  return /*html*/ `
  <div class="bg-gray-100">
    <ul class="flex gap-2 unlist-style justify-center p-3">
      <li><a class="hover:text-blue-500 p-4 text-lg" href="/">Trang chủ</a></li>
      <li><a class="hover:text-blue-500 p-4 text-lg" href="/contact">Liên hệ</a></li>
      <li><a class="hover:text-blue-500 p-4 text-lg" href="/news">Tin tức</a></li>
      <li><a class="hover:text-blue-500 p-4 text-lg" href="/blogs">Blog</a></li>
    </ul>
  </div>
    `;
};

export default Navigation;
