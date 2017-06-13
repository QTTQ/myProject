<template>
    <div class="m-bmap">



<div id="allmap" style=" width: 100%;height:200px; border: 1px solid gray;overflow:hidden;">
        </div>
    </div>
</template>
<script>
import BMap from 'BMap'
import Tag from '../../../assets/EventTag.js'

export default {
    //     components: {  
    //     comHeader  
    //   },  
    // data: () => ({

    // }),
    data() {
        return {
            mg: "小区"
        }
    },
    created() {
        // 组件创建完后获取数据，这里和1.0不一样，改成了这个样子  
        this.loadMap()
        // this.ready() // 如果在此处直接调用this.ready()方法，将无法加载地图  
    },
    mounted(mg) {
        this.ready(mg)

        var self = this;
        Tag.$on('click', function (msg) {
            self.mg = msg;
            console.log(self.mg)
            self.ready(self.mg)

        });
    },
    methods: {
        loadMap: function () {
            //   console.log(this.$route.params.name)  
            //   console.log(this.$route.params.addr)  
            //   console.log(this.$route.params.phone)  
            // setTimeout(this.ready, 0)  

        },
        ready: function (mg) {
            var map = new BMap.Map("allmap");
            map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
            var local = new BMap.LocalSearch(map, {
                renderOptions: { map: map }
            });
            local.search(mg);
            console.log(mg)
        }
    }
}
</script>
