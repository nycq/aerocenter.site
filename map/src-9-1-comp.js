var vorArray="vorJAN_JAN vorJAN_005 vorJAN_049 vorJAN_091 vorJAN_106 vorJAN_129 vorJAN_164 vorJAN_179 vorJAN_194 vorJAN_223 vorJAN_251 vorJAN_266 vorJAN_281 vorJAN_300 vorJAN_320 vorJAN_335 vorJAN_350 vorMLU_MLU vorMLU_072 vorMLU_087 vorMLU_102 vorSQS_SQS vorSQS_007 vorSQS_023 vorSQS_086 vorSQS_156 vorSQS_171 vorSQS_186 vorSQS_256 vorSQS_273 vorSQS_341 vorIGB_IGB vorIGB_231 vorIGB_266 vorMEI_MEI vorMEI_272 vorMEI_257 vorMCB_MCB vorMCB_001 vorMCB_016 vorMCB_345 vorGLH_GLH vorGLH_092 vorGLH_143 vorHEZ_HEZ vorHEZ_026 vorHEZ_044 ubaby_UBABY jelmi_JELMI yazoo_YAZOO kgwo_KGWO hater_HATER arguw_ARGUW rinky_RINKY dinky_DINKY signs_SIGNS dorts_DORTS talpy_TALPY hazal_HAZAL ricks_RICKS mizze_MIZZE zamma_ZAMMA clays_CLAYS berra_BERRA kjan_KJAN khks_KHKS kjvw_KJVW kvks_KVKS ble_0M8 ktvr_KTVR v427-14_14 v18-15_15 mluv417-16_16 v427-31_31 v18-31_31 v417-31_31 v245-20_20 v417-20_20 v18-19_19 v427-18_18 path3236_20 path5096_26 path3214_21 path3216_21 path3220_33 path3222_35 path3224_35 path3226_16 path3228_12 path3230_12 path3232_14 path3234_17 path3238_17 path3240_17 path3242_24 path3244_23 path3246_25 path3248_13 path3250_14 path3252_26 path3218_21 path4503_V9 path4479_V9-11 path311_V9 path4495_V11 path315_V11 path4465_V18 path4830_V74 path4489_V245 path4511_V245 path4493_V417 path4469_V417 path4461_V427 path4459_V427 path4505_V555 path4483_V555 path4499_V557 path4475_V557 path313_V535 path2831_V278 path4485_V278 path4491_V18 rect12239_75 rect12241_72 rect12243_75 rect12245_120 rect12247_73 rect12249_70 rect12251_102 rect12253_60 rect12255_58 rect12257_60 rect12259_74 rect12233_98 rect12231_95 rect12235_98 rect12237_79 rect12261_36 rect12269_69 rect12267_92 rect12265_87 rect12263_88 path4990_TV rect13117_19 rect13131_12 rect13133_49 rect13135_49 rect13137_41 rect13139_49 rect13141_49 rect13143_36 rect13145_43 rect13147_37 rect13149_38 rect13151_37 rect13153_38 rect13155_58 rect13157_62 rect13159_46 rect13161_56 rect13163_44 rect13165_30 rect13167_30 rect13169_16 rect13171_42 rect13173_16 rect13175_21 rect13177_18 rect13179_35 rect13181_23 rect13183_64 rect3800_5000".split(" "),
errorCount=0,autocorrect=!1;function setAutocorrect(){checkbox=document.getElementById("enableAutocorrect");checkButton=document.getElementById("checkAnswers");checkbox.checked?(autocorrect=!0,checkButton.style.backgroundColor="gray",checkAll()):(autocorrect=!1,checkButton.style.backgroundColor="#0061c6")}
function addInput(){for(var a=0;a<vorArray.length;a++){var c=vorArray[a].substring(0,vorArray[a].indexOf("_")),d=vorArray[a].substring(vorArray[a].indexOf("_")+1,vorArray[a].length),e=parseInt(d),f=getCoords(document.getElementById(c)),b=document.createElement("input");b.style.position="absolute";b.id=vorArray[a];b.className="vorDegree";b.addEventListener("keyup",function(){doInput(this)});isNaN(e)||"ble"==c?(b.setAttribute("placeholder","ABC"),b.setAttribute("type","text"),"V"==d.substring(0,1)&&
b.setAttribute("placeholder","V00"),b.setAttribute("spellcheck","false"),b.setAttribute("class","labelText"),b.style.textAlign="center",b.style.left=f.left,b.style.top=f.top-15):"vor"==c.substring(0,3)?(b.setAttribute("type","tel"),b.setAttribute("inputmode","numeric"),b.setAttribute("placeholder","000"),180>e?b.style.transform="rotate("+(e-90)+"deg)":(b.style.transform="rotate("+(e-270)+"deg)",b.style.textAlign="right"),b.style.left=f.left+50*Math.sin(Math.PI/180*e),b.style.top=f.top-50*Math.cos(Math.PI/
180*e)):("rect"==c.substring(0,4)&&(c=document.getElementById(c).getAttribute("transform"),null!==c&&(c=c.substring(0,c.length-1),b.style.transform=c+"deg)")),b.setAttribute("placeholder","00"),b.setAttribute("type","tel"),b.setAttribute("inputmode","numeric"),b.style.textAlign="center",b.style.left=f.left,b.style.top=f.top);document.getElementById("labels").appendChild(b);b=document.getElementById(b.id);b.getBoundingClientRect();b.style.left=parseFloat(b.style.left)-b.offsetWidth/2;b.style.top=parseFloat(b.style.top)-
b.offsetHeight/2}}function fillBoxes(){for(var a=0;a<vorArray.length;a++)vorID=vorArray[a].substring(0,vorArray[a].indexOf("_")),vorDegree=vorArray[a].substring(vorArray[a].indexOf("_")+1,vorArray[a].length),ele=document.getElementById(vorArray[a]),ele.style.color="black",ele.disabled=!1,ele.defaultValue=vorDegree,ele.value=vorDegree}
function hintBoxes(){for(var a=0;a<vorArray.length;a++)vorID=vorArray[a].substring(0,vorArray[a].indexOf("_")),vorDegree=vorArray[a].substring(vorArray[a].indexOf("_")+1,vorArray[a].length),ele=document.getElementById(vorArray[a]),""==ele.value&&(ele.defaultValue=vorDegree.substring(0,1),ele.value=vorDegree.substring(0,1))}
function clearBoxes(){for(var a=0;a<vorArray.length;a++)ele=document.getElementById(vorArray[a]),ele.defaultValue="",ele.style.color="black",ele.style.background="transparent",ele.disabled=!1,ele.value="",errorCount=0}function getCoords(a){a=a.getBoundingClientRect();return{top:a.top+a.height/2,left:a.left+a.width/2}}function getAngle(a){}function doInput(a){autocorrect&&checkBoxes(a)}function checkAll(){for(var a=0;a<vorArray.length;a++)ele=document.getElementById(vorArray[a]),checkBoxes(ele)}
function toggleSectors(){var a=document.getElementById("sectors");a.style.display="none"===a.style.display?"block":"none"}function checkBoxes(a){var c=a.id.toUpperCase();a.value=a.value.toUpperCase();var d=a.value.toUpperCase();c=c.substring(c.indexOf("_")+1,c.length);c.substring(0,d.length)==d?a.style.color="black":(a.style.color="red",a.style.background="rgba(255,255,0, .5)");c==d&&(a.disabled=!0,a.style.color="#055a00");console.log(errorCount)};