import Footer from "@/components/footer";
import Header from "@/components/header";
import Navigation from "@/components/navigation";

const Contact = function () {
  return `
    ${Header()}
    ${Navigation()}
    <h1>Contact</h1>
    <p>Website bán sách trực tuyến</p>
    ${Footer()}
    
    `;
};

export default Contact;
