var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{c:()=>a});var n=function(){function t(){}return t.prototype.appendPickerHTMLtoChatWindowFooter=function(t){this.hostInstance.chatEle.find(".kore-chat-footer .footerContainer").append(t)},t.prototype.installTextToSpeechTemplate=function(){var t=this,e=t.hostInstance.$;t.pickerHTML=e(t.getTextToSpeechTemplateString()),t.appendPickerHTMLtoChatWindowFooter(t.pickerHTML),t.bindEvents()},t.prototype.getTextToSpeechTemplateString=function(){return'<div class="sdkFooterIcon ttspeakerDiv ttsOff">         <button class="ttspeaker" title="Talk to speak">             <span class="ttsSpeakerEnable"></span>             <span class="ttsSpeakerDisable"></span>             <span style="display:none;"><audio id="ttspeaker" controls="" autoplay="" name="media"><source src="" type="audio/wav"></audio></span>        </button>     </div> '},t.prototype.bindEvents=function(){var t=this;(0,t.hostInstance.$)(t.pickerHTML).on("click",".ttspeaker",(function(e){t.OnSpeakerButtonClick&&t.OnSpeakerButtonClick()}))},t}();var o,s=(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});const a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="BrowserTTS",e.speakWithWebAPI=function(t){if(!t)return!1;if("speechSynthesis"in window){window.speechSynthesis.cancel();var e=new SpeechSynthesisUtterance;e.text=t,window.speechSynthesis.speak(e)}else console.warn("KORE:Your browser doesn't support TTS(Speech Synthesiser)")},e}return s(e,t),e.prototype.onHostCreate=function(){var t=this;t.hostInstance.on("viewInit",(function(e){t.onInit()}))},e.prototype.onInit=function(){this.installTextToSpeechTemplate()},e.prototype.OnSpeakerButtonClick=function(){var t=this,e=this,n=e.hostInstance.$,o=e.hostInstance;n(".ttspeakerDiv").hasClass("ttsOff")?(n(".ttspeakerDiv").removeClass("ttsOff"),o.on("afterRenderMessage",(function(n){var o=n.msgData;if("bot_response"===(null==o?void 0:o.type)&&!e.hostInstance.minimized&&!e.hostInstance.historyLoading){if(o.message[0]&&o.message[0].component&&"template"===o.message[0].component.type)t._txtToSpeak="";else try{t._txtToSpeak=o.message[0].component.payload.text?o.message[0].component.payload.text.replace(/\r?\n/g,". ."):"",t._txtToSpeak=e.hostInstance.helpers.checkMarkdowns(t._txtToSpeak),t._txtToSpeak=t._txtToSpeak.replace("___","<hr/>"),t._txtToSpeak=t._txtToSpeak.replace("---","<hr/>")}catch(e){t._txtToSpeak=""}o.message[0].component&&o.message[0].component.payload.speech_hint&&(t._txtToSpeak=o.message[0].component.payload.speech_hint),t._ttsConnection=e.speakWithWebAPI(t._txtToSpeak)}}))):(window.speechSynthesis.pause(),n(".ttspeakerDiv").addClass("ttsOff"))},e}(n);var p=e.c;export{p as BrowserTTS};