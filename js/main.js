// import bookApp from"./pages/book-app.cmp.js";
import {myRouter} from './routes.js'


new Vue({
  el: "#app",
  router: myRouter,
  template: `
    <div>  

        <header class="app-header flex space-between">
            <h1>Vue Bookshop</h1>
            <nav class="nav">
                <router-link to="/"> Home </router-link>
                <router-link to="/book"> Book App </router-link>
                <router-link to="/about"> About </router-link>
                <!-- <router-link to="/import"> import </router-link> -->
            </nav>

        </header>
        <main>
            <router-view/>
        </main>
        <footer class="footer">Copyright 2020</footer>
    
    </div>`,
    // components:{
    //     bookApp
    // }
});
