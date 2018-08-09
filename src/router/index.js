import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Welcome from '@/views/welcome/Welcome.vue'
import User from '@/views/user/User.vue'
Vue.use(Router)

export default new Router({
  routes: [
   {name:"Login",path:"/login",component:Login},
    {name:"Home",path:"/home",component:Home,redirect:{path:'/home/welcome'},
      children:[
        {name:"Welconme",path:"welcome",component:Welcome},
        {name:"User",path:"user",component:User}
      ]
    }
  ]
})
