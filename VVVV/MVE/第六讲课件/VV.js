  //组件
        var Home={
            template:'<h3>我是主页</h3>'
        };
        var News={
            template:'<h3>我是新闻</h3>'
        };

        //配置路由
        const routes=[
            {path:'/home', component:Home},
            {path:'/news', component:News},
            {path:'*', redirect:'/home'}
        ];

        //生成路由实例
        const router=new VueRouter({
            routes
        });


        //最后挂到vue上
        new Vue({
            router,
            el:'#box',
            data() {
                return {
                    radio: '1'
                };
            }
        });