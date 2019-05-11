<template lang='html'>
    <div class="wrap">
        <!--搜索框部分开始-->
        <div class='search'>
            <form class='search-form'> 
                <i class=''></i>
                <input type="text" placeholder=" 请输入你想要的商品" class='search-inp'>
            </form>
        </div>
        <!--搜索框部分结束-->
        <!--分类部分开始-->
        <div class='main'>
            <ul class='main-menuList'>
                <li class='main-menuItmes' v-for='items,index in types' @click='sendIndex(index)'>{{items.title}}</li>
            </ul>
            <ul class='main-productList'>
                <li class='main-productItems'>
                    <div class='main-proImgBox'>
                        <img  :src='curData.listArr.bigImg' class='main-proImg'/>
                    </div>
                    <div class='main-proEvery'>
                        <p class='main-proEvery-title'></p>
                        <ul class='main-proEvery-list'>
                            <li class='main-proEvery-items' v-for='item,index in curData.listArr.type>
                                <img :src='item.img' class='main-proEvery-img'/>
                                <p class="main-proEvery-items-text">{{item.description}}</p>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <!--分类部分结束-->
    </div>
</template>
<script>
export default {
    name: 'Type',
    data() {
        return {
            //所有数据
            types: {},
            //当前点击所对应的数据
            curData: {}
        }
    },
    mounted() {
        this.$http.get('/apis/type').then(res => {
            console.log(res.data)
            this.types = res.data
            console.log(this.types[0].listArr.bigImg)
            this.curData = this.types[0];
        })
    },
    methods: {
        sendIndex(index) {
            this.curData = this.types[index];
        }
    }
}
</script>
<style lang="stylus" scoped>
    .wrap 
        .search 
            height: 88px
            .search-form
                box-sizing: border-box
                padding: 14px 20px
                width: 100%
                height: 88px
                .search-inp
                    box-sizing: border-box
                    padding-left: 62px
                    width: 100%
                    height: 100%
                    border-radius: 4px
                    font-size: 30px
                    color: #808080
                    background: #f2f2f2
        .main 
            display: flex
            border-top: 1px solid #ccc
            .main-menuList
                width: 180px
                border-right: 1px solid #cccccc
                .main-menuItmes
                    height: 88px
                    text-align: center 
                    line-height: 88px
                    color: #333333
                    font-size: 30px
            .main-productList
                flex: 1
                .main-productItems
                    .main-proImgBox
                        box-sizing: border-box
                        padding: 20px 20px 0
                        height: 260px
                        margin-bottom: 40px
                        .main-proImg
                            width: 100%
                            height: 100%
                    .main-proEvery
                        box-sizing: border-box
                        padding: 0 40px
                        .main-proEvery-title
                            box-sizing: border-box
                            padding: 34px 0
                            height: 91px
                            color: #333333
                            font-size: 24px
                            text-align: center
                            margin: 0 28px
                        .main-proEvery-list
                            display: flex
                            flex-wrap: wrap
                            .main-proEvery-items
                                display: flex
                                flex-direction: column
                                align-items: center
                                width: 33.3%
                                .main-proEvery-img
                                    width: 128px
                                    height: 128px
                                .main-proEvery-items-text
                                    text-align: center
                                    color: #333333
                                    font-size: 22px

</style>
