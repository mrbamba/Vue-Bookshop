import { bookService } from "../services/books-service.js";

export default{
  name:'book-edit',

  template: `
  <section class="book-edit app-main">
    <form @:submit.prevent="saveBook">
        <h2>Add a book</h2>
        Title: <input type="text" v-model.trim="bookToEdit.title"/>
        <br/>
        <button v-bind:disabled="isDisabled" class="save-book" @click="saveBook">save</button>
        <pre>{{bookToEdit}}</pre>
    </form>
</section>
    `,
  data() {
    return {
      bookToEdit: {
        title: "",
      },
    };
  },
  computed: {
    isDisabled() {
      return this.bookToEdit.title ? false : true;
    },
  },
  methods: {
    // saveBook() {
    //   bookService.saveBook(this.bookToEdit);

    //   this.bookToEdit = {
    //     title: "",
    //   };
    // },
  },
  created(){
    const {bookId}=this.$route.params;
    if(bookId){
      bookService.getById(bookId)
        .then(book=>{
          this.bookToEdit={...book};
        })
    }
  },
  methods:{
    saveBook(){
      console.log('running')
      bookService.saveBook(this.bookToEdit);
      this.$router.push('/book')
    }
  }
};
