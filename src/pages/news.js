import Footer from "@/components/footer";
import Header from "@/components/header";
import Navigation from "@/components/navigation";

const News = function () {
  return `
  ${Header()}
  ${Navigation()}
    <h1>News</h1>
    <p>Website bán sách trực tuyến</p>
  ${Footer()}
  `;
};

export default News;
