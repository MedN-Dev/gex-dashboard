(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a1cf"],{"621d":function(e,t,s){},"6ff0":function(e,t,s){"use strict";var n=s("621d"),r=s.n(n);r.a},7613:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main-content"},[s("div",{staticClass:"main-content__user-list"},[s("div",{staticClass:"user-list"},[s("div",{staticClass:"user-list__title"},[e._v("All users in system")]),e.loader?s("div",{staticClass:"loading"},[e._v("Loading...")]):s("MainOverviewContentUsers",{attrs:{users:e.filteredUsers},on:{deleteUser:e.deleteUser}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:this.$store.getters.STARTER,expression:"this.$store.getters.STARTER"}],staticClass:"starter"},[s("button",{staticClass:"btn-starter",on:{click:e.getUsers}},[e._v("\n        Download users\n      ")])])]),s("div",{staticClass:"main-content__footer"},[s("div",{staticClass:"footer"},[s("MainOverviewFooterPagination",{attrs:{"per-page":e.usersPerPage,total:e.totalUsers},model:{value:e.selectedPage,callback:function(t){e.selectedPage=e._n(t)},expression:"selectedPage"}}),e._m(0)],1)])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"footer__info"},[s("a",{attrs:{href:"https://github.com/heysafronov/gex-dashboard",target:"_blank"}},[s("img",{attrs:{src:"http://safronov.io/trash/gh.png"}})])])}],a=(s("96cf"),s("3040")),i={name:"MainOverviewContentUserList",components:{MainOverviewContentUsers:function(){return s.e("chunk-bc72").then(s.bind(null,"817d"))},MainOverviewFooterPagination:function(){return s.e("chunk-4610").then(s.bind(null,"db1e"))}},data:function(){return{loader:null,usersPerPage:2,selectedPage:1}},computed:{totalUsers:function(){return this.$store.getters.USERS.length},filteredUsers:function(){var e=this;return this.$store.getters.USERS.filter(function(t,s){var n=(e.selectedPage-1)*e.usersPerPage,r=n+e.usersPerPage;return n<=s&&s<r})}},watch:{usersPerPage:function(){this.selectedPage=1}},methods:{getUsers:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.$store.dispatch("UPDATE_STARTER"),this.loader=!0,e.next=4,this.$store.dispatch("GET_USERS");case 4:this.loader=!1;case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),deleteUser:function(e){this.$store.dispatch("DELETE_USER",e)}}},o=i,c=(s("6ff0"),s("2877")),l=Object(c["a"])(o,n,r,!1,null,"4a823294",null);l.options.__file="MainOverviewContentUserList.vue";t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-a1cf.8c7545d6.js.map