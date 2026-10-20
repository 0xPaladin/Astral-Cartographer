const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["app-offer-qxKOydOY.js","platform-DdqqRmnM.js","cloud-8HdaoU0o.js","utils-CNyvX_4Z.js","tooltips-DY0u1iQZ.js","export-json-CS8SOLF2.js","dialog-helpers-CHDy2eFe.js","state-B2hBYDzv.js","versioning-BV_WJ_yd.js","pins-avJeaKgU.js","options-schema-D2Bjy-ln.js","emblems-generator-CuSOzr1f.js","preload-helper-DHa_JjYM.js","emblems-uUqrpFK3.js","rolldown-runtime-QTnfLwEv.js","icons-list-BiXau1Li.js","schemaUtils-B2thnuln.js","cultures-generator-BI1IRO5a.js","population-generator-dCJZD78q.js","mean-4Awewi9R.js","median-C8HrnGhO.js","sum-BpJJqxFM.js","validationUtils-cfDkYsje.js","export-LKFjloQL.js","layers-BLilOnUL.js","draw-landmass-jpM29x2S.js","minIndex-4vd4__Hw.js","sin-DYm9hqTl.js","natural-kerJ22Hb.js","viewport-C0deAIKO.js","controllers-CcOoWo4P.js","fonts-CrwaLr_V.js","load-NQJL3YuV.js","index-CUjhdmz8.js","highlight-Bhr3REGq.js","relief-generator-BXaB1e3T.js","extent-V-JVJWfI.js","styles-BOEN6zd6.js","notes-BdtocxG6.js","viewbox-events-fm-stbSj.js","drag-ZPCFys_e.js","zoom-CyJ12Foe.js","layers-tab-wxKtGUSX.js","layer-labels-Bsrk-bJ8.js","view-mode-sYoYTddZ.js","generation-pipeline-D3tlYnwn.js","graph-override-DXl10Onp.js","names-generator-wpWlpCnK.js","features-generator-DyL1Dt04.js","labels-generator-CUQ5cHEx.js","styles-legacy-CmWO8BQ9.js","transports-generator-Dv1kk2bu.js","ui-tour-D7aKFVTu.js","ui-tour-B3l7mx48.css"])))=>i.map(i=>d[i]);
import{Et as e,F as t,H as n,It as r,Kn as i,Lt as a,M as o,Mt as s,Nt as c,On as l,P as u,Pt as d,Rt as f,U as p,Xn as m,Z as h,at as g,b as _,gn as v,kt as y,nr as ee,rr as b,st as te,tr as x,y as ne}from"./utils-CNyvX_4Z.js";import{H as S,i as re,it as C,t as w,wt as ie}from"./layers-BLilOnUL.js";import{t as T}from"./sum-BpJJqxFM.js";import{i as E,o as D,t as O}from"./emblems-generator-CuSOzr1f.js";import{n as ae,t as oe}from"./relief-generator-BXaB1e3T.js";import{t as k}from"./preload-helper-DHa_JjYM.js";import{a as se,i as ce,n as le,t as ue}from"./platform-DdqqRmnM.js";import{i as A,n as de,t as fe}from"./tooltips-DY0u1iQZ.js";import{i as j,n as pe}from"./viewport-C0deAIKO.js";import{r as me}from"./draw-landmass-jpM29x2S.js";import{n as he,r as ge,t as M}from"./controllers-CcOoWo4P.js";import{t as _e}from"./layer-labels-Bsrk-bJ8.js";import"./layers-tab-wxKtGUSX.js";import{c as ve,i as ye,l as be,o as xe,r as Se,s as Ce,u as N}from"./zoom-CyJ12Foe.js";import{o as we}from"./schemaUtils-B2thnuln.js";import{i as Te,n as Ee,r as De,s as Oe,t as ke}from"./options-schema-D2Bjy-ln.js";import{i as P,r as Ae}from"./validationUtils-cfDkYsje.js";import{t as je}from"./population-generator-dCJZD78q.js";import{i as Me,n as Ne,r as Pe,t as Fe}from"./cultures-generator-BI1IRO5a.js";import{t as F}from"./pins-avJeaKgU.js";import{a as Ie,i as Le,n as Re,r as ze}from"./generation-pipeline-D3tlYnwn.js";import{t as Be}from"./view-3d-options-DZOulXMR.js";import{i as Ve}from"./features-generator-DyL1Dt04.js";import{n as He}from"./labels-generator-CUQ5cHEx.js";import{t as Ue}from"./names-generator-wpWlpCnK.js";import{s as We}from"./styles-BOEN6zd6.js";import{t as Ge}from"./transports-generator-Dv1kk2bu.js";import{a as Ke,i as qe,n as I,r as Je,t as L}from"./dialog-helpers-CHDy2eFe.js";import{n as Ye}from"./view-mode-sYoYTddZ.js";import{t as Xe}from"./graph-override-DXl10Onp.js";import{t as Ze}from"./notes-BdtocxG6.js";import{a as Qe}from"./fonts-CrwaLr_V.js";import{n as $e,r as et}from"./versioning-BV_WJ_yd.js";import{t as tt}from"./viewbox-events-fm-stbSj.js";import{t as nt}from"./styles-legacy-CmWO8BQ9.js";globalThis.DEBUG=m(localStorage.getItem(`debug`)??``)||{},globalThis.INFO=!0,globalThis.TIME=!0,globalThis.WARN=!0,globalThis.ERROR=!0;function rt(){INFO&&console.info(` Seed: ${options.map.seed}
    Map size: ${options.map.graph.width}x${options.map.graph.height} px
    Points: ${grid.points.length}
    Cells: ${pack.cells.i.length}
    Map size: ${options.map.geography.mapSize}%
    States: ${pack.states.length-1}
    Provinces: ${pack.provinces.length-1}
    Burgs: ${pack.burgs.length-1}
    Religions: ${pack.religions.length-1}
    Culture set: ${options.map.cultures.set}
    Cultures: ${pack.cultures.length-1}`)}function it(e=options.app.ui.assistant===`show`){let n=t(`assistantBubble`);n&&(n.style.display=e?`flex`:`none`)}function at(e){let n=t(`assistantBubble`);n?.classList.toggle(`open`,e),n?.setAttribute(`aria-expanded`,String(e))}function ot(){let{width:e,height:t}=options.map.graph,n=(n,r)=>l(n).selectAll(r).attr(`x`,0).attr(`y`,0).attr(`width`,e).attr(`height`,t);n(`#landmass`,`rect`),n(`#oceanPattern`,`rect`),n(`#oceanLayers`,`rect`),n(`#fogging`,`rect`),l(`#deftemp`).select(`mask#fog > rect`).attr(`width`,e).attr(`height`,t),l(`#deftemp`).select(`mask#water > rect`).attr(`width`,e).attr(`height`,t)}function st(){let{width:e,height:n}=options.map.graph,r=Math.ceil(Math.max(j.width/e,j.height/n)*1e3)/1e3;Options.set(e=>e.app.zoomExtent.min=r);let i=t(`zoomExtentMin`);i&&(i.value=String(r)),be(r,options.app.zoomExtent.max),Se()}function ct(e,n){pe(e,n),l(`#map`).attr(`width`,j.width).attr(`height`,j.height),ve(0,0,options.map.graph.width,options.map.graph.height),st();let r=(e,n)=>{let r=t(e);r&&(r.value=String(n))};r(`viewportWidth`,j.width),r(`viewportHeight`,j.height),w.draw(`scaleBar`),S()}function R(){let e=options.app.viewport??{width:window.innerWidth,height:window.innerHeight};ct(e.width>0?e.width:options.map.graph.width,e.height>0?e.height:options.map.graph.height)}var lt=[`citadel`,`plaza`,`shanty`,`temple`,`walls`],ut={fill:`#ffffff`,stroke:`#3e3e4b`},dt=()=>options.generation.burgs.limit===ke,z=new class{iconSets=[{id:`burgs`,group:`Settlements`,em:10,paint:ut},{id:`ports`,group:`Settlements`,em:10,paint:ut}];generate(){let{cells:e}=pack,t=[0];e.burg=new Uint16Array(e.i.length);let n=e.i.filter(t=>e.s[t]>0&&e.culture[t]);if(!n.length)return ERROR&&console.error(`There is no populated cells with culture assigned. Cannot generate states`),pack.burgs=t,t;let r=D();(()=>{let a=new Int16Array(e.s.map(e=>e*(.5+Math.random()*.5))),o=n.sort((e,t)=>a[t]-a[e]),s=i(),c=(options.map.graph.width+options.map.graph.height)/2/s;for(let n=0;t.length<=s;n++){let i=o[n],[a,s]=e.p[i];r.find(a,s,c)===void 0&&(t.push({cell:i,x:a,y:s,i:t.length}),r.add([a,s])),n===o.length-1&&(WARN&&console.warn(`Cannot place capitals with current spacing. Trying again with reduced spacing`),r=D(),n=-1,t=[0],c/=1.2)}t.forEach((t,n)=>{n&&(t.i=n,t.state=n,t.culture=e.culture[t.cell],t.name=Names.getCultureShort(t.culture),t.feature=e.f[t.cell],t.capital=1,e.burg[t.cell]=n)})})(),(()=>{let i=new Int16Array(e.s.map(e=>e*c(1,3,0,20,3))),o=n.sort((e,t)=>i[t]-i[e]),s=a(),l=(options.map.graph.width+options.map.graph.height)/150/(s**.7/66);for(let n=0;n<s&&l>1;){for(let i=0;n<s&&i<o.length;i++){if(e.burg[o[i]])continue;let a=o[i],[s,u]=e.p[a],d=l*c(1,.3,.2,2,2);if(r.find(s,u,d)!==void 0)continue;let f=t.length,p=e.culture[a],m=Names.getCulture(p),h=e.f[a];t.push({cell:a,x:s,y:u,i:f,state:0,culture:p,name:m,feature:h,capital:0}),n++,e.burg[a]=f}l*=.5}})(),pack.burgs=t,this.assignPorts();function i(){let e=options.generation.states.limit;return n.length<e*10&&(e=Math.floor(n.length/10),WARN&&console.warn(`Not enough populated cells. Generating only ${e} capitals/states`)),e}function a(){return dt()?b(n.length/5/(grid.points.length/1e4)**.8):Math.min(options.generation.burgs.limit,n.length)}}getType(e,t){let{cells:n,features:r}=pack;if(t)return`Naval`;let i=n.haven[e];if(i!==void 0&&r[n.f[i]].type===`lake`)return`Lake`;if(n.h[e]>60)return`Highland`;if(n.r[e]&&n.fl[e]>=100)return`River`;let a=n.biome[e],o=n.pop[e];if(!n.burg[e]||o<=5){if(o<5&&[1,2,3,4].includes(a))return`Nomadic`;if(a>4&&a<10)return`Hunting`}return Me}assignPorts(){let{cells:e,burgs:t}=pack,n=new Map(pack.rivers.map(e=>[e.i,e]));for(let e of t)e.i&&!e.lock&&delete e.port;let r=this.collectPortCandidates(t);for(let e of r.values())if(e.length)for(let t of this.selectPorts(e))this.promoteToPort(t,n);for(let r of t){if(!r.i||r.lock||r.port||!e.r[r.cell])continue;let[t,i]=this.shiftTowardsRiverBank(r.cell,n);r.x=t,r.y=i}}collectPortCandidates(e){let{cells:t}=pack,n=grid.cells.temp,r=new Map,i=e=>{r.has(e.portFeatureId)||r.set(e.portFeatureId,[]),r.get(e.portFeatureId).push(e)};for(let r of e){if(!r.i||r.lock)continue;let e=t.haven[r.cell],a=t.f[r.cell];if(e){let o=t.harbor[r.cell];if(!o)continue;let s=t.f[e],c=pack.features[s];if(!c||c.cells<=1||Ve.has(c.subtype)||n[t.g[r.cell]]<=0)continue;i({burg:r,haven:e,portFeatureId:c.type===`lake`&&c.outlet?Rivers.resolveLakeDrainFeature(s)??s:s,landFeature:a,preferred:o&&!!r.capital||o===1})}else{if(!Rivers.isNavigable(r.cell))continue;let e=Rivers.resolveDrainFeature(r.cell);if(!e)continue;i({burg:r,haven:null,portFeatureId:e,landFeature:a,preferred:!0})}}return r}selectPorts(e){let{cells:t}=pack,n=e=>(e.burg.capital?-1e3:0)+(e.haven===null?0:t.harbor[e.burg.cell]),r=new Set;for(let t of e)t.preferred&&r.add(t);let i=new Map;for(let t of e)i.has(t.landFeature)||i.set(t.landFeature,[]),i.get(t.landFeature).push(t);for(let e of i.values())e.some(e=>r.has(e))||r.add(e.reduce((e,t)=>n(t)<n(e)?t:e));if(r.size<2){let t=e.filter(e=>!r.has(e)).sort((e,t)=>n(e)-n(t));for(let e of t)if(r.add(e),r.size>=2)break}return r.size<2?[]:[...r]}promoteToPort(e,t){let{burg:n,haven:r,portFeatureId:i}=e;n.port=i;let[a,o]=r===null?this.shiftTowardsRiverBank(n.cell,t):this.getCloseToEdgePoint(n.cell,r);n.x=a,n.y=o}getCloseToEdgePoint(e,t){let{cells:n,vertices:r}=pack,[i,a]=n.p[e],o=n.v[e].filter(e=>r.c[e].some(e=>e===t)),[s,c]=r.p[o[0]],[l,u]=r.p[o[1]],d=(s+l)/2,f=(c+u)/2;return[b(i+.95*(d-i),2),b(a+.95*(f-a),2)]}shiftTowardsRiverBank(e,t){let{cells:n}=pack,[r,i]=n.p[e],a=Math.min(n.fl[e]/200,.6),o=this.getRiverTangent(e,t);if(!o){let t=e%2?r+a:r-a,o=n.r[e]%2?i+a:i-a;return[b(t,2),b(o,2)]}let[s,c]=o,l=Math.hypot(s,c),u=e%2?1:-1,d=r+-c/l*a*u,f=i+s/l*a*u;return[b(d,2),b(f,2)]}getRiverTangent(e,t){let{cells:n}=pack,r=t.get(n.r[e]);if(!r)return null;let i=r.cells.indexOf(e);if(i===-1)return null;let a=r.cells[i-1],o=r.cells[i+1],s=a!==void 0&&a>=0?n.p[a]:n.p[e],c=o!==void 0&&o>=0?n.p[o]:n.p[e],l=c[0]-s[0],u=c[1]-s[1];return l===0&&u===0?null:[l,u]}definePopulation(e){let t=e.cell,n=pack.cells.s[t]/5;e.capital&&(n*=1.5);let r=Routes.getConnectivityRate(t);r&&(n*=r),n*=c(1,1,.25,4,5),n+=(e.i%100-t%100)/1e3,e.population=b(Math.max(n,.01),3)}defineEmblem(e){e.type=this.getType(e.cell,e.port);let t=pack.states[e.state],n=t.coa,r=.25;e.capital?r+=.1:e.port&&(r-=.1),e.culture!==t.culture&&(r-=.25);let i=e.capital&&y(.2)?`Capital`:e.type===`Generic`?`City`:e.type;e.coa=O.generate(n,r,null,i),e.coa.shield=O.getShield(e.culture,e.state)}defineFeatures(e){let t=e.population;e.citadel=Number(e.capital||t>50&&y(.75)||t>15&&y(.5)||y(.1)),e.walls=Number(e.capital||t>30||t>20&&y(.75)||t>10&&y(.5)||y(.1)),e.shanty=Number(t>60||t>40&&y(.75)||t>20&&e.walls&&y(.4));let n=pack.cells.religion[e.cell],r=pack.states[e.state].form===`Theocracy`;e.temple=Number(n&&r&&y(.5)||t>50||t>35&&y(.75)||t>20&&y(.5))}parseStoredGroups(e){let t=e?m(e):null,n=Array.isArray(t)?t.filter(e=>typeof e?.name==`string`&&typeof e?.order==`number`):[];return n.length?(this.ensureDefaultGroup(n),n):this.getDefaultGroups()}ensureDefaultGroup(e){e.length&&!e.some(e=>e.isDefault)&&(e[0].isDefault=!0)}getDefaultGroups(){return[{name:`capital`,active:!0,order:9,features:{capital:!0},preview:`watabou-city`},{name:`city`,active:!0,order:8,percentile:90,min:5,preview:`watabou-city`},{name:`fort`,active:!0,features:{citadel:!0,walls:!1,plaza:!1,port:!1},order:6,max:1},{name:`monastery`,active:!0,features:{temple:!0,walls:!1,plaza:!1,port:!1},order:5,max:.8},{name:`caravanserai`,active:!0,features:{port:!1,plaza:!0},order:4,max:.8,biomes:[1,2,3]},{name:`trading_post`,active:!0,order:3,features:{plaza:!0},max:.8,biomes:[5,6,7,8,9,10,11,12]},{name:`village`,active:!0,order:2,min:.1,max:2,preview:`watabou-village`},{name:`hamlet`,active:!0,order:1,features:{plaza:!1},max:.1,preview:`watabou-village`},{name:`town`,active:!0,order:7,isDefault:!0,preview:`watabou-city`}]}ensureBurgGroupStyles(){let{groups:e}=styles.burgIcons,t=e.town||Object.values(e)[0];if(t)for(let{name:n}of options.map.burgs.groups){let r=e[n]??structuredClone(t);e[n]=r,r.groups.icons??=structuredClone(t.groups.icons),r.groups.anchors??=structuredClone(t.groups.anchors)}}defineGroup(e,t){if(e.lock&&e.group&&options.map.burgs.groups.find(t=>t.name===e.group))return;let n=options.map.burgs.groups.find(e=>e.isDefault);if(!n){ERROR&&console.error(`No default group defined`);return}e.group=n.name,e.label?.group&&delete e.label.group;for(let n of options.map.burgs.groups)if(n.active&&!(n.min&&!(e.population>=n.min))&&!(n.max&&!(e.population<=n.max))&&!(n.features&&!Object.entries(n.features).every(([t,n])=>!!e[t]===n))&&!(n.biomes&&!n.biomes.includes(pack.cells.biome[e.cell]))&&!(n.states&&!n.states.includes(e.state??0))&&!(n.cultures&&!n.cultures.includes(e.culture??0))&&!(n.religions&&!n.religions.includes(pack.cells.religion[e.cell]))&&!(n.percentile&&!(t.indexOf(e.population)>=Math.floor(t.length*n.percentile/100)))){e.group=n.name;return}}specify(){pack.burgs.forEach(e=>{!e.i||e.removed||e.lock||(this.definePopulation(e),this.defineEmblem(e),this.defineFeatures(e))});let e=pack.burgs.filter(e=>e.i&&!e.removed).map(e=>e.population).sort((e,t)=>e-t);pack.burgs.forEach(t=>{!t.i||t.removed||this.defineGroup(t,e)})}createWatabouCityLinks(e){let t=pack.cells,{i:n,name:r,population:i,cell:a}=e,o=e.MFCG||options.map.seed+String(e.i).padStart(4,`0`),c=2.13*(i*options.map.units.population.scale/options.map.units.population.urbanization.density)**.385,l=x(Math.ceil(c),6,100),u=b(i*options.map.units.population.scale*options.map.units.population.urbanization.rate),d=Number(!!(e.port&&t.haven[a])),f=Number(d?this.isEstuary(a):!!t.r[a]),p=(()=>{if(!d)return null;let[e,n]=t.p[a],[r,i]=t.p[t.haven[a]],o=Math.atan2(i-n,r-e)*180/Math.PI;return b(o<=0?ee(Math.abs(o),0,180):2-ee(o,0,180),2)})(),m=+(t.r[a]?[1,2,3,4,5,6,7,8]:[5,6,7,8]).includes(t.biome[a]),h=Number(e.citadel??0),g=Number(h&&s(2)(n)),_=Number(Routes.isCrossroad(a)),v=Number(e.walls??0),y=Number(e.plaza??0),te=Number(e.temple??0),ne=Number(e.shanty??0),S=new URL(`https://watabou.github.io/city-generator/`);S.search=new URLSearchParams({name:r||``,population:u.toString(),size:l.toString(),seed:o,river:f.toString(),coast:d.toString(),farms:m.toString(),citadel:h.toString(),urban_castle:g.toString(),hub:_.toString(),plaza:y.toString(),greens:y?`1`:`0`,temple:te.toString(),walls:v.toString(),shantytown:ne.toString(),style:`natural`}).toString(),p&&S.searchParams.append(`sea`,p.toString());let re=S.toString();return{link:re,preview:`${re}&preview=1`}}isEstuary(e){let{r:t,haven:n}=pack.cells;return!!(t[e]&&n[e]&&pack.rivers.find(n=>n.i===t[e])?.mouth===e)}createWatabouVillageLinks(e){let{cells:t,features:n}=pack,{i:r,population:i,cell:a}=e,o=options.map.seed+String(r).padStart(4,`0`),c=b(i*options.map.units.population.scale*options.map.units.population.urbanization.rate),l=[];this.isEstuary(a)?l.push(`estuary`):t.haven[a]&&n[t.f[a]].cells===1?l.push(`island,district`):e.port&&t.haven[a]?l.push(`coast`):t.conf[a]?l.push(`confluence`):t.r[a]?l.push(`river`):c<200&&s(4)(a)&&l.push(`pond`);let u=Routes.getConnectivityRate(a);l.push(u>1?`highway`:u===1?`dead end`:`isolated`);let d=t.biome[a];(t.r[a]?[1,2,3,4,5,6,7,8]:[5,6,7,8]).includes(d)?s(6)(a)&&l.push(`farmland`):l.push(`uncultivated`);let f=grid.cells.temp[t.g[a]];(f<=0||f>28||f>25&&s(3)(a))&&l.push(`no orchards`),e.plaza||l.push(`no square`),e.walls&&l.push(`palisade`),c<100?l.push(`sparse`):c>300&&l.push(`dense`);let p=c>1500?1600:c>1e3?1400:c>500?1e3:c>200?800:c>100?600:400,m=b(p/2.05),h=[1,2].includes(d)?`sand`:f<=5||[9,10,11].includes(d)?`snow`:`default`,g=new URL(`https://watabou.github.io/village-generator/`);g.search=new URLSearchParams({pop:c.toString(),name:e.name||``,seed:o,width:p.toString(),height:m.toString(),style:h,tags:l.join(`,`)}).toString();let _=g.toString();return{link:_,preview:`${_}&preview=1`}}createWatabouDwellingLinks(e){let t=options.map.seed+String(e.i).padStart(4,`0`),n=b(e.population*options.map.units.population.scale*options.map.units.population.urbanization.rate),r=n>200?[`large`,`tall`]:n>100?[`large`]:n>50?[`tall`]:n>20?[`low`]:[`small`],i=new URL(`https://watabou.github.io/dwellings/`);i.search=new URLSearchParams({pop:n.toString(),name:``,seed:t,tags:r.join(`,`)}).toString();let a=i.toString();return{link:a,preview:`${a}&preview=1`}}getPreview(e){let t={"watabou-city":e=>this.createWatabouCityLinks(e),"watabou-village":e=>this.createWatabouVillageLinks(e),"watabou-dwelling":e=>this.createWatabouDwellingLinks(e)};if(e.link)return{link:e.link,preview:e.link};let n=options.map.burgs.groups.find(t=>t.name===e.group);return!n?.preview||!t[n.preview]?{link:null,preview:null}:t[n.preview](e)}add(e,t){let{cells:n}=pack,r=Pack.requireCell(e,t);if(n.h[r]<20)throw Error(`A burg cannot be placed in the water`);if(n.burg[r])throw Error(`Cell ${r} already has burg ${n.burg[r]}`);let i=pack.burgs.length,a=n.culture[r],o={cell:r,x:e,y:t,i,state:n.state[r],culture:a,name:Names.getCulture(a),feature:n.f[r],capital:0,port:0};this.definePopulation(o),this.defineEmblem(o),this.defineFeatures(o);let s=pack.burgs.filter(e=>e.i&&!e.removed).map(e=>e.population).sort((e,t)=>e-t);return this.defineGroup(o,s),pack.burgs.push(o),n.burg[r]=i,Routes.connect(r),i}regenerate(){let{cells:e,burgs:t,states:n,provinces:r}=pack,{pop:i}=e;je.rankCells(),e.pop=i;let a=[0],o=D();e.burg=new Uint16Array(e.i.length),n.filter(e=>e.i).forEach(e=>{e.capital=0}),r.filter(e=>e.i).forEach(e=>{e.burg=0});let s=t.filter(e=>e.i&&!e.removed&&e.lock);for(let t of s){let r=a.length;t.i=r,a.push(t),o.add([t.x,t.y]),e.burg[t.cell]=r,t.capital&&t.state!==void 0&&(n[t.state].capital=r,n[t.state].center=t.cell)}let l=new Set(pack.markets.map(e=>e.centerBurgId)),u=t.filter(e=>e.i&&!e.removed&&!e.lock&&l.has(e.i));for(let t of u){let r=t.i,i=a.length,s=pack.markets.find(e=>e.centerBurgId===r);s&&(s.centerBurgId=i),t.i=i,a.push(t),o.add([t.x,t.y]),e.burg[t.cell]=i,t.capital&&t.state!==void 0&&(n[t.state].capital=i,n[t.state].center=t.cell)}let d=new Int16Array(e.s.map(e=>e*Math.random())),f=e.i.filter(t=>d[t]>0&&e.culture[t]).sort((e,t)=>d[t]-d[e]),p=n.filter(e=>e.i&&!e.removed).length,m=(dt()?b(f.length/5/(grid.points.length/1e4)**.8):options.generation.burgs.limit)+p,h=(options.map.graph.width+options.map.graph.height)/150/(m**.7/66);for(let t=0;t<f.length&&a.length<m;t++){let r=a.length,i=f[t],[s,l]=e.p[i],u=h*c(1,.3,.2,2,2);if(o.find(s,l,u)!==void 0)continue;let d=e.state[i],p=Number(!!(d&&!n[d].capital));p&&(n[d].capital=r,n[d].center=i);let m=e.culture[i],g=Names.getCulture(m);a.push({cell:i,x:s,y:l,state:d,i:r,culture:m,name:g,capital:p,feature:e.f[i]}),o.add([s,l]),e.burg[i]=r}pack.burgs=a,this.assignPorts(),n.filter(e=>e.i&&!e.removed&&!e.capital).forEach(t=>{let n=e.burg[t.center]||this.add(...e.p[t.center]);t.capital=n,t.center=pack.burgs[n].cell;let r=pack.burgs[n];r.state=t.i,r.capital=1,this.changeGroup(r,null)}),this.specify(),Routes.regenerate()}changeGroup(e,t=null){if(t)e.group=t;else{let t=pack.burgs.filter(e=>e.i&&!e.removed).map(e=>e.population).sort((e,t)=>e-t);this.defineGroup(e,t)}}rename(e,t){let n=pack.burgs[e];if(!n||n.removed)throw Error(`Burg ${e} does not exist`);n.name=Ae(t),n.label?.text!==void 0&&(n.label.text=n.name)}setPopulation(e,t){let n=this.living(e),{scale:r,urbanization:i}=options.map.units.population;if(!Number.isFinite(t)||t<0)throw Error(`The population must be a non-negative number`);n.population=b(t/r/i.rate,4)}setGroup(e,t){let n=options.map.burgs.groups.filter(({removed:e})=>!e).map(({name:e})=>e);this.changeGroup(this.living(e),P(t,n,`The group`))}setType(e,t){this.living(e).type=P(t,Ne,`The type`)}setBuilding(e,t,n){let r=this.living(e),i=P(t,lt,`The building`);if(i===`plaza`&&!n&&pack.markets?.some(t=>t.centerBurgId===e))throw Error(`Burg ${e} is a market center and keeps its plaza; remove the market first`);r[i]=+!!n}setCulture(e,t){let n=pack.cultures[t];if(!n||n.removed)throw Error(`Culture ${t} does not exist`);this.living(e).culture=t}setPort(e,t){let n=this.living(e);if(!t){n.port=0;return}let r=this.portWater(n.cell);if(!r)throw Error(`Burg ${e} has no navigable water to be a port on`);n.port=r}portWater(e){let{cells:t,features:n}=pack,r=t.haven[e],i=r?n[t.f[r]]:void 0;return(r?i?.type===`lake`&&i.outlet?Rivers.resolveLakeDrainFeature(i.i)??i.i:t.f[r]:Rivers.isNavigable(e)&&Rivers.resolveDrainFeature(e))||0}setCapital(e){let t=this.living(e),n=pack.states[t.state??0];if(!t.state||!n||n.removed)throw Error(`Burg ${e} is in neutral lands, which have no capital`);if(t.capital)return;let r=pack.burgs[n.capital];n.capital=e,n.center=t.cell,t.capital=1,this.changeGroup(t),r?.i&&r.i!==e&&(r.capital=0,this.changeGroup(r))}move(e,t,n){let r=this.living(e),{cells:i}=pack,a=Pack.requireCell(t,n);if(i.h[a]<20)throw Error(`A burg cannot be placed in the water`);if(i.burg[a]&&i.burg[a]!==e)throw Error(`Cell ${a} already has burg ${i.burg[a]}`);let o=i.state[a];if(r.capital&&o!==r.state)throw Error(`A capital cannot be moved into another state`);let s=pack.provinces?.find(t=>t.i&&!t.removed&&t.burg===e);if(s&&i.province[a]!==s.i)throw Error(`Burg ${e} is the capital of province ${s.i} and cannot leave it`);i.burg[r.cell]=0,i.burg[a]=e,Object.assign(r,{cell:a,state:o,x:b(t,2),y:b(n,2),feature:i.f[a]}),r.capital&&(pack.states[o].center=a),s&&(s.center=a),r.port&&=this.portWater(a),r.label&&Object.assign(r.label,{dx:0,dy:0,pathPoints:void 0})}setTreasury(e,t){if(typeof t!=`number`||!Number.isFinite(t))throw Error(`The treasury must be a number`);this.living(e).treasury=b(t,2)}setLocked(e,t){let n=this.living(e);t?n.lock=!0:delete n.lock}setLink(e,t){let n=this.living(e);if(!t){delete n.link;return}if(typeof t!=`string`||!/^https?:\/\//i.test(t.trim()))throw Error(`The link must be an http(s) URL`);n.link=t.trim()}living(e){let t=pack.burgs[e];if(!t||t.removed)throw Error(`Burg ${e} does not exist`);return t}remove(e){let t=this.living(e);if(t.capital)throw Error(`Burg ${e} is a capital; make another burg the capital first`);if(pack.markets?.some(t=>t.centerBurgId===e))throw Error(`Burg ${e} is a market center; remove the market first`);pack.cells.burg[t.cell]=0,t.removed=!0,delete t.note,delete t.coa;for(let t of pack.provinces??[])t.burg===e&&(t.burg=0)}};window.Burgs=z;var ft=new class{regenerate(){this.generate()}generate(){let{cells:e,states:t}=pack,{p:n}=e,r=t.filter(e=>e.i&&!e.removed),i=T(r.map(e=>e.expansionism)),a=T(r.map(e=>e.area)),o={x:0,Ally:-.2,Friendly:-.1,Neutral:0,Suspicion:.1,Enemy:1,Unknown:0,Rival:.5,Vassal:.5,Suzerain:-.5},s={melee:{Nomadic:.5,Highland:1.2,Lake:1,Naval:.7,Hunting:1.2,River:1.1},ranged:{Nomadic:.9,Highland:1.3,Lake:1,Naval:.8,Hunting:2,River:.8},mounted:{Nomadic:2.3,Highland:.6,Lake:.7,Naval:.3,Hunting:.7,River:.8},machinery:{Nomadic:.8,Highland:1.4,Lake:1.1,Naval:1.4,Hunting:.4,River:1.1},naval:{Nomadic:.5,Highland:.5,Lake:1.2,Naval:1.8,Hunting:.7,River:1.2},armored:{Nomadic:1,Highland:.5,Lake:1,Naval:1,Hunting:.7,River:1.1},aviation:{Nomadic:.5,Highland:.5,Lake:1.2,Naval:1.2,Hunting:.6,River:1.2},magical:{Nomadic:1,Highland:2,Lake:1,Naval:1,Hunting:1,River:1}},c={nomadic:{melee:.2,ranged:.5,mounted:3,machinery:.4,naval:.3,armored:1.6,aviation:1,magical:.5},wetland:{melee:.8,ranged:2,mounted:.3,machinery:1.2,naval:1,armored:.2,aviation:.5,magical:.5},highland:{melee:1.2,ranged:1.6,mounted:.3,machinery:3,naval:1,armored:.8,aviation:.3,magical:2}},l={nomadic:{melee:.3,ranged:.8,mounted:3,machinery:.4,naval:1,armored:1.6,aviation:1,magical:.5},wetland:{melee:1,ranged:1.6,mounted:.2,machinery:1.2,naval:1,armored:.2,aviation:.5,magical:.5},highland:{melee:1.2,ranged:2,mounted:.3,machinery:3,naval:1,armored:.8,aviation:.3,magical:2}};r.forEach(e=>{e.temp={};let t=e.diplomacy,n=x(e.expansionism/i/(e.area/a),.25,4),r=t.some(e=>e===`Enemy`)?1:t.some(e=>e===`Rival`)?.8:t.some(e=>e===`Suspicion`)?.5:.1,c=x(e.neighbors.map(t=>t?pack.states[t].diplomacy[e.i]:`Suspicion`).reduce((e,t)=>e+o[t],.5),.3,3);e.alert=x(b(n*r*c,2),.1,5),e.temp.platoons=[];for(let t of options.map.military.units){if(!s[t.type])continue;let n=s[t.type][e.type]||1;t.type===`mounted`&&e.formName.includes(`Horde`)?n*=2:t.type===`naval`&&e.form===`Republic`&&(n*=1.2),e.temp[t.name]=n*e.alert}});let u=t=>[1,2,3,4].includes(e.biome[t])?`nomadic`:[7,8,9,12].includes(e.biome[t])?`wetland`:e.h[t]>=70?`highland`:`generic`;function d(e,t,n,r,i){return!(e.biomes&&!e.biomes.includes(t)||e.states&&!e.states.includes(n)||e.cultures&&!e.cultures.includes(r)||e.religions&&!e.religions.includes(i))}for(let r of e.i){if(!e.pop[r])continue;let i=e.biome[r],a=e.state[r],o=e.culture[r],s=e.religion[r],l=t[a];if(!a||l.removed)continue;let f=e.pop[r]/100;o!==l.culture&&(f=l.form===`Union`?f/1.2:f/2),s!==e.religion[l.center]&&(f=l.form===`Theocracy`?f/2.2:f/1.4),e.f[r]!==e.f[l.center]&&(f=l.type===`Naval`?f/1.2:f/1.8);let p=u(r);for(let t of options.map.military.units){let u=+t.rural;if(Number.isNaN(u)||u<=0||!l.temp[t.name]||!d(t,i,a,o,s)||t.type===`naval`&&!e.haven[r])continue;let m=p===`generic`?1:c[p][t.type],h=b(f*u*m*l.temp[t.name]*options.map.units.population.scale);if(!h)continue;let[g,_]=n[r],v=0;if(t.type===`naval`){let t=e.haven[r];[g,_]=n[t],v=1}l.temp.platoons.push({cell:r,a:h,t:h,x:g,y:_,u:t.name,n:v,s:t.separate,type:t.type})}}for(let r of pack.burgs){if(!r.i||r.removed||!r.state||!r.population)continue;let i=e.biome[r.cell],a=r.state,o=r.culture,s=e.religion[r.cell],c=t[a],f=r.population*options.map.units.population.urbanization.rate/100;r.capital&&(f*=1.2),o!==c.culture&&(f=c.form===`Union`?f/1.2:f/2),s!==e.religion[c.center]&&(f=c.form===`Theocracy`?f/2.2:f/1.4),e.f[r.cell]!==e.f[c.center]&&(f=c.type===`Naval`?f/1.2:f/1.8);let p=u(r.cell);for(let t of options.map.military.units){let u=+t.urban;if(Number.isNaN(u)||u<=0||!c.temp[t.name]||!d(t,i,a,o,s)||t.type===`naval`&&(!r.port||!e.haven[r.cell]))continue;let m=p===`generic`?1:l[p][t.type],h=b(f*u*m*c.temp[t.name]*options.map.units.population.scale);if(!h)continue;let[g,_]=n[r.cell],v=0;if(t.type===`naval`){let t=e.haven[r.cell];[g,_]=n[t],v=1}c.temp.platoons.push({cell:r.cell,a:h,t:h,x:g,y:_,u:t.name,n:v,s:t.separate,type:t.type})}}let f=3*options.map.units.population.scale,p=(e,t)=>!e.s&&!t.s||e.u===t.u,m=(e,t)=>{if(!e.length)return[];e.sort((e,t)=>e.a-t.a);let n=D(e,e=>e.x,e=>e.y),r=(e,t)=>{t.children?t.children.push(e):t.children=[e],e.children&&e.children.forEach(e=>{t.children.push(e)}),t.t+=e.t,e.t=0};e.forEach(e=>{n.remove(e);let t=n.find(e.x,e.y,20);if(t?.t&&p(e,t)){r(e,t);return}if(e.t>f)return;let i=(f-e.t)/(e.s?40:20),a=_(e.x,e.y,i,n);for(let t of a)if(t.t<f&&p(e,t)){r(e,t);break}});let i=e.filter(e=>e.t).sort((e,t)=>t.t-e.t).map((e,n)=>{let r={};return r[e.u]=e.a,(e.children??[]).forEach(e=>{r[e.u]=(r[e.u]??0)+e.a}),{i:n,a:e.t,cell:e.cell,x:e.x,y:e.y,bx:e.x,by:e.y,u:r,n:e.n,name:``,icon:``,state:t.i}});return i.forEach(e=>{e.name=this.getName(e,i),e.icon=this.getEmblem(e),this.generateNote(e,t)}),i};r.forEach(e=>{e.military=m(e.temp.platoons,e),delete e.temp})}getDefaultOptions(){return[{icon:`⚔️`,name:`infantry`,rural:.25,urban:.2,crew:1,power:1,type:`melee`,separate:0},{icon:`🏹`,name:`archers`,rural:.12,urban:.2,crew:1,power:1,type:`ranged`,separate:0},{icon:`🐴`,name:`cavalry`,rural:.12,urban:.03,crew:2,power:2,type:`mounted`,separate:0},{icon:`💣`,name:`artillery`,rural:0,urban:.03,crew:8,power:12,type:`machinery`,separate:0},{icon:`🌊`,name:`fleet`,rural:0,urban:.015,crew:100,power:50,type:`naval`,separate:1}].map(e=>({...e,icon:E.glyph(e.icon)}))}getName(t,n){let r=pack.cells,i=t.n?null:r.province[t.cell]&&pack.provinces[r.province[t.cell]]?pack.provinces[r.province[t.cell]].name:r.burg[t.cell]&&pack.burgs[r.burg[t.cell]]?pack.burgs[r.burg[t.cell]].name:null,a=e(n.filter(e=>e.n===t.n&&e.i<t.i).length+1),o=t.n?`Fleet`:`Regiment`;return`${a}${i?` (${i}) `:` `}${o}`}getTotal(e){return e.a>(e.n?999:99999)?ne(e.a):e.a}generateNote(e,t){let n=pack.cells,i=n.burg[e.cell]&&pack.burgs[n.burg[e.cell]]?pack.burgs[n.burg[e.cell]].name:n.province[e.cell]&&pack.provinces[n.province[e.cell]]?pack.provinces[n.province[e.cell]].fullName:null,o=i?`${e.name} is ${e.n?`based`:`stationed`} in ${i}. `:``,s=e.a?Object.keys(e.u).map(t=>`— ${t}: ${e.u[t]}`).join(`\r
`):null,l=s?`\r\n\r\nRegiment composition in ${options.map.lore.calendar.year} ${options.map.lore.calendar.eraShort}:\r\n${s}.`:``,u=t.campaigns?r(t.campaigns):null,d=u?a(u.start,u.end||options.map.lore.calendar.year):c(options.map.lore.calendar.year-100,150,1,options.map.lore.calendar.year-6),f=u?` during the ${u.name}`:``;e.note=`Regiment was formed in ${d} ${options.map.lore.calendar.era}${f}. ${o}${l}`}rename(e,t,n){this.living(e,t).name=Ae(n)}remove(e,t){let n=this.living(e,t),r=pack.states[e].military;r.splice(r.indexOf(n),1)}add(e,t,n){let r=pack.states[e];if(!e||!r||r.removed)throw Error(`State ${e} does not exist`);let i=Pack.requireCell(t,n),[a,o]=pack.cells.p[i];r.military??=[];let s=r.military,c=s.length?Math.max(...s.map(e=>e.i))+1:0,l={a:0,cell:i,i:c,n:+(pack.cells.h[i]<20),u:{},x:a,y:o,bx:a,by:o,state:e,icon:E.glyph(`🛡️`),name:``,t:0,s:0,type:``};return l.name=this.getName(l,s),s.push(l),this.generateNote(l,r),c}setUnits(e,t,n){let r=this.living(e,t);if(typeof n!=`object`||!n||Array.isArray(n))throw Error(`Units are an object of unit names and troop numbers`);let i=options.map.military.units.map(({name:e})=>e);for(let[e,t]of Object.entries(n))if(e in r.u||P(e,i,`The unit`),!Number.isInteger(t)||t<0)throw Error(`The number of ${e} must be a non-negative integer`);r.u={...n},r.a=T(Object.values(r.u))}setAlert(e,t){let n=pack.states[e];if(!e||!n||n.removed)throw Error(`State ${e} does not exist`);if(typeof t!=`number`||!(t>=0&&Number.isFinite(t)))throw Error(`The alert must be a non-negative number`);let r=n.alert??1;n.alert=b(t,2);let i=r?n.alert/r:0;for(let e of n.military??[]){for(let t of Object.keys(e.u))e.u[t]=b(e.u[t]*i);e.a=T(Object.values(e.u))}}setNaval(e,t,n){this.living(e,t).n=+!!n}setIcon(e,t,n){this.living(e,t).icon=E.reference(n)}move(e,t,n,r){let i=this.living(e,t);Pack.requireCell(n,r),i.x=b(n,2),i.y=b(r,2)}rotate(e,t,n){let r=this.living(e,t);if(typeof n!=`number`||!(n>=-180&&n<=180))throw Error(`The angle must be a number from -180 to 180`);r.angle=b(n,2)}setBase(e,t,n,r){let i=this.living(e,t);Pack.requireCell(n,r),i.bx=b(n,2),i.by=b(r,2)}split(e,t){let n=this.living(e,t),r=pack.states[e],i=r.military,a=Object.fromEntries(Object.entries(n.u).map(([e,t])=>[e,Math.floor(t/2)])),o=T(Object.values(a));if(!o)throw Error(`Regiment ${e}-${t} has too few troops to split`);n.u=Object.fromEntries(Object.entries(n.u).map(([e,t])=>[e,Math.ceil(t/2)])),n.a=T(Object.values(n.u));let s=styles.military.options.boxSize*2,c=n.y+s;for(;i.some(e=>e.x===n.x&&e.y===c);)c+=s;let l=Math.max(...i.map(e=>e.i))+1,u={a:o,cell:n.cell,i:l,n:n.n,u:a,x:n.x,y:c,bx:n.bx,by:n.by,state:e,icon:n.icon,name:``,t:0,s:0,type:n.type};return u.name=this.getName(u,i),i.push(u),this.generateNote(u,r),l}attach(e,t,n,r){let i=this.living(e,t),a=this.living(n,r);if(i===a)throw Error(`A regiment cannot attach to itself`);for(let[e,t]of Object.entries(i.u))t&&(a.u[e]=(a.u[e]||0)+t);a.a=T(Object.values(a.u));let{year:o,eraShort:s}=options.map.lore.calendar,c=i.note?` Its record: ${i.note}`:``,l=`${i.name} merged into the regiment (${o} ${s}).${c}`;a.note=a.note?`${a.note}<br><br>${l}`:l,this.remove(e,t)}living(e,t){let n=pack.states[e],r=n&&!n.removed?n.military?.find(({i:e})=>e===t):void 0;if(!r)throw Error(`Regiment ${e}-${t} does not exist`);return r}getEmblem(e){if(!e.n&&!Object.values(e.u).length)return E.glyph(`🔰`);if(!e.n&&pack.states[e.state].form===`Monarchy`&&pack.cells.burg[e.cell]&&pack.burgs[pack.cells.burg[e.cell]].capital)return E.glyph(`👑`);let t=Object.entries(e.u).sort((e,t)=>t[1]-e[1])[0][0],n=options.map.military.units.find(e=>e.name===t);return n?n.icon:E.glyph(`⚔️`)}};window.Military=ft;var pt=`fmg-options`,mt=`fmg-custom-icons`,ht=3e3,gt=`#997787`,_t=500,vt=()=>typeof navigator>`u`?``:navigator.language,yt=()=>[`en-US`,`en-GB`].includes(vt()),bt=new class{saveTimer=0;iconsRestored=!1;iconsRevision=0;savedIcons={icons:null,revision:-1};getDefaultOptions(){return{map:{seed:``,graph:{width:1280,height:800,points:1e4},geography:{mapSize:100,latitude:50,longitude:50,coordinates:{latT:180,latN:90,latS:-90,lonT:320,lonW:-160,lonE:160}},climate:{temperature:{equator:27,northPole:-30,southPole:-15},precipitation:100,winds:[225,45,225,315,135,315]},cultures:{set:`world`},lore:{name:``,description:``,calendar:{year:1e3,era:`Era`,eraShort:`E`}},units:{distance:{unit:yt()?`mi`:`km`,scale:3},area:{unit:`square`},height:{unit:yt()?`ft`:`m`,exponent:2},temperature:{unit:vt()===`en-US`?`°F`:`°C`},population:{scale:1e3,urbanization:{rate:1,density:10}}},style:{preset:`default`},burgs:{groups:z.getDefaultGroups()},labels:{groups:He.getDefaultGroups()},military:{units:ft.getDefaultOptions()},transports:Ge.getDefaults(),customIcons:[],coastline:me.getDefaultSettings(),relief:{rules:oe.getDefaultRules()}},generation:{graph:{width:1280,height:800,density:4},geography:{mapSize:null,latitude:null,longitude:null},template:``,resolveDepressionsSteps:250,lakeElevationLimit:20,cultures:{limit:12,set:`world`,sizeVariety:4,growthRate:1},states:{limit:18,sizeVariety:4,growthRate:1},provinces:{ratio:20},religions:{limit:6},burgs:{limit:1e3}},app:{notesPinned:!1,emblems:{showAll:!1,shape:`culture`},labels:{showAll:!1},heightmapEditor:{renderOcean:!1,showDrainage:!1,allowErosion:!0},performance:{shapeRendering:`optimizeSpeed`,stateHalos:!1,viewportRedraw:`continuous`},onLoad:`random`,zoomExtent:{min:1,max:20},viewport:null,autosave:{interval:15,remind:!0},ui:{size:null,tooltipSize:14,themeColor:gt,transparency:5,assistant:`show`,speakerVoice:``},export:{pngResolution:1,tiles:{cols:8,rows:8,scale:1}},trade:{animation:structuredClone(re)},threeD:structuredClone(Be)}}}set(e){e(options),this.save()}save(){clearTimeout(this.saveTimer),this.saveTimer=window.setTimeout(()=>this.persist(),_t)}iconsChanged(){this.iconsRevision++,this.save()}persist(){clearTimeout(this.saveTimer),this.saveTimer=0;let{customIcons:e,...t}=options.map;this.persistIcons(e);try{localStorage.setItem(pt,JSON.stringify({...options,map:t}))}catch(e){if(!(e instanceof DOMException&&e.name===`QuotaExceededError`))throw e;console.error(e),A(`Browser storage is full, so the latest settings are not kept in this browser. They are safe in the .map file: save the map to keep them`,!1,`error`,1e4)}}persistIcons(e){let t=e===this.savedIcons.icons&&this.iconsRevision===this.savedIcons.revision;!this.iconsRestored||t||typeof ldb>`u`||(this.savedIcons={icons:e,revision:this.iconsRevision},ldb.set(mt,e))}async restoreIcons(){if(typeof ldb>`u`)return;let e=Symbol(`unreadable`),t=new Promise(t=>setTimeout(()=>t(e),ht)),n=await Promise.race([ldb.get(mt).catch(()=>e),t]);n!==e&&(this.iconsRestored=!0,Array.isArray(n)?(options.map.customIcons=n.filter(e=>Ee.safeParse(e).success),this.savedIcons={icons:options.map.customIcons,revision:this.iconsRevision}):options.map.customIcons.length&&this.persist())}reset(){options=this.getDefaultOptions(),this.persist()}restore(){this.iconsRestored=!1;let e={},t=m(localStorage.getItem(`fmg-options`)??``);typeof t==`object`&&t&&(e=t);let n=We(this.getDefaultOptions(),ae()??{});We(n,e),options=we(Te,this.getDefaultOptions(),n,`Options.restore`),this.repairSets(),this.setGraphSize(F.valueOr(`mapWidth`,window.innerWidth),F.valueOr(`mapHeight`,window.innerHeight)),this.persist()}setGraphSize(e,t){let{graph:n}=options.generation;n.width=e??F.valueOr(`mapWidth`,n.width),n.height=t??F.valueOr(`mapHeight`,n.height),n.width>0||(n.width=1280),n.height>0||(n.height=800)}randomize(){let{generation:e}=options,{graph:t,cultures:n,states:r,provinces:i,religions:o,burgs:s}=e;t.density=F.rolls(`points`)?4:F.valueOr(`points`,t.density),e.resolveDepressionsSteps=F.valueOr(`resolveDepressionsSteps`,e.resolveDepressionsSteps),e.lakeElevationLimit=F.valueOr(`lakeElevationLimit`,e.lakeElevationLimit),e.geography={mapSize:F.valueOr(`mapSize`,null),latitude:F.valueOr(`latitude`,null),longitude:F.valueOr(`longitude`,null)},e.template=F.rolls(`template`)?this.randomTemplate():F.valueOr(`template`,e.template),r.limit=F.rolls(`statesNumber`)?c(18,5,2,30):F.valueOr(`statesNumber`,r.limit),i.ratio=F.rolls(`provincesRatio`)?c(20,10,20,100):F.valueOr(`provincesRatio`,i.ratio),s.limit=F.rolls(`manors`)?ke:F.valueOr(`manors`,s.limit),o.limit=F.rolls(`religionsNumber`)?c(6,3,2,10):F.valueOr(`religionsNumber`,o.limit);let l=F.rolls(`sizeVariety`)?c(4,2,0,10,1):F.valueOr(`sizeVariety`,r.sizeVariety),u=F.rolls(`growthRate`)?b(1+Math.random(),1):F.valueOr(`growthRate`,r.growthRate);r.sizeVariety=n.sizeVariety=l,r.growthRate=n.growthRate=u,n.limit=F.rolls(`cultures`)?c(12,3,5,30):F.valueOr(`cultures`,n.limit),n.set=F.rolls(`culturesSet`)?this.randomCultureSet():F.valueOr(`culturesSet`,n.set),this.capCultures();let d=options.map,f=this.getDefaultOptions().map;f.seed=d.seed,f.style=d.style,f.burgs.groups=d.burgs.groups,f.labels.groups=d.labels.groups,f.military.units=d.military.units,f.transports=d.transports,f.customIcons=d.customIcons,f.coastline=d.coastline,f.relief=d.relief,f.graph={width:t.width,height:t.height,points:Oe(t.density)},f.cultures.set=n.set,options.map=f,this.repairSets();let{climate:p,units:m,lore:h}=f,{temperature:g}=p;g.equator=F.rolls(`temperatureEquator`)?c(25,7,20,35,0):F.valueOr(`temperatureEquator`,g.equator),g.northPole=F.rolls(`temperatureNorthPole`)?c(-25,7,-40,10,0):F.valueOr(`temperatureNorthPole`,g.northPole),g.southPole=F.rolls(`temperatureSouthPole`)?c(-15,7,-40,10,0):F.valueOr(`temperatureSouthPole`,g.southPole),p.precipitation=F.rolls(`prec`)?c(100,40,5,500):F.valueOr(`prec`,p.precipitation),m.distance.scale=F.rolls(`distanceScale`)?c(3,1,1,5):F.valueOr(`distanceScale`,m.distance.scale),h.calendar.year=F.rolls(`year`)?a(100,2e3):F.valueOr(`year`,h.calendar.year),F.rolls(`era`)?(h.calendar.era=Ue.getEra(),h.calendar.eraShort=Ue.getEraShort(h.calendar.era)):(h.calendar.era=F.valueOr(`era`,h.calendar.era),h.calendar.eraShort=F.valueOr(`eraShort`,h.calendar.eraShort)),h.name=F.rolls(`mapName`)?Ue.getMapName():F.valueOr(`mapName`,h.name),m.distance.unit=F.valueOr(`distanceUnit`,m.distance.unit),m.area.unit=F.valueOr(`areaUnit`,m.area.unit),m.height.unit=F.valueOr(`heightUnit`,m.height.unit),m.height.exponent=F.valueOr(`heightExponent`,m.height.exponent),m.temperature.unit=F.valueOr(`temperatureScale`,m.temperature.unit),m.population.scale=F.valueOr(`populationRate`,m.population.scale),m.population.urbanization.rate=F.valueOr(`urbanization`,m.population.urbanization.rate),m.population.urbanization.density=F.valueOr(`urbanDensity`,m.population.urbanization.density)}capCultures(){let{cultures:e}=options.generation,t=Fe[e.set]?.max;t&&e.limit>t&&(e.limit=t)}randomTemplate(){let e={};for(let[t,n]of Object.entries(Ie))e[t]=n.probability||0;return f(e)}randomCultureSet(){return f(Object.fromEntries(Object.entries(Fe).map(([e,t])=>[e,t.probability])))}applyLoaded(e){let t=e?.geography?.coordinates;options.map=we(De,this.getDefaultOptions().map,e,`Options.applyLoaded`),De.shape.geography.shape.coordinates.safeParse(t).success||Le.calculate(),this.repairSets(),F.rolls(`mapWidth`)&&(options.generation.graph.width=options.map.graph.width),F.rolls(`mapHeight`)&&(options.generation.graph.height=options.map.graph.height)}repairSets(){let{map:e}=options,t=this.getDefaultOptions().map;e.burgs.groups.length||(e.burgs.groups=t.burgs.groups),e.labels.groups.length||(e.labels.groups=t.labels.groups),e.military.units.length||(e.military.units=t.military.units),e.transports.length||(e.transports=t.transports),z.ensureDefaultGroup(e.burgs.groups),He.restoreMissingTypes(e.labels.groups)}};globalThis.Options=bt,globalThis.options=bt.getDefaultOptions();var B={quality:{shapeRendering:`geometricPrecision`,stateHalos:!0,viewportRedraw:`continuous`},balance:{shapeRendering:`optimizeSpeed`,stateHalos:!1,viewportRedraw:`continuous`},speed:{shapeRendering:`optimizeSpeed`,stateHalos:!1,viewportRedraw:`settled`}};function xt(e){let t=Object.keys(e);for(let[n,r]of Object.entries(B))if(t.every(t=>r[t]===e[t]))return n;return`custom`}var St=new Set;function Ct(e){return St.add(e),()=>St.delete(e)}function wt(e){Object.hasOwn(B,e)&&Et(t=>t.app.performance={...B[e]})}function Tt(e,t){Et(n=>n.app.performance[e]=t)}function Et(e){Options.set(e),Dt();for(let e of St)e()}function Dt(){let{shapeRendering:e,stateHalos:n}=options.app.performance;t(`viewbox`)?.setAttribute(`shape-rendering`,e);let r=t(`statesHalo`);r&&(r.style.display=n?``:`none`,n&&pack.cells&&!r.childElementCount&&w.draw(`states`))}function Ot(e){if(e)options.map.seed=e;else{let e=!mapHistory.length,t=new URL(window.location.href).searchParams.get(`seed`);if(e&&t){let e=new URL(window.location.href).searchParams.get(`from`)===`MFCG`&&t.length===13;options.map.seed=e?t.slice(0,-4):t}else options.map.seed=d()}Math.random=aleaPRNG(options.map.seed)}function kt(){let e=u(`seedInput`).value;if(e===options.map.seed){A(`The current map already has this seed`,!1,`error`);return}regeneratePrompt({seed:e})}function At(){L({title:`Seed history`,message:`<ol style="margin: 0; padding-left: 1.5em">${mapHistory.map((e,t)=>{let n=new Date(e.created).toLocaleTimeString(),r=`<i data-tip="Click to generate a map with this seed" onclick="restoreSeed(${t})" class="icon-history optionsSeedRestore"></i>`;return`<li>Seed: ${e.seed} ${r}. Size: ${e.width}x${e.height}. Template: ${e.template}. Created: ${n}</li>`}).join(``)}</ol>`})}function jt(e){let{seed:t,width:n,height:r,template:i}=mapHistory[e];Options.set(e=>e.generation.template=i),F.has(`template`)&&F.clear(`template`),regeneratePrompt({seed:t,width:n,height:r})}window.restoreSeed=jt,window.generateMapWithSeed=kt,window.showSeedHistoryDialog=At;var V={"africa-centric":{id:0,name:`Africa Centric`},arabia:{id:1,name:`Arabia`},atlantics:{id:2,name:`Atlantics`},britain:{id:3,name:`Britain`},caribbean:{id:4,name:`Caribbean`},"east-asia":{id:5,name:`East Asia`},eurasia:{id:6,name:`Eurasia`},europe:{id:7,name:`Europe`},"europe-accented":{id:8,name:`Europe Accented`},"europe-and-central-asia":{id:9,name:`Europe and Central Asia`},"europe-central":{id:10,name:`Europe Central`},"europe-north":{id:11,name:`Europe North`},greenland:{id:12,name:`Greenland`},hellenica:{id:13,name:`Hellenica`},iceland:{id:14,name:`Iceland`},"indian-ocean":{id:15,name:`Indian Ocean`},"mediterranean-sea":{id:16,name:`Mediterranean Sea`},"middle-east":{id:17,name:`Middle East`},"north-america":{id:18,name:`North America`},"us-centric":{id:19,name:`US-centric`},"us-mainland":{id:20,name:`US Mainland`},world:{id:21,name:`World`},"world-from-pacific":{id:22,name:`World from Pacific`}};window.precreatedHeightmaps=V;var H={political:[`borders`,`burgIcons`,`ice`,`labels`,`lakes`,`rivers`,`routes`,`scaleBar`,`states`,`vignette`],cultural:[`borders`,`burgIcons`,`cultures`,`labels`,`lakes`,`rivers`,`routes`,`scaleBar`,`vignette`],religions:[`borders`,`burgIcons`,`labels`,`lakes`,`religions`,`rivers`,`routes`,`scaleBar`,`vignette`],provinces:[`borders`,`burgIcons`,`labels`,`lakes`,`provinces`,`rivers`,`scaleBar`,`vignette`],biomes:[`biomes`,`ice`,`lakes`,`rivers`,`scaleBar`,`vignette`],heightmap:[`heightmap`,`lakes`,`rivers`,`vignette`],physical:[`coordinates`,`heightmap`,`ice`,`lakes`,`rivers`,`scaleBar`,`vignette`],poi:[`borders`,`burgIcons`,`heightmap`,`ice`,`lakes`,`markers`,`rivers`,`routes`,`scaleBar`,`vignette`],goods:[`borders`,`burgIcons`,`cells`,`goods`,`lakes`,`markets`,`rivers`,`routes`,`scaleBar`,`trade`,`vignette`],trade:[`borders`,`burgIcons`,`lakes`,`rivers`,`routes`,`scaleBar`,`states`,`trade`,`vignette`],military:[`borders`,`burgIcons`,`labels`,`lakes`,`military`,`rivers`,`routes`,`scaleBar`,`states`,`vignette`],emblems:[`borders`,`burgIcons`,`emblems`,`ice`,`lakes`,`rivers`,`routes`,`scaleBar`,`states`,`vignette`],landmass:[`scaleBar`]},U={...H};Mt();function Mt(){let e=JSON.parse(localStorage.getItem(`presets`)||`null`);if(e)for(let t in e)e[t].every(e=>w.has(e))&&(U[t]=e[t],H[t]||u(`layersPreset`).add(new Option(t,t)))}function Nt(){let e=localStorage.getItem(`preset`)||u(`layersPreset`).value,t=e in U?e:`political`;It(t),w.restore({order:w.state.order,active:U[t]})}function Pt(e){let t=e.get(`layers`);if(t){let e=t.split(`,`).map(e=>e.trim()).filter(e=>w.has(e));e.length?w.set(e):ERROR&&console.error(`URL param layers="${t}" has no valid layer ids`);return}let n=e.get(`preset`),r=n&&Ft(n);r?(It(r),w.set(U[r])):n&&ERROR&&console.error(`URL param preset="${n}" is invalid`)}function Ft(e){let t=e.toLowerCase().trim(),n=Object.keys(U).find(e=>e.toLowerCase()===t);if(n)return n;let r=Array.from(u(`layersPreset`).options).find(e=>e.text.toLowerCase()===t);return r?.value&&r.value in U?r.value:void 0}function It(e){u(`layersPreset`).value=e,localStorage.setItem(`preset`,e),u(`removePresetButton`).style.display=H[e]?`none`:`inline-block`,u(`savePresetButton`).style.display=`none`}function Lt(e){e in U&&(It(e),w.set(U[e]))}function Rt(){Je({title:`Save layer preset`,message:`<label>Preset name: <input id="layersPresetName" type="text" autocomplete="off" /></label>`,confirm:`Save`,onConfirm:()=>{let e=u(`layersPresetName`).value.trim();e&&(U[e]=w.all.filter(e=>_e.has(e.id)&&w.isOn(e.id)).map(e=>e.id),u(`layersPreset`).add(new Option(e,e,!1,!0)),localStorage.setItem(`presets`,JSON.stringify(U)),localStorage.setItem(`preset`,e),u(`removePresetButton`).style.display=`inline-block`,u(`savePresetButton`).style.display=`none`)}}),u(`layersPresetName`).focus()}function zt(){let e=u(`layersPreset`).value;delete U[e],u(`layersPreset`).options.remove(Array.from(u(`layersPreset`).options).findIndex(t=>t.value===e)),u(`layersPreset`).value=`custom`,u(`removePresetButton`).style.display=`none`,u(`savePresetButton`).style.display=`inline-block`,localStorage.setItem(`presets`,JSON.stringify(U)),localStorage.removeItem(`preset`)}function Bt(){let e=e=>[...e].sort().join(`,`),t=e(w.all.filter(e=>_e.has(e.id)&&w.isOn(e.id)).map(e=>e.id)),n=Object.keys(U).find(n=>e(U[n])===t);u(`layersPreset`).value=n??`custom`,u(`removePresetButton`).style.display=n&&!H[n]?`inline-block`:`none`,u(`savePresetButton`).style.display=n?`none`:`inline-block`}u(`layersPreset`).addEventListener(`change`,e=>{Lt(e.target.value)}),u(`savePresetButton`).addEventListener(`click`,Rt),u(`removePresetButton`).addEventListener(`click`,zt),w.subscribe(Bt),window.applyLayersPreset=Nt,window.applyURLLayers=Pt;var W=(e,t,n)=>l(`#${e}`).transition().duration(n).style(`opacity`,String(t));function Vt(){W(`loading`,1,200),W(`optionsContainer`,0,100),W(`tooltip`,0,200)}function Ht(){W(`loading`,0,3e3),W(`optionsContainer`,1,2e3),W(`tooltip`,1,3e3)}var Ut={serialize:()=>``,restore:()=>{}};function Wt(e){Ut=e}function Gt(){try{return Ut.serialize()??``}catch(e){return ERROR&&console.error(e),``}}function Kt(e){if(e!==void 0)try{Ut.restore(e)}catch(e){ERROR&&console.error(e)}}globalThis.ModSlot={register:Wt};var G,K=0,qt=!1;window.addEventListener(`map:generated`,()=>{G=void 0,K++});async function Jt(e,t,n=!1){if(qt)return{type:`cancelled`};qt=!0;try{return await Yt(e,t,n)}finally{qt=!1}}async function Yt(e,t,r){if(typeof window.showSaveFilePicker!=`function`)return n(e(),t),{type:`downloaded-fallback`};let i=K,a=r?void 0:G;if(!a)try{a=await window.showSaveFilePicker({suggestedName:t,types:[{description:`Fantasy Map Generator map`,accept:{"application/octet-stream":[`.map`]}}]})}catch(e){if(e?.name===`AbortError`)return{type:`cancelled`};throw e}if(i!==K)return{type:`cancelled`};let o;try{if(o=await a.createWritable(),i!==K)return await o.abort(),{type:`cancelled`};await o.write(e()),await o.close()}catch(e){throw G===a&&(G=void 0),await o?.abort().catch(()=>{}),e}return i===K&&(G=a),{type:`saved`,filename:a.name}}var Xt=()=>$t(()=>tn(en(),!0)),Zt=(e=!1)=>$t(()=>nn(e)),Qt=()=>$t(()=>an(en(),`${p()}.map`));async function $t(e){if(customization)return A(`Map cannot be saved in EDIT mode, please complete the edit and retry`,!1,`error`);I(`#alert`);try{await e()}catch(t){ERROR&&console.error(t);let n=t instanceof Error?t:Error(String(t));alertMessage.innerHTML=`An error occurred while saving the map. If the issue persists, please copy the message below and report it on ${g(`https://github.com/Azgaar/Fantasy-Map-Generator/issues`,`GitHub`)}. <p id="errorBox">${te(n)}</p>`,$(`#alert`).dialog({resizable:!1,title:`Saving error`,width:`28em`,buttons:{Retry:function(){$(this).dialog(`close`),$t(e)},Close:function(){$(this).dialog(`close`)}},position:{my:`center`,at:`center`,of:`svg`}})}}function en(){let e=new Date,t=[$e,`File can be loaded in azgaar.github.io/Fantasy-Map-Generator`,`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`,options.map.seed,options.map.graph.width,options.map.graph.height,mapHistory.at(-1)?.created??Date.now()].join(`|`),n=JSON.stringify(options.map),r=JSON.stringify(pack.measurers??[]),i=JSON.stringify(pack.journeys??[]),a=JSON.stringify(Qe(u(`map`),Ze.list().map(e=>e.note))),o=JSON.stringify(w.state),s=JSON.stringify(Xe.state),c=Gt(),l=u(`map`).cloneNode(!0);l.setAttribute(`width`,String(options.map.graph.width)),l.setAttribute(`height`,String(options.map.graph.height)),l.querySelector(`#viewbox`)?.removeAttribute(`transform`);let d=l.querySelector(`#terrain`);d&&(d.innerHTML=``);for(let e of Array.from(l.querySelectorAll(`#emblems > g`)))e.innerHTML=``;let f=l.querySelector(`#ruler`);f&&(f.innerHTML=``);let p=l.querySelector(`#tradeAnimation`);p&&(p.innerHTML=``),l.querySelector(`#journeyOverlay`)?.remove(),l.querySelector(`#journeyTravel`)?.remove();let m=new XMLSerializer().serializeToString(l),{spacing:h,cellsX:g,cellsY:_,boundary:v,points:y,features:ee}=grid,te=JSON.stringify({spacing:h,cellsX:g,cellsY:_,boundary:v,points:y,features:ee}),x=JSON.stringify(pack.features),ne=JSON.stringify(pack.biomes),S=JSON.stringify(pack.cultures),re=JSON.stringify(pack.states),C=JSON.stringify(pack.burgs),ie=JSON.stringify(pack.religions),T=JSON.stringify(pack.provinces),E=JSON.stringify(pack.rivers),D=JSON.stringify(pack.relief||[]),O=JSON.stringify(pack.markers),ae=JSON.stringify(pack.cells.routes),oe=JSON.stringify(pack.routes),k=JSON.stringify(pack.zones),se=JSON.stringify(pack.ice),ce=JSON.stringify(pack.goods),le=JSON.stringify(pack.markets||[]),ue=JSON.stringify(pack.deals||[]),A=JSON.stringify(pack.addedLabels||[]),de=JSON.stringify(styles),fe=Names.getNameBases(),j=Names.nameBases.map((e,t)=>{let n=fe[t]&&fe[t].b===e.b?``:e.b;return`${e.name}|${e.min}|${e.max}|${e.d}|${e.m}|${n}`}).join(`/`),pe=Array.from(pack.cells.pop).map(e=>b(e,4));return[t,n,``,ne,``,m,te,grid.cells.h,grid.cells.prec,grid.cells.f,grid.cells.t,grid.cells.temp,x,S,re,C,pack.cells.biome,pack.cells.burg,pack.cells.conf,pack.cells.culture,pack.cells.fl,pe,pack.cells.r,[],pack.cells.s,pack.cells.state,pack.cells.religion,pack.cells.province,[],ie,T,j,E,``,a,O,ae,oe,k,se,pack.cells.good,ce,le,ue,pack.cells.market,``,r,A,de,D,o,s,i,...c?[c]:[]].join(`\r
`)}async function tn(e,t=!1){let n=new Blob([e],{type:`text/plain`});await ldb.set(`lastMap`,n),t&&A(`Map is saved to the browser storage`,!1,`success`)}async function nn(e){rn(await Jt(en,`${p()}.map`,e))}function rn(e){if(e.type===`cancelled`)return;if(e.type===`saved`){A(`Map is saved to "${i(e.filename)}"`,!0,`success`,8e3);return}let t=se(`Map`);if(!ue()){let e=`savePickerFallbackNoticeShown`;try{localStorage.getItem(e)||(t+=`. A save-location picker is unavailable here; your browser's download settings control the location.`,localStorage.setItem(e,`true`))}catch{}}A(t,!0,`success`,12e3)}async function an(e,t){await q.Cloud.save(t,e),A(`Map is saved to your Dropbox`,!0,`success`,8e3)}var on={toStorage:Xt,toMachine:Zt,toDropbox:Qt,prepareMapData:en,writeToStorage:tn},sn=6e4;function cn(){let e=Date.now();async function t(){let t=options.app.autosave.interval;if(t&&!((Date.now()-e)/sn<t)){if(customization)return A(`Autosave: map cannot be saved in edit mode`,!1,`warn`,2e3);try{A(`Autosave: saving map...`,!1,`warn`,3e3),await q.Save.writeToStorage(await q.Save.prepareMapData()),A(`Autosave: map is saved`,!1,`success`,2e3),e=Date.now()}catch(e){ERROR&&console.error(e),A(`Autosave failed: ${e?.message||`Unknown error`}`,!0,`error`,4e3)}}}setInterval(t,sn/2),dn()}var ln,un=!1;function dn(){if(!options.app.autosave.remind)return;let e=[`Please don't forget to save the project to desktop from time to time`,`Please remember to save the map to your desktop`,`Saving will ensure your data won't be lost in case of issues`,`Safety is number one priority. Please save the map`,`Don't forget to save your map on a regular basis!`,`Just a gentle reminder for you to save the map`,`Please don't forget to save your progress (saving to desktop is the best option)`,`Don't want to get reminded about need to save? Press CTRL+Q`];ln=setInterval(()=>{customization||A(r(e),!0,`warn`,2500)},15*sn),un=!0}function fn(){un?(A(`Save reminder is turned off. Press CTRL+Q again to re-initiate`,!0,`warn`,2e3),clearInterval(ln),Options.set(e=>e.app.autosave.remind=!1),un=!1):(A(`Save reminder is turned on. Press CTRL+Q to turn off`,!0,`warn`,2e3),Options.set(e=>e.app.autosave.remind=!0),dn())}window.initiateAutosave=cn,window.toggleSaveReminder=fn;var q=he({AppOffer:()=>k(()=>import(`./app-offer-qxKOydOY.js`).then(e=>e.AppOffer),__vite__mapDeps([0,1])),Cloud:()=>k(()=>import(`./cloud-8HdaoU0o.js`).then(e=>e.CloudStorage),__vite__mapDeps([2,3,4,1])),ExportJson:()=>k(()=>import(`./export-json-CS8SOLF2.js`).then(e=>e.ExportJson),__vite__mapDeps([5,3,6,7,4,1,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])),ExportMap:()=>k(()=>import(`./export-LKFjloQL.js`).then(e=>e.t).then(e=>e.ExportMap),__vite__mapDeps([23,14,3,24,25,26,27,11,12,4,1,13,15,28,7,29,30,31])),Load:()=>k(()=>import(`./load-NQJL3YuV.js`).then(e=>e.Load),__vite__mapDeps([32,33,14,25,3,24,26,27,11,12,4,1,13,15,28,7,29,30,19,20,21,34,35,36,37,16,6,38,22,39,40,41,10,17,18,42,43,44,45,46,47,48,49,50,51,8,9,31])),Save:ge(on),UiTour:()=>k(()=>import(`./ui-tour-D7aKFVTu.js`).then(e=>e.UiTour),__vite__mapDeps([52,33,14,25,3,24,26,27,11,12,4,1,13,15,28,7,29,30,19,20,21,34,35,36,37,16,6,38,22,39,40,41,10,17,18,42,43,44,45,46,47,48,49,50,51,8,9,53]))});window.Services=q;function pn(){w.init(),window.addEventListener(`resize`,mn),window.addEventListener(`vite:preloadError`,_n),document.addEventListener(`touchstart`,gn,{capture:!0,passive:!0}),vn(),yn(),hn(),!le()&&!ue()&&(window.onbeforeunload=()=>`Are you sure you want to navigate away?`),ue()&&xn()}function mn(){Options.set(e=>{F.rolls(`mapWidth`)&&window.innerWidth>0&&(e.generation.graph.width=window.innerWidth),F.rolls(`mapHeight`)&&window.innerHeight>0&&(e.generation.graph.height=window.innerHeight)}),R()}function hn(){let e=t(`assistantBubble`);e&&(e.addEventListener(`click`,()=>M.Assistant.toggle()),e.addEventListener(`mouseover`,de))}function gn(e){e.target?.closest?.(`.ui-dialog-titlebar button`)&&e.stopPropagation()}function _n(){if(!navigator.onLine){L({title:`You are offline`,message:`This part of the app was not downloaded before the connection was lost. Reconnect and try again`});return}Je({title:`New version released`,message:`This part of the app failed to load because a new version was released while the page was open.<br />Reload the page to get the new version. If you have unsaved changes, save the map first`,confirm:`Reload`,cancel:`Not now`,onConfirm:()=>{window.onbeforeunload=null,location.reload()}})}function vn(){let e=()=>u(`mapOverlay`);document.addEventListener(`dragover`,t=>{t.stopPropagation(),t.preventDefault(),e().style.display=null}),document.addEventListener(`dragleave`,()=>{e().style.display=`none`}),document.addEventListener(`drop`,t=>{t.stopPropagation(),t.preventDefault();let n=e();n.style.display=`none`;let r=t.dataTransfer?.items;if(r?.length!==1)return;let i=r[0].getAsFile();if(i){if(!i.name.endsWith(`.map`)&&!i.name.endsWith(`.gz`))return L({title:`Invalid file format`,message:`Please upload a map file (<i>.map</i> or <i>.gz</i> formats) you have previously downloaded`});n.style.display=null,n.innerHTML=`Uploading<span>.</span><span>.</span><span>.</span>`,I(),q.Load.uploadMap(i,()=>{n.style.display=`none`,n.innerHTML=`Drop a map file to open`})}})}function yn(){let e=`fmg-tour-prompt-count`,n=Number.parseInt(localStorage.getItem(e)||`0`,10);if(n>=3)return;let r=t(`tourPromptButton`);r&&(r.style.display=`flex`,r.addEventListener(`click`,()=>{q.UiTour.start(),localStorage.setItem(e,`3`)}),localStorage.setItem(e,String(n+1)))}function bn(){return location.hostname?!1:(L({title:`Loading error`,width:`28em`,message:`Fantasy Map Generator cannot run serverless. Follow the <a href="https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Run-FMG-locally" target="_blank">instructions</a> on how you can easily run a local web-server`}),!0)}function xn(){t(`getAppButton`)?.remove(),t(`saveToDropboxButton`)?.remove(),t(`loadFromDropbox`)?.remove()}var Sn=`fmg-help-token`,Cn=`fmg-help-signin-pending`,wn=`#token=`,Tn=()=>localStorage.getItem(Sn),En=e=>localStorage.setItem(Sn,e),Dn=()=>localStorage.removeItem(Sn);function On(){if(!location.hash.startsWith(wn))return;let e=sessionStorage.getItem(Cn)===`1`;sessionStorage.removeItem(Cn),e&&En(location.hash.slice(7)),history.replaceState(null,``,location.pathname+location.search)}function kn(e){sessionStorage.setItem(Cn,`1`),location.assign(e)}async function An(){On(),ce(),pn(),Ke(),Options.restore(),await Options.restoreIcons(),nt(options.map.military.units),ir(),Pr(),pe(options.map.graph.width,options.map.graph.height),tt(),bn()||(Ht(),await zn()),cn()}async function jn(e){try{let{seed:t,graph:n,width:r,height:i,points:a}=e||{};Options.setGraphSize(r,i),Ot(t),Options.randomize(),E.syncCustom(),n&&a!==void 0&&(options.map.graph.points=a),ot(),await Re.run({graph:n}),Options.persist(),ir(),Fn(),rt(),ye()}catch(e){ERROR&&console.error(e),fe(),u(`alertMessage`).innerHTML=`An error has occurred on map generation. Please retry.
      <br />If error is critical, clear the stored data and try again.
      <p id="errorBox">${te(e)}</p>`,$(`#alert`).dialog({resizable:!1,title:`Generation error`,width:`32em`,buttons:{"Cleanup data":()=>et(),Regenerate:function(){Mn(`generation error`),$(this).dialog(`close`)},Ignore:function(){$(this).dialog(`close`)}},position:{my:`center`,at:`center`,of:`svg`}})}}var Mn=h(async e=>{let n=typeof e==`string`?e:`user request`;WARN&&console.warn(`Generate new random map: ${n}`);let r=Oe(options.generation.graph.density)>1e4;r&&Vt(),I(`#worldConfigurator, #options3d`),customization=0,xe(1e3),ze(),await jn(typeof e==`string`?void 0:e),w.drawAll(),Ye()&&M.View3d.redraw(),t(`worldConfigurator`)?.offsetParent&&M.WorldConfigurator.open(),R(),r&&Ht(),fe()},250);function Nn(e){if(customization){A(`New map cannot be generated when edit mode is active, please exit the mode and retry`,!1,`error`);return}let t=mapHistory.at(-1);if((t?(Date.now()-t.registeredAt)/6e4:0)<1){Mn(e);return}Je({title:`Generate new map`,message:`Are you sure you want to generate a new map?<br />All unsaved changes made to the current map will be lost`,confirm:`Generate`,onConfirm:()=>{I(),Mn(e)}})}globalThis.mapHistory=[];var Pn=100;function Fn(e=Date.now()){mapHistory.push({seed:options.map.seed,width:options.map.graph.width,height:options.map.graph.height,template:options.generation.template,created:e,registeredAt:Date.now()}),mapHistory.length>Pn&&mapHistory.splice(0,mapHistory.length-Pn),window.dispatchEvent(new CustomEvent(`map:generated`,{detail:{seed:options.map.seed,mapId:e}}))}window.regeneratePrompt=Nn,window.regenerateMap=Mn;function In(e){let t=t=>{let n=Number(e.get(t));return Number.isFinite(n)&&n>0?n:void 0};return{width:t(`width`),height:t(`height`)}}var Ln=/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/,Rn=()=>new URL(window.location.href).searchParams;async function zn(){let e=Rn(),t=In(e),n=e.get(`maplink`);if(n){if(WARN&&console.warn(`Load map from URL`),Ln.test(n)){setTimeout(()=>q.Load.loadMapFromURL(n,!0),1e3);return}q.Load.showUploadErrorMessage(`Map link is not a valid URL`,n)}if(e.get(`seed`)){WARN&&console.warn(`Generate map for seed`,e.get(`seed`)),await Bn(t);return}if(options.app.onLoad===`lastSaved`)try{let e=await ldb.get(`lastMap`);if(e){WARN&&console.warn(`Loading last stored map`),q.Load.uploadMap(e);return}}catch(e){ERROR&&console.error(e)}WARN&&console.warn(`Generate random map`),Bn(t)}async function Bn(e){await Controllers.StylePresetsEditor.applyOnLoad(),await jn(e),Nt(),w.drawAll(),R(),Vn(),it()}function Vn(){let e=Rn();if(Pt(e),e.get(`from`)===`MFCG`&&document.referrer){let t=e.get(`seed`)??``;if(t.length===13)e.set(`burg`,t.slice(-4));else{Hn(e);return}}let t=e.get(`scale`),n=e.get(`cell`),r=e.get(`burg`);if(!t&&!n&&!r)return;let i=+(t??0)||8;if(n){let[e,t]=pack.cells.p[+n];N(e,t,i,1600);return}if(r){let e=Number.isNaN(+r)?pack.burgs.find(e=>e.name===r):pack.burgs[+r];e&&N(e.x,e.y,i,1600);return}N(+(e.get(`x`)??0)||options.map.graph.width/2,+(e.get(`y`)??0)||options.map.graph.height/2,i,1600)}function Hn(e){let{cells:t}=pack,n=pack.burgs;if(n.length<2)return void(ERROR&&console.error(`Cannot select a burg for MFCG`));let r=+(e.get(`size`)??0),i=+(e.get(`coast`)??0),a=+(e.get(`port`)??0),o=+(e.get(`river`)??0),s=(e,r,i)=>r&&i?n.filter(e=>e.port&&t.r[e.cell]):!r&&e&&i?n.filter(e=>!e.port&&t.t[e.cell]===1&&t.r[e.cell]):!e&&!i?n.filter(e=>t.t[e.cell]!==1&&!t.r[e.cell]):!e&&i?n.filter(e=>t.t[e.cell]!==1&&t.r[e.cell]):e&&i?n.filter(e=>t.t[e.cell]===1&&t.r[e.cell]):[],c=s(i,a,o);c.length||(c=s(i,!a,!o)),c.length||(c=s(!i,0,!o)),c.length||(c=[n[1]]);let u=e=>Math.abs((e.population??0)-r),d=ie(c,(e,t)=>u(e)-u(t)),f=d===void 0?0:c[d].i;if(!f)return void(ERROR&&console.error(`Cannot select a burg for MFCG`));let p=n[f];for(let[e,t]of new URL(document.referrer).searchParams)e===`name`?p.name=t:e===`size`?p.population=+t:e===`seed`?p.MFCG=t:e===`shantytown`?p.shanty=+t:p[e]=+t;let m=e.get(`name`);m&&m!==`null`&&(p.name=m);let h=l(`#labels [data-label-type='burg'][data-id='${f}']`);h.empty()||h.text(p.name??``).classed(`drag`,!0).on(`mouseover`,function(){l(this).classed(`drag`,!1),h.on(`mouseover`,null)}),N(p.x,p.y,8,1600),A(`Here stands the glorious city of ${p.name}`,!0,`success`,15e3)}function Un(){let e=!document.querySelectorAll(`i.icon-lock`).length,t=`?seed=${u(`seedInput`).value}&width=${options.map.graph.width}&height=${options.map.graph.height}${e?`&options=default`:``}`;navigator.clipboard.writeText(location.host+location.pathname+t).then(()=>A(`Map URL is copied to clipboard`,!1,`success`,3e3)).catch(e=>A(`Could not copy URL: ${e}`,!1,`error`,5e3))}window.focusOn=Vn,window.generateMapOnLoad=Bn,window.copyMapURL=Un;var J=`performanceSettings`,Wn=B.balance,Gn=[{key:`shapeRendering`,label:`Shape rendering`,tip:`SVG shape-rendering hint for the map. Crisp edges drops anti-aliasing. Chromium-based browsers rasterize on the GPU and ignore the hint for speed purposes, so it makes no difference there`,choices:[{value:`geometricPrecision`,label:`Geometric precision`},{value:`auto`,label:`Auto`},{value:`optimizeSpeed`,label:`Optimize speed`},{value:`crispEdges`,label:`Crisp edges`}]},{key:`stateHalos`,label:`State halos`,tip:`Blurred glow along state borders. It is an SVG blur filter, which is costly on big maps`,choices:[{value:`true`,label:`Shown`},{value:`false`,label:`Hidden`}]},{key:`viewportRedraw`,label:`Redraw on zoom`,tip:`When labels, icons and relief are redrawn and text re-sized during a zoom or pan. 'After zoom' does it once per gesture: faster on big maps, but new content appears all at once`,choices:[{value:`continuous`,label:`While zooming`},{value:`settled`,label:`After zoom`}]}],Kn={quality:`Quality`,balance:`Balance`,speed:`Speed`,custom:`Custom`};function qn(){I(`#${J}, .stable`),Jn();let e=Ct(Xn);$(`#${J}`).dialog({title:`Performance Settings`,resizable:!1,position:{my:`right top`,at:`right-10 top+10`,of:`svg`},close:()=>{e(),qe(J)}})}function Jn(){qe(J),u(`dialogs`).insertAdjacentHTML(`beforeend`,Qn());for(let{key:e}of Gn){let t=u(`${J}_${e}`);t.addEventListener(`change`,()=>Yn(e,t.value)),u(`${J}_${e}Reset`).addEventListener(`click`,()=>Yn(e,String(Wn[e])))}}function Yn(e,t){e===`stateHalos`?Tt(e,t===`true`):Tt(e,t)}function Xn(){let e=options.app.performance;for(let{key:t}of Gn)u(`${J}_${t}`).value=String(e[t]);u(`${J}Preset`).textContent=Zn()}var Zn=()=>Kn[xt(options.app.performance)];function Qn(){let e=options.app.performance,t=Gn.map(({key:t,label:n,tip:r,choices:i})=>{let a=String(e[t]);return`
      <tr data-tip="${r}">
        <td>${n}</td>
        <td><select id="${J}_${t}" style="width: 100%">${i.map(e=>`<option value="${e.value}" ${e.value===a?`selected`:``}>${e.label}</option>`).join(``)}</select></td>
        <td>
          <button id="${J}_${t}Reset" data-tip="Reset to the Balance preset value"
            style="font-size: .85em; padding: 1px 5px; margin-left: .3em">↺</button>
        </td>
      </tr>`}).join(``);return`
    <div id="${J}" class="dialog" style="display: none">
      <p data-tip="The preset on the Options tab these settings amount to" style="margin: 0 0 .5em">
        Preset: <b id="${J}Preset">${Zn()}</b>
      </p>
      <table style="border-collapse: collapse; width: 100%">
        <tbody>${t}</tbody>
      </table>
    </div>`}var $n={open:qn},Y={mapWidth:{read:e=>e.generation.graph.width,update:dr,pin:`mapWidth`,event:`change`},mapHeight:{read:e=>e.generation.graph.height,update:dr,pin:`mapHeight`,event:`change`},seed:{read:e=>e.map.seed,update:kt,event:`change`},points:X({read:e=>e.generation.graph.density,write:(e,t)=>e.generation.graph.density=t,parse:Number,pin:`points`,effect:or}),template:X({read:e=>e.generation.template,write:(e,t)=>e.generation.template=t,parse:String,pin:`template`}),resolveDepressionsSteps:X({read:e=>e.generation.resolveDepressionsSteps,write:(e,t)=>e.generation.resolveDepressionsSteps=t,parse:Number,pin:`resolveDepressionsSteps`}),lakeElevationLimit:X({read:e=>e.generation.lakeElevationLimit,write:(e,t)=>e.generation.lakeElevationLimit=t,parse:Number,pin:`lakeElevationLimit`,effect:()=>customization===1&&M.HeightmapEditor.redrawDrainage()}),cultures:X({read:e=>e.generation.cultures.limit,write:(e,t)=>e.generation.cultures.limit=t,parse:Number,pin:`cultures`,effect:sr}),culturesSet:X({read:e=>e.generation.cultures.set,write:(e,t)=>{e.generation.cultures.set=t,Options.capCultures()},parse:String,pin:`culturesSet`,effect:sr}),statesNumber:X({read:e=>e.generation.states.limit,write:(e,t)=>e.generation.states.limit=t,parse:Number,pin:`statesNumber`}),provincesRatio:X({read:e=>e.generation.provinces.ratio,write:(e,t)=>e.generation.provinces.ratio=t,parse:Number,pin:`provincesRatio`}),religionsNumber:X({read:e=>e.generation.religions.limit,write:(e,t)=>e.generation.religions.limit=t,parse:Number,pin:`religionsNumber`}),manors:X({read:e=>e.generation.burgs.limit,write:(e,t)=>e.generation.burgs.limit=t,parse:Number,pin:`manors`,effect:ar}),sizeVariety:X({read:e=>e.generation.states.sizeVariety,write:(e,t)=>e.generation.states.sizeVariety=e.generation.cultures.sizeVariety=t,parse:Number,pin:`sizeVariety`}),growthRate:X({read:e=>e.generation.states.growthRate,write:(e,t)=>e.generation.states.growthRate=e.generation.cultures.growthRate=t,parse:Number,pin:`growthRate`}),uiSize:X({read:e=>e.app.ui.size,write:(e,t)=>e.app.ui.size=t,parse:Number,effect:gr}),tooltipSize:X({read:e=>e.app.ui.tooltipSize,write:(e,t)=>e.app.ui.tooltipSize=t,parse:Number,effect:vr}),azgaarAssistant:X({read:e=>e.app.ui.assistant,write:(e,t)=>e.app.ui.assistant=t,parse:e=>e===`hide`?`hide`:`show`,effect:e=>it(e===`show`)}),speakerVoice:X({read:e=>e.app.ui.speakerVoice||null,write:(e,t)=>e.app.ui.speakerVoice=t,parse:String}),emblemShape:X({read:e=>e.app.emblems.shape,write:(e,t)=>e.app.emblems.shape=t,parse:String,effect:hr}),performancePreset:{read:e=>xt(e.app.performance),update:wt},onloadBehavior:X({read:e=>e.app.onLoad,write:(e,t)=>e.app.onLoad=t,parse:e=>e===`lastSaved`?`lastSaved`:`random`}),autosaveInterval:X({read:e=>e.app.autosave.interval,write:(e,t)=>e.app.autosave.interval=t,parse:Number}),viewportWidth:{read:()=>j.width,update:wr,event:`change`},viewportHeight:{read:()=>j.height,update:wr,event:`change`},zoomExtentMin:{read:e=>e.app.zoomExtent.min,update:Cr,event:`change`},zoomExtentMax:{read:e=>e.app.zoomExtent.max,update:Cr,event:`change`},themeHue:{read:e=>v(e.app.ui.themeColor).h,update:xr},themeColor:{read:e=>e.app.ui.themeColor,update:e=>yr(e,options.app.ui.transparency)},transparency:{read:e=>e.app.ui.transparency,update:e=>yr(options.app.ui.themeColor,+e)}};function X(e){let{read:t,write:n,parse:r,pin:i,effect:a}=e;return{read:t,pin:i,update(e){let t=r(e);Options.set(e=>n(e,t)),i&&F.set(i,t),a?.(t)}}}var er=`
  <p data-tip="Settings for the next map. Generate a new map to apply them">
    Map settings (apply to new maps):
  </p>
  <table>
    <tr
      data-tip="Coordinate extent the next map is generated on. It is fixed for the life of that map and cannot be changed later - the Viewport size below is what you see it through. For full-globe maps use aspect ratio 2:1"
    >
      <td>
        <i data-tip="Restore default map size: the window size" id="restoreDefaultMapSize" class="icon-ccw"></i>
      </td>
      <td>Map size</td>
      <td>
        <input id="mapWidthInput" data-option="mapWidth" class="paired" type="number" min="240" value="960" />
        <span>x</span>
        <input id="mapHeightInput" data-option="mapHeight" class="paired" type="number" min="135" value="540" />
        <span>px</span>
      </td>
      <td></td>
    </tr>
    <tr
      data-tip="Map seed number. Press 'Enter' to apply. A seed reproduces the same map only if the map size and the settings are the same"
    >
      <td>
        <i
          data-tip="Show seed history to apply a previous seed"
          id="optionsMapHistory"
          class="icon-hourglass-1"
        ></i>
      </td>
      <td>Map seed</td>
      <td>
        <input id="seedInput" data-option="seed" class="long" type="number" min="1" max="999999999" step="1" />
      </td>
      <td>
        <i
          data-tip="Copy map seed as URL. It will produce the same map only if options are default or the same"
          id="optionsCopySeed"
          class="icon-docs"
        ></i>
      </td>
    </tr>
    <tr
      data-tip="Set number of points to be used for graph generation. Highly affects performance. 10K is the only recommended value"
    >
      <td>
        <i data-locked="0" id="lock_points" class="icon-lock-open"></i>
      </td>
      <td>Points number</td>
      <td>
        <input
          id="pointsInput"
          data-option="points"
          type="range"
          min="1"
          max="13"
          value="4"
          data-cells="10000"
        />
      </td>
      <td>
        <output id="pointsOutputFormatted" data-option-output="points" style="color: #053305">10K</output>
      </td>
    </tr>
    <tr data-tip="Select template or precreated heightmap to be used on generation">
      <td>
        <i data-locked="0" id="lock_template" class="icon-lock-open"></i>
      </td>
      <td>Heightmap</td>
      <td id="templateInputContainer" class="pointer">
        <select id="templateInput" data-option="template" style="pointer-events: none"></select>
      </td>
      <td></td>
    </tr>
    <tr data-tip="Define how many Cultures should be generated">
      <td>
        <i data-locked="0" id="lock_cultures" class="icon-lock-open"></i>
      </td>
      <td>Cultures number</td>
      <td>
        <input id="culturesInput" data-option="cultures" type="range" min="1" />
      </td>
      <td>
        <input id="culturesOutput" data-option="cultures" type="number" min="1" />
      </td>
    </tr>
    <tr data-tip="Select a set of cultures to be used for names and cultures generation">
      <td>
        <i data-locked="0" id="lock_culturesSet" class="icon-lock-open"></i>
      </td>
      <td>Cultures set</td>
      <td>
        <select id="culturesSet" data-option="culturesSet">
          <option value="world" data-max="32" selected>All-world</option>
          <option value="european" data-max="15">European</option>
          <option value="oriental" data-max="13">Oriental</option>
          <option value="english" data-max="10">English</option>
          <option value="antique" data-max="10">Antique</option>
          <option value="highFantasy" data-max="17">High Fantasy</option>
          <option value="darkFantasy" data-max="18">Dark Fantasy</option>
          <option value="random" data-max="100">Random</option>
        </select>
      </td>
      <td></td>
    </tr>
    <tr data-tip="Define how many states and capitals should be generated">
      <td>
        <i data-locked="0" id="lock_statesNumber" class="icon-lock-open"></i>
      </td>
      <td>States number</td>
      <td colspan="2">
        <slider-input id="statesNumber" data-option="statesNumber" min="0" max="100"></slider-input>
      </td>
    </tr>
    <tr
      data-tip="Set what share of eligible burgs in each state will become province centers. Higher values create more provinces"
    >
      <td>
        <i data-locked="0" id="lock_provincesRatio" class="icon-lock-open"></i>
      </td>
      <td>Provinces ratio</td>
      <td colspan="2">
        <slider-input id="provincesRatio" data-option="provincesRatio" min="0" max="100"></slider-input>
      </td>
    </tr>
    <tr data-tip="Define how much states and cultures can vary in size. Defines expansionism value">
      <td>
        <i data-locked="0" id="lock_sizeVariety" class="icon-lock-open"></i>
      </td>
      <td>Size variety</td>
      <td colspan="2">
        <slider-input id="sizeVariety" data-option="sizeVariety" min="0" max="10" step=".1"></slider-input>
      </td>
    </tr>
    <tr data-tip="Set the growth rate of states and cultures. Determines how much land stays neutral">
      <td>
        <i data-locked="0" id="lock_growthRate" class="icon-lock-open"></i>
      </td>
      <td>Growth rate</td>
      <td colspan="2">
        <slider-input id="growthRate" data-option="growthRate" min=".1" max="2" step=".1"></slider-input>
      </td>
    </tr>
    <tr data-tip="Define a number of non-capital settlements to be placed (if enough suitable land exists)">
      <td>
        <i data-locked="0" id="lock_manors" class="icon-lock-open"></i>
      </td>
      <td>Burgs number</td>
      <td>
        <input id="manorsInput" data-option="manors" type="range" min="0" max="1000" step="1" value="1000" />
      </td>
      <td>
        <output id="manorsOutput" data-option-output="manors" value="auto"></output>
      </td>
    </tr>
    <tr
      data-tip="Define how many organized religions and cults should be generated. Cultures will have their own folk religions in any case"
    >
      <td>
        <i data-locked="0" id="lock_religionsNumber" class="icon-lock-open"></i>
      </td>
      <td>Religions number</td>
      <td colspan="2">
        <slider-input
          id="religionsNumber"
          data-option="religionsNumber"
          min="0"
          max="50"
          step="1"
        ></slider-input>
      </td>
    </tr>
  </table>
  <p data-tip="Interface preferences saved in this browser. Changes apply immediately">
    Interface settings:
  </p>
  <table>
    <tr
      data-tip="Set user interface size. Please note browser zoom also affects interface size (Ctrl + or Ctrl - to change)"
    >
      <td></td>
      <td>Interface size</td>
      <td colspan="2">
        <slider-input id="uiSize" data-option="uiSize" min=".6" max="3" step=".1"></slider-input>
      </td>
    </tr>
    <tr data-tip="Set tooltip size">
      <td></td>
      <td>Tooltip size</td>
      <td colspan="2">
        <slider-input id="tooltipSize" data-option="tooltipSize" min="1" max="32" value="14"></slider-input>
      </td>
    </tr>
    <tr data-tip="Set theme hue for dialogs and tool windows">
      <td>
        <i data-tip="Restore default theme color: pale magenta" id="themeColorRestore" class="icon-ccw"></i>
      </td>
      <td>Theme color</td>
      <td>
        <input id="themeHueInput" data-option="themeHue" type="range" min="0" max="359" />
      </td>
      <td>
        <input id="themeColorInput" data-option="themeColor" type="color" />
      </td>
    </tr>
    <tr data-tip="Set dialog and tool windows transparency">
      <td></td>
      <td>Transparency</td>
      <td colspan="2">
        <slider-input id="transparencyInput" data-option="transparency" min="0" max="100"></slider-input>
      </td>
    </tr>
    <tr data-tip="Set autosave interval in minutes. Set 0 to disable autosave. Map is saved to browser memory">
      <td></td>
      <td>Autosave interval</td>
      <td>
        <input
          id="autosaveIntervalInput"
          data-option="autosaveInterval"
          type="range"
          min="0"
          max="60"
          step="1"
          value="15"
        />
      </td>
      <td>
        <input
          id="autosaveIntervalOutput"
          data-option="autosaveInterval"
          type="number"
          min="0"
          max="60"
          step="1"
          value="15"
        />
      </td>
    </tr>
    <tr data-tip="Set what Generator should do on load">
      <td></td>
      <td>On load</td>
      <td>
        <select id="onloadBehavior" data-option="onloadBehavior">
          <option value="random" selected>Generate random map</option>
          <option value="lastSaved">Open last saved map</option>
        </select>
      </td>
      <td></td>
    </tr>
    <tr data-tip="Rendering preset: visual quality traded for speed. Pick 'Speed' if the map feels slow">
      <td></td>
      <td>Performance</td>
      <td>
        <select id="performancePreset" data-option="performancePreset">
          <option value="quality">Quality</option>
          <option value="balance" selected>Balance</option>
          <option value="speed">Speed</option>
          <option value="custom" disabled hidden>Custom</option>
        </select>
      </td>
      <td>
        <i data-tip="Open the performance settings" id="openPerformanceSettings" class="icon-cog"></i>
      </td>
    </tr>
    <tr data-tip="Toggle Azgaar Assistant (help bubble on the bottom right corner)">
      <td></td>
      <td>Azgaar Assistant</td>
      <td>
        <select id="azgaarAssistant" data-option="azgaarAssistant">
          <option value="show" selected>Show</option>
          <option value="hide">Hide</option>
        </select>
      </td>
    </tr>
    <tr data-tip="Select speech synthesis voice to pronounce generated names">
      <td></td>
      <td>Speaker voice</td>
      <td>
        <select id="speakerVoice" data-option="speakerVoice"></select>
      </td>
      <td>
        <span id="speakerTest" data-tip="Click to test the voice" style="cursor: pointer">🔊</span>
      </td>
    </tr>
    <tr data-tip="Select emblem shape. Can be changed individually in the Emblem Editor">
      <td></td>
      <!-- no lock: the shape is an interface preference, kept by this browser whatever map is on screen -->
      <td>Emblem shape</td>
      <td>
        <select id="emblemShape" data-option="emblemShape">
          <optgroup label="Diversiform">
            <option value="culture" selected>Culture-specific</option>
            <option value="random">Culture-random</option>
            <option value="state">State-specific</option>
          </optgroup>
          <optgroup label="Basic">
            <option value="heater">Heater</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
          </optgroup>
          <optgroup label="Regional">
            <option value="horsehead">Horsehead</option>
            <option value="horsehead2">Horsehead Edgy</option>
            <option value="polish">Polish</option>
            <option value="hessen">Hessen</option>
            <option value="swiss">Swiss</option>
          </optgroup>
          <optgroup label="Historical">
            <option value="boeotian">Boeotian</option>
            <option value="roman">Roman</option>
            <option value="kite">Kite</option>
            <option value="oldFrench">Old French</option>
            <option value="renaissance">Renaissance</option>
            <option value="baroque">Baroque</option>
          </optgroup>
          <optgroup label="Specific">
            <option value="targe">Targe</option>
            <option value="targe2">Targe2</option>
            <option value="pavise">Pavise</option>
            <option value="wedged">Wedged</option>
            <option value="embowed">Embowed</option>
          </optgroup>
          <optgroup label="Banner">
            <option value="flag">Flag</option>
            <option value="pennon">Pennon</option>
            <option value="guidon">Guidon</option>
            <option value="banner">Banner</option>
            <option value="dovetail">Dovetail</option>
            <option value="gonfalon">Gonfalon</option>
            <option value="pennant">Pennant</option>
          </optgroup>
          <optgroup label="Simple">
            <option value="round">Round</option>
            <option value="oval">Oval</option>
            <option value="vesicaPiscis">Vesica Piscis</option>
            <option value="square">Square</option>
            <option value="diamond">Diamond</option>
            <option value="hexagon">Hexagon</option>
          </optgroup>
          <optgroup label="Fantasy">
            <option value="fantasy1">Fantasy1</option>
            <option value="fantasy2">Fantasy2</option>
            <option value="fantasy3">Fantasy3</option>
            <option value="fantasy4">Fantasy4</option>
            <option value="fantasy5">Fantasy5</option>
          </optgroup>
          <optgroup label="Middle Earth">
            <option value="noldor">Noldor</option>
            <option value="gondor">Gondor</option>
            <option value="easterling">Easterling</option>
            <option value="erebor">Erebor</option>
            <option value="ironHills">Iron Hills</option>
            <option value="urukHai">UrukHai</option>
            <option value="moriaOrc">Moria Orc</option>
          </optgroup>
        </select>
      </td>
      <td>
        <svg class="emblemShapePreview" viewBox="0 0 200 210"><path id="emblemShapeImage" /></svg>
      </td>
    </tr>
    <tr
      data-tip="Size of the map window on screen. Independent of the map size: it is how much of the map you see at once. Set by hand it is remembered, until you fit it back to the window"
    >
      <td>
        <i data-tip="Fit the viewport to the browser window" id="viewportFit" class="icon-ccw"></i>
      </td>
      <td>Viewport size</td>
      <td>
        <input id="viewportWidth" data-option="viewportWidth" class="paired" type="number" min="100" />
        <span>x</span>
        <input id="viewportHeight" data-option="viewportHeight" class="paired" type="number" min="100" />
        <span>px</span>
      </td>
      <td></td>
    </tr>
    <tr data-tip="Set minimum and maximum possible zoom level">
      <td>
        <i data-tip="Restore the default zoom extent" id="zoomExtentDefault" class="icon-ccw"></i>
      </td>
      <td>Zoom extent</td>
      <td>
        <span data-tip="Minimum possible zoom level (should be > 0)">min</span>
        <input
          data-tip="Minimum possible zoom level (should be > 0)"
          id="zoomExtentMin" data-option="zoomExtentMin"
          class="paired"
          type="number"
          min=".2"
          step=".1"
          max="20"
          value="1"
        />
        <span data-tip="Maximum possible zoom level (should be > 1)">max</span>
        <input
          data-tip="Maximum possible zoom level (should be > 1)"
          id="zoomExtentMax" data-option="zoomExtentMax"
          class="paired"
          type="number"
          min="1"
          max="50"
          value="20"
        />
      </td>
      <td>
        <i
          data-tip="Allow dragging the map beyond the canvas borders"
          id="translateExtent"
          data-on="0"
          class="icon-hand-paper-o"
        ></i>
      </td>
    </tr>
    <tr
      data-tip="Load Google Translate and select a language. Automatic translation can break some page functions. If this happens, reset the language to English or refresh the page"
    >
      <td>
        <i data-tip="Reset language to English" id="resetLanguage" class="icon-ccw"></i>
      </td>
      <td>Language</td>
      <td>
        <button id="loadGoogleTranslateButton">Load Google Translate</button>
        <div id="google_translate_element"></div>
      </td>
      <td></td>
    </tr>
  </table>
  <div>
    <button
      id="configureWorld"
      data-tip="Open the World Configurator to set the map position on the globe and the world climate"
      onclick="window.Controllers.WorldConfigurator.open()"
    >
      Configure World
    </button>
    <button
      id="setupLore"
      data-tip="Click to name the map, date its calendar and describe the world"
      onclick="window.Controllers.LoreEditor.open()"
    >
      Set Lore
    </button>
    <button
      id="optionsReset"
      data-tip="Click to restore default options and reload the page"
      onclick="cleanupData()"
    >
      Reset Options
    </button>
  </div>
`,tr=new WeakMap;u(`optionsContent`).innerHTML=er,nr(),kr(),Ct(()=>rr(`performancePreset`));function nr(){let e=u(`optionsContent`),t=u(`options`);t.addEventListener(`input`,ur),t.addEventListener(`change`,ur),e.addEventListener(`click`,e=>{let t=e.target;t.id===`restoreDefaultMapSize`?fr():t.id===`optionsMapHistory`?At():t.id===`optionsCopySeed`?Un():t.id===`templateInputContainer`?M.HeightmapSelection.open():t.id===`viewportFit`?Tr():t.id===`zoomExtentDefault`?Er():t.id===`translateExtent`?Or(t):t.id===`openPerformanceSettings`?$n.open():t.id===`speakerTest`?Ar():t.id===`themeColorRestore`?br():t.id===`loadGoogleTranslateButton`?jr():t.id===`resetLanguage`&&Mr()})}function Z(e){return u(`options`).querySelectorAll(`[data-option="${e}"]`)}function Q(e){let t=Z(e)[0];if(!t)throw Error(`Missing option control: ${e}`);return t}function rr(e,t){let n=Y[e].read(options);if(n!==null)for(let r of Z(e))r!==t&&(r.value=String(n),tr.delete(r))}function ir(){let e=Z(`template`)[0],t=options.generation.template;e&&t&&o(e,t,Ie[t]?.name||V[t]?.name||t);for(let e of Object.keys(Y))rr(e);ar(),or(),sr(),cr()}function ar(){let e=u(`options`).querySelector(`[data-option-output="manors"]`);e&&(e.value=dt()?`auto`:String(options.generation.burgs.limit))}function or(){let{density:e}=options.generation.graph,t=Oe(e),n=Z(`points`)[0];n&&(n.value=String(e),n.dataset.cells=String(t));let r=u(`options`).querySelector(`[data-option-output="points"]`);r&&(r.value=`${t/1e3}K`,r.style.color=mr(t))}function sr(){let e=String(Fe[options.generation.cultures.set]?.max??0);for(let t of Z(`cultures`))t.max=e,t.value=String(options.generation.cultures.limit)}function cr(){let e=u(`options`).querySelector(`[data-option="pngResolution"]`);e&&(e.value=String(options.app.export.pngResolution))}function lr(e){return Object.values(Y).find(t=>t.pin===e)?.read(options)??void 0}function ur(e){let t=e.target,n=t.dataset.option;if(!n||!Object.hasOwn(Y,n))return;let r=Y[n];r.event===`change`&&e.type!==`change`||((e.type!==`change`||tr.get(t)!==t.value)&&(r.update(t.value),rr(n,t)),e.type===`input`?tr.set(t,t.value):(tr.delete(t),Options.persist()))}function dr(){let e=e=>{let t=Q(e),n=Math.max(+t.value||0,+t.min||1);return t.value=String(n),n},t=e(`mapWidth`),n=e(`mapHeight`);Options.set(e=>{e.generation.graph.width=t,e.generation.graph.height=n}),F.set(`mapWidth`,t),F.set(`mapHeight`,n),(options.generation.graph.width>window.innerWidth||options.generation.graph.height>window.innerHeight)&&A(`Map size is larger than the window (${`${window.innerWidth} x ${window.innerHeight}`}). It can affect performance`,!1,`warn`,4e3)}function fr(){Options.set(e=>{e.generation.graph.width=window.innerWidth,e.generation.graph.height=window.innerHeight}),F.clear(`mapWidth`),F.clear(`mapHeight`),ir()}function pr(e){Options.set(t=>t.generation.graph.density=e),or()}var mr=e=>e>5e4?`#b12117`:e===1e4?`#053305`:`#dfdf12`;function hr(e){O.setShape(e);let t=u(`emblemShapeImage`),{shieldPaths:n}=C,r=n[e];r?t.setAttribute(`d`,r):t.removeAttribute(`d`);let i=[`culture`,`state`,`random`].includes(e)?null:e;if(e===`random`)for(let e of pack.cultures)e.removed||(e.shield=Pe.getRandomShield());for(let e of pack.states){if(!e.i||e.removed||!e.coa||`icon`in e.coa)continue;let t=i||O.getShield(e.culture??0);t!==e.coa.shield&&(e.coa.shield=t,C.trigger(`stateCOA${e.i}`,e.coa))}for(let e of pack.provinces){if(!e.i||e.removed||!e.coa||`icon`in e.coa)continue;let t=i||O.getShield(pack.cells.culture[e.center]??0,e.state);t!==e.coa.shield&&(e.coa.shield=t,C.trigger(`provinceCOA${e.i}`,e.coa))}for(let e of pack.burgs){if(!e.i||e.removed||!e.coa||`icon`in e.coa)continue;let t=i||O.getShield(e.culture??0,e.state);t!==e.coa.shield&&(e.coa.shield=t,C.trigger(`burgCOA${e.i}`,e.coa))}}function gr(e){if(Number.isNaN(e)||e<.5)return;let t=Math.min(e,_r());Q(`uiSize`).value=String(t),document.body.style.fontSize=`${b(t*10,2)}px`,u(`options`).style.width=`${t*300}px`}var _r=()=>b(Math.min(window.innerHeight/465,window.innerWidth/302),1);function vr(e){u(`tooltip`).style.fontSize=`calc(${e}px + 0.5vw)`}function yr(e,t){Options.set(n=>{n.app.ui.themeColor=e,n.app.ui.transparency=t}),Sr(e,t)}function br(){yr(gt,options.app.ui.transparency)}function xr(e){let{s:t,l:n}=v(options.app.ui.themeColor);yr(v(+e,t,n).hex(),options.app.ui.transparency)}function Sr(e,t){Q(`transparency`).value=String(t);let n=(100-t)/100,r=Math.min(n+.3,1),{h:i,s:a,l:o}=v(e);Q(`themeColor`).value=e,Q(`themeHue`).value=String(i);let s=[[`--bg-opacity`,String(n)],[`--bg-main`,v(i,a,o,n).toString()],[`--bg-lighter`,v(i,a,o+.02,n).toString()],[`--bg-light`,v(i,a-.02,o+.06,n).toString()],[`--light-solid`,v(i,a+.01,o+.05,1).toString()],[`--dark-solid`,v(i,a,o-.2,1).toString()],[`--header`,v(i,a,o-.03,r).toString()],[`--header-active`,v(i,a,o-.09,r).toString()],[`--bg-disabled`,v(i,a-.04,o+.09).toString()],[`--bg-dialogs`,v(0,0,.98,n).toString()]];for(let[e,t]of s)document.documentElement.style.setProperty(e,t)}function Cr(e){let t=Q(`zoomExtentMin`),n=Q(`zoomExtentMax`);+t.value>+n.value&&([t.value,n.value]=[n.value,t.value]),Dr(Math.max(+t.value,.01),Math.min(+n.value,200)),Ce(x(+e,.01,200))}function wr(){let e=+Q(`viewportWidth`).value,t=+Q(`viewportHeight`).value;!(e>0)||!(t>0)||(ct(e,t),Options.set(e=>e.app.viewport={width:j.width,height:j.height}))}function Tr(){Options.set(e=>e.app.viewport=null),R()}function Er(){Options.set(e=>e.app.zoomExtent.max=Options.getDefaultOptions().app.zoomExtent.max),Q(`zoomExtentMax`).value=String(options.app.zoomExtent.max),st(),Ce(options.app.zoomExtent.min)}function Dr(e,t){Options.set(n=>n.app.zoomExtent={min:e,max:t}),Q(`zoomExtentMin`).value=String(e),Q(`zoomExtentMax`).value=String(t),be(e,t),Se()}function Or(e){let t=!+(e.dataset.on??0);e.dataset.on=String(+t);let{width:n,height:r}=options.map.graph;t?ve(-n/2,-r/2,n*1.5,r*1.5):ve(0,0,n,r)}function kr(){let e=0,t=Q(`speakerVoice`),n=setInterval(()=>{let r=speechSynthesis.getVoices();if(!r.length){if(++e<10)return;clearInterval(n),t.options.length||t.options.add(new Option(`No voices available`,``));return}clearInterval(n);for(let[e,n]of r.entries())t.options.add(new Option(n.name,String(e)));t.value=options.app.ui.speakerVoice||String(r.findIndex(e=>e.lang===`en-US`))},1e3)}function Ar(){let e=new SpeechSynthesisUtterance(`The quick brown fox jumps over the lazy dog`),t=speechSynthesis.getVoices();t.length&&(e.voice=t[Number(options.app.ui.speakerVoice)]??e.voice),speechSynthesis.speak(e)}function jr(){let e=document.createElement(`script`);e.src=`https://translate.google.com/translate_a/element.js?cb=initGoogleTranslate`,e.onload=()=>{t(`loadGoogleTranslateButton`)?.remove();for(let e of u(`mapLayers`).querySelectorAll(`li`))e.innerHTML=e.innerHTML.replace(/<u>(.+)<\/u>/g,`$1`)},document.head.append(e)}function Mr(){let e=document.querySelector(`#google_translate_element select`);if(e?.value)for(let t=0;t<2;t++)e.value=`en`,e.handleChange(new Event(`change`))}var Nr=()=>x(b(window.innerWidth/1280,1),1,_r());function Pr(){let e=options.generation.template;if(e){let t=Ie[e]?.name||V[e]?.name||e;o(Q(`template`),e,t)}F.bindIcons(u(`options`),lr);let{ui:t,emblems:n}=options.app;O.setShape(n.shape),vr(t.tooltipSize),Q(`uiSize`).max=String(_r()),gr(t.size??Nr()),Sr(t.themeColor,t.transparency),Dt(),st()}window.changeCellsDensity=pr,window.initGoogleTranslate=()=>{new google.translate.TranslateElement({pageLanguage:`en`,layout:google.translate.TranslateElement.InlineLayout.VERTICAL},`google_translate_element`)};export{R as C,ot as S,rt as T,At as _,An as a,ft as b,Dn as c,q as d,fn as f,V as g,Rt as h,Un as i,Tn as l,Lt as m,pr as n,Nn as o,Kt as p,ir as r,Fn as s,mr as t,kn as u,Dt as v,at as w,z as x,bt as y};