webpackJsonp([1],{OJAK:function(t,e){},vYEv:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-menu"},[i("el-col",{attrs:{span:12}},[i("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2","background-color":"#545c64","text-color":"#fff","active-text-color":"#409eff",router:t.isRouter,collapse:t.isCollapse,"unique-opened":""},on:{select:t.handleSelect}},[i("el-menu-item",{attrs:{index:"volumeMeasure"},on:{click:function(e){t.$store.commit("changeTitle",e.$el.innerText)}}},[i("i",{staticClass:"iconfont icon-shebei menu_icon"}),t._v(" "),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("舱容测量")])]),t._v(" "),i("el-menu-item",{attrs:{index:"measureRecord"},on:{click:function(e){t.$store.commit("changeTitle",e.$el.innerText)}}},[i("i",{staticClass:"iconfont icon-lishishujubukedianji menu_icon"}),t._v(" "),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("测量记录")])]),t._v(" "),i("el-menu-item",{attrs:{index:"welcome"},on:{click:function(e){t.$store.commit("changeTitle",e.$el.innerText)}}},[i("i",{staticClass:"iconfont icon-guanyuwomen menu_icon"}),t._v(" "),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("关于")])])],1)],1)],1)},staticRenderFns:[]};var s={components:{NavMenu:i("46Yf")({name:"nav-menu",data:function(){return{isRouter:!0,menuTree:[]}},props:["isCollapse"],watch:{isCollapse:function(t){this.conLeft=t?65:200}},mounted:function(){},methods:{toPage:function(t){this.$router.push({name:t})},handleSelect:function(t,e){this.$emit("menuItemSelect",!0)},toggleMenu:function(){this.$emit("toggleMenu",!0)}}},n,!1,function(t){i("zG8z")},"data-v-a4aaa782",null).exports},name:"my-content",data:function(){return{menuShow:!0,coverShow:!1,isCollapse:!1,conLeft:200,menuWidth:200,screenWidth:document.body.clientWidth,minMenuWidth:65,maxMenuWidth:200}},computed:{isMobile:function(){return this.$store.state.windowObj.isMobile}},mounted:function(){this.dataInit()},methods:{menuItemSelect:function(){this.isMobile&&this.menuShow&&this.toggleMenu()},dataInit:function(){this.isMobile?(this.menuShow=!1,this.conLeft=0,this.isCollapse?this.menuWidth=this.minMenuWidth:this.menuWidth=this.maxMenuWidth):(this.menuShow=!0,this.menuWidth=0,this.coverShow=!1,this.isCollapse?this.conLeft=this.minMenuWidth:this.conLeft=this.maxMenuWidth)},toggleMenu:function(){this.isMobile?(this.conLeft=0,this.menuShow=!this.menuShow,this.menuShow?(this.menuWidth=0,this.coverShow=!0):(this.coverShow=!1,this.isCollapse?this.menuWidth=this.minMenuWidth:this.menuWidth=this.maxMenuWidth)):(this.menuWidth=0,this.isCollapse=!this.isCollapse,this.isCollapse?this.conLeft=this.minMenuWidth:this.conLeft=this.maxMenuWidth)}},watch:{isMobile:function(t){this.dataInit()}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-content"},[i("transition",{attrs:{name:"animate-transition","leave-active-class":"","enter-active-class":"animated fadeIn"}},[i("div",[i("transition",{attrs:{name:"animate-transition","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.coverShow,expression:"coverShow"}],staticClass:"back_cover",on:{click:t.menuItemSelect}})]),t._v(" "),i("div",{staticClass:"left_bar",style:{transform:"translateX("+-t.menuWidth+"px)"}},[i("nav-menu",{attrs:{isCollapse:t.isCollapse},on:{toggleMenu:t.toggleMenu,menuItemSelect:t.menuItemSelect}})],1),t._v(" "),i("div",{staticClass:"con",style:{left:t.conLeft+"px"}},[i("my-header",{attrs:{menuShow:t.menuShow,isMobile:t.isMobile,isCollapse:t.isCollapse},on:{toggleMenu:t.toggleMenu}}),t._v(" "),i("div",{staticClass:"con_main"},[i("transition",{attrs:{name:"animate-transition","leave-active-class":"","enter-active-class":"animated fadeIn"}},[i("keep-alive",{attrs:{include:"volume-measure"}},[i("router-view")],1)],1)],1)],1)],1)])],1)},staticRenderFns:[]};var o=i("46Yf")(s,a,!1,function(t){i("OJAK")},"data-v-291c7988",null);e.default=o.exports},zG8z:function(t,e){}});