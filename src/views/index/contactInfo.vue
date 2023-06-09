<template>
    <div id="contactInfo" class="contactInfo text-center">
        <div class="container">
            <div class="section-title center">
                <h2><strong>联系 </strong> 方式</h2>
                <hr>
            </div>
            <div class="col-md-12">
                <div class="col-md-3">
                    <a href="Mailto:90452171@qq.com">
                        <i class="fa fa-envelope-o fa-2x"></i>
                        <p>邮箱：904752171@qq.com</p>
                    </a>
                </div>
                <div class="col-md-3">
                    <a href="https://github.com/JunJ233" target="_blank">
                        <i class="fa fa-github fa-2x"></i>
                        <p>GitHub：https://github.com/JunJ233</p>
                    </a>
                </div>
                <div class="col-md-3">
                    <a href="https://blog.csdn.net/x904752171u?spm=1000.2115.3001.5343" target="_blank">
                        <i class="fa fa-edge fa-2x"></i>
                        <p>CSDN：https://blog.csdn.net/x904752171u</p>
                    </a>
                </div>
                <div class="col-md-3">
                    <a href="tel:13808874743">
                        <i class="fa fa-phone fa-2x"></i>
                        <p>手机：13808874743</p>
                    </a>
                </div>
                <hr>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "contactInfo"
    }
</script>

<style lang="less" scoped>
    .contactInfo {
        padding: 80px 0;
        background: #ffffff;
        background: linear-gradient(to bottom, #ffffff 0%, #cccccc 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#cccccc', GradientType=0);

        h3 {
            font-size: 20px;
            font-weight: 400;
            text-transform: uppercase;
        }

        form {
            padding: 30px 0;
        }

        .fa {
            color: #F4D03F;
            margin-bottom: 10px;
        }

        .text-danger {
            color: #ff3333;
            text-align: left;
        }

        .form-control {
            display: block;
            width: 100%;
            padding: 6px 12px;
            font-size: 14px;
            line-height: 1.42857143;
            color: #555;
            background-color: #fff;
            background-image: none;
            border: 1px solid #ccc;
            border-radius: 2px;
            box-shadow: none;
            transition: none;

            &:focus {
                border-color: inherit;
                outline: 0;
                -webkit-box-shadow: transparent;
                box-shadow: transparent;
            }
        }

        .btn {
            background-color: #aaa;
            border: 0;
            border-radius: 4px;
            padding: 10px 20px;
            color: #ffffff;
            margin-top: 15px;

            &:hover, &:focus {
                background: #F4D03F;
            }

            &:active, &.active {
                background-image: none;
                outline: 0;
                -webkit-box-shadow: none;
                box-shadow: none;
            }
        }

        a {
            color: #555;
        }

        a:focus,
        .btn:focus,
        .btn:active:focus,
        .btn.active:focus,
        .btn.focus,
        .btn:active.focus,
        .btn.active.focus {
            outline: none;
            outline-offset: none;
        }
    }
</style>