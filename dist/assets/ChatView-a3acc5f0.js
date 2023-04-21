import{u as Oe,c as le,_ as Be}from"./index-e48d1091.js";import"./base-71edb393.js";import{aG as ze,i as X,r as Pe,s as ee,aH as ne,ae as he,m as pe,ak as Re,v as x,w as z,H as e,z as F,K as ge,N as We,L as He,A as Ve,t as De,ac as _e,x as V,y as ye,D as S,E as L,a2 as $,X as q,W as R,am as J,G as O,aI as K,O as W,aJ as ue,aK as je,aw as Y,ax as ce,a1 as H,aL as Fe,F as Ce,Z as Ie,P as be,aM as Te,a0 as ae,_ as we,J as Ke,B as Ue,aN as Ge,aO as Xe,a4 as qe,a5 as Je,a7 as Ye,a8 as Ze,$ as Qe,aa as et,aP as tt}from"./index-4a743c95.js";import"./el-input-19d7eca5.js";var nt=/\s/;function at(t){for(var r=t.length;r--&&nt.test(t.charAt(r)););return r}var st=/^\s+/;function rt(t){return t&&t.slice(0,at(t)+1).replace(st,"")}var fe=0/0,ot=/^[-+]0x[0-9a-f]+$/i,it=/^0b[01]+$/i,lt=/^0o[0-7]+$/i,ut=parseInt;function de(t){if(typeof t=="number")return t;if(ze(t))return fe;if(X(t)){var r=typeof t.valueOf=="function"?t.valueOf():t;t=X(r)?r+"":r}if(typeof t!="string")return t===0?t:+t;t=rt(t);var a=it.test(t);return a||lt.test(t)?ut(t.slice(2),a?2:8):ot.test(t)?fe:+t}var ct=function(){return Pe.Date.now()};const te=ct;var ft="Expected a function",dt=Math.max,mt=Math.min;function vt(t,r,a){var n,m,f,s,c,p,g=0,k=!1,b=!1,_=!0;if(typeof t!="function")throw new TypeError(ft);r=de(r)||0,X(a)&&(k=!!a.leading,b="maxWait"in a,f=b?dt(de(a.maxWait)||0,r):f,_="trailing"in a?!!a.trailing:_);function T(o){var y=n,h=m;return n=m=void 0,g=o,s=t.apply(h,y),s}function M(o){return g=o,c=setTimeout(E,r),k?T(o):s}function N(o){var y=o-p,h=o-g,d=r-y;return b?mt(d,f-h):d}function w(o){var y=o-p,h=o-g;return p===void 0||y>=r||y<0||b&&h>=f}function E(){var o=te();if(w(o))return B(o);c=setTimeout(E,N(o))}function B(o){return c=void 0,_&&n?T(o):(n=m=void 0,s)}function i(){c!==void 0&&clearTimeout(c),g=0,n=p=m=c=void 0}function v(){return c===void 0?s:B(te())}function l(){var o=te(),y=w(o);if(n=arguments,m=this,p=o,y){if(c===void 0)return M(p);if(b)return clearTimeout(c),c=setTimeout(E,r),T(p)}return c===void 0&&(c=setTimeout(E,r)),s}return l.cancel=i,l.flush=v,l}var ht="Expected a function";function me(t,r,a){var n=!0,m=!0;if(typeof t!="function")throw new TypeError(ht);return X(a)&&(n="leading"in a?!!a.leading:n,m="trailing"in a?!!a.trailing:m),vt(t,r,{leading:n,maxWait:r,trailing:m})}const G=t=>{const r=ee(t)?t:[t],a=[];return r.forEach(n=>{var m;ee(n)?a.push(...G(n)):ne(n)&&ee(n.children)?a.push(...G(n.children)):(a.push(n),ne(n)&&((m=n.component)!=null&&m.subTree)&&a.push(...G(n.component.subTree)))}),a},pt=(t,r,a)=>G(t.subTree).filter(f=>{var s;return ne(f)&&((s=f.type)==null?void 0:s.name)===r&&!!f.component}).map(f=>f.component.uid).map(f=>a[f]).filter(f=>!!f),gt=(t,r)=>{const a={},n=he([]);return{children:n,addChild:s=>{a[s.uid]=s,n.value=pt(t,r,a)},removeChild:s=>{delete a[s],n.value=n.value.filter(c=>c.uid!==s)}}},_t=pe({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),yt={change:(t,r)=>[t,r].every(Re)},ke=Symbol("carouselContextKey"),ve=300,Ct=(t,r,a)=>{const{children:n,addChild:m,removeChild:f}=gt(_e(),"ElCarouselItem"),s=x(-1),c=x(null),p=x(!1),g=x(),k=z(()=>t.arrow!=="never"&&!e(T)),b=z(()=>n.value.some(u=>u.props.label.toString().length>0)),_=z(()=>t.type==="card"),T=z(()=>t.direction==="vertical"),M=me(u=>{i(u)},ve,{trailing:!0}),N=me(u=>{P(u)},ve);function w(){c.value&&(clearInterval(c.value),c.value=null)}function E(){t.interval<=0||!t.autoplay||c.value||(c.value=setInterval(()=>B(),t.interval))}const B=()=>{s.value<n.value.length-1?s.value=s.value+1:t.loop&&(s.value=0)};function i(u){if(De(u)){const D=n.value.filter(U=>U.props.name===u);D.length>0&&(u=n.value.indexOf(D[0]))}if(u=Number(u),Number.isNaN(u)||u!==Math.floor(u))return;const I=n.value.length,A=s.value;u<0?s.value=t.loop?I-1:0:u>=I?s.value=t.loop?0:I-1:s.value=u,A===s.value&&v(A),se()}function v(u){n.value.forEach((I,A)=>{I.translateItem(A,s.value,u)})}function l(u,I){var A,D,U,re;const j=e(n),oe=j.length;if(oe===0||!u.states.inStage)return!1;const Ne=I+1,xe=I-1,ie=oe-1,Me=j[ie].states.active,$e=j[0].states.active,Le=(D=(A=j[Ne])==null?void 0:A.states)==null?void 0:D.active,Ae=(re=(U=j[xe])==null?void 0:U.states)==null?void 0:re.active;return I===ie&&$e||Le?"left":I===0&&Me||Ae?"right":!1}function o(){p.value=!0,t.pauseOnHover&&w()}function y(){p.value=!1,E()}function h(u){e(T)||n.value.forEach((I,A)=>{u===l(I,A)&&(I.states.hover=!0)})}function d(){e(T)||n.value.forEach(u=>{u.states.hover=!1})}function C(u){s.value=u}function P(u){t.trigger==="hover"&&u!==s.value&&(s.value=u)}function Z(){i(s.value-1)}function Se(){i(s.value+1)}function se(){w(),E()}F(()=>s.value,(u,I)=>{v(I),I>-1&&r("change",u,I)}),F(()=>t.autoplay,u=>{u?E():w()}),F(()=>t.loop,()=>{i(s.value)}),F(()=>t.interval,()=>{se()}),F(()=>n.value,()=>{n.value.length>0&&i(t.initialIndex)});const Q=he();return ge(()=>{Q.value=We(g.value,()=>{v()}),E()}),He(()=>{w(),g.value&&Q.value&&Q.value.stop()}),Ve(ke,{root:g,isCardType:_,isVertical:T,items:n,loop:t.loop,addItem:m,removeItem:f,setActiveItem:i}),{root:g,activeIndex:s,arrowDisplay:k,hasLabel:b,hover:p,isCardType:_,items:n,handleButtonEnter:h,handleButtonLeave:d,handleIndicatorClick:C,handleMouseEnter:o,handleMouseLeave:y,setActiveItem:i,prev:Z,next:Se,throttledArrowClick:M,throttledIndicatorHover:N}},It=["onMouseenter","onClick"],bt={key:0},Tt="ElCarousel",wt=V({name:Tt}),kt=V({...wt,props:_t,emits:yt,setup(t,{expose:r,emit:a}){const n=t,{root:m,activeIndex:f,arrowDisplay:s,hasLabel:c,hover:p,isCardType:g,items:k,handleButtonEnter:b,handleButtonLeave:_,handleIndicatorClick:T,handleMouseEnter:M,handleMouseLeave:N,setActiveItem:w,prev:E,next:B,throttledArrowClick:i,throttledIndicatorHover:v}=Ct(n,a),l=ye("carousel"),o=z(()=>{const h=[l.b(),l.m(n.direction)];return e(g)&&h.push(l.m("card")),h}),y=z(()=>{const h=[l.e("indicators"),l.em("indicators",n.direction)];return e(c)&&h.push(l.em("indicators","labels")),(n.indicatorPosition==="outside"||e(g))&&h.push(l.em("indicators","outside")),h});return r({setActiveItem:w,prev:E,next:B}),(h,d)=>(S(),L("div",{ref_key:"root",ref:m,class:O(e(o)),onMouseenter:d[6]||(d[6]=K((...C)=>e(M)&&e(M)(...C),["stop"])),onMouseleave:d[7]||(d[7]=K((...C)=>e(N)&&e(N)(...C),["stop"]))},[$("div",{class:O(e(l).e("container")),style:Ie({height:h.height})},[e(s)?(S(),q(ce,{key:0,name:"carousel-arrow-left",persisted:""},{default:R(()=>[J($("button",{type:"button",class:O([e(l).e("arrow"),e(l).em("arrow","left")]),onMouseenter:d[0]||(d[0]=C=>e(b)("left")),onMouseleave:d[1]||(d[1]=(...C)=>e(_)&&e(_)(...C)),onClick:d[2]||(d[2]=K(C=>e(i)(e(f)-1),["stop"]))},[W(e(ue),null,{default:R(()=>[W(e(je))]),_:1})],34),[[Y,(h.arrow==="always"||e(p))&&(n.loop||e(f)>0)]])]),_:1})):H("v-if",!0),e(s)?(S(),q(ce,{key:1,name:"carousel-arrow-right",persisted:""},{default:R(()=>[J($("button",{type:"button",class:O([e(l).e("arrow"),e(l).em("arrow","right")]),onMouseenter:d[3]||(d[3]=C=>e(b)("right")),onMouseleave:d[4]||(d[4]=(...C)=>e(_)&&e(_)(...C)),onClick:d[5]||(d[5]=K(C=>e(i)(e(f)+1),["stop"]))},[W(e(ue),null,{default:R(()=>[W(e(Fe))]),_:1})],34),[[Y,(h.arrow==="always"||e(p))&&(n.loop||e(f)<e(k).length-1)]])]),_:1})):H("v-if",!0),Ce(h.$slots,"default")],6),h.indicatorPosition!=="none"?(S(),L("ul",{key:0,class:O(e(y))},[(S(!0),L(be,null,Te(e(k),(C,P)=>(S(),L("li",{key:P,class:O([e(l).e("indicator"),e(l).em("indicator",h.direction),e(l).is("active",P===e(f))]),onMouseenter:Z=>e(v)(P),onClick:K(Z=>e(T)(P),["stop"])},[$("button",{class:O(e(l).e("button"))},[e(c)?(S(),L("span",bt,ae(C.props.label),1)):H("v-if",!0)],2)],42,It))),128))],2)):H("v-if",!0)],34))}});var Et=we(kt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);const St=pe({name:{type:String,default:""},label:{type:[String,Number],default:""}}),Nt=(t,r)=>{const a=Ke(ke),n=_e(),m=.83,f=x(!1),s=x(0),c=x(1),p=x(!1),g=x(!1),k=x(!1),b=x(!1),{isCardType:_,isVertical:T}=a;function M(i,v,l){const o=l-1,y=v-1,h=v+1,d=l/2;return v===0&&i===o?-1:v===o&&i===0?l:i<y&&v-i>=d?l+1:i>h&&i-v>=d?-2:i}function N(i,v){var l;const o=((l=a.root.value)==null?void 0:l.offsetWidth)||0;return k.value?o*((2-m)*(i-v)+1)/4:i<v?-(1+m)*o/4:(3+m)*o/4}function w(i,v,l){const o=a.root.value;return o?((l?o.offsetHeight:o.offsetWidth)||0)*(i-v):0}const E=(i,v,l)=>{var o;const y=e(_),h=(o=a.items.value.length)!=null?o:Number.NaN,d=i===v;!y&&!Xe(l)&&(b.value=d||i===l),!d&&h>2&&a.loop&&(i=M(i,v,h));const C=e(T);p.value=d,y?(k.value=Math.round(Math.abs(i-v))<=1,s.value=N(i,v),c.value=e(p)?1:m):s.value=w(i,v,C),g.value=!0};function B(){if(a&&e(_)){const i=a.items.value.findIndex(({uid:v})=>v===n.uid);a.setActiveItem(i)}}return ge(()=>{a.addItem({props:t,states:Ue({hover:f,translate:s,scale:c,active:p,ready:g,inStage:k,animating:b}),uid:n.uid,translateItem:E})}),Ge(()=>{a.removeItem(n.uid)}),{active:p,animating:b,hover:f,inStage:k,isVertical:T,translate:s,isCardType:_,scale:c,ready:g,handleItemClick:B}},xt=V({name:"ElCarouselItem"}),Mt=V({...xt,props:St,setup(t){const r=t,a=ye("carousel"),{active:n,animating:m,hover:f,inStage:s,isVertical:c,translate:p,isCardType:g,scale:k,ready:b,handleItemClick:_}=Nt(r),T=z(()=>{const N=`${`translate${e(c)?"Y":"X"}`}(${e(p)}px)`,w=`scale(${e(k)})`;return{transform:[N,w].join(" ")}});return(M,N)=>J((S(),L("div",{class:O([e(a).e("item"),e(a).is("active",e(n)),e(a).is("in-stage",e(s)),e(a).is("hover",e(f)),e(a).is("animating",e(m)),{[e(a).em("item","card")]:e(g)}]),style:Ie(e(T)),onClick:N[0]||(N[0]=(...w)=>e(_)&&e(_)(...w))},[e(g)?J((S(),L("div",{key:0,class:O(e(a).e("mask"))},null,2)),[[Y,!e(n)]]):H("v-if",!0),Ce(M.$slots,"default")],6)),[[Y,e(b)]])}});var Ee=we(Mt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);const $t=qe(Et,{CarouselItem:Ee}),Lt=Je(Ee);const At=t=>(Ye("data-v-2f85b592"),t=t(),Ze(),t),Ot={class:"flex flex-1 flex-col justify-center intro-chat"},Bt=At(()=>$("div",{class:"m-[0_auto_50px] w-[415px] text-center"},[$("p",{class:"text-[22px]"},[Qe("Chào mừng đến với "),$("span",{class:"font-bold"},"Loza PC!")]),$("p",{class:"mt-[20px] text-sm"}," Khám phá những tiện ích hỗ trợ làm việc và trò chuyện cùng người thân, bạn bè được tối ưu hoá cho máy tính của bạn. ")],-1)),zt=["src"],Pt={class:"mt-[20px] mb-[10px] text-lg font-medium text-active"},Rt={class:"text-sm"},Wt=V({__name:"IntroChat",setup(t){const r=Oe(),a=x([{image:"https://chat.zalo.me/assets/quick-message-onboard.3950179c175f636e91e3169b65d1b3e2.png",text:"Nhắn tin nhiều hơn, soạn thảo ít hơn",desc:"Sử dụng tin nhắn nhanh để lưu sẵn các tin nhắn thường dùng và gửi nhanh trong hội thoại bất kỳ."},{image:"https://chat.zalo.me/assets/vanish_onboard.95edcd15d875cae4d6d504d739eaa977.png",text:"Tin nhắn tự xóa",desc:"Từ giờ tin nhắn đã có thể tự động tự xóa sau khoảng thời gian nhất định."},{image:"https://chat.zalo.me/assets/inapp-welcome-screen-e2ee-06.58e0949293cc655af6dfbb74ede92bf3.svg",text:"Mã hóa đầu cuối",desc:"Nội dung tin nhắn được mã hóa trong suốt quá trình gửi và nhận."},{image:"https://chat.zalo.me/assets/inapp-welcome-screen-0.19afb7ab96c7506bb92b41134c4e334c.jpg",text:"Gọi nhóm và làm việc hiệu quả với Loza Group Call",desc:"Trao đổi công việc mọi lúc mọi nơi"},{image:"https://chat.zalo.me/assets/inapp-welcome-screen-02.7f8cab265c34128a01a19f3bcd5f327a.jpg",text:"Chat nhóm với đồng nghiệp",desc:"Tiện lợi hơn, nhờ các công cụ hỗ trợ chat trên máy tính"}]);return z(()=>r.conversation),(n,m)=>{const f=Lt,s=$t;return S(),L("div",Ot,[Bt,W(s,{"indicator-position":"outside",height:"320px",arrow:"always",class:"slider"},{default:R(()=>[(S(!0),L(be,null,Te(e(a),(c,p)=>(S(),q(f,{key:p,class:"text-center"},{default:R(()=>[$("img",{src:c.image,alt:"",class:"m-auto w-[380px]"},null,8,zt),$("p",Pt,ae(c.text),1),$("p",Rt,ae(c.desc),1)]),_:2},1024))),128))]),_:1})])}}});const Ht=et(Wt,[["__scopeId","data-v-2f85b592"]]),Vt={class:"flex w-full"},Ut=V({__name:"ChatView",setup(t){const{listConversation:r}=tt(le),{getListConversation:a}=le;return a(),(n,m)=>{const f=Be;return S(),L("div",Vt,[e(r).length?(S(),q(f,{key:0})):H("",!0),W(Ht)])}}});export{Ut as default};
