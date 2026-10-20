import{Gn as e,H as t,Jn as n,L as r,On as i,P as a,U as o,Vn as s,Z as c,a as l,nn as u,o as d,rr as f,y as p,z as m}from"./utils-CNyvX_4Z.js";import{U as h,V as g,t as _,z as ee}from"./layers-BLilOnUL.js";import{t as te}from"./drag-ZPCFys_e.js";import{t as ne}from"./sin-DYm9hqTl.js";import{n as v}from"./highlight-Bhr3REGq.js";import{i as y,t as b}from"./tooltips-DY0u1iQZ.js";import{t as x}from"./state-B2hBYDzv.js";import{t as S}from"./controllers-CcOoWo4P.js";import{i as C,l as w,n as re,r as ie,s as ae}from"./dialog-helpers-CHDy2eFe.js";import{t as oe}from"./viewbox-events-fm-stbSj.js";import{i as se,r as T}from"./index-CUjhdmz8.js";import{t as E}from"./highlighting-DXpYhBlP.js";import{a as D,i as O,n as ce,r as le}from"./table-Lo6_FhwU.js";var k=`religionsEditor`,A=`Religions`,j={my:`right top`,at:`right-10 top+10`,of:`svg`,collision:`fit`},M,N=[{key:`color`,width:`1.2em`,permanent:!0},{key:`name`,label:`Religion`,width:`14em`,permanent:!0,sortBy:e=>e.name||``,sortType:`alpha`},{key:`type`,label:`Type`,width:`6em`,defaultSort:`asc`,sortBy:e=>e.type||``,sortType:`alpha`},{key:`form`,label:`Form`,width:`7em`,mobileHidden:!0,sortBy:e=>e.form||``,sortType:`alpha`},{key:`deity`,label:`Deity`,width:`14em`,mobileHidden:!0,sortBy:e=>e.deity||``,sortType:`alpha`},{key:`area`,label:`Area`,width:`7em`,mobileHidden:!0,sortBy:e=>e.area||0},{key:`population`,label:`Population`,width:`6em`,sortBy:e=>(e.rural||0)*options.map.units.population.scale+(e.urban||0)*options.map.units.population.scale*options.map.units.population.urbanization.rate},{key:`expansion`,label:`Expansion`,width:`5em`,hidden:!0,mobileHidden:!0,sortBy:e=>e.expansion||``,sortType:`alpha`},{key:`expansionism`,label:`Expansionism`,width:`5em`,hidden:!0,mobileHidden:!0,sortBy:e=>e.expansionism||0},{key:`note`,width:`1.1em`},{key:`locate`,width:`1.1em`},{key:`lock`,width:`1.1em`},{key:`remove`,width:`1.4em`,permanent:!0}];function P(){return pack.religions.filter(e=>!e.removed&&!(e.i&&!e.cells&&!M.showExtinct))}var F=le({getData:()=>se(k,P(),N),onUpdate:B});function I(){customization||(M=x.get(k,`filters`,()=>({showExtinct:!1})),re(`#${k}, .stable`),_.show(`religions`),_.hide(`states`,`biomes`),_.hide(`cultures`,`provinces`),L(),z(),K(),F.reset(),$(`#${k}`).dialog({title:`Religions Editor`,resizable:!1,width:`fit-content`,close:je,position:j}))}function L(){C(`religionsEditor`);let e=`<div id="religionsEditor" class="dialog stable editorDialog">
    <div id="religionsBody" class="table" data-type="absolute">${O({dialogId:k,columns:N})}</div>

    <div id="religionsFooter" class="totalLine">
      <div data-tip="Total number of organized religions" style="margin-left: 12px">
        Organized:&nbsp;<span id="religionsOrganized">0</span>
      </div>
      <div data-tip="Total number of heresies" style="margin-left: 12px">
        Heresies:&nbsp;<span id="religionsHeresies">0</span>
      </div>
      <div data-tip="Total number of cults" style="margin-left: 12px">
        Cults:&nbsp;<span id="religionsCults">0</span>
      </div>
      <div data-tip="Total number of folk religions" style="margin-left: 12px">
        Folk:&nbsp;<span id="religionsFolk">0</span>
      </div>
      <div data-tip="Total land area" style="margin-left: 12px" data-col="area">
        Land Area:&nbsp;<span id="religionsFooterArea">0</span>
      </div>
      <div data-tip="Total number of believers (population)" style="margin-left: 12px" data-col="population">
        Believers:&nbsp;<span id="religionsFooterPopulation">0</span>
      </div>
    </div>

    <div id="religionsBottom" class="editorToolbar">
      <button id="religionsEditorRefresh" data-tip="Refresh the Editor" class="icon-cw"></button>
      <button id="religionsEditStyle" data-tip="Edit religions style in Style Editor" class="icon-adjust"></button>
      <button id="religionsLegend" data-tip="Toggle Legend box" class="icon-list-bullet"></button>
      <button id="religionsPercentage" data-tip="Toggle percentage / absolute values display mode" class="icon-percent"></button>
      <button id="religionsHeirarchy" data-tip="Show religions hierarchy tree" class="icon-sitemap"></button>
      <button id="religionsExtinct" data-tip="Show/hide extinct religions (religions without cells)" class="icon-eye-off"></button>

      <button id="religionsManually" data-tip="Manually re-assign religions" class="icon-brush"></button>
      <button id="religionsAdd" data-tip="Add a new religion. Hold Shift to add multiple" class="icon-plus"></button>
      <button id="religionsExport" data-tip="Download religions-related data" class="icon-download"></button>
      <button id="religionsRecalculate" data-tip="Recalculate religions based on current values of growth-related attributes" class="icon-retweet"></button>
      <span
        data-tip="Allow religion center, extent, and expansionism changes to take an immediate effect"
        class="editorToolbarPanel"
      >
        <input id="religionsAutoChange" class="checkbox" type="checkbox" />
        <label for="religionsAutoChange" class="checkbox-label"><i>auto-apply changes</i></label>
      </span>
    </div>
  </div>`;a(`dialogs`).insertAdjacentHTML(`beforeend`,e),Y(),T(k,F.reset),E(k,({cellId:e})=>pack.cells.religion[e]),a(`religionsEditorRefresh`).addEventListener(`click`,R),ce({dialogId:k,columns:N,onUpdate:()=>w(k,{width:`fit-content`,position:j})}),a(`religionsEditStyle`).addEventListener(`click`,()=>void S.StyleEditor.open(`religions`)),a(`religionsLegend`).addEventListener(`click`,Se),a(`religionsPercentage`).addEventListener(`click`,q),a(`religionsHeirarchy`).addEventListener(`click`,J),a(`religionsExtinct`).addEventListener(`click`,Ce),a(`religionsManually`).addEventListener(`click`,we),a(`religionsAdd`).addEventListener(`click`,Ee),a(`religionsExport`).addEventListener(`click`,Oe),a(`religionsRecalculate`).addEventListener(`click`,()=>Q(!0))}function R(){z(),F.refresh()}function z(){let{cells:e,religions:t,burgs:n}=pack;t.forEach(e=>{e.cells=e.area=e.rural=e.urban=0});for(let r of e.i){if(e.h[r]<20)continue;let i=e.religion[r];t[i].cells+=1,t[i].area+=e.area[r],t[i].rural+=e.pop[r];let a=e.burg[r];a&&(t[i].urban+=n[a].population)}}function B(e){let t=` ${d()}`,n=``,r=0,i=0;for(let t of e.all)r+=l(t.area??0),i+=f((t.rural??0)*options.map.units.population.scale+(t.urban??0)*options.map.units.population.scale*options.map.units.population.urbanization.rate);for(let r of e.rows){let e=l(r.area??0),i=(r.rural??0)*options.map.units.population.scale,a=(r.urban??0)*options.map.units.population.scale*options.map.units.population.urbanization.rate,o=f(i+a),s=`Believers: ${p(o)}; Rural areas: ${p(i)}; Urban areas: ${p(a)}. Click to change`;if(!r.i){n+=`<div
        class="states"
        data-id="${r.i}"
        data-name="${r.name}"
        data-color=""
        data-area="${e}"
        data-population="${o}"
        data-type=""
        data-form=""
        data-deity=""
        data-expansion=""
        data-expansionism=""
      >
        <svg width="9" height="9" class="placeholder" data-col="color"></svg>
        <input data-tip="Religion name. Click and type to change" class="religionName italic"
          value="${r.name}" autocorrect="off" spellcheck="false" data-col="name" />
        <select data-tip="Religion type" class="religionType placeholder" data-col="type">
          ${V(r.type)}
        </select>
        <input data-tip="Religion form" class="religionForm placeholder" value="" autocorrect="off" spellcheck="false" data-col="form" />
        <div data-col="deity">
          <span class="icon-arrows-cw placeholder"></span>
          <input class="religionDeity placeholder" value="" autocorrect="off" spellcheck="false" />
        </div>
        <div data-col="area">
          <span data-tip="Religion area" style="padding-right: 4px" class="icon-map-o"></span>
          <div data-tip="Religion area" class="religionArea">${p(e)+t}</div>
        </div>
        <div data-col="population">
          <span data-tip="${s}" class="icon-male"></span>
          <div data-tip="${s}" class="religionPopulation pointer">${p(o)}</div>
        </div>
        <div data-col="expansion">
          <span class="icon-resize-full-alt placeholder" style="padding-right: 2px"></span>
          <span class="religionExtent placeholder">n/a</span>
        </div>
        <div data-col="expansionism">
          <span class="icon-resize-full placeholder"></span>
          <input class="religionExpantion placeholder" disabled type="number" value="0" />
        </div>
        <div data-col="note"></div>
        <div data-col="locate"></div>
        <div data-col="lock"></div>
        <div data-col="remove"></div>
      </div>`;continue}n+=`<div
      class="states"
      data-id=${r.i}
      data-name="${r.name}"
      data-color="${r.color}"
      data-area=${e}
      data-population=${o}
      data-type="${r.type}"
      data-form="${r.form}"
      data-deity="${r.deity||``}"
      data-expansion="${r.expansion}"
      data-expansionism="${r.expansionism}"
    >
      <fill-box fill="${r.color}" data-col="color"></fill-box>
      <input data-tip="Religion name. Click and type to change" class="religionName"
        value="${r.name}" autocorrect="off" spellcheck="false" data-col="name" />
      <select data-tip="Religion type" class="religionType" data-col="type">
        ${V(r.type)}
      </select>
      <input data-tip="Religion form" class="religionForm"
        value="${r.form}" autocorrect="off" spellcheck="false" data-col="form" />
      <div data-col="deity">
        <span data-tip="Click to re-generate supreme deity" class="icon-arrows-cw pointer"></span>
        <input data-tip="Religion supreme deity" class="religionDeity"
          value="${r.deity||``}" autocorrect="off" spellcheck="false" />
      </div>
      <div data-col="area">
        <span data-tip="Religion area" style="padding-right: 4px" class="icon-map-o"></span>
        <div data-tip="Religion area" class="religionArea">${p(e)+t}</div>
      </div>
      <div data-col="population">
        <span data-tip="${s}" class="icon-male"></span>
        <div data-tip="${s}" class="religionPopulation pointer">${p(o)}</div>
      </div>
      ${H(r)}
      ${ae(`this religion`)}
      <span data-col="locate" data-tip="Locate the religion" class="icon-target"></span>
      <span data-col="lock" data-tip="Lock this religion" class="icon-lock${r.lock?``:`-open`}"></span>
      <span data-col="remove" data-tip="Remove religion" class="icon-trash-empty"></span>
    </div>`}let o=a(`religionsBody`);o.querySelectorAll(`:scope > .states`).forEach(e=>{e.remove()}),o.insertAdjacentHTML(`beforeend`,n);let s=pack.religions.filter(e=>e.i&&!e.removed);a(`religionsOrganized`).innerHTML=String(s.filter(e=>e.type===`Organized`).length),a(`religionsHeresies`).innerHTML=String(s.filter(e=>e.type===`Heresy`).length),a(`religionsCults`).innerHTML=String(s.filter(e=>e.type===`Cult`).length),a(`religionsFolk`).innerHTML=String(s.filter(e=>e.type===`Folk`).length),a(`religionsFooterArea`).innerHTML=p(r)+t,a(`religionsFooterPopulation`).innerHTML=p(i),a(`religionsFooterArea`).dataset.area=String(r),a(`religionsFooterPopulation`).dataset.population=String(i),D(a(`religionsFooter`),e,F.goto),a(`religionsBody`).querySelectorAll(`:scope > .states`).forEach(e=>{e.addEventListener(`mouseenter`,W),e.addEventListener(`mouseleave`,G)}),a(`religionsBody`).querySelectorAll(`fill-box`).forEach(e=>void e.addEventListener(`click`,ue)),a(`religionsBody`).querySelectorAll(`div > input.religionName`).forEach(e=>void e.addEventListener(`input`,de)),a(`religionsBody`).querySelectorAll(`div > select.religionType`).forEach(e=>void e.addEventListener(`change`,fe)),a(`religionsBody`).querySelectorAll(`div > input.religionForm`).forEach(e=>void e.addEventListener(`input`,pe)),a(`religionsBody`).querySelectorAll(`div > input.religionDeity`).forEach(e=>void e.addEventListener(`input`,me)),a(`religionsBody`).querySelectorAll(`div > span.icon-arrows-cw`).forEach(e=>void e.addEventListener(`click`,he)),a(`religionsBody`).querySelectorAll(`div > div.religionPopulation`).forEach(e=>void e.addEventListener(`click`,ge)),a(`religionsBody`).querySelectorAll(`div > select.religionExtent`).forEach(e=>void e.addEventListener(`change`,_e)),a(`religionsBody`).querySelectorAll(`div > input.religionExpantion`).forEach(e=>void e.addEventListener(`change`,ve)),a(`religionsBody`).querySelectorAll(`div > span.icon-trash-empty`).forEach(e=>void e.addEventListener(`click`,ye)),a(`religionsBody`).querySelectorAll(`div > span.icon-book`).forEach(e=>void e.addEventListener(`click`,ke)),a(`religionsBody`).querySelectorAll(`div > span.icon-target`).forEach(e=>void e.addEventListener(`click`,Ae)),a(`religionsBody`).querySelectorAll(`div > span.icon-lock`).forEach(e=>void e.addEventListener(`click`,Z)),a(`religionsBody`).querySelectorAll(`div > span.icon-lock-open`).forEach(e=>void e.addEventListener(`click`,Z)),a(`religionsBody`).dataset.type===`percentage`&&(a(`religionsBody`).dataset.type=`absolute`,q()),w(k,{width:`fit-content`,position:j})}function V(e){let t=``;return[`Folk`,`Organized`,`Cult`,`Heresy`].forEach(n=>{t+=`<option ${e===n?`selected`:``} value="${n}">${n}</option>`}),t}function H(e){if(e.type===`Folk`){let e=`Folk religions are not competitive and do not expand. Initially they cover all cells of their parent culture, but get ousted by organized religions when they expand`;return`
      <div data-col="expansion">
        <span data-tip="${e}" class="icon-resize-full-alt" style="padding-right: 2px"></span>
        <span data-tip="${e}" class="religionExtent">culture</span>
      </div>
      <div data-col="expansionism">
        <span data-tip="${e}" class="icon-resize-full"></span>
        <input data-tip="${e}" class="religionExpantion" disabled type="number" value='0' />
      </div>`}return`
    <div data-col="expansion">
      <span data-tip="Potential religion extent" class="icon-resize-full-alt" style="padding-right: 2px"></span>
      <select data-tip="Potential religion extent" class="religionExtent">
        ${U(e.expansion)}
      </select>
    </div>
    <div data-col="expansionism">
      <span data-tip="Religion expansionism. Defines competitive size" class="icon-resize-full"></span>
      <input
        data-tip="Religion expansionism. Defines competitive size. Click to change, then click Recalculate to apply change"
        class="religionExpantion"
        type="number"
        min="0"
        max="99"
        step=".1"
        value=${e.expansionism}
      />
    </div>`}function U(e){let t=``;return[`global`,`state`,`culture`].forEach(n=>{t+=`<option ${e===n?`selected`:``} value="${n}">${n}</option>`}),t}var W=c(e=>{let t=Number(e.id||e.target.dataset.id),n=a(`religionsBody`).querySelector(`div[data-id='${t}']`);if(n&&n.classList.add(`active`),!_.isOn(`religions`)||customization)return;let r=u().duration(2e3).ease(ne);i(`#relig`).select(`#religion${t}`).raise().transition(r).attr(`stroke-width`,2.5).attr(`stroke`,`#d0240f`),i(`#debug`).select(`#religionsCenter${t}`).raise().transition(r).attr(`r`,3).attr(`stroke`,`#d0240f`)},200);function G(e){let t=Number(e.id||e.target.dataset.id),n=a(`religionsBody`).querySelector(`div[data-id='${t}']`);n&&n.classList.remove(`active`),i(`#relig`).select(`#religion${t}`).transition().attr(`stroke-width`,null).attr(`stroke`,null),i(`#debug`).select(`#religionsCenter${t}`).transition().attr(`r`,2).attr(`stroke`,null)}function ue(){let e=this.getAttribute(`fill`)||`#ffffff`,t=+this.parentNode.dataset.id;S.ColorPicker.open(e,e=>{this.fill=e,pack.religions[t].color=e,i(`#relig`).select(`#religion${t}`).attr(`fill`,e),i(`#debug`).select(`#religionsCenter${t}`).attr(`fill`,e)})}function de(){let e=+this.parentNode.dataset.id;this.parentNode.dataset.name=this.value,this.value.trim()&&Religions.rename(e,this.value)}function fe(){let e=+this.parentNode.dataset.id;this.parentNode.dataset.type=this.value,Religions.setType(e,this.value)}function pe(){let e=+this.parentNode.dataset.id;this.parentNode.dataset.form=this.value,this.value.trim()&&Religions.setForm(e,this.value)}function me(){let e=this.closest(`.states`),t=+e.dataset.id;e.dataset.deity=this.value,Religions.setDeity(t,this.value)}function he(){let e=this.closest(`.states`),t=+e.dataset.id,n=pack.religions[t].culture,r=Religions.getDeityName(n)??``;e.dataset.deity=r,pack.religions[t].deity=r,this.nextElementSibling.value=r}function ge(){let t=+this.closest(`.states`).dataset.id,n=pack.religions[t];if(!n.cells){y(`Religion does not have any cells, cannot change population`,!1,`error`);return}let r=f((n.rural??0)*options.map.units.population.scale),i=f((n.urban??0)*options.map.units.population.scale*options.map.units.population.urbanization.rate),o=r+i,s=e=>Number(e).toLocaleString(),c=pack.burgs.filter(e=>!e.removed&&pack.cells.religion[e.cell]===t);alertMessage.innerHTML=`<div>
    <i>All population of religion territory is considered believers of this religion. It means believers number change will directly affect population</i>
    <div style="margin: 0.5em 0">
      Rural: <input type="number" min="0" step="1" id="ruralPop" value=${r} style="width:6em" />
      Urban: <input type="number" min="0" step="1" id="urbanPop" value=${i} style="width:6em"
        ${c.length?``:`disabled`} />
    </div>
    <div>Total population: ${s(o)} ⇒ <span id="totalPop">${s(o)}</span>
      (<span id="totalPopPerc">100</span>%)
    </div>
  </div>`;let l=a(`ruralPop`),u=a(`urbanPop`),d=a(`totalPop`),p=a(`totalPopPerc`),m=()=>{let e=l.valueAsNumber+u.valueAsNumber;Number.isNaN(e)||(d.innerHTML=s(e),p.innerHTML=String(f(e/o*100)))};l.oninput=()=>m(),u.oninput=()=>m(),$(`#alert`).dialog({resizable:!1,title:`Change believers number`,width:`24em`,buttons:{Apply:function(){h(),$(this).dialog(`close`)},Cancel:function(){$(this).dialog(`close`)}},position:{my:`center`,at:`center`,of:`svg`}});function h(){try{Religions.setPopulation(t,+l.value||0,+u.value||0)}catch(t){y(e(t),!1,`error`);return}_.draw(`population`),R()}}function _e(){let e=this.closest(`.states`),t=+e.dataset.id;e.dataset.expansion=this.value,Religions.setExpansion(t,this.value),Q()}function ve(){let e=this.closest(`.states`),t=+e.dataset.id;e.dataset.expansionism=this.value,+this.value>=0&&+this.value<=99&&(Religions.setExpansionism(t,+this.value),Q())}function ye(){if(customization)return;let e=+this.closest(`.states`).dataset.id;ie({title:`Remove religion`,message:`Are you sure you want to remove the religion? <br>This action cannot be reverted`,confirm:`Remove`,onConfirm:()=>be(e)})}function be(e){i(`#relig`).select(`#religion${e}`).remove(),i(`#relig`).select(`#religion-gap${e}`).remove(),i(`#debug`).select(`#religionsCenter${e}`).remove(),Religions.remove(e),R()}function K(){let e=i(`#debug`);e.select(`#religionCenters`).remove();let t=e.append(`g`).attr(`id`,`religionCenters`).attr(`stroke-width`,.8).attr(`stroke`,`#444444`).style(`cursor`,`move`),n=pack.religions.filter(e=>e.i&&e.center&&!e.removed);M.showExtinct||(n=n.filter(e=>(e.cells??0)>0)),t.selectAll(`circle`).data(n).enter().append(`circle`).attr(`id`,e=>`religionsCenter${e.i}`).attr(`data-id`,e=>e.i).attr(`r`,2).attr(`fill`,e=>e.color).attr(`cx`,e=>pack.cells.p[e.center][0]).attr(`cy`,e=>pack.cells.p[e.center][1]).on(`mouseenter`,(e,t)=>{y(`${t.name}. Drag to move the religion center`,!0),W(e)}).on(`mouseleave`,e=>{y(``,!0),G(e)}).call(te().on(`start`,xe))}function xe(e){let t=+this.dataset.id,r=n(this.getAttribute(`transform`)),i=+r[0]-e.x,a=+r[1]-e.y;function o(e){let{x:n,y:r}=e;this.setAttribute(`transform`,`translate(${i+n},${a+r})`);let o=Pack.findCell(n,r);if(!(o==null||pack.cells.h[o]<20)){try{Religions.moveCenter(t,n,r)}catch(e){y(e instanceof Error?e.message:String(e),!1,`error`,2e3);return}Q()}}let s=c(o,50);e.on(`drag`,s)}function Se(){if(h(A)){ee(A);return}let e=pack.religions.filter(e=>e.i&&!e.removed&&e.area).sort((e,t)=>(t.area??0)-(e.area??0)).map(e=>[e.i,e.color,e.name]);if(!e.length)return void y(`No religions to show`,!1,`error`);g(A,e)}function q(){if(a(`religionsBody`).dataset.type===`absolute`){a(`religionsBody`).dataset.type=`percentage`;let e=+a(`religionsFooterArea`).dataset.area,t=+a(`religionsFooterPopulation`).dataset.population;a(`religionsBody`).querySelectorAll(`:scope > .states`).forEach(n=>{let{area:r,population:i}=n.dataset;n.querySelector(`.religionArea`).innerText=`${f(+r/e*100)}%`,n.querySelector(`.religionPopulation`).innerText=`${f(+i/t*100)}%`})}else a(`religionsBody`).dataset.type=`absolute`,F.refresh()}async function J(){customization||S.HierarchyTree.open({type:`religions`,data:pack.religions,onNodeEnter:W,onNodeLeave:G,getDescription:e=>{let{name:t,type:n,form:r,rural:i,urban:a}=e,o=()=>t.includes(n)||r.includes(n)?``:n===`Folk`||n===`Organized`?`. ${n} religion`:`. ${n}`,s=r===n?``:`. ${r}`,c=i*options.map.units.population.scale+a*options.map.units.population.scale*options.map.units.population.urbanization.rate,l=c>0?`${p(f(c))} people`:`Extinct`;return`${t}${o()}${s}. ${l}`},getShape:({type:e})=>{if(e===`Folk`)return`circle`;if(e===`Organized`)return`square`;if(e===`Cult`)return`hexagon`;if(e===`Heresy`)return`diamond`}})}function Ce(){M.showExtinct=!M.showExtinct,x.set(k,`filters`,M),Y(),F.reset(),K()}function Y(){a(`religionsBody`).dataset.extinct=M.showExtinct?`show`:`hide`,a(`religionsExtinct`).classList.toggle(`active`,M.showExtinct)}function we(){_.show(`religions`),S.PaintEditor.open({title:`Paint Religions`,parentDialogId:k,onClose:I,items:pack.religions.filter(e=>!e.removed&&(!e.i||e.cells)).map(e=>({id:e.i,name:e.name,color:e.color||`#ffffff`})),dontOverrideControl:!0,getValue:e=>pack.cells.religion[e],filterCell:e=>m(e,pack),onApply:Te})}function Te(e){for(let[t,n]of s(e))Religions.setCells(t,n);e.size&&(_.draw(`religions`),document.getElementById(k)&&R(),K())}function Ee(){if(this.classList.contains(`pressed`)){X();return}customization=8,this.classList.add(`pressed`),y(`Click on the map to add a new religion`,!0),i(`#viewbox`).style(`cursor`,`crosshair`).on(`click`,De),a(`religionsBody`).querySelectorAll(`div > input, select, span, svg`).forEach(e=>{e.style.pointerEvents=`none`})}function X(){customization=0,oe(),b(),a(`religionsBody`).querySelectorAll(`div > input, select, span, svg`).forEach(e=>{e.style.removeProperty(`pointer-events`)});let e=a(`religionsAdd`);e.classList.contains(`pressed`)&&e.classList.remove(`pressed`)}function De(t){let[n,i]=r(t,this);try{Religions.add(n,i)}catch(t){y(e(t),!1,`error`);return}t.shiftKey===!1&&X(),_.draw(`religions`),R(),K()}function Oe(){let e=`Id,Name,Color,Type,Form,Supreme Deity,Area ${d(`2`)},Believers,Origins,Potential,Expansionism`,n=F.view().all.map(e=>{let t=l(e.area??0),n=f((e.rural??0)*options.map.units.population.scale+(e.urban??0)*options.map.units.population.scale*options.map.units.population.urbanization.rate),r=`"${e.deity||``}"`,i=`"${(e.origins??[]).filter(e=>!!e).map(e=>pack.religions[e].name).join(`, `)}"`;return[e.i,e.name,e.color??``,e.type??``,e.form??``,r,t,n,i,e.expansion??``,e.i?e.expansionism??``:``].join(`,`)});t([e].concat(n).join(`
`),`${o(`Religions`)}.csv`)}function ke(){let e=+this.closest(`.states`).dataset.id;S.NotesEditor.open({type:`religion`,id:e})}function Ae(){let e=+this.closest(`.states`).dataset.id,t=i(`#relig`).select(`#religion${e}`).node();t&&v(t,4)}function Z(){if(customization)return;let e=+this.closest(`.states`).dataset.id,t=this.classList;Religions.setLocked(e,!pack.religions[e].lock),t.toggle(`icon-lock-open`),t.toggle(`icon-lock`)}function Q(e){!e&&!a(`religionsAutoChange`).checked||(Religions.recalculate(),_.draw(`religions`),R(),K())}function je(){i(`#debug`).select(`#religionCenters`).remove(),customization===8&&X(),S.ColorPicker.close();let e=F.view();e.rows=[],e.all=[],$(`#religionsEditor`).dialog(`destroy`),a(`religionsEditor`).remove()}var Me={open:I,showHierarchy:J};export{Me as ReligionsEditor};