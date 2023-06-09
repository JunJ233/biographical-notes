let modelData = [
    {
        name: "可视化框架(Echarts)",
        time: "2020年02月-2020年03月",
        technology: ['Vue', 'Vuex', 'Vue-router', 'Axios', 'echarts', 'iview'],
        miaoshu: '该项目一个通用项目，是操作微应用的发布，目前支持发布qt、链接、微前端的微应用项目',
        zhize: [
            '搭建vue框架，封装项目结构和代码组件',
            '设置路由权限，只给第三方厂商相应的路由权限和按钮权限',
            '负责"应用管理"、"系统管理"、"App轮播图管理"编码和联调',
        ]
    },{
        name: "渐进式框架（vue）",
        time: "至今",
        link: "",
        technology: ['Vue', 'Vuex', 'Vue-router', 'Vue-Cli3+'],
        miaoshu: '该项目主要适用于目前的微服务框架，使前端的页面、模块、组件更灵活，能使用在多个项目上',
        zhize: [
            '支持整体打包、单模块打包、测试环境打包、线上（生产）环境打包',
            '支持在安卓、Web等环境下运行'
        ]
    }, {
        name: "组件框架（Element-Plus）",
        time: "至今",
        link: "",
        technology: ['Vue', 'Vuex', 'Vue-router', 'WebPack', 'Vue-Cli3+'],
        miaoshu: '该项目主要解决第三方厂商对接微应用的问题',
        zhize: [
            '打包框架模版，提供第三方厂商一起共用的模版框架',
            '提供多个公用方法、插件供第三方厂商使用',
            '支持在安卓、Web等环境下运行'
        ]
    }, {
        name: "Web开发框架（React）",
        time: "2019年09月-2019年10月",
        link: "https://www.npmjs.com/package/echarts-3d",
        technology: ['echarts', 'WebPack'],
        miaoshu: '一款好用的3D柱状图',
        zhize: [
            'echarts的3D柱状图',
            '支持前端多种框架调用'
        ]
    }
]

export const getModelData = () => {
    return modelData;
}



