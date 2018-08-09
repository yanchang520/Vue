<template>
    <div class="user">
        <el-row class="page">
            <el-col :span="24">
                <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>用户管理</el-breadcrumb-item>
                <el-breadcrumb-item>用户列表</el-breadcrumb-item>
                 </el-breadcrumb> 
            </el-col>
        </el-row>
   
        <el-row >
            <el-col :span="24">
               <div style="margin-top: 15px;">
                    <el-input placeholder="请输入内容" v-model="input5" class="input-with-select search-input">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                 </el-input>
                  <el-button type="success" plain >添加用户</el-button>
            </div>
            </el-col>
        </el-row>

        <el-table
        class="margin-20"
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
        type="index"
        width="50">
      </el-table-column>
    <el-table-column
      prop="username"
      label="姓名"
      width="100">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱"
      width="150">
    </el-table-column>
    <el-table-column
      prop="mobile"
      label="电话"
       width="150">
    </el-table-column>
    <el-table-column label="用户状态">
        <template slot-scope="scope">
         <el-switch
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949">
        </el-switch>
        </template>
      </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
         <el-button size="mini" type="primary" plain icon="el-icon-edit" ></el-button>
          <el-button size="mini" type="primary" plain icon="el-icon-delete"></el-button>
           <el-button size="mini" type="primary" plain icon="el-icon-check"></el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="page">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="1"
      layout="total, sizes, prev, pager, next, jumper"
      :total="40">
    </el-pagination>
  </div>
     </div>
</template>

<script>
 import {getUserList} from '@/api'
export default {
  data() {
      return{
        input5:"",
        value2:true,
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
            tableData: [],
      }
  },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
 created(){
     getUserList({params:{query:"",pagenum:1,pagesize:4}}).then(res => {
         if(res.meta.status === 200){
             console.log(res.data)
             this.tableData = res.data.users
         }
     })
 }
}
</script>
<style lang="scss" scoped>
.user {
  .margin-20 {
    margin: 10px 0;
  }
  .search-input {
    width: 300px;
  }
  .page {
    padding: 5px 0;
    background-color: #d3dce6;
  }
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
}
</style>


