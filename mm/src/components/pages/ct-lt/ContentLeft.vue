<template>
    <div class="m-ct-lt">
    
        <el-row class="tac">
           
            <!--<el-col :span="8">-->
                <h5>不带 icon</h5>
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
                    <el-submenu index="1">
<<<<<<< HEAD
                        <template slot="title">哈尔滨</template>
                        <el-menu-item-group title="市">
                            <el-menu-item index="1-1" @click="clickTag($event)">哈尔滨</el-menu-item>
                            <el-menu-item index="1-2" @click="clickTag($event)">大庆</el-menu-item>
                        </el-menu-item-group>
                       
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">哈尔滨</template>
                        <el-menu-item-group title="市">
                            <el-menu-item index="1-1" @click="clickTag($event)">哈尔滨</el-menu-item>
                            <el-menu-item index="1-2" @click="clickTag($event)">大庆</el-menu-item>
                        </el-menu-item-group>
                       <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3" @click="clickTag($event)">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1" @click="clickTag($event)">选项1</el-menu-item>
                            <el-menu-item index="1-4-2" @click="clickTag($event)">选项1</el-menu-item>
                            <el-menu-item index="1-4-3" @click="clickTag($event)">选项1</el-menu-item>
                            <el-menu-item index="1-4-4" @click="clickTag($event)">选项1</el-menu-item>
                            <el-menu-item index="1-4-5" @click="clickTag($event)">选项1</el-menu-item>
                            <el-menu-item index="1-4-6" @click="clickTag($event)">选项1</el-menu-item>
                            <el-menu-item index="1-4-7" @click="clickTag($event)">选项1</el-menu-item>


                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="1">
                        <template slot="title">哈尔滨</template>
                        <el-menu-item-group title="分组一">
                            <el-menu-item index="1-1" @click="clickTag($event)">哈尔滨</el-menu-item>
                            <el-menu-item index="1-2" @click="clickTag($event)">大庆</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3" @click="clickTag($event)">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title" @click="clickTag($event)">选项4</template>
                            <el-menu-item index="1-4-1" @click="clickTag($event)">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="1">
                        <template slot="title">哈尔滨</template>
                        <el-menu-item-group title="分组一">
                            <el-menu-item index="1-1" @click="clickTag($event)">哈尔滨</el-menu-item>
                            <el-menu-item index="1-2" @click="clickTag($event)">大庆</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3" @click="clickTag($event)">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title" @click="clickTag($event)">选项4</template>
                            <el-menu-item index="1-4-1" @click="clickTag($event)">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="1">
                        <template slot="title">哈尔滨</template>
                        <el-menu-item-group title="分组一">
                            <el-menu-item index="1-1" @click="clickTag($event)">哈尔滨</el-menu-item>
                            <el-menu-item index="1-2" @click="clickTag($event)">大庆</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3" @click="clickTag($event)">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title" @click="clickTag($event)">选项4</template>
                            <el-menu-item index="1-4-1" @click="clickTag($event)">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="1">
                        <template slot="title">哈尔滨</template>
                        <el-menu-item-group title="分组一">
                            <el-menu-item index="1-1" @click="clickTag($event)">哈尔滨</el-menu-item>
                            <el-menu-item index="1-2" @click="clickTag($event)">大庆</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3" @click="clickTag($event)">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title" @click="clickTag($event)">选项4</template>
                            <el-menu-item index="1-4-1" @click="clickTag($event)">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="1">
                        <template slot="title">哈尔滨</template>
                        <el-menu-item-group title="分组一">
                            <el-menu-item index="1-1" @click="clickTag($event)">哈尔滨</el-menu-item>
                            <el-menu-item index="1-2" @click="clickTag($event)">大庆</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3" @click="clickTag($event)">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title" @click="clickTag($event)">选项4</template>
                            <el-menu-item index="1-4-1" @click="clickTag($event)">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                   
=======
                        <template slot="title">导航一</template>
                        <el-menu-item-group title="分组一">
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">导航二</el-menu-item>
                    <el-menu-item index="3">导航三</el-menu-item>
>>>>>>> 3e75aee5d835678a36f4fa0e29e4d2c6eae37be2
                </el-menu>
            <!--</el-col>-->
            
        </el-row>
    
    </div>
</template>


<script>
<<<<<<< HEAD
import Tag from '../../../assets/EventTag.js'
export default {
     data:function() {
            return {
                cityname:"酒店"
            }
        },
    methods: {     
        clickTag(event){
            this.cityname=event.$el.innerHTML;
            Tag.$emit('click',this.cityname)
            console.log(this.cityname)
            
        },
=======

export default {
    methods: {
>>>>>>> 3e75aee5d835678a36f4fa0e29e4d2c6eae37be2
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>