require(["../scripts/config.js"], function () {
    require(["common", "jquery", "swiper", "bootstrap","jquery.code"], function (
        com,
        $,
        Swiper,
        boot
    ) {

        //========== 登入方式点击切换 ==========
        var $zhdr = $('#UserNameToLoginDiv')
        var $dxkjdr = $('#SmsToLoginDiv')
        $(".login-tab-l").on("click", function () {
            $zhdr.css({
                "display": "block",
            })
            $dxkjdr.css({
                "display": "none",
            })
            $("#UserNameToLogin").css({
                "font-weight": "700",
                "color": "#e4393c"
            })
            $("#SmsToLogin").css({
                "font-weight": "300",
                "color": "#000"
            })
        })
        $('.login-tab-r').on("click", function () {
            $dxkjdr.css({
                "display": "block"
            })
            $zhdr.css({
                "display": "none"
            })
            $("#SmsToLogin").css({
                "font-weight": "700",
                "color": "#e4393c"
            })
            $("#UserNameToLogin").css({
                "font-weight": "300",
                "color": "#000"
            })
        })

        //========== 验证码 ==========
        $(function () {
            $('.code').createCode({
                len: 4
            });
        });

        $("input#smslogimgcheck").blur(function () {
            if ($(this).val().toLowerCase() !== $('.code').children('input').val().toLowerCase()) {
                alert('验证码不正确')
            } else {
                alert('验证通过')
            }
        })
    });
});