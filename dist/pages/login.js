"use strict";require(["../scripts/config.js"],function(){require(["common","jquery","swiper","bootstrap","jquery.code"],function(e,o,r,t){o(function(){o(".code").createCode({len:4})}),o("input#smslogimgcheck").blur(function(){o(this).val().toLowerCase()!==o(".code").children("input").val().toLowerCase()?alert("验证码不正确"):alert("验证通过")})})});