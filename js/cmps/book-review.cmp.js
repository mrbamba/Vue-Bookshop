


export default{
    name:'book-review',

    props:['book'],
    template:`
        <div class="review-panel"">
            <form>
                <input class="full-name" ref="name"  type="text" placeholder="Full Name?">
            </form>
        </div>
    `,
    mounted(){
            this.$refs.name.focus();
      }
}