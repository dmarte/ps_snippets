"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PSDom=void 0;const PSDom={draw(a){const b=document.createElement("template");return b.innerHTML=(a+"").replace(/(\r\n|\n|\r)(\s{2})+/gm,""),b.content.firstChild},findOrFail(a){const b=this.find(a);if(!b)throw new DOMException(`No elements found for ${a}.`);return b},find(a){return document.querySelector(a)},when(a){return new Promise(b=>{try{const c=PSDom.findOrFail(a);b(c)}catch{const c=new MutationObserver(()=>{const d=PSDom.find(a);d&&(c.disconnect(),b(d))});c.observe(document.body,{childList:!0,subtree:!0})}})}};exports.PSDom=PSDom;