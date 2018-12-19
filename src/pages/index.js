require(["../scripts/config.js"], function() {
  require(["common", "jquery", "swiper", "bootstrap"], function(
    com,
    $,
    Swiper,
    boot
  ) {
    //================== Swiper首页轮播图 ===============
    var mySwiper = new Swiper(".swiper-container", {
      allowTouchMove: false, //关闭鼠标滑动
      autoplay: true, //可选选项，自动滑动
      loop: true, //环路
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      } //分页器
    });
    //鼠标进入停止计时器
    $(".swiper-container").on("mouseenter", function() {
      mySwiper.autoplay.stop();
    });
    //鼠标离开计时器开启
    $(".swiper-container").on("mouseleave", function() {
      mySwiper.autoplay.start();
    });

    //=================== 电梯 ===================
    var $nav = $(".zbxf");

    $(window).scroll(function() {
      //滚动到一定，显示楼层导航
      var scrollTop = $(this).scrollTop();
      if (scrollTop >= 519) {
        $nav.show();
      } else {
        $nav.hide();
      }
      //根据滚动距离计算当前楼层，改变导航
      var index = Math.ceil((scrollTop - 989) / 878);
      // console.log(index)
      // if(index < 0){
      //   index = 0;
      // }else{
      //   index+1
      // }
      if (index < 0) {
        index = 0;
      }
      $(".zbxf li")
        .eq(index)
        .find("span")
        .addClass("active");
      $(".zbxf li")
        .eq(index)
        .siblings()
        .find("span")
        .removeClass("active");
    });
    //单击楼层导航，页面滚动到指定楼层
    $(".zbxf li").click(function() {
      //改变楼层导航样式
      $(this)
        .siblings()
        .find("span")
        .removeClass("active");
      $(this)
        .find("span")
        .addClass("active");
      // console.log($(this));
      var index = $(this).index();
      var _top = $(".main .Louti")
        .eq(index)
        .position().top;
      $("html").animate(
        {
          scrollTop: _top + 500
        },
        500
      );
    });

    //============== ajax数据请求 ==============
    $.ajax({
      url:
        "https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=233,266,267",
      dataType: "jsonp",
      success: function(data) {
//===================渲染商品列表========================
        var $list = data.block_266[0].node;
        var str = "";
        $.each($list, function(index, value) {
          str += ` <li>
          <a href="${value.href}" title="${value.name}">
            <div class="box_cont">
              <div class="box_img">
                <img
                  src="${value.img}"
                  title="${value.name}"
                />
                <div class="box_bg"></div>
                <div class="box_tit" title="${value.name}">
                ${value.name}
                </div>
              </div>
              <div class="jiaqian">
                RMB <span class="jq">${
                  value.skuprice
                }</span> <span class="cj">${value.skuprice}</span>
              </div>
            </div>
          </a>
        </li>`;
        });
        var $oxbx = $(".zq_box");
        $oxbx.html(str);

//================渲染秒杀列表======================
        var $list2 = data.block_266[1].node;
        var str = "";
        $.each($list2, function(index, value) {
          if (index < 3) {
            str += `  <li>
          <a href="${value.href}">
            <div class="plr5 hights">
              <p class="proname">
                <strong>${value.name}</strong>
              </p>
              <p class="dpj"><span class="gray">${value.skuprice}</span></p>
              <p class="sjj">
                <span class="deepRed">  <font>${value.skuprice}</font> </span>
              </p>
              <span class="bluesbtn  hights">
                <span class="btntext">立即购买 </span>
              </span>
              <p></p>
            </div>
            <img
              src="../static/images/indexms2.png"
              class="miaosha-bg"
            />
            <p class="miaosha-tp">
              <img
                src="${value.img}"
                class="tupian"
              />
            </p>
          </a>
        </li>`;
          }
        });
        var $msss = $(".msss");
        $msss.html(str);
      }
    });



  });
});
