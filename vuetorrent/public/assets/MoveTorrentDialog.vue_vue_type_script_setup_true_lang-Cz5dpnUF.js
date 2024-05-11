import{k as b,h as R,Y as S,I as D,J as L,a as U,Z as A,$ as O,V as q,c as J,d as j,e as z,f as G,v as Q,H as W,g as X,i as B,j as Y,__tla as __tla_0}from"./index-CfNDsQKB.js";import{g as _,a2 as Z,I as o,J as s,K as a,X as x,L as c,M as i,O as m,W as g,m as l,a0 as F,a3 as H,a4 as K,F as N,a5 as ee,a6 as ae,a7 as oe,G as te,d as T,r as le,c as I,H as se,u as C,N as ne,P as re,Q as de}from"./vue--7UcA1iU.js";let ve,he;let __tla=Promise.all([(()=>{try{return __tla_0}catch{}})()]).then(async()=>{let ie,ue,me,ce;ie={class:"d-flex"};ue={key:2};me={key:3};ce=_({__name:"RightClickMenuEntry",props:{text:{},icon:{},action:{type:Function},hidden:{type:Boolean},disabled:{type:Boolean},disabledText:{},disabledIcon:{},children:{}},setup(f){const t=f,n=()=>{t.action&&t.action()};return(e,u)=>{const v=Z("RightClickMenuEntry",!0);return e.hidden?m("",!0):(o(),s(L,{key:0,class:"px-3",disabled:e.disabled,onClick:n},{default:a(()=>[x("div",ie,[e.disabled&&e.disabledIcon?(o(),s(b,{key:0,class:"mr-2"},{default:a(()=>[c(i(e.disabledIcon),1)]),_:1})):e.icon?(o(),s(b,{key:1,class:"mr-2"},{default:a(()=>[c(i(e.icon),1)]),_:1})):m("",!0),e.disabled&&e.disabledText?(o(),g("span",ue,i(e.disabledText),1)):(o(),g("span",me,i(e.text),1)),l(R),!e.disabled&&e.children?(o(),s(b,{key:4},{default:a(()=>[c("mdi-chevron-right")]),_:1})):m("",!0)]),e.children?(o(),s(S,{key:0,activator:"parent","open-on-hover":"","open-on-click":"","close-delay":"10","open-delay":"0",location:"right"},{default:a(()=>[l(D,null,{default:a(()=>[(o(!0),g(N,null,F(e.children,h=>(o(),s(v,H(K(h)),null,16))),256))]),_:1})]),_:1})):m("",!0)]),_:1},8,["disabled"]))}}});ve=_({__name:"RightClickMenu",props:ee({menuData:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(f){const t=ae(f,"modelValue");return(n,e)=>t.value?(o(),s(S,{key:0,modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=u=>t.value=u),activator:"parent","close-on-content-click":!0,transition:"slide-y-transition","scroll-strategy":"none"},{default:a(()=>[l(D,null,{default:a(()=>[oe(n.$slots,"top"),(o(!0),g(N,null,F(n.menuData,u=>(o(),s(ce,H(K(u)),null,16))),256))]),_:3})]),_:3},8,["modelValue"])):m("",!0)}});he=_({__name:"MoveTorrentDialog",props:{guid:{},hashes:{},mode:{}},setup(f){const t=f,{isOpened:n}=U(t.guid),{t:e}=te(),u=A(),v=O(),h=T(),w=T(),V=T(!1),y=le({newPath:""}),E=[r=>!!r||e("dialogs.moveTorrent.required")],M=I(()=>t.hashes.map(v.getTorrentByHash)),k=I(()=>{switch(t.mode){case"dl":return M.value[0]?.download_path;case"save":return M.value[0]?.savePath}});async function P(){await h.value?.validate(),V.value&&(await u.toggleAutoTmm(t.hashes,!1),await v.moveTorrents(t.mode,t.hashes,y.newPath),w.value?.saveValueToHistory(),$())}const $=()=>{n.value=!1};return se(()=>{y.newPath=k.value||""}),(r,d)=>(o(),s(Y,{modelValue:C(n),"onUpdate:modelValue":d[3]||(d[3]=p=>de(n)?n.value=p:null)},{default:a(()=>[l(q,null,{default:a(()=>[l(J,null,{default:a(()=>[c(i(r.$t(`dialogs.moveTorrent.${r.mode}.title`)),1)]),_:1}),l(j,null,{default:a(()=>[l(C(z),{modelValue:V.value,"onUpdate:modelValue":d[1]||(d[1]=p=>V.value=p),ref_key:"form",ref:h,onSubmit:d[2]||(d[2]=ne(()=>{},["prevent"]))},{default:a(()=>[k.value?(o(),s(G,{key:0,"model-value":k.value,disabled:"",label:r.$t("dialogs.moveTorrent.oldPath")},null,8,["model-value","label"])):m("",!0),l(Q,{modelValue:y.newPath,"onUpdate:modelValue":d[0]||(d[0]=p=>y.newPath=p),historyKey:C(W).TORRENT_PATH,ref_key:"field",ref:w,rules:E,autofocus:"",label:r.$t("dialogs.moveTorrent.newPath"),onKeydown:re(P,["enter"])},null,8,["modelValue","historyKey","label"])]),_:1},8,["modelValue"])]),_:1}),l(X,null,{default:a(()=>[l(R),l(B,{color:"error",onClick:$},{default:a(()=>[c(i(r.$t("common.cancel")),1)]),_:1}),l(B,{color:"accent",disabled:!V.value,onClick:P},{default:a(()=>[c(i(r.$t("common.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}})});export{ve as _,he as a,__tla};