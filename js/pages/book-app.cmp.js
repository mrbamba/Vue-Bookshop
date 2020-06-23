// IMPORT CMPS
import bookList from '../cmps/book-list.cmp.js';
import bookFilter from '../cmps/book-filter.cmp.js';
import bookDetails from './book-details.cmp.js';
import bookEdit from './book-edit.cmp.js';
import addBook from './book-add.cmp.js'

// IMPORT SERVICES
import { bookService } from "../services/books-service.js";

export default{
  name:'book-app',
  template: `
    <main class="app-main book-app flex flex-column">
      <div class="flex space-between">
        <router-link  class="add-new-book" to="/book/edit">New Book</router-link>
        <router-link  class="import-new-book-from-google" to="/import">Import Book from Google</router-link>
      </div>
      <book-filter @filter="setFilter" class="book-filter"/>
      
      <book-list  :books="booksToShow"></book-list>
    </main>
    `,
  data() {
    return {
      books:[],
      currBook: null,
      filterBy: {
        searchStr: "",
      },
    };
  },
  computed: {
    booksToShow() {
      const filterBy = this.filterBy;
      if (!filterBy) return this.books;
console.log(filterBy)
      var filteredBooks = this.books.filter((book) => {
        return book.title
          .toLowerCase()
          .includes(filterBy.searchStr.toLowerCase());
      });
      // filteredBooks=filteredBooks.filter(book=>{
      //     return (filterBy.)
      // })
      return filteredBooks;
    },
  },
  created(){
    bookService.getBooks()
      .then(books=>{
        this.books=books;
      })

  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    setCurrBook(book) {
      this.currBook = book;
    },
  },
  components:{
    bookList,
    bookFilter,
    bookDetails,
    bookEdit,
    addBook
  }
}
