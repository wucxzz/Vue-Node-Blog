<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :key="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :key="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
        data() {
            return {
                items: [
                    // {
                    //     index: 'articles',
                    //     title: '文章列表'
                    // },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '文章',
                        subs: [
                            {
                                index: 'articles',
                                title: '文章列表'
                            },
                            {
                                index: 'markdown',
                                title: '发布'
                            }
                        ]
                    },
                    // {
                    //     icon: 'el-icon-date',
                    //     index: '3',
                    //     title: '表单',
                    //     subs: [
                    //         {
                    //             index: 'baseform',
                    //             title: '基本表单'
                    //         },
                    //         {
                    //             index: 'vueeditor',
                    //             title: '编辑器'
                    //         },
                    //         {
                    //             index: 'upload',
                    //             title: '文件上传'
                    //         }
                    //     ]
                    // },
                    // {
                    //     index: 'markdown',
                    //     title: '发布'
                    // },
                    // {
                    //     icon: 'el-icon-upload2',
                    //     index: 'drag',
                    //     title: '拖拽'
                    // },
                    // {
                    //     icon: 'el-icon-setting',
                    //     index: 'user',
                    //     title: '用户'
                    // },
                    // {
                    //     icon: 'el-icon-delete2',
                    //     index: 'recycleBin',
                    //     title: '回收站'
                    // }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar {
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
    @media only screen and (max-width: 768px) {
        .box-card-image {
            height: 250px;
        }
        .sidebar {
            display: none;
        }
    }
</style>
