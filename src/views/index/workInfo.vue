<template>
    <div id="workInfo" class="workInfo text-center">
        <div class="container">
            <div class="section-title center">
                <h2>人生 <strong> 经历</strong></h2>
                <hr>
                <p>热爱互联网，热爱技术，专注于前端技术开发和用户体验</p>
            </div>
            <div class="workInfo-row">
                <div class="workInfo-row-item col-md-3 col-sm-6">
                    <div class="thumbnail">
                        <img src="https://inews.gtimg.com/newsapp_bt/0/14997110359/1000" alt="广州城市理工学院" class="img-circle team-img">
                        <div class="caption">
                            <h3>广州城市理工学院</h3>
                            <p>计算机专业</p>
                            <p>2021.09-2025.06</p>
                            <p>寒假自主参加服创比赛并获得省级三等奖，esg金融项目校级通过，三下乡省级团队，自主内驱力学习前端技术...</p>
                        </div>
                    </div>
                </div>
                <div class="workInfo-row-item col-md-3 col-sm-6">
                    <div class="thumbnail">
                        <img src="../../assets/img/logo.png" alt="esg金融数据设计" class="img-circle team-img">
                        <div class="caption">
                            <h3>esg金融前端开发</h3>
                            <p>web前端开发工程师、前端技术总监</p>
                            <p>2023.3-至今</p>
                            <p>负责搭建相关的前端框架、制定技术规范、编码等相关的前端工作...</p>
                        </div>
                    </div>
                </div>
                <div class="workInfo-row-item col-md-3 col-sm-6">
                    <div class="thumbnail">
                        <img src="../../assets/img/bisai.jpeg" alt="esg金融数据设计" class="img-circle team-img">
                        <div class="caption">
                            <h3>大学生服务外包创新创业大赛</h3>
                            <p>web前端开发工程师、前端技术成员</p>
                            <p>2023.1-2023.5</p>
                            <p>负责搭建相关的前端框架、制定技术规范、编码等相关的前端工作...</p>
                        </div>
                    </div>
                </div>
  
                <div class="workInfo-row-item col-md-3 col-sm-6">
                    <div class="thumbnail">
                        <img src="../../assets/img/zijie.jpg" alt="三下乡活动" class="img-circle team-img">
                        <div class="caption">
                            <h3>字节跳动前端青训营</h3>
                            <p>前端学习成员</p>
                            <p>2023.4-2023.5</p>
                            <p>通过学习了解前端开发整体流程并顺利通过层层考核荣获结营证书</p>
                        </div>
                    </div>
                </div>
                <div class="workInfo-row-item col-md-3 col-sm-6">
                    <div class="thumbnail">
                        <img src="../../assets/img/sanxiaxiang.jpg" alt="三下乡活动" class="img-circle team-img">
                        <div class="caption">
                            <h3>三下乡活动</h3>
                            <p>三下乡摄影，主要剪辑人员</p>
                            <p>2022.8.1-2022.9</p>
                            <p>负责场景的摄像以及对相关任务的使用finalcutpro视频剪辑，并获得省级视频三等奖，优秀团队等奖项</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "workInfo"
    }
</script>

<style lang="less" scoped>
    .workInfo {
        padding: 80px 0;
        background: #ffffff;
        background: linear-gradient(to bottom, #ffffff 0%, #cccccc 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#cccccc', GradientType=0);

        &-row {
            display: block;
            text-align: center;

            img.img-circle.team-img {
                width: 120px;
                height: 120px;
                border: 4px solid transparent;
                transition: all 0.5s;
            }

            &-item {
                height: 360px;
                float: none;
                display: inline-flex;
                margin: 10px 0;

                .thumbnail {
                    width: 100%;
                    height: 100%;
                    border: 0;

                    &:hover {
                        z-index: 2;
                        box-shadow: 0 15px 30px rgba(0, 0, 0, .7);
                        transform: translate3d(0, -2px, 0);
                        transition: all 0.8s;
                    }

                    .caption {
                        padding: 9px;
                        color: #5a5a5a;
                    }
                }
            }
        }
    }


</style>