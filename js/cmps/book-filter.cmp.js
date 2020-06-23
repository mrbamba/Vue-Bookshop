


export default{
  name:'book-filter',

  template: `
    <section class="book-filter">
        <h2>Search for a book</h2>
        <input type="text" placeholder="Search?" v-model="filterBy.searchStr" @input="filter"/>
    </section>
    `,
  data() {
    return {
      filterBy: {
        searchStr: "",
      },
    };
  },
  methods: {
    filter() {
      this.$emit("filter", this.filterBy);
    },
  },
};
