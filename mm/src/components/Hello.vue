<template>
  <div class="hello">
    <div class="header">
      <head-nav></head-nav>
    </div>
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <content-left></content-left>
  
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple">
  
      <content-right></content-right>
          </div>
        </el-col>
      </el-row>
  
            <div class="footer"></div>
    </div>
  </div>
</template>  
  
<script>  
import HeadNav from './pages/HeaderNav'
import ContentLeft from './pages/ct-lt/ContentLeft'
import ContentRight from './pages/ct-rt/ContentRight'

export default {
  name: 'hello',
  components: {
    HeadNav,
    ContentLeft,
    ContentRight
  }
}
</script>  

  
<!-- Add "scoped" attribute to limit CSS to this component only -->  
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style> 