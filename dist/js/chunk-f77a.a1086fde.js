(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f77a"],{"360b":function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"chart"},[e("div",{staticClass:"container"},[e("canvas",{ref:"canvas",attrs:{width:"1200",height:"450"}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showLength,expression:"showLength"}]},[t._v("Length: "+t._s(t.getUsers.length))])])])},a=[],r=(e("ac6a"),e("1fca")),i=r["c"].reactiveData,o={name:"ContentChartCountries",extends:r["a"],mixins:[i],data:function(){return{showLength:!1,chartData:{labels:["USA","Thailand","Russia","Czech"],datasets:[{label:"users",backgroundColor:"#0077ff",borderWidth:0,data:[]}]},chartOptions:{responsive:!0,maintainAspectRatio:!0,scales:{yAxes:[{ticks:{fontColor:"#8a96a0"},gridLines:{display:!1}}],xAxes:[{ticks:{fontColor:"#8a96a0"},gridLines:{display:!1}}]},legend:{display:!1},layout:{padding:{left:10,right:25,top:30,bottom:10}}}}},mounted:function(){this.getCountiesArr(),this.renderChart(this.chartData,this.chartOptions)},updated:function(){this.getCountiesArr(),this.renderChart(this.chartData,this.chartOptions)},computed:{getUsers:function(){return this.$store.getters.USERS},getRussiaInt:function(){var t=[];return this.getUsers.forEach(function(n){"Russia"===n.country&&t.push(n.country)}),t.length},getThailandInt:function(){var t=[];return this.getUsers.forEach(function(n){"Thailand"===n.country&&t.push(n.country)}),t.length},getCzechInt:function(){var t=[];return this.getUsers.forEach(function(n){"Czech"===n.country&&t.push(n.country)}),t.length},getUsaInt:function(){var t=[];return this.getUsers.forEach(function(n){"USA"===n.country&&t.push(n.country)}),t.length}},methods:{getCountiesArr:function(){var t=[];t.push(this.getUsaInt,this.getThailandInt,this.getRussiaInt,this.getCzechInt),this.chartData.datasets[0].data=t}}},h=o,c=(e("afa8"),e("2877")),u=Object(c["a"])(h,s,a,!1,null,"54efe606",null);u.options.__file="ContentChartCountries.vue";n["default"]=u.exports},afa8:function(t,n,e){"use strict";var s=e("f915"),a=e.n(s);a.a},f915:function(t,n,e){}}]);
//# sourceMappingURL=chunk-f77a.a1086fde.js.map