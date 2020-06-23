


export default{
    name:'book-preview',

    props:['book'],
    template:`
    <li class="book-preview">
        <h4>{{book.title}}</h4>
        <p>{{book.authors}}<br>
        {{book.publishedDate}}</p>
        <router-link :to="'/book/'+book.id">Details</router-link> | 
        <router-link :to="'/book/edit/' + book.id">Edit</router-link>
    </li>
    `
}