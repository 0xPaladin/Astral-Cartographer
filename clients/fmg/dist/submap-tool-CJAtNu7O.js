import{P as e,nt as t,rr as n,tr as r,tt as i}from"./utils-CNyvX_4Z.js";import{C as a,S as o,T as s,n as c,s as l,t as u}from"./options-tab-BHAqJG6a.js";import{t as d}from"./layers-BLilOnUL.js";import{i as f}from"./viewport-C0deAIKO.js";import{o as p}from"./options-schema-D2Bjy-ln.js";import{r as m}from"./generation-pipeline-D3tlYnwn.js";import{i as h}from"./dialog-helpers-CHDy2eFe.js";import{s as g}from"./index-CUjhdmz8.js";function _(){v(),y(),$(`#submapTool`).dialog({title:`Create a submap`,resizable:!1,width:`32em`,position:{my:`center`,at:`center`,of:`svg`},close:b,buttons:{Submap:function(){S(),$(this).dialog(`close`)},Cancel:function(){$(this).dialog(`close`)}}})}function v(){h(`submapTool`);let t=String(options.generation.graph.density),n=p[+t],r=`<div id="submapTool" class="dialog">
    <p style="font-weight: bold">
      This operation is destructive and irreversible. It will create a completely new map based on the current one.
      Don't forget to save the .map file to your machine first!
    </p>
    <div style="display: flex; flex-direction: column; gap: 0.5em">
      <div data-tip="Set points (cells) number of the submap" style="display: flex; gap: 1em">
        <div>Points number</div>
        <div>
          <input id="submapPointsInput" type="range" min="1" max="13" value="${t}" />
          <output id="submapPointsFormatted" style="color: ${u(n)}">${n/1e3}K</output>
        </div>
      </div>
      <div data-tip="Check to fit burg styles (icon and label size) to the submap scale">
        <input type="checkbox" class="checkbox" id="submapRescaleBurgStyles" checked />
        <label for="submapRescaleBurgStyles" class="checkbox-label">Rescale burg styles</label>
      </div>
    </div>
  </div>`;e(`dialogs`).insertAdjacentHTML(`beforeend`,r)}function y(){e(`submapPointsInput`).oninput=x}function b(){h(`submapTool`)}function x(t){let n=p[+t.target.value],r=e(`submapPointsFormatted`);r.value=`${n/1e3}K`,r.style.color=u(n)}function S(){INFO&&console.group(`generateSubmap`);let{x0:t,y0:n,scale:r}=C();w(t,n,r);let i=e(`submapPointsInput`).value;i!==String(options.generation.graph.density)&&c(+i),o(),a(),resetZoom(0),m(),g.process({projection:(e,i)=>[(e-t)*r,(i-n)*r],inverse:(e,i)=>[e/r+t,i/r+n],scale:r}),e(`submapRescaleBurgStyles`).checked&&T(r),d.drawAll(),l(),s(),INFO&&console.groupEnd()}function C(){let{width:e,height:t}=options.map.graph,n=f.width/f.scale,i=f.height/f.scale,a=Math.min(e/n,t/i),o=e/a,s=t/a;return{x0:r(-f.x/f.scale-(o-n)/2,0,e-o),y0:r(-f.y/f.scale-(s-i)/2,0,t-s),scale:a}}function w(e,r,a){let{geography:o,graph:s,units:c}=options.map,{coordinates:l}=o;o.mapSize=n(o.mapSize/a,2);let u=l.latT/a;o.latitude=n((90-i(r,l,s.height))/(180-u)*100,2);let d=l.lonT/a;o.longitude=n((180-t(e+s.width/a,l,s.width))/(360-d)*100,2),c.distance.scale=n(c.distance.scale/a,2),c.population.scale=n(c.population.scale/a,2),Options.save()}function T(t){window.Burgs.ensureBurgGroupStyles();for(let i of e(`burgIcons`).querySelectorAll(`:scope > g`)){let e=styles.burgIcons.groups[i.id]?.groups.icons;e&&(e.options.size=n(r(e.options.size*t,.2,10),2)),i.remove()}let i=new Set(pack.burgs.filter(e=>e.i&&!e.removed).map(e=>e.label?.group||e.group||`burg`));for(let e of i){let r=styles.labels.groups[e];if(!r)continue;let i=Number.parseFloat(r.attrs[`font-size`])||0,a=Math.max(n((i+i/t)/2,2),1)*t;r.attrs[`font-size`]=`${n(a,2)}%`}}var E={open:_};export{E as SubmapTool};