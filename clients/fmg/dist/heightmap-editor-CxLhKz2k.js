import{F as e,Fn as t,H as n,Hn as r,J as i,L as a,N as o,Nn as s,On as c,P as l,Pt as u,U as d,Un as f,V as p,Y as m,Yt as h,Zt as g,at as _,bn as v,dn as y,er as b,fn as x,gn as S,mn as C,on as ee,pn as te,rr as w,tr as ne,vn as re,yn as ie}from"./utils-CNyvX_4Z.js";import{t as T,tt as ae}from"./layers-BLilOnUL.js";import{t as oe}from"./mean-4Awewi9R.js";import{t as se}from"./drag-ZPCFys_e.js";import{n as ce}from"./sin-DYm9hqTl.js";import{o as le}from"./emblems-generator-CuSOzr1f.js";import{i as E,r as ue,t as de}from"./tooltips-DY0u1iQZ.js";import{i as fe}from"./viewport-C0deAIKO.js";import{t as D}from"./state-B2hBYDzv.js";import{t as pe}from"./controllers-CcOoWo4P.js";import{a as me,r as he,t as ge}from"./generation-pipeline-D3tlYnwn.js";import{c as _e,i as O,n as ve}from"./dialog-helpers-CHDy2eFe.js";import{t as ye}from"./view-mode-sYoYTddZ.js";import{t as be}from"./graph-override-DXl10Onp.js";import{t as xe}from"./viewbox-events-fm-stbSj.js";import{a as Se,o as Ce}from"./index-CUjhdmz8.js";import{t as we}from"./brushUtils-B5xtY9tr.js";var k=18,Te=.96422,Ee=1,De=.82521,Oe=4/29,A=6/29,ke=3*A*A,Ae=A*A*A;function je(e){if(e instanceof j)return new j(e.l,e.a,e.b,e.opacity);if(e instanceof F)return Ie(e);e instanceof C||(e=re(e));var t=P(e.r),n=P(e.g),r=P(e.b),i=Ne((.2225045*t+.7168786*n+.0606169*r)/Ee),a,o;return t===n&&n===r?a=o=i:(a=Ne((.4360747*t+.3850649*n+.1430804*r)/Te),o=Ne((.0139322*t+.0971045*n+.7141733*r)/De)),new j(116*i-16,500*(a-i),200*(i-o),e.opacity)}function Me(e,t,n,r){return arguments.length===1?je(e):new j(e,t,n,r??1)}function j(e,t,n,r){this.l=+e,this.a=+t,this.b=+n,this.opacity=+r}ie(j,Me,v(te,{brighter(e){return new j(this.l+k*(e??1),this.a,this.b,this.opacity)},darker(e){return new j(this.l-k*(e??1),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,n=isNaN(this.b)?e:e-this.b/200;return t=Te*M(t),e=Ee*M(e),n=De*M(n),new C(N(3.1338561*t-1.6168667*e-.4906146*n),N(-.9787684*t+1.9161415*e+.033454*n),N(.0719453*t-.2289914*e+1.4052427*n),this.opacity)}}));function Ne(e){return e>Ae?e**(1/3):e/ke+Oe}function M(e){return e>A?e*e*e:ke*(e-Oe)}function N(e){return 255*(e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055)}function P(e){return(e/=255)<=.04045?e/12.92:((e+.055)/1.055)**2.4}function Pe(e){if(e instanceof F)return new F(e.h,e.c,e.l,e.opacity);if(e instanceof j||(e=je(e)),e.a===0&&e.b===0)return new F(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);var t=Math.atan2(e.b,e.a)*y;return new F(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function Fe(e,t,n,r){return arguments.length===1?Pe(e):new F(e,t,n,r??1)}function F(e,t,n,r){this.h=+e,this.c=+t,this.l=+n,this.opacity=+r}function Ie(e){if(isNaN(e.h))return new j(e.l,0,0,e.opacity);var t=e.h*x;return new j(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}ie(F,Fe,v(te,{brighter(e){return new F(this.h,this.c,this.l+k*(e??1),this.opacity)},darker(e){return new F(this.h,this.c,this.l-k*(e??1),this.opacity)},rgb(){return Ie(this).rgb()}}));var I=[{stroke:`#888`,width:.4,opacity:.8},{stroke:`#444`,width:.5,opacity:.8},{stroke:`#3d9df0`,width:.8,opacity:1},{stroke:`#1a6fd6`,width:1,opacity:1},{stroke:`#0a49ad`,width:1.2,opacity:1}],Le=2,Re=14,ze=.5;function Be(t){let{cells:n,points:r,spacing:i}=grid,a=t?Grid.findDeepDepressionLakes(n,options.generation.lakeElevationLimit):[],s=Uint8Array.from(n.h);for(let e of a)for(let t of e)s[t]=19;let{target:c,flux:u,depth:d,river:f}=We({...n,h:s},Ve(s)),p=i/Re,m=i*.25,h=w(i*.35,2),g=I.map(()=>[]),_=[],v=e=>ne(Math.floor(Math.log2(u[e]/30)/2)+Le,0,f[e]?I.length-1:Le-1),y=e=>w(Math.min(.5+e/30,1),2);for(let e of n.i){if(d[e]>=ze&&_.push(`<polygon points="${Grid.getPolygon(e)}" fill-opacity="${y(d[e])}"/>`),c[e]===-1)continue;let[t,n]=r[e],[i,a]=r[c[e]],o=i-t,s=a-n,l=Math.hypot(o,s)||1,u=o/l,f=s/l,[p,h]=[t+u*l*.15,n+f*l*.15],[b,x]=[t+u*l*.7,n+f*l*.7],[S,C]=[b-m*(u*.87-f*.5),x-m*(f*.87+u*.5)],[ee,te]=[b-m*(u*.87+f*.5),x-m*(f*.87-u*.5)];g[v(e)].push(`M${w(p,1)},${w(h,1)}L${w(b,1)},${w(x,1)}M${w(S,1)},${w(C,1)}L${w(b,1)},${w(x,1)}L${w(ee,1)},${w(te,1)}`)}let b=g.map((e,t)=>{if(!e.length)return``;let{stroke:n,width:r,opacity:i}=I[t],a=`stroke="${n}" stroke-width="${w(r*p,2)}" opacity="${i}"`;return`<path d="${e.join(``)}" ${a}/>`}),x=a.flat().map(e=>`<polygon points="${Grid.getPolygon(e)}"/>`),S=()=>{let t=e(`drainage`);if(t)return t;let n=o(`g`,`drainage`,{"pointer-events":`none`});return l(`debug`).append(n),n};S().innerHTML=`
    <pattern id="drainageHatch" width="${h}" height="${h}" patternUnits="userSpaceOnUse">
      <path d="M0,${h}L${h},0" stroke="#333" stroke-width="${w(.5*p,2)}"/>
    </pattern>
    <pattern id="drainageLakeHatch" width="${h}" height="${h}" patternUnits="userSpaceOnUse">
      <path d="M0,0L${h},${h}" stroke="#1a5fc8" stroke-width="${w(.8*p,2)}"/>
    </pattern>
    <g fill="url(#drainageHatch)" stroke="#000" stroke-width="${w(.3*p,2)}">${_.join(``)}</g>
    <g fill="url(#drainageLakeHatch)" stroke="#1a5fc8" stroke-width="${w(.5*p,2)}">${x.join(``)}</g>
    <g fill="none">${b.join(``)}</g>`}var Ve=e=>Precipitation.compute(e,Temperature.compute(e));function He(){e(`drainage`)?.remove()}var Ue=1e-4;function We(e,t){let{c:n,b:r,h:i}=e,a=e.i.length,o=new Float64Array(a),s=new Uint8Array(a),c=new FlatQueue;for(let e=0;e<a;e++)i[e]>=20&&!r[e]||(o[e]=i[e],s[e]=1,c.push(e,i[e]));for(;c.length;){let e=c.pop();for(let t of n[e])s[t]||(s[t]=1,o[t]=Math.max(i[t],o[e]+Ue),c.push(t,o[t]))}let l=new Int32Array(a).fill(-1),u=new Float32Array(a),d=new Float32Array(a),f=[];for(let e=0;e<a;e++)if(!(i[e]<20||r[e])){f.push(e),d[e]=o[e]-i[e];for(let t of n[e])o[t]<o[l[e]===-1?e:l[e]]&&(l[e]=t)}let p=(Grid.getCellsDesired()/1e4)**.25;f.sort((e,t)=>o[t]-o[e]);for(let e of f)u[e]=Math.floor(u[e]+t[e]/p),l[e]!==-1&&(u[l[e]]+=u[e]);let m=new Uint8Array(a);for(let e of f)u[e]<30||l[e]===-1||(i[l[e]]>=20&&(m[e]=1),m[l[e]]=1);return{target:l,flux:u,depth:d,river:m}}var Ge=g(h),L=`heightmapEditor`,Ke=[`renderOcean`,`showDrainage`,`allowErosion`],qe=100,R,z=null,B=null;function Je(e){R=D.get(L,`filters`,()=>({cellType:`all`})),[`all`,`land`,`water`].includes(R.cellType)||(R.cellType=`all`),D.set(L,`filters`,R);let{mode:t,tool:n}=e||{};HeightmapGenerator.clearData(),ct(),c(`#viewbox`).selectAll(`#heights`).remove(),c(`#viewbox`).insert(`g`,`#terrs`).attr(`id`,`heights`),t?H(t,n):et(n)}Qe();function Ye(){O(`templateEditor`),l(`dialogs`).insertAdjacentHTML(`beforeend`,`<div id="templateEditor" class="dialog stable">
      <div id="templateTop">
        <i>Select template: </i>
        <select id="templateSelect" style="width: 16em" data-prev="templateCustom" data-tip="Select base template">
          <option value="custom" selected>Custom</option>
          <option value="volcano">Volcano</option>
          <option value="highIsland">High Island</option>
          <option value="lowIsland">Low Island</option>
          <option value="continents">Continents</option>
          <option value="archipelago">Archipelago</option>
          <option value="atoll">Atoll</option>
          <option value="mediterranean">Mediterranean</option>
          <option value="peninsula">Peninsula</option>
          <option value="pangea">Pangea</option>
          <option value="isthmus">Isthmus</option>
          <option value="shattered">Shattered</option>
          <option value="taklamakan">Taklamakan</option>
          <option value="oldWorld">Old World</option>
          <option value="fractious">Fractious</option>
        </select>
      </div>
      <div id="templateTools">
        <button data-type="Hill" data-tip="Hill: small blob">H</button>
        <button data-type="Pit" data-tip="Pit: round depression">P</button>
        <button data-type="Range" data-tip="Range: elongated elevation">R</button>
        <button data-type="Trough" data-tip="Trough: elongated depression">T</button>
        <button data-type="Strait" data-tip="Strait: centered vertical or horizontal depression">S</button>
        <button data-type="Mask" data-tip="Mask: lower cells near edges or in map center">M</button>
        <button data-type="Invert" data-tip="Invert heightmap along the axes">I</button>
        <button data-type="Add" data-tip="Add or subtract value from all heights in range">+</button>
        <button data-type="Multiply" data-tip="Multiply all heights in range by factor">*</button>
        <button
          data-type="Smooth"
          data-tip="Smooth the map replacing cell heights by an average values of its neighbors"
        >
          ~
        </button>
      </div>
      <div id="templateBody" data-changed="0" class="table" style="padding: 2px 0">
        <div data-type="Hill">
          <div class="icon-check" data-tip="Click to skip the step"></div>
          <div style="width: 4em">Hill</div>
          <i class="icon-trash-empty pointer" data-tip="Remove the step"></i>
          <i class="icon-resize-vertical" data-tip="Drag to reorder"></i>
          <span
            >y:<input class="templateY" data-tip="Y axis position in percentage (minY-maxY or Y)" value="47-53"
          /></span>
          <span
            >x:<input class="templateX" data-tip="X axis position in percentage (minX-maxX or X)" value="65-75"
          /></span>
          <span
            >h:<input
              class="templateHeight"
              data-tip="Blob maximum height, use hyphen to get a random number in range"
              value="90-100"
          /></span>
          <span
            >n:<input
              class="templateCount"
              data-tip="Blobs to add, use hyphen to get a random number in range"
              value="1"
          /></span>
        </div>
      </div>
      <div id="templateBottom">
        <button id="templateRun" data-tip="Execute the template" class="icon-play-circled2"></button>
        <button id="templateUndo" data-tip="Undo the latest action" class="icon-ccw" disabled></button>
        <button id="templateRedo" data-tip="Redo the action" class="icon-cw" disabled></button>
        <button id="templateSave" data-tip="Download the template as a text file" class="icon-download"></button>
        <button id="templateLoad" data-tip="Open previously downloaded template" class="icon-upload"></button>
        <button
          id="templateCA"
          data-tip="Find or share custom template on Cartography Assets portal"
          class="icon-drafting-compass"
          onclick="
            openURL('https://cartographyassets.com/asset-category/specific-assets/azgaars-generator/templates')
          "
        ></button>
        <button
          id="templateTutorial"
          data-tip="Open Template Editor Tutorial"
          class="icon-info"
          onclick="wiki('Heightmap-template-editor')"
        ></button>
        <label
          data-tip="Enter seed for template to generate the same heightmap each time"
        >
          Seed: <input id="templateSeed" value="" type="number" min="1" max="999999999" step="1" style="width: 8em" />
        </label>
      </div>
    </div>`);let e=l(`templateBody`);$(`#templateBody`).sortable({items:`> div`,handle:`.icon-resize-vertical`,containment:`#templateBody`,axis:`y`}),e.addEventListener(`click`,t=>{let n=t.target;if(n.classList.contains(`icon-check`)){n.classList.remove(`icon-check`),n.classList.add(`icon-check-empty`),n.parentElement.style.opacity=`0.5`,e.dataset.changed=`1`;return}if(n.classList.contains(`icon-check-empty`)){n.classList.add(`icon-check`),n.classList.remove(`icon-check-empty`),n.parentElement.style.opacity=`1`;return}n.classList.contains(`icon-trash-empty`)&&n.parentElement.remove()}),l(`templateEditor`).addEventListener(`keypress`,e=>{e.key===`Enter`&&(e.preventDefault(),Ft())}),l(`templateTools`).addEventListener(`click`,kt),l(`templateSelect`).addEventListener(`change`,Nt),l(`templateRun`).addEventListener(`click`,Ft),l(`templateUndo`).addEventListener(`click`,()=>Q(edits.n-1)),l(`templateRedo`).addEventListener(`click`,()=>Q(edits.n+1)),l(`templateSave`).addEventListener(`click`,It),l(`templateLoad`).addEventListener(`click`,Lt)}function Xe(){O(`imageConverter`),l(`dialogs`).insertAdjacentHTML(`beforeend`,`<div id="imageConverter" class="dialog stable">
      <div id="convertImageButtons">
        <button id="convertImageLoad" data-tip="Load image to convert" class="icon-upload"></button>
        <button
          id="convertAutoLum"
          data-tip="Auto-assign colors based on liminosity (good for monochrome images)"
          class="icon-adjust"
        ></button>
        <button
          id="convertAutoHue"
          data-tip="Auto-assign colors based on hue (good for colored images)"
          class="icon-paint-roller"
        ></button>
        <button
          id="convertAutoFMG"
          data-tip="Auto-assign colors using generator scheme (for exported colored heightmaps)"
          class="icon-layer-group"
        ></button>
        <button id="convertColorsButton" data-tip="Set maximum number of colors" class="icon-signal"></button>
        <input id="convertColors" value="100" style="display: none" />
        <button
          id="convertCancel"
          data-tip="Cancel the conversion. Previous heightmap will be restored"
          class="icon-cancel"
        ></button>
      </div>
      <div data-tip="Set opacity of the loaded image" style="padding-top: 0.4em">
        <i>Overlay opacity:</i><br />
        <input id="convertOverlay" type="range" min="0" max="1" step=".01" value="0" style="width: 12.6em" />
        <input id="convertOverlayNumber" type="number" min="0" max="1" step=".01" value="0" style="width: 4.2em" />
      </div>
      <div data-tip="Select a color below and assign a height value for it" id="colorsSelect" style="display: none">
        <i>Set height: </i>
        <span id="colorsSelectValue"></span>
        <span>(<span id="colorsSelectFriendly">0</span>)</span><br />
        <div id="imageConverterPalette"></div>
      </div>
      <div data-tip="Select a color to re-assign the height value" id="colorsAssigned" style="display: none">
        <i>Assigned colors (<span id="colorsAssignedNumber"></span>):</i>
        <div id="colorsAssignedContainer" class="colorsContainer"></div>
      </div>
      <div data-tip="Select a color to assign a height value" id="colorsUnassigned" style="display: none">
        <i>Unassigned colors (<span id="colorsUnassignedNumber"></span>):</i>
        <div id="colorsUnassignedContainer" class="colorsContainer"></div>
      </div>
      <button
        id="convertComplete"
        data-tip="Complete the conversion. All unassigned colors will be considered as ocean"
        style="margin: 0.4em 0"
        class="glow"
      >
        Complete the conversion
      </button>
    </div>`),c(`#imageConverterPalette`).selectAll(`div`).data(s(101)).enter().append(`div`).attr(`data-color`,e=>e).style(`background-color`,e=>Ge(1-(e<20?e-5:e)/100)).style(`width`,e=>e<40||e>68?`.2em`:`.1em`).on(`touchmove mousemove`,Vt).on(`click`,Kt),l(`convertImageLoad`).addEventListener(`click`,zt),l(`convertAutoLum`).addEventListener(`click`,()=>qt(`lum`)),l(`convertAutoHue`).addEventListener(`click`,()=>qt(`hue`)),l(`convertAutoFMG`).addEventListener(`click`,()=>qt(`scheme`)),l(`convertColorsButton`).addEventListener(`click`,Jt),l(`convertComplete`).addEventListener(`click`,Xt),l(`convertCancel`).addEventListener(`click`,Zt),l(`convertOverlay`).addEventListener(`input`,function(){Yt(+this.value)}),l(`convertOverlayNumber`).addEventListener(`input`,function(){Yt(+this.value)})}var Ze=[];function Qe(){l(`paintBrushes`).addEventListener(`click`,lt),l(`applyTemplate`).addEventListener(`click`,Dt),l(`convertImage`).addEventListener(`click`,Bt),l(`heightmapPreview`).addEventListener(`click`,en),l(`heightmap3DView`).addEventListener(`click`,ye),l(`finalizeHeightmap`).addEventListener(`click`,nt);for(let e of Ke)l(e).addEventListener(`change`,function(){Options.set(t=>t.app.heightmapEditor[e]=this.checked),e===`renderOcean`&&K(),e!==`renderOcean`&&$e()})}function $e(){options.app.heightmapEditor.showDrainage?V():He()}function V(){if(customization!==1||!options.app.heightmapEditor.showDrainage)return;let e=l(`heightmapEditMode`).innerHTML;Be(e!==`keep`&&options.app.heightmapEditor.allowErosion)}function et(e){alertMessage.innerHTML=`Heightmap is a core element on which all other data (rivers, burgs, states etc) is based. So the best edit approach is to
    <i>erase</i> the secondary data and let the system automatically regenerate it on edit completion.
    <p><i>Erase</i> mode also allows you Convert an Image into a heightmap or use Template Editor.</p>
    <p>You can <i>keep</i> the data, but you won't be able to change the coastline.</p>
    <p>Try <i>risk</i> mode to change the coastline and keep the data. The data will be restored as much as possible, but it can cause unpredictable errors.</p>
    <p>Please <span class="pseudoLink" onclick="window.Services.Save.toMachine()">save the map</span> before editing the heightmap!</p>
    <p style="margin-bottom: 0">Check out ${_(`https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Heightmap-customization`,`wiki`)} for guidance.</p>`,$(`#alert`).dialog({resizable:!1,title:`Edit Heightmap`,width:`28em`,buttons:{Erase:()=>H(`erase`,e),Keep:()=>H(`keep`,e),Risk:()=>H(`risk`,e),Cancel:function(){$(this).dialog(`close`)}}})}function H(t,n){Ze=T.state.active,T.set([]),customization=1,ve(),E(`Heightmap edit mode is active. Click on "Exit Customization" to finalize the heightmap`,!0),l(`options`).querySelectorAll(`.tabcontent`).forEach(e=>{e.style.display=`none`}),l(`options`).querySelector(`.tab > .active`).classList.remove(`active`),l(`customizationMenu`).style.display=`block`,l(`toolsTab`).classList.add(`active`),l(`heightmapEditMode`).innerHTML=t;for(let e of Ke)l(e).checked=options.app.heightmapEditor[e];t===`erase`?(he(),R.cellType=`all`):t===`keep`?(T.get(`landmass`).getEl().replaceChildren(),R.cellType=`land`):t===`risk`&&(c(`#deftemp`).selectAll(`#land, #water`).selectAll(`path`).remove(),c(`#deftemp`).select(`#featurePaths`).selectAll(`path`).remove(),c(`#viewbox`).selectAll(`#coastline use, #lakes path, #oceanLayers path`).remove(),R.cellType=`all`);let r=e(`cellTypeFilter`);r&&(r.value=R.cellType),D.set(L,`filters`,R),l(`applyTemplate`).style.display=t===`erase`?`inline-block`:`none`,l(`convertImage`).style.display=t===`erase`?`inline-block`:`none`,l(`allowErosionBox`).style.display=t===`keep`?`none`:`inline-block`;let i=l(`exitCustomization`);if(sessionStorage.getItem(`noExitButtonAnimation`))i.style.display=`block`;else{sessionStorage.setItem(`noExitButtonAnimation`,`true`),i.style.opacity=`0`;let e=12*l(`uiSize`).value*11;i.style.right=`${(fe.width-e)/2}px`,i.style.bottom=`${fe.height/2}px`,i.style.transform=`scale(2)`,i.style.display=`block`,c(`#exitCustomization`).transition().duration(1e3).style(`opacity`,1).transition().duration(2e3).ease(ce).style(`right`,`10px`).style(`bottom`,`10px`).style(`transform`,`scale(1)`)}let a=l(`layersPreset`);a.value=`heightmap`,a.disabled=!0,K(),V(),c(`#viewbox`).on(`touchmove mousemove`,tt),c(`#map`).on(`dblclick.zoom`,null),n===`templateEditor`?Dt():n===`imageConverter`?Bt():lt()}function tt(t){let[n,r]=a(t,this),i=Grid.findCell(n,r);l(`heightmapInfoX`).innerHTML=String(w(n)),l(`heightmapInfoY`).innerHTML=String(w(r)),l(`heightmapInfoCell`).innerHTML=String(i),l(`heightmapInfoHeight`).innerHTML=`${grid.cells.h[i]} (${U(grid.cells.h[i])})`,l(`tooltip`).dataset.main&&ue();let o=e(`brushesButtons`)?.querySelector(`button.pressed`);if(o){if(o.id===`brushLine`){c(`#debug`).select(`line`).attr(`x2`,n).attr(`y2`,r);return}if(o.id===`brushFill`){Ce();return}Se(n,r,l(`heightmapBrushRadius`).valueAsNumber)}}function U(e){let t=options.map.units.height.unit,n=3.281;t===`m`?n=1:t===`f`&&(n=.5468);let r=-990;return e>=20?r=(e-18)**options.map.units.height.exponent:e<20&&e>0&&(r=(e-20)/e*50),`${w(r*n)} ${t}`}async function nt(){if(c(`#viewbox`).select(`#heights`).selectAll(`*`).size()<200){E(`Insufficient land area. There should be at least 200 land cells!`,!1,`error`);return}if(e(`imageConverter`)){E(`Please exit the Image Conversion mode first`,!1,`error`);return}Reflect.deleteProperty(window,`edits`),Y(!0,!0),HeightmapGenerator.clearData(),customization=0,l(`customizationMenu`).style.display=`none`,l(`options`).querySelector(`.tab > button.active`).id===`toolsTab`&&(l(`toolsContent`).style.display=`block`),l(`layersPreset`).disabled=!1,l(`exitCustomization`).style.display=`none`,ve(),xe(),de(),resetZoom(),document.getElementById(`preview`)?.remove(),document.getElementById(`canvas3d`)&&pe.View3d.enterStandard();let t=l(`heightmapEditMode`).innerHTML;try{t===`erase`?await rt():t===`keep`?it():t===`risk`&&st()}catch(e){ERROR&&console.error(e),E(`Failed to apply the edited heightmap: ${e.message}`,!1,`error`,6e3)}c(`#viewbox`).selectAll(`#heights`).remove(),He(),T.draw(`ocean`,`landmass`,`lakes`,`coastline`),T.set(Ze)}async function rt(){pack.cultures=[],pack.burgs=[],pack.states=[],pack.provinces=[],pack.religions=[],pack.relief=[];let e=options.app.heightmapEditor.allowErosion;await ge.run({erosion:e})}function it(){for(let e of pack.cells.i)pack.cells.h[e]=grid.cells.h[pack.cells.g[e]]}var at=e=>{let t=[];for(let n=0;n<e.p.length;n++)e.h[n]>=20&&t.push([e.p[n][0],e.p[n][1],n]);let n=le(t);return(e,t)=>{let r=n.find(e,t);if(r)return n.remove(r),r[2]}};function ot(e){e.capital||pack.markets?.some(t=>t.centerBurgId===e.i)||(Burgs.remove(e.i),ae(`burg`,e.i))}function st(){INFO&&console.group(`Edit Heightmap`),TIME&&console.time(`restoreRiskedData`);let e=options.app.heightmapEditor.allowErosion,t=grid.cells.i.length,n=new Uint8Array(t),r=new Uint16Array(t),i={},a=new Uint16Array(t),o=new Uint16Array(t),s=new Uint16Array(t),l=new Uint16Array(t),u=new Uint16Array(t),d=new Uint16Array(t),p=new Uint16Array(t),m=new Uint16Array(t),h=new Uint16Array(t),g=new Uint8Array(t);for(let t of pack.cells.i){let c=pack.cells.g[t];n[c]=pack.cells.biome[t],u[c]=pack.cells.culture[t],r[c]=pack.cells.pop[t],i[c]=pack.cells.routes[t],a[c]=pack.cells.s[t],s[c]=pack.cells.state[t],l[c]=pack.cells.province[t],o[c]=pack.cells.burg[t],d[c]=pack.cells.religion[t],p[c]=pack.cells.good?.[t]||0,e||(m[c]=pack.cells.fl[t],h[c]=pack.cells.r[t],g[c]=pack.cells.conf[t])}for(let e of grid.cells.i)o[e]&&grid.cells.h[e]<20&&(grid.cells.h[e]=20);for(let e of pack.cultures){if(!e.i||e.removed)continue;let t=pack.cells.p[e.center];e.x=t[0],e.y=t[1]}let _=Features.captureUserData(),v=new Map;for(let e of pack.zones){if(!e.cells?.length)continue;let t=e.cells.map(e=>pack.cells.g[e]);v.set(e.i,f(t))}Features.markupGrid(),e&&Grid.addDeepDepressionLakes(),Temperature.generate(),Precipitation.generate(),Pack.generate(),Features.markupPack(),be.restore(),e&&(Rivers.generate(!0),Features.defineGroups()),Features.restoreUserData(_);let y=pack.cells.i.length;pack.cells.pop=new Float32Array(y),pack.cells.routes={},pack.cells.s=new Uint16Array(y),pack.cells.burg=new Uint16Array(y),pack.cells.state=new Uint16Array(y),pack.cells.province=new Uint16Array(y),pack.cells.culture=new Uint16Array(y),pack.cells.religion=new Uint16Array(y),pack.cells.biome=new Uint8Array(y),pack.cells.good=new Uint16Array(y),e||(pack.cells.r=new Uint16Array(y),pack.cells.conf=new Uint8Array(y),pack.cells.fl=new Uint16Array(y));for(let t of pack.cells.i){let o=pack.cells.g[t],c=pack.cells.h[t]>=20;e||(pack.cells.r[t]=h[o],pack.cells.conf[t]=g[o],pack.cells.fl[t]=m[o]),pack.cells.biome[t]=c&&n[o]?n[o]:Biomes.getId(grid.cells.prec[o],grid.cells.temp[o],pack.cells.h[t],!!pack.cells.r[t]),pack.cells.good[t]=p[o],c&&(pack.cells.culture[t]=u[o],pack.cells.pop[t]=r[o],pack.cells.routes[t]=i[o],pack.cells.s[t]=a[o],pack.cells.state[t]=s[o],pack.cells.province[t]=l[o],pack.cells.religion[t]=d[o])}let b=at(pack.cells);for(let e of pack.burgs){if(!e.i||e.removed)continue;let t=b(e.x,e.y);if(t===void 0){ERROR&&console.error(`[Data integrity] Burg ${e.i} has no available land cell after Risk restoration. Removing the burg`),e.capital&&(pack.states[e.state].capital=e.capital=0);let t=pack.markets?.find(t=>t.centerBurgId===e.i);t&&Markets.removeMarket(t.i),ot(e);continue}e.cell=t,e.feature=pack.cells.f[e.cell],pack.cells.burg[e.cell]=e.i,pack.cells.h[e.cell]<20&&ot(e),e.capital&&(pack.states[e.state].center=e.cell)}for(let e of pack.provinces){if(!e.i||e.removed)continue;let t=pack.cells.i.filter(t=>pack.cells.province[t]===e.i);if(!t.length){let t=e.state,n=pack.states[t].provinces;n.includes(e.i)&&pack.states[t].provinces.splice(n.indexOf(e.i),1),e.removed=!0;continue}e.burg&&!pack.burgs[e.burg].removed?e.center=pack.burgs[e.burg].cell:(e.center=t[0],e.burg=pack.cells.burg[e.center])}for(let e of pack.cultures)!e.i||e.removed||(e.center=Pack.findCell(e.x,e.y));States.getPoles(),States.findNeighbors(),States.collectStatistics(),e&&(Rivers.specify(),Features.defineNames());let x=new Map;for(let e of pack.cells.i){let t=pack.cells.g[e];x.has(t)||x.set(t,[]),x.get(t).push(e)}for(let e of pack.zones){let t=v.get(e.i);t?.length?e.cells=f(t.flatMap(e=>x.get(e)||[])):e.cells=[]}pack.goods?.length?(pack.markets=(pack.markets||[]).filter(e=>{let t=pack.burgs[e.centerBurgId];return!!(t&&!t.removed)}),Production.regenerateEconomy(),T.draw(`markets`,`goods`),T.draw(`trade`),_e()):(Goods.generate(),Markets.generate(),Production.produce(),States.collectTaxes()),Ice.generate(),c(`#ice`).selectAll(`*`).remove(),TIME&&console.timeEnd(`restoreRiskedData`),INFO&&console.groupEnd()}function W(){let t=r(edits),n=grid.cells.h.reduce((e,n,r)=>n===t[r]?e:e+1,0);if(E(`Cells changed: ${n}`),!n)return;let i=e(`cellTypeFilter`)?.value??R.cellType;if(i===`land`)for(let e of grid.cells.i)(t[e]<20||grid.cells.h[e]<20)&&(grid.cells.h[e]=t[e]);if(i===`water`)for(let e of grid.cells.i)(t[e]>=20||grid.cells.h[e]>=20)&&(grid.cells.h[e]=t[e]);K(),X()}var G=e=>m.getColor(e);function K(){let e=Array.from(grid.cells.i),t=options.app.heightmapEditor.renderOcean?e:e.filter(e=>grid.cells.h[e]>=20);c(`#viewbox`).select(`#heights`).selectAll(`polygon`).data(t).join(`polygon`).attr(`points`,e=>String(Grid.getPolygon(e))).attr(`id`,e=>`cell${e}`).attr(`fill`,e=>G(grid.cells.h[e]))}function q(e){let t=options.app.heightmapEditor.renderOcean;e.forEach(e=>{let n=c(`#viewbox`).select(`#heights`).select(`#cell${e}`);if(!t&&grid.cells.h[e]<20){n.remove();return}n.size()||(n=c(`#viewbox`).select(`#heights`).append(`polygon`).attr(`points`,String(Grid.getPolygon(e))).attr(`id`,`cell${e}`)),n.attr(`fill`,G(grid.cells.h[e]))})}function J(){let e=grid.cells.h.reduce((e,t)=>t>=20?e+1:e,0);l(`landmassCounter`).innerText=`${e} (${w(e/grid.cells.i.length*100)}%)`,l(`landmassAverage`).innerText=String(w(oe(grid.cells.h)??0))}function Y(t,n){let r=(r,i)=>{let a=e(r);a&&(a.disabled=t);let o=e(i);o&&(o.disabled=n)};r(`undo`,`redo`),r(`templateUndo`,`templateRedo`)}function X(e){let t=edits.n;if(edits=Object.assign(edits.slice(0,t),{n:t+1}),edits[t]=grid.cells.h.slice(),edits.length>qe){let e=edits.length-qe;edits.splice(0,e),edits.n-=e}Y(edits.n<=1,!0),e||(J(),Z())}function Z(){document.getElementById(`preview`)&&tn(),document.getElementById(`canvas3d`)&&pe.View3d.redraw(),V()}function Q(e){edits.n=e,Y(edits.n<=1,edits.n>=edits.length),edits[edits.n-1]!==void 0&&(grid.cells.h=edits[edits.n-1].slice(),K(),J(),Z())}function ct(){window.edits=Object.assign([],{n:0}),Y(!0,!0),X()}function lt(){document.getElementById(`brushesPanel`)||(ut(),$(`#brushesPanel`).dialog({title:`Paint Brushes`,resizable:!1,position:{my:`right top`,at:`right-10 top+10`,of:`svg`},close:dt}))}function ut(){O(`brushesPanel`);let e=`<div id="brushesPanel" class="dialog stable">
    <div id="brushesButtons" style="display: inline-block">
      <button id="brushRaise" data-tip="Raise brush: increase height of cells in radius by Power value">
        <svg viewBox="15 15 70 70" height="1em" width="1.6em">
          <path d="m20,39 h60 M50,85 v-35 l-12,8 m12,-8 l12,8" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushElevate" data-tip="Elevate brush: drag to gradually increase height of cells in radius by Power value">
        <svg viewBox="15 15 70 70" height="1em" width="1.6em">
          <path d="m20,50 q30,-35 60,0 M50,85 v-35 l-12,8 m12,-8 l12,8" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushLower" data-tip="Lower brush: drag to decrease height of cells in radius by Power value">
        <svg viewBox="15 15 70 70" height="1em" width="1.6em">
          <path d="M50,30 v35 l-12,-8 m12,8 l12,-8 M20,78 h60" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushDepress" data-tip="Depress brush: drag to gradually decrease height of cells in radius by Power value">
        <svg viewBox="15 15 70 70" height="1em" width="1.6em">
          <path d="M50,30 v35 l-12,-8 m12,8 l12,-8 M20,63 q30,35 60,0" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushAlign" data-tip="Align brush: drag to set height of cells in radius to height of the cell at mousepoint">
        <svg viewBox="15 15 70 70" height="1em" width="1.6em">
          <path d="m20,50 h56 m0,20 h-56" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushSmooth" data-tip="Smooth brush: drag to level height of cells in radius to height of adjacent cells">
        <svg viewBox="15 15 70 70" height="1em" width="1.6em">
          <path d="m15,60 q15,-15 30,0 q15,15 35,0" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushDisrupt" data-tip="Disrupt brush: drag to randomize height of cells in radius based on Power value">
        <svg viewBox="15 15 70 70" height="1em" width="1.6em">
          <path d="m15,63 l15,-13 15,20 15,-20 15,19 15,-14" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushFill" data-tip="Fill: click enclosed water or same-height land area to create a cone blob">
        <svg viewBox="20 10 60 60" height="1em" width="1.6em">
          <path d="M30,70 h40 M30,70 q0,-20 20,-20 q20,0 20,20" fill="none" stroke="#000" stroke-width="5" />
          <path d="M50,20 v25 M50,20 l-10,8 M50,20 l10,8" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushLine" data-tip="Line: select two points to change heights along the line">
        <svg viewBox="0 -5 100 100" height="1em" width="1.6em">
          <path d="M0 90 L100 10" fill="none" stroke="#000" stroke-width="7"></path>
        </svg>
      </button>
    </div>
    <div id="brushesSliders" style="display: none">
      <div data-tip="Change brush size. Shortcut: + to increase; – to decrease">
        <slider-input id="heightmapBrushRadius" data-brush-size min="1" max="100" value="25">
          <div style="width: 3.5em">Radius:</div>
        </slider-input>
      </div>
      <div data-tip="Change brush power">
        <slider-input id="heightmapBrushPower" data-brush-size min="1" max="10" value="5">
          <div style="width: 3.5em">Power:</div>
        </slider-input>
      </div>
    </div>
    <div id="lineSlider" style="display: none">
      <div data-tip="Change tool power. Shortcut: + to increase; – to decrease">
        <slider-input id="heightmapLinePower" data-brush-size min="-100" max="100" value="30">
          <div style="width: 5.5em">Power:</div>
        </slider-input>
      </div>
      <div data-tip="Change line randomness. Zero makes the line as straight as possible">
        <slider-input id="heightmapLineRandomness" min="0" max="100" value="30">
          <div style="width: 5.5em">Randomness:</div>
        </slider-input>
      </div>
    </div>
    <div data-tip="Restrict brush to specific cell types" style="margin-bottom: 0.6em">
      <label for="cellTypeFilter"><i>Cells to change:</i></label>
      <select id="cellTypeFilter">
        <option value="all" ${R.cellType===`all`?`selected`:``}>all cells</option>
        <option value="land" ${R.cellType===`land`?`selected`:``}>only land cells</option>
        <option value="water" ${R.cellType===`water`?`selected`:``}>only water cells</option>
      </select>
    </div>
    <div id="modifyButtons">
      <button id="undo" data-tip="Undo the latest action (Ctrl + Z)" class="icon-ccw" disabled></button>
      <button id="redo" data-tip="Redo the action (Ctrl + Y)" class="icon-cw" disabled></button>
      <button id="rescaleShow" data-tip="Show rescaler slider" class="icon-exchange"></button>
      <button id="rescaleCondShow" data-tip="Rescaler: change height if condition is fulfilled" class="icon-if"></button>
      <button id="smoothHeights" data-tip="Smooth all heights a bit" class="icon-smooth"></button>
      <button id="disruptHeights" data-tip="Disrupt (randomize) heights a bit" class="icon-disrupt"></button>
      <button id="brushClear" data-tip="Set height for all cells to 0 (erase the map)" class="icon-eraser"></button>
    </div>
    <div id="rescaleSection" style="display: none">
      <button id="rescaleHide" data-tip="Hide rescaler slider" class="icon-exchange"></button>
      <input id="rescaler" data-tip="Change height for all cells" type="range" min="-10" max="10" step="1" value="0" />
    </div>
    <div
      id="rescaleCondSection"
      data-tip="If height is greater or equal to X and less or equal to Y, then perform an operation Z with operand V"
      style="display: none"
    >
      <button id="rescaleCondHide" data-tip="Hide rescaler" class="icon-if"></button>
      <label>h ≥</label>
      <input id="rescaleLower" value="20" type="number" min="0" max="100" />
      <label>≤</label>
      <input id="rescaleHigher" value="100" type="number" min="1" max="100" />
      <label>⇒</label>
      <select id="conditionSign">
        <option value="multiply" selected>×</option>
        <option value="divide">÷</option>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="exponent">^</option>
      </select>
      <input id="rescaleModifier" type="number" value="0.9" min="0" max="1.5" step="0.01" />
      <button id="rescaleExecute" data-tip="Click to perform an operation" class="icon-play-circled2"></button>
    </div>
  </div>`;l(`dialogs`).insertAdjacentHTML(`beforeend`,e),ft()}function dt(){pt(),O(`brushesPanel`)}function ft(){l(`brushesButtons`).addEventListener(`click`,mt),l(`cellTypeFilter`).addEventListener(`change`,xt),l(`undo`).addEventListener(`click`,()=>Q(edits.n-1)),l(`redo`).addEventListener(`click`,()=>Q(edits.n+1)),l(`rescaleShow`).addEventListener(`click`,()=>{l(`modifyButtons`).style.display=`none`,l(`rescaleSection`).style.display=`block`}),l(`rescaleHide`).addEventListener(`click`,()=>{l(`modifyButtons`).style.display=`block`,l(`rescaleSection`).style.display=`none`}),l(`rescaler`).addEventListener(`change`,e=>St(e.target.valueAsNumber)),l(`rescaleCondShow`).addEventListener(`click`,()=>{l(`modifyButtons`).style.display=`none`,l(`rescaleCondSection`).style.display=`block`}),l(`rescaleCondHide`).addEventListener(`click`,()=>{l(`modifyButtons`).style.display=`block`,l(`rescaleCondSection`).style.display=`none`}),l(`rescaleExecute`).addEventListener(`click`,Ct),l(`smoothHeights`).addEventListener(`click`,wt),l(`disruptHeights`).addEventListener(`click`,Tt),l(`brushClear`).addEventListener(`click`,Et)}function pt(){let e=document.querySelector(`#brushesButtons > button.pressed`);e&&e.classList.remove(`pressed`),xe(),c(`#map`).on(`dblclick.zoom`,null),c(`#viewbox`).on(`touchmove mousemove`,tt),c(`#debug`).selectAll(`#brushCircle, .lineCircle`).remove(),Ce(),l(`brushesSliders`).style.display=`none`,l(`lineSlider`).style.display=`none`}function mt(e){let t=e.target.closest(`#brushesButtons > button`);if(!t)return;if(t.classList.contains(`pressed`)){pt();return}pt(),t.classList.add(`pressed`);let n=l(`heightmapBrushRadius`).parentElement;n&&(n.style.display=t.id===`brushFill`?`none`:``),t.id===`brushLine`?(l(`lineSlider`).style.display=`block`,c(`#viewbox`).style(`cursor`,`crosshair`).on(`click`,ht)):t.id===`brushFill`?(l(`brushesSliders`).style.display=`block`,c(`#viewbox`).style(`cursor`,`crosshair`).on(`click`,gt)):(l(`brushesSliders`).style.display=`block`,c(`#viewbox`).style(`cursor`,`crosshair`).call(se().on(`start`,yt)))}function ht(e){let[t,n]=a(e,this),r=Grid.findCell(t,n),i=c(`#debug`).selectAll(`.lineCircle`);if(!i.size()){c(`#debug`).append(`line`).attr(`id`,`brushCircle`).attr(`x1`,t).attr(`y1`,n).attr(`x2`,t).attr(`y2`,n),c(`#debug`).append(`circle`).attr(`data-cell`,r).attr(`class`,`lineCircle`).attr(`r`,6).attr(`cx`,t).attr(`cy`,n).attr(`fill`,`yellow`).attr(`stroke`,`#333`).attr(`stroke-width`,2);return}let o=+i.attr(`data-cell`);c(`#debug`).selectAll(`*`).remove();let s=l(`heightmapLinePower`).valueAsNumber;if(s===0){E(`Power should not be zero`,!1,`error`);return}let u=l(`heightmapLineRandomness`).valueAsNumber/200,d=grid.cells.h,f=s>0?HeightmapGenerator.addRange.bind(HeightmapGenerator):HeightmapGenerator.addTrough.bind(HeightmapGenerator);HeightmapGenerator.setGraph(grid),f(`1`,String(Math.abs(s)),``,``,o,r,u);let p=HeightmapGenerator.getHeights(),m=l(`cellTypeFilter`).value,h=[];for(let e=0;e<d.length;e++)p[e]!==d[e]&&(m===`land`&&d[e]<20||m===`water`&&d[e]>=20||(d[e]=p[e],h.push(e)));q(h),X()}function gt(e){let[t,n]=a(e,this),r=Grid.findCell(t,n),i=grid.cells.h[r],o=i<20,s=l(`cellTypeFilter`).value;if(s===`water`){E(`Fill brush is not available with 'only water cells' filter`,!1,`error`);return}if(s===`land`&&o){E(`Land filter is active, water areas cannot be filled`,!1,`error`);return}let{selection:c,reachedBorder:u}=_t(r,o,i);if(c.length<3){E(`No enclosed area found to fill`,!1,`error`);return}if(o&&u){E(`Selected water area is open to map border and is not enclosed`,!1,`error`);return}let d=vt(c,o,i);d.length&&(q(d),W())}function _t(e,t,n){let{h:r,c:i,i:a}=grid.cells,o=new Uint8Array(a.length),s=[e],c=[],l=!1;for(;s.length;){let e=s.pop();o[e]||(o[e]=1,(t?r[e]<20:r[e]===n)&&(c.push(e),grid.cells.b[e]&&(l=!0),i[e].forEach(e=>{o[e]||s.push(e)})))}return{selection:c,reachedBorder:l}}function vt(e,n,r){let i=l(`heightmapBrushPower`).valueAsNumber*10,{h:a,c:o,i:s}=grid.cells,c=new Uint8Array(s.length),u=new Uint16Array(s.length),d=[];e.forEach(e=>{c[e]=1});let f=[],p=0;for(e.forEach(e=>{o[e].some(e=>!c[e])&&(c[e]=2,f.push(e))});p<f.length;){let e=f[p++],t=u[e]+1;o[e].forEach(e=>{c[e]===1&&(c[e]=2,u[e]=t,f.push(e))})}let m=t(e,e=>u[e])||0,h=n?20:r;return e.forEach(e=>{let t=m?u[e]/m:1,n=ne(h+Math.max(1,Math.round(i*t)),0,100);n!==a[e]&&(a[e]=n,d.push(e))}),d}function yt(e){let t=l(`heightmapBrushRadius`).valueAsNumber,[n,r]=a(e,this),i=Grid.findCell(n,r),o=we(t/2,(e,n)=>{let r=Grid.findAll(e,n,t),a=r,o=l(`cellTypeFilter`).value;o===`land`?a=r.filter(e=>grid.cells.h[e]>=20):o===`water`&&(a=r.filter(e=>grid.cells.h[e]<20)),a?.length&&bt(a,i)});o.moveTo(n,r),e.on(`drag`,e=>{let[n,r]=a(e,this);Se(n,r,t),o.moveTo(n,r)}),e.on(`end`,W)}function bt(e,t){let n=l(`heightmapBrushPower`).valueAsNumber,r=ee(n,1),i=l(`cellTypeFilter`).value===`land`,a=l(`cellTypeFilter`).value===`water`,o=e=>ne(e,i?20:0,a?19:100),s=grid.cells.h,c=document.querySelector(`#brushesButtons > button.pressed`).id;c===`brushRaise`?e.forEach(e=>{s[e]=!a&&s[e]<20?20:o(s[e]+n)}):c===`brushElevate`?e.forEach((t,n)=>{s[t]=o(s[t]+r(n/Math.max(e.length-1,1)))}):c===`brushLower`?e.forEach(e=>{s[e]=o(s[e]-n)}):c===`brushDepress`?e.forEach((t,n)=>{s[t]=o(s[t]-r(n/Math.max(e.length-1,1)))}):c===`brushAlign`?e.forEach(e=>{s[e]=o(s[t])}):c===`brushSmooth`?e.forEach(e=>{s[e]=w(((oe(grid.cells.c[e].filter(e=>i?s[e]>=20:a?s[e]<20:!0).map(e=>s[e]))??0)+s[e]*(10-n)+.6)/(11-n),1)}):c===`brushDisrupt`&&e.forEach(e=>{s[e]=s[e]<15?s[e]:o(s[e]+n/1.6-Math.random()*n)}),q(e)}function xt(){let e=l(`cellTypeFilter`);e.value===`land`&&l(`heightmapEditMode`).innerHTML===`keep`&&(E(`You cannot change the coastline in 'Keep' edit mode`,!1,`error`),e.value=`all`),R.cellType=e.value,D.set(L,`filters`,R)}function St(e){let t=l(`cellTypeFilter`).value===`land`,n=l(`cellTypeFilter`).value===`water`;grid.cells.h=grid.cells.h.map(r=>{if(t&&(r<20||r+e<20)||n&&r>=20)return r;let i=b(r+e);return n?Math.min(i,19):i}),W(),l(`rescaler`).value=`0`}function Ct(){let e=`${l(`rescaleLower`).value}-${l(`rescaleHigher`).value}`,t=l(`conditionSign`).value,n=l(`rescaleModifier`).valueAsNumber;if(Number.isNaN(n)){E(`Operand should be a number`,!1,`error`);return}if((t===`add`||t===`subtract`)&&!Number.isInteger(n)){E(`Operand should be an integer`,!1,`error`);return}HeightmapGenerator.setGraph(grid),t===`multiply`?HeightmapGenerator.modify(e,0,n,0):t===`divide`?HeightmapGenerator.modify(e,0,1/n,0):t===`add`?HeightmapGenerator.modify(e,n,1,0):t===`subtract`?HeightmapGenerator.modify(e,-1*n,1,0):t===`exponent`&&HeightmapGenerator.modify(e,0,1,n),grid.cells.h=HeightmapGenerator.getHeights(),W()}function wt(){HeightmapGenerator.setGraph(grid),HeightmapGenerator.smooth(4,1.5),grid.cells.h=HeightmapGenerator.getHeights(),W()}function Tt(){grid.cells.h=grid.cells.h.map(e=>e<15?e:b(e+2.5-Math.random()*4)),W()}function Et(){let e=l(`cellTypeFilter`).value;if(e===`land`){E(`Not allowed when 'only land cells' filter is set`,!1,`error`);return}if(e===`water`){E(`Not allowed when 'only water cells' filter is set`,!1,`error`);return}if(!grid.cells.h.some(e=>e)){E(`Heightmap is already cleared, please do not click twice if not required`,!1,`error`);return}grid.cells.h=new Uint8Array(grid.cells.i.length),c(`#viewbox`).select(`#heights`).selectAll(`*`).remove(),X()}function Dt(){document.getElementById(`templateEditor`)||(Ye(),$(`#templateEditor`).dialog({title:`Template Editor`,minHeight:`auto`,width:`fit-content`,resizable:!1,position:{my:`right top`,at:`right-10 top+10`,of:`svg`},close:Ot}))}function Ot(){$(`#templateEditor`).dialog(`destroy`),l(`templateEditor`).remove()}function kt(e){let t=e.target;if(t.tagName!==`BUTTON`)return;let n=t.dataset.type;l(`templateBody`).dataset.changed=`1`,At(n)}function At(e,t,n,r,i){let a=l(`templateBody`);a.insertAdjacentHTML(`beforeend`,jt(e,t,n,r,i));let o=a.querySelector(`div:last-child > span > .templateDist`);if(o&&o.addEventListener(`change`,Mt),n&&o&&o.tagName===`SELECT`){for(let e of Array.from(o.options))e.value===n&&(o.value=n);if(o.value!==n){let e=document.createElement(`option`);e.value=e.innerHTML=n,o.add(e),o.value=n}}}function jt(e,t,n,r,i){let a=`<div data-type="${e}"><div class="icon-check" data-tip="Click to skip the step"></div><div style="width:4em">${e}</div><i class="icon-trash-empty pointer" data-tip="Click to remove the step"></i><i class="icon-resize-vertical" data-tip="Drag to reorder"></i>`,o=`<span>y:
      <input class="templateY" data-tip="Placement range percentage along Y axis (minY-maxY)" value=${i||`20-80`} />
    </span>`,s=`<span>x:
      <input class="templateX" data-tip="Placement range percentage along X axis (minX-maxX)" value=${r||`15-85`} />
    </span>`,c=`<span>h:
      <input class="templateHeight" data-tip="Blob maximum height, use hyphen to get a random number in range" value=${n||`40-50`} />
    </span>`,l=`<span>n:
      <input class="templateCount" data-tip="Blobs to add, use hyphen to get a random number in range" value=${t||`1-2`} />
    </span>`;return e===`Hill`||e===`Pit`||e===`Range`||e===`Trough`?`${a}${o}${s}${c}${l}</div>`:e===`Strait`?`${a}
      <span>d:
        <select class="templateDist" data-tip="Strait direction">
          <option value="vertical" selected>vertical</option>
          <option value="horizontal">horizontal</option>
        </select>
      </span>
      <span>w:
        <input class="templateCount" data-tip="Strait width, use hyphen to get a random number in range" value=${t||`2-7`} />
      </span>
    </div>`:e===`Invert`?`${a}
      <span>by:
        <select class="templateDist" data-tip="Mirror heightmap along axis" style="width: 7.8em">
          <option value="x" selected>x</option>
          <option value="y">y</option>
          <option value="xy">both</option>
        </select>
      </span>
      <span>n:
        <input class="templateCount" data-tip="Probability of inversion, range 0-1" value=${t||`0.5`} />
      </span>
    </div>`:e===`Mask`?`${a}
      <span>f:
        <input class="templateCount"
          data-tip="Set masking fraction. 1 - full insulation (prevent land on map edges), 2 - half-insulation, etc. Negative number to inverse the effect"
          type="number" min=-10 max=10 value=${t||1} />
      </span>
    </div>`:e===`Add`?`${a}
      <span>to:
        <select class="templateDist" data-tip="Change only land or all cells">
          <option value="all" selected>all cells</option>
          <option value="land">land only</option>
          <option value="interval">interval</option>
        </select>
      </span>
      <span>v:
        <input class="templateCount" data-tip="Add value to height of all cells (negative values are allowed)"
        type="number" value=${t||-10} min=-100 max=100 step=1 />
      </span>
    </div>`:e===`Multiply`?`${a}
      <span>to:
        <select class="templateDist" data-tip="Change only land or all cells">
          <option value="all" selected>all cells</option>
          <option value="land">land only</option>
          <option value="interval">interval</option>
        </select>
      </span>
      <span>v:
        <input class="templateCount" data-tip="Multiply all cells Height by the value" type="number"
          value=${t||1.1} min=0 max=10 step=.1 />
      </span>
    </div>`:e===`Smooth`?`${a}
      <span>f:
        <input class="templateCount" data-tip="Set smooth fraction. 1 - full smooth, 2 - half-smooth, etc."
          type="number" min=1 max=10 step=1 value=${t||2} />
      </span>
    </div>`:``}function Mt(e){let t=e.target;t.value===`interval`&&prompt(`Set a height interval. Avoid space, use hyphen as a separator`,{default:`17-20`},e=>{let n=document.createElement(`option`);n.value=n.innerHTML=String(e),t.add(n),t.value=String(e)})}function Nt(e){let t=l(`templateBody`),n=t.querySelectorAll(`div`).length,r=+t.getAttribute(`data-changed`),i=e.target.value;if(!n||!r){Pt(i);return}alertMessage.innerHTML=`Are you sure you want to select a different template? All changes will be lost.`,$(`#alert`).dialog({resizable:!1,title:`Change Template`,buttons:{Change:function(){Pt(i),$(this).dialog(`close`)},Cancel:function(){$(this).dialog(`close`)}}})}function Pt(e){let t=l(`templateBody`);t.setAttribute(`data-changed`,`0`),t.innerHTML=``;let n=me[e]?.template;if(!n)return;let r=n.split(`
`);if(!r.length){E(`Heightmap template: no steps defined`,!1,`error`);return}for(let e of r){let t=e.trim().split(` `);At(t[0],t[1],t[2],t[3],t[4])}}function Ft(){let e=l(`templateBody`).querySelectorAll(`#templateBody > div`);if(!e.length)return;let t=l(`templateSeed`).value;Math.random=aleaPRNG(t||u()),grid.cells.h=new Uint8Array(grid.points.length),HeightmapGenerator.setGraph(grid),ct();for(let t of e){if(t.style.opacity===`0.5`)continue;let e=t.querySelector(`.templateCount`)?.value||``,n=t.querySelector(`.templateHeight`)?.value||``,r=t.querySelector(`.templateDist`)?.value||``,i=t.querySelector(`.templateX`)?.value||``,a=t.querySelector(`.templateY`)?.value||``,o=t.dataset.type;o===`Hill`?HeightmapGenerator.addHill(e,n,i,a):o===`Pit`?HeightmapGenerator.addPit(e,n,i,a):o===`Range`?HeightmapGenerator.addRange(e,n,i,a):o===`Trough`?HeightmapGenerator.addTrough(e,n,i,a):o===`Strait`?HeightmapGenerator.addStrait(e,r):o===`Mask`?HeightmapGenerator.mask(+e):o===`Invert`?HeightmapGenerator.invert(+e,r):o===`Add`?HeightmapGenerator.modify(r,+e,1):o===`Multiply`?HeightmapGenerator.modify(r,0,+e):o===`Smooth`&&HeightmapGenerator.smooth(+e),grid.cells.h=HeightmapGenerator.getHeights(),X(`noStat`)}grid.cells.h=HeightmapGenerator.getHeights(),J(),K(),Z()}function It(){let e=l(`templateBody`);e.dataset.changed=`0`;let t=e.querySelectorAll(`#templateBody > div`);if(!t.length)return;let r=``;for(let e of Array.from(t)){if(e.style.opacity===`0.5`)continue;let t=e.getAttribute(`data-type`),n=e.querySelector(`.templateCount`)?.value||`0`,i=e.querySelector(`.templateHeight`)?.value||e.querySelector(`.templateDist`)?.value||`0`,a=e.querySelector(`.templateX`)?.value||`0`,o=e.querySelector(`.templateY`)?.value||`0`;r+=`${t} ${n} ${i} ${a} ${o}\r\n`}let i=`template_${Date.now()}.txt`;n(r,i)}function Lt(){z??=p(`.txt`),z.onchange=()=>i(z,Rt),z.click()}function Rt(e){let t=e.split(`\r
`);if(!t.length){E(`Cannot parse the template, please check the file`,!1,`error`);return}l(`templateBody`).innerHTML=``;for(let e of t){let t=e.split(` `);if(t.length!==5){ERROR&&console.error(`Cannot parse step, wrong arguments count`,e);continue}At(t[0],t[1],t[2],t[3],t[4])}}function zt(){B??=p(`image/*`),B.onchange=()=>Ht.call(B),B.click()}function Bt(){if(document.getElementById(`imageConverter`))return;zt(),ve(`#imageConverter`),Xe(),$(`#imageConverter`).dialog({title:`Image Converter`,maxHeight:fe.height*.8,minHeight:`auto`,width:`20em`,position:{my:`right top`,at:`right-10 top+10`,of:`svg`},beforeClose:$t});let e=document.createElement(`canvas`);e.id=`canvas`,e.width=options.map.graph.width,e.height=options.map.graph.height,document.body.insertBefore(e,l(`optionsContainer`)),Yt(0),de(),E(`Image Converter is opened. Upload image and assign height value for each color`,!1,`warn`),grid.cells.h=new Uint8Array(grid.cells.i.length),c(`#viewbox`).select(`#heights`).selectAll(`*`).remove(),X()}function Vt(){let e=+this.getAttribute(`data-color`);l(`colorsSelectValue`).innerHTML=String(e),l(`colorsSelectFriendly`).innerHTML=U(e);let t=l(`imageConverterPalette`).querySelector(`.hoveredColor`);t&&(t.className=``),this.className=`hoveredColor`}function Ht(){let e=this.files[0];this.value=``;let t=new FileReader,n=new Image;n.id=`imageToConvert`,n.style.display=`none`,document.body.appendChild(n),n.onload=()=>{l(`canvas`).getContext(`2d`).drawImage(n,0,0,options.map.graph.width,options.map.graph.height),Ut(+l(`convertColors`).value),resetZoom()},t.onloadend=()=>{n.src=t.result},t.readAsDataURL(e)}function Ut(e){let t=l(`canvas`),n=document.createElement(`canvas`);n.width=grid.cellsX,n.height=grid.cellsY,n.getContext(`2d`).drawImage(t,0,0,grid.cellsX,grid.cellsY);let r=new RgbQuant({colors:e});r.sample(n);let i=r.reduce(n),a=r.palette(!0);c(`#viewbox`).select(`#heights`).selectAll(`*`).remove(),c(`#imageConverter`).selectAll(`div.color-div`).remove(),l(`colorsSelect`).style.display=`block`,l(`colorsUnassigned`).style.display=`block`,l(`colorsAssigned`).style.display=`none`,n.remove(),c(`#viewbox`).select(`#heights`).selectAll(`polygon`).data(Array.from(grid.cells.i)).join(`polygon`).attr(`points`,e=>String(Grid.getPolygon(e))).attr(`id`,e=>`cell${e}`).attr(`fill`,e=>`rgb(${i[e*4]}, ${i[e*4+1]}, ${i[e*4+2]})`).on(`click`,Wt);let o=a.map(e=>`rgb(${e[0]}, ${e[1]}, ${e[2]})`);c(`#colorsUnassignedContainer`).selectAll(`div`).data(o).enter().append(`div`).attr(`data-color`,e=>e).style(`background-color`,e=>e).attr(`class`,`color-div`).on(`click`,Gt),l(`colorsUnassignedNumber`).innerHTML=String(o.length)}function Wt(){let e=this.getAttribute(`fill`);l(`imageConverter`).querySelector(`div[data-color="${e}"]`)?.click()}function Gt(){c(`#viewbox`).select(`#heights`).selectAll(`.selectedCell`).attr(`class`,null);let e=this.classList.contains(`selectedColor`),t=l(`imageConverter`).querySelector(`div.selectedColor`);t&&t.classList.remove(`selectedColor`);let n=l(`imageConverterPalette`).querySelector(`div.hoveredColor`);if(n&&n.classList.remove(`hoveredColor`),l(`colorsSelectValue`).innerHTML=l(`colorsSelectFriendly`).innerHTML=`0`,e)return;if(this.classList.add(`selectedColor`),this.dataset.height){let e=+this.dataset.height;l(`imageConverterPalette`).querySelector(`div[data-color="${e}"]`)?.classList.add(`hoveredColor`),l(`colorsSelectValue`).innerHTML=String(e),l(`colorsSelectFriendly`).innerHTML=U(e)}let r=this.getAttribute(`data-color`);c(`#viewbox`).select(`#heights`).selectAll(`polygon.selectedCell`).classed(`selectedCell`,!1),c(`#viewbox`).select(`#heights`).selectAll(`polygon[fill='${r}']`).classed(`selectedCell`,!0)}function Kt(){let e=+this.dataset.color,t=Ge(1-(e<20?e-5:e)/100),n=l(`imageConverter`).querySelector(`div.selectedColor`);n.style.backgroundColor=t,n.setAttribute(`data-color`,t),n.setAttribute(`data-height`,String(e)),c(`#viewbox`).select(`#heights`).selectAll(`.selectedCell`).each(function(){this.setAttribute(`fill`,t),this.setAttribute(`data-height`,String(e))}),n.parentNode.id===`colorsUnassignedContainer`&&(l(`colorsAssignedContainer`).appendChild(n),l(`colorsAssigned`).style.display=`block`,l(`colorsUnassignedNumber`).innerHTML=String(l(`colorsUnassignedContainer`).childElementCount-2),l(`colorsAssignedNumber`).innerHTML=String(l(`colorsAssignedContainer`).childElementCount-2))}function qt(e){let t=l(`colorsUnassignedContainer`),n=t.querySelectorAll(`div`);if(!n.length&&(Ut(+l(`convertColors`).value),n=t.querySelectorAll(`div`),!n.length)){E(`No unassigned colors. Please load an image and click the button again`,!1,`error`);return}let r=e=>{let t=S(e).h;return t>300&&(t-=360),t>170?Math.abs(t-250)/3|0:Math.abs(t-250+20)/3|0},i=e=>{let t=Me(e).l;return t<13?t/13*20|0:t|0},a=s(101).map(e=>G(e)),o=a.map(e=>S(e).h|0),u=e=>{let t=a.indexOf(e);if(t!==-1)return t;let n=S(e).h,r=o.reduce((e,t)=>Math.abs(t-n)<Math.abs(e-n)?t:e);return o.indexOf(r)},d=[],f=l(`colorsAssignedContainer`);n.forEach(t=>{let n=t.dataset.color,a=e===`hue`?r(n):e===`lum`?i(n):u(n),o=Ge(1-(a<20?(a-5)/100:a/100));if(c(`#viewbox`).select(`#heights`).selectAll(`polygon[fill='${n}']`).attr(`fill`,o).attr(`data-height`,a),d[a]){t.remove();return}t.style.backgroundColor=t.dataset.color=o,t.dataset.height=String(a),f.appendChild(t),d[a]=!0}),Array.from(f.children).sort((e,t)=>e.dataset.height-+t.dataset.height).forEach(e=>{f.appendChild(e)}),l(`colorsAssigned`).style.display=`block`,l(`colorsUnassigned`).style.display=`none`,l(`colorsAssignedNumber`).innerHTML=String(f.childElementCount-2)}function Jt(){prompt(`Please set maximum number of colors. <br>An actual number is usually lower and depends on color scheme`,{default:+l(`convertColors`).value,step:1,min:3,max:255},e=>{l(`convertColors`).value=String(e),Ut(+e)})}function Yt(e){l(`convertOverlay`).value=l(`convertOverlayNumber`).value=String(e),l(`canvas`).style.opacity=String(e)}function Xt(){if(l(`colorsAssignedContainer`).childElementCount<3){E(`Please assign colors to heights first`,!1,`error`);return}c(`#viewbox`).select(`#heights`).selectAll(`polygon`).each(function(){let e=+(this.dataset.height??`0`)||0,t=+this.id.slice(4);grid.cells.h[t]=e}),c(`#viewbox`).select(`#heights`).selectAll(`polygon`).remove(),W(),Qt()}function Zt(){Qt(),c(`#viewbox`).select(`#heights`).selectAll(`polygon`).remove(),Q(edits.n-1)}function Qt(){document.getElementById(`canvas`)?.remove(),document.getElementById(`imageToConvert`)?.remove(),c(`#imageConverter`).selectAll(`div.color-div`).remove(),l(`colorsAssigned`).style.display=`none`,l(`colorsUnassigned`).style.display=`none`,l(`colorsSelectValue`).innerHTML=l(`colorsSelectFriendly`).innerHTML=`0`,c(`#viewbox`).style(`cursor`,`default`).on(`.drag`,null),E(`Heightmap edit mode is active. Click on "Exit Customization" to finalize the heightmap`,!0),$(`#imageConverter`).dialog(`destroy`),l(`imageConverter`).remove(),lt()}function $t(e){e.preventDefault(),e.stopPropagation(),alertMessage.innerHTML=`Are you sure you want to close the Image Converter? Click "Cancel" to keep editing. Click "Complete" to apply
  the conversion and close the tool. Click "Close" to discard the conversion and restore the previous heightmap.`,$(`#alert`).dialog({resizable:!1,title:`Close Image Converter`,buttons:{Cancel:function(){$(this).dialog(`close`)},Complete:function(){$(this).dialog(`close`),Xt()},Close:function(){$(this).dialog(`close`),Qt(),c(`#viewbox`).select(`#heights`).selectAll(`polygon`).remove(),Q(edits.n-1)}}})}function en(){let e=document.getElementById(`preview`);if(e){e.remove();return}let t=document.createElement(`canvas`);t.id=`preview`,t.width=grid.cellsX,t.height=grid.cellsY,document.body.insertBefore(t,l(`optionsContainer`)),t.addEventListener(`mouseover`,()=>E(`Heightmap preview. Click to download a screen-sized image`)),t.addEventListener(`click`,nn),tn()}function tn(){let e=document.getElementById(`preview`).getContext(`2d`),t=e.createImageData(grid.cellsX,grid.cellsY);grid.cells.h.forEach((e,n)=>{let r=(e<20?Math.max(e/1.5,0):e)/100*255,i=n*4;t.data[i]=r,t.data[i+1]=r,t.data[i+2]=r,t.data[i+3]=255}),e.putImageData(t,0,0)}function nn(){let e=document.getElementById(`preview`).toDataURL(`image/png`),t=new Image;t.src=e,t.onload=()=>{let e=document.createElement(`canvas`),n=e.getContext(`2d`);e.width=options.map.graph.width,e.height=options.map.graph.height,document.body.insertBefore(e,l(`optionsContainer`)),n.drawImage(t,0,0,options.map.graph.width,options.map.graph.height);let r=e.toDataURL(`image/png`),i=document.createElement(`a`);i.download=`${d(`Heightmap`)}.png`,i.href=r,i.click(),e.remove()}}var rn={open:Je,redrawDrainage:V};export{rn as HeightmapEditor};