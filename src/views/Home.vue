

 <template>
 <div class="home">
    <el-container>
  <el-aside width="200px">
       <div class="logo"></div>
   
    <el-menu
      :router="true"
      
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
          <el-menu-item index="/home/user">
              <i class="el-icon-location"></i>
            <span slot="title">用户列表</span>  </el-menu-item> 
      </el-submenu>
    </el-menu>
  </el-aside>

<!-- header部分 -->
    <el-container>
        <el-header>
          <i class="myicon myicon-menu toggle-btn" @click="toggleCollapse"></i>
          <div class="system-title">电商后台管理系统</div>
          <div>
            <span class="welcome">
              您好，{{username}}
            </span>
            <el-button type="text" @click="logout">退出</el-button>
          </div>
        </el-header>
        <el-main>
             <router-view></router-view>
        </el-main>
    </el-container>
</el-container>
    </div>
 </template>
 <script>
export default {
    data(){
        return{
            username:""
        }
    },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    logout () {
      // 清除登录状态，即保存在localStorage中的token
      localStorage.removeItem('mytoken')
      // 跳转到登录页面
      this.$router.push({name: 'Login'})
    }
  },
  created(){
    this.username = localStorage.getItem('username')
  }
};
</script>
 <style lang="scss" scoped>
.home {
  height: 100%;
  .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #545c64;
  }
  .logo {
    height: 60px;
    background: url(../assets/logo.png);
    background-size: cover;
    background-color: #989898;
  }
   .welcome, {
    color: white;
  }
  .toggle-btn {
    font-size: 36px;
    color: #989898;
    cursor: pointer;
    line-height: 60px;
  }
  .system-title {
    font-size: 28px;
    color: white;
  }
}
</style>
 
 