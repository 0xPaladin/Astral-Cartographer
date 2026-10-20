import{Gt as e,L as t,On as n,P as r,Yn as i,ct as a,rr as o}from"./utils-CNyvX_4Z.js";import{d as s,l as c,s as l,t as u}from"./layers-BLilOnUL.js";import{t as d}from"./drag-ZPCFys_e.js";import{t as f}from"./natural-kerJ22Hb.js";import{i as p,r as m}from"./tooltips-DY0u1iQZ.js";import{i as h}from"./viewport-C0deAIKO.js";import{t as g}from"./controllers-CcOoWo4P.js";import{i as _,n as v,o as y,r as b}from"./dialog-helpers-CHDy2eFe.js";import{r as x}from"./notes-BdtocxG6.js";import{t as ee}from"./viewbox-events-fm-stbSj.js";import"./index-CUjhdmz8.js";import{t as te}from"./label-arc-B6FhcnRk.js";var S=``,C;function w(e,t){if(customization)return;v(`.stable`),u.show(`labels`);let r=document.querySelector(`#labels text[data-label-type='${e}'][data-id='${t}']`);if(!r)return;let i=l(e,t);i&&(C={...i},Q(r.id),n(`#viewbox`).on(`touchmove mousemove`,M),T(),$(`#labelEditor`).dialog({title:`Edit Label`,resizable:!1,width:`fit-content`,position:{my:`center top+10`,at:`bottom`,of:r,collision:`fit`},close:he}),N(),E(C.group),k(),D())}function T(){_(`labelEditor`);let e=`<div id="labelEditor" class="dialog">
      <button id="labelGroupShow" data-tip="Show the group selection" class="icon-tags"></button>
      <div id="labelGroupSection" style="display: none">
        <button id="labelGroupHide" data-tip="Hide the group selection" class="icon-tags"></button>
        <select id="labelGroupSelect" data-tip="Select a group for this label" style="width: 10em"></select>
        <button
          id="labelGroupsConfigure"
          data-tip="Open the Label Groups Configurator to create, edit and reorder groups"
          class="icon-cog"
        ></button>
      </div>
      <button id="labelTextShow" data-tip="Show the edit label text section" class="icon-pencil"></button>
      <div id="labelTextSection" style="display: none">
        <button id="labelTextHide" data-tip="Hide the edit label text section" class="icon-pencil"></button>
        <input
          id="labelText"
          data-tip='Type to change the label. Enter "|" to move to a new line'
          style="width: 12em"
        />
        <span id="labelTextSpeak" data-tip="Speak the name. You can change voice and language in options" class="speaker">🔊</span>
        <span id="labelTextRandom" data-tip="Generate random name" class="icon-shuffle pointer"></span>
      </div>
      <button id="labelEditStyle" data-tip="Edit label group style in Style Editor" class="icon-brush"></button>
      <button id="labelPathToggle"></button>
      <button id="labelSizeShow" data-tip="Show the font size section" class="icon-text-height"></button>
      <div id="labelSizeSection" style="display: none">
        <button id="labelSizeHide" data-tip="Hide the font size section" class="icon-text-height"></button>
        <span data-tip="Set relative size for the particular label">Size:</span>
        <input
          id="labelRelativeSize"
          data-tip="Set relative size for the particular label (% of group default)"
          type="number"
          min="30"
          max="300"
          step="1"
          style="width: 4.5em"
        />
      </div>
      <button id="labelOffsetShow" data-tip="Show the label offset section" class="icon-sliders"></button>
      <div id="labelOffsetSection" style="display: none">
        <button id="labelOffsetHide" data-tip="Hide the label offset section" class="icon-sliders"></button>
        <span data-tip="Set starting offset for the particular label">Offset:</span>
        <input
          id="labelStartOffset"
          data-tip="Set starting offset for the particular label (% along the path)"
          type="range"
          min="20"
          max="80"
          style="width: 8em"
        />
        <input
          id="labelStartOffsetValue"
          type="number"
          min="20"
          max="80"
          step="1"
          style="width: 3.5em"
          data-tip="Set starting offset numerically"
        />
      </div>
      <button id="labelLetterSpacingShow" data-tip="Show the letter spacing section" class="icon-text-width"></button>
      <div id="labelLetterSpacingSection" style="display: none">
        <button
          id="labelLetterSpacingHide"
          data-tip="Hide the letter spacing section"
          class="icon-text-width"
        ></button>
        <slider-input
          id="labelLetterSpacingSize"
          style="display: inline-block"
          data-tip="Set the letter spacing size for this label"
          min="0"
          max="20"
          step=".01"
          value="0"
        ></slider-input>
      </div>
      <button id="labelVisibility"></button>
      ${y(`labelLegend`,`this label`)}
      <button id="labelReset" data-tip="Restore the default label" class="icon-arrows-cw"></button>
      <button
        id="labelRemoveSingle"
        data-tip="Remove the label"
        data-shortcut="Delete"
        class="icon-trash fastDelete"
      ></button>
    </div>`;r(`dialogs`).insertAdjacentHTML(`beforeend`,e),r(`labelGroupShow`).addEventListener(`click`,B),r(`labelGroupHide`).addEventListener(`click`,V),r(`labelGroupSelect`).addEventListener(`change`,H),r(`labelGroupsConfigure`).addEventListener(`click`,()=>void g.LabelGroupsConfigurator.open()),r(`labelTextShow`).addEventListener(`click`,U),r(`labelTextHide`).addEventListener(`click`,W),r(`labelText`).addEventListener(`input`,G),r(`labelTextSpeak`).addEventListener(`click`,()=>a(r(`labelText`).value)),r(`labelTextRandom`).addEventListener(`click`,q),r(`labelEditStyle`).addEventListener(`click`,ne),r(`labelSizeShow`).addEventListener(`click`,J),r(`labelSizeHide`).addEventListener(`click`,Y),r(`labelOffsetShow`).addEventListener(`click`,X),r(`labelOffsetHide`).addEventListener(`click`,re),r(`labelStartOffset`).addEventListener(`input`,oe),r(`labelStartOffsetValue`).addEventListener(`input`,se),r(`labelRelativeSize`).addEventListener(`input`,ce),r(`labelLetterSpacingShow`).addEventListener(`click`,ie),r(`labelLetterSpacingHide`).addEventListener(`click`,ae),r(`labelLetterSpacingSize`).addEventListener(`input`,le),r(`labelPathToggle`).addEventListener(`click`,ue),r(`labelVisibility`).addEventListener(`click`,de),r(`labelLegend`).addEventListener(`click`,fe),r(`labelReset`).addEventListener(`click`,me),r(`labelRemoveSingle`).addEventListener(`click`,pe)}function E(e){S=e,V();let t=r(`labelGroupSelect`);t.options.length=0;for(let n of options.map.labels.groups)t.options.add(new Option(n.name,n.name,!1,n.name===e))}function D(){let e=O(),t=!r(`labelEditor`).classList.contains(`section-open`);r(`labelOffsetShow`).style.display=t&&e?`inline-block`:`none`,r(`labelRemoveSingle`).style.display=t&&C.type===`added`?`inline-block`:`none`,r(`labelReset`).style.display=t&&Labels.hasOverride(C.type,C.entityId)?`inline-block`:`none`;let n=r(`labelPathToggle`);n.className=e?`icon-resize-horizontal`:`icon-bezier-curve`,n.dataset.tip=e?`Remove the label path, render the label as a straight text`:`Curve the label along a path`;let i=r(`labelVisibility`);i.className=C.hidden?`icon-eye-off`:`icon-eye`,i.dataset.tip=C.hidden?`Show the label`:`Hide the label. You can toggle it on later in Labels Overview`}function O(){return!!C.pathPoints?.length}function k(){let e=C.startOffset||50;r(`labelText`).value=C.text||``,r(`labelStartOffset`).value=String(e),r(`labelStartOffsetValue`).value=String(e),r(`labelRelativeSize`).value=String(C.fontSize??100),r(`labelLetterSpacingSize`).value=String(C.letterSpacing??0)}function A(){r(`labelEditor`).classList.add(`section-open`),document.querySelectorAll(`#labelEditor > button`).forEach(e=>{e.style.display=`none`})}function j(){r(`labelEditor`).classList.remove(`section-open`),document.querySelectorAll(`#labelEditor > button`).forEach(e=>{e.style.display=`inline-block`}),D()}function M(e){m();let t=e.target,n=t.parentNode;t.closest(`#${C.id}`)?p(`Drag to move the label`):n?.id===`controlPoints`&&(t.tagName===`circle`&&p(`Drag to move, click to delete the control point`),t.tagName===`path`&&p(`Click to add a control point`))}function N(){if(n(`#debug`).select(`#controlPoints`).remove(),!O())return;let e=C.dx||C.dy?`translate(${C.dx||0}, ${C.dy||0})`:null;n(`#debug`).append(`g`).attr(`id`,`controlPoints`).attr(`transform`,e).append(`path`).attr(`d`,s(C)).style(`stroke-width`,Math.max(2.2/h.scale,.2)).on(`click`,R),C.pathPoints?.forEach(P)}function P(e){n(`#debug`).select(`#controlPoints`).append(`circle`).attr(`cx`,e[0]).attr(`cy`,e[1]).attr(`r`,Math.max(3/h.scale,.35)).style(`stroke-width`,Math.max(1/h.scale,.15)).call(d().on(`drag`,F)).on(`click`,L)}function F(e){this.setAttribute(`cx`,e.x),this.setAttribute(`cy`,e.y),I()}function I(){let t=[];n(`#debug > #controlPoints`).selectAll(`circle`).each(function(){let e=o(+this.getAttribute(`cx`),2),n=o(+this.getAttribute(`cy`),2);t.push([e,n])});let r=i(e().curve(f)(t)||``);n(`#debug`).select(`#controlPoints > path`).attr(`d`,r),C.pathPoints=t,Z(),t.length||N()}function L(){this.remove(),I()}function R(e){let r=t(e,this),i=[];n(`#debug #controlPoints`).selectAll(`circle`).each(function(){let e=+this.getAttribute(`cx`),t=+this.getAttribute(`cy`);i.push((r[0]-e)**2+(r[1]-t)**2)});let a=i.length;if(i.length>1){let e=i.slice(0).sort((e,t)=>e-t),t=i.indexOf(e[0]),n=i.indexOf(e[1]);a=t<=n?t+1:n+1}let o=`:nth-child(${a+2})`;n(`#debug`).select(`#controlPoints`).insert(`circle`,o).attr(`cx`,r[0]).attr(`cy`,r[1]).attr(`r`,2.5).attr(`stroke-width`,.8).call(d().on(`drag`,F)).on(`click`,L),I()}function z(e){let t=(C.dx||0)-e.x,r=(C.dy||0)-e.y;e.on(`drag`,e=>{C.dx=o(t+e.x,2),C.dy=o(r+e.y,2);let i=`translate(${C.dx}, ${C.dy})`;this.setAttribute(`transform`,i),n(`#debug #controlPoints`).attr(`transform`,i)}),e.on(`end`,()=>Z())}function B(){A(),r(`labelGroupSection`).style.display=`inline-block`}function V(){j(),r(`labelGroupSection`).style.display=`none`}function H(){let e=this.value,t=options.map.labels.groups.find(t=>t.name===e)?.type,n=()=>{S=e,C.group=e,Z()};if(t===C.type)return void n();b({title:`Assign cross-type Label Group`,message:`Assign this ${C.type} label to the ${t} group "${e}"? It's better to avoid such cross-type assignment.`,confirm:`Assign`,onConfirm:n,onCancel:()=>{this.value=C.group}})}function U(){A(),r(`labelTextSection`).style.display=`inline-block`}function W(){j(),r(`labelTextSection`).style.display=`none`}function G(){let e=r(`labelText`).value;C.text=e,Z(),C.type===`state`&&p(`Use States Editor to change the actual state name, not just a label`,!1,`warn`),C.type===`province`&&p(`Use Provinces Editor to change the actual province name, not just a label`,!1,`warn`)}var K={burg:e=>Names.getCulture(pack.burgs[e.entityId].culture??0),state:e=>{let t=pack.states[e.entityId].culture;return Names.getState(Names.getCulture(t,4,7,``),t)},province:e=>{let t=pack.provinces[e.entityId];return Names.getState(t.name,pack.cells.culture[t.center])},added:e=>{let t=Pack.findCell(...e.anchor);return t?Names.getCulture(pack.cells.culture[t]):``},river:e=>{let t=Pack.findCell(...e.anchor);return t?Rivers.getName(t):``},route:e=>{let t=pack.routes.find(t=>t.i===e.entityId)?.points??[];return Routes.generateName({group:e.group,points:t})||`Unnamed route segment`}};function q(){r(`labelText`).value=K[C.type](C),G()}function ne(){g.StyleEditor.open(`labels`,C.group)}function J(){A(),r(`labelSizeSection`).style.display=`inline-block`}function Y(){j(),r(`labelSizeSection`).style.display=`none`}function X(){A(),r(`labelOffsetSection`).style.display=`inline-block`}function re(){j(),r(`labelOffsetSection`).style.display=`none`}function ie(){A(),r(`labelLetterSpacingSection`).style.display=`inline-block`}function ae(){j(),r(`labelLetterSpacingSection`).style.display=`none`}function oe(){if(!O())return;let e=this.value;r(`labelStartOffsetValue`).value=e,C.startOffset=+e,Z(),p(`Label offset: ${e}%`)}function se(){if(!O())return;let e=Math.min(80,Math.max(20,+this.value));r(`labelStartOffset`).value=String(e),this.value=String(e),C.startOffset=e,Z(),p(`Label offset: ${e}%`)}function ce(){C.fontSize=+this.value,Z(),p(`Label relative size: ${this.value}%`)}function le(){C.letterSpacing=+this.value,Z(),p(`Label letter-spacing size: ${this.value}px`)}function ue(){C.pathPoints=O()?[]:te(C),Z(),N()}function de(){C.hidden?delete C.hidden:C.hidden=!0,Z()}function fe(){let e=x.resolveElement(C.id);e&&g.NotesEditor.open(e)}function pe(){alertMessage.innerHTML=`Are you sure you want to remove the label?`,$(`#alert`).dialog({resizable:!1,title:`Remove label`,buttons:{Remove:function(){$(this).dialog(`close`),C.type===`added`&&(AddedLabels.remove(C.entityId),u.draw(`labels`),$(`#labelEditor`).dialog(`close`))},Cancel:function(){$(this).dialog(`close`)}}})}function Z(){let e=Labels.getEntity(C.type,C.entityId);e&&(e.label=ge(),c(C),Q(C.id),D())}function Q(e){n(`#${e}`).call(d().on(`start`,z)).classed(`draggable`,!0)}function me(){let{type:e,entityId:t}=C;Labels.reset(e,t),u.draw(`labels`),C={...l(e,t)??C},Q(C.id),E(C.group),k(),D(),N()}function he(){n(`#debug`).select(`#controlPoints`).remove(),n(`#${C.id}`).on(`.drag`,null).classed(`draggable`,!1),ee(),$(`#labelEditor`).dialog(`destroy`),r(`labelEditor`).remove()}function ge(){return{text:C.text,group:C.group,dx:C.dx,dy:C.dy,fontSize:C.fontSize,letterSpacing:C.letterSpacing,pathPoints:C.pathPoints??[],startOffset:C.startOffset,hidden:C.hidden}}var _e={open:w,getLastSelectedGroup:()=>S};export{_e as LabelsEditor};