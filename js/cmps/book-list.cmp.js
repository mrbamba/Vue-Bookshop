import bookPreview from './book-preview.cmp.js';


export default{
    name:'book-list',

    props:['books'],
    template:`
    <ul class="book-list clean-list flex wrap align-center space-around">
        <book-preview v-for="book in books" @click.native="selectBook(book)" 
        :book="book" :key="book.id"/>
    </ul>
    `,
    methods:{
        selectBook(book){
            this.$emit('bookSelected', book);
        }
    },
    components:{
        bookPreview
    }
}