<template>
   <el-card class="box-card">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 搜索框 -->
    <el-row class="searchArea">
      <el-col :span="24">
           <el-input class="searchInput" clearable placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
           </el-input>
        <el-button type="success" plain>添加用户</el-button>
      </el-col>
    </el-row>

    <!-- 表格 -->
       <el-table
      :data="tableData"
      style="width: 100%">
      <!-- 序号 -->
     <el-table-column prop="id" label="#" width="80">
     </el-table-column>
     <el-table-column prop="username" label="姓名" width="120">
     </el-table-column>
     <el-table-column prop="email" label="邮箱" width="160">
     </el-table-column>
     <el-table-column prop="mobile" label="电话" width="140">
     </el-table-column>
    
     <el-table-column  label="创建日期">
      <template slot-scope="scope">
                 {{scope.row.create_time | fromdata}}
       </template>
     </el-table-column>
    
      <el-table-column
        label="状态">
        <template slot-scope="scope">
         <el-switch
        v-model="scope.row.mg_state"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch></template>
      </el-table-column>
      <el-table-column label="编辑">
      <el-row>
           <el-button plain size="mini" type="primary" icon="el-icon-edit" circle></el-button>
        <el-button plain size="mini" type="danger" icon="el-icon-delete" circle></el-button>
        <el-button plain size="mini" type="success" icon="el-icon-check" circle></el-button>
      </el-row>
      </el-table-column>
       
    </el-table>
     <div class="block" >
            <el-pagination 
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pagenum"
              :page-sizes="[2, 4, 6, 8]"
              :page-size="pagesize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
            </el-pagination>
        </div>

  </el-card>
</template>

<script>
export default {
  created() {
    this.getUserdata();
  },
   methods:{
   handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      this.pagesize = val;
      this.pagenum = 1;
      this.getUserdata();
      },
   handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.pagenum = val;
        this.getUserdata();
      },
  async getUserdata() {
    const AUTH_TOKEN = sessionStorage.getItem("token");
    this.$http.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    const res = await this.$http.get("/users",{params:{
      query: '',
      pagenum: this.pagenum,
      pagesize: this.pagesize
    }})
    console.log(res);
    const data = res.data
    const {meta: {msg,status}} = data
 
    if (status === 200) {
      const {data: {pagenum,total,users}} = data
      this.$message.success(msg);
      this.tableData =  users;
      this.pagenum =  pagenum;
      this.total =  total;

    }
    

  }
 },
 data () {
    return{
       query:'',
       pagenum:'1',
       pagesize:'2',
       total:'0',
       tableData:[]
    }
 }

}

</script>
<style>
.box-card{
  height: 100%;

}
.searchArea{
  margin-top: 10px;
  margin-bottom: 10px;
}
.searchArea .searchInput{
  width: 350px;
}
</style>