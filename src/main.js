import { render } from "@/utilities";
import HomePage from "./pages/home";
import Contact from "@/pages/contact";
import Error from "@/pages/error";
import Products_detail from "@/pages/products-detail";
import News from "./pages/news";
import Blogs from "./pages/blogs";
import "@/style/main.css";
import { router } from "@/utilities";
import Dashboard from "@/pages/admin/dashboard";
import BookUpdate from "@/pages/admin/book-update";
import BookAdd from "@/pages/admin/book-add";
import Signup from "./pages/signup";
import Login from "./pages/login";
import CartPage from "./pages/cart";
// Khai bao DOM
const app = document.querySelector("#app");
// Router

router.on("/admin/*", () => {}, {
  before: (done) => {
    if (localStorage.getItem("user")) {
      console.log("Admin");
      const userId = JSON.parse(localStorage.getItem("user")).id;
      if (userId === 1) {
        done();
      } else {
        window.location.href = "/";
      }
    }
  },
});

router.on({
  "/": () => {
    render(HomePage, app);
  },
  "/contact": () => {
    render(Contact, app);
  },

  "/products/:id": function ({ data }) {
    render(() => Products_detail(data.id), app);
  },
  "/news": () => {
    render(News, app);
  },
  "/blogs": () => {
    render(Blogs, app);
  },
  "/admin": () => {
    render(Dashboard, app);
  },
  "/admin/books/:id": function ({ data }) {
    render(() => BookUpdate(data.id), app);
  },
  "/admin/book/add": () => {
    render(BookAdd, app);
  },
  "/signup": () => {
    render(Signup, app);
  },
  "/login": () => {
    render(Login, app);
  },
  "/cart": () => {
    render(CartPage, app);
  },
});

router.notFound(function () {
  render(Error, app);
});
router.resolve();
