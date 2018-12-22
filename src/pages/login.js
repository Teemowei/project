require(["../scripts/config.js"], function () {
    require(["common", "jquery", "swiper", "bootstrap","jquery.code"], function (
        com,
        $,
        Swiper,
        boot
    ) {
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