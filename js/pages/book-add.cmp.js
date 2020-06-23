import { bookService } from "../services/books-service.js";
import bookAddList from './book-add-list.cmp.js'

export default {
  name:'book-add',
  template: `
    <section class="book-add app-main">
        <h2> Import a book from Google Books</h2>
        <input class="google-book-search-input" placeholder="Search?" v-model="searchBy.searchStr" >
        <button class="import-new-book-from-google" @click="search" >Search</button>
        <ul v-if="receivedBooks">
          <book-add-list v-for="book in receivedBooks" />
        </ul>
    </section>
      `,
  data() {
    return {
      searchBy: {
        searchStr: "",
      },
      receivedBooks: null,
    };
  },
  methods: {
    search() {
      bookService.getBooksFromGoogle(this.searchBy.searchStr).then((books) => {
        this.receivedBooks = books;
        console.log(books);
      });
    },
  },
  created(){
    console.log('created book add')
  },
  components:{
    bookAddList
  }
};
