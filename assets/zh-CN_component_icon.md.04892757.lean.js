import{r as n,o as a,c as s,a as t,w as p,b as e,u as o,x as c,S as l,D as u,L as i,y as k,q as r,e as g,d}from"./app.a7677cba.js";const h=g('',12),m=g('',3),v=e("p",null,[d(" 在额外类 "),e("b",null,"is-loading"),d("的情况下，您的图标能够在 2 秒内旋转 360 度。您也可以通过 CSS 覆盖这个设置。 ")],-1),b={style:{display:"flex","align-items":"center","justify-content":"space-between",width:"100%"}},_=e("span",{style:{"vertical-align":"middle"}}," Search ",-1),f=g('',2),y={style:{"font-size":"20px"}},q={id:"svg图标集合-适用于1-0-2-beta-66及以后的版本",tabindex:"-1"},S=d("SVG图标集合 "),T=d("适用于1.0.2-beta.66及以后的版本"),x=d(),I=e("a",{class:"header-anchor",href:"#svg图标集合-适用于1-0-2-beta-66及以后的版本","aria-hidden":"true"},"#",-1),V=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,"**你可以在任意版本里使用 SVG icon **，只要你安装了 @element-plus/icons"),e("p",null,[e("strong",null,"您可以点击图标复制它的代码。")])],-1),A=g('',4),w='{"title":"Icon 图标","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用SVG图标","slug":"使用svg图标"},{"level":2,"title":"安装","slug":"安装"},{"level":2,"title":"使用包管理器","slug":"使用包管理器"},{"level":2,"title":"基础用法","slug":"基础用法"},{"level":2,"title":"结合 el-icon 使用","slug":"结合-el-icon-使用"},{"level":2,"title":"直接使用 SVG icon","slug":"直接使用-svg-icon"},{"level":3,"title":"SVG图标集合","slug":"svg图标集合-适用于1-0-2-beta-66及以后的版本"},{"level":3,"title":"Icon Attributes","slug":"icon-attributes"},{"level":2,"title":"Icon Slots","slug":"icon-slots"}],"relativePath":"zh-CN/component/icon.md","lastUpdated":1634699883500}',z={};const C=Object.assign(z,{setup:function(g){return(g,d)=>{const w=n("ElIcon"),z=n("ElRow"),C=n("ElButton"),G=n("ElTag"),P=n("IconList");return a(),s("div",null,[h,t(z,null,{default:p((()=>[e("div",null,[t(w,{size:30},{default:p((()=>[t(o(c))])),_:1}),t(o(c))])])),_:1}),m,t(z,null,{default:p((()=>[v,e("div",b,[t(w,{size:20},{default:p((()=>[t(o(c))])),_:1}),t(w,{color:"#409EFC",class:"no-inherit"},{default:p((()=>[t(o(l))])),_:1}),t(w,null,{default:p((()=>[t(o(u))])),_:1}),t(w,{class:"is-loading"},{default:p((()=>[t(o(i))])),_:1}),t(C,{type:"primary"},{default:p((()=>[t(w,{style:{"vertical-align":"middle",color:"#fff"}},{default:p((()=>[t(o(k))])),_:1}),_])),_:1})])])),_:1}),f,t(z,null,{default:p((()=>[e("div",y,[r(" Since svg icons do not carry any attributes by default "),r(" You need to provide attributes directly "),t(o(c),{style:{width:"1em",height:"1em","margin-right":"8px"}}),t(o(l),{style:{width:"1em",height:"1em","margin-right":"8px"}}),t(o(u),{style:{width:"1em",height:"1em","margin-right":"8px"}}),t(o(k),{style:{width:"1em",height:"1em","margin-right":"8px"}})])])),_:1}),e("h3",q,[S,t(G,null,{default:p((()=>[T])),_:1}),x,I]),V,t(P),r(' <ul class="icon-list">\n  <li\n    v-for="component in $svgIcons"\n    :key="component"\n    @click="$copySvgIcon(component)">\n    <span class="demo-svg-icon">\n      <el-icon color="#000">\n        <component :is="component" />\n      </el-icon>\n      <span class="icon-name">{{component}}</span>\n    </span>\n  </li>\n</ul> '),A])}}});export{w as __pageData,C as default};