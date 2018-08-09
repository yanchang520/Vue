// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUi from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/index.scss"
Vue.use(ElementUi);
Vue.config.productionTip = false


    router.beforeEach((to,from,next)=>{
      let token = localStorage.getItem('mytoken')
      if(token){
        // axios('/ggg',(req,res)=>{
        //   if(res.success){
        //     next()
        //   }else{
        //     next({path:'/login'})
        //   }
        // })
        next()
      }else{
        //如果没有登录，但是访问其他的页面
        if(to.path !== '/login'){
          next({path:'/login'})
        }else{
          next()
        }
      }
    })
    //引入Vuex
    import Vuex from 'vuex'
    //使用Vuex插件
    Vue.use(Vuex)
    //创建数据共享仓库
    const store = new Vuex.Store({
      state:{    //所有共享的数据
        count:700,
        username:""
      },
      mutations:{
        add(state){
          state.count++ 
        },
      }

    })



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
