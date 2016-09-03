/* v1.1.14,1.1.15,1 2016-08-18 14:13:07 */
!
function() {
	function cond() {
		return Math.random()
	}
	function chkQuerySet() {
		var e, t = window[QUERY_KEY];
		return isNaN(t) ? (e = location.href.split(QUERY_KEY + "=")[1], t = parseFloat(e), void(isNaN(t) || (GREY_RATIO = t))) : void(GREY_RATIO = t)
	}
	var GREY_RATIO = 1,
		QUERY_KEY = "aq-nc-grey-ratio",
		STABLE_ACTION = function() {},
		NEW_ACTION = function() {
			!
			function e(t, n, i) {
				function a(c, r) {
					if (!n[c]) {
						if (!t[c]) {
							var s = "function" == typeof require && require;
							if (!r && s) return s(c, !0);
							if (o) return o(c, !0);
							throw new Error("Cannot find module '" + c + "'")
						}
						var l = n[c] = {
							exports: {}
						};
						t[c][0].call(l.exports, function(e) {
							var n = t[c][1][e];
							return a(n ? n : e)
						}, l, l.exports, e, t, n, i)
					}
					return n[c].exports
				}
				for (var o = "function" == typeof require && require, c = 0; c < i.length; c++) a(i[c]);
				return a
			}({
				1: [function(e, t, n) {
					"use strict";
					!
					function(e, t) {
						var n = e.createElement("style");
						if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);
						else try {
							n.innerHTML = t
						} catch (i) {
							n.innerText = t
						}
					}(document, '@charset "utf-8";\n@font-face{font-family:\'nc_iconfont\';src:url("//at.alicdn.com/t/font_1465353706_4784257.eot");src:url("//at.alicdn.com/t/font_1465353706_4784257.eot?#iefix") format(\'embedded-opentype\'),url("//at.alicdn.com/t/font_1465353706_4784257.woff") format(\'woff\'),url("//at.alicdn.com/t/font_1465353706_4784257.ttf") format(\'truetype\'),url("//at.alicdn.com/t/font_1465353706_4784257.svg#iconfont") format(\'svg\')}.nc-container div#nc-loading-circle{background:transparent;width:20px;height:20px;display:inline-block;position:relative;vertical-align:middle}.nc-container div#nc-loading-circle .sk-circle{background:transparent;width:100%;height:100%;position:absolute;left:0;top:0}.nc-container #nc-loading-circle .sk-circle:before{content:\'\';display:block;margin:0 auto;width:15%;height:15%;background-color:#818181;border-radius:100%;-webkit-animation:sk-circleFadeDelay 1.2s infinite ease-in-out both;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}.nc-container #nc-loading-circle .sk-circle2{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.nc-container #nc-loading-circle .sk-circle3{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.nc-container #nc-loading-circle .sk-circle4{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.nc-container #nc-loading-circle .sk-circle5{-webkit-transform:rotate(120deg);-ms-transform:rotate(120deg);transform:rotate(120deg)}.nc-container #nc-loading-circle .sk-circle6{-webkit-transform:rotate(150deg);-ms-transform:rotate(150deg);transform:rotate(150deg)}.nc-container #nc-loading-circle .sk-circle7{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.nc-container #nc-loading-circle .sk-circle8{-webkit-transform:rotate(210deg);-ms-transform:rotate(210deg);transform:rotate(210deg)}.nc-container #nc-loading-circle .sk-circle9{-webkit-transform:rotate(240deg);-ms-transform:rotate(240deg);transform:rotate(240deg)}.nc-container #nc-loading-circle .sk-circle10{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.nc-container #nc-loading-circle .sk-circle11{-webkit-transform:rotate(300deg);-ms-transform:rotate(300deg);transform:rotate(300deg)}.nc-container #nc-loading-circle .sk-circle12{-webkit-transform:rotate(330deg);-ms-transform:rotate(330deg);transform:rotate(330deg)}.nc-container #nc-loading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.nc-container #nc-loading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.nc-container #nc-loading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.nc-container #nc-loading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.nc-container #nc-loading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.nc-container #nc-loading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.nc-container #nc-loading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.nc-container #nc-loading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.nc-container #nc-loading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.nc-container #nc-loading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.nc-container #nc-loading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}@-webkit-keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}.nc-container .scale_text2 #nc-loading-circle .sk-circle:before{background-color:#fff}.nc_iconfont{font-family:"nc_iconfont";color:#ff3f08;font-size:16px;font-style:normal}.captcha-error .icon_ban{float:left;font-size:16px;padding-right:5px;line-height:14px}.clickCaptcha_text .btn_refresh{font-style:normal;cursor:pointer;background:#fff;color:#737383}.imgCaptcha .btn_refresh{font-size:20px;cursor:pointer;background:#fff;color:#737383}.nc_voice{display:none;position:relative;margin-top:-34px;z-index:99;width:auto;height:34px;background:#fff}.omeo-code-img,.omeo-code-audio{font-size:0;text-align:left}.omeo-code-audiobox,.omeo-code-img a,.omeo-code-audio a,.omeo-code-state{display:inline-block;*display:inline;zoom:1;height:32px;vertical-align:top;font-size:12px}.omeo-code .omeo-code-refresh{background:transparent;width:32px;height:32px;font-size:20px;color:#888;text-align:center;text-decoration:none;padding-left:4px;line-height:32px}.omeo-code .omeo-switch{display:none;width:32px;height:32px;border-left:1px solid #e1e1e1;background-image:url("//g.alicdn.com/sd/ncpc/images/checkcode.png");background-repeat:no-repeat}.omeo-img-active .omeo-code-img{display:block}.omeo-img-active .omeo-code-audio{display:none}.omeo-code-img img{border:1px solid #cdcdcd;cursor:pointer}.omeo-code-img .omeo-switch{background-position:9px -41px}.omeo-audio-active .omeo-code-audio{display:block}.omeo-audio-active .omeo-code-img{display:none}.omeo-code-refresh{position:relative;left:95px}.omeo-code-audiobox{position:relative;height:30px;line-height:32px;border:1px solid #e1e1e1;text-align:center;overflow:hidden;left:100px;top:1px;width:45%;min-width:80px;background-color:#eee}.omeo-code-audiobox a{display:block;text-decoration:none;color:#06c}.omeo-code-audiobox-playing a{visibility:hidden}.omeo-code-audiobox span,.omeo-code-audiobox b{visibility:hidden;position:absolute;top:0;left:0;height:30px;font-weight:100;overflow:hidden}.omeo-code-audiobox-playing span,.omeo-code-audiobox-playing b{visibility:visible}.omeo-code-audiobox span{z-index:0;width:0;background:#186bca}.omeo-code-audiobox b{width:100%;z-index:1;text-align:left;text-indent:30px;color:#999;background:url("//g.alicdn.com/sd/ncpc/images/checkcode.png") no-repeat 14px -89px}.omeo-code-audio .omeo-switch{background-position:5px 10px}input[type=text]::-ms-clear{display:none}.omeo-box{position:relative;background-color:#fff}.omeo-code-echo{position:absolute;top:2px;left:2px}.omeo-code-echo input{padding:5px;height:18px;line-height:18px;border:1px solid #ddd;width:80px;outline:0}.omeo-code-state{height:30px;line-height:30px;text-indent:25px;white-space:nowrap;background-image:url("//g.alicdn.com/sd/ncpc/images/checkcode.png");background-repeat:no-repeat;background-position:100px 100px}.omeo-code-echo .omeo-code-state-error{width:auto;background-position:7px -193px}.omeo-code-echo .omeo-code-state-success{position:absolute;width:30px;background-position:7px -243px}.omeo-code-state{position:absolute;left:0;top:28px}.nc_voice_close{display:inline-block;position:relative;cursor:pointer;left:95px;top:0;border-left:#ddd 2px solid;padding:0 0 0 7px;background-color:#fff;font-size:20px;color:#888;line-height:32px}.nc_help{position:absolute;width:100%;height:100%;left:0;top:0;z-index:99999}.nc_help .mask{background-color:#000;opacity:.5;filter:alpha(opacity=50);width:100%;height:100%;top:0;left:0}.nc_btn_close{position:absolute;height:20px;left:500px;border-radius:20px;padding:10px 30px;background-color:#aaa;color:#fff;cursor:pointer;z-index:10}.nc_btn_close:hover{background-color:#afafaf}.nc_hand{position:absolute;width:68px;height:53px;background-image:url("//g.alicdn.com/sd/ncpc/images/hand.png");z-index:3}.nc_slide_bg{z-index:3;font-size:12px;text-align:center;color:#fff;line-height:34px}.nc_voicebtn{position:absolute;padding:0;right:-25px;font-size:23px;color:#888;cursor:pointer;line-height:34px}.nc_helpbtn{position:absolute;cursor:pointer;right:-95px;top:4px;font-size:12px;background-color:#ffb668;color:#fff;padding:4px;border-radius:2px;line-height:18px;display:none}.nc_helpbtn:before{width:0;height:0;content:"";position:absolute;left:-2px;top:6px;border-top:4px solid transparent;border-bottom:4px solid transparent;border-right:4px solid #ffb668}.nc-container .errloading{border:#faf1d5 1px solid;text-indent:3px;background-image:none;font-size:12px;width:290px;line-height:20px;padding:7px 5px 8px 5px;color:#ef9f06;}.nc-container .errloading a{color:#30a7fc}.nc_captcha_text .nc_err{float:left;text-indent:0}.button_move{transition:left .5s;-moz-transition:left .5s;-webkit-transition:left .5s;-o-transition:left .5s}.bg_move{transition:width .5s;-moz-transition:width .5s;-webkit-transition:width .5s;-o-transition:width .5s}.nc_slide_box{position:absolute}.nc_captcha_text{height:auto;line-height:20px;visibility:hidden;font-size:12px;color:#999;font-weight:normal}.nc-container .nc_captcha_img_text{width:auto;height:auto;line-height:20px;visibility:hidden;font-size:12px;color:#999;font-weight:normal;display:none;padding:0 0 10px 0;background-position:0 0;}.nc-container .nc_captcha_img_text span.nc-lang-cnt{line-height:inherit}.nc-container .imgCaptcha .nc_captcha_img_text{width:auto}.nc_captcha_img_text{height:auto;line-height:20px;visibility:hidden;font-size:12px;color:#999;font-weight:normal;display:none;padding:0 0 10px 3px;background-position:0 0}.nc-container .nc_wrapper{width:auto}.nc_scale{width:auto;height:34px;background:#e8e8e8;position:relative;margin:0;padding:0}.nc_scale.is_audio{margin-right:25px}.nc-container .nc_scale div{height:auto}.nc-container .nc_scale ul{list-style:none}.nc-container .nc_scale .btn_slide{color:#737383;background-image:none}.nc-container .nc_scale span{text-align:center;width:40px;height:32px;line-height:32px;border:1px solid #ccc;position:absolute;left:0;cursor:move;background:#fff;z-index:2}.nc-container .nc_scale span.nc-lang-cnt{*line-height:34px;float:none;width:auto;height:auto;*height:34px;border:none;position:static;cursor:inherit;background:none;z-index:0;display:inline}.nc_slide_button{width:40px;height:32px;border:1px solid #ccc;position:absolute;left:0;cursor:move;background:#fff url("//g.alicdn.com/sd/ncpc/images/rt.png") no-repeat center;z-index:2}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.nc_scale span{height:32px}}.nc-container .nc_scale .btnok{cursor:default;background:#fff url("//g.alicdn.com/sd/ncpc/images/yes.png") no-repeat center;z-index:3}.nc-container .nc_scale .btnok2{cursor:default;font-size:20px;background:#fff url("//g.alicdn.com/sd/ncpc/images/no.png") no-repeat center;z-index:3}.nc-container .nc_scale .btn_warn{cursor:default;color:#ff3f08;line-height:34px;text-align:center;font-size:20px;background:#fff;z-index:3}.nc-container .clickCaptcha_text .btn_refresh{font-size:20px}.nc-container .clickCaptcha_text .icon_close{line-height:30px;margin-left:8px;cursor:default;color:#ff3f08;font-size:16px;float:left;margin-right:2px;background:transparent;z-index:3}.nc-container .nc_captcha_img_text .icon_close{cursor:default;color:#ff3f08;font-size:16px;float:left;margin-right:4px;background:transparent;z-index:3;line-height:18px}.nc-container .errloading .icon_warn{cursor:default;color:#ff3f08;font-size:18px;float:left;background:transparent;z-index:3}.nc-container .nc_scale .btn_ok{cursor:default;line-height:34px;text-align:center;font-size:20px;background:#fff;z-index:3;color:#76c61d}.nc-container .nc_scale .nc_ok,.nc-container .nc_scale .nc_bg{background:#7ac23c}.nc-container .nc_scale .nc_bg{position:absolute;height:100%;_height:34px;left:0;width:10px}.nc-container .nc_scale div.redbar{background:#fc461e;opacity:.5;filter:alpha(opacity=50)}.nc-container .nc_scale div.orange{background:#f00}.nc-container .nc_scale .scale_text{width:100%;height:100%;text-align:center;position:absolute;z-index:1;background:transparent;color:#9c9c9c;line-height:34px;font-size:12px;cursor:pointer}.nc-container .nc_scale .scale_text2{text-align:left;color:#fff;font-size:12px;text-indent:10px}.nc-container .nc_scale .scale_text2 b{padding-left:0;font-weight:normal}.nc-container .nc_scale .scale_text.scale_loading_text{text-align:center}.nc-container .nc_scale .imgCaptcha,.nc-container .nc_scale .clickCaptcha{display:none;overflow:hidden;border:1px solid #ccc;background:#fff;z-index:20000;}.nc-container .nc_scale .imgCaptcha p.error span,.nc-container .nc_scale .clickCaptcha p.error span{line-height:normal}.nc-container .nc_scale .imgCaptcha{height:auto}.nc-container .nc_scale .clickCaptcha{position:absolute;left:0;top:35px;height:270px;background:#fff;display:none;}.nc-container .nc_scale .clickCaptcha p.error i{color:#ff3f08;font-style:normal}.nc-container .nc_scale .clickCaptcha div{position:static;clear:both;width:100%;background:#fff;height:auto}.nc-container .nc_scale .clickCaptcha .clickCaptcha_text{height:30px;line-height:30px;font-size:12px;color:#999;}.nc-container .nc_scale .clickCaptcha .clickCaptcha_text b{font-weight:normal}.nc_btn_2{position:absolute;right:0;top:0;cursor:pointer;margin:2px 9px 0 0}.nc_iconfont.nc_btn_2{position:absolute;right:0;top:0;cursor:pointer}.nc_iconfont.nc_btn_1{position:absolute;top:10px;right:5px}.nc_btn_1{top:10px;right:10px}.scale_text i{font-style:normal;border:none;position:static;cursor:default;color:#fffc00;background:none;display:inline;width:100%}.nc-container .clickCaptcha .clickCaptcha_img{margin:0 auto;clear:both;position:relative;}.nc-container .clickCaptcha .clickCaptcha_img img{width:230px;height:230px;margin-left:10px;margin-top:5px}.nc-container .clickCaptcha .clickCaptcha_btn{margin:10px 0 0 15px;position:relative;text-align:left;}.nc-container .clickCaptcha .clickCaptcha_btn img{cursor:pointer}.nc-container .imgCaptcha{position:absolute;left:0;top:35px;height:auto;padding-bottom:15px;border:1px solid #ccc;background:#fff;}.nc-container .imgCaptcha div{position:static;width:90%;background-color:#fff}.nc-container .imgCaptcha,.nc-container .clickCaptcha{text-align:left;}.nc-container .imgCaptcha a,.nc-container .clickCaptcha a{color:#ff3f08}.nc-container .imgCaptcha .imgCaptcha_text{height:42px;line-height:42px;width:120px;background:#fff;font-size:14px;text-align:left;color:#747474;float:left;margin-left:10px;}.nc-container .imgCaptcha .imgCaptcha_text input{margin-top:5px;height:30px;line-height:30px;font-size:14px;width:90px;background:#fff}.nc-container .imgCaptcha .imgCaptcha_text input:focus{outline:none;color:#bbb}.nc-container .imgCaptcha .imgCaptcha_btn{margin:0 0 0 12px;*margin-left:0;clear:both;padding-top:5px;width:90%;}.nc-container .imgCaptcha .imgCaptcha_btn img{cursor:pointer}.nc-container .imgCaptcha .nc_scale_submit{margin:0 auto;cursor:pointer;background-color:#fc461e;width:120px;height:32px;line-height:32px;color:#fff;text-align:center}.nc-container .imgCaptcha .imgCaptcha_img{margin:4px 0 0 100px;height:40px;width:130px;overflow:hidden;cursor:pointer;}.nc-container .imgCaptcha .imgCaptcha_img img{width:130px}.nc-container .imgCaptcha .imgCaptcha_img input{border:solid 1px #ccc}.nc-lang-ar_MA,.nc-lang-ar_SA,.nc-lang-iw_HE,.nc-lang-iw_IL{text-align:right;*text-align:left;}.nc-lang-ar_MA .nc_scale .scale_text2,.nc-lang-ar_SA .nc_scale .scale_text2,.nc-lang-iw_HE .nc_scale .scale_text2,.nc-lang-iw_IL .nc_scale .scale_text2{text-align:right;}.nc-lang-ar_MA .nc_scale .scale_text2 span,.nc-lang-ar_SA .nc_scale .scale_text2 span,.nc-lang-iw_HE .nc_scale .scale_text2 span,.nc-lang-iw_IL .nc_scale .scale_text2 span{*display:inline-block;padding:0 56px 0 0}.nc-lang-ar_MA .nc_captcha_img_text,.nc-lang-ar_SA .nc_captcha_img_text,.nc-lang-iw_HE .nc_captcha_img_text,.nc-lang-iw_IL .nc_captcha_img_text{*text-align:right}.nc-lang-ar_MA span.nc-lang-cnt,.nc-lang-ar_SA span.nc-lang-cnt,.nc-lang-iw_HE span.nc-lang-cnt,.nc-lang-iw_IL span.nc-lang-cnt{text-align:right;direction:rtl}.nocaptcha span.nc-lang-cnt{float:none;height:auto;line-height:30px}.nc-container{font-size:12px;-ms-touch-action:none;touch-action:none;}.nc-container p{margin:0;padding:0;display:inline}.nc-container .scale_text.scale_text span[data-nc-lang="_startTEXT"]{display:inline-block;width:100%}.nc-container .scale_text.scale_text.slidetounlock span[data-nc-lang="_startTEXT"]{background:-webkit-gradient(linear,left top,right top,color-stop(0,#4d4d4d),color-stop(.4,#4d4d4d),color-stop(.5,#fff),color-stop(.6,#4d4d4d),color-stop(1,#4d4d4d));-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-animation:slidetounlock 3s infinite;-webkit-text-size-adjust:none}.nc-container .nc_scale .nc-align-center.scale_text2{text-align:center;text-indent:-42px}@-webkit-keyframes slidetounlock{0%{background-position:-200px 0}100%{background-position:200px 0}}.nc-container.tb-login .clickCaptcha_text .icon_close{line-height:30px;margin-left:0;cursor:default;color:#ff3f08;font-size:16px;float:left;margin-right:0;background:transparent;z-index:3}.nc-container.tb-login{position:relative;margin-top:20px;display:none;}.nc-container.tb-login .nc_scale{width:auto;}.nc-container.tb-login .nc_scale .scale_text2{text-indent:-42px;text-align:center;}.nc-container.tb-login .nc_scale .scale_text2 b{padding:0}.nc-container.tb-login .nc_scale.nc_err div.scale_text{background:#f79977}.nc-container.tb-login .errloading{width:auto}.nc-container.tb-login .imgCaptcha,.nc-container.tb-login .clickCaptcha{width:252px;*width:256px;border:0;*height:300px;min-height:300px;max-height:inherit !important;}.nc-container.tb-login .imgCaptcha div.login-msg.error,.nc-container.tb-login .clickCaptcha div.login-msg.error{background:#fff2f2}.nc-container.tb-login .imgCaptcha .captcha-error,.nc-container.tb-login .clickCaptcha .captcha-error{position:absolute;top:0;width:244px;height:auto;margin-bottom:15px;padding:3px;border:solid 1px #ff8e8e;line-height:18px}.nc-container.tb-login .imgCaptcha .captcha-inform,.nc-container.tb-login .clickCaptcha .captcha-inform{font-size:110%;margin-left:20px}.nc-container.tb-login .imgCaptcha{padding-top:66px;}.nc-container.tb-login .imgCaptcha .imgCaptcha_text{width:100px;margin-left:0;}.nc-container.tb-login .imgCaptcha .imgCaptcha_text input:focus{color:#000}.nc-container.tb-login .imgCaptcha .imgCaptcha_img{width:120px;_width:100px}.nc-container.tb-login .imgCaptcha .imgCaptcha_btn{width:100%;margin-left:0}.nc-container.tb-login .imgCaptcha .nc_scale_submit{width:100%;height:36px;line-height:36px;margin-top:20px;margin-left:0;border-radius:3px;font-size:16px;font-family:Tahoma,Helvetica,Arial,sans-serif;background:#ff3f08}.nc-container.tb-login .clickCaptcha{padding-top:40px;}.nc-container.tb-login .clickCaptcha .clickCaptcha_text{text-indent:4px}.nc-container.tb-login .clickCaptcha .clickCaptcha_img img{margin-left:10px}.nc-container.tb-login .nc_btn_1{top:77px;_top:57px}.nc-container.tb-login .nc_btn_2{top:36px}.login .nc-container.tb-login .login-msg p,.login-box .nc-container.tb-login .login-msg p{width:auto;float:left}.nc-container.tb-login.nc-old-login{margin:20px 0 10px 0;width:250px;}.nc-container.tb-login.nc-old-login .nc_wrapper{width:250px}.nc-container.tb-login.nc-old-login .imgCaptcha,.nc-container.tb-login.nc-old-login .clickCaptcha{width:250px;min-height:auto;}.nc-container.tb-login.nc-old-login .imgCaptcha .captcha-error,.nc-container.tb-login.nc-old-login .clickCaptcha .captcha-error{line-height:16px}.nc-container.tb-login.nc-old-login .clickCaptcha{padding-top:28px;}.nc-container.tb-login.nc-old-login .clickCaptcha .clickCaptcha_img img{width:200px;height:200px}.nc-container.nc-old-login.show-click-captcha{padding-bottom:60px}.nc-container.nc-old-login.show-click-captcha.nc-tm-min-fix{padding-bottom:40px}.nc-container.tb-login.nc-tm-min-fix .clickCaptcha{max-height:340px !important}#content .login-box .bd .nc-container.tb-login .login-msg{margin:10px auto 15px auto}#content .login-box .bd .nc-container.tb-login.nc-old-login.show-click-captcha .login-msg{margin:2px 0 0 0}.nc-container .nc_scale .nc-cc{display:none;position:absolute;left:0;top:35px;z-index:20000;width:360px;height:570px;border:1px solid #5eaef1;border-radius:4px;background:#fff;font-size:14px;line-height:18px;color:#333;}.nc-container .nc_scale .nc-cc.nc-cc-status-loading .nc-cc-btn,.nc-container .nc_scale .nc-cc.nc-cc-status-verifing .nc-cc-btn{background-color:#90c1eb}.nc-container .nc_scale .nc-cc.nc-cc-status-loading .nc-cc-btn,.nc-container .nc_scale .nc-cc.nc-cc-status-verifing .nc-cc-btn,.nc-container .nc_scale .nc-cc.nc-cc-status-loading .nc-cc-refresh,.nc-container .nc_scale .nc-cc.nc-cc-status-verifing .nc-cc-refresh{cursor:default}.nc-container .nc_scale .nc-cc.nc-cc-status-loading .nc-cc-refresh,.nc-container .nc_scale .nc-cc.nc-cc-status-verifing .nc-cc-refresh{color:#999}.nc-container .nc_scale .nc-cc a{color:#3199f4;text-decoration:none}.nc-container .nc_scale .nc-cc .nc_iconfont{vertical-align:top;margin-right:8px}.nc-container .nc_scale .nc-cc-btn{display:inline-block;*display:inline;*zoom:1;vertical-align:top;letter-spacing:normal;word-spacing:normal;width:100px;line-height:30px;text-align:center;background-color:#3199f4;color:#fff;border-radius:4px;cursor:pointer;}.nc-container .nc_scale .nc-cc-btn.nc-cc-disabled{background-color:#90c1eb;cursor:default}.nc-container .nc_scale .nc-cc-btn .nc-lang-cnt{line-height:18px}.nc-container .nc_scale .nc-cc-header{padding:20px 20px 19px 20px;height:100px;background:#f4f8fa;border-bottom:1px solid #ccc}.nc-container .nc_scale .nc-cc-img1-box{float:left;width:100px;height:100px;margin-right:16px}.nc-container .nc_scale .nc-cc-txt{overflow:hidden;*zoom:1;line-height:30px;padding-top:11px}.nc-container .nc_scale .nc-cc-img2-box{position:relative;padding:0 20px;margin-top:20px}.nc-container .nc_scale .nc-cc-items{position:absolute;left:20px;_left:0;top:0;width:320px;overflow:hidden}.nc-container .nc_scale .nc-cc-items-inner{margin-right:-20px}.nc-container .nc_scale .nc-cc-item{position:relative;display:inline-block;*display:inline;*zoom:1;vertical-align:top;letter-spacing:normal;word-spacing:normal;margin-right:10px;margin-bottom:10px;border:1px solid #ccc;width:98px;height:98px;background:url("//gtms02.alicdn.com/tps/i2/T1ty2QFNNXXXc6Yc2r-1-1.gif");}.nc-container .nc_scale .nc-cc-item:hover{border-color:#3199f4}.nc-container .nc_scale .nc-cc-item .nc_iconfont{display:none;position:absolute;right:0;bottom:0;color:#3199f4;font-size:22px;margin-right:0}.nc-container .nc_scale .nc-cc-item.nc-cc-selected .nc_iconfont{display:block}.nc-container .nc_scale .nc-cc-tip{display:none;position:absolute;left:0;bottom:60px;width:360px;line-height:18px;text-align:center;color:#eb4f38;}.nc-container .nc_scale .nc-cc-tip span{line-height:normal}.nc-container .nc_scale .nc-cc-footer{position:absolute;left:0;bottom:20px;width:360px;height:30px;line-height:30px;text-align:center;}.nc-container .nc_scale .nc-cc-footer .nc_iconfont{color:#c4cbd0}.nc-container .nc_scale .nc-cc-refresh,.nc-container .nc_scale .nc-cc-wait{position:absolute;left:20px;top:0;color:#3199f4;cursor:pointer}.nc-container .nc_scale .nc-cc-wait{display:none}.nc-container .nc_scale .nc-cc-cancel{position:absolute;right:20px;top:0;color:#3199f4;cursor:pointer;}.nc-container .nc_scale .nc-cc-cancel .nc_iconfont{position:relative;top:-1px}.nc-container .nc_scale .nc-cc-loading{margin-top:247px;text-align:center;line-height:14px}.nc-container .nc_scale .nc-cc-loading-img{display:inline-block;*display:inline;*zoom:1;vertical-align:top;letter-spacing:normal;word-spacing:normal;vertical-align:middle;background:url("//img.alicdn.com/tps/TB1OdxsKpXXXXcgXFXXXXXXXXXX-14-14.gif") no-repeat;width:14px;height:14px;position:relative;top:-1px;margin-right:9px}.nc-container .nc_scale .nc-cc-fail{position:absolute;left:50%;top:50%;width:320px;height:180px;margin-left:-160px;margin-top:-90px;background:#fff;border-radius:4px}.nc-container .nc_scale .nc-cc-fail-inner{text-align:center;padding:55px 10px 10px}.nc-container .nc_scale .nc-cc-fail-action{margin:28px 0 18px;}.nc-container .nc_scale .nc-cc-fail-action a{display:inline-block;*display:inline;*zoom:1;vertical-align:top;letter-spacing:normal;word-spacing:normal;line-height:30px;margin-left:16px}.nc-container .nc_scale .nc-cc-contact{text-align:right;color:#666;padding-right:9px}.nc-container .nc_scale .nc-cc-mask{display:none;position:absolute;left:0;top:0;width:360px;height:570px;background:rgba(0,0,0,0.3);filter:progid:DXImageTransform.Microsoft.gradient(enabled=\'true\',startColorstr=\'#4C000000\', endColorstr=\'#4C000000\');}:root .nc-container .nc_scale .nc-cc-mask{-webkit-filter:none;filter:none}.nc-container .nc_scale .nc-cc-arrow-1,.nc-container .nc_scale .nc-cc-arrow-2{display:none;position:absolute;top:340px;border:solid transparent;height:0;width:0}.nc-container .nc_scale .nc-cc-arrow-1{border-width:16px;margin-top:-1px}.nc-container .nc_scale .nc-cc-arrow-2{border-width:15px}.nc-container .nc_scale .nc-cc-right .nc-cc-arrow-1,.nc-container .nc_scale .nc-cc-left .nc-cc-arrow-1,.nc-container .nc_scale .nc-cc-right .nc-cc-arrow-2,.nc-container .nc_scale .nc-cc-left .nc-cc-arrow-2{display:block;_display:none}.nc-container .nc_scale .nc-cc-right{left:180px;top:-339px;}.nc-container .nc_scale .nc-cc-right .nc-cc-arrow-1{border-right-color:#5eaef1;left:-32px}.nc-container .nc_scale .nc-cc-right .nc-cc-arrow-2{border-right-color:#fff;left:-30px}.nc-container .nc_scale .nc-cc-left{left:-335px;top:-339px;}.nc-container .nc_scale .nc-cc-left .nc-cc-arrow-1{border-left-color:#5eaef1;right:-32px}.nc-container .nc_scale .nc-cc-left .nc-cc-arrow-2{border-left-color:#fff;right:-30px}')
				}, {}],
				2: [function(e, t, n) {
					"use strict";
					!
					function() {
						var t = window,
							n = "_nc_initialized";
						if (!t[n]) {
							t[n] = 1;
							var i = e("./v").v;
							e("./pclib/rm_old_css"), e("./_styl/nc"), e("./pclib/onerror");
							var a = t.pointman && "19" == pointman._z,
								o = {},
								c = {
									has_pointman: a,
									index: 0,
									v: i
								};
							t.UA_Opt = t.UA_Opt || {};
							var r = e("./pclib/multiton").makeNC(o, c);
							r.v = i, o.init = function() {}, c.has_pointman && (o.noCaptcha = r, pointman.define("nc", function() {
								return o
							})), t.noCaptcha = r
						}
					}()
				}, {
					"./_styl/nc": 1,
					"./pclib/multiton": 15,
					"./pclib/onerror": 17,
					"./pclib/rm_old_css": 20,
					"./v": 27
				}],
				3: [function(e, t, n) {
					"use strict";

					function i(e) {
						return this instanceof i ? (this._state = l, this._onFulfilled = [], this._onRejected = [], this._value = null, this._reason = null, void(u(e) && e(c(this.resolve, this), c(this.reject, this)))) : new i(e)
					}
					function a(e, t, n) {
						return function(i) {
							if (u(t)) try {
								var a = t(i);
								o(a) ? a.then(function(t) {
									e.resolve(t)
								}, function(t) {
									e.reject(t)
								}) : e.resolve(a)
							} catch (c) {
								e.reject(c)
							} else e[n](i)
						}
					}
					function o(e) {
						return e && u(e.then)
					}
					function c(e, t) {
						var n = [].slice,
							i = n.call(arguments, 2),
							a = function() {},
							o = function() {
								return e.apply(this instanceof a ? this : t, i.concat(n.call(arguments)))
							};
						return a.prototype = e.prototype, o.prototype = new a, o
					}
					function r(e) {
						return function(t) {
							return {}.toString.call(t) == "[object " + e + "]"
						}
					}
					function s(e, t) {
						for (var n = 0, i = e.length; i > n; n++) t(e[n], n)
					}
					var l = 0,
						d = 1,
						p = 2;
					i.prototype = {
						constructor: i,
						then: function(e, t) {
							var n = new i,
								o = a(n, e, "resolve"),
								c = a(n, t, "reject");
							return this._state === d ? o(this._value) : this._state === p ? c(this._reason) : (this._onFulfilled.push(o), this._onRejected.push(c)), n
						},
						resolve: function(e) {
							this._state === l && (this._state = d, this._value = e, s(this._onFulfilled, function(t) {
								t(e)
							}), this._onFulfilled = [])
						},
						reject: function(e) {
							this._state === l && (this._state = p, this._reason = e, s(this._onRejected, function(t) {
								t(e)
							}), this._onRejected = [])
						},
						"catch": function(e) {
							return this.then(null, e)
						},
						always: function(e) {
							return this.then(e, e)
						}
					}, i.defer = function() {
						var e = {};
						return e.promise = new i(function(t, n) {
							e.resolve = t, e.reject = n
						}), e
					}, i.race = function(e) {
						var t = i.defer();
						return e.length, s(e, function(e) {
							e.then(function(e) {
								t.resolve(e)
							}, function(e) {
								t.reject(e)
							})
						}), t.promise
					}, i.all = function(e) {
						var t = i.defer(),
							n = e.length,
							a = [];
						return s(e, function(e, i) {
							e.then(function(e) {
								a[i] = e, n--, 0 === n && t.resolve(a)
							}, function(e) {
								t.reject(e)
							})
						}), t.promise
					}, i.resolve = function(e) {
						return new i(function(t) {
							t(e)
						})
					}, i.reject = function(e) {
						return new i(function(t, n) {
							n(e)
						})
					};
					var u = r("Function");
					t.exports = i
				}, {}],
				4: [function(e, t, n) {
					"use strict";

					function i(e) {
						var t, n = "",
							i = h.getElementById("umFlash");
						if (i && !n) try {
							t = i.getCookie(e) || "", n = t
						} catch (a) {}
						try {
							g.localStorage && !n && (t = localStorage[e] || "", n = t)
						} catch (a) {}
						if (g.navigator.cookieEnabled && !n) {
							var o = h.cookie.indexOf(e + "=");
							if (-1 != o) {
								o += e.length + 1;
								var c = h.cookie.indexOf(";", o); - 1 == c && (c = h.cookie.length), t = decodeURIComponent(h.cookie.substring(o, c)) || "", n = t
							}
						}
						return n
					}
					function a(e, t, n) {
						n = n || 7;
						var i = new Date;
						i.setTime(i.getTime() + 864e5 * n), h.cookie = [encodeURIComponent(e), "=", encodeURIComponent("" + t), ";expires=", i.toGMTString()].join("")
					}
					function o() {
						var e = i(f);
						return e || (e = _ + c(11), a(f, e, 3650)), e
					}
					function c(e) {
						for (var t = ""; t.length < e;) t += Math.random().toString().substr(2);
						return t.substring(t.length - e)
					}
					function r() {
						var e = g._sec_module = g._sec_module || {};
						if (d = e.token) return d;
						var t = o();
						return d = t + _ + c(3), e.token = d, d
					}
					function s() {
						if (p) return p;
						var e = "_umdata";
						try {
							g.localStorage && (p = localStorage.getItem(e))
						} catch (t) {}
						return p ? p : (p = i(e), p || "")
					}
					function l() {
						return u ? u : u = s() || r()
					}
					var d, p, u, g = window,
						h = document,
						f = "_uab_collina",
						_ = g.pointman && pointman._now ? pointman._now : (new Date).getTime();
					n.getSecToken = r, n.getNCToken = l
				}, {}],
				5: [function(e, t, n) {
					"use strict";

					function i(e, t) {
						this.id = function(e) {
							return 0 === e.indexOf("#") ? c.getElementById(e.slice(1)) : c.getElementById(e)
						}, this.tag = function(e) {
							var t = e.split(" ");
							return this.id(t[0]).getElementsByTagName(t[1])
						}, this.toggle = function(e) {
							var t = this.id(e);
							"none" == t.style.display || "" === t.style.display ? t.style.display = "block" : t.style.display = "none"
						}, this.clone = function(e) {
							var t, n, i = e;
							if (e && ((n = e instanceof Array) || e instanceof Object)) {
								i = n ? [] : {};
								for (t in e) e.hasOwnProperty(t) && (i[t] = this.clone(e[t]))
							}
							return i
						}, this.extend = function(e, t, n) {
							var i, a;
							if (t instanceof Array) for (i = 0, a = t.length; a > i; i++) this.extend(e, t[i], n);
							for (i in t) i in e && t.hasOwnProperty(i) && (e[i] = t[i]);
							return e
						}, this.objUpdate = function(e, t) {
							var n;
							for (n in t) t.hasOwnProperty(n) && (e[n] = t[n])
						}, this.loadjs = function(e, t) {
							function n() {
								clearTimeout(o), a || (a = !0, t())
							}
							var i = c.createElement("script");
							i.type = "text/javascript";
							var a;
							i.onreadystatechange = function() {
								"loaded" != i.readyState && "complete" != i.readyState || (i.onreadystatechange = null, n())
							}, i.onload = n, i.src = e, i.onerror = function(e) {
								t(e), i.onload = null
							};
							var o = setTimeout(function() {
								i.onerror("timeout")
							}, 5e3),
								r = c.getElementsByTagName("script")[0];
							r.parentNode.insertBefore(i, r)
						}, this.jsonp = function(n) {
							var i = 0;
							n.timeout = e.timeout || 3e3, n.times = e.times || 3;
							var a;
							if (n = n || {}, !n.url || !n.callback) throw new Error("参数不合法");
							var r = ("jsonp_" + Math.random()).replace(".", ""),
								s = c.getElementsByTagName("script")[0],
								l = "";
							n.data ? (n.data[n.callback] = r, l += t(n.data)) : l += n.callback + "=" + r;
							var d = c.createElement("script");
							s.parentNode.insertBefore(d, s), o[r] = function(e) {
								o[r] = function() {
									report("回调已执行过,不再执行"), o[r] = null
								};
								try {
									d.parentNode && d.parentNode.removeChild(d)
								} catch (t) {}
								clearInterval(a), n.success && n.success(e)
							}, d.src = n.url + (-1 == n.url.indexOf("?") ? "?" : "&") + l, n.timeout && (a = setInterval(function() {
								i++;
								var e;
								if (i >= n.times) {
									o[r] = function() {}, clearInterval(a);
									try {
										d.parentNode && d.parentNode.removeChild(d)
									} catch (t) {}
									n.fail(1)
								} else try {
									d.parentNode && d.parentNode.removeChild(d), d = c.createElement("script"), e = c.getElementsByTagName("script")[0], e.parentNode.insertBefore(d, e), d.src = n.url + (-1 == n.url.indexOf("?") ? "?" : "&") + l + "&t=" + Math.random()
								} catch (t) {}
							}, n.timeout))
						}, this.obj2str = function n(e) {
							var t, i = [],
								o = n;
							if ("string" == typeof e) return '"' + e.replace(/(['"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + '"';
							if ("undefined" == typeof e) return "undefined";
							if ("object" == ("undefined" == typeof e ? "undefined" : a(e))) {
								if (null === e) return "null";
								if (e.sort) {
									for (t = 0; t < e.length; t++) i.push(o(e[t]));
									i = "[" + i.join() + "]"
								} else {
									for (t in e) e.hasOwnProperty(t) && i.push('"' + t + '":' + o(e[t]));
									i = "{" + i.join() + "}"
								}
								return i
							}
							return e.toString()
						}, this.addHandler = function(e, t, n) {
							e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
						}, this.removeEvt = function(e, t, n) {
							e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
						}
					}
					var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
					function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
					}, o = window, c = document;
					n.BaseFun = i
				}, {}],
				6: [function(e, t, n) {
					"use strict";

					function i(e, t, n) {
						var i = e.prefix,
							c = 1,
							l = navigator && navigator.userAgent || "",
							d = /Firefox\/([\d.]*)/.test(l),
							p = -1 !== l.indexOf("Windows"),
							u = (new Date).getTime(),
							g = (new Date).getTime(),
							h = o.head || o.getElementsByTagName("head")[0] || o.documentElement,
							f = function(e) {
								return o.getElementById(e)
							},
							_ = {
								"default": 4,
								number: 6,
								"150_40": 4,
								login_wan3: 4,
								login_wan10: 6
							},
							m = function(e) {
								this.lang = e.lang;
								var t = "cn" == this.lang || "zh_CN" == this.lang ? "//pin2.aliyun.com" : "//captcha.alibaba.com";
								this.config = {
									apiserver: e.apiserver || t,
									type: e.type || "default",
									codeLength: e.checkCodeLength || _[e.type || "default"],
									identity: e.identity || "",
									sessionid: e.sessionid || "",
									element: e.element || null
								}, this.tipText = {};
								var n, i = s[e.lang] || s.en;
								for (n in i) i.hasOwnProperty(n) && (this.tipText[n] = e[n] || i[n]);
								this.service = {
									imgURL: "{apiserver}/get_img?sessionid={sessionid}&identity={identity}&type={type}",
									checkImgURL: "{apiserver}/check_img?sessionid={sessionid}&identity={identity}&type={type}",
									audioURL: "{apiserver}/get_audio?identity={identity}&sessionid={sessionid}",
									checkAudioURL: "{apiserver}/check_audio?sessionid={sessionid}&identity={identity}"
								}, this.cache = {
									codeType: "img",
									oldCode: null,
									lastCheckCode: "",
									checkedCode: null,
									checkState: "notstart",
									audio: null,
									audioPlayer: null,
									callback: null
								}
							};
						return m.prototype = {
							render: function() {
								var e = this,
									t = e.config;
								if (!t.element) return !1;
								"[object String]" == Object.prototype.toString.call(t.element) && (t.element = f(t.element));
								for (var n in this.service) if (this.service.hasOwnProperty(n)) {
									var i = this.service[n];
									i = i.replace("{apiserver}", t.apiserver).replace("{identity}", t.identity).replace("{sessionid}", t.sessionid).replace("{type}", t.type), this.service[n] = i
								}
								return e.renderCode(), this
							},
							renderCode: function() {
								function e() {
									var e = u || f(i + "omeo-code-key");
									e.value = e.value.replace(/[^\w\d]/g, "")
								}
								function a() {
									var e, t = g,
										i = -1;
									for (h.stopAudio();
									"body" !== t.tagName.toLowerCase();) {
										if (e = t.getAttribute("data-nc-idx"), null !== e) {
											i = e;
											break
										}
										t = t.parentNode
									}
									try {
										noCaptcha.getByIndex(parseInt(i)).reload(), n(r.switchevent, {
											from: "audio",
											to: "scale"
										})
									} catch (a) {
										report("reload failed")
									}
									return !1
								}
								var c = this,
									s = c.tipText,
									l = c.config,
									d = o.createElement("div"),
									p = l.element;
								d.className = "omeo-box", d.innerHTML = '<div class="omeo-code omeo-img-active" id="' + i + 'omeo-code"><div class="omeo-code-img"><img id="' + i + 'omeo-code-imgwrap" data-action="refreshImg" src="' + c.service.imgURL + '" onmousedown="return false;"/><a data-action="refreshImg" href="javascript:;" onmousedown="return false;" title="' + s.refresh + '" class="nc_iconfont btn_refresh omeo-code-refresh">&#xe607;</a><a data-action="switchToAudio" href="javascript:;" onmousedown="return false;" title="' + s.audioText + '" class="omeo-switch"></a></div><div class="omeo-code-audio"><div id="' + i + 'omeo-code-audiobox" class="omeo-code-audiobox omeo-code-audiobox-playing"><a data-action="replayAudio" href="javascript:;">' + s.clickPlay + '</a><span id="' + i + 'omeo-audio-process" class="omeo-audio-process"></span><b>' + s.audioTips + '</b></div><a id="' + i + 'omeo-refresh-audio" data-action="refreshAudio" href="javascript:;" onmousedown="return false;" title="' + s.refresh + '" class="nc_iconfont omeo-code-refresh">&#xe607;</a><i id="' + i + '_voice_close" class="nc_voice_close nc_iconfont" >&#xe600;</i><a data-action="switchToImg" href="javascript:;" onmousedown="return false;" title="' + s.imgText + '" class="omeo-switch"></a></div></div><div class="omeo-code-echo"><input id="' + i + 'omeo-code-key" type="text" name="code" maxlength="6" placeholder="' + s.placeholder + '" /><span class="omeo-code-state" id="' + i + 'omeo-code-state"></span></div>', p.appendChild(d);
								var u = f(i + "omeo-code-key");
								p.addEventListener ? (p.addEventListener("click", function(e) {
									c.triggerEvent(e)
								}, !1), f(i + "omeo-code-imgwrap").addEventListener("error", function() {
									c.log({
										e: "IMGERROR"
									}), "img" == c.cache.codeType && c.refreshCode()
								}, !1), u.addEventListener("blur", function() {
									e(), c.validateCode({
										code: f(i + "omeo-code-key").value.replace(/^\s|\s$/g, "")
									})
								}, !1), u.addEventListener("keyup", function() {
									e(), c.listenerCodeType(this.value.replace(/^\s|\s$/g, ""))
								}, !1), u.addEventListener("paste", function(e) {
									e.preventDefault()
								}, !0)) : (p.attachEvent("onclick", function(e) {
									return c.triggerEvent(e), !1
								}), f(i + "omeo-code-imgwrap").attachEvent("onerror", function() {
									c.log({
										e: "IMGERROR"
									}), "img" == c.cache.codeType && c.refreshCode()
								}), u.attachEvent("onblur", function() {
									e(), c.validateCode({
										code: f(i + "omeo-code-key").value.replace(/^\s|\s$/g, "")
									})
								}), u.attachEvent("onkeyup", function() {
									e(), c.listenerCodeType(f(i + "omeo-code-key").value.replace(/^\s|\s$/g, ""))
								}), u.attachEvent("onpaste", function() {
									return !1
								}));
								var g = t.id(i + "_voice_close"),
									h = this;
								t.addHandler(g, "click", a)
							},
							listenerCodeType: function(e) {
								this.cache.oldCode && this.cache.oldCode.length !== this.config.codeLength || 1 !== e.length || (g = (new Date).getTime()), this.cache.oldCode = e, e.length == this.config.codeLength && this.validateCode({
									code: e
								})
							},
							updateAudioBoxWidth: function() {
								var e = 7,
									t = f(i + "wrapper").offsetWidth,
									n = f(i + "omeo-refresh-audio").offsetWidth,
									a = f(i + "_voice_close").offsetWidth,
									o = f(i + "omeo-code-key").offsetWidth,
									c = t - n - a - o - e;
								f(i + "omeo-code-audiobox").style.width = c + "px"
							},
							triggerEvent: function(e) {
								var t = e.target || e.srcElement,
									n = t.getAttribute("data-action");
								try {
									f(i + "omeo-code-key").focus()
								} catch (e) {}
								"refreshAudio" === n && this.refreshCode(), "switchToAudio" === n && (this.cache.codeType = "audio", this.switchCode({
									type: "audio"
								})), "replayAudio" == n && this.playAudio()
							},
							resetPlayer: function(e) {
								var t = f(i + "omeo-audio-process");
								t.style.width = 0, "playing" == e.state ? t.parentNode.className = "omeo-code-audiobox omeo-code-audiobox-playing" : t.parentNode.className = "omeo-code-audiobox", this.updateAudioBoxWidth()
							},
							refreshCode: function() {
								var e = f(i + "omeo-code-state");
								e.className = "omeo-code-state", e.innerHTML = "", a.__progtid && clearInterval(a.__progtid), f(i + "omeo-code-key").value = "", this.resetPlayer({
									state: "playing"
								}), this.playAudio(), u = g = (new Date).getTime()
							},
							switchCode: function(e) {
								"img" == e.type ? (this.stopAudio(), f(i + "omeo-code").className = "omeo-code omeo-img-active") : (f(i + "omeo-code").className = "omeo-code omeo-audio-active", this.resetPlayer({
									state: "playing"
								}), !this.audioSupport || d || (f(i + "omeo-refresh-audio").style.display = ""), this.playAudio()), this.cache.checkState = "notstart", this.cache.checkedCode = null;
								var t;
								t = f(i + "omeo-code-state"), t.className = "omeo-code-state", t.innerHTML = "", t = f(i + "omeo-code-key"), t.value = "", t.focus(), this.cache.oldCode && this.refreshCode(), u = g = (new Date).getTime()
							},
							playErrAudio: function() {
								var e = "//g.alicdn.com/sd/ncpc/images/",
									t = e + "error.wav",
									n = e + "error_en.mp3",
									i = "cn" == this.lang || "zh_CN" == this.lang;
								this.playAudio(i ? t : n)
							},
							playAudio: function(e) {
								e || (e = this.service.audioURL + (this.service.audioURL.indexOf("?") >= 0 ? "&t=" : "?t=") + (new Date).getTime()), this.stopAudio();
								var t;
								t = e.indexOf(".mp3") > -1 ? "audio/mpeg" : "audio/x-wav";
								var n;
								if (this.audioSupport) this.cache.audio = new Audio, n = o.createElement("source"), n.type = t, n.src = e, this.cache.audio.appendChild(n), this.cache.audio.load(), this.cache.audio.play(), this.bindAudioProgress();
								else if (this.isIE) {
									var r = o.createElement("bgsound");
									r.setAttribute("id", "omeo-bgsound-audio" + c), r.setAttribute("autostart", "true"), r.setAttribute("src", e), h.appendChild(r), this.cache.audioPlayer = f(i + "omeo-bgsound-audio" + c), this.resetPlayer({
										state: "playing"
									});
									var s = 0,
										l = this;
									a.__progtid && clearInterval(a.__progtid), a.__progtid = setInterval(function() {
										s += 10, s > 100 && (s = 100), l.updateProgress(s), s >= 100 && clearInterval(a.__progtid)
									}, 1e3)
								} else h.appendChild('<embed src="' + e + '" id="' + i + "omeo-flash-audio" + c + '" ' + (p ? 'type="application/x-mplayer2"' : 'type="' + t + '"') + " autostart hidden />"), this.cache.audioPlayer = f(i + "omeo-flash-audio" + c), this.updateProgress("NOPROGRESS")
							},
							bindAudioProgress: function() {
								var e = this,
									t = e.cache;
								t.audio.addEventListener("timeupdate", function() {
									null !== f(i + "omeo-audio-process") && (!d || this.duration && this.duration !== 1 / 0 ? e.updateProgress(parseInt(100 * this.currentTime / this.duration)) : e.updateProgress(100))
								}, t.audio), t.audio.addEventListener("ended", function() {
									e.updateProgress(100)
								}, t.audio)
							},
							updateProgress: function(e) {
								switch (e) {
								case -1:
									break;
								case 100:
									this.resetPlayer({
										state: "end"
									});
									break;
								case "NOPROGRESS":
									this.resetPlayer({
										state: "end"
									});
									break;
								default:
									f(i + "omeo-audio-process").style.width = e + "%"
								}
							},
							stopAudio: function() {
								var e = this.cache;
								this.audioSupport ? e.audio && e.audio.pause() : e.audioPlayer && (e.audioPlayer.src = "", e.audioPlayer.parentNode.removeChild(this.cache.audioPlayer), e.audioPlayer = null)
							},
							replayAudio: function() {
								this.audioSupport && this.cache.audio && (this.resetPlayer({
									state: "playing"
								}), this.cache.audio.currentTime = 0, this.cache.audio.pause(), this.cache.audio.play())
							},
							loadResource: function(e, t) {
								var n = null;
								/\.css/g.test(e) ? (o.createStyleSheet && o.createStyleSheet(e), n = o.createElement("link"), n.rel = "stylesheet", n.href = e) : (n = o.createElement("script"), n.src = e), "onload" in n ? n.onload = function() {
									t && t()
								} : n.onreadystatechange = function() {
									/loaded|complete/.test(n.readyState) && t && t()
								}, h.appendChild(n)
							},
							isIE: function() {
								return !!/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/.test(l)
							}(),
							audioSupport: function() {
								try {
									return "Audio" in a && (new Audio).canPlayType("audio/x-wav")
								} catch (e) {
									return !1
								}
							}(),
							validateCode: function(e) {
								var t = this,
									n = f(i + "omeo-code-state"),
									o = "omeocode" + c + (+new Date).toString().substr(-6, 6),
									r = t.service.checkAudioURL;
								return (!t.cache.checkedCode || t.cache.checkedCode !== t.cache.oldCode) && t.cache.lastCheckCode != e.code && (t.cache.lastCheckCode = e.code, t.cache.checkedCode = null, "checking" != t.cache.checkState && (t.cache.checkState = "checking", void(/^[a-z0-9]{4,6}$/gi.test(e.code) ? (r += "&code=" + e.code + "&callback=" + o, a[o] = function(a) {
									var o = {};
									if ("SUCCESS." == a.message) {
										t.cache.checkedCode = e.code, n.className = "omeo-code-state omeo-code-state-success", n.innerHTML = "", t.cache.checkState = "success", o = {
											message: "success"
										};
										var c = (new Date).getTime();
										t.log({
											t1: c - g,
											t2: c - u,
											s: a && "SUCCESS." === a.message,
											t: t.cache.codeType
										})
									}
									"ERROR." == a.message && (n.className = "omeo-code-state omeo-code-state-error", n.innerHTML = t.tipText.codeError, setTimeout(function() {
										var e = f(i + "omeo-code-state");
										e && (e.className = "", e.innerHTML = "", f(i + "omeo-code-key").value = "")
									}, 3e3), t.cache.checkState = "codeError", o = {
										message: "error"
									}, f(i + "omeo-code-key").select(), "true" == a.refresh && t.refreshCode()), t.cache.callback && t.cache.callback(o)
								}, t.loadResource(r)) : (t.cache.checkState = "codeError", n.className = "omeo-code-state omeo-code-state-error", n.innerHTML = "验证码错误，请重新输入", t.playErrAudio(), setTimeout(function() {
									var e = f(i + "omeo-code-state");
									e && (e.className = "", e.innerHTML = "", e = f(i + "omeo-code-key"), e.value = "", e.focus(), t.resetPlayer({
										state: "playing"
									}), t.playAudio())
								}, 5e3)))))
							},
							check: function(e) {
								"success" == this.cache.checkState && e && e({
									message: "success"
								}), "codeError" == this.cache.checkState && e && e({
									message: "error"
								}), this.cache.callback = e
							},
							log: function() {}
						}, m
					}
					var a = window,
						o = document,
						c = e("./event"),
						r = c.names,
						s = e("./language-checkcode").language;
					n.init = i
				}, {
					"./event": 9,
					"./language-checkcode": 13
				}],
				7: [function(e, t, n) {
					"use strict";

					function i() {
						var e = c.createElement("style");
						e.appendChild(c.createTextNode(""));
						var t = c.getElementsByTagName("script"),
							n = t[t.length - 1];
						return n.parentNode.insertBefore(e, n), e.sheet
					}
					function a(e, t, n, i) {
						"number" != typeof i && (i = 1), "insertRule" in e ? e.insertRule(t + "{" + n + "}", i) : "addRule" in e && e.addRule(t, n, i)
					}
					function o(e) {
						var t = c.createElement("style");
						t.type = "text/css", t.className = "nc-style", t.styleSheet ? t.styleSheet.cssText = e : (t.innerHTML = e, t.appendChild(c.createTextNode(e)));
						var n = c.getElementsByTagName("script"),
							i = n[n.length - 1];
						i.parentNode.insertBefore(t, i)
					}
					var c = document;
					t.exports = {
						createSheet: i,
						addCSSRule: a,
						insertCSS: o
					}
				}, {}],
				8: [function(e, t, n) {
					"use strict";
					var i = e("../lib/tk"),
						a = {
							renderTo: "",
							isEnabled: !0,
							foreign: 0,
							cssUrl: !1,
							uaUrl: "",
							appkey: "",
							trans: {},
							token: i.getNCToken(),
							elementID: "",
							audio: !1,
							timeout: 3e3,
							times: 3,
							is_Opt: 0,
							language: "cn",
							umidServer: "h",
							scene: "",
							is_tbLogin: 0,
							tb_errMsg: "",
							glog: .05,
							apimap: {},
							callback: function() {},
							error: function() {},
							verifycallback: function() {}
						};
					n.default_opt = a
				}, {
					"../lib/tk": 4
				}],
				9: [function(e, t, n) {
					"use strict";
					n.names = {
						init: "init",
						ready: "ready",
						actionstart: "actionstart",
						actionend: "actionend",
						beforeverify: "beforeverify",
						afterverify: "afterverify",
						error: "error",
						fail: "fail",
						success: "success",
						switchevent: "switch",
						slide_start: "slide_start",
						slide_end: "slide_end",
						before_code: "before_code",
						after_code: "after_code",
						error300: "error300"
					}, n.deprecated = {
						slide_start: "actionstart",
						slide_end: "actionend",
						before_code: "beforeverify",
						after_code: "afterverify",
						error300: "error"
					}
				}, {}],
				10: [function(e, t, n) {
					"use strict";
					var i = window,
						a = e("./util");
					n.makeLog = function(e) {
						function t(e, t, n) {
							var i = a.obj2param({
								appkey: encodeURIComponent(e),
								token: encodeURIComponent(t),
								flag: n
							});
							a.send(o + "?cache=" + Math.random() + "&gmkey=evt&gokey=" + encodeURIComponent(i))
						}
						function n(t) {
							i.console && void 0;
							var n = e + "jstracker.2",
								o = a.obj2param({
									type: "9",
									id: "jstracker",
									v: "1",
									nick: "",
									islogin: "",
									msg: t,
									file: "",
									ua: "",
									line: "",
									scrolltop: "",
									screen: "",
									t: +new Date
								});
							a.send(n + "?" + o)
						}
						e = e || "//gm.mmstat.com/";
						var o = e + "aq.1.1.3",
							c = {};
						return c.log = t, c.report = n, c
					}
				}, {
					"./util": 26
				}],
				11: [function(e, t, n) {
					"use strict";

					function i(e, t) {
						return this.options = e || {}, this.params = t || {}, this.init(), this
					}
					function a(e) {
						var t = u.defer(),
							n = e.data || {},
							i = ("jsonp_" + Math.random()).replace(".", "");
						s[i] = function(e) {
							t.resolve(e)
						}, n[e.callback || "callback"] = i, t.promise.always(function() {
							try {
								delete s[i]
							} catch (e) {
								s[i] = null
							}
						});
						var a = l.createElement("script");
						a.src = e.url + (-1 === e.url.indexOf("?") ? "?" : "&") + g.obj2param(n);
						var o = l.getElementsByTagName("script")[0];
						return o.parentNode.insertBefore(a, o), setTimeout(function() {
							t.reject({
								type: "request",
								error: "timeout"
							})
						}, 5e3), t.promise
					}
					function o(e) {
						var t = u.defer(),
							n = new Image;
						return n.onload = function() {
							t.resolve(this)
						}, n.onerror = function(e) {
							t.reject({
								type: "img",
								error: e
							})
						}, setTimeout(function() {
							t.reject({
								type: "img",
								error: "timeout"
							})
						}, 5e3), n.src = e, t.promise
					}
					function c(e) {
						e.style.display = "block"
					}
					function r(e) {
						e.style.display = "none"
					}
					var s = window,
						l = document,
						d = l.documentElement,
						p = function() {},
						u = e("../lib/promise"),
						g = e("./util"),
						h = e("./url_map").URL_MAP,
						f = e("./language-core").language,
						_ = g.isIEX(8),
						m = new u(function(e, t) {
							return _ ? void t() : void o("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==").then(function(n) {
								1 === n.width && 1 === n.height ? e() : t()
							}, t)
						}),
						v = u.reject({
							type: "destroy"
						}),
						b = "&#xe60e;",
						x = "&#xe607;",
						y = "&#xe60a;",
						k = "&#xe60b;",
						w = {
							INITIAL: 0,
							READY: 1,
							LOADING: 2,
							LOAD_FAIL: 3,
							LOADED: 4,
							VERIFING: 5
						},
						C = "nc-cc",
						T = {};
					g.each(w, function(e, t) {
						T[e] = C + "-status-" + t.toLowerCase().replace("_", "-")
					}), i.prototype = {
						init: function() {
							this.initProps(), this.render(), this.bindEvents(), this.setStatus(w.READY), this.updateCaptcha(!0)
						},
						setStatus: function(e) {
							var t = this.status;
							e !== t && (this.status = e, T[t] && g.removeClass(this.$container, T[t]), T[e] && g.addClass(this.$container, T[e]))
						},
						initProps: function() {
							this.status = w.INITIAL, this.prefix = this.options.prefix, this.nc = this.options.nc, this.urls = h[this.options.foreign] || h[0], this.language = f[this.options.language], this.$container = l.getElementById(this.prefix + "cc"), this.clickIndex = 0, this.onerror = this.options.onerror || p, this.onfail = this.options.onfail || p, this.onsuccess = this.options.onsuccess || p
						},
						render: function() {
							var e = this.language,
								t = '\n<div class="' + C + '-body"></div>\n<div class="' + C + '-tip"><i class="nc_iconfont">' + y + "</i>" + e._cc_fail + '</div>\n<div class="' + C + '-footer">\n<div class="' + C + '-wait">\n<i class="' + C + '-loading-img"></i>' + e._wait + '\n</div>\n<div class="' + C + '-refresh" data-action="refresh"><i class="nc_iconfont" data-action="refresh">' + x + "</i>" + e._cc_refresh + '</div>\n<div class="' + C + "-btn " + C + '-confirm" data-action="confirm">' + e._verify + '</div>\n<div class="' + C + '-cancel" data-action="close"><i class="nc_iconfont" data-action="close">' + b + "</i>" + e._cancel + '</div>\n</div>\n<div class="' + C + '-mask"></div>\n<div class="' + C + '-arrow-1"></div>\n<div class="' + C + '-arrow-2"></div>\n';
							this.$container.innerHTML = t, c(this.$container), this.pin(), g.each(["body", "footer", "tip", "confirm", "wait", "refresh", "mask"], function(e) {
								this["$" + e] = this.klass(e)[0]
							}, this)
						},
						pin: function() {
							var e = this.options.$wrapper,
								t = e.offsetWidth,
								n = g.getElementLeft(e),
								i = g.getElementTop(e),
								a = this.$container.offsetWidth,
								o = s.innerWidth || d && d.clientWidth || l.body.clientWidth,
								c = "";
							o - t - n > a ? (c = "right", this.$container.style.left = (t - 150) / 2 + 108 + 30 + "px") : n > a && (c = "left", this.$container.style.left = -(a + 25 - (t - 150) / 2) + "px"), 339 > i && (this.$container.style.top = -i + 5 + "px"), c && g.addClass(this.$container, C + "-" + c)
						},
						updateCaptcha: function(e) {
							var t = this,
								n = this.language;
							if (this.status !== w.LOADING) {
								this.setStatus(w.LOADING), e ? this.$body.innerHTML = '\n<div class="' + C + '-loading">\n<i class="' + C + '-loading-img"></i>\n' + n._wait + "\n</div>\n" : (r(this.$refresh), c(this.$wait));
								var i = m.then(function() {
									return t.urls.cc
								}, function() {
									return t.urls.cc_pre
								}).then(function(e) {
									var n = t.options;
									return a({
										url: e,
										data: {
											sessionid: n.csessionid,
											identity: n.appkey,
											style: n.value,
											type: "SUDOKU_IMG",
											token: n.token
										}
									})
								}).then(function(e) {
									return t.hasDestroy() ? v : e.success && 0 === e.result.resultCode ? (t.captchaToken = e.result.captchaToken, u.all([o(e.result.data[0]), o(e.result.data[1])])) : u.reject({
										type: "request",
										code: e.result.resultCode,
										msg: e.result.message
									})
								}).then(function(e) {
									return t.hasDestroy() ? v : (t.setStatus(w.LOADED), void t.renderImg(e[0], e[1]))
								});
								e || i.always(function() {
									c(t.$refresh), r(t.$wait)
								}), i["catch"](function(n) {
									/^(request|img)$/.test(n.type) && (t[n.type + "Fail"](e), t.onerror())
								})
							}
						},
						bindEvents: function() {
							var e = this.nc,
								t = {};
							t[w.LOAD_FAIL] = {
								retry: function() {
									r(this.$mask), this.updateCaptcha()
								}
							}, t[w.LOADED] = {
								refresh: function() {
									r(this.$tip), this.updateCaptcha()
								},
								confirm: this.confirm,
								select: this.select
							}, this._handler = g.bind(function(n) {
								n = g.getEvent(n);
								var i = g.getTarget(n),
									a = i.getAttribute("data-nc-lang") ? i.parentNode.getAttribute("data-action") : i.getAttribute("data-action");
								a && ("close" === a && (this.destroy(), e.reset()), t[this.status] && t[this.status][a] && t[this.status][a].call(this, i, n))
							}, this), g.addHandler(this.$container, "click", this._handler)
						},
						select: function(e, t) {
							if (g.toggleClass(e, C + "-selected"), g.hasClass(e, C + "-selected")) {
								var n = t.pageX,
									i = t.pageY;
								void 0 === n && (n = t.clientX + (l.body.scrollLeft || d.scrollLeft)), void 0 === i && (i = t.clientY + (l.body.scrollTop || d.scrollTop));
								var a = g.getPageCoord(e.parentNode);
								e.setAttribute("data-x", n - a.x), e.setAttribute("data-y", i - a.y), e.setAttribute("data-ci", this.clickIndex++)
							}
							var o = this.klass("selected"),
								c = o.length;
							0 === c ? g.addClass(this.$confirm, C + "-disabled") : g.removeClass(this.$confirm, C + "-disabled"), r(this.$tip)
						},
						confirm: function() {
							var e = this,
								t = (e.nc, this.klass("selected"));
							if (0 !== t.length && this.status !== w.VERIFING) {
								this.setStatus(w.VERIFING), t = [].slice.call(t), t.sort(function(e, t) {
									var n, i = parseInt(e.getAttribute("data-ci"), 10),
										a = parseInt(t.getAttribute("data-ci"), 10);
									return n = i == a ? 0 : i > a ? 1 : -1
								});
								var n = [];
								g.each(t, function(e) {
									n.push("[" + [e.getAttribute("data-x"), e.getAttribute("data-y"), e.getAttribute("data-i")].join(",") + "]")
								}), n = "[" + n.join(",") + "]", a({
									url: this.urls.checkcode,
									data: {
										csessionid: this.options.csessionid,
										checkcode: this.params.obj2str({
											answer: n,
											captchaToken: this.captchaToken
										}),
										a: this.options.appkey,
										t: this.options.token,
										n: s._n || "",
										p: "{}",
										r: Math.random(),
										lang: this.options.language,
										v: this.params.v
									}
								}).then(function(t) {
									return e.hasDestroy() ? v : void(t.success && 100 === t.result.code ? (e.onsuccess(t.result.sig), e.destroy()) : (e.updateCaptcha(), c(e.$tip), e.onfail()))
								})["catch"](function(t) {
									"request" === t.type && (e.requestFail(), e.onerror())
								})
							}
						},
						renderImg: function(e, t) {
							for (var n = "", i = 0; 9 > i; i++) n += '<a href="javascript:void(0);" class="' + C + '-item" data-action="select" data-i="' + i + '"><i class="nc_iconfont">' + k + "</i></a>";
							this.$body.innerHTML = '\n<div class="' + C + '-header">\n<div class="' + C + '-img1-box"></div>\n<div class="' + C + '-txt">' + this.language._cc_title + '</div>\n</div>\n<div class="' + C + '-img2-box">\n<div class="' + C + '-items">\n<div class="' + C + '-items-inner">\n' + n + "\n</div>\n</div>\n</div>\n", this.klass("img1-box")[0].appendChild(e), this.klass("img2-box")[0].appendChild(t), g.addClass(this.$confirm, C + "-disabled")
						},
						imgFail: function(e) {
							this.setStatus(w.LOAD_FAIL);
							var t = this.$body,
								n = this.language,
								i = "close";
							e ? r(this.$footer) : (t = this.$mask, i = "retry", c(t));
							var a = n._cc_contact.replace("%TOKEN", this.options.token);
							t.innerHTML = '\n<div class="' + C + '-fail">\n<div class="' + C + '-fail-inner">\n<p>' + n._cc_img_fail + '</p>\n<div class="' + C + '-fail-action">\n<div class="' + C + '-btn" data-action="' + i + '">' + n._retry + '</div>\n<a href="javascript:void(0);" data-action="close">' + n._cancel + '</a>\n</div>\n<div class="' + C + '-contact">\n' + a + "\n</div>\n</div>\n</div>\n"
						},
						requestFail: function(e) {
							var t = this.language,
								n = t._cc_contact.replace("%TOKEN", this.options.token);
							this.setStatus(w.LOAD_FAIL), this.$body.innerHTML = '\n<div class="' + C + '-fail">\n<div class="' + C + '-fail-inner">\n<p>' + t._cc_req_fail + '</p>\n<div class="' + C + '-fail-action">\n<div class="' + C + '-btn" data-action="close">' + t._close + '</div>\n</div>\n<div class="' + C + '-contact">\n' + n + "\n</div>\n</div>\n</div>\n", r(this.$footer)
						},
						unbindEvents: function() {
							g.removeHandler(this.$container, "click", this._handler)
						},
						klass: function(e) {
							return g.getElementsByClassName([C, e].join("-"), this.$container)
						},
						destroy: function() {
							r(this.$container), this.unbindEvents(), this.$container.innerHTML = "";
							for (var e in this) this.hasOwnProperty(e) && delete this[e];
							this.destroy = p
						},
						hasDestroy: function() {
							return this.destroy === p
						}
					}, t.exports = i
				}, {
					"../lib/promise": 3,
					"./language-core": 14,
					"./url_map": 25,
					"./util": 26
				}],
				12: [function(e, t, n) {
					"use strict";

					function i(e, t, n, i) {
						var o;
						for (o in i) i.hasOwnProperty(o) && (n[o] = i[o]);
						var r = n[t];
						if (r) {
							e.opt.language = t;
							var l, d = e.opt.renderTo;
							d && (l = c.getElementById(d)) && (s.addClass(l, "nc-lang-" + t), a(l, r))
						}
					}
					function a(e, t) {
						var n, i, a, o, c = e.getElementsByTagName("*"),
							r = "data-nc-lang";
						for (n = 0; n < c.length; n++) i = c[n], a = i.getAttribute(r), a && (o = t[a]) && o && !
						function(e, t) {
							setTimeout(function() {
								e.innerHTML = t.replace(/^\s*<span[^>]*?>|<\/span>\s*$/g, "")
							}, 1)
						}(i, o)
					}
					function o(e, t, n) {
						window.nc_ex_lang = function(a) {
							i(e, t, n, a)
						};
						var a = "script",
							o = c.createElement(a);
						o.charset = "utf-8", o.src = r;
						var s = c.getElementsByTagName(a)[0];
						s.parentNode.insertBefore(o, s)
					}
					var c = document,
						r = "//g.alicdn.com/sd/ncpc/lang-ex.js?t=" + Math.floor((new Date).getTime() / 846e5),
						s = e("./util");
					n.loadExLang = o
				}, {
					"./util": 26
				}],
				13: [function(e, t, n) {
					"use strict";
					var i = {
						cn: {
							placeholder: "请输入验证码",
							audioText: "获取语音验证码",
							imgText: "获取图片验证码",
							refresh: "重新获取验证码",
							codeError: "验证码错误，即将播放下一段",
							clickPlay: "点击播放语音",
							audioTips: "请仔细收听"
						},
						en: {
							placeholder: "enter the code",
							audioText: "retrieve pass code from the audio",
							imgText: "retrieve pass code from the image",
							refresh: "retrieve pass code again",
							codeError: "Incorrect pass code, please try again",
							clickPlay: "click to play the audio",
							audioTips: "please listen carefully"
						}
					};
					i.zh_CN = i.cn, i.en_US = i.en, n.language = i
				}, {}],
				14: [function(e, t, n) {
					"use strict";

					function i(e, t) {
						var n, i, o = t ? {} : e;
						for (n in e) e.hasOwnProperty(n) && (i = e[n], "string" == typeof i && (i = [i]), o[n] = '<span class="nc-lang-cnt" data-nc-lang="' + n + '">' + a(g[n], i) + "</span>");
						return o
					}
					function a(e, t) {
						return (e + "").replace(/\\?\{\s*([^{}\s]+)\s*\}/g, function(e, n) {
							return "\\" === e.charAt(0) ? e.slice(1) : t[n] || ""
						})
					}
					function o(e, t) {
						var n, a = h[e] = h[e] || {};
						t = i(t, !0);
						for (n in t) t.hasOwnProperty(n) && (a[n] = t[n])
					}
					function c(e, t) {
						return e.replace(/(javascript:noCaptcha.reset\()(\))/gi, "$1" + t + "$2")
					}
					var r, s = "javascript:noCaptcha.reset()",
						l = "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN",
						d = "http://survey.taobao.com/survey/40BtED_K?token=%TOKEN",
						p = "http://survey.taobao.com/survey/Q0dcgfAv?token=%TOKEN",
						u = "{0}",
						g = {
							_startTEXT: u,
							_yesTEXT: "<b>{0}</b>",
							_noTEXT: u,
							_errorTEXT: u,
							_errorClickTEXT: u,
							_errorLOADING: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
							_errorTooMuch: '{0}<a target="_blank" href="{1}">{2}</a>',
							_errorTooMuchClick: '{0}<a target="_blank" href="{1}">{2}</a>',
							_Loading: "<b>{0}</b>",
							_errorServer: u,
							_error300: '{0}<a href="{1}">{2}</a>{3}',
							_errorNetwork: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
							_infoTEXT: u,
							_submit: u,
							_learning: u,
							_closeHelp: u,
							_slideToVerify: u,
							_notVerified: u,
							_captcha: u,
							_OK: u,
							_sthWrong: u,
							_reload: u,
							_feedback: u,
							_cc_select: u,
							_cc_title: u,
							_cc_fail: u,
							_wait: u,
							_cc_refresh: u,
							_verify: u,
							_cancel: u,
							_retry: u,
							_cc_contact: '{0}<a href="{1}" target="_blank">{2}</a>',
							_cc_img_fail: u,
							_cc_req_fail: u,
							_close: u
						},
						h = {
							cn: {
								_startTEXT: "请按住滑块，拖动到最右边",
								_yesTEXT: "验证通过",
								_noTEXT: "请在下方输入验证码",
								_errorTEXT: "验证码输入错误，请重新输入",
								_errorClickTEXT: "验证码点击错误，请重试",
								_errorLOADING: ["加载失败，请", s, "点击刷新", "，或", l, "提交反馈"],
								_errorTooMuch: ["输入错误，请重新输入，或", l, "提交反馈"],
								_errorTooMuchClick: ["点击错误，请重新输入，或", l, "提交反馈"],
								_Loading: "加载中",
								_errorServer: "服务器错误或者超时",
								_error300: ["哎呀，出错了，点击", s, "刷新", "再来一次"],
								_errorNetwork: ["网络不给力，请", s, "点击刷新", "，或", l, "提交反馈"],
								_infoTEXT: "",
								_submit: "提交",
								_learning: "了解新功能",
								_closeHelp: "关闭帮助",
								_slideToVerify: "向右滑动验证",
								_notVerified: "验证未通过",
								_captcha: "验证码",
								_OK: "确定",
								_sthWrong: "非常抱歉，这出错了...",
								_reload: "刷新",
								_feedback: "反馈",
								_cc_select: "请选择图片验证",
								_cc_title: "请选择下面与左图同一类别的图片",
								_cc_fail: "图片选择不正确，请重试",
								_wait: "请稍候",
								_cc_refresh: "换一批",
								_verify: "验证",
								_cancel: "取消",
								_retry: "重试",
								_cc_contact: ["遇到问题了？", l, "点此反馈"],
								_cc_img_fail: "图片验证码获取失败，请检查网络连接并重试。",
								_cc_req_fail: "无法连接服务器，请检查网络连接并重试。",
								_close: "关闭"
							},
							tw: {
								_startTEXT: "請按住滑塊，拖動到最右邊",
								_yesTEXT: "驗證通過",
								_noTEXT: "請在下方輸入驗證碼",
								_errorTEXT: "驗證碼輸入錯誤，請重新輸入",
								_errorClickTEXT: "驗證碼點擊錯誤，請重試",
								_errorLOADING: ["加載失敗，請", s, "點擊刷新", "，或", l, "提交反饋"],
								_errorTooMuch: ["輸入錯誤，請重新輸入，或", d, "提交反饋"],
								_errorTooMuchClick: ["點擊錯誤，請重新輸入，或", d, "提交反饋"],
								_Loading: "加載中",
								_errorServer: "服務器錯誤或者超時",
								_error300: ["哎呀，出錯了，點擊", s, "刷新", "再來壹次"],
								_errorNetwork: ["網絡不給力，請", s, "點擊刷新", "，或", d, "提交反饋"],
								_infoTEXT: "",
								_submit: "提交",
								_learning: "了解新功能",
								_closeHelp: "关闭帮助",
								_slideToVerify: "向右滑動驗證",
								_notVerified: "驗證未通過",
								_captcha: "驗證碼",
								_OK: "確定",
								_sthWrong: "非常抱歉，這出錯了...",
								_reload: "刷新",
								_feedback: "反饋"
							},
							en: {
								_startTEXT: "Please slide to verify",
								_yesTEXT: "Verified",
								_noTEXT: "Please input verification code",
								_errorTEXT: "Please try again",
								_errorClickTEXT: "Please try again",
								_errorLOADING: ["Loading failed, ", s, "refresh", " or ", p, "provide feedback"],
								_errorTooMuch: ["Please try again or ", p, "provide feedback"],
								_errorTooMuchClick: ["Please try again or ", p, "provide feedback"],
								_errorServer: "Server Error",
								_Loading: "Loading",
								_error300: ["Oops... something's wrong. Please ", s, "refresh", " and try again."],
								_errorNetwork: ["Net Err. Please ", s, "refresh", ", or ", p, "feedback"],
								_infoTEXT: "",
								_submit: "Submit",
								_learning: "help",
								_closeHelp: "Close",
								_slideToVerify: "slide to verify",
								_notVerified: "Not Verified",
								_captcha: "Captcha",
								_OK: "OK",
								_sthWrong: "Sorry, something wrong....",
								_reload: "Reload",
								_feedback: "Feedback"
							}
						};
					for (r in h) h.hasOwnProperty(r) && i(h[r]);
					h.zh_CN = h.cn, h.zh_TW = h.tw, h.en_US = h.en, n.language = h, n.upLang = o, n.upResetIndex = c
				}, {}],
				15: [function(e, t, n) {
					"use strict";
					var i = e("./noCaptcha"),
						a = e("./scale").makeScale,
						o = e("./event"),
						c = e("./util"),
						r = e("./base_fn").BaseFun,
						s = e("./url_map").mmstat_base;
					n.makeNC = function(t, n) {
						function l(t, i, o, r) {
							var l = e("./glog").makeLog(i.foreign ? s.gj : s.gm),
								d = i.glog;
							"boolean" != typeof n._b_glog && (n._b_glog = d && "number" == typeof d && Math.random() < d);
							var p = function(e) {
									n._b_glog && !_[e] && l.log(i.appkey, UA_Opt.Token || i.token, e);
									var t = o[e];
									if (t && t.length) {
										var a, c = [];
										for (a = 1; a < arguments.length; a++) c.push(arguments[a]);
										for (a = 0; a < t.length; a++) if (t[a].apply(null, c) === !1) return !1
									}
								};
							return p = c.decorator.after(p, function(e) {
								e === !1 && setTimeout(function() {
									var e = h[t];
									e && e.reload()
								}, 1)
							}), [a(r, n, p), p]
						}
						function d(a) {
							a = c.mix(c.clone(f), a), n.index++, n.prefix = a.prefix || "nc_" + n.index + "_", e("./patch/alipay").reg(a);
							var o = {},
								s = {},
								d = new r(a, c.obj2param),
								p = l(n.index, a, o, d),
								u = p[0],
								g = p[1],
								h = i.makeNoCaptcha(t, s, n, o, u, g, d),
								_ = new h;
							return _._index = n.index, _.init(a), _
						}
						function p(e) {
							e && this.init(e)
						}
						function u(e) {
							p.prototype[e] = function() {
								if (this.is_destroyed) return this;
								var t = g[this.index],
									n = t[e].apply(t, arguments);
								return "destroy" === e && (this.is_destroyed = !0), "getToken" === e ? n : this
							}
						}
						var g = [],
							h = [],
							f = {},
							_ = o.deprecated;
						p.reset = function(e) {
							var t = g[e];
							t && t.reset && t.reset()
						}, p.config = function(e) {
							c.mix(f, e)
						}, p.getByIndex = function(e) {
							return h[e]
						}, p.prototype = {
							init: function(e) {
								var t = d(e);
								return this.index = n.index, g[this.index] = t, h[this.index] = this, this
							}
						};
						var m, v = ["on", "reset", "reload", "show", "hide", "upLang", "getToken", "destroy"];
						for (m = 0; m < v.length; m++) u(v[m]);
						return p
					}
				}, {
					"./base_fn": 5,
					"./event": 9,
					"./glog": 10,
					"./noCaptcha": 16,
					"./patch/alipay": 18,
					"./scale": 21,
					"./url_map": 25,
					"./util": 26
				}],
				16: [function(require, module, exports) {
					"use strict";

					function makeNoCaptcha(module_nc, opt, inn_vars, nc_events, Scale, onNCEvent, _) {
						function _upResetIndex(e) {
							return upResetIndex(e, nc_index)
						}
						function _getToken() {
							return opt.token || UA_Opt.Token || umx.getToken()
						}
						function showError(e) {
							var t;
							t = e ? language[opt.language]._errorNetwork : language[opt.language]._errorLOADING, t = t.replace("%TOKEN", opt.token), t = _upResetIndex(t), _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + t + "</div>", el_render_to && util.removeClass(el_render_to, "show-click-captcha")
						}
						function NoCaptcha() {}
						var nc_index = inn_vars.index,
							nc_prefix = inn_vars.prefix,
							scale_btn = nc_prefix + "n1z",
							scale_bar = nc_prefix + "n1t",
							TEXTELEM, gErrTimes = 0,
							ajaxURL, clsCheckCode = m_checkcode.init(inn_vars, _, onNCEvent),
							objCheckCode, tpl = makeTemplate({
								idx: nc_index,
								prefix: nc_prefix
							}),
							glog = require("./glog").makeLog(opt.foreign ? mmstat_base.gj : mmstat_base.gm),
							report = glog.report,
							el_render_to, showHelp = makeShowHelp(opt, _, inn_vars),
							loading_circle_html = '\n        <div id="nc-loading-circle" class="nc-loading-circle">\n          <div class="sk-circle1 sk-circle"></div>\n          <div class="sk-circle2 sk-circle"></div>\n          <div class="sk-circle3 sk-circle"></div>\n          <div class="sk-circle4 sk-circle"></div>\n          <div class="sk-circle5 sk-circle"></div>\n          <div class="sk-circle6 sk-circle"></div>\n          <div class="sk-circle7 sk-circle"></div>\n          <div class="sk-circle8 sk-circle"></div>\n          <div class="sk-circle9 sk-circle"></div>\n          <div class="sk-circle10 sk-circle"></div>\n          <div class="sk-circle11 sk-circle"></div>\n          <div class="sk-circle12 sk-circle"></div>\n        </div>\n    ',
							isIE8 = util.isIEX(8),
							isIE9 = util.isIEX(9);
						return (isIE8 || isIE9) && (loading_circle_html = ""), NoCaptcha.prototype = {
							init: function(e) {
								win.__nc = this, module_nc.nc = this;
								var t = default_opt.language;
								e.foreign && (t = "en", default_opt.language = t), _.objUpdate(opt, default_opt), _.objUpdate(opt, e), opt.token || (opt.token = default_opt.token), this.opt = opt, language[opt.language] || (loadExLang(this, opt.language, language), opt.language = t), this.render_to = opt.renderTo, this.render_to && (el_render_to = _.id(this.render_to)), el_render_to && util.addClass(el_render_to, "nc-container"), opt.is_tbLogin && (tb_login = require("./tb_login").makeTBLogin(inn_vars)), ajaxURL = URL_MAP[opt.foreign] || URL_MAP[0], ajaxURL = util.mix(ajaxURL, opt.apimap), ajaxURL.uab_Url = opt.uaUrl || ajaxURL.uab_Url;
								var n;
								if (opt.renderTo && opt.appkey && opt.token) {
									n = _.id(opt.renderTo);
									var i = Math.min(n.offsetWidth, n.parentNode.offsetWidth);
									!opt.customWidth && i > 300 && (opt.customWidth = 300), this.updateWidth(opt.customWidth), n.setAttribute("data-nc-idx", inn_vars.index.toString()), n && (n.innerHTML = '<div id="' + nc_prefix + 'nocaptcha"><div id="' + nc_prefix + 'wrapper" class="nc_wrapper"><div id="' + nc_prefix + '_n1t_loading" class="nc_scale"><div id="' + nc_prefix + '_bg" class="nc_bg" style="width: 0;"></div><div id="' + nc_prefix + '_scale_text_loading" class="scale_text">' + language[opt.language]._Loading + loading_circle_html + "</div></div></div></div>"), UA_Opt.LogVal = "_n", "undefined" == typeof win.acjs ? this.inituab() : (this.initUaParam(), UA_Opt.Token = (new Date).getTime() + ":" + opt.token, UA_Opt.reload && UA_Opt.reload()), this.afterUA()
								}
								if (opt.cssUrl) if (doc.createStyleSheet) doc.createStyleSheet(opt.cssUrl);
								else {
									var a = doc.createElement("link");
									a.type = "text/css", a.rel = "stylesheet", a.href = inn_vars.has_pointman ? util.addHourStamp(opt.cssUrl) : opt.cssUrl;
									var o = doc.getElementsByTagName("script")[0];
									o.parentNode.insertBefore(a, o)
								}
								onNCEvent(event_names.init)
							},
							on: function(e, t) {
								var n = window.console,
									i = event_deprecated[e];
								i && n && n.warn("NC: Event '" + e + "' will be deprecated, use '" + i + "' instead."), nc_events[e] = nc_events[e] || [], nc_events[e].push(t)
							},
							updateWidth: function(e, t) {
								if (e) {
									var n, i, a = "undefined" == typeof e ? "undefined" : _typeof(e);
									"number" == a ? n = e : i = "string" == a ? _.id(e) : e, i && (n = i.offsetWidth), n && (this.c_width = n, this.__is_c_width_setted = 1, this.try2setWidth(nc_prefix + "wrapper"), this.updateCSS(nc_prefix, n, t))
								}
							},
							updateCSS: function(e, t, n) {
								var i = util.isIEX(6),
									a = util.isIEX(7),
									o = i || a ? " !important" : "";
								css.insertCSS((n ? "" : ".nc-container #" + e + "wrapper,.nc-container.tb-login #" + e + "wrapper{width:" + t + "px}\n") + [".nc-container .imgCaptcha", ".nc-container .clickCaptcha"].join(",") + "{width:" + (t - 2) + "px" + o + ";}\n" + [".nc-container.tb-login .imgCaptcha", ".nc-container.tb-login .clickCaptcha"].join(",") + "{width:" + t + "px" + o + ";}\n" + [".nc-container.tb-login .imgCaptcha .captcha-error", ".nc-container.tb-login .clickCaptcha .captcha-error"].join(",") + "{width:" + (t - 8) + "px" + o + ";}\n.nc-container.tb-login .errloading, .nc-container .errloading {width:" + (t - 10) + "px;}")
							},
							updateAudioBoxWidth: function(e, t, n) {
								var i = _.id(e + "omeo-refresh-audio").offsetWidth,
									a = _.id(e + "_voice_close").offsetWidth,
									o = _.id(e + "omeo-code-key").offsetWidth,
									c = t - i - a - o - n;
								_.id(e + "omeo-code-audiobox").style.width = c + "px"
							},
							try2setWidth: function(e, t) {
								"string" == typeof e && (e = _.id(e)), t = t || this.c_width || (el_render_to ? el_render_to.offsetWidth : 0), t && e && e.style && (e.style.width = t + "px")
							},
							inituab: function() {
								this.initUaParam(), UA_Opt.Token = (new Date).getTime() + ":" + opt.token, _.loadjs(util.addHourStamp(ajaxURL.uab_Url), function(e) {
									if ("timeout" === e) showError(!0), report("loaduab failed");
									else try {
										UA_Opt.reload()
									} catch (t) {
										report("uab die")
									}
								})
							},
							initUaParam: function() {
								function e(e, t) {
									UA_Opt[e] = "undefined" != typeof UA_Opt[e] && UA_Opt[e] > 0 ? UA_Opt[e] : t
								}
								opt.is_Opt ? (e("MPInterval", 4), e("MaxMCLog", 12), e("MaxKSLog", 14), e("MaxMPLog", 5), e("MaxFocusLog", 6), e("SendInterval", 5), e("SendMethod", 8), e("GPInterval", 50), e("MaxGPLog", 1), e("MaxTCLog", 12), e("Flag", 882894)) : (UA_Opt.SendInterval = 5, UA_Opt.SendMethod = 8, UA_Opt.MaxMCLog = 12, UA_Opt.MaxKSLog = 14, UA_Opt.MaxMPLog = 5, UA_Opt.MaxGPLog = 1, UA_Opt.MaxTCLog = 12, UA_Opt.GPInterval = 50, UA_Opt.MPInterval = 4, UA_Opt.MaxFocusLog = 6, UA_Opt.isSendError = 1, UA_Opt.Flag = 882894)
							},
							afterUA: function() {
								"undefined" == typeof umx ? this.initUM() : this.afterUM()
							},
							initUM: function() {
								var e = this;
								_.loadjs(ajaxURL.umid_Url, function(t) {
									if ("timeout" === t) showError(!0);
									else {
										try {
											if (t) {
												if (--default_opt.times > 0) return void setTimeout(function() {
													e.initUM()
												}, 500);
												report("initUM")
											}
											var n = document.getElementById("_umfp"),
												i = (new Date).getTime();
											umx.init({
												timeout: opt.timeout,
												timestamp: i,
												token: opt.token,
												serviceUrl: ajaxURL.umid_serUrl,
												appName: opt.appkey,
												containers: {
													flash: n,
													dcp: n
												},
												closeImage: !1
											})
										} catch (t) {
											report("umx die")
										}
										e.afterUM()
									}
								})
							},
							afterUM: function() {
								function e() {
									(n || umx.getStatus()) && win.__acjs ? (t.reload(), clearInterval(a), onNCEvent(event_names.ready)) : i++ > 100 && (showError(!0), clearInterval(a))
								}
								if (!this.__nc_afterUM) {
									this.__nc_afterUM = !0;
									var t = this;
									if ("undefined" == typeof umx) return report("afterUM"), void showError(!0);
									var n, i = 0;
									setTimeout(function() {
										n = !0
									}, 3e3);
									var n;
									setTimeout(function() {
										n = !0
									}, 3e3);
									var a = setInterval(e, 100);
									e()
								}
							},
							__reload_voicebtn: function() {
								var e, t = _.id(nc_prefix + "_voicebtn"),
									n = this;
								_.addHandler(t, "keydown", function i(e) {
									var n = e || window.event;
									13 != n.keyCode && 13 != n.which || (_.removeEvt(t, "keydown", i), t.click())
								}), t.onclick = function() {
									function t(t) {
										function a(e) {
											if (e.success) if (100 == e.result.code) n.userCallback(objCheckCode.config.sessionid, e.result.value, e.result.sig);
											else if (900 == e.result.code) {
												UA_Opt.reload && UA_Opt.reload();
												var t = _.id(nc_prefix + "_captcha_text"),
													i = language[opt.language]._errorClickTEXT;
												++gErrTimes > MAX_ERR_TIME && (i = language[opt.language]._errorTooMuch.replace("%TOKEN", opt.token)), t.innerHTML = '<i class="nc_iconfont icon_close">' + icon_close + "</i>" + i, t.style.visibility = "visible"
											} else 300 != e.result.code && 69634 != e.result.code || (report("block"), _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + _upResetIndex(language[opt.language]._error300) + "</div>", onNCEvent(event_names.error), onNCEvent(event_names.error300));
											else n.errorCallback()
										}
										if (e) {
											var o = t.result;
											o && (objCheckCode || (objCheckCode = new clsCheckCode({
												type: "150_40",
												identity: "REGISTER",
												sessionid: o.csessionid,
												element: i,
												codeType: "audio",
												lang: opt.language
											}), objCheckCode.check(function(e) {
												"success" != e.message && (objCheckCode.playErrAudio(), setTimeout(function() {
													var e = _.id(nc_prefix + "omeo-refresh-audio");
													e && e.click()
												}, 5e3)), "success" == e.message && _.jsonp({
													url: ajaxURL.checkcode,
													callback: "callback",
													data: {
														csessionid: o.csessionid,
														checkcode: function() {
															var e = {};
															return e.code = objCheckCode.cache.lastCheckCode, _.obj2str(e)
														}(),
														a: opt.appkey,
														t: opt.token,
														n: win._n || "",
														p: "{}",
														r: Math.random(),
														lang: opt.language,
														v: inn_vars.v
													},
													success: a,
													fail: function(e) {
														n.errorCallback(e)
													}
												})
											}), objCheckCode.render(), onNCEvent(event_names.switchevent, {
												from: "scale",
												to: "audio"
											}), objCheckCode.switchCode({
												type: "audio"
											})))
										}
									}
									var i = _.id(nc_prefix + "_voice");
									return _.id(nc_prefix + "imgCaptcha").style.display = "none", _.id(nc_prefix + "clickCaptcha").style.display = "none", e ? (e = !1, i.style.display = "none", objCheckCode && objCheckCode.stopAudio(), clearInterval(win.__progtid), n.reset(), !1) : (e = !0, i.style.display = "block", objCheckCode && (objCheckCode.resetPlayer({
										state: "end"
									}), objCheckCode.switchCode({
										type: "audio"
									})), void _.jsonp({
										url: ajaxURL.analyze,
										callback: "callback",
										data: {
											a: opt.appkey,
											t: opt.token,
											n: win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || "",
											_a: "audio",
											p: "{}",
											lang: opt.language,
											v: inn_vars.v
										},
										success: t,
										fail: function() {
											e && report("audio fail")
										}
									}))
								}
							},
							reload: function() {
								objCheckCode = null, clearInterval(win.__progtid);
								var e = _.id(opt.renderTo);
								e && (e.innerHTML = tpl, util.addClass(el_render_to, "nc-container")), opt.audio && (_.id(nc_prefix + "_voicebtn").style.display = "block", util.addClass(_.id(nc_prefix + "n1t"), "is_audio")), tb_login && tb_login.init(this.render_to, el_render_to, opt.customFloatHeight), this.__reload_voicebtn();
								var t = _.id(nc_prefix + "_helpbtn");
								t && (navigator.userAgent.indexOf("MSIE 6.0") >= 0 && (t.style.display = "none"), t.innerHTML = language[opt.language]._learning, t.onclick = function() {
									setTimeout(showHelp, 100)
								}), TEXTELEM = _.tag(scale_bar + " div")[1], inn_vars.TEXTELEM = TEXTELEM, opt.isEnabled && new Scale(scale_btn, scale_bar, this)
							},
							reset: function() {
								this.__nc_afterUM = !1, win.UA_Opt && (UA_Opt.Token = (new Date).getTime() + ":" + opt.token);
								var e;
								opt.renderTo && opt.appkey && opt.token && (e = _.id(opt.renderTo), e && util.addClass(el_render_to, "nc-container"), e.innerHTML = '<div id="' + nc_prefix + 'nocaptcha"><div id="' + nc_prefix + 'wrapper" class="nc_wrapper"><div id="' + nc_prefix + '_n1t_loading" class="nc_scale"><div id="' + nc_prefix + '_bg" class="nc_bg" style="width: 0;"></div><div id="' + nc_prefix + '_scale_text_loading" class="scale_text">' + language[opt.language]._Loading + loading_circle_html + "</div></div></div></div>", "undefined" == typeof win.acjs ? this.loaduab() : (UA_Opt.LogVal = "_n", this.initUaParam(), UA_Opt.Token = (new Date).getTime() + ":" + opt.token, UA_Opt.reload && UA_Opt.reload()), this.afterUA())
							},
							show: function() {
								el_render_to && (el_render_to.style.display = "block", tb_login && tb_login.adjustPosition(opt.customFloatHeight), this.is_show = !0)
							},
							hide: function() {
								el_render_to && (el_render_to.style.display = "none", this.is_show = !1)
							},
							loaduab: function() {
								UA_Opt.LogVal = "_n", this.initUaParam(), UA_Opt.Token = (new Date).getTime() + ":" + opt.token, _.loadjs(util.addHourStamp(ajaxURL.uab_Url), function(e) {
									"timeout" === e && (showError(!0), report("loaduab failed"));
									try {
										UA_Opt.reload()
									} catch (t) {
										report("uab die")
									}
								})
							},
							enabled: function() {
								return new Scale(scale_btn, scale_bar, this)
							},
							errorCallback: function(e) {
								var t = _.id(scale_bar),
									n = this,
									i = t.getElementsByTagName("span"),
									a = t.getElementsByTagName("div");
								if (onNCEvent(event_names.fail), 0 !== i.length && 0 !== a.length) {
									var o = i[0],
										c = a[0];
									showError(e), util.addClass(c, "orange"), util.addClass(o, "reload"), _.addHandler(t, "click", function() {
										UA_Opt.Token = (new Date).getTime() + ":" + opt.token, UA_Opt.reload && UA_Opt.reload(), n.reload(), _.removeEvt(t, "click")
									}), e && opt.error && opt.error(language[opt.language]._errorServer)
								}
							},
							onScaleReady: function onScaleReady(elem) {
								var trans = opt.trans || {};
								"string" == typeof trans && (trans = eval("0," + trans));
								for (var arr = opt.elementID || [], i = 0; i < arr.length; i++) {
									var id = arr[i],
										el = doc.getElementById(id);
									el && (trans[id] = el.value)
								}
								var me = this;
								TEXTELEM.innerHTML = language[opt.language]._Loading + loading_circle_html, util.addClass(inn_vars.TEXTELEM, "nc-align-center"), util.addClass(TEXTELEM, "scale_text2");
								try {
									UA_Opt.sendSA()
								} catch (e) {}
								_.jsonp({
									url: ajaxURL.analyze,
									callback: "callback",
									data: {
										a: opt.appkey,
										t: opt.token,
										n: win[UA_Opt.LogVal || "_n"] || "",
										p: _.obj2str(trans),
										scene: opt.scene || (inn_vars.has_pointman ? pointman.config.common.scene : "") || "",
										asyn: 0,
										lang: opt.language,
										v: inn_vars.v
									},
									success: function(e) {
										me.onScaleReadyCallback(e, elem)
									},
									fail: function(e) {
										report("onScaleReady"), me.errorCallback(e)
									}
								})
							},
							onScaleReadyCallback: function(e, t) {
								if (e.success) {
									var n = e.result,
										i = n.code;
									0 === i ? (_.id(scale_btn).className = "nc_iconfont btn_ok", _.id(scale_btn).innerHTML = icon_ok_sign, TEXTELEM.innerHTML = language[opt.language]._yesTEXT, util.removeClass(t.btn.parentNode, "nc_err"), this.userCallback(n.csessionid, "pass", n.value)) : (UA_Opt.reload && (UA_Opt.Token = (new Date).getTime() + ":" + opt.token, UA_Opt.reload && UA_Opt.reload()), util.addClass(t.btn, "nc_iconfont btn_warn"), util.addClass(t.btn.parentNode, "nc_err"), t.btn.innerHTML = icon_warn, t.bar = _.tag(scale_bar + " div")[0], TEXTELEM.innerHTML = language[opt.language]._Loading + loading_circle_html, "function" == typeof opt.verifycallback && 300 != i && opt.verifycallback(n), 100 == i ? (this.__inn = 1, this.onScale100(n.csessionid, n.value)) : 200 == i ? (this.__inn = 1, this.onScale200(n.csessionid, n.value)) : 260 == i ? this.onScale260(n.csessionid, n.value) : 300 != i && 69634 != i || (report("block"), util.removeClass(inn_vars.TEXTELEM, "nc-align-center"), _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + _upResetIndex(language[opt.language]._error300) + "</div>", onNCEvent(event_names.error), onNCEvent(event_names.error300)))
								} else this.errorCallback()
							},
							onScale100: function e(t, n, i) {
								var a = e,
									o = i || this,
									c = _.tag(nc_prefix + "clickCaptcha div");
								this.__inn && (this.__inn = 0, _.addHandler(_.id(nc_prefix + "_btn_2"), "click", function() {
									a.call(o, t, n)
								}));
								var r, s = setTimeout(function() {
									s = -1, r || (showError(!0), report("captcha timeout"))
								}, 5e3);
								onNCEvent(event_names.beforeverify), onNCEvent(event_names.before_code), _.jsonp({
									url: ajaxURL.get_captcha,
									callback: "callback",
									data: {
										sessionid: t,
										identity: opt.appkey,
										style: n,
										lang: opt.language,
										v: inn_vars.v
									},
									success: function(e) {
										if (e.questiontext && (e.questiontext = e.questiontext.replace(/<span[^>]+?>/g, "<i>"), e.questiontext = e.questiontext.replace(/<\/span[^>]*?>/g, "</i>")), r = !0, -1 != s) {
											if (clearTimeout(s), !e.tag) return report("no tag"), void showError(!0);
											var i = _.id(nc_prefix + "clickCaptcha");
											i && (i.style.display = "block", o.__is_c_width_setted || o.updateWidth(_.id(nc_prefix + "wrapper"), 1)), e.imgurl = e.imgurl.replace("pin.aliyun.com", "pin2.aliyun.com");
											var l;
											opt.apimap && opt.apimap.get_captcha && (l = require("./patch/domain_replace"), e.imgurl = l.run(e.imgurl, opt.apimap.get_captcha)), el_render_to && util.addClass(el_render_to, "show-click-captcha");
											var d = e.imgurl.split("?")[1].split("=")[1],
												p = e.questiontext.split(e.tag[0]),
												u = p.shift();
											util.removeClass(inn_vars.TEXTELEM, "nc-align-center"), _.id(nc_prefix + "_scale_text") && (-1 == e.questiontext.indexOf("<i>") ? _.id(nc_prefix + "_scale_text").innerHTML = u + "<i>“" + e.tag[0] + "”</i>" + p.join(e.tag[0]) : _.id(nc_prefix + "_scale_text").innerHTML = e.questiontext), tb_login && tb_login.getInform(_.id(nc_prefix + "clickCaptcha"), module_nc.nc), c[1].innerHTML = '<img src="' + e.imgurl + '" >';
											var g, h = c[1].getElementsByTagName("img")[0];
											h.onload = function() {
												g = !0, -1 != f && clearTimeout(f)
											}, h.onerror = function() {
												report("captcha onerror"), showError()
											};
											var f = setTimeout(function() {
												f = -1, g || (showError(!0), report("captcha timeout"))
											}, 5e3);
											_.addHandler(h, "click", function(e) {
												util.addClass(inn_vars.TEXTELEM, "nc-align-center"), TEXTELEM.innerHTML = language[opt.language]._Loading + loading_circle_html, _.jsonp({
													url: ajaxURL.checkcode,
													callback: "callback",
													data: {
														csessionid: t,
														checkcode: function() {
															var t = {};
															return t.imgid = d, t.w = h.width.toString(), t.h = h.height.toString(), t.x = void 0 === e.offsetX ? util.getOffset(e).offsetX : e.offsetX, t.y = void 0 === e.offsetY ? util.getOffset(e).offsetY : e.offsetY, t.x = parseInt(t.x).toString(), t.y = parseInt(t.y).toString(), _.obj2str(t)
														}(),
														a: opt.appkey,
														t: opt.token,
														n: win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || "",
														p: "{}",
														r: Math.random(),
														lang: opt.language,
														v: inn_vars.v
													},
													success: function(e) {
														var i = _.id(scale_btn);
														if (e.success) if (100 == e.result.code) i.className = "nc_iconfont btn_ok", i.innerHTML = icon_ok_sign, util.addClass(inn_vars.TEXTELEM, "nc-align-center"), _.tag(scale_bar + " div")[0].className = "nc_bg", TEXTELEM.innerHTML = language[opt.language]._yesTEXT, util.removeClass(i.parentNode, "nc_err"), _.toggle(nc_prefix + "clickCaptcha"), el_render_to && util.removeClass(el_render_to, "show-click-captcha"), o.userCallback && o.userCallback(t, n, e.result.sig);
														else if (900 == e.result.code) {
															UA_Opt.reload && UA_Opt.reload(), a.call(o, t, n, o);
															var c = _.id(nc_prefix + "_captcha_text"),
																r = language[opt.language]._errorClickTEXT;
															++gErrTimes > MAX_ERR_TIME && (r = language[opt.language]._errorTooMuchClick.replace("%TOKEN", opt.token)), c.innerHTML = '<i class="nc_iconfont icon_close">' + icon_close + "</i>" + r, c.style.visibility = "visible"
														} else 300 != e.result.code && 69634 != e.result.code || (report("block"), _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + _upResetIndex(language[opt.language]._error300) + "</div>", onNCEvent(event_names.error), onNCEvent(event_names.error300));
														else o.errorCallback()
													},
													fail: function(e) {
														o.errorCallback(e)
													}
												})
											}), onNCEvent(event_names.afterverify), onNCEvent(event_names.after_code)
										}
									},
									fail: function() {
										_.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + _upResetIndex(language[opt.language]._errorLOADING) + "</div>", o.errorCallback(!0)
									}
								})
							},
							onScale200: function t(e, n) {
								function i(e) {
									var t = _.id(nc_prefix + "captcha_input");
									return (h = t.value.replace(/[^\w\/]/gi, "")) ? (h.length > g.length ? u.push(h.slice(g.length)) : h.length < g.length ? u.push("bsp") : u.push("oth"), void(g = h)) : (g = "", void u.push("oth"))
								}
								function a() {
									var t = _.tag(nc_prefix + "imgCaptcha input")[0].value;
									if (t) {
										var i = {
											ksl: u.slice(0, 20)
										};
										_.jsonp({
											url: ajaxURL.checkcode,
											callback: "callback",
											data: {
												csessionid: e,
												checkcode: function() {
													var e = {};
													return e.code = t, _.obj2str(e)
												}(),
												a: opt.appkey,
												t: opt.token,
												n: win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || "",
												p: _.obj2str(i),
												lang: opt.language,
												v: inn_vars.v
											},
											success: function(t) {
												if (t.success) {
													var i = _.id(scale_btn),
														a = _.tag(nc_prefix + "imgCaptcha div")[2];
													if (100 == t.result.code) i.className = "nc_iconfont btn_ok", i.innerHTML = icon_ok_sign, _.tag(scale_bar + " div")[0].className = "nc_bg", TEXTELEM.innerHTML = language[opt.language]._yesTEXT, util.addClass(inn_vars.TEXTELEM, "nc-align-center"), util.removeClass(i.parentNode, "nc_err"), a.style.borderTopColor = "#e5e5e5", _.toggle(nc_prefix + "imgCaptcha"), r.userCallback.call(this, e, n, t.result.sig);
													else if (900 == t.result.code) {
														var o = _.tag(nc_prefix + "imgCaptcha input")[0];
														o && (o.value = ""), UA_Opt.reload && UA_Opt.reload(), c.call(r, e, n);
														var s = language[opt.language]._errorTEXT;
														++gErrTimes > MAX_ERR_TIME && (s = language[opt.language]._errorTooMuch.replace("%TOKEN", opt.token));
														var l = _.id(nc_prefix + "_captcha_img_text");
														l.innerHTML = '<i class="nc_iconfont icon_close">' + icon_close + "</i>" + s, l.style.display = "block", l.style.visibility = "visible", a.style.borderTopColor = "red"
													} else 300 != t.result.code && 69634 != t.result.code || (report("block"), _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + _upResetIndex(language[opt.language]._error300) + "</div>", onNCEvent(event_names.error), onNCEvent(event_names.error300))
												} else r.errorCallback();
												u = [], g = []
											},
											fail: function(e) {
												r.errorCallback(e)
											}
										})
									}
								}
								onNCEvent(event_names.beforeverify), onNCEvent(event_names.before_code);
								var o = _.id(nc_prefix + "imgCaptcha");
								o && (o.style.display = "block", this.__is_c_width_setted || this.updateWidth(_.id(nc_prefix + "wrapper"), 1));
								var c = t,
									r = this,
									s = _.tag(nc_prefix + "imgCaptcha div"),
									l = ajaxURL.get_img + "?type=" + n + "&identity=" + opt.appkey + "&sessionid=" + e + "&r=" + Math.random();
								s[1].innerHTML = '<img src="' + l + '" >';
								var d = s[1].getElementsByTagName("img")[0];
								_.addHandler(d, "click", function() {
									c.call(r, e, n)
								}), TEXTELEM.innerHTML = language[opt.language]._noTEXT, tb_login && tb_login.getInform(_.id(nc_prefix + "imgCaptcha"), module_nc.nc), util.removeClass(inn_vars.TEXTELEM, "nc-align-center"), _.id(nc_prefix + "scale_submit").innerHTML = language[opt.language]._submit;
								var p, u = [],
									g = "",
									h = "";
								this.__inn && (this.__inn = 0, _.addHandler(_.id(nc_prefix + "scale_submit"), "click", a), _.addHandler(_.id(nc_prefix + "_btn_2"), "click", function() {
									c.call(this, e, n)
								}), window.addEventListener ? _.id(nc_prefix + "captcha_input").addEventListener("input", i) : _.id(nc_prefix + "captcha_input").attachEvent("onpropertychange", function(e) {
									"value" === e.propertyName && i()
								}), p = _.id(nc_prefix + "imgCaptcha"), p && (p = p.getElementsByTagName("input")[0]) && _.addHandler(p, "keydown", function(e) {
									return e = e || window.event, 13 == e.keyCode || 13 == e.which ? (a(), e.preventDefault ? e.preventDefault() : window.event.returnValue = !1, !1) : void 0
								})), onNCEvent(event_names.afterverify), onNCEvent(event_names.after_code)
							},
							onScale260: function(e, t) {
								var n = this;
								onNCEvent(event_names.beforeverify), onNCEvent(event_names.before_code), TEXTELEM.innerHTML = language[opt.language]._cc_select, this.imgCategoryCaptcha = new ImgCategoryCaptcha(util.mix({
									nc: this,
									prefix: nc_prefix,
									$wrapper: _.id(nc_prefix + "wrapper"),
									csessionid: e,
									value: t,
									onfail: function() {
										onNCEvent(event_names.fail)
									},
									onerror: function() {
										onNCEvent(event_names.error), onNCEvent(event_names.error300)
									},
									onsuccess: function(i) {
										var a = _.id(scale_btn);
										a.className = "nc_iconfont btn_ok", a.innerHTML = icon_ok_sign, TEXTELEM.innerHTML = language[opt.language]._yesTEXT, util.removeClass(a.parentNode, "nc_err");
										try {
											n.userCallback(e, t, i)
										} catch (o) {
											throw o
										}
									}
								}, opt), {
									v: inn_vars.v,
									obj2str: _.obj2str
								}), onNCEvent(event_names.afterverify), onNCEvent(event_names.after_code)
							},
							userCallback: function(e, t, n) {
								var i = {
									csessionid: e || null,
									value: t || null,
									sig: n || null,
									token: _getToken()
								};
								opt.callback && opt.callback.call(this, i), onNCEvent(event_names.success, i)
							},
							upLang: function(e, t) {
								return _upLang(e, t)
							},
							getToken: function() {
								return _getToken()
							},
							destroy: function() {
								el_render_to.innerHTML = ""
							}
						}, NoCaptcha
					}
					var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
					function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
					}, win = window, doc = document, tb_login, util = require("./util"), ImgCategoryCaptcha = require("./imgCategoryCaptcha"), mmstat_base = require("./url_map").mmstat_base, URL_MAP = require("./url_map").URL_MAP, language = require("./language-core").language, _upLang = require("./language-core").upLang, upResetIndex = require("./language-core").upResetIndex, loadExLang = require("./lang_util").loadExLang, makeTemplate = require("./tpl").makeTemplate, m_checkcode = require("./checkcode"), makeShowHelp = require("./show_help").makeShowHelp, default_opt = require("./default_opt").default_opt, css = require("./css"), MAX_ERR_TIME = 3, icon_warn = "&#xe60a;", icon_ok_sign = "&#xe60b;", icon_close = "&#xe609;", m_event = require("./event"), event_names = m_event.names, event_deprecated = m_event.deprecated;
					exports.makeNoCaptcha = makeNoCaptcha
				}, {
					"./checkcode": 6,
					"./css": 7,
					"./default_opt": 8,
					"./event": 9,
					"./glog": 10,
					"./imgCategoryCaptcha": 11,
					"./lang_util": 12,
					"./language-core": 14,
					"./patch/domain_replace": 19,
					"./show_help": 22,
					"./tb_login": 23,
					"./tpl": 24,
					"./url_map": 25,
					"./util": 26
				}],
				17: [function(e, t, n) {
					"use strict";

					function i(e) {
						var t;
						e && (t = e.filename + "") && (t = t.split("?")[0], t.match(/(\/ncpc\/nc\.js$)|(\/uab\.js$)|(umscript.*\/um\.js$)/) && (o.console && void 0, a()))
					}
					function a(e) {
						"function" == typeof ncDowngrade ? (ncDowngrade(), e && o.__nc && o.__nc.show()) : e || setTimeout(function() {
							a(1)
						}, 100)
					}
					var o = window;
					o.addEventListener ? o.addEventListener("error", i, !0) : o.attachEvent && o.attachEvent("onerror", i)
				}, {}],
				18: [function(e, t, n) {
					"use strict";
					n.reg = function(e) {
						if (-1 !== location.hostname.indexOf("alipay.com")) {
							var t = e.renderTo;
							if (t && "string" == typeof t) {
								t = t.replace("#", "");
								var n = document.getElementById(t);
								if (n) {
									var i = n.parentNode;
									i && "_umfp" == i.id && (e.customWidth = e.customWidth || 300)
								}
							}
						}
					}
				}, {}],
				19: [function(e, t, n) {
					"use strict";

					function i(e, t) {
						var n, i = e.split(t);
						return 1 == i.length ? [i[0], "", ""] : i.length > 2 ? (n = i.splice(1), [i[0], t, n.join(t)]) : [i[0], t, i[1]]
					}
					function a(e) {
						var t = [],
							n = i(e, "//");
						return n[1] ? (t.push(n[0] + "//"), n = i(n[2], "/")) : (t.push(""), n = i(n[0], "/")), t = t.concat(n)
					}
					n.run = function(e, t) {
						var n = a(e),
							i = a(t);
						return n[1] = i[1], n.join("")
					}
				}, {}],
				20: [function(e, t, n) {
					"use strict";
					var i, a, o = "//g.alicdn.com/sd/ncpc/nc.css",
						c = document.getElementsByTagName("link"),
						r = c.length;
					try {
						for (i = 0; r > i; i++) a = c[i], a.href && -1 != a.href.indexOf(o) && (a.disabled = !0)
					} catch (s) {}
				}, {}],
				21: [function(e, t, n) {
					"use strict";

					function i() {
						var e = navigator.userAgent;
						return !/Firefox|MSIE/.test(e)
					}
					function a(e, t, n) {
						function a(e, n, a) {
							t.TEXTELEM && (t.TEXTELEM.innerHTML = s[a.opt.language || l.language]._startTEXT, i() && r.addClass(t.TEXTELEM, "slidetounlock")), this.btn = c.getElementById(e), this.bar = c.getElementById(n), this.txt = c.getElementById(p + "_scale_text"), this.step = this.bar.getElementsByTagName("DIV")[0], this.init(a)
						}
						var p = t.prefix;
						return a.prototype = {
							init: function(t) {
								function i(i) {
									function o() {
										s.btn.onmousedown = null, s.txt.onmousedown = null, e.removeEvt(l, "mousemove", c), e.removeEvt(l, "mouseup", h), e.removeEvt(l, "touchmove", _), e.removeEvt(l, "touchend", f), e.removeEvt(s.btn, "touchstart", a), e.removeEvt(s.txt, "touchstart", a);
										var i = {};
										i.btn = s.btn, i.bar = s.bar.childNodes[1], t.onScaleReady(i), n(d.actionend), n(d.slide_end)
									}
									function c(e) {
										m || (n(d.actionstart), n(d.slide_start), m = !0);
										var t = (e || u.event).clientX,
											i = g.min(x, g.max(-2, y + (t - v)));
										s.btn.style.left = i + "px", s.ondrag(g.round(100 * g.max(0, i / x)), i);
										var a = k + s.bar.offsetWidth;
										if (t >= a && (x > i || x > t - y)) return void h.call(this);
										var c = r.getClientRect(s.btn).left;
										i != x && t - c - b != x || o()
									}
									function h() {
										var t = parseInt(s.btn.style.left);
										x > t && (r.addClass(s.btn, "button_move"), r.addClass(e.id(p + "_bg"), "bg_move"), s.btn.style.left = "0px", s.ondrag(0, 0), setTimeout(function() {
											r.removeClass(s.btn, "button_move"), r.removeClass(e.id(p + "_bg"), "bg_move")
										}, 500)), e.removeEvt(this, "touchmove", _), e.removeEvt(l, "touchmove", _), e.removeEvt(l, "mousemove", c), e.removeEvt(l, "mouseup", h)
									}
									function f(e) {
										h.call(this, e.touches[0])
									}
									function _(e) {
										e.preventDefault(), c.call(this, e.touches[0])
									}
									var m = !1,
										v = (i || u.event).clientX,
										b = s.btn.offsetWidth,
										x = s.bar.offsetWidth - b,
										y = s.btn.offsetLeft,
										k = r.getClientRect(s.bar).left;
									e.addHandler(l, "mousemove", c), e.addHandler(l, "mouseup", h), e.addHandler(l, "touchmove", _), e.addHandler(l, "touchend", f)
								}
								function a(e) {
									e.preventDefault(), i.call(this, e.touches[0])
								}
								var s = this,
									l = c,
									u = o,
									g = Math;
								s.btn.onmousedown = i, s.txt.onmousedown = i, e.addHandler(s.btn, "touchstart", a), e.addHandler(s.txt, "touchstart", a), s.bar.onselectstart = function() {
									return !1
								}
							},
							ondrag: function(e, t) {
								this.step.style.width = Math.max(0, t) + "px"
							},
							text: function() {}
						}, a
					}
					var o = window,
						c = document,
						r = e("./util"),
						s = e("./language-core").language,
						l = e("./default_opt").default_opt,
						d = e("./event").names;
					n.makeScale = a
				}, {
					"./default_opt": 8,
					"./event": 9,
					"./language-core": 14,
					"./util": 26
				}],
				22: [function(e, t, n) {
					"use strict";

					function i(e, t, n) {
						function i() {
							r || (r = c()), r()
						}
						function c() {
							function n() {
								var e = a.createElement("div");
								return e.innerHTML = c, e.firstChild
							}
							function i() {
								function n() {
									var t = 0,
										n = 260,
										i = setInterval(function() {
											t += 5, t > n ? (u.innerHTML = o[e.language]._Loading, t > n + 100 && (u.innerHTML = o[e.language]._yesTEXT, clearInterval(i), setTimeout(function() {
												g.click()
											}, 2e3))) : (h.style.left = s + 20 + t + "px", p.style.left = t + "px", u.style.width = t + "px")
										}, 16)
								}
								u.innerHTML = "", r.style.display = "block";
								var i = t.id(e.renderTo),
									c = i.getBoundingClientRect(),
									s = c.left,
									l = c.top + 20 + a.body.scrollTop;
								d.style.left = s + "px", d.style.top = l + "px", p.style.left = s - 10 + "px", h.style.left = s + 20 + "px", h.style.top = l + 20 + "px", g.style.left = s + 200 + "px", g.style.top = l + 90 + "px", n()
							}
							var c = '<div id="' + s + '_help" class="nc_help"><div class="mask"></div><div id="' + s + '_slide_box" class="nc_scale"><div id="' + s + '_slide_button"></div><div id="' + s + '_slide_text" class="scale_text"></div><div id="' + s + '_slide_bg"></div></div><div id="' + s + '_btn_close"></div><div id="' + s + '_hand"></div>',
								r = n(c);
							a.body.appendChild(r), r.style.display = "none", r.style.width = a.body.scrollWidth + "px", r.style.height = a.body.scrollHeight + "px";
							var l = t.id(s + "_slide_text");
							l.innerHTML = o[e.language]._startTEXT;
							var d = t.id(s + "_slide_box"),
								p = t.id(s + "_slide_button"),
								u = t.id(s + "_slide_bg"),
								g = t.id(s + "_btn_close"),
								h = t.id(s + "_hand");
							return g.innerHTML = o[e.language]._closeHelp, g.onclick = function() {
								r.style.display = "none"
							}, i
						}
						var r, s = n.prefix;
						return i
					}
					var a = document,
						o = e("./language-core").language;
					n.makeShowHelp = i
				}, {
					"./language-core": 14
				}],
				23: [function(e, t, n) {
					"use strict";

					function i(t) {
						function n(e) {
							return a.getElementById(e)
						}
						function i(e) {
							if (!e) return 0;
							for (var t = e.offsetTop, n = e.offsetParent; n;) t += n.offsetTop, n = n.offsetParent;
							return t
						}
						function o(e, t) {
							var n, i, a, o = e.getElementsByTagName("div");
							for (n = 0; n < o.length; n++) if (i = o[n], a = i.className, a && a.indexOf(t) > -1) return i;
							return null
						}
						function c(e) {
							var t = n(f + "_scale_text"),
								i = o(e, "captcha-error");
							i || (i = a.createElement("div"), i.className = "captcha-error login-msg error", e.appendChild(i)), i.innerHTML = ["<i class='nc_iconfont icon_ban'>&#xe603;</i>", "<p class='error'>", t.innerHTML, "</p>"].join("")
						}
						function r(e, t) {
							var n = e.className;
							n.match(new RegExp("(^|\\s)" + t + "(\\s|$)")) || (e.className = (e.className + " " + t).replace(/^\s+|\s+$/g, ""))
						}
						function s() {
							var e = 0,
								t = n("J_Message");
							return t && (e = t.offsetHeight), e
						}
						function l() {
							s() > 0 && h && r(h, "nc-tm-min-fix")
						}
						function d(e) {
							if (h) {
								var t;
								m && (t = n(f + "_btn_1")) && (t.style.position = "absolute", t.style.top = "77px", t.style.right = "0");
								var a = h.className || "",
									o = "tb-login"; - 1 == a.indexOf(o) && (h.className = (a + " " + o).replace(/^\s+|\s+$/g, "")), h.className.match(/\bnc-old-login\b/) && (u = !0);
								var c;
								if (c = n("J_LoginBox") || n("J_Login") || _.getElementsByClassName("nc-outer-box")[0]) {
									var r = u ? 0 : 2,
										p = i(h),
										g = d;
									if (0 >= p) {
										if (g._count > 100) return;
										return g._count = (g._count || 0) + 1, void setTimeout(g, 100)
									}
									var v, b, x = i(c) - p,
										y = c.getBoundingClientRect();
									"number" == typeof e ? (v = e, b = 1) : v = y.height ? y.height : y.bottom - y.top;
									var k, w;
									w = n(f + "imgCaptcha"), w && (w.style.top = x + r + "px", k = v - r - 66, b && (k -= 13), b || 0 !== s() || (w.style.minHeight = "290px", k -= 10), w.style.height = k + "px", b && (w.style.minHeight = 0)), w = n(f + "clickCaptcha"), w && (w.style.top = x + r + "px", u ? (l(), k = v + 30, 255 > k && (k = 255), w.style.height = k + "px") : (l(), k = v - r - 30, b && (k -= 8), w.style.height = k + "px"), b && (w.style.minHeight = 0))
								}
							}
						}
						function p(e, t, n) {
							g = e, h = t, d(n)
						}
						var u, g, h, f = t.prefix,
							_ = e("./util"),
							m = _.isIEX(6);
						return {
							init: p,
							adjustPosition: d,
							getInform: c
						}
					}
					var a = document;
					n.makeTBLogin = i
				}, {
					"./util": 26
				}],
				24: [function(e, t, n) {
					"use strict";

					function i(e) {
						var t = e.prefix,
							n = '\n<div id="' + t + 'wrapper" class="nc_wrapper">\n<div id="' + t + 'n1t" class="nc_scale">\n<div id="' + t + '_bg" class="nc_bg"></div>\n<span id="' + t + 'n1z" class="nc_iconfont btn_slide">&#xe601;</span>\n<div id="' + t + '_scale_text" class="scale_text"></div>\n<div id="' + t + 'clickCaptcha" class="clickCaptcha">\n<div class="clickCaptcha_text">\n<b id="' + t + '_captcha_text" class="nc_captch_text"></b>\n<i id="' + t + '_btn_2" class="nc_iconfont nc_btn_2 btn_refresh">&#xe607;</i>\n</div>\n<div class="clickCaptcha_img"></div>\n<div class="clickCaptcha_btn"></div>\n</div>\n<div id="' + t + 'imgCaptcha" class="imgCaptcha">\n<div class="imgCaptcha_text"><input id="' + t + 'captcha_input" maxlength="6" type="text" style="ime-mode:disabled"></div>\n<div class="imgCaptcha_img" id="' + t + '_imgCaptcha_img"></div>\n<i id="' + t + '_btn_1" class="nc_iconfont nc_btn_1 btn_refresh"\n    onclick="document.getElementById(\'' + t + '_imgCaptcha_img\').children[0].click()">&#xe607;</i>\n<div class="imgCaptcha_btn">\n<div id="' + t + '_captcha_img_text" class="nc_captcha_img_text"></div>\n<div id="' + t + 'scale_submit" class="nc_scale_submit"></div>\n</div>\n</div>\n<div id="' + t + 'cc" class="nc-cc"></div>\n<i id="' + t + '_voicebtn" tabindex="0" role="button" class="nc_voicebtn nc_iconfont" style="display:none" >&#xe604;</i>\n<b id="' + t + '_helpbtn" class="nc_helpbtn"></b>\n</div>\n<div id="' + t + '_voice" class="nc_voice"></div>\n</div>\n';
						return n
					}
					n.makeTemplate = i
				}, {}],
				25: [function(e, t, n) {
					"use strict";
					var i = e("./util"),
						a = {
							log: "//log.mmstat.com/",
							gm: "//gm.mmstat.com/",
							gj: "//gj.mmstat.com/"
						};
					n.mmstat_base = a;
					var o = i.isIEX(8),
						c = i.isIEX(7),
						r = i.isIEX(6),
						s = !! (r || c || o),
						l = {
							0: {
								analyze: s ? "//cf2.aliyun.com/nocaptcha/analyze.jsonp" : "//cf.aliyun.com/nocaptcha/analyze.jsonp",
								get_captcha: "//pin2.aliyun.com/get_captcha/ver3",
								get_img: "//pin2.aliyun.com/get_img",
								checkcode: s ? "//cf2.aliyun.com/captcha/checkcode.jsonp" : "//cf.aliyun.com/captcha/checkcode.jsonp",
								cc: "//diablo.alibaba.com/diablo/captcha_api/get.jsonp",
								cc_pre: "//diablo.alibaba.com/diablo/captcha_api/pre_get.jsonp",
								umid_Url: "//g.alicdn.com/security/umscript/3.2.9/um.js",
								uab_Url: "//af.alicdn.com/js/uac.js",
								umid_serUrl: "https://ynuf.alipay.com/service/um.json"
							},
							1: {
								analyze: "//cfus.aliyun.com/nocaptcha/analyze.jsonp",
								get_captcha: "//captcha.alibaba.com/get_captcha/ver3",
								get_img: "//captcha.alibaba.com/get_img",
								checkcode: "//cfus.aliyun.com/captcha/checkcode.jsonp",
								cc: "//diablo.alibaba.com/diablo/captcha_api/get.jsonp",
								cc_pre: "//diablo.alibaba.com/diablo/captcha_api/pre_get.jsonp",
								umid_Url: "//g.alicdn.com/security/umscript/3.2.9/um.js",
								uab_Url: "//aeu.alicdn.com/js/uab.js",
								umid_serUrl: "https://us.ynuf.alipay.com/service/um.json"
							},
							2: {
								analyze: "//cfun.aliyun.com/nocaptcha/analyze.jsonp",
								get_captcha: "//pinun.aliyun.com/get_captcha/ver3",
								get_img: "//pinun.aliyun.com/get_img",
								checkcode: "//cfun.aliyun.com/captcha/checkcode.jsonp",
								cc: "//diablo.alibaba.com/diablo/captcha_api/get.jsonp",
								cc_pre: "//diablo.alibaba.com/diablo/captcha_api/pre_get.jsonp",
								umid_Url: "//g.alicdn.com/security/umscript/3.2.9/um.js",
								uab_Url: "//aeu.alicdn.com/js/uab.js",
								umid_serUrl: "https://ynuf.alipay.com/service/um.json"
							}
						};
					n.URL_MAP = l
				}, {
					"./util": 26
				}],
				26: [function(e, t, n) {
					"use strict";

					function i(e, t, n) {
						if (e) {
							var i = 0,
								a = e.length;
							if (a === +a) for (; a > i && t.call(n, e[i], i, e) !== !1; i++);
							else for (i in e) if (e.hasOwnProperty(i) && t.call(n, e[i], i, e) === !1) break
						}
					}
					function a(e, t) {
						if (!t) return !1;
						if (e.classList) {
							for (var n = t.split(/\s+/), i = 0; i < n.length; i++) if (!e.classList.contains(n[i])) return !1;
							return !0
						}
						return new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className)
					}
					function o(e, t) {
						t && !a(e, t) && (e.classList ? e.classList.add.apply(e.classList, t.split(/\s+/)) : e.className += " " + t)
					}
					function c(e, t) {
						t && a(e, t) && (e.classList ? e.classList.remove.apply(e.classList, t.split(/\s+/)) : e.className = e.className.replace(new RegExp("(\\s|^)" + t + "(\\s|$)"), " ").replace(/^\s+|\s+$/g, ""))
					}
					var r = window,
						s = document,
						l = n.rndId = function(e) {
							return ((e || "") + Math.random()).replace(".", "")
						};
					n.each = i, n.hasClass = a, n.addClass = o, n.removeClass = c, n.toggleClass = function(e, t) {
						a(e, t) ? c(e, t) : o(e, t)
					}, n.getElementsByClassName = function(e, t, n) {
						if (t = t || s, n = n || "*", s.getElementsByClassName) return t.getElementsByClassName(e);
						for (var i = [], o = "*" === n && t.all ? t.all : t.getElementsByTagName(n), c = o.length; --c >= 0;) a(o[c], e) && i.push(o[c]);
						return i
					}, n.setCookie = function(e, t, n) {
						n = n || 7;
						var i = new Date;
						i.setTime(i.getTime() + 864e5 * n), document.cookie = [encodeURIComponent(e), "=", encodeURIComponent("" + t), ";expires=", i.toGMTString()].join("")
					}, n.send = function(e) {
						var t = l("_nc_r_"),
							n = r[t] = new Image;
						n.onload = n.onerror = function() {
							r[t] = null
						}, n.src = e
					}, n.obj2param = function(e) {
						var t = [];
						for (var n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
						return t.join("&")
					}, n.addHourStamp = function(e, t) {
						var n = Math.floor((new Date).getTime() / (36e5 * (t || 2))),
							i = -1 === e.indexOf("?") ? "?" : "&";
						return e + i + "_t=" + n
					};
					var d = {};
					n.isIEX = function(e) {
						if (e in d) return d[e];
						var t = s.createElement("b");
						return t.innerHTML = "<!--[if IE " + e + "]><i></i><![endif]-->", d[e] = 1 === t.getElementsByTagName("i").length
					};
					var p = n.getElementLeft = function(e) {
							for (var t = e.offsetLeft, n = e.offsetParent; null !== n;) t += n.offsetLeft, n = n.offsetParent;
							return t
						},
						u = n.getElementTop = function(e) {
							for (var t = e.offsetTop, n = e.offsetParent; null !== n;) t += n.offsetTop, n = n.offsetParent;
							return t
						};
					n.getClientRect = function(e) {
						var t = s.documentElement.scrollTop,
							n = s.documentElement.scrollLeft;
						if (e.getBoundingClientRect) {
							var i = e.getBoundingClientRect();
							return {
								left: i.left - n,
								right: i.right - n,
								top: i.top - t,
								bottom: i.bottom - t
							}
						}
						var a = p(e),
							o = u(e);
						return {
							left: a,
							right: a + e.offsetWidth,
							top: o,
							bottom: o + e.offsetHeight
						}
					}, n.getOffset = function(e) {
						var t = e.target;
						void 0 === t.offsetLeft && (t = t.parentNode);
						var n = g(t),
							i = {
								x: r.pageXOffset + e.clientX,
								y: r.pageYOffset + e.clientY
							};
						return {
							offsetX: i.x - n.x,
							offsetY: i.y - n.y
						}
					};
					var g = n.getPageCoord = function(e) {
							for (var t = {
								x: 0,
								y: 0
							}; e;) t.x += e.offsetLeft, t.y += e.offsetTop, e = e.offsetParent;
							return t
						},
						h = {
							before: function(e, t) {
								return function() {
									return e.call(this), t.apply(this, arguments)
								}
							},
							after: function(e, t) {
								return function() {
									var n = e.apply(this, arguments);
									return t.call(this, n, arguments), n
								}
							}
						};
					n.decorator = h, n.mix = function(e) {
						for (var t, n, i = [].slice.call(arguments), a = i.length, o = 1; a > o; o++) {
							t = i[o];
							for (n in t) t.hasOwnProperty(n) && (e[n] = t[n])
						}
						return e
					}, n.clone = function(e) {
						var t = {};
						for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
						return t
					}, n.addHandler = function(e, t, n) {
						e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
					}, n.removeHandler = function(e, t, n) {
						e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
					}, n.getEvent = function(e) {
						return e ? e : r.event
					}, n.getTarget = function(e) {
						return e.target || e.srcElement
					}, n.bind = function(e, t) {
						var n = [].slice,
							i = n.call(arguments, 2),
							a = function() {},
							o = function() {
								return e.apply(this instanceof a ? this : t, i.concat(n.call(arguments)))
							};
						return a.prototype = e.prototype, o.prototype = new a, o
					}
				}, {}],
				27: [function(e, t, n) {
					"use strict";
					n.v = 626
				}, {}]
			}, {}, [2])
		};
	chkQuerySet(), cond() > GREY_RATIO ? STABLE_ACTION() : NEW_ACTION()
}();