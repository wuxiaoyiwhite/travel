webpackJsonp([1],{"+jWJ":function(t,i){},"0pPq":function(t,i){},"2lcA":function(t,i){},"8kmT":function(t,i){},"9n10":function(t,i){},F5W4:function(t,i){},FSwJ:function(t,i){},M6Sr:function(t,i){},"N+zL":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},a=e("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);i.default=a.exports},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("7+uW"),a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("keep-alive",{attrs:{exclude:"Detail"}},[i("router-view")],1)],1)},staticRenderFns:[]};var n=e("VU/8")({name:"App"},a,!1,function(t){e("0pPq")},null,null).exports,r=e("/ocq"),c=e("Dd8w"),o=e.n(c),l=e("NYxO"),d={name:"HomeHeader",computed:o()({},Object(l.c)(["city"]))},u={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),i("router-link",{attrs:{to:"/city"}},[i("div",{staticClass:"header-right"},[this._v("\n      "+this._s(this.city)+"\n      "),i("span",{staticClass:"iconfont arrow-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"header-left"},[i("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"header-input"},[i("span",{staticClass:"iconfont search-icon"},[this._v("")]),this._v("\n    输入城市/景点/游玩主题\n  ")])}]};var m=e("VU/8")(d,u,!1,function(t){e("RWM8")},"data-v-0899a694",null).exports,v={name:"HomeSwiper",data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:5e3}}},props:{list:Array},computed:{showSwiper:function(){return this.list.length}}},h={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"wraper"},[this.showSwiper?i("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return i("swiper-slide",{key:t.id},[i("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:"swiperimg"}})])}),this._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var p=e("VU/8")(v,h,!1,function(t){e("FSwJ")},"data-v-0f5c13a6",null).exports,f={name:"HomeIcons",props:{list:Array},data:function(){return{swiperOption:{autoplay:!1,pagination:".swiper-pagination"}}},computed:{pages:function(){var t=[];return this.list.forEach(function(i,e){var s=Math.floor(e/8);t[s]||(t[s]=[]),t[s].push(i)}),t}}},_={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"wraper"},[e("swiper",{attrs:{options:t.swiperOption}},[t._l(t.pages,function(i,s){return e("swiper-slide",{key:s},t._l(i,function(i){return e("div",{key:i.id,staticClass:"icons"},[e("div",{staticClass:"icons-img"},[e("img",{staticClass:"icons-img-content",attrs:{src:i.imgUrl,alt:""}})]),t._v(" "),e("p",{staticClass:"icon-desc"},[t._v(t._s(i.desc))])])}))}),t._v(" "),e("p",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var C=e("VU/8")(f,_,!1,function(t){e("8kmT")},"data-v-77479aaa",null).exports,w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"nav-container border-top"},[i("div",{staticClass:"nav-site border-right"},[i("div",{staticClass:"nav-wrap-text"},[i("span",{staticClass:"iconfont nav-icon"},[this._v("")]),this._v("定位失败\n    ")])]),this._v(" "),i("div",{staticClass:"nav-play"},[i("div",{staticClass:"nav-wrap-text"},[i("span",{staticClass:"iconfont nav-icon"},[this._v("")]),this._v("玩水季\n    ")])])])}]};var y=e("VU/8")({name:"HomeNav"},w,!1,function(t){e("yfo8")},"data-v-0ca5b55f",null).exports,g={name:"HomeList",props:{list:Array}},b={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"list-container"},[t._m(0),t._v(" "),e("ul",t._l(t.list,function(i){return e("router-link",{key:i.id,staticClass:"list-item border-bottom",attrs:{tag:"li",to:"/detail/"+i.id}},[e("img",{staticClass:"item-img",attrs:{src:i.imgUrl,alt:""}}),t._v(" "),e("div",{staticClass:"item-content"},[e("p",{staticClass:"item-title"},[t._v(t._s(i.title))]),t._v(" "),e("p",{staticClass:"item-desc"},[t._v(t._s(i.desc))]),t._v(" "),e("div",{staticClass:"item-wraper"},[e("button",{staticClass:"item-btn"},[t._v("查看详情")]),t._v(" "),e("span",{staticClass:"item-dict"},[t._v(t._s(i.disc)+"条评论")])])])])}))])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"list-title"},[i("img",{staticClass:"title-icon",attrs:{src:"http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png",alt:"标题icon"}}),this._v("\n    猜你喜欢\n  ")])}]};var k=e("VU/8")(g,b,!1,function(t){e("s7Th")},"data-v-452f1c94",null).exports,x={name:"HomeWeekend",props:{list:Array}},L={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"weekend-container"},[t._m(0),t._v(" "),e("ul",t._l(t.list,function(i){return e("li",{key:i.id,staticClass:"list-item border-bottom"},[e("div",{staticClass:"item-img-wraper"},[e("img",{staticClass:"item-img",attrs:{src:i.imgUrl,alt:""}})]),t._v(" "),e("div",{staticClass:"item-content"},[e("p",{staticClass:"item-title"},[t._v(t._s(i.title))]),t._v(" "),e("p",{staticClass:"item-desc"},[t._v(t._s(i.desc))])])])}))])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"list-title"},[i("img",{staticClass:"title-icon",attrs:{src:"http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png",alt:"标题icon"}}),this._v("\n    周末去哪儿\n  ")])}]};var T=e("VU/8")(x,L,!1,function(t){e("V/T0")},"data-v-7363b380",null).exports,$=e("mtWM"),S=e.n($),E={name:"Home",components:{HomeHeader:m,HomeSwiper:p,HomeIcons:C,HomeNav:y,HomeList:k,HomeWeekend:T},data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekList:[]}},computed:o()({},Object(l.c)(["city"])),methods:{getHomeInfo:function(){S.a.get("https://www.easy-mock.com/mock/5b4d76eedb60f15d335e0592/example/api/index.json").then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var i=t.data;this.swiperList=i.swiperList,this.iconList=i.iconList,this.recommendList=i.recommendList,this.weekList=i.weekendList}}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.city!==this.lastCity&&this.getHomeInfo()}},F={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("home-header"),t._v(" "),e("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),e("home-icons",{attrs:{list:t.iconList}}),t._v(" "),e("home-nav"),t._v(" "),e("home-list",{attrs:{list:t.recommendList}}),t._v(" "),e("home-weekend",{attrs:{list:t.weekList}})],1)},staticRenderFns:[]};var A=e("VU/8")(E,F,!1,function(t){e("kBnn")},"data-v-2ca710b0",null).exports,N={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"header"},[this._v("\n  城市选择\n  "),i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"iconfont back-header"},[this._v("")])])],1)},staticRenderFns:[]};var I=e("VU/8")({name:"CityHeader"},N,!1,function(t){e("+jWJ")},"data-v-3749ccfc",null).exports,D=e("GQaK"),U={name:"CitySearch",data:function(){return{keyword:"",list:[],timer:null}},props:{citys:Object},methods:o()({handleCityClick:function(t){this.changecity(t),this.$router.push("/")}},Object(l.b)(["changecity"])),computed:{NoDataList:function(){return!this.list.length}},mounted:function(){this.scroll=new D.a(this.$refs.wraper)},watch:{keyword:function(){var t=this;this.keyword?(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=[];for(var e in t.citys)t.citys[e].forEach(function(e){(e.spell.indexOf(t.keyword)>-1||e.name.indexOf(t.keyword)>-1)&&i.push(e)});t.list=i},100)):this.list=[]}}},O={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{placeholder:"请输入城市名或者拼音"},domProps:{value:t.keyword},on:{input:function(i){i.target.composing||(t.keyword=i.target.value)}}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"wraper",staticClass:"search-list"},[e("ul",[t._l(t.list,function(i){return e("li",{key:i.id,staticClass:"search-item border-bottom",on:{click:function(e){t.handleCityClick(i.name)}}},[t._v("\n        "+t._s(i.name)+"\n      ")])}),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:t.NoDataList,expression:"NoDataList"}],staticClass:"search-item"},[t._v("搜索不到对应的城市")])],2)])])},staticRenderFns:[]};var G=e("VU/8")(U,O,!1,function(t){e("ivlg")},"data-v-9b5b561e",null).exports,R={name:"CityList",props:{hotcities:Array,citys:Object,letter:String},methods:o()({handleCityClick:function(t){this.changecity(t),this.$router.push("/")}},Object(l.b)(["changecity"])),computed:o()({},Object(l.c)({currentCity:"city"})),watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}},mounted:function(){this.scroll=new D.a(this.$refs.wrapper)}},V={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"wrapper",staticClass:"list"},[e("div",[e("div",{staticClass:"area"},[e("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),e("div",{staticClass:"button-list"},[e("div",{staticClass:"button-wraper"},[e("div",{staticClass:"btn"},[t._v(t._s(this.currentCity))])])])]),t._v(" "),e("div",{staticClass:"area"},[e("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),e("div",{staticClass:"button-list"},t._l(t.hotcities,function(i){return e("div",{key:i.id,staticClass:"button-wraper",on:{click:function(e){t.handleCityClick(i.name)}}},[e("div",{staticClass:"btn"},[t._v(t._s(i.name))])])}))]),t._v(" "),t._l(t.citys,function(i,s){return e("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[e("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),e("div",{staticClass:"item-list"},t._l(i,function(i){return e("div",{key:i.id,staticClass:"item border-bottom",on:{click:function(e){t.handleCityClick(i.name)}}},[t._v("\n          "+t._s(i.name)+"\n        ")])}))])})],2)])},staticRenderFns:[]};var H=e("VU/8")(R,V,!1,function(t){e("TUq4")},"data-v-3e1d3297",null).exports,j={name:"CityAlphabet",props:{citys:Object},data:function(){return{touchStatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},computed:{letters:function(){var t=[];for(var i in this.citys)t.push(i);return t}},methods:{clickLetter:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var i=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var e=t.touches[0].clientY-79,s=Math.floor((e-i.startY)/20);s>=0&&s<i.letters.length&&i.$emit("change",i.letters[s])},16))},handleTouchEnd:function(){this.touchStatus=!1}}},z={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ul",{staticClass:"item-list"},t._l(t.letters,function(i){return e("li",{key:i,ref:i,refInFor:!0,staticClass:"item",on:{touchstart:function(i){return i.preventDefault(),t.handleTouchStart(i)},touchmove:t.handleTouchMove,touchend:t.handleTouchEnd,click:t.clickLetter}},[t._v("\n    "+t._s(i)+"\n  ")])}))},staticRenderFns:[]};var M={name:"City",data:function(){return{hotcities:[],citys:{},letter:""}},components:{CityHeader:I,CitySearch:G,CityList:H,CityAlphabet:e("VU/8")(j,z,!1,function(t){e("NgTx")},"data-v-1d1cf962",null).exports},methods:{getCityInfo:function(){S.a.get("https://www.easy-mock.com/mock/5b4d76eedb60f15d335e0592/example/api/city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var i=t.data;this.hotcities=i.hotCities,this.citys=i.cities}},handleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},q={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("city-header"),t._v(" "),e("city-search",{attrs:{citys:t.citys}}),t._v(" "),e("city-list",{attrs:{hotcities:t.hotcities,citys:t.citys,letter:t.letter}}),t._v(" "),e("city-alphabet",{attrs:{citys:t.citys},on:{change:t.handleLetterChange}})],1)},staticRenderFns:[]};var W=e("VU/8")(M,q,!1,function(t){e("vNTP")},"data-v-49fa5ee0",null).exports,Y={name:"Gallary",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{closeGallary:function(){this.$emit("closeGallary")}}},P={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"container",on:{click:this.closeGallary}},[i("div",{staticClass:"wraper"},[i("swiper",{attrs:{options:this.swiperOptions}},[this._l(this.imgs,function(t,e){return i("swiper-slide",{key:e},[i("img",{staticClass:"gallary-img",attrs:{src:t}})])}),this._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var J=e("VU/8")(Y,P,!1,function(t){e("iS8J")},"data-v-d09bfb34",null).exports,B={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var Q=e("VU/8")({name:"FadeAnimation"},B,!1,function(t){e("F5W4")},"data-v-6a950a2c",null).exports,Z={name:"DetailBanner",props:{sightName:String,bannerImg:String,gallaryImgs:Array},data:function(){return{showGallary:!1}},components:{CommonGallary:J,FadeAnimation:Q},methods:{handleGallaryClick:function(){this.showGallary=!0},closeGallary:function(){this.showGallary=!1}}},K={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"banner",on:{click:t.handleGallaryClick}},[e("img",{staticClass:"banner-img",attrs:{src:t.bannerImg,alt:"banner"}}),t._v(" "),e("div",{staticClass:"banner-info"},[e("div",{staticClass:"banner-title"},[t._v(t._s(t.sightName))]),t._v(" "),t._m(0)])]),t._v(" "),e("fade-animation",[e("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.gallaryImgs},on:{closeGallary:t.closeGallary}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"banner-number"},[i("span",{staticClass:"iconfont banner-icon"},[this._v("")]),this._v("\n        15\n      ")])}]};var X=e("VU/8")(Z,K,!1,function(t){e("O84a")},"data-v-4498c23c",null).exports,tt={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;if(t>60){var i=t/140;i=i>1?1:i,this.opacityStyle={opacity:i},this.showAbs=!1}else this.showAbs=!0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},it={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-Abs",attrs:{tag:"div",to:"/"}},[i("div",{staticClass:"iconfont header-Abs-back"},[this._v("")])]),this._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.opacityStyle},[this._v("\n    景点详情\n    "),i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"iconfont header-fixed-back"},[this._v("")])])],1)],1)},staticRenderFns:[]};var et=e("VU/8")(tt,it,!1,function(t){e("Vh+7")},"data-v-6610f89a",null).exports,st={name:"DetailRecommend",props:{recommendlist:Array}},at={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"recommeng-wrap"},[t._m(0),t._v(" "),e("ul",{staticClass:"recommeng-info-wrap"},t._l(t.recommendlist,function(i){return e("li",{key:i.id,staticClass:"info-wraper border-top"},[e("div",{staticClass:"recommend-info"},[e("div",{staticClass:"recommend-info-title"},[t._v(t._s(i.title))]),t._v(" "),e("ul",[e("span",{directives:[{name:"show",rawName:"v-show",value:i.tomorrow,expression:"item.tomorrow"}],staticClass:"recommend-info-mp-ticket"},[e("img",{staticClass:"mp-ticket-tagicon",attrs:{src:"https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png"}}),t._v("\n            可订明日\n          ")])]),t._v(" "),e("ul",t._l(i.attrs,function(i,s){return e("span",{key:s,staticClass:"mp-ticket-label"},[e("img",{directives:[{name:"show",rawName:"v-show",value:i.imgShow,expression:"attr.imgShow"}],staticClass:"mp-ticket-label-tagicon",attrs:{src:i.img}}),t._v("\n            "+t._s(i.title)+"\n          ")])}))]),t._v(" "),e("div",{staticClass:"recommend-price"},[e("div",{staticClass:"recommend-price-wraper"},[e("div",{staticClass:"price-text"},[t._v(t._s(i.price))]),t._v(" "),e("button",{staticClass:"price-btn"},[t._v("预定")])])])])}))])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"item-title"},[i("span",{staticClass:"iconfont item-title-icon"},[this._v("")]),this._v("去哪儿推荐\n  ")])}]};var nt=e("VU/8")(st,at,!1,function(t){e("YgMT")},"data-v-73fd57b6",null).exports,rt={name:"DetailTab",data:function(){return{isfixed:!1,isActive:!0,tabTitleTop:"",brandFold:!0,dayTicketList:[{title:"【福州出发】白水洋+五一广场公园1日游",price:"¥198"},{title:"【福州出发】白水洋+鸳鸯溪大峡谷2日游",price:"¥428"},{title:"【福州出发】白水洋+鸳鸯溪大峡谷7日游",price:"¥400"}],ticketList:[{id:"0001",scenicSpot:"白水洋景区",tickets:[{title:"白水洋成人票（含电瓶车）",price:"¥117.8",isLimit:!1,limit:"限儿童、学生、老人、残疾人"},{title:"白水洋优待票（含电瓶车）",price:"¥57.8",isLimit:!0,limit:"限儿童、学生、老人、残疾人"}]},{id:"0002",scenicSpot:"鸳鸯溪景区",tickets:[{title:"鸳鸯溪成人票",price:"¥76.8",isLimit:!1,limit:"限儿童、学生、老人、残疾人"},{title:"鸳鸯溪优待票",price:"¥37.8",isLimit:!0,limit:"限儿童、学生、老人、残疾人"}]},{id:"0003",scenicSpot:"热销联票",tickets:[{title:"白水洋+鸳鸯溪成人票（含电瓶车）",price:"¥168",isLimit:!1,limit:"限儿童、学生、老人、残疾人"},{title:"白水洋+鸳鸯溪优待票（含电瓶车）",price:"¥95",isLimit:!0,limit:"限儿童、学生、老人、残疾人"},{title:"优待票（含电瓶车）",price:"¥999",isLimit:!1,limit:"限儿童、学生、老人、残疾人"}]}]}},computed:{getheight:function(){return this.$refs.tabTitle.offsetTop},showdetailList:{get:function(){if(this.brandFold){if(this.dayTicketList.length<3)return this.dayTicketList;for(var t=[],i=0;i<2;i++){var e=this.dayTicketList[i];t.push(e)}return t}return this.dayTicketList},set:function(t){this.showdetailList=t}}},methods:{handleDayArea:function(){var t=this.$refs.dayArea.offsetTop-100;window.scrollTo({top:t}),this.isActive=!1},handleTicketArea:function(){var t=this.$refs.ticketArea.offsetTop-100;window.scrollTo({top:t}),this.isActive=!0},handleScroll:function(){var t=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,i=this.getheight;this.isfixed=t>i},changeFoldState:function(){this.brandFold=!this.brandFold}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},ct={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"tab-container"},[e("div",{ref:"tabTitle",staticClass:"tab-title border-bottom",class:{fixed:t.isfixed},attrs:{id:"tab-title"}},[e("div",{staticClass:"tab-title-ticket",class:{active:t.isActive},on:{click:t.handleTicketArea}},[t._v("门票")]),t._v(" "),e("div",{staticClass:"tab-title-ticket",class:{active:!t.isActive},on:{click:t.handleDayArea}},[t._v("一日游")])]),t._v(" "),e("div",{staticClass:"tab-content"},[e("ul",{ref:"ticketArea"},t._l(t.ticketList,function(i){return e("li",{key:i.id,staticClass:"tab-info-container-li"},[e("div",{staticClass:"tab-item-title"},[e("span",{staticClass:"tab-item-title-icon"}),t._v("\n          "+t._s(i.scenicSpot)+"\n        ")]),t._v(" "),i.tickets?e("ul",{staticClass:"tab-info-container-ul"},t._l(i.tickets,function(i,s){return e("li",{key:s,staticClass:"tab-info-li border-top"},[e("div",{staticClass:"tab-info-title-wraper"},[t._v("\n              "+t._s(i.title)+"\n              "),i.isLimit?e("span",{staticClass:"tab-info-small-title"},[t._v(t._s(i.limit))]):t._e()]),t._v(" "),e("div",{staticClass:"tab-price"},[e("div",{staticClass:"tab-price-wraper"},[t._v("\n                "+t._s(i.price)+"\n                "),e("span",{staticClass:"gray-color"},[t._v("起")]),t._v(" "),e("span",{staticClass:"iconfont more-icon"},[t._v("")])])])])})):t._e()])})),t._v(" "),e("ul",{ref:"dayArea"},[e("li",{staticClass:"tab-info-container-li"},[t._m(0),t._v(" "),e("ul",{staticClass:"tab-info-container-ul"},[t._l(t.showdetailList,function(i,s){return e("li",{key:s,staticClass:"tab-info-li border-top"},[e("div",{staticClass:"tab-info-title-wraper"},[t._v("\n              "+t._s(i.title)+"\n            ")]),t._v(" "),e("div",{staticClass:"tab-price"},[e("div",{staticClass:"tab-price-wraper"},[t._v("\n                "+t._s(i.price)+"\n                "),e("span",{staticClass:"gray-color"},[t._v("起")]),t._v(" "),e("span",{staticClass:"iconfont more-icon"},[t._v("")])])])])}),t._v(" "),t.dayTicketList.length>2?e("div",{directives:[{name:"show",rawName:"v-show",value:t.brandFold,expression:"brandFold"}],staticClass:"toggle",on:{click:t.changeFoldState}},[e("span",{staticClass:"iconfont"},[t._v("查看全部产品  ")])]):t._e()],2)])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"tab-item-title"},[i("span",{staticClass:"tab-item-title-icon"}),this._v("\n          一日游\n        ")])}]};var ot=e("VU/8")(rt,ct,!1,function(t){e("2lcA")},"data-v-1d80c641",null).exports,lt={name:"DetailComment",props:{commentList:Array},data:function(){return{showGallary:!1}},components:{CommonGallary:J,FadeAnimation:Q},methods:{handleGallaryClick:function(){this.showGallary=!0},closeGallary:function(){this.showGallary=!1}}},dt={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"comment-container"},[e("div",{staticClass:"comment-title"},[t._v("用户评论")]),t._v(" "),t._l(t.commentList,function(i){return e("div",{key:i.id,staticClass:"comment-wraper border-top"},[e("div",{staticClass:"content-attr"},[e("span",{staticClass:"iconfont content-grade"},[t._v("")]),t._v(" "),e("span",{staticClass:"content-time"},[t._v(t._s(i.username)+"   "+t._s(i.time))])]),t._v(" "),e("div",{staticClass:"content-txt"},[t._v(t._s(i.content))]),t._v(" "),e("div",{staticClass:"content-imgs",on:{click:t.handleGallaryClick}},t._l(i.commentImgs,function(t,i){return e("div",{key:i,staticClass:"imgs-wraper"},[e("img",{staticClass:"content-img",attrs:{src:t,alt:""}})])})),t._v(" "),e("fade-animation",[e("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:i.commentImgs},on:{closeGallary:t.closeGallary}})],1)],1)}),t._v(" "),t._m(0)],2)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"all-comment-btn"},[this._v("查看全部评论 "),i("span",{staticClass:"iconfont"},[this._v("")])])}]};var ut={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"other-container"},[e("div",{staticClass:"other-title"},[t._v("看了该景点的人还看了")]),t._v(" "),e("ul",t._l(t.otherList,function(i){return e("li",{key:i.id,staticClass:"other-wraper-li"},[e("div",{staticClass:"img-wraper"},[e("img",{staticClass:"img-item",attrs:{src:i.img,alt:""}})]),t._v(" "),e("div",{staticClass:"content-wraper"},[e("div",{staticClass:"attr"},[e("span",{staticClass:"attr-title"},[t._v(t._s(i.title))]),t._v(" "),e("span",{staticClass:"attr-price"},[t._v("¥"+t._s(i.price)),e("i",{staticClass:"gary-color"},[t._v("起")])])]),t._v(" "),e("div",{staticClass:"evaluation"},[e("span",{staticClass:"iconfont evaluation-grade",style:{width:t.getScore(i.score)+"%"}},[t._v("")]),t._v(" "),e("span",{staticClass:"iconfont evaluation-grade-default"},[t._v("")])]),t._v(" "),e("div",{staticClass:"area"},[e("span",[t._v(t._s(i.area))]),t._v(" "),e("span",{staticClass:"evaluation-comment"},[t._v(t._s(i.commentNum)+"条评论")])])])])}))])},staticRenderFns:[]};var mt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"info-container"},[e("div",{staticClass:"info-attr"},[e("div",{staticClass:"info-grade border-right"},[e("div",{staticClass:"grade-wraper"},[e("span",{staticClass:"fraction"},[t._v("4.9")]),e("span",{staticClass:"grade"},[t._v("分  很棒")])]),t._v(" "),e("div",{staticClass:"comment"},[t._v("1717条评论")]),t._v(" "),e("span",{staticClass:"iconfont more-icon"},[t._v("")])]),t._v(" "),e("div",{staticClass:"info-introduction"},[e("div",{staticClass:"attractions"},[t._v("\n        景点介绍\n      ")]),t._v(" "),e("div",{staticClass:"time"},[t._v("开放时间、贴士")]),t._v(" "),e("span",{staticClass:"iconfont more-icon"},[t._v("")])])]),t._v(" "),e("div",{staticClass:"address border-top"},[e("span",{staticClass:"iconfont site-icon"},[t._v("")]),t._v("\n    福建省宁德市西北部屏南县境内\n    "),e("span",{staticClass:"iconfont more-icon"},[t._v("")])])])}]};var vt={name:"Detail",components:{DetailBanner:X,DetailHeader:et,DetailRecommend:nt,DetailTab:ot,DetailComment:e("VU/8")(lt,dt,!1,function(t){e("YZ21")},"data-v-4ce8ac97",null).exports,DetailOther:e("VU/8")({name:"DetailOther",data:function(){return{otherList:[{id:"001",title:"鸳鸯溪大峡谷",price:"37.4",commentNum:"401",score:"4",area:"宁德·屏南县",img:"http://img1.qunarzz.com/sight/p0/1511/bd/bd356ef0dc69cbf590.img.jpg_228x168_1b8c0c77.jpg"},{id:"002",title:"鸳鸯溪大峡谷",price:"37.4",commentNum:"401",score:"2.5",area:"宁德·屏南县",img:"http://img1.qunarzz.com/sight/p0/1511/bd/bd356ef0dc69cbf590.img.jpg_228x168_1b8c0c77.jpg"}]}},methods:{getScore:function(t){return t/5*100}}},ut,!1,function(t){e("q5O/")},"data-v-96288414",null).exports,DetailInfo:e("VU/8")({name:"DetailInfo"},mt,!1,function(t){e("nQWl")},"data-v-b804af40",null).exports},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],recommendlist:[],commentList:[]}},methods:{getDetailInfo:function(){S.a.get("https://www.easy-mock.com/mock/5b4d76eedb60f15d335e0592/example/api/detail.json",{params:{id:this.$route.params.id}}).then(this.getDetailInfoSucc)},getDetailInfoSucc:function(t){if((t=t.data).ret&&t.data){var i=t.data;this.sightName=i.sightName,this.bannerImg=i.bannerImg,this.gallaryImgs=i.gallaryImgs,this.recommendlist=i.recommendlist,this.commentList=i.commentList}}},mounted:function(){this.getDetailInfo()}},ht={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("detail-banner",{attrs:{sightName:t.sightName,bannerImg:t.bannerImg,gallaryImgs:t.gallaryImgs}}),t._v(" "),e("detail-info"),t._v(" "),e("detail-header",{staticClass:"header"}),t._v(" "),e("div",{staticClass:"content"},[e("detail-recommend",{staticClass:"recommend",attrs:{recommendlist:t.recommendlist}}),t._v(" "),e("detail-tab"),t._v(" "),e("detail-comment",{attrs:{commentList:t.commentList}}),t._v(" "),e("detail-other")],1)],1)},staticRenderFns:[]};var pt=e("VU/8")(vt,ht,!1,function(t){e("sxee")},"data-v-62ab6ed6",null).exports;s.a.use(r.a);var ft=new r.a({routes:[{path:"/",name:"Home",component:A},{path:"/city",name:"City",component:W},{path:"/detail/:id",name:"Detail",component:pt}],scrollBehavior:function(t,i,e){return{x:0,y:0}}}),_t=e("v5o6"),Ct=e.n(_t),wt=e("F3EI"),yt=e.n(wt),gt="上海";try{localStorage.city&&(gt=localStorage.city)}catch(t){}var bt={city:gt},kt={changecity:function(t,i){t.city=i;try{localStorage.city=i}catch(t){}}};s.a.use(l.a);var xt=new l.a.Store({state:bt,mutations:kt});e("9n10"),e("M6Sr"),e("TzC8"),e("v2ns");s.a.config.productionTip=!1,Ct.a.attach(document.body),s.a.use(yt.a),new s.a({el:"#app",router:ft,store:xt,components:{App:n},template:"<App/>"})},NgTx:function(t,i){},O84a:function(t,i){},RWM8:function(t,i){},TUq4:function(t,i){},TzC8:function(t,i){},"V/T0":function(t,i){},"Vh+7":function(t,i){},YZ21:function(t,i){},YgMT:function(t,i){},iS8J:function(t,i){},ivlg:function(t,i){},kBnn:function(t,i){},nQWl:function(t,i){},pYmz:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=e("gsqX"));var a={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,i=function(){if(!t.swiper&&s){delete t.options.notNextTick;var i=!1;for(var e in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(e)&&t.options[e]&&(i=!0,t.defaultSwiperClasses[e]=t.options[e]);var a=function(){t.swiper=new Swiper(t.$el,t.options)};i?t.$nextTick(a):a()}}(this.options.notNextTick||this.notNextTick)?i():this.$nextTick(i)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},n={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),e("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=e("VU/8")(a,n,!1,null,null,null);i.default=r.exports},"q5O/":function(t,i){},s7Th:function(t,i){},sxee:function(t,i){},v2ns:function(t,i){},vNTP:function(t,i){},yfo8:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.7d06c1a87fb5725267fd.js.map