<template>
    <div class="m-rt-hd">


        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <router-link to="/yjkb">   <el-menu-item index="1">业绩看板</el-menu-item></router-link>
          <router-link to="/yyfx">  <el-submenu index="2">
                <template slot="title">运营分析</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu></router-link>
        <router-link to="/jzyx">   <el-menu-item index="3">精准营销</el-menu-item></router-link>
        <router-link to="/yjts">   <el-menu-item index="4">预警提示</el-menu-item></router-link>
        <router-link to="/jszy">   <el-menu-item index="5">建设指引</el-menu-item></router-link>
        <router-link to="/xxcxjwh">   <el-menu-item index="6">信息查询及维护</el-menu-item></router-link>        
        <router-link to="/zwpg">   <el-menu-item index="7">装维评估</el-menu-item></router-link>
        <router-link to="/xtgl">   <el-menu-item index="8">系统管理</el-menu-item></router-link>

        </el-menu>
    </div>
</template>  


<script>
export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>