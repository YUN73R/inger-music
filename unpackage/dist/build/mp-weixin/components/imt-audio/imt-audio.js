(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/imt-audio/imt-audio"],{"212a":function(t,n,e){"use strict";e.r(n);var a=e("e4a4"),u=e("7a84");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);e("6d5c");var i=e("2877"),r=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=r.exports},"6d5c":function(t,n,e){"use strict";var a=e("a8e3"),u=e.n(a);u.a},"7a84":function(t,n,e){"use strict";e.r(n);var a=e("f68a"),u=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=u.a},a8e3:function(t,n,e){},e4a4:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c;t._isMounted||(t.e0=function(n){t.seek=!0,t.current=n.detail.value})},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},f68a:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=t.getBackgroundAudioManager(),a={data:function(){return{currentTime:"",durationTime:"",current:"",loading:!1,paused:!0,seek:!1}},props:{src:String,autoplay:Boolean,duration:Number,control:{type:Boolean,default:!0},continue:Boolean,color:{type:String,default:"#169af3"}},methods:{prev:function(){this.$emit("prev")},next:function(){this.$emit("next")},format:function(t){return"0".repeat(2-String(Math.floor(t/60)).length)+Math.floor(t/60)+":"+"0".repeat(2-String(Math.floor(t%60)).length)+Math.floor(t%60)},operation:function(){e.paused?(e.play(),this.loading=!0):e.pause()},change:function(t){e.seek(t.detail.value)}},created:function(){var t=this;e.src=this.src,this.current=0,this.durationTime=this.format(this.duration),e.obeyMuteSwitch=!1,e.autoplay=this.autoplay,e.onTimeUpdate(function(){t.seek||(t.current=e.currentTime)}),e.onPlay(function(){t.paused=!1}),e.onPause(function(){t.paused=!0}),e.onEnded(function(){t.continue?t.next():(t.paused=!0,t.current=0)}),e.onSeeked(function(){t.seek=!1})},watch:{src:function(t){e.src=t,this.current=0,e.play(),this.loading=!0},duration:function(t){this.durationTime=this.format(t)},current:function(t){this.currentTime=this.format(t)}}};n.default=a}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/imt-audio/imt-audio-create-component',
    {
        'components/imt-audio/imt-audio-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("212a"))
        })
    },
    [['components/imt-audio/imt-audio-create-component']]
]);                
