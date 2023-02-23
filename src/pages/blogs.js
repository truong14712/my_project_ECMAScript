import Footer from "@/components/footer";
import Header from "@/components/header";
import Navigation from "@/components/navigation";

const Blogs = function () {
  return `
    ${Header()}
    ${Navigation()}
    <h1>Blogs</h1>
    <p>Website bán sách trực tuyến</p>
    ${Footer()}
    `;
};

export default Blogs;
