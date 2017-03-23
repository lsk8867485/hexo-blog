/**
 * Created by Administrator on 2017/3/23.
 */
jQuery(document).ready(function ($) {
    $("body").append('<div id="spig" class="spig"><div id="message"></div><div id="mumu"class="mumu"></div></div>').mousedown(function (e) {
        if (e.which == 3) {
            showMessage("告诉你一个秘密，我家主人还是单身哦！", 10000)
        }
    }).bind("contextmenu", function (e) {
        return false
    });
    $("#message").hover(function () {
        $("#message").fadeTo("100", 1)
    });
    $(".mumu").mouseover(function () {
        $(".mumu").fadeTo("300", 0.3);
        msgs = ["我隐身了，你看不到我", "我会隐身哦！嘿嘿！", "别动手动脚的，把手拿开！", "把手拿开我才出来！"];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i])
    }).mouseout(function () {
        $(".mumu").fadeTo("300", 1)
    });
    if (isindex) {
        var now = (new Date()).getHours();
        if (now > 0 && now <= 6) {
            showMessage(visitor + " 你是夜猫子呀？还不睡觉，明天起的来么你？", 6000)
        } else {
            if (now > 6 && now <= 11) {
                showMessage(visitor + " 早上好，早起的鸟儿有虫吃噢！早起的虫儿被鸟吃，你是鸟儿还是虫儿？嘻嘻！", 6000)
            } else {
                if (now > 11 && now <= 14) {
                    showMessage(visitor + " 中午了，吃饭了么？不要饿着了，饿死了谁来挺我呀！", 6000)
                } else {
                    if (now > 14 && now <= 18) {
                        showMessage(visitor + " 下午的时光真难熬！还好有你在！", 6000)
                    } else {
                        showMessage(visitor + " 快来逗我玩吧！", 6000)
                    }
                }
            }
        }
    } else {
        showMessage("欢迎" + visitor + "来到Falost的小窝阅读《" + title + "》", 6000)
    }
    $(".spig").animate({top: $(".spig").offset().top + 300, left: document.body.offsetWidth - 160}, {
        queue: false,
        duration: 1000
    });
    $("#menu-item-546").click(function () {
        showMessage("主人如果写的不好，可以指点指点哦！")
    }).mousemove(function () {
        showMessage("这里是我家主人写的一些小 Demo 哦，不妨进去看看！")
    });
    $("h2 a").click(function () {
        showMessage('正在用吃奶的劲加载《<span style="color:#0099cc;">' + $(this).text() + "</span>》请稍候")
    }).mouseover(function () {
        showMessage('要看看《<span style="color:#0099cc;">' + $(this).text() + "</span>》这篇文章么？")
    });
    $(".blogroll li a").mouseover(function () {
        showMessage('去 <span style="color:#0099cc;">' + $(this).text() + "</span> 逛逛")
    });
    $(".btn-inverse .fa-comment-o").mouseover(function () {
        showMessage('<span style="color:#0099cc;">' + visitor + "</span> 向评论栏出发吧！")
    });
    $("#submit").mouseover(function () {
        showMessage("确认提交了么？")
    });
    $(".toggle-search").mousemove(function () {
        showMessage("输入你想搜索的关键词再按Enter(回车)键就可以搜索啦!")
    });
    $("#menu-item-16").mouseover(function () {
        showMessage("我要回到首页啦！")
    });
    $("#menu-item-583").mouseover(function () {
        showMessage("快来留下的你的脚印吧！XXX到此一游")
    });
    $("#Addlike").mouseover(function () {
        showMessage("点击下会有惊喜发生哦！")
    });
    $(".nav li a").mouseover(function () {
        showMessage("点击查看此分类下得所有文章")
    });
    $(".btn-inverse .fa-arrow-up").mouseover(function () {
        showMessage("点它可以返回网页最顶端.")
    });
    $("#tho-shareto span a").mouseover(function () {
        showMessage("你知道吗?点它可以分享本文到" + $(this).attr("title"))
    });
    $("#shang-main-p").mouseover(function () {
        showMessage("打赏下呗，主人都没钱给我买狗粮了。。汪。。汪。。汪")
    });
    $("#nodercms").mouseover(function () {
        showMessage("基于Node.Js的轻量级 CMS 内容管理系统,快去瞅瞅看！")
    });
    window.setInterval(function () {
        msgs = ["陪我聊天吧！", "右击有惊喜哦！", "好无聊哦，你都不陪我玩！", "…@……!………", "^%#&*!@*(&#)(!)(", "我可爱吧！嘻嘻!~^_^!~~", "谁淫荡呀?~谁淫荡?，你淫荡呀!~~你淫荡！~~", "从前有座山，山上有座庙，庙里有个老和尚给小和尚讲故事，讲：“从前有座……”"];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 10000)
    }, 35000);
    window.setInterval(function () {
        msgs = ["乾坤大挪移！", "我飘过来了！~", "我飘过去了", "我得意地飘！~飘！~"];
        var i = Math.floor(Math.random() * msgs.length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
        $(".spig").animate({
            left: document.body.offsetWidth / 2 * (1 + s[i1]),
            top: document.body.offsetheight / 2 * (1 + s[i1])
        }, {duration: 2000, complete: showMessage(msgs[i])})
    }, 45000);
    $(".ds-textarea-wrapper textarea").click(function () {
        showMessage("认真填写哦！不然会被认作垃圾评论的！我的乖乖~");
        $(".spig").animate({
            top: $(".ds-textarea-wrapper textarea").offset().top - 70,
            left: $(".ds-textarea-wrapper textarea").offset().left + 370
        }, {queue: false, duration: 1000})
    });
    $("#author").click(function () {
        showMessage("留下你的尊姓大名！");
        $(".spig").animate({top: $("#author").offset().top - 70, left: $("#author").offset().left + 370}, {
            queue: false,
            duration: 1000
        })
    });
    $("#email").click(function () {
        showMessage("留下你的邮箱，不然就是无头像人士了！");
        $(".spig").animate({top: $("#email").offset().top - 70, left: $("#email").offset().left + 370}, {
            queue: false,
            duration: 1000
        })
    });
    $("#url").click(function () {
        showMessage("快快告诉我你的家在哪里，好让我去参观参观！");
        $(".spig").animate({top: $("#url").offset().top - 70, left: $("#url").offset().left + 370}, {
            queue: false,
            duration: 1000
        })
    });
    $("#comment").click(function () {
        showMessage("认真填写哦！不然会被认作垃圾评论的！我的乖乖~");
        $(".spig").animate({
            top: $("#comment").offset().top - 70,
            left: $("#comment").offset().left + 370
        }, {queue: false, duration: 1000})
    });
    var spig_top = 50;
    var f = $(".spig").offset().top;
    $(window).scroll(function () {
        $(".spig").animate({top: $(window).scrollTop() + f + 300}, {queue: false, duration: 1000})
    });
    var stat_click = 0;
    $(".mumu").click(function () {
        if (!ismove) {
            stat_click++;
            if (stat_click > 4) {
                msgs = ["你有完没完呀？", "你已经摸我" + stat_click + "次了", "非礼呀！救命！OH，My ladygaga"];
                var i = Math.floor(Math.random() * msgs.length)
            } else {
                msgs = ["筋斗云！~我飞！", "我跑呀跑呀跑！~~", "别摸我，大男人，有什么好摸的！", "惹不起你，我还躲不起你么？", "不要摸我了，我会告诉老婆来打你的！", "干嘛动我呀！小心我咬你！"];
                var i = Math.floor(Math.random() * msgs.length)
            }
            s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.75];
            var i1 = Math.floor(Math.random() * s.length);
            var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
                left: document.body.offsetWidth / 2 * (1 + s[i1]),
                top: document.body.offsetheight / 2 * (1 + s[i1])
            }, {duration: 500, complete: showMessage(msgs[i])})
        } else {
            ismove = false
        }
    })
});
function showMessage(a, b) {
    if (b == null) {
        b = 10000
    }
    jQuery("#message").hide().stop().html(a).fadeIn().fadeTo("1", 1).fadeOut(b)
}
var _move = false;
var ismove = false;
var _x, _y;
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        _move = true;
        _x = e.pageX - parseInt($("#spig").css("left"));
        _y = e.pageY - parseInt($("#spig").css("top"))
    });
    $(document).mousemove(function (e) {
        if (_move) {
            var x = e.pageX - _x;
            var y = e.pageY - _y;
            var wx = $(window).width() - $("#spig").width();
            var dy = $(document).height() - $("#spig").height();
            if (x >= 0 && x <= wx && y > 0 && y <= dy) {
                $("#spig").css({top: y, left: x});
                ismove = true
            }
        }
    }).mouseup(function () {
        _move = false
    })
});