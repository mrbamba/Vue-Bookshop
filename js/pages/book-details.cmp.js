import { bookService } from "../services/books-service.js";
import bookReview from "../cmps/book-review.cmp.js";

export default {
  //   props: ["book"],
  name: "book-details",

  template: `
    <section class="book-details app-main" v-if="book">
        <div class="book-details-top-menu flex space-between">
            <button @click="close" >Back</button>
            <button @click="reviewPanel=!reviewPanel"  >Leave Review</button>
        </div>
<book-review v-if="reviewPanel"/>
        <div class="img-container">
        <img :src="book.thumbnail"></div>
        <h2>{{book.title}}</h2>
        <h4>{{book.authors[0]}}</h4>
        <h4>{{book.subtitle}}</h4>
        <div class="book-details-addtl-info flex">
            <div class="book-details-general">
                <ul class="clean-list">
                    <li>id: {{book.id}}</li>
                    <li>Published on: {{book.publishedDate}}</li>
                    <li>Description: {{book.description}}</li>
                    <li>Page count: {{pageCountToUse}}</li>
                    <li>Categories: {{categoriesToUse}}</li>
                    <li>Language: {{book.language}}</li>
                    <li>{{bookAgeToShow}}</li>
                </ul>
            </div>
            <div class="book-details-price ">
                <img v-if="showSaleSign" src="img/sale-175px.png">
                <h1 v-bind:class="priceClass">{{currencyToUse}}{{book.listPrice.amount}}</h1>

            </div>

        
        </div>

    </section>
    `,
  data() {
    return {
      book: null,
      reviewPanel: false,
      input: this.$refs.name,
    };
  },
  //   methods: {
  //     close() {
  //       this.$emit("close", null);
  //     },
  //   },
  computed: {
    currencyToUse() {
      if (this.book.listPrice.currencyCode === "USD") return "$";
      else if (this.book.listPrice.currencyCode === "EUR") return "€";
      else if (this.book.listPrice.currencyCode === "ILS") return "₪";
    },
    categoriesToUse() {
      let categories = "";
      this.book.categories.forEach((cat) => {
        categories += cat + ", ";
      });
      return categories.slice(0, categories.length - 2);
    },
    pageCountToUse() {
      if (this.book.pageCount > 500) {
        return this.book.pageCount + " pages - Long reading";
      } else if (this.book.pageCount > 200) {
        return this.book.pageCount + " pages - Decent reading";
      } else return this.book.pageCount + " pages - Light reading";
    },
    bookAgeToShow() {
      let currYear = new Date().getFullYear();
      if (currYear - this.book.publishedDate > 10) {
        return ">10 years ago - Veteran Book";
      } else if (currYear - this.book.publishedDate < 1) {
        return "< 1 Year – New!";
      } else return "";
    },
    showSaleSign() {
      if (this.book.listPrice.isOnSale) return true;
    },
    priceClass() {
      return {
        pricered: this.book.listPrice.amount > 150,
        pricegreen: this.book.listPrice.amount < 20,
      };
    },
  },
  created() {
    const bookId = this.$route.params.bookID;
    bookService.getById(bookId).then((book) => {
      this.book = book;
    });
    console.log("CMP BookDetails created", bookId);
  },
  methods: {
    close() {
      console.log("Saving...");
      this.$router.push("/book");
    },
  },
  components: {
    bookReview,
  },
};
