let projectData = [
    {
        name: "智能排版系统（Web）",
        time: "2023年2月-2023年5月",
        technology: ['Vue', 'Vuex', 'Vue-router', 'Axios', 'echarts', 'element-ui,""qs","less-loader","core.js"'],
        miaoshu: '该项目是一个智能排版系统项目，主要为用户解决了员工排版管理的问题',
        zhize: [
            '负责"后台管理系统的排版规则","商店信息"模块的增删改差，编码、联调、测试',
            '解决了项目中遇到的"参数接收问题"、"跨域"困难、等技术难点',
            '配合完成了"前端页面优化"、"前端数据接口"工作'
        ]
    }, {
        name: "ESG金融信息碎片化整合项目",
        time: "2023年4月-至今",
        technology: ['Vue', 'Vuex', 'Vue-router', 'Axios', 'echarts', 'less','element-plus'],
        miaoshu: '该项目是一个协助用户查看各个产业的金融数据的项目，主要为用户解决了能更直观了解产业的金融数据的问题',
        zhize: [
            '负责"金融数据的展示","页面部署"等模块的编码、联调、测试',
            '解决了项目中遇到的"接口函数化使用"、"组件高度复用"困难、技术难点',
            '配合完成了"碎片化展示的基础功能"、"登录注册"等工作'
        ]
    }, 
]

export const getProjectData = () => {
    return projectData;
}