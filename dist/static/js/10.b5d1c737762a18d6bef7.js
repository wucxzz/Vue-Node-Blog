webpackJsonp([10],{208:function(t,e,a){function i(t){a(604)}var n=a(26)(a(382),a(832),i,"data-v-4611e46c",null);t.exports=n.exports},382:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(48),n=a.n(i),r=a(84),o=a(52),c=a.n(o);e.default={name:"article",data:function(){return{imageDefault:"../../../static/images/pic9.jpg",articles:[]}},created:function(){var t=this;c.a.get("/api/article/getArticleAll",{params:{noDel:!0}}).then(function(e){t.articles=e.data,t.articles.map(function(e){e.post_time=t.timeFormat(e.post_time)})}).catch(function(t){console.log("err",t)})},computed:n()({},a.i(r.c)(["boxCol"])),methods:n()({readAll:function(t,e){this.$router.push({name:"Article",params:{id:t,title:e}}),this.currentArticle({title:e}),this.crumbFlag([{index:1,newValue:!1}])}},a.i(r.b)(["crumbFlag","currentArticle"]))}},488:function(t,e,a){e=t.exports=a(195)(!0),e.push([t.i,'.clearfix[data-v-4611e46c]:after{content:"";display:block;overflow:hidden;clear:both}.box-card[data-v-4611e46c]{text-align:center;margin-bottom:10px}.box-card-image[data-v-4611e46c]{max-width:100%}.box-card[data-v-4611e46c]:hover{background:#eff2f7}.article-title[data-v-4611e46c]{margin-bottom:10px}.article-title h2[data-v-4611e46c]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.article-title a[data-v-4611e46c]{text-decoration:none;color:#000}.article-mes[data-v-4611e46c]{height:60px;line-height:30px}.article-title span[data-v-4611e46c]{font:400 12px/22px Arial;color:#999;padding:0 5px}.article-title .title-icon[data-v-4611e46c]{margin-right:5px}.article-start[data-v-4611e46c],.article-tags span[data-v-4611e46c]{cursor:pointer}.article-summary div[data-v-4611e46c]{text-align:left;text-overflow:ellipsis;overflow:hidden;display:-webkit-box}.article-summary a[data-v-4611e46c]{float:left;margin:20px 0;cursor:pointer;color:#555;padding-bottom:10px;border-bottom:2px solid #666;text-decoration:none}',"",{version:3,sources:["D:/jsoft/Full Stack/新建文件夹/My-Blog/Vue-Node-Blog/backups/src/components/page/BoxCatalog.vue"],names:[],mappings:"AACA,iCACI,WAAY,AACZ,cAAe,AACf,gBAAiB,AACjB,UAAY,CACf,AACD,2BACI,kBAAmB,AACnB,kBAAoB,CACvB,AACD,iCAEI,cAAgB,CACnB,AAMD,iCACI,kBAAoB,CACvB,AACD,gCACI,kBAAoB,CACvB,AACD,mCACI,mBAAoB,AACpB,uBAAwB,AACxB,eAAiB,CACpB,AACD,kCACI,qBAAsB,AACtB,UAAY,CACf,AACD,8BACI,YAAa,AACb,gBAAkB,CACrB,AACD,qCACI,yBAA0B,AAC1B,WAAY,AACZ,aAAe,CAClB,AACD,4CACI,gBAAkB,CACrB,AAID,oEACI,cAAgB,CACnB,AACD,sCACI,gBAAiB,AAGjB,uBAAwB,AACxB,gBAAiB,AACjB,mBAAqB,CAExB,AACD,oCACI,WAAY,AACZ,cAAe,AACf,eAAgB,AAChB,WAAY,AACZ,oBAAqB,AACrB,6BAA8B,AAC9B,oBAAsB,CACzB",file:"BoxCatalog.vue",sourcesContent:["\n.clearfix[data-v-4611e46c]:after {\n    content: '';\n    display: block;\n    overflow: hidden;\n    clear: both;\n}\n.box-card[data-v-4611e46c] {\n    text-align: center;\n    margin-bottom: 10px;\n}\n.box-card-image[data-v-4611e46c] {\n    /* width: 60%; */\n    max-width: 100%;\n}\n/* @media only screen and (min-width: 992px) {\n    .box-card-image {\n        height: 250px;\n    }\n} */\n.box-card[data-v-4611e46c]:hover {\n    background: #EFF2F7;\n}\n.article-title[data-v-4611e46c] {\n    margin-bottom: 10px;\n}\n.article-title h2[data-v-4611e46c] {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n.article-title a[data-v-4611e46c] {\n    text-decoration: none;\n    color: #000;\n}\n.article-mes[data-v-4611e46c] {\n    height: 60px;\n    line-height: 30px;\n}\n.article-title span[data-v-4611e46c] {\n    font: 400 12px/22px Arial;\n    color: #999;\n    padding: 0 5px;\n}\n.article-title .title-icon[data-v-4611e46c] {\n    margin-right: 5px;\n}\n.article-start[data-v-4611e46c] {\n    cursor: pointer;\n}\n.article-tags span[data-v-4611e46c] {\n    cursor: pointer;\n}\n.article-summary div[data-v-4611e46c] {\n    text-align: left;\n    /* text-indent: 2em; */\n    /* height: 4em; */\n    text-overflow: ellipsis;\n    overflow: hidden;\n    display: -webkit-box;\n    /* -webkit-line-clamp: 3; */\n}\n.article-summary a[data-v-4611e46c] {\n    float: left;\n    margin: 20px 0;\n    cursor: pointer;\n    color: #555;\n    padding-bottom: 10px;\n    border-bottom: 2px solid #666;\n    text-decoration: none;\n}\n/* .article-summary a:hover {\n    text-decoration: underline\n} */\n"],sourceRoot:""}])},604:function(t,e,a){var i=a(488);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(196)("4f70233c",i,!0,{})},832:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box-catalog"},[a("el-row",{attrs:{gutter:10}},[t._l(t.articles,function(e){return[a("el-col",{key:e.id,attrs:{md:t.boxCol}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"article-title"},[a("router-link",{attrs:{to:""},nativeOn:{click:function(a){t.readAll(e.id,e.title)}}},[a("h2",{attrs:{title:e.title}},[t._v(t._s(e.title))])]),t._v(" "),a("div",{staticClass:"article-mes"},[a("span",{staticClass:"article-postdata"},[t._v(t._s(e.post_time))]),t._v(" "),a("span",{staticClass:"article-view"},[a("i",{staticClass:"el-icon-search title-icon"}),t._v(t._s(e.view))]),t._v(" "),a("span",{staticClass:"article-start"},[a("i",{staticClass:"title-icon el-icon-star-on"}),t._v(t._s(e.start))]),t._v(" "),t._l(e.tags,function(e){return a("span",{key:e.id,staticClass:"article-tags"},[a("el-tag",{attrs:{type:"primary"}},[t._v(t._s(e.name))])],1)})],2)],1),t._v(" "),e.cover?a("img",{staticClass:"box-card-image",attrs:{src:e.cover}}):t._e(),t._v(" "),a("div",{staticClass:"article-summary"},[a("div",{staticClass:"markdown-body",attrs:{title:e.summary},domProps:{innerHTML:t._s(e.summary)}}),t._v(" "),a("a",{attrs:{type:"primary"},on:{click:function(a){t.readAll(e.id,e.title)}}},[t._v("阅读全文 »")])])])],1)]})],2)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=10.b5d1c737762a18d6bef7.js.map