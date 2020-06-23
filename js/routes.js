import homePage from "./pages/home-page.cmp.js";
import bookApp from "./pages/book-app.cmp.js";
import bookEdit from "./pages/book-edit.cmp.js";
import bookDetails from "./pages/book-details.cmp.js";
import aboutUs from "./pages/about.cmp.js";
import bookAdd from "./pages/book-add.cmp.js";


const myRoutes = [
  {
    path: "/",
    component: homePage,
  },
  {
    path: "/book",
    component: bookApp,
  },
  {
    path: "/book/edit/:bookId?",
    component: bookEdit,
  },
  {
    path: "/book/:bookID",
    component: bookDetails,
  },
  {
    path: "/about",
    component: aboutUs,
  },
  {
    path: "/import",
    component: bookAdd,
  }
];
export const myRouter = new VueRouter({ routes: myRoutes });
