(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rl="183",Ws={ROTATE:0,DOLLY:1,PAN:2},Bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_p=0,Ch=1,bp=2,Na=1,vd=2,Rr=3,sn=0,tn=1,Un=2,Si=0,js=1,Ph=2,Dh=3,Ih=4,xp=5,os=100,vp=101,yp=102,Sp=103,Mp=104,Ep=200,Tp=201,wp=202,Ap=203,_c=204,bc=205,Rp=206,Cp=207,Pp=208,Dp=209,Ip=210,Lp=211,Fp=212,Op=213,Np=214,xc=0,vc=1,yc=2,Zs=3,Sc=4,Mc=5,Ec=6,Tc=7,yd=0,kp=1,Up=2,ei=0,Sd=1,Md=2,Ed=3,Cl=4,Td=5,wd=6,Ad=7,Lh="attached",Bp="detached",Rd=300,gs=301,$s=302,ka=303,yo=304,co=306,_s=1e3,vn=1001,Ka=1002,It=1003,Cd=1004,Cr=1005,Qe=1006,Ua=1007,Zn=1008,bn=1009,Pd=1010,Dd=1011,zr=1012,Pl=1013,ii=1014,en=1015,yn=1016,Dl=1017,Il=1018,Gr=1020,Id=35902,Ld=35899,Fd=1021,Od=1022,Dn=1023,Ei=1026,ls=1027,Ll=1028,Fl=1029,Qs=1030,Ol=1031,Nl=1033,Ba=33776,za=33777,Ga=33778,Va=33779,wc=35840,Ac=35841,Rc=35842,Cc=35843,Pc=36196,Dc=37492,Ic=37496,Lc=37488,Fc=37489,Oc=37490,Nc=37491,kc=37808,Uc=37809,Bc=37810,zc=37811,Gc=37812,Vc=37813,Hc=37814,Wc=37815,jc=37816,qc=37817,Xc=37818,Kc=37819,Yc=37820,Jc=37821,Zc=36492,$c=36494,Qc=36495,el=36283,tl=36284,nl=36285,il=36286,Pr=2200,zp=2201,Nd=2202,Vr=2300,Hr=2301,So=2302,Fh=2303,zs=2400,Gs=2401,Ya=2402,kl=2500,Gp=2501,Vp=0,kd=1,sl=2,Hp=3200,Ud=0,Wp=1,ki="",St="srgb",Jt="srgb-linear",Ja="linear",nt="srgb",Ss=7680,Oh=519,jp=512,qp=513,Xp=514,Ul=515,Kp=516,Yp=517,Bl=518,Jp=519,rl=35044,Nh="300 es",$n=2e3,Wr=2001;function Zp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function $p(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function jr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Qp(){const r=jr("canvas");return r.style.display="block",r}const kh={};function Za(...r){const e="THREE."+r.shift();console.log(e,...r)}function Bd(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Me(...r){r=Bd(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Pe(...r){r=Bd(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function $a(...r){const e=r.join(" ");e in kh||(kh[e]=!0,Me(...r))}function em(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const tm={[xc]:vc,[yc]:Ec,[Sc]:Tc,[Zs]:Mc,[vc]:xc,[Ec]:yc,[Tc]:Sc,[Mc]:Zs};class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uh=1234567;const Fr=Math.PI/180,er=180/Math.PI;function Gn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[r&255]+jt[r>>8&255]+jt[r>>16&255]+jt[r>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function ze(r,e,t){return Math.max(e,Math.min(t,r))}function zl(r,e){return(r%e+e)%e}function nm(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function im(r,e,t){return r!==e?(t-r)/(e-r):0}function Or(r,e,t){return(1-t)*r+t*e}function sm(r,e,t,n){return Or(r,e,1-Math.exp(-t*n))}function rm(r,e=1){return e-Math.abs(zl(r,e*2)-e)}function am(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function om(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function cm(r,e){return r+Math.floor(Math.random()*(e-r+1))}function lm(r,e){return r+Math.random()*(e-r)}function hm(r){return r*(.5-Math.random())}function um(r){r!==void 0&&(Uh=r);let e=Uh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dm(r){return r*Fr}function fm(r){return r*er}function pm(r){return(r&r-1)===0&&r!==0}function mm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function gm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function _m(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),h=s((e+n)/2),d=a((e+n)/2),c=s((e-n)/2),u=a((e-n)/2),f=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*d,l*c,l*u,o*h);break;case"YZY":r.set(l*u,o*d,l*c,o*h);break;case"ZXZ":r.set(l*c,l*u,o*d,o*h);break;case"XZX":r.set(o*d,l*m,l*f,o*h);break;case"YXY":r.set(l*f,o*d,l*m,o*h);break;case"ZYZ":r.set(l*m,l*f,o*d,o*h);break;default:Me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function it(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const zd={DEG2RAD:Fr,RAD2DEG:er,generateUUID:Gn,clamp:ze,euclideanModulo:zl,mapLinear:nm,inverseLerp:im,lerp:Or,damp:sm,pingpong:rm,smoothstep:am,smootherstep:om,randInt:cm,randFloat:lm,randFloatSpread:hm,seededRandom:um,degToRad:dm,radToDeg:fm,isPowerOfTwo:pm,ceilPowerOfTwo:mm,floorPowerOfTwo:gm,setQuaternionFromProperEuler:_m,normalize:it,denormalize:Bn};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],h=n[i+1],d=n[i+2],c=n[i+3],u=s[a+0],f=s[a+1],m=s[a+2],_=s[a+3];if(c!==_||l!==u||h!==f||d!==m){let g=l*u+h*f+d*m+c*_;g<0&&(u=-u,f=-f,m=-m,_=-_,g=-g);let p=1-o;if(g<.9995){const b=Math.acos(g),y=Math.sin(b);p=Math.sin(p*b)/y,o=Math.sin(o*b)/y,l=l*p+u*o,h=h*p+f*o,d=d*p+m*o,c=c*p+_*o}else{l=l*p+u*o,h=h*p+f*o,d=d*p+m*o,c=c*p+_*o;const b=1/Math.sqrt(l*l+h*h+d*d+c*c);l*=b,h*=b,d*=b,c*=b}}e[t]=l,e[t+1]=h,e[t+2]=d,e[t+3]=c}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],h=n[i+2],d=n[i+3],c=s[a],u=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+d*c+l*f-h*u,e[t+1]=l*m+d*u+h*c-o*f,e[t+2]=h*m+d*f+o*u-l*c,e[t+3]=d*m-o*c-l*u-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(n/2),d=o(i/2),c=o(s/2),u=l(n/2),f=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=u*d*c+h*f*m,this._y=h*f*c-u*d*m,this._z=h*d*m+u*f*c,this._w=h*d*c-u*f*m;break;case"YXZ":this._x=u*d*c+h*f*m,this._y=h*f*c-u*d*m,this._z=h*d*m-u*f*c,this._w=h*d*c+u*f*m;break;case"ZXY":this._x=u*d*c-h*f*m,this._y=h*f*c+u*d*m,this._z=h*d*m+u*f*c,this._w=h*d*c-u*f*m;break;case"ZYX":this._x=u*d*c-h*f*m,this._y=h*f*c+u*d*m,this._z=h*d*m-u*f*c,this._w=h*d*c+u*f*m;break;case"YZX":this._x=u*d*c+h*f*m,this._y=h*f*c+u*d*m,this._z=h*d*m-u*f*c,this._w=h*d*c-u*f*m;break;case"XZY":this._x=u*d*c-h*f*m,this._y=h*f*c-u*d*m,this._z=h*d*m+u*f*c,this._w=h*d*c+u*f*m;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],h=t[2],d=t[6],c=t[10],u=n+o+c;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-h)*f,this._z=(a-i)*f}else if(n>o&&n>c){const f=2*Math.sqrt(1+n-o-c);this._w=(d-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+h)/f}else if(o>c){const f=2*Math.sqrt(1+o-n-c);this._w=(s-h)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+c-n-o);this._w=(a-i)/f,this._x=(s+h)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,h=t._z,d=t._w;return this._x=n*d+a*o+i*h-s*l,this._y=i*d+a*l+s*o-n*h,this._z=s*d+a*h+n*l-i*o,this._w=a*d-n*o-i*l-s*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const h=Math.acos(o),d=Math.sin(h);l=Math.sin(l*h)/d,t=Math.sin(t*h)/d,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*i-o*n),d=2*(o*t-s*i),c=2*(s*n-a*t);return this.x=t+l*h+a*c-o*d,this.y=n+l*d+o*h-s*c,this.z=i+l*c+s*d-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mo.copy(this).projectOnVector(e),this.sub(Mo)}reflect(e){return this.sub(Mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mo=new O,Bh=new cn;class ke{constructor(e,t,n,i,s,a,o,l,h){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,h)}set(e,t,n,i,s,a,o,l,h){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],d=n[4],c=n[7],u=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],b=i[1],y=i[4],v=i[7],E=i[2],w=i[5],A=i[8];return s[0]=a*_+o*b+l*E,s[3]=a*g+o*y+l*w,s[6]=a*p+o*v+l*A,s[1]=h*_+d*b+c*E,s[4]=h*g+d*y+c*w,s[7]=h*p+d*v+c*A,s[2]=u*_+f*b+m*E,s[5]=u*g+f*y+m*w,s[8]=u*p+f*v+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],d=e[8];return t*a*d-t*o*h-n*s*d+n*o*l+i*s*h-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],d=e[8],c=d*a-o*h,u=o*l-d*s,f=h*s-a*l,m=t*c+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=c*_,e[1]=(i*h-d*n)*_,e[2]=(o*n-i*a)*_,e[3]=u*_,e[4]=(d*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-h*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),h=Math.sin(s);return this.set(n*l,n*h,-n*(l*a+h*o)+a+e,-i*h,i*l,-i*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Eo.makeScale(e,t)),this}rotate(e){return this.premultiply(Eo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Eo=new ke,zh=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gh=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bm(){const r={enabled:!0,workingColorSpace:Jt,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(i.r=Mi(i.r),i.g=Mi(i.g),i.b=Mi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(i.r=qs(i.r),i.g=qs(i.g),i.b=qs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ki?Ja:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return $a("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return $a("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Jt]:{primaries:e,whitePoint:n,transfer:Ja,toXYZ:zh,fromXYZ:Gh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:zh,fromXYZ:Gh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),r}const qe=bm();function Mi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ms;class xm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ms===void 0&&(Ms=jr("canvas")),Ms.width=e.width,Ms.height=e.height;const i=Ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ms}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Mi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mi(t[n]/255)*255):t[n]=Mi(t[n]);return{data:t,width:e.width,height:e.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vm=0;class Gl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(To(i[a].image)):s.push(To(i[a]))}else s=To(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function To(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}let ym=0;const wo=new O;class Lt extends Xi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=vn,i=vn,s=Qe,a=Zn,o=Dn,l=bn,h=Lt.DEFAULT_ANISOTROPY,d=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=Gn(),this.name="",this.source=new Gl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wo).x}get height(){return this.source.getSize(wo).y}get depth(){return this.source.getSize(wo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Me(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Me(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _s:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _s:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Rd;Lt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,i=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,h=l[0],d=l[4],c=l[8],u=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(c-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(c+_)<.1&&Math.abs(m+g)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(h+1)/2,v=(f+1)/2,E=(p+1)/2,w=(d+u)/4,A=(c+_)/4,x=(m+g)/4;return y>v&&y>E?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=A/n):v>E?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=x/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=A/s,i=x/s),this.set(n,i,s,t),this}let b=Math.sqrt((g-m)*(g-m)+(c-_)*(c-_)+(u-d)*(u-d));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(c-_)/b,this.z=(u-d)/b,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sm extends Xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new Lt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Gl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends Sm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gd extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=It,this.minFilter=It,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mm extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=It,this.minFilter=It,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ue{constructor(e,t,n,i,s,a,o,l,h,d,c,u,f,m,_,g){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,h,d,c,u,f,m,_,g)}set(e,t,n,i,s,a,o,l,h,d,c,u,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=h,p[6]=d,p[10]=c,p[14]=u,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Es.setFromMatrixColumn(e,0).length(),s=1/Es.setFromMatrixColumn(e,1).length(),a=1/Es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),h=Math.sin(i),d=Math.cos(s),c=Math.sin(s);if(e.order==="XYZ"){const u=a*d,f=a*c,m=o*d,_=o*c;t[0]=l*d,t[4]=-l*c,t[8]=h,t[1]=f+m*h,t[5]=u-_*h,t[9]=-o*l,t[2]=_-u*h,t[6]=m+f*h,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,f=l*c,m=h*d,_=h*c;t[0]=u+_*o,t[4]=m*o-f,t[8]=a*h,t[1]=a*c,t[5]=a*d,t[9]=-o,t[2]=f*o-m,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,f=l*c,m=h*d,_=h*c;t[0]=u-_*o,t[4]=-a*c,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*d,t[9]=_-u*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,f=a*c,m=o*d,_=o*c;t[0]=l*d,t[4]=m*h-f,t[8]=u*h+_,t[1]=l*c,t[5]=_*h+u,t[9]=f*h-m,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*h,m=o*l,_=o*h;t[0]=l*d,t[4]=_-u*c,t[8]=m*c+f,t[1]=c,t[5]=a*d,t[9]=-o*d,t[2]=-h*d,t[6]=f*c+m,t[10]=u-_*c}else if(e.order==="XZY"){const u=a*l,f=a*h,m=o*l,_=o*h;t[0]=l*d,t[4]=-c,t[8]=h*d,t[1]=u*c+_,t[5]=a*d,t[9]=f*c-m,t[2]=m*c-f,t[6]=o*d,t[10]=_*c+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Em,e,Tm)}lookAt(e,t,n){const i=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ci.crossVectors(n,mn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ci.crossVectors(n,mn)),Ci.normalize(),ra.crossVectors(mn,Ci),i[0]=Ci.x,i[4]=ra.x,i[8]=mn.x,i[1]=Ci.y,i[5]=ra.y,i[9]=mn.y,i[2]=Ci.z,i[6]=ra.z,i[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],d=n[1],c=n[5],u=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],b=n[3],y=n[7],v=n[11],E=n[15],w=i[0],A=i[4],x=i[8],S=i[12],P=i[1],R=i[5],I=i[9],D=i[13],F=i[2],N=i[6],k=i[10],B=i[14],Z=i[3],Y=i[7],ie=i[11],ue=i[15];return s[0]=a*w+o*P+l*F+h*Z,s[4]=a*A+o*R+l*N+h*Y,s[8]=a*x+o*I+l*k+h*ie,s[12]=a*S+o*D+l*B+h*ue,s[1]=d*w+c*P+u*F+f*Z,s[5]=d*A+c*R+u*N+f*Y,s[9]=d*x+c*I+u*k+f*ie,s[13]=d*S+c*D+u*B+f*ue,s[2]=m*w+_*P+g*F+p*Z,s[6]=m*A+_*R+g*N+p*Y,s[10]=m*x+_*I+g*k+p*ie,s[14]=m*S+_*D+g*B+p*ue,s[3]=b*w+y*P+v*F+E*Z,s[7]=b*A+y*R+v*N+E*Y,s[11]=b*x+y*I+v*k+E*ie,s[15]=b*S+y*D+v*B+E*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],h=e[13],d=e[2],c=e[6],u=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15],b=l*f-h*u,y=o*f-h*c,v=o*u-l*c,E=a*f-h*d,w=a*u-l*d,A=a*c-o*d;return t*(_*b-g*y+p*v)-n*(m*b-g*E+p*w)+i*(m*y-_*E+p*A)-s*(m*v-_*w+g*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],d=e[8],c=e[9],u=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],b=t*o-n*a,y=t*l-i*a,v=t*h-s*a,E=n*l-i*o,w=n*h-s*o,A=i*h-s*l,x=d*_-c*m,S=d*g-u*m,P=d*p-f*m,R=c*g-u*_,I=c*p-f*_,D=u*p-f*g,F=b*D-y*I+v*R+E*P-w*S+A*x;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/F;return e[0]=(o*D-l*I+h*R)*N,e[1]=(i*I-n*D-s*R)*N,e[2]=(_*A-g*w+p*E)*N,e[3]=(u*w-c*A-f*E)*N,e[4]=(l*P-a*D-h*S)*N,e[5]=(t*D-i*P+s*S)*N,e[6]=(g*v-m*A-p*y)*N,e[7]=(d*A-u*v+f*y)*N,e[8]=(a*I-o*P+h*x)*N,e[9]=(n*P-t*I-s*x)*N,e[10]=(m*w-_*v+p*b)*N,e[11]=(c*v-d*w-f*b)*N,e[12]=(o*S-a*R-l*x)*N,e[13]=(t*R-n*S+i*x)*N,e[14]=(_*y-m*E-g*b)*N,e[15]=(d*E-c*y+u*b)*N,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,h=s*a,d=s*o;return this.set(h*a+n,h*o-i*l,h*l+i*o,0,h*o+i*l,d*o+n,d*l-i*a,0,h*l-i*o,d*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,h=s+s,d=a+a,c=o+o,u=s*h,f=s*d,m=s*c,_=a*d,g=a*c,p=o*c,b=l*h,y=l*d,v=l*c,E=n.x,w=n.y,A=n.z;return i[0]=(1-(_+p))*E,i[1]=(f+v)*E,i[2]=(m-y)*E,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(u+p))*w,i[6]=(g+b)*w,i[7]=0,i[8]=(m+y)*A,i[9]=(g-b)*A,i[10]=(1-(u+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Es.set(i[0],i[1],i[2]).length();const o=Es.set(i[4],i[5],i[6]).length(),l=Es.set(i[8],i[9],i[10]).length();s<0&&(a=-a),On.copy(this);const h=1/a,d=1/o,c=1/l;return On.elements[0]*=h,On.elements[1]*=h,On.elements[2]*=h,On.elements[4]*=d,On.elements[5]*=d,On.elements[6]*=d,On.elements[8]*=c,On.elements[9]*=c,On.elements[10]*=c,t.setFromRotationMatrix(On),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=$n,l=!1){const h=this.elements,d=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let m,_;if(l)m=s/(a-s),_=a*s/(a-s);else if(o===$n)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Wr)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=d,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=c,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=m,h[14]=_,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=$n,l=!1){const h=this.elements,d=2/(t-e),c=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,_;if(l)m=1/(a-s),_=a/(a-s);else if(o===$n)m=-2/(a-s),_=-(a+s)/(a-s);else if(o===Wr)m=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=d,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=c,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=m,h[14]=_,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Es=new O,On=new Ue,Em=new O(0,0,0),Tm=new O(1,1,1),Ci=new O,ra=new O,mn=new O,Vh=new Ue,Hh=new cn;class si{constructor(e=0,t=0,n=0,i=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],h=i[5],d=i[9],c=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class Vl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wm=0;const Wh=new O,Ts=new cn,di=new Ue,aa=new O,gr=new O,Am=new O,Rm=new cn,jh=new O(1,0,0),qh=new O(0,1,0),Xh=new O(0,0,1),Kh={type:"added"},Cm={type:"removed"},ws={type:"childadded",child:null},Ao={type:"childremoved",child:null};class vt extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new O,t=new si,n=new cn,i=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new ke}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(jh,e)}rotateY(e){return this.rotateOnAxis(qh,e)}rotateZ(e){return this.rotateOnAxis(Xh,e)}translateOnAxis(e,t){return Wh.copy(e).applyQuaternion(this.quaternion),this.position.add(Wh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jh,e)}translateY(e){return this.translateOnAxis(qh,e)}translateZ(e){return this.translateOnAxis(Xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?aa.copy(e):aa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(gr,aa,this.up):di.lookAt(aa,gr,this.up),this.quaternion.setFromRotationMatrix(di),i&&(di.extractRotation(i.matrixWorld),Ts.setFromRotationMatrix(di),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kh),ws.child=e,this.dispatchEvent(ws),ws.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cm),Ao.child=e,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kh),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,Am),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,Rm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){const c=l[h];s(e.shapes,c)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),h=a(e.textures),d=a(e.images),c=a(e.shapes),u=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),c.length>0&&(n.shapes=c),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const h in o){const d=o[h];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vt.DEFAULT_UP=new O(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class on extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pm={type:"move"};class Ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(h,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const d=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],u=d.position.distanceTo(c.position),f=.02,m=.005;h.inputState.pinching&&u>f+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=f-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new on;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},oa={h:0,s:0,l:0};function Co(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=zl(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Co(a,s,e+1/3),this.g=Co(a,s,e),this.b=Co(a,s,e-1/3)}return qe.colorSpaceToWorking(this,i),this}setStyle(e,t=St){function n(s){s!==void 0&&parseFloat(s)<1&&Me("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Me("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Me("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const n=Vd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Me("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return qe.workingToColorSpace(qt.copy(this),e),Math.round(ze(qt.r*255,0,255))*65536+Math.round(ze(qt.g*255,0,255))*256+Math.round(ze(qt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(qt.copy(this),t);const n=qt.r,i=qt.g,s=qt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,h;const d=(o+a)/2;if(o===a)l=0,h=0;else{const c=a-o;switch(h=d<=.5?c/(a+o):c/(2-a-o),a){case n:l=(i-s)/c+(i<s?6:0);break;case i:l=(s-n)/c+2;break;case s:l=(n-i)/c+4;break}l/=6}return e.h=l,e.s=h,e.l=d,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=St){qe.workingToColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,i=qt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(oa);const n=Or(Pi.h,oa.h,t),i=Or(Pi.s,oa.s,t),s=Or(Pi.l,oa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Ie;Ie.NAMES=Vd;class Hl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new Hl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Dm extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Nn=new O,fi=new O,Po=new O,pi=new O,As=new O,Rs=new O,Yh=new O,Do=new O,Io=new O,Lo=new O,Fo=new pt,Oo=new pt,No=new pt;class zn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Nn.subVectors(e,t),i.cross(Nn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Nn.subVectors(i,t),fi.subVectors(n,t),Po.subVectors(e,t);const a=Nn.dot(Nn),o=Nn.dot(fi),l=Nn.dot(Po),h=fi.dot(fi),d=fi.dot(Po),c=a*h-o*o;if(c===0)return s.set(0,0,0),null;const u=1/c,f=(h*l-o*d)*u,m=(a*d-o*l)*u;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(a,pi.y),l.addScaledVector(o,pi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Fo.setScalar(0),Oo.setScalar(0),No.setScalar(0),Fo.fromBufferAttribute(e,t),Oo.fromBufferAttribute(e,n),No.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Fo,s.x),a.addScaledVector(Oo,s.y),a.addScaledVector(No,s.z),a}static isFrontFacing(e,t,n,i){return Nn.subVectors(n,t),fi.subVectors(e,t),Nn.cross(fi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Nn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return zn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;As.subVectors(i,n),Rs.subVectors(s,n),Do.subVectors(e,n);const l=As.dot(Do),h=Rs.dot(Do);if(l<=0&&h<=0)return t.copy(n);Io.subVectors(e,i);const d=As.dot(Io),c=Rs.dot(Io);if(d>=0&&c<=d)return t.copy(i);const u=l*c-d*h;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(As,a);Lo.subVectors(e,s);const f=As.dot(Lo),m=Rs.dot(Lo);if(m>=0&&f<=m)return t.copy(s);const _=f*h-l*m;if(_<=0&&h>=0&&m<=0)return o=h/(h-m),t.copy(n).addScaledVector(Rs,o);const g=d*m-f*c;if(g<=0&&c-d>=0&&f-m>=0)return Yh.subVectors(s,i),o=(c-d)/(c-d+(f-m)),t.copy(i).addScaledVector(Yh,o);const p=1/(g+_+u);return a=_*p,o=u*p,t.copy(n).addScaledVector(As,a).addScaledVector(Rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class oi{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(s,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(e.matrixWorld),this.union(ca)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),la.subVectors(this.max,_r),Cs.subVectors(e.a,_r),Ps.subVectors(e.b,_r),Ds.subVectors(e.c,_r),Di.subVectors(Ps,Cs),Ii.subVectors(Ds,Ps),Zi.subVectors(Cs,Ds);let t=[0,-Di.z,Di.y,0,-Ii.z,Ii.y,0,-Zi.z,Zi.y,Di.z,0,-Di.x,Ii.z,0,-Ii.x,Zi.z,0,-Zi.x,-Di.y,Di.x,0,-Ii.y,Ii.x,0,-Zi.y,Zi.x,0];return!ko(t,Cs,Ps,Ds,la)||(t=[1,0,0,0,1,0,0,0,1],!ko(t,Cs,Ps,Ds,la))?!1:(ha.crossVectors(Di,Ii),t=[ha.x,ha.y,ha.z],ko(t,Cs,Ps,Ds,la))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mi=[new O,new O,new O,new O,new O,new O,new O,new O],kn=new O,ca=new oi,Cs=new O,Ps=new O,Ds=new O,Di=new O,Ii=new O,Zi=new O,_r=new O,la=new O,ha=new O,$i=new O;function ko(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){$i.fromArray(r,s);const o=i.x*Math.abs($i.x)+i.y*Math.abs($i.y)+i.z*Math.abs($i.z),l=e.dot($i),h=t.dot($i),d=n.dot($i);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>o)return!1}return!0}const vi=Im();function Im(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const h=l-127;h<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):h<-14?(n[l]=1024>>-h-14,n[l|256]=1024>>-h-14|32768,i[l]=-h-1,i[l|256]=-h-1):h<=15?(n[l]=h+15<<10,n[l|256]=h+15<<10|32768,i[l]=13,i[l|256]=13):h<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,d=0;for(;(h&8388608)===0;)h<<=1,d-=8388608;h&=-8388609,d+=947912704,s[l]=h|d}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function Lm(r){Math.abs(r)>65504&&Me("DataUtils.toHalfFloat(): Value out of range."),r=ze(r,-65504,65504),vi.floatView[0]=r;const e=vi.uint32View[0],t=e>>23&511;return vi.baseTable[t]+((e&8388607)>>vi.shiftTable[t])}function Fm(r){const e=r>>10;return vi.uint32View[0]=vi.mantissaTable[vi.offsetTable[e]+(r&1023)]+vi.exponentTable[e],vi.floatView[0]}class ua{static toHalfFloat(e){return Lm(e)}static fromHalfFloat(e){return Fm(e)}}const Ct=new O,da=new Re;let Om=0;class nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Om++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rl,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)da.fromBufferAttribute(this,t),da.applyMatrix3(e),this.setXY(t,da.x,da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rl&&(e.usage=this.usage),e}}class Hd extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wd extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Nm=new oi,br=new O,Uo=new O;class ci{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);const t=br.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(br,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(Uo)),this.expandByPoint(br.copy(e.center).sub(Uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let km=0;const Rn=new Ue,Bo=new vt,Is=new O,gn=new oi,xr=new oi,Ut=new O;class Ht extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zp(e)?Wd:Hd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return Bo.lookAt(e),Bo.updateMatrix(),this.applyMatrix4(Bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ft(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];xr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(gn.min,xr.min),gn.expandByPoint(Ut),Ut.addVectors(gn.max,xr.max),gn.expandByPoint(Ut)):(gn.expandByPoint(xr.min),gn.expandByPoint(xr.max))}gn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ut));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let h=0,d=o.count;h<d;h++)Ut.fromBufferAttribute(o,h),l&&(Is.fromBufferAttribute(e,h),Ut.add(Is)),i=Math.max(i,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new O,l[x]=new O;const h=new O,d=new O,c=new O,u=new Re,f=new Re,m=new Re,_=new O,g=new O;function p(x,S,P){h.fromBufferAttribute(n,x),d.fromBufferAttribute(n,S),c.fromBufferAttribute(n,P),u.fromBufferAttribute(s,x),f.fromBufferAttribute(s,S),m.fromBufferAttribute(s,P),d.sub(h),c.sub(h),f.sub(u),m.sub(u);const R=1/(f.x*m.y-m.x*f.y);isFinite(R)&&(_.copy(d).multiplyScalar(m.y).addScaledVector(c,-f.y).multiplyScalar(R),g.copy(c).multiplyScalar(f.x).addScaledVector(d,-m.x).multiplyScalar(R),o[x].add(_),o[S].add(_),o[P].add(_),l[x].add(g),l[S].add(g),l[P].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let x=0,S=b.length;x<S;++x){const P=b[x],R=P.start,I=P.count;for(let D=R,F=R+I;D<F;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const y=new O,v=new O,E=new O,w=new O;function A(x){E.fromBufferAttribute(i,x),w.copy(E);const S=o[x];y.copy(S),y.sub(E.multiplyScalar(E.dot(S))).normalize(),v.crossVectors(w,S);const R=v.dot(l[x])<0?-1:1;a.setXYZW(x,y.x,y.y,y.z,R)}for(let x=0,S=b.length;x<S;++x){const P=b[x],R=P.start,I=P.count;for(let D=R,F=R+I;D<F;D+=3)A(e.getX(D+0)),A(e.getX(D+1)),A(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new O,s=new O,a=new O,o=new O,l=new O,h=new O,d=new O,c=new O;if(e)for(let u=0,f=e.count;u<f;u+=3){const m=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),d.subVectors(a,s),c.subVectors(i,s),d.cross(c),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,g),o.add(d),l.add(d),h.add(d),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,s),c.subVectors(i,s),d.cross(c),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const h=o.array,d=o.itemSize,c=o.normalized,u=new h.constructor(l.length*d);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*d;for(let p=0;p<d;p++)u[m++]=h[f++]}return new nn(u,d,c)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],h=e(l,n);t.setAttribute(o,h)}const s=this.morphAttributes;for(const o in s){const l=[],h=s[o];for(let d=0,c=h.length;d<c;d++){const u=h[d],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],d=[];for(let c=0,u=h.length;c<u;c++){const f=h[c];d.push(f.toJSON(e.data))}d.length>0&&(i[l]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const h in i){const d=i[h];this.setAttribute(h,d.clone(t))}const s=e.morphAttributes;for(const h in s){const d=[],c=s[h];for(let u=0,f=c.length;u<f;u++)d.push(c[u].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,d=a.length;h<d;h++){const c=a[h];this.addGroup(c.start,c.count,c.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Um{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rl,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new O;class Wl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Za("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Za("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Bm=0;class ni extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=js,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=bc,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Me(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Me(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(n.blending=this.blending),this.side!==sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_c&&(n.blendSrc=this.blendSrc),this.blendDst!==bc&&(n.blendDst=this.blendDst),this.blendEquation!==os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gi=new O,zo=new O,fa=new O,Li=new O,Go=new O,pa=new O,Vo=new O;class hr{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){zo.copy(e).add(t).multiplyScalar(.5),fa.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(zo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(fa),o=Li.dot(this.direction),l=-Li.dot(fa),h=Li.lengthSq(),d=Math.abs(1-a*a);let c,u,f,m;if(d>0)if(c=a*l-o,u=a*o-l,m=s*d,c>=0)if(u>=-m)if(u<=m){const _=1/d;c*=_,u*=_,f=c*(c+a*u+2*o)+u*(a*c+u+2*l)+h}else u=s,c=Math.max(0,-(a*u+o)),f=-c*c+u*(u+2*l)+h;else u=-s,c=Math.max(0,-(a*u+o)),f=-c*c+u*(u+2*l)+h;else u<=-m?(c=Math.max(0,-(-a*s+o)),u=c>0?-s:Math.min(Math.max(-s,-l),s),f=-c*c+u*(u+2*l)+h):u<=m?(c=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+h):(c=Math.max(0,-(a*s+o)),u=c>0?s:Math.min(Math.max(-s,-l),s),f=-c*c+u*(u+2*l)+h);else u=a>0?-s:s,c=Math.max(0,-(a*u+o)),f=-c*c+u*(u+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(zo).addScaledVector(fa,u),f}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const n=gi.dot(this.direction),i=gi.dot(gi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const h=1/this.direction.x,d=1/this.direction.y,c=1/this.direction.z,u=this.origin;return h>=0?(n=(e.min.x-u.x)*h,i=(e.max.x-u.x)*h):(n=(e.max.x-u.x)*h,i=(e.min.x-u.x)*h),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),c>=0?(o=(e.min.z-u.z)*c,l=(e.max.z-u.z)*c):(o=(e.max.z-u.z)*c,l=(e.min.z-u.z)*c),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,i,s){Go.subVectors(t,e),pa.subVectors(n,e),Vo.crossVectors(Go,pa);let a=this.direction.dot(Vo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Li.subVectors(this.origin,e);const l=o*this.direction.dot(pa.crossVectors(Li,pa));if(l<0)return null;const h=o*this.direction.dot(Go.cross(Li));if(h<0||l+h>a)return null;const d=-o*Li.dot(Vo);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Sn extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jh=new Ue,Qi=new hr,ma=new ci,Zh=new O,ga=new O,_a=new O,ba=new O,Ho=new O,xa=new O,$h=new O,va=new O;class me extends vt{constructor(e=new Ht,t=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){xa.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const d=o[l],c=s[l];d!==0&&(Ho.fromBufferAttribute(c,e),a?xa.addScaledVector(Ho,d):xa.addScaledVector(Ho.sub(t),d))}t.add(xa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),Qi.copy(e.ray).recast(e.near),!(ma.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(ma,Zh)===null||Qi.origin.distanceToSquared(Zh)>(e.far-e.near)**2))&&(Jh.copy(s).invert(),Qi.copy(e.ray).applyMatrix4(Jh),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,h=s.attributes.uv,d=s.attributes.uv1,c=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=a[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,E=y;v<E;v+=3){const w=o.getX(v),A=o.getX(v+1),x=o.getX(v+2);i=ya(this,p,e,n,h,d,c,w,A,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const b=o.getX(g),y=o.getX(g+1),v=o.getX(g+2);i=ya(this,a,e,n,h,d,c,b,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=a[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,E=y;v<E;v+=3){const w=v,A=v+1,x=v+2;i=ya(this,p,e,n,h,d,c,w,A,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const b=g,y=g+1,v=g+2;i=ya(this,a,e,n,h,d,c,b,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function zm(r,e,t,n,i,s,a,o){let l;if(e.side===tn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===sn,o),l===null)return null;va.copy(o),va.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(va);return h<t.near||h>t.far?null:{distance:h,point:va.clone(),object:r}}function ya(r,e,t,n,i,s,a,o,l,h){r.getVertexPosition(o,ga),r.getVertexPosition(l,_a),r.getVertexPosition(h,ba);const d=zm(r,e,t,n,ga,_a,ba,$h);if(d){const c=new O;zn.getBarycoord($h,ga,_a,ba,c),i&&(d.uv=zn.getInterpolatedAttribute(i,o,l,h,c,new Re)),s&&(d.uv1=zn.getInterpolatedAttribute(s,o,l,h,c,new Re)),a&&(d.normal=zn.getInterpolatedAttribute(a,o,l,h,c,new O),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c:h,normal:new O,materialIndex:0};zn.getNormal(ga,_a,ba,u.normal),d.face=u,d.barycoord=c}return d}const Qh=new O,eu=new pt,tu=new pt,Gm=new O,nu=new Ue,Sa=new O,Wo=new ci,iu=new Ue,jo=new hr;class Vm extends me{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lh,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new oi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sa),this.boundingBox.expandByPoint(Sa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ci),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sa),this.boundingSphere.expandByPoint(Sa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wo.copy(this.boundingSphere),Wo.applyMatrix4(i),e.ray.intersectsSphere(Wo)!==!1&&(iu.copy(i).invert(),jo.copy(e.ray).applyMatrix4(iu),!(this.boundingBox!==null&&jo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Bp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Me("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;eu.fromBufferAttribute(i.attributes.skinIndex,e),tu.fromBufferAttribute(i.attributes.skinWeight,e),Qh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=tu.getComponent(s);if(a!==0){const o=eu.getComponent(s);nu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Gm.copy(Qh).applyMatrix4(nu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class jd extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class lo extends Lt{constructor(e=null,t=1,n=1,i,s,a,o,l,h=It,d=It,c,u){super(null,a,o,l,h,d,i,s,c,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const su=new Ue,Hm=new Ue;class jl{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Me("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Hm;su.multiplyMatrices(o,t[s]),su.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new jl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new lo(t,e,e,Dn,en);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(Me("Skeleton: No bone found with UUID:",s),a=new jd),this.bones.push(a),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class al extends nn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ls=new Ue,ru=new Ue,Ma=[],au=new oi,Wm=new Ue,vr=new me,yr=new ci;class jm extends me{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new al(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Wm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),au.copy(e.boundingBox).applyMatrix4(Ls),this.boundingBox.union(au)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),yr.copy(e.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),e.ray.intersectsSphere(yr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ls),ru.multiplyMatrices(n,Ls),vr.matrixWorld=ru,vr.raycast(e,Ma);for(let a=0,o=Ma.length;a<o;a++){const l=Ma[a];l.instanceId=s,l.object=this,t.push(l)}Ma.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new al(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new lo(new Float32Array(i*this.count),i,this.count,Ll,en));const s=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qo=new O,qm=new O,Xm=new ke;class Ni{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=qo.subVectors(n,t).cross(qm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xm.getNormalMatrix(e),i=this.coplanarPoint(qo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new ci,Km=new Re(.5,.5),Ea=new O;class ql{constructor(e=new Ni,t=new Ni,n=new Ni,i=new Ni,s=new Ni,a=new Ni){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],h=s[3],d=s[4],c=s[5],u=s[6],f=s[7],m=s[8],_=s[9],g=s[10],p=s[11],b=s[12],y=s[13],v=s[14],E=s[15];if(i[0].setComponents(h-a,f-d,p-m,E-b).normalize(),i[1].setComponents(h+a,f+d,p+m,E+b).normalize(),i[2].setComponents(h+o,f+c,p+_,E+y).normalize(),i[3].setComponents(h-o,f-c,p-_,E-y).normalize(),n)i[4].setComponents(l,u,g,v).normalize(),i[5].setComponents(h-l,f-u,p-g,E-v).normalize();else if(i[4].setComponents(h-l,f-u,p-g,E-v).normalize(),t===$n)i[5].setComponents(h+l,f+u,p+g,E+v).normalize();else if(t===Wr)i[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){es.center.set(0,0,0);const t=Km.distanceTo(e.center);return es.radius=.7071067811865476+t,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ea.x=i.normal.x>0?e.max.x:e.min.x,Ea.y=i.normal.y>0?e.max.y:e.min.y,Ea.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qd extends ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qa=new O,eo=new O,ou=new Ue,Sr=new hr,Ta=new ci,Xo=new O,cu=new O;class Xl extends vt{constructor(e=new Ht,t=new qd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Qa.fromBufferAttribute(t,i-1),eo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Qa.distanceTo(eo);e.setAttribute("lineDistance",new ft(n,1))}else Me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(i),Ta.radius+=s,e.ray.intersectsSphere(Ta)===!1)return;ou.copy(i).invert(),Sr.copy(e.ray).applyMatrix4(ou);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=h){const p=d.getX(_),b=d.getX(_+1),y=wa(this,e,Sr,l,p,b,_);y&&t.push(y)}if(this.isLineLoop){const _=d.getX(m-1),g=d.getX(f),p=wa(this,e,Sr,l,_,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=h){const p=wa(this,e,Sr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=wa(this,e,Sr,l,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function wa(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(Qa.fromBufferAttribute(o,i),eo.fromBufferAttribute(o,s),t.distanceSqToSegment(Qa,eo,Xo,cu)>n)return;Xo.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(Xo);if(!(h<e.near||h>e.far))return{distance:h,point:cu.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const lu=new O,hu=new O;class Ym extends Xl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)lu.fromBufferAttribute(t,i),hu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+lu.distanceTo(hu);e.setAttribute("lineDistance",new ft(n,1))}else Me("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jm extends Xl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Xd extends ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const uu=new Ue,ol=new hr,Aa=new ci,Ra=new O;class Zm extends vt{constructor(e=new Ht,t=new Xd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(i),Aa.radius+=s,e.ray.intersectsSphere(Aa)===!1)return;uu.copy(i).invert(),ol.copy(e.ray).applyMatrix4(uu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=n.index,c=n.attributes.position;if(h!==null){const u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let m=u,_=f;m<_;m++){const g=h.getX(m);Ra.fromBufferAttribute(c,g),du(Ra,g,l,i,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=u,_=f;m<_;m++)Ra.fromBufferAttribute(c,m),du(Ra,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function du(r,e,t,n,i,s,a){const o=ol.distanceSqToPoint(r);if(o<t){const l=new O;ol.closestPointToPoint(r,l),l.applyMatrix4(n);const h=i.ray.origin.distanceTo(l);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Kd extends Lt{constructor(e=[],t=gs,n,i,s,a,o,l,h,d){super(e,t,n,i,s,a,o,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ho extends Lt{constructor(e,t,n,i,s,a,o,l,h){super(e,t,n,i,s,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qr extends Lt{constructor(e,t,n=ii,i,s,a,o=It,l=It,h,d=Ei,c=1){if(d!==Ei&&d!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:c};super(u,i,s,a,o,l,d,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $m extends qr{constructor(e,t=ii,n=gs,i,s,a=It,o=It,l,h=Ei){const d={width:e,height:e,depth:1},c=[d,d,d,d,d,d];super(e,e,t,n,i,s,a,o,l,h),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Yd extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gt extends Ht{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],h=[],d=[],c=[];let u=0,f=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ft(h,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(c,2));function m(_,g,p,b,y,v,E,w,A,x,S){const P=v/A,R=E/x,I=v/2,D=E/2,F=w/2,N=A+1,k=x+1;let B=0,Z=0;const Y=new O;for(let ie=0;ie<k;ie++){const ue=ie*R-D;for(let ee=0;ee<N;ee++){const Ae=ee*P-I;Y[_]=Ae*b,Y[g]=ue*y,Y[p]=F,h.push(Y.x,Y.y,Y.z),Y[_]=0,Y[g]=0,Y[p]=w>0?1:-1,d.push(Y.x,Y.y,Y.z),c.push(ee/A),c.push(1-ie/x),B+=1}}for(let ie=0;ie<x;ie++)for(let ue=0;ue<A;ue++){const ee=u+ue+N*ie,Ae=u+ue+N*(ie+1),je=u+(ue+1)+N*(ie+1),Ke=u+(ue+1)+N*ie;l.push(ee,Ae,Ke),l.push(Ae,je,Ke),Z+=6}o.addGroup(f,Z,S),f+=Z,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Kl extends Ht{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],h=new O,d=new Re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let c=0,u=3;c<=t;c++,u+=3){const f=n+c/t*i;h.x=e*Math.cos(f),h.y=e*Math.sin(f),a.push(h.x,h.y,h.z),o.push(0,0,1),d.x=(a[u]/e+1)/2,d.y=(a[u+1]/e+1)/2,l.push(d.x,d.y)}for(let c=1;c<=t;c++)s.push(c,c+1,0);this.setIndex(s),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(o,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Kt extends Ht{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const h=this;i=Math.floor(i),s=Math.floor(s);const d=[],c=[],u=[],f=[];let m=0;const _=[],g=n/2;let p=0;b(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(f,2));function b(){const v=new O,E=new O;let w=0;const A=(t-e)/n;for(let x=0;x<=s;x++){const S=[],P=x/s,R=P*(t-e)+e;for(let I=0;I<=i;I++){const D=I/i,F=D*l+o,N=Math.sin(F),k=Math.cos(F);E.x=R*N,E.y=-P*n+g,E.z=R*k,c.push(E.x,E.y,E.z),v.set(N,A,k).normalize(),u.push(v.x,v.y,v.z),f.push(D,1-P),S.push(m++)}_.push(S)}for(let x=0;x<i;x++)for(let S=0;S<s;S++){const P=_[S][x],R=_[S+1][x],I=_[S+1][x+1],D=_[S][x+1];(e>0||S!==0)&&(d.push(P,R,D),w+=3),(t>0||S!==s-1)&&(d.push(R,I,D),w+=3)}h.addGroup(p,w,0),p+=w}function y(v){const E=m,w=new Re,A=new O;let x=0;const S=v===!0?e:t,P=v===!0?1:-1;for(let I=1;I<=i;I++)c.push(0,g*P,0),u.push(0,P,0),f.push(.5,.5),m++;const R=m;for(let I=0;I<=i;I++){const F=I/i*l+o,N=Math.cos(F),k=Math.sin(F);A.x=S*k,A.y=g*P,A.z=S*N,c.push(A.x,A.y,A.z),u.push(0,P,0),w.x=N*.5+.5,w.y=k*.5*P+.5,f.push(w.x,w.y),m++}for(let I=0;I<i;I++){const D=E+I,F=R+I;v===!0?d.push(F,F+1,D):d.push(F+1,F,D),x+=3}h.addGroup(p,x,v===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vn extends Ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),h=o+1,d=l+1,c=e/o,u=t/l,f=[],m=[],_=[],g=[];for(let p=0;p<d;p++){const b=p*u-a;for(let y=0;y<h;y++){const v=y*c-s;m.push(v,-b,0),_.push(0,0,1),g.push(y/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const y=b+h*p,v=b+h*(p+1),E=b+1+h*(p+1),w=b+1+h*p;f.push(y,v,w),f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new ft(m,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.width,e.height,e.widthSegments,e.heightSegments)}}class ur extends Ht{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],h=[],d=[];let c=e;const u=(t-e)/i,f=new O,m=new Re;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const p=s+g/n*a;f.x=c*Math.cos(p),f.y=c*Math.sin(p),l.push(f.x,f.y,f.z),h.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,d.push(m.x,m.y)}c+=u}for(let _=0;_<i;_++){const g=_*(n+1);for(let p=0;p<n;p++){const b=p+g,y=b,v=b+n+1,E=b+n+2,w=b+1;o.push(y,v,w),o.push(v,E,w)}}this.setIndex(o),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Yl extends Ht{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let h=0;const d=[],c=new O,u=new O,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const b=[],y=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){const w=E/t;c.x=-e*Math.cos(i+w*s)*Math.sin(a+y*o),c.y=e*Math.cos(a+y*o),c.z=e*Math.sin(i+w*s)*Math.sin(a+y*o),m.push(c.x,c.y,c.z),u.copy(c).normalize(),_.push(u.x,u.y,u.z),g.push(w+v,1-y),b.push(h++)}d.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const y=d[p][b+1],v=d[p][b],E=d[p+1][b],w=d[p+1][b+1];(p!==0||a>0)&&f.push(y,v,w),(p!==n-1||l<Math.PI)&&f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new ft(m,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class us extends Ht{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],h=[],d=[],c=[],u=new O,f=new O,m=new O;for(let _=0;_<=n;_++){const g=a+_/n*o;for(let p=0;p<=i;p++){const b=p/i*s;f.x=(e+t*Math.cos(g))*Math.cos(b),f.y=(e+t*Math.cos(g))*Math.sin(b),f.z=t*Math.sin(g),h.push(f.x,f.y,f.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),m.subVectors(f,u).normalize(),d.push(m.x,m.y,m.z),c.push(p/i),c.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=i;g++){const p=(i+1)*_+g-1,b=(i+1)*(_-1)+g-1,y=(i+1)*(_-1)+g,v=(i+1)*_+g;l.push(p,b,v),l.push(b,y,v)}this.setIndex(l),this.setAttribute("position",new ft(h,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function tr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $t(r){const e={};for(let t=0;t<r.length;t++){const n=tr(r[t]);for(const i in n)e[i]=n[i]}return e}function Qm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Jd(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const eg={clone:tr,merge:$t};var tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tg,this.fragmentShader=ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=Qm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ig extends ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mt extends ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ud,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class li extends mt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class sg extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rg extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ca(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ag(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function fu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function Zd(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class dr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class og extends dr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zs,endingEnd:zs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gs:s=e,o=2*t-n;break;case Ya:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gs:a=e,l=2*n-t;break;case Ya:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const h=(n-t)*.5,d=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-n),this._offsetPrev=s*d,this._offsetNext=a*d}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,d=this._offsetPrev,c=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,p=-u*g+2*u*_-u*m,b=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*m+1,y=(-1-f)*g+(1.5+f)*_+.5*m,v=f*g-f*_;for(let E=0;E!==o;++E)s[E]=p*a[d+E]+b*a[h+E]+y*a[l+E]+v*a[c+E];return s}}class $d extends dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,d=(n-t)/(i-t),c=1-d;for(let u=0;u!==o;++u)s[u]=a[h+u]*c+a[l+u]*d;return s}}class cg extends dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class lg extends dr{interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,d=this.settings||this.DefaultSettings_,c=d.inTangents,u=d.outTangents;if(!c||!u){const _=(n-t)/(i-t),g=1-_;for(let p=0;p!==o;++p)s[p]=a[h+p]*g+a[l+p]*_;return s}const f=o*2,m=e-1;for(let _=0;_!==o;++_){const g=a[h+_],p=a[l+_],b=m*f+_*2,y=u[b],v=u[b+1],E=e*f+_*2,w=c[E],A=c[E+1];let x=(n-t)/(i-t),S,P,R,I,D;for(let F=0;F<8;F++){S=x*x,P=S*x,R=1-x,I=R*R,D=I*R;const k=D*t+3*I*x*y+3*R*S*w+P*i-n;if(Math.abs(k)<1e-10)break;const B=3*I*(y-t)+6*R*x*(w-y)+3*S*(i-w);if(Math.abs(B)<1e-10)break;x=x-k/B,x=Math.max(0,Math.min(1,x))}s[_]=D*g+3*I*x*v+3*R*S*A+P*p}return s}}class Hn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ca(t,this.TimeBufferType),this.values=Ca(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ca(e.times,Array),values:Ca(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $d(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new og(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new lg(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Vr:t=this.InterpolantFactoryMethodDiscrete;break;case Hr:t=this.InterpolantFactoryMethodLinear;break;case So:t=this.InterpolantFactoryMethodSmooth;break;case Fh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Me("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return So;case this.InterpolantFactoryMethodBezier:return Fh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Pe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Pe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&$p(i))for(let o=0,l=i.length;o!==l;++o){const h=i[o];if(isNaN(h)){Pe("KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===So,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const h=e[o],d=e[o+1];if(h!==d&&(o!==1||h!==e[0]))if(i)l=!0;else{const c=o*n,u=c-n,f=c+n;for(let m=0;m!==n;++m){const _=t[c+m];if(_!==t[u+m]||_!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const c=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[c+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,h=0;h!==n;++h)t[l+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Hr;class fr extends Hn{constructor(e,t,n){super(e,t,n)}}fr.prototype.ValueTypeName="bool";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=Vr;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;class Qd extends Hn{constructor(e,t,n,i){super(e,t,n,i)}}Qd.prototype.ValueTypeName="color";class nr extends Hn{constructor(e,t,n,i){super(e,t,n,i)}}nr.prototype.ValueTypeName="number";class hg extends dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let h=e*o;for(let d=h+o;h!==d;h+=4)cn.slerpFlat(s,0,a,h-o,a,h,l);return s}}class ir extends Hn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new hg(this.times,this.values,this.getValueSize(),e)}}ir.prototype.ValueTypeName="quaternion";ir.prototype.InterpolantFactoryMethodSmooth=void 0;class pr extends Hn{constructor(e,t,n){super(e,t,n)}}pr.prototype.ValueTypeName="string";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=Vr;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;class sr extends Hn{constructor(e,t,n,i){super(e,t,n,i)}}sr.prototype.ValueTypeName="vector";class cl{constructor(e="",t=-1,n=[],i=kl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Gn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(dg(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Hn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],h=[];l.push((o+s-1)%s,o,(o+1)%s),h.push(0,1,0);const d=ag(l);l=fu(l,1,d),h=fu(h,1,d),!i&&l[0]===0&&(l.push(s),h.push(h[0])),a.push(new nr(".morphTargetInfluences["+t[o].name+"]",l,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const h=e[o],d=h.name.match(s);if(d&&d.length>1){const c=d[1];let u=i[c];u||(i[c]=u=[]),u.push(h)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Me("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Pe("AnimationClip: No animation in JSONLoader data."),null;const n=function(c,u,f,m,_){if(f.length!==0){const g=[],p=[];Zd(f,g,p,m),g.length!==0&&_.push(new c(u,g,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let c=0;c<h.length;c++){const u=h[c].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let _=0;_<u[m].morphTargets.length;_++)f[u[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let b=0;b!==u[m].morphTargets.length;++b){const y=u[m];g.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new nr(".morphTargetInfluence["+_+"]",g,p))}l=f.length*a}else{const f=".bones["+t[c].name+"]";n(sr,f+".position",u,"pos",i),n(ir,f+".quaternion",u,"rot",i),n(sr,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function ug(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return nr;case"vector":case"vector2":case"vector3":case"vector4":return sr;case"color":return Qd;case"quaternion":return ir;case"bool":case"boolean":return fr;case"string":return pr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function dg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ug(r.type);if(r.times===void 0){const t=[],n=[];Zd(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const yi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(pu(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!pu(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function pu(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class fg{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,s===!1&&i.onStart!==void 0&&i.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,i.onProgress!==void 0&&i.onProgress(d,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,c){return h.push(d,c),this},this.removeHandler=function(d){const c=h.indexOf(d);return c!==-1&&h.splice(c,2),this},this.getHandler=function(d){for(let c=0,u=h.length;c<u;c+=2){const f=h[c],m=h[c+1];if(f.global&&(f.lastIndex=0),f.test(d))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const pg=new fg;class bs{constructor(e){this.manager=e!==void 0?e:pg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}bs.DEFAULT_MATERIAL_NAME="__DEFAULT";const _i={};class mg extends Error{constructor(e,t){super(e),this.response=t}}class Jl extends bs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=yi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(_i[e]!==void 0){_i[e].push({onLoad:t,onProgress:n,onError:i});return}_i[e]=[],_i[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&Me("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const d=_i[e],c=h.body.getReader(),u=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),f=u?parseInt(u):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){b();function b(){c.read().then(({done:y,value:v})=>{if(y)p.close();else{_+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let w=0,A=d.length;w<A;w++){const x=d[w];x.onProgress&&x.onProgress(E)}p.enqueue(v),b()}},y=>{p.error(y)})}}});return new Response(g)}else throw new mg(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return h.json();default:if(o==="")return h.text();{const c=/charset="?([^;"\s]*)"?/i.exec(o),u=c&&c[1]?c[1].toLowerCase():void 0,f=new TextDecoder(u);return h.arrayBuffer().then(m=>f.decode(m))}}}).then(h=>{yi.add(`file:${e}`,h);const d=_i[e];delete _i[e];for(let c=0,u=d.length;c<u;c++){const f=d[c];f.onLoad&&f.onLoad(h)}}).catch(h=>{const d=_i[e];if(d===void 0)throw this.manager.itemError(e),h;delete _i[e];for(let c=0,u=d.length;c<u;c++){const f=d[c];f.onError&&f.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Fs=new WeakMap;class gg extends bs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=yi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let c=Fs.get(a);c===void 0&&(c=[],Fs.set(a,c)),c.push({onLoad:t,onError:i})}return a}const o=jr("img");function l(){d(),t&&t(this);const c=Fs.get(this)||[];for(let u=0;u<c.length;u++){const f=c[u];f.onLoad&&f.onLoad(this)}Fs.delete(this),s.manager.itemEnd(e)}function h(c){d(),i&&i(c),yi.remove(`image:${e}`);const u=Fs.get(this)||[];for(let f=0;f<u.length;f++){const m=u[f];m.onError&&m.onError(c)}Fs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),yi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class _g extends bs{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new lo,o=new Jl(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let h;try{h=s.parse(l)}catch(d){if(i!==void 0)i(d);else{d(d);return}}h.image!==void 0?a.image=h.image:h.data!==void 0&&(a.image.width=h.width,a.image.height=h.height,a.image.data=h.data),a.wrapS=h.wrapS!==void 0?h.wrapS:vn,a.wrapT=h.wrapT!==void 0?h.wrapT:vn,a.magFilter=h.magFilter!==void 0?h.magFilter:Qe,a.minFilter=h.minFilter!==void 0?h.minFilter:Qe,a.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(a.colorSpace=h.colorSpace),h.flipY!==void 0&&(a.flipY=h.flipY),h.format!==void 0&&(a.format=h.format),h.type!==void 0&&(a.type=h.type),h.mipmaps!==void 0&&(a.mipmaps=h.mipmaps,a.minFilter=Zn),h.mipmapCount===1&&(a.minFilter=Qe),h.generateMipmaps!==void 0&&(a.generateMipmaps=h.generateMipmaps),a.needsUpdate=!0,t&&t(a,h)},n,i),a}}class bg extends bs{constructor(e){super(e)}load(e,t,n,i){const s=new Lt,a=new gg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class uo extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ko=new Ue,mu=new O,gu=new O;class Zl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ql,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;mu.setFromMatrixPosition(e.matrixWorld),t.position.copy(mu),gu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gu),t.updateMatrixWorld(),Ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ko,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Wr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Pa=new O,Da=new cn,jn=new O;let ef=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pa,Da,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,Da,jn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Pa,Da,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,Da,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const Fi=new O,_u=new Re,bu=new Re;class Qt extends ef{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,_u,bu),t.subVectors(bu,_u)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/h,i*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class xg extends Zl{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=er*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ha extends uo{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new xg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class vg extends Zl{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0}}class ta extends uo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class fo extends ef{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yg extends Zl{constructor(){super(new fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $l extends uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new yg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Sg extends uo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Nr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Yo=new WeakMap;class Mg extends bs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Me("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Me("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=yi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(h=>{if(Yo.has(a)===!0)i&&i(Yo.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(h),s.manager.itemEnd(e),h});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return yi.add(`image-bitmap:${e}`,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),Yo.set(l,h),yi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});yi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Os=-90,Ns=1;class Eg extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Qt(Os,Ns,e,t);i.layers=this.layers,this.add(i);const s=new Qt(Os,Ns,e,t);s.layers=this.layers,this.add(s);const a=new Qt(Os,Ns,e,t);a.layers=this.layers,this.add(a);const o=new Qt(Os,Ns,e,t);o.layers=this.layers,this.add(o);const l=new Qt(Os,Ns,e,t);l.layers=this.layers,this.add(l);const h=new Qt(Os,Ns,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const h of t)this.remove(h);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,h,d]=this.children,c=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(c,u,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Tg extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class wg{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,h=t+t;l!==h;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){cn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;cn.multiplyQuaternionsFlat(e,a,e,t,e,n),cn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Ql="\\[\\]\\.:\\/",Ag=new RegExp("["+Ql+"]","g"),eh="[^"+Ql+"]",Rg="[^"+Ql.replace("\\.","")+"]",Cg=/((?:WC+[\/:])*)/.source.replace("WC",eh),Pg=/(WCOD+)?/.source.replace("WCOD",Rg),Dg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),Ig=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),Lg=new RegExp("^"+Cg+Pg+Dg+Ig+"$"),Fg=["material","materials","bones","map"];class Og{constructor(e,t,n){const i=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class $e{constructor(e,t,n){this.path=t,this.parsedPath=n||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,n):new $e(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ag,"")}static parseTrackName(e){const t=Lg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Fg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Me("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===h){h=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;Pe("PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=Og;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ng{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:zs,endingEnd:zs};for(let h=0;h!==a;++h){const d=s[h].createInterpolant(null);o[h]=d,d.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=zp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,h=o.sampleValues;return l[0]=s,l[1]=s+n,h[0]=e/a,h[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case Gp:for(let d=0,c=l.length;d!==c;++d)l[d].evaluate(a),h[d].accumulateAdditive(o);break;case kl:default:for(let d=0,c=l.length;d!==c;++d)l[d].evaluate(a),h[d].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===Nd;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===Pr){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const h=e<0;this._setEndings(h,!h,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Gs,i.endingEnd=Gs):(e?i.endingStart=this.zeroSlopeAtStart?Gs:zs:i.endingStart=Ya,t?i.endingEnd=this.zeroSlopeAtEnd?Gs:zs:i.endingEnd=Ya)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}const kg=new Float32Array(1);class Ug extends Xi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,h=this._bindingsByRootAndName;let d=h[l];d===void 0&&(d={},h[l]=d);for(let c=0;c!==s;++c){const u=i[c],f=u.name;let m=d[f];if(m!==void 0)++m.referenceCount,a[c]=m;else{if(m=a[c],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const _=t&&t._propertyBindings[c].binding.parsedPath;m=new wg($e.create(n,f,_),u.ValueTypeName,u.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[c]=m}o[c].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,h=l[l.length-1],d=e._byClipCacheIndex;h._byClipCacheIndex=d,l[d]=h,l.pop(),e._byClipCacheIndex=null;const c=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete c[u],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],h=e._cacheIndex;l._cacheIndex=h,t[h]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new $d(new Float32Array(2),new Float32Array(2),1,kg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?cl.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let h=null;if(n===void 0&&(a!==null?n=a.blendMode:n=kl),l!==void 0){const c=l.actionByRoot[s];if(c!==void 0&&c.blendMode===n)return c;h=l.knownActions[0],a===null&&(a=h._clip)}if(a===null)return null;const d=new Ng(this,a,t,n);return this._bindAction(d,h),this._addInactiveAction(d,o,s),d}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?cl.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let h=0;h!==l;++h)o[h].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const h=a[o];this._deactivateAction(h);const d=h._cacheIndex,c=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,c._cacheIndex=d,t[d]=c,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const xu=new Ue;class tf{constructor(e,t,n=0,i=1/0){this.ray=new hr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Vl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Pe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xu),this}intersectObject(e,t=!0,n=[]){return ll(e,this,n,t),n.sort(vu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ll(e[i],this,n,t);return n.sort(vu),n}}function vu(r,e){return r.distance-e.distance}function ll(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)ll(s[a],e,t,!0)}}class yu{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Bg extends Xi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Me("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Su(r,e,t,n){const i=zg(n);switch(t){case Fd:return r*e;case Ll:return r*e/i.components*i.byteLength;case Fl:return r*e/i.components*i.byteLength;case Qs:return r*e*2/i.components*i.byteLength;case Ol:return r*e*2/i.components*i.byteLength;case Od:return r*e*3/i.components*i.byteLength;case Dn:return r*e*4/i.components*i.byteLength;case Nl:return r*e*4/i.components*i.byteLength;case Ba:case za:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ga:case Va:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ac:case Cc:return Math.max(r,16)*Math.max(e,8)/4;case wc:case Rc:return Math.max(r,8)*Math.max(e,8)/2;case Pc:case Dc:case Lc:case Fc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ic:case Oc:case Nc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case zc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case jc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case qc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Kc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Zc:case $c:case Qc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case el:case tl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case nl:case il:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zg(r){switch(r){case bn:case Pd:return{byteLength:1,components:1};case zr:case Dd:case yn:return{byteLength:2,components:1};case Dl:case Il:return{byteLength:2,components:4};case ii:case Pl:case en:return{byteLength:4,components:1};case Id:case Ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rl}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nf(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Gg(r){const e=new WeakMap;function t(o,l){const h=o.array,d=o.usage,c=h.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,h,d),o.onUploadCallback();let f;if(h instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=r.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=r.SHORT;else if(h instanceof Uint32Array)f=r.UNSIGNED_INT;else if(h instanceof Int32Array)f=r.INT;else if(h instanceof Int8Array)f=r.BYTE;else if(h instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:c}}function n(o,l,h){const d=l.array,c=l.updateRanges;if(r.bindBuffer(h,o),c.length===0)r.bufferSubData(h,0,d);else{c.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<c.length;f++){const m=c[u],_=c[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,c[u]=_)}c.length=u+1;for(let f=0,m=c.length;f<m;f++){const _=c[f];r.bufferSubData(h,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:i,remove:s,update:a}}var Vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,t_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,n_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,c_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,l_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,h_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,u_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,d_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,f_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,p_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,__=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b_="gl_FragColor = linearToOutputTexel( gl_FragColor );",x_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,y_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,T_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,P_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,F_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,O_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,z_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,G_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,V_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Z_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,s0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,a0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,u0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,w0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,A0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,C0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,D0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,O0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,N0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const G0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,K0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Y0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,J0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ab=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ob=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,db=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_b=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Vg,alphahash_pars_fragment:Hg,alphamap_fragment:Wg,alphamap_pars_fragment:jg,alphatest_fragment:qg,alphatest_pars_fragment:Xg,aomap_fragment:Kg,aomap_pars_fragment:Yg,batching_pars_vertex:Jg,batching_vertex:Zg,begin_vertex:$g,beginnormal_vertex:Qg,bsdfs:e_,iridescence_fragment:t_,bumpmap_pars_fragment:n_,clipping_planes_fragment:i_,clipping_planes_pars_fragment:s_,clipping_planes_pars_vertex:r_,clipping_planes_vertex:a_,color_fragment:o_,color_pars_fragment:c_,color_pars_vertex:l_,color_vertex:h_,common:u_,cube_uv_reflection_fragment:d_,defaultnormal_vertex:f_,displacementmap_pars_vertex:p_,displacementmap_vertex:m_,emissivemap_fragment:g_,emissivemap_pars_fragment:__,colorspace_fragment:b_,colorspace_pars_fragment:x_,envmap_fragment:v_,envmap_common_pars_fragment:y_,envmap_pars_fragment:S_,envmap_pars_vertex:M_,envmap_physical_pars_fragment:F_,envmap_vertex:E_,fog_vertex:T_,fog_pars_vertex:w_,fog_fragment:A_,fog_pars_fragment:R_,gradientmap_pars_fragment:C_,lightmap_pars_fragment:P_,lights_lambert_fragment:D_,lights_lambert_pars_fragment:I_,lights_pars_begin:L_,lights_toon_fragment:O_,lights_toon_pars_fragment:N_,lights_phong_fragment:k_,lights_phong_pars_fragment:U_,lights_physical_fragment:B_,lights_physical_pars_fragment:z_,lights_fragment_begin:G_,lights_fragment_maps:V_,lights_fragment_end:H_,logdepthbuf_fragment:W_,logdepthbuf_pars_fragment:j_,logdepthbuf_pars_vertex:q_,logdepthbuf_vertex:X_,map_fragment:K_,map_pars_fragment:Y_,map_particle_fragment:J_,map_particle_pars_fragment:Z_,metalnessmap_fragment:$_,metalnessmap_pars_fragment:Q_,morphinstance_vertex:e0,morphcolor_vertex:t0,morphnormal_vertex:n0,morphtarget_pars_vertex:i0,morphtarget_vertex:s0,normal_fragment_begin:r0,normal_fragment_maps:a0,normal_pars_fragment:o0,normal_pars_vertex:c0,normal_vertex:l0,normalmap_pars_fragment:h0,clearcoat_normal_fragment_begin:u0,clearcoat_normal_fragment_maps:d0,clearcoat_pars_fragment:f0,iridescence_pars_fragment:p0,opaque_fragment:m0,packing:g0,premultiplied_alpha_fragment:_0,project_vertex:b0,dithering_fragment:x0,dithering_pars_fragment:v0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:M0,shadowmap_pars_vertex:E0,shadowmap_vertex:T0,shadowmask_pars_fragment:w0,skinbase_vertex:A0,skinning_pars_vertex:R0,skinning_vertex:C0,skinnormal_vertex:P0,specularmap_fragment:D0,specularmap_pars_fragment:I0,tonemapping_fragment:L0,tonemapping_pars_fragment:F0,transmission_fragment:O0,transmission_pars_fragment:N0,uv_pars_fragment:k0,uv_pars_vertex:U0,uv_vertex:B0,worldpos_vertex:z0,background_vert:G0,background_frag:V0,backgroundCube_vert:H0,backgroundCube_frag:W0,cube_vert:j0,cube_frag:q0,depth_vert:X0,depth_frag:K0,distance_vert:Y0,distance_frag:J0,equirect_vert:Z0,equirect_frag:$0,linedashed_vert:Q0,linedashed_frag:eb,meshbasic_vert:tb,meshbasic_frag:nb,meshlambert_vert:ib,meshlambert_frag:sb,meshmatcap_vert:rb,meshmatcap_frag:ab,meshnormal_vert:ob,meshnormal_frag:cb,meshphong_vert:lb,meshphong_frag:hb,meshphysical_vert:ub,meshphysical_frag:db,meshtoon_vert:fb,meshtoon_frag:pb,points_vert:mb,points_frag:gb,shadow_vert:_b,shadow_frag:bb,sprite_vert:xb,sprite_frag:vb},ce={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Yn={basic:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:$t([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:$t([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:$t([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:$t([ce.points,ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:$t([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:$t([ce.common,ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:$t([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:$t([ce.sprite,ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:$t([ce.common,ce.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:$t([ce.lights,ce.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Yn.physical={uniforms:$t([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ia={r:0,b:0,g:0},ts=new si,yb=new Ue;function Sb(r,e,t,n,i,s){const a=new Ie(0);let o=i===!0?0:1,l,h,d=null,c=0,u=null;function f(b){let y=b.isScene===!0?b.background:null;if(y&&y.isTexture){const v=b.backgroundBlurriness>0;y=e.get(y,v)}return y}function m(b){let y=!1;const v=f(b);v===null?g(a,o):v&&v.isColor&&(g(v,1),y=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(b,y){const v=f(y);v&&(v.isCubeTexture||v.mapping===co)?(h===void 0&&(h=new me(new Gt(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:tr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),ts.copy(y.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yb.makeRotationFromEuler(ts)),h.material.toneMapped=qe.getTransfer(v.colorSpace)!==nt,(d!==v||c!==v.version||u!==r.toneMapping)&&(h.material.needsUpdate=!0,d=v,c=v.version,u=r.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new me(new Vn(2,2),new ri({name:"BackgroundMaterial",uniforms:tr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=qe.getTransfer(v.colorSpace)!==nt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||c!==v.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,d=v,c=v.version,u=r.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,y){b.getRGB(Ia,Jd(r)),t.buffers.color.setClear(Ia.r,Ia.g,Ia.b,y,s)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:m,addToRenderList:_,dispose:p}}function Mb(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,a=!1;function o(R,I,D,F,N){let k=!1;const B=c(R,F,D,I);s!==B&&(s=B,h(s.object)),k=f(R,F,D,N),k&&m(R,F,D,N),N!==null&&e.update(N,r.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,v(R,I,D,F),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return r.createVertexArray()}function h(R){return r.bindVertexArray(R)}function d(R){return r.deleteVertexArray(R)}function c(R,I,D,F){const N=F.wireframe===!0;let k=n[I.id];k===void 0&&(k={},n[I.id]=k);const B=R.isInstancedMesh===!0?R.id:0;let Z=k[B];Z===void 0&&(Z={},k[B]=Z);let Y=Z[D.id];Y===void 0&&(Y={},Z[D.id]=Y);let ie=Y[N];return ie===void 0&&(ie=u(l()),Y[N]=ie),ie}function u(R){const I=[],D=[],F=[];for(let N=0;N<t;N++)I[N]=0,D[N]=0,F[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:F,object:R,attributes:{},index:null}}function f(R,I,D,F){const N=s.attributes,k=I.attributes;let B=0;const Z=D.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const ue=N[Y];let ee=k[Y];if(ee===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(ee=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(ee=R.instanceColor)),ue===void 0||ue.attribute!==ee||ee&&ue.data!==ee.data)return!0;B++}return s.attributesNum!==B||s.index!==F}function m(R,I,D,F){const N={},k=I.attributes;let B=0;const Z=D.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let ue=k[Y];ue===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor));const ee={};ee.attribute=ue,ue&&ue.data&&(ee.data=ue.data),N[Y]=ee,B++}s.attributes=N,s.attributesNum=B,s.index=F}function _(){const R=s.newAttributes;for(let I=0,D=R.length;I<D;I++)R[I]=0}function g(R){p(R,0)}function p(R,I){const D=s.newAttributes,F=s.enabledAttributes,N=s.attributeDivisors;D[R]=1,F[R]===0&&(r.enableVertexAttribArray(R),F[R]=1),N[R]!==I&&(r.vertexAttribDivisor(R,I),N[R]=I)}function b(){const R=s.newAttributes,I=s.enabledAttributes;for(let D=0,F=I.length;D<F;D++)I[D]!==R[D]&&(r.disableVertexAttribArray(D),I[D]=0)}function y(R,I,D,F,N,k,B){B===!0?r.vertexAttribIPointer(R,I,D,N,k):r.vertexAttribPointer(R,I,D,F,N,k)}function v(R,I,D,F){_();const N=F.attributes,k=D.getAttributes(),B=I.defaultAttributeValues;for(const Z in k){const Y=k[Z];if(Y.location>=0){let ie=N[Z];if(ie===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor)),ie!==void 0){const ue=ie.normalized,ee=ie.itemSize,Ae=e.get(ie);if(Ae===void 0)continue;const je=Ae.buffer,Ke=Ae.type,K=Ae.bytesPerElement,se=Ke===r.INT||Ke===r.UNSIGNED_INT||ie.gpuType===Pl;if(ie.isInterleavedBufferAttribute){const oe=ie.data,Ne=oe.stride,Ce=ie.offset;if(oe.isInstancedInterleavedBuffer){for(let Le=0;Le<Y.locationSize;Le++)p(Y.location+Le,oe.meshPerAttribute);R.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Le=0;Le<Y.locationSize;Le++)g(Y.location+Le);r.bindBuffer(r.ARRAY_BUFFER,je);for(let Le=0;Le<Y.locationSize;Le++)y(Y.location+Le,ee/Y.locationSize,Ke,ue,Ne*K,(Ce+ee/Y.locationSize*Le)*K,se)}else{if(ie.isInstancedBufferAttribute){for(let oe=0;oe<Y.locationSize;oe++)p(Y.location+oe,ie.meshPerAttribute);R.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let oe=0;oe<Y.locationSize;oe++)g(Y.location+oe);r.bindBuffer(r.ARRAY_BUFFER,je);for(let oe=0;oe<Y.locationSize;oe++)y(Y.location+oe,ee/Y.locationSize,Ke,ue,ee*K,ee/Y.locationSize*oe*K,se)}}else if(B!==void 0){const ue=B[Z];if(ue!==void 0)switch(ue.length){case 2:r.vertexAttrib2fv(Y.location,ue);break;case 3:r.vertexAttrib3fv(Y.location,ue);break;case 4:r.vertexAttrib4fv(Y.location,ue);break;default:r.vertexAttrib1fv(Y.location,ue)}}}}b()}function E(){S();for(const R in n){const I=n[R];for(const D in I){const F=I[D];for(const N in F){const k=F[N];for(const B in k)d(k[B].object),delete k[B];delete F[N]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;const I=n[R.id];for(const D in I){const F=I[D];for(const N in F){const k=F[N];for(const B in k)d(k[B].object),delete k[B];delete F[N]}}delete n[R.id]}function A(R){for(const I in n){const D=n[I];for(const F in D){const N=D[F];if(N[R.id]===void 0)continue;const k=N[R.id];for(const B in k)d(k[B].object),delete k[B];delete N[R.id]}}}function x(R){for(const I in n){const D=n[I],F=R.isInstancedMesh===!0?R.id:0,N=D[F];if(N!==void 0){for(const k in N){const B=N[k];for(const Z in B)d(B[Z].object),delete B[Z];delete N[k]}delete D[F],Object.keys(D).length===0&&delete n[I]}}}function S(){P(),a=!0,s!==i&&(s=i,h(s.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:S,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:b}}function Eb(r,e,t){let n;function i(h){n=h}function s(h,d){r.drawArrays(n,h,d),t.update(d,n,1)}function a(h,d,c){c!==0&&(r.drawArraysInstanced(n,h,d,c),t.update(d,n,c))}function o(h,d,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,c);let f=0;for(let m=0;m<c;m++)f+=d[m];t.update(f,n,1)}function l(h,d,c,u){if(c===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<h.length;m++)a(h[m],d[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,d,0,u,0,c);let m=0;for(let _=0;_<c;_++)m+=d[_]*u[_];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Tb(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Dn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==bn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==en&&!x)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const d=l(h);d!==h&&(Me("WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const c=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:c,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:v,maxSamples:E,samples:w}}function wb(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ni,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,u){const f=c.length!==0||u||n!==0||i;return i=u,n=c.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,u){t=d(c,u,0)},this.setState=function(c,u,f){const m=c.clippingPlanes,_=c.clipIntersection,g=c.clipShadows,p=r.get(c);if(!i||m===null||m.length===0||s&&!g)s?d(null):h();else{const b=s?0:n,y=b*4;let v=p.clippingState||null;l.value=v,v=d(m,u,y,f);for(let E=0;E!==y;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(c,u,f,m){const _=c!==null?c.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)a.copy(c[y]).applyMatrix4(b,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const Ui=4,Mu=[.125,.215,.35,.446,.526,.582],cs=20,Ab=256,Mr=new fo,Eu=new Ie;let Jo=null,Zo=0,$o=0,Qo=!1;const Rb=new O;class Tu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Rb}=s;Jo=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jo,Zo,$o),this._renderer.xr.enabled=Qo,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jo=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:yn,format:Dn,colorSpace:Jt,depthBuffer:!1},i=wu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wu(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Cb(s)),this._blurMaterial=Db(s,e,t),this._ggxMaterial=Pb(s,e,t)}return i}_compileMaterial(e){const t=new me(new Ht,e);this._renderer.compile(t,Mr)}_sceneToCubeUV(e,t,n,i,s){const l=new Qt(90,1,t,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,f=c.toneMapping;c.getClearColor(Eu),c.toneMapping=ei,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(i),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new me(new Gt,new Sn({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let p=!1;const b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,p=!0):(g.color.copy(Eu),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,h[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[y],s.y,s.z)):v===1?(l.up.set(0,0,h[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[y],s.z)):(l.up.set(0,h[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[y]));const E=this._cubeSize;ks(i,v*E,y>2?E:0,E,E),c.setRenderTarget(i),p&&c.render(_,l),c.render(e,l)}c.toneMapping=f,c.autoClear=u,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gs||e.mapping===$s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Au());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ks(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Mr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,h=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),c=Math.sqrt(h*h-d*d),u=0+h*1.25,f=c*u,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-Ui?n-m+Ui:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,ks(s,g,p,3*_,2*_),i.setRenderTarget(s),i.render(o,Mr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,ks(e,g,p,3*_,2*_),i.setRenderTarget(e),i.render(o,Mr)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");const d=3,c=this._lodMeshes[i];c.material=h;const u=h.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*cs-1),_=s/m,g=isFinite(s)?1+Math.floor(d*_):cs;g>cs&&Me(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${cs}`);const p=[];let b=0;for(let A=0;A<cs;++A){const x=A/_,S=Math.exp(-x*x/2);p.push(S),A===0?b+=S:A<g&&(b+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-n;const v=this._sizeLods[i],E=3*v*(i>y-Ui?i-y+Ui:0),w=4*(this._cubeSize-v);ks(t,E,w,3*v,2*v),l.setRenderTarget(t),l.render(c,Mr)}}function Cb(r){const e=[],t=[],n=[];let i=r;const s=r-Ui+1+Mu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Ui?l=Mu[a-r+Ui-1]:a===0&&(l=0),t.push(l);const h=1/(o-2),d=-h,c=1+h,u=[d,d,c,d,c,c,d,d,c,c,d,c],f=6,m=6,_=3,g=2,p=1,b=new Float32Array(_*m*f),y=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,x=w>2?0:-1,S=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];b.set(S,_*m*w),y.set(u,g*m*w);const P=[w,w,w,w,w,w];v.set(P,p*m*w)}const E=new Ht;E.setAttribute("position",new nn(b,_)),E.setAttribute("uv",new nn(y,g)),E.setAttribute("faceIndex",new nn(v,p)),n.push(new me(E,null)),i>Ui&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function wu(r,e,t){const n=new ti(r,e,t);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ks(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Pb(r,e,t){return new ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ab,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:po(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Db(r,e,t){const n=new Float32Array(cs),i=new O(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Au(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Ru(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function po(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class sf extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Kd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Gt(5,5,5),s=new ri({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Si});s.uniforms.tEquirect.value=t;const a=new me(i,s),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=Qe),new Eg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function Ib(r){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===ka||f===yo)if(e.has(u)){const m=e.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const _=new sf(m.height);return _.fromEquirectangularTexture(r,u),e.set(u,_),u.addEventListener("dispose",h),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,m=f===ka||f===yo,_=f===gs||f===$s;if(m||_){let g=t.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Tu(r)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const b=u.image;return m&&b&&b.height>0||_&&b&&l(b)?(n===null&&(n=new Tu(r)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,f){return f===ka?u.mapping=gs:f===yo&&(u.mapping=$s),u}function l(u){let f=0;const m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function h(u){const f=u.target;f.removeEventListener("dispose",h);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(u){const f=u.target;f.removeEventListener("dispose",d);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function c(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:c}}function Lb(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&$a("WebGLRenderer: "+n+" extension not supported."),i}}}function Fb(r,e,t,n){const i={},s=new WeakMap;function a(c){const u=c.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(c,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(c){const u=c.attributes;for(const f in u)e.update(u[f],r.ARRAY_BUFFER)}function h(c){const u=[],f=c.index,m=c.attributes.position;let _=0;if(m===void 0)return;if(f!==null){const b=f.array;_=f.version;for(let y=0,v=b.length;y<v;y+=3){const E=b[y+0],w=b[y+1],A=b[y+2];u.push(E,w,w,A,A,E)}}else{const b=m.array;_=m.version;for(let y=0,v=b.length/3-1;y<v;y+=3){const E=y+0,w=y+1,A=y+2;u.push(E,w,w,A,A,E)}}const g=new(m.count>=65535?Wd:Hd)(u,1);g.version=_;const p=s.get(c);p&&e.remove(p),s.set(c,g)}function d(c){const u=s.get(c);if(u){const f=c.index;f!==null&&u.version<f.version&&h(c)}else h(c);return s.get(c)}return{get:o,update:l,getWireframeAttribute:d}}function Ob(r,e,t){let n;function i(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,f){r.drawElements(n,f,s,u*a),t.update(f,n,1)}function h(u,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,u*a,m),t.update(f,n,m))}function d(u,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function c(u,f,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)h(u[p]/a,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,u,0,_,0,m);let p=0;for(let b=0;b<m;b++)p+=f[b]*_[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=c}function Nb(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Pe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function kb(r,e,t){const n=new WeakMap,i=new pt;function s(a,o,l){const h=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,c=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==c){let P=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var f=P;u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;m===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let E=o.attributes.position.count*v,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*w*4*c),x=new Gd(A,E,w,c);x.type=en,x.needsUpdate=!0;const S=v*4;for(let R=0;R<c;R++){const I=p[R],D=b[R],F=y[R],N=E*w*4*R;for(let k=0;k<I.count;k++){const B=k*S;m===!0&&(i.fromBufferAttribute(I,k),A[N+B+0]=i.x,A[N+B+1]=i.y,A[N+B+2]=i.z,A[N+B+3]=0),_===!0&&(i.fromBufferAttribute(D,k),A[N+B+4]=i.x,A[N+B+5]=i.y,A[N+B+6]=i.z,A[N+B+7]=0),g===!0&&(i.fromBufferAttribute(F,k),A[N+B+8]=i.x,A[N+B+9]=i.y,A[N+B+10]=i.z,A[N+B+11]=F.itemSize===4?i.w:1)}}u={count:c,texture:x,size:new Re(E,w)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<h.length;g++)m+=h[g];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",h)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Ub(r,e,t,n,i){let s=new WeakMap;function a(h){const d=i.render.frame,c=h.geometry,u=e.get(h,c);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),s.get(h)!==d&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),s.set(h,d))),h.isSkinnedMesh){const f=h.skeleton;s.get(f)!==d&&(f.update(),s.set(f,d))}return u}function o(){s=new WeakMap}function l(h){const d=h.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const Bb={[Sd]:"LINEAR_TONE_MAPPING",[Md]:"REINHARD_TONE_MAPPING",[Ed]:"CINEON_TONE_MAPPING",[Cl]:"ACES_FILMIC_TONE_MAPPING",[wd]:"AGX_TONE_MAPPING",[Ad]:"NEUTRAL_TONE_MAPPING",[Td]:"CUSTOM_TONE_MAPPING"};function zb(r,e,t,n,i){const s=new ti(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new ti(e,t,{type:yn,depthBuffer:!1,stencilBuffer:!1}),o=new Ht;o.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ft([0,2,0,0,2,0],2));const l=new ig({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new me(o,l),d=new fo(-1,1,1,-1,0,1);let c=null,u=null,f=!1,m,_=null,g=[],p=!1;this.setSize=function(b,y){s.setSize(b,y),a.setSize(b,y);for(let v=0;v<g.length;v++){const E=g[v];E.setSize&&E.setSize(b,y)}},this.setEffects=function(b){g=b,p=g.length>0&&g[0].isRenderPass===!0;const y=s.width,v=s.height;for(let E=0;E<g.length;E++){const w=g[E];w.setSize&&w.setSize(y,v)}},this.begin=function(b,y){if(f||b.toneMapping===ei&&g.length===0)return!1;if(_=y,y!==null){const v=y.width,E=y.height;(s.width!==v||s.height!==E)&&this.setSize(v,E)}return p===!1&&b.setRenderTarget(s),m=b.toneMapping,b.toneMapping=ei,!0},this.hasRenderPass=function(){return p},this.end=function(b,y){b.toneMapping=m,f=!0;let v=s,E=a;for(let w=0;w<g.length;w++){const A=g[w];if(A.enabled!==!1&&(A.render(b,E,v,y),A.needsSwap!==!1)){const x=v;v=E,E=x}}if(c!==b.outputColorSpace||u!==b.toneMapping){c=b.outputColorSpace,u=b.toneMapping,l.defines={},qe.getTransfer(c)===nt&&(l.defines.SRGB_TRANSFER="");const w=Bb[u];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,b.setRenderTarget(_),b.render(h,d),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const rf=new Lt,hl=new qr(1,1),af=new Gd,of=new Mm,cf=new Kd,Cu=[],Pu=[],Du=new Float32Array(16),Iu=new Float32Array(9),Lu=new Float32Array(4);function mr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Cu[i];if(s===void 0&&(s=new Float32Array(i),Cu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ft(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ot(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function mo(r,e){let t=Pu[e];t===void 0&&(t=new Int32Array(e),Pu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Gb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Vb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;r.uniform2fv(this.addr,e),Ot(t,e)}}function Hb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;r.uniform3fv(this.addr,e),Ot(t,e)}}function Wb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;r.uniform4fv(this.addr,e),Ot(t,e)}}function jb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Lu.set(n),r.uniformMatrix2fv(this.addr,!1,Lu),Ot(t,n)}}function qb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Iu.set(n),r.uniformMatrix3fv(this.addr,!1,Iu),Ot(t,n)}}function Xb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Du.set(n),r.uniformMatrix4fv(this.addr,!1,Du),Ot(t,n)}}function Kb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Yb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;r.uniform2iv(this.addr,e),Ot(t,e)}}function Jb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;r.uniform3iv(this.addr,e),Ot(t,e)}}function Zb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;r.uniform4iv(this.addr,e),Ot(t,e)}}function $b(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Qb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;r.uniform2uiv(this.addr,e),Ot(t,e)}}function ex(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;r.uniform3uiv(this.addr,e),Ot(t,e)}}function tx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;r.uniform4uiv(this.addr,e),Ot(t,e)}}function nx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(hl.compareFunction=t.isReversedDepthBuffer()?Bl:Ul,s=hl):s=rf,t.setTexture2D(e||s,i)}function ix(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||of,i)}function sx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||cf,i)}function rx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||af,i)}function ax(r){switch(r){case 5126:return Gb;case 35664:return Vb;case 35665:return Hb;case 35666:return Wb;case 35674:return jb;case 35675:return qb;case 35676:return Xb;case 5124:case 35670:return Kb;case 35667:case 35671:return Yb;case 35668:case 35672:return Jb;case 35669:case 35673:return Zb;case 5125:return $b;case 36294:return Qb;case 36295:return ex;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return rx}}function ox(r,e){r.uniform1fv(this.addr,e)}function cx(r,e){const t=mr(e,this.size,2);r.uniform2fv(this.addr,t)}function lx(r,e){const t=mr(e,this.size,3);r.uniform3fv(this.addr,t)}function hx(r,e){const t=mr(e,this.size,4);r.uniform4fv(this.addr,t)}function ux(r,e){const t=mr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function dx(r,e){const t=mr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function fx(r,e){const t=mr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function px(r,e){r.uniform1iv(this.addr,e)}function mx(r,e){r.uniform2iv(this.addr,e)}function gx(r,e){r.uniform3iv(this.addr,e)}function _x(r,e){r.uniform4iv(this.addr,e)}function bx(r,e){r.uniform1uiv(this.addr,e)}function xx(r,e){r.uniform2uiv(this.addr,e)}function vx(r,e){r.uniform3uiv(this.addr,e)}function yx(r,e){r.uniform4uiv(this.addr,e)}function Sx(r,e,t){const n=this.cache,i=e.length,s=mo(t,i);Ft(n,s)||(r.uniform1iv(this.addr,s),Ot(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=hl:a=rf;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function Mx(r,e,t){const n=this.cache,i=e.length,s=mo(t,i);Ft(n,s)||(r.uniform1iv(this.addr,s),Ot(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||of,s[a])}function Ex(r,e,t){const n=this.cache,i=e.length,s=mo(t,i);Ft(n,s)||(r.uniform1iv(this.addr,s),Ot(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||cf,s[a])}function Tx(r,e,t){const n=this.cache,i=e.length,s=mo(t,i);Ft(n,s)||(r.uniform1iv(this.addr,s),Ot(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||af,s[a])}function wx(r){switch(r){case 5126:return ox;case 35664:return cx;case 35665:return lx;case 35666:return hx;case 35674:return ux;case 35675:return dx;case 35676:return fx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return _x;case 5125:return bx;case 36294:return xx;case 36295:return vx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return Tx}}class Ax{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ax(t.type)}}class Rx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wx(t.type)}}class Cx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const ec=/(\w+)(\])?(\[|\.)?/g;function Fu(r,e){r.seq.push(e),r.map[e.id]=e}function Px(r,e,t){const n=r.name,i=n.length;for(ec.lastIndex=0;;){const s=ec.exec(n),a=ec.lastIndex;let o=s[1];const l=s[2]==="]",h=s[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===i){Fu(t,h===void 0?new Ax(o,r,e):new Rx(o,r,e));break}else{let c=t.map[o];c===void 0&&(c=new Cx(o),Fu(t,c)),t=c}}}class Wa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Px(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ou(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Dx=37297;let Ix=0;function Lx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Nu=new ke;function Fx(r){qe._getMatrix(Nu,qe.workingColorSpace,r);const e=`mat3( ${Nu.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(r)){case Ja:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ku(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Lx(r.getShaderSource(e),o)}else return s}function Ox(r,e){const t=Fx(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Nx={[Sd]:"Linear",[Md]:"Reinhard",[Ed]:"Cineon",[Cl]:"ACESFilmic",[wd]:"AgX",[Ad]:"Neutral",[Td]:"Custom"};function kx(r,e){const t=Nx[e];return t===void 0?(Me("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const La=new O;function Ux(){qe.getLuminanceCoefficients(La);const r=La.x.toFixed(4),e=La.y.toFixed(4),t=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function zx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Dr(r){return r!==""}function Uu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(r){return r.replace(Vx,Wx)}const Hx=new Map;function Wx(r,e){let t=Be[e];if(t===void 0){const n=Hx.get(e);if(n!==void 0)t=Be[n],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ul(t)}const jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zu(r){return r.replace(jx,qx)}function qx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Gu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Xx={[Na]:"SHADOWMAP_TYPE_PCF",[Rr]:"SHADOWMAP_TYPE_VSM"};function Kx(r){return Xx[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Yx={[gs]:"ENVMAP_TYPE_CUBE",[$s]:"ENVMAP_TYPE_CUBE",[co]:"ENVMAP_TYPE_CUBE_UV"};function Jx(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Yx[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Zx={[$s]:"ENVMAP_MODE_REFRACTION"};function $x(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Zx[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Qx={[yd]:"ENVMAP_BLENDING_MULTIPLY",[kp]:"ENVMAP_BLENDING_MIX",[Up]:"ENVMAP_BLENDING_ADD"};function ev(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Qx[r.combine]||"ENVMAP_BLENDING_NONE"}function tv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function nv(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Kx(t),h=Jx(t),d=$x(t),c=ev(t),u=tv(t),f=Bx(t),m=zx(s),_=i.createProgram();let g,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Dr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Dr).join(`
`),p.length>0&&(p+=`
`)):(g=[Gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),p=[Gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+c:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?Be.tonemapping_pars_fragment:"",t.toneMapping!==ei?kx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Ox("linearToOutputTexel",t.outputColorSpace),Ux(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dr).join(`
`)),a=ul(a),a=Uu(a,t),a=Bu(a,t),o=ul(o),o=Uu(o,t),o=Bu(o,t),a=zu(a),o=zu(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=b+g+a,v=b+p+o,E=Ou(i,i.VERTEX_SHADER,y),w=Ou(i,i.FRAGMENT_SHADER,v);i.attachShader(_,E),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(R){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(_)||"",D=i.getShaderInfoLog(E)||"",F=i.getShaderInfoLog(w)||"",N=I.trim(),k=D.trim(),B=F.trim();let Z=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,w);else{const ie=ku(i,E,"vertex"),ue=ku(i,w,"fragment");Pe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+ie+`
`+ue)}else N!==""?Me("WebGLProgram: Program Info Log:",N):(k===""||B==="")&&(Y=!1);Y&&(R.diagnostics={runnable:Z,programLog:N,vertexShader:{log:k,prefix:g},fragmentShader:{log:B,prefix:p}})}i.deleteShader(E),i.deleteShader(w),x=new Wa(i,_),S=Gx(i,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(_,Dx)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ix++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}let iv=0;class sv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rv(e),t.set(e,n)),n}}class rv{constructor(e){this.id=iv++,this.code=e,this.usedTimes=0}}function av(r,e,t,n,i,s){const a=new Vl,o=new sv,l=new Set,h=[],d=new Map,c=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,S,P,R,I){const D=R.fog,F=I.geometry,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,B=e.get(x.envMap||N,k),Z=B&&B.mapping===co?B.image.height:null,Y=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Me("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const ie=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ue=ie!==void 0?ie.length:0;let ee=0;F.morphAttributes.position!==void 0&&(ee=1),F.morphAttributes.normal!==void 0&&(ee=2),F.morphAttributes.color!==void 0&&(ee=3);let Ae,je,Ke,K;if(Y){const tt=Yn[Y];Ae=tt.vertexShader,je=tt.fragmentShader}else Ae=x.vertexShader,je=x.fragmentShader,o.update(x),Ke=o.getVertexShaderID(x),K=o.getFragmentShaderID(x);const se=r.getRenderTarget(),oe=r.state.buffers.depth.getReversed(),Ne=I.isInstancedMesh===!0,Ce=I.isBatchedMesh===!0,Le=!!x.map,Nt=!!x.matcap,Ye=!!B,et=!!x.aoMap,ot=!!x.lightMap,Ge=!!x.bumpMap,Et=!!x.normalMap,L=!!x.displacementMap,Rt=!!x.emissiveMap,Ze=!!x.metalnessMap,ut=!!x.roughnessMap,ye=x.anisotropy>0,C=x.clearcoat>0,M=x.dispersion>0,z=x.iridescence>0,X=x.sheen>0,J=x.transmission>0,q=ye&&!!x.anisotropyMap,ge=C&&!!x.clearcoatMap,re=C&&!!x.clearcoatNormalMap,we=C&&!!x.clearcoatRoughnessMap,De=z&&!!x.iridescenceMap,$=z&&!!x.iridescenceThicknessMap,te=X&&!!x.sheenColorMap,_e=X&&!!x.sheenRoughnessMap,xe=!!x.specularMap,de=!!x.specularColorMap,Ve=!!x.specularIntensityMap,U=J&&!!x.transmissionMap,ae=J&&!!x.thicknessMap,ne=!!x.gradientMap,pe=!!x.alphaMap,Q=x.alphaTest>0,j=!!x.alphaHash,be=!!x.extensions;let Fe=ei;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Fe=r.toneMapping);const dt={shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:Ae,fragmentShader:je,defines:x.defines,customVertexShaderID:Ke,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Ce,batchingColor:Ce&&I._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&I.instanceColor!==null,instancingMorph:Ne&&I.morphTexture!==null,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Jt,alphaToCoverage:!!x.alphaToCoverage,map:Le,matcap:Nt,envMap:Ye,envMapMode:Ye&&B.mapping,envMapCubeUVHeight:Z,aoMap:et,lightMap:ot,bumpMap:Ge,normalMap:Et,displacementMap:L,emissiveMap:Rt,normalMapObjectSpace:Et&&x.normalMapType===Wp,normalMapTangentSpace:Et&&x.normalMapType===Ud,metalnessMap:Ze,roughnessMap:ut,anisotropy:ye,anisotropyMap:q,clearcoat:C,clearcoatMap:ge,clearcoatNormalMap:re,clearcoatRoughnessMap:we,dispersion:M,iridescence:z,iridescenceMap:De,iridescenceThicknessMap:$,sheen:X,sheenColorMap:te,sheenRoughnessMap:_e,specularMap:xe,specularColorMap:de,specularIntensityMap:Ve,transmission:J,transmissionMap:U,thicknessMap:ae,gradientMap:ne,opaque:x.transparent===!1&&x.blending===js&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:Q,alphaHash:j,combine:x.combine,mapUv:Le&&m(x.map.channel),aoMapUv:et&&m(x.aoMap.channel),lightMapUv:ot&&m(x.lightMap.channel),bumpMapUv:Ge&&m(x.bumpMap.channel),normalMapUv:Et&&m(x.normalMap.channel),displacementMapUv:L&&m(x.displacementMap.channel),emissiveMapUv:Rt&&m(x.emissiveMap.channel),metalnessMapUv:Ze&&m(x.metalnessMap.channel),roughnessMapUv:ut&&m(x.roughnessMap.channel),anisotropyMapUv:q&&m(x.anisotropyMap.channel),clearcoatMapUv:ge&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:$&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:te&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&m(x.sheenRoughnessMap.channel),specularMapUv:xe&&m(x.specularMap.channel),specularColorMapUv:de&&m(x.specularColorMap.channel),specularIntensityMapUv:Ve&&m(x.specularIntensityMap.channel),transmissionMapUv:U&&m(x.transmissionMap.channel),thicknessMapUv:ae&&m(x.thicknessMap.channel),alphaMapUv:pe&&m(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Et||ye),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(Le||pe),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&Et===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:c,reversedDepthBuffer:oe,skinning:I.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ee,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Le&&x.map.isVideoTexture===!0&&qe.getTransfer(x.map.colorSpace)===nt,decodeVideoTextureEmissive:Rt&&x.emissiveMap.isVideoTexture===!0&&qe.getTransfer(x.emissiveMap.colorSpace)===nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Un,flipSided:x.side===tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:be&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&x.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function g(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(S,x),b(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function b(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),x.push(a.mask)}function y(x){const S=f[x.type];let P;if(S){const R=Yn[S];P=eg.clone(R.uniforms)}else P=x.uniforms;return P}function v(x,S){let P=d.get(S);return P!==void 0?++P.usedTimes:(P=new nv(r,S,x,i),h.push(P),d.set(S,P)),P}function E(x){if(--x.usedTimes===0){const S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),d.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:y,acquireProgram:v,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:A}}function ov(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function cv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Vu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Hu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,_,g,p){let b=r[e];return b===void 0?(b={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},r[e]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=m,b.materialVariant=a(u),b.groupOrder=_,b.renderOrder=u.renderOrder,b.z=g,b.group=p),e++,b}function l(u,f,m,_,g,p){const b=o(u,f,m,_,g,p);m.transmission>0?n.push(b):m.transparent===!0?i.push(b):t.push(b)}function h(u,f,m,_,g,p){const b=o(u,f,m,_,g,p);m.transmission>0?n.unshift(b):m.transparent===!0?i.unshift(b):t.unshift(b)}function d(u,f){t.length>1&&t.sort(u||cv),n.length>1&&n.sort(f||Vu),i.length>1&&i.sort(f||Vu)}function c(){for(let u=e,f=r.length;u<f;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:h,finish:c,sort:d}}function lv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Hu,r.set(n,[a])):i>=s.length?(a=new Hu,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function hv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ie};break;case"SpotLight":t={position:new O,direction:new O,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function uv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let dv=0;function fv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function pv(r){const e=new hv,t=uv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new O);const i=new O,s=new Ue,a=new Ue;function o(h){let d=0,c=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,b=0,y=0,v=0,E=0,w=0,A=0;h.sort(fv);for(let S=0,P=h.length;S<P;S++){const R=h[S],I=R.color,D=R.intensity,F=R.distance;let N=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Qs?N=R.shadow.map.texture:N=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)d+=I.r*D,c+=I.g*D,u+=I.b*D;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],D);A++}else if(R.isDirectionalLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const B=R.shadow,Z=t.get(R);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=R.shadow.matrix,b++}n.directional[f]=k,f++}else if(R.isSpotLight){const k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(I).multiplyScalar(D),k.distance=F,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[_]=k;const B=R.shadow;if(R.map&&(n.spotLightMap[E]=R.map,E++,B.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[_]=B.matrix,R.castShadow){const Z=t.get(R);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=N,v++}_++}else if(R.isRectAreaLight){const k=e.get(R);k.color.copy(I).multiplyScalar(D),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=k,g++}else if(R.isPointLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const B=R.shadow,Z=t.get(R);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,Z.shadowCameraNear=B.camera.near,Z.shadowCameraFar=B.camera.far,n.pointShadow[m]=Z,n.pointShadowMap[m]=N,n.pointShadowMatrix[m]=R.shadow.matrix,y++}n.point[m]=k,m++}else if(R.isHemisphereLight){const k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(D),k.groundColor.copy(R.groundColor).multiplyScalar(D),n.hemi[p]=k,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=c,n.ambient[2]=u;const x=n.hash;(x.directionalLength!==f||x.pointLength!==m||x.spotLength!==_||x.rectAreaLength!==g||x.hemiLength!==p||x.numDirectionalShadows!==b||x.numPointShadows!==y||x.numSpotShadows!==v||x.numSpotMaps!==E||x.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,x.directionalLength=f,x.pointLength=m,x.spotLength=_,x.rectAreaLength=g,x.hemiLength=p,x.numDirectionalShadows=b,x.numPointShadows=y,x.numSpotShadows=v,x.numSpotMaps=E,x.numLightProbes=A,n.version=dv++)}function l(h,d){let c=0,u=0,f=0,m=0,_=0;const g=d.matrixWorldInverse;for(let p=0,b=h.length;p<b;p++){const y=h[p];if(y.isDirectionalLight){const v=n.directional[c];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),c++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function Wu(r){const e=new pv(r),t=[],n=[];function i(d){h.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function mv(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Wu(r),e.set(i,[o])):s>=a.length?(o=new Wu(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_v=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bv=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],xv=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],ju=new Ue,Er=new O,tc=new O;function vv(r,e,t){let n=new ql;const i=new Re,s=new Re,a=new pt,o=new sg,l=new rg,h={},d=t.maxTextureSize,c={[sn]:tn,[tn]:sn,[Un]:Un},u=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:gv,fragmentShader:_v}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ht;m.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new me(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Na;let p=this.type;this.render=function(w,A,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===vd&&(Me("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Na);const S=r.getRenderTarget(),P=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Si),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const D=p!==this.type;D&&A.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(N=>N.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,N=w.length;F<N;F++){const k=w[F],B=k.shadow;if(B===void 0){Me("WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const Z=B.getFrameExtents();i.multiply(Z),s.copy(B.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/Z.x),i.x=s.x*Z.x,B.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/Z.y),i.y=s.y*Z.y,B.mapSize.y=s.y));const Y=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Y,B.map===null||D===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Rr){if(k.isPointLight){Me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ti(i.x,i.y,{format:Qs,type:yn,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),B.map.texture.name=k.name+".shadowMap",B.map.depthTexture=new qr(i.x,i.y,en),B.map.depthTexture.name=k.name+".shadowMapDepth",B.map.depthTexture.format=Ei,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=It,B.map.depthTexture.magFilter=It}else k.isPointLight?(B.map=new sf(i.x),B.map.depthTexture=new $m(i.x,ii)):(B.map=new ti(i.x,i.y),B.map.depthTexture=new qr(i.x,i.y,ii)),B.map.depthTexture.name=k.name+".shadowMap",B.map.depthTexture.format=Ei,this.type===Na?(B.map.depthTexture.compareFunction=Y?Bl:Ul,B.map.depthTexture.minFilter=Qe,B.map.depthTexture.magFilter=Qe):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=It,B.map.depthTexture.magFilter=It);B.camera.updateProjectionMatrix()}const ie=B.map.isWebGLCubeRenderTarget?6:1;for(let ue=0;ue<ie;ue++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,ue),r.clear();else{ue===0&&(r.setRenderTarget(B.map),r.clear());const ee=B.getViewport(ue);a.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),I.viewport(a)}if(k.isPointLight){const ee=B.camera,Ae=B.matrix,je=k.distance||ee.far;je!==ee.far&&(ee.far=je,ee.updateProjectionMatrix()),Er.setFromMatrixPosition(k.matrixWorld),ee.position.copy(Er),tc.copy(ee.position),tc.add(bv[ue]),ee.up.copy(xv[ue]),ee.lookAt(tc),ee.updateMatrixWorld(),Ae.makeTranslation(-Er.x,-Er.y,-Er.z),ju.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),B._frustum.setFromProjectionMatrix(ju,ee.coordinateSystem,ee.reversedDepth)}else B.updateMatrices(k);n=B.getFrustum(),v(A,x,B.camera,k,this.type)}B.isPointLightShadow!==!0&&this.type===Rr&&b(B,x),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(S,P,R)};function b(w,A){const x=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ti(i.x,i.y,{format:Qs,type:yn})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,x,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,x,f,_,null)}function y(w,A,x,S){let P=null;const R=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)P=R;else if(P=x.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=P.uuid,D=A.uuid;let F=h[I];F===void 0&&(F={},h[I]=F);let N=F[D];N===void 0&&(N=P.clone(),F[D]=N,A.addEventListener("dispose",E)),P=N}if(P.visible=A.visible,P.wireframe=A.wireframe,S===Rr?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:c[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const I=r.properties.get(P);I.light=x}return P}function v(w,A,x,S,P){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Rr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const D=e.update(w),F=w.material;if(Array.isArray(F)){const N=D.groups;for(let k=0,B=N.length;k<B;k++){const Z=N[k],Y=F[Z.materialIndex];if(Y&&Y.visible){const ie=y(w,Y,S,P);w.onBeforeShadow(r,w,A,x,D,ie,Z),r.renderBufferDirect(x,null,D,ie,w,Z),w.onAfterShadow(r,w,A,x,D,ie,Z)}}}else if(F.visible){const N=y(w,F,S,P);w.onBeforeShadow(r,w,A,x,D,N,null),r.renderBufferDirect(x,null,D,N,w,null),w.onAfterShadow(r,w,A,x,D,N,null)}}const I=w.children;for(let D=0,F=I.length;D<F;D++)v(I[D],A,x,S,P)}function E(w){w.target.removeEventListener("dispose",E);for(const x in h){const S=h[x],P=w.target.uuid;P in S&&(S[P].dispose(),delete S[P])}}}function yv(r,e){function t(){let U=!1;const ae=new pt;let ne=null;const pe=new pt(0,0,0,0);return{setMask:function(Q){ne!==Q&&!U&&(r.colorMask(Q,Q,Q,Q),ne=Q)},setLocked:function(Q){U=Q},setClear:function(Q,j,be,Fe,dt){dt===!0&&(Q*=Fe,j*=Fe,be*=Fe),ae.set(Q,j,be,Fe),pe.equals(ae)===!1&&(r.clearColor(Q,j,be,Fe),pe.copy(ae))},reset:function(){U=!1,ne=null,pe.set(-1,0,0,0)}}}function n(){let U=!1,ae=!1,ne=null,pe=null,Q=null;return{setReversed:function(j){if(ae!==j){const be=e.get("EXT_clip_control");j?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ae=j;const Fe=Q;Q=null,this.setClear(Fe)}},getReversed:function(){return ae},setTest:function(j){j?se(r.DEPTH_TEST):oe(r.DEPTH_TEST)},setMask:function(j){ne!==j&&!U&&(r.depthMask(j),ne=j)},setFunc:function(j){if(ae&&(j=tm[j]),pe!==j){switch(j){case xc:r.depthFunc(r.NEVER);break;case vc:r.depthFunc(r.ALWAYS);break;case yc:r.depthFunc(r.LESS);break;case Zs:r.depthFunc(r.LEQUAL);break;case Sc:r.depthFunc(r.EQUAL);break;case Mc:r.depthFunc(r.GEQUAL);break;case Ec:r.depthFunc(r.GREATER);break;case Tc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=j}},setLocked:function(j){U=j},setClear:function(j){Q!==j&&(Q=j,ae&&(j=1-j),r.clearDepth(j))},reset:function(){U=!1,ne=null,pe=null,Q=null,ae=!1}}}function i(){let U=!1,ae=null,ne=null,pe=null,Q=null,j=null,be=null,Fe=null,dt=null;return{setTest:function(tt){U||(tt?se(r.STENCIL_TEST):oe(r.STENCIL_TEST))},setMask:function(tt){ae!==tt&&!U&&(r.stencilMask(tt),ae=tt)},setFunc:function(tt,hi,ui){(ne!==tt||pe!==hi||Q!==ui)&&(r.stencilFunc(tt,hi,ui),ne=tt,pe=hi,Q=ui)},setOp:function(tt,hi,ui){(j!==tt||be!==hi||Fe!==ui)&&(r.stencilOp(tt,hi,ui),j=tt,be=hi,Fe=ui)},setLocked:function(tt){U=tt},setClear:function(tt){dt!==tt&&(r.clearStencil(tt),dt=tt)},reset:function(){U=!1,ae=null,ne=null,pe=null,Q=null,j=null,be=null,Fe=null,dt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,h=new WeakMap;let d={},c={},u=new WeakMap,f=[],m=null,_=!1,g=null,p=null,b=null,y=null,v=null,E=null,w=null,A=new Ie(0,0,0),x=0,S=!1,P=null,R=null,I=null,D=null,F=null;const N=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,B=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Z)[1]),k=B>=1):Z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),k=B>=2);let Y=null,ie={};const ue=r.getParameter(r.SCISSOR_BOX),ee=r.getParameter(r.VIEWPORT),Ae=new pt().fromArray(ue),je=new pt().fromArray(ee);function Ke(U,ae,ne,pe){const Q=new Uint8Array(4),j=r.createTexture();r.bindTexture(U,j),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let be=0;be<ne;be++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ae,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,Q):r.texImage2D(ae+be,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Q);return j}const K={};K[r.TEXTURE_2D]=Ke(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=Ke(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=Ke(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=Ke(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(r.DEPTH_TEST),a.setFunc(Zs),Ge(!1),Et(Ch),se(r.CULL_FACE),et(Si);function se(U){d[U]!==!0&&(r.enable(U),d[U]=!0)}function oe(U){d[U]!==!1&&(r.disable(U),d[U]=!1)}function Ne(U,ae){return c[U]!==ae?(r.bindFramebuffer(U,ae),c[U]=ae,U===r.DRAW_FRAMEBUFFER&&(c[r.FRAMEBUFFER]=ae),U===r.FRAMEBUFFER&&(c[r.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ce(U,ae){let ne=f,pe=!1;if(U){ne=u.get(ae),ne===void 0&&(ne=[],u.set(ae,ne));const Q=U.textures;if(ne.length!==Q.length||ne[0]!==r.COLOR_ATTACHMENT0){for(let j=0,be=Q.length;j<be;j++)ne[j]=r.COLOR_ATTACHMENT0+j;ne.length=Q.length,pe=!0}}else ne[0]!==r.BACK&&(ne[0]=r.BACK,pe=!0);pe&&r.drawBuffers(ne)}function Le(U){return m!==U?(r.useProgram(U),m=U,!0):!1}const Nt={[os]:r.FUNC_ADD,[vp]:r.FUNC_SUBTRACT,[yp]:r.FUNC_REVERSE_SUBTRACT};Nt[Sp]=r.MIN,Nt[Mp]=r.MAX;const Ye={[Ep]:r.ZERO,[Tp]:r.ONE,[wp]:r.SRC_COLOR,[_c]:r.SRC_ALPHA,[Ip]:r.SRC_ALPHA_SATURATE,[Pp]:r.DST_COLOR,[Rp]:r.DST_ALPHA,[Ap]:r.ONE_MINUS_SRC_COLOR,[bc]:r.ONE_MINUS_SRC_ALPHA,[Dp]:r.ONE_MINUS_DST_COLOR,[Cp]:r.ONE_MINUS_DST_ALPHA,[Lp]:r.CONSTANT_COLOR,[Fp]:r.ONE_MINUS_CONSTANT_COLOR,[Op]:r.CONSTANT_ALPHA,[Np]:r.ONE_MINUS_CONSTANT_ALPHA};function et(U,ae,ne,pe,Q,j,be,Fe,dt,tt){if(U===Si){_===!0&&(oe(r.BLEND),_=!1);return}if(_===!1&&(se(r.BLEND),_=!0),U!==xp){if(U!==g||tt!==S){if((p!==os||v!==os)&&(r.blendEquation(r.FUNC_ADD),p=os,v=os),tt)switch(U){case js:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ph:r.blendFunc(r.ONE,r.ONE);break;case Dh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ih:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Pe("WebGLState: Invalid blending: ",U);break}else switch(U){case js:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ph:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Dh:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ih:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",U);break}b=null,y=null,E=null,w=null,A.set(0,0,0),x=0,g=U,S=tt}return}Q=Q||ae,j=j||ne,be=be||pe,(ae!==p||Q!==v)&&(r.blendEquationSeparate(Nt[ae],Nt[Q]),p=ae,v=Q),(ne!==b||pe!==y||j!==E||be!==w)&&(r.blendFuncSeparate(Ye[ne],Ye[pe],Ye[j],Ye[be]),b=ne,y=pe,E=j,w=be),(Fe.equals(A)===!1||dt!==x)&&(r.blendColor(Fe.r,Fe.g,Fe.b,dt),A.copy(Fe),x=dt),g=U,S=!1}function ot(U,ae){U.side===Un?oe(r.CULL_FACE):se(r.CULL_FACE);let ne=U.side===tn;ae&&(ne=!ne),Ge(ne),U.blending===js&&U.transparent===!1?et(Si):et(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const pe=U.stencilWrite;o.setTest(pe),pe&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Rt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(U){P!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),P=U)}function Et(U){U!==_p?(se(r.CULL_FACE),U!==R&&(U===Ch?r.cullFace(r.BACK):U===bp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):oe(r.CULL_FACE),R=U}function L(U){U!==I&&(k&&r.lineWidth(U),I=U)}function Rt(U,ae,ne){U?(se(r.POLYGON_OFFSET_FILL),(D!==ae||F!==ne)&&(D=ae,F=ne,a.getReversed()&&(ae=-ae),r.polygonOffset(ae,ne))):oe(r.POLYGON_OFFSET_FILL)}function Ze(U){U?se(r.SCISSOR_TEST):oe(r.SCISSOR_TEST)}function ut(U){U===void 0&&(U=r.TEXTURE0+N-1),Y!==U&&(r.activeTexture(U),Y=U)}function ye(U,ae,ne){ne===void 0&&(Y===null?ne=r.TEXTURE0+N-1:ne=Y);let pe=ie[ne];pe===void 0&&(pe={type:void 0,texture:void 0},ie[ne]=pe),(pe.type!==U||pe.texture!==ae)&&(Y!==ne&&(r.activeTexture(ne),Y=ne),r.bindTexture(U,ae||K[U]),pe.type=U,pe.texture=ae)}function C(){const U=ie[Y];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(U){Pe("WebGLState:",U)}}function z(){try{r.compressedTexImage3D(...arguments)}catch(U){Pe("WebGLState:",U)}}function X(){try{r.texSubImage2D(...arguments)}catch(U){Pe("WebGLState:",U)}}function J(){try{r.texSubImage3D(...arguments)}catch(U){Pe("WebGLState:",U)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(U){Pe("WebGLState:",U)}}function ge(){try{r.compressedTexSubImage3D(...arguments)}catch(U){Pe("WebGLState:",U)}}function re(){try{r.texStorage2D(...arguments)}catch(U){Pe("WebGLState:",U)}}function we(){try{r.texStorage3D(...arguments)}catch(U){Pe("WebGLState:",U)}}function De(){try{r.texImage2D(...arguments)}catch(U){Pe("WebGLState:",U)}}function $(){try{r.texImage3D(...arguments)}catch(U){Pe("WebGLState:",U)}}function te(U){Ae.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Ae.copy(U))}function _e(U){je.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),je.copy(U))}function xe(U,ae){let ne=h.get(ae);ne===void 0&&(ne=new WeakMap,h.set(ae,ne));let pe=ne.get(U);pe===void 0&&(pe=r.getUniformBlockIndex(ae,U.name),ne.set(U,pe))}function de(U,ae){const pe=h.get(ae).get(U);l.get(ae)!==pe&&(r.uniformBlockBinding(ae,pe,U.__bindingPointIndex),l.set(ae,pe))}function Ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},Y=null,ie={},c={},u=new WeakMap,f=[],m=null,_=!1,g=null,p=null,b=null,y=null,v=null,E=null,w=null,A=new Ie(0,0,0),x=0,S=!1,P=null,R=null,I=null,D=null,F=null,Ae.set(0,0,r.canvas.width,r.canvas.height),je.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:oe,bindFramebuffer:Ne,drawBuffers:Ce,useProgram:Le,setBlending:et,setMaterial:ot,setFlipSided:Ge,setCullFace:Et,setLineWidth:L,setPolygonOffset:Rt,setScissorTest:Ze,activeTexture:ut,bindTexture:ye,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:z,texImage2D:De,texImage3D:$,updateUBOMapping:xe,uniformBlockBinding:de,texStorage2D:re,texStorage3D:we,texSubImage2D:X,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:ge,scissor:te,viewport:_e,reset:Ve}}function Sv(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Re,d=new WeakMap;let c;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,M){return f?new OffscreenCanvas(C,M):jr("canvas")}function _(C,M,z){let X=1;const J=ye(C);if((J.width>z||J.height>z)&&(X=z/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor(X*J.width),ge=Math.floor(X*J.height);c===void 0&&(c=m(q,ge));const re=M?m(q,ge):c;return re.width=q,re.height=ge,re.getContext("2d").drawImage(C,0,0,q,ge),Me("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+ge+")."),re}else return"data"in C&&Me("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(C,M,z,X,J=!1){if(C!==null){if(r[C]!==void 0)return r[C];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=M;if(M===r.RED&&(z===r.FLOAT&&(q=r.R32F),z===r.HALF_FLOAT&&(q=r.R16F),z===r.UNSIGNED_BYTE&&(q=r.R8)),M===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(q=r.R8UI),z===r.UNSIGNED_SHORT&&(q=r.R16UI),z===r.UNSIGNED_INT&&(q=r.R32UI),z===r.BYTE&&(q=r.R8I),z===r.SHORT&&(q=r.R16I),z===r.INT&&(q=r.R32I)),M===r.RG&&(z===r.FLOAT&&(q=r.RG32F),z===r.HALF_FLOAT&&(q=r.RG16F),z===r.UNSIGNED_BYTE&&(q=r.RG8)),M===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(q=r.RG8UI),z===r.UNSIGNED_SHORT&&(q=r.RG16UI),z===r.UNSIGNED_INT&&(q=r.RG32UI),z===r.BYTE&&(q=r.RG8I),z===r.SHORT&&(q=r.RG16I),z===r.INT&&(q=r.RG32I)),M===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(q=r.RGB8UI),z===r.UNSIGNED_SHORT&&(q=r.RGB16UI),z===r.UNSIGNED_INT&&(q=r.RGB32UI),z===r.BYTE&&(q=r.RGB8I),z===r.SHORT&&(q=r.RGB16I),z===r.INT&&(q=r.RGB32I)),M===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),z===r.UNSIGNED_INT&&(q=r.RGBA32UI),z===r.BYTE&&(q=r.RGBA8I),z===r.SHORT&&(q=r.RGBA16I),z===r.INT&&(q=r.RGBA32I)),M===r.RGB&&(z===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),M===r.RGBA){const ge=J?Ja:qe.getTransfer(X);z===r.FLOAT&&(q=r.RGBA32F),z===r.HALF_FLOAT&&(q=r.RGBA16F),z===r.UNSIGNED_BYTE&&(q=ge===nt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(C,M){let z;return C?M===null||M===ii||M===Gr?z=r.DEPTH24_STENCIL8:M===en?z=r.DEPTH32F_STENCIL8:M===zr&&(z=r.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ii||M===Gr?z=r.DEPTH_COMPONENT24:M===en?z=r.DEPTH_COMPONENT32F:M===zr&&(z=r.DEPTH_COMPONENT16),z}function E(C,M){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==It&&C.minFilter!==Qe?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function w(C){const M=C.target;M.removeEventListener("dispose",w),x(M),M.isVideoTexture&&d.delete(M)}function A(C){const M=C.target;M.removeEventListener("dispose",A),P(M)}function x(C){const M=n.get(C);if(M.__webglInit===void 0)return;const z=C.source,X=u.get(z);if(X){const J=X[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(C),Object.keys(X).length===0&&u.delete(z)}n.remove(C)}function S(C){const M=n.get(C);r.deleteTexture(M.__webglTexture);const z=C.source,X=u.get(z);delete X[M.__cacheKey],a.memory.textures--}function P(C){const M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let J=0;J<M.__webglFramebuffer[X].length;J++)r.deleteFramebuffer(M.__webglFramebuffer[X][J]);else r.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)r.deleteFramebuffer(M.__webglFramebuffer[X]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=C.textures;for(let X=0,J=z.length;X<J;X++){const q=n.get(z[X]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(z[X])}n.remove(C)}let R=0;function I(){R=0}function D(){const C=R;return C>=i.maxTextures&&Me("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),R+=1,C}function F(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function N(C,M){const z=n.get(C);if(C.isVideoTexture&&Ze(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const X=C.image;if(X===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,C,M);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+M)}function k(C,M){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){K(z,C,M);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+M)}function B(C,M){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){K(z,C,M);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+M)}function Z(C,M){const z=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){se(z,C,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+M)}const Y={[_s]:r.REPEAT,[vn]:r.CLAMP_TO_EDGE,[Ka]:r.MIRRORED_REPEAT},ie={[It]:r.NEAREST,[Cd]:r.NEAREST_MIPMAP_NEAREST,[Cr]:r.NEAREST_MIPMAP_LINEAR,[Qe]:r.LINEAR,[Ua]:r.LINEAR_MIPMAP_NEAREST,[Zn]:r.LINEAR_MIPMAP_LINEAR},ue={[jp]:r.NEVER,[Jp]:r.ALWAYS,[qp]:r.LESS,[Ul]:r.LEQUAL,[Xp]:r.EQUAL,[Bl]:r.GEQUAL,[Kp]:r.GREATER,[Yp]:r.NOTEQUAL};function ee(C,M){if(M.type===en&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Qe||M.magFilter===Ua||M.magFilter===Cr||M.magFilter===Zn||M.minFilter===Qe||M.minFilter===Ua||M.minFilter===Cr||M.minFilter===Zn)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Y[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Y[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Y[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ie[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ie[M.minFilter]),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===It||M.minFilter!==Cr&&M.minFilter!==Zn||M.type===en&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ae(C,M){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",w));const X=M.source;let J=u.get(X);J===void 0&&(J={},u.set(X,J));const q=F(M);if(q!==C.__cacheKey){J[q]===void 0&&(J[q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[q].usedTimes++;const ge=J[C.__cacheKey];ge!==void 0&&(J[C.__cacheKey].usedTimes--,ge.usedTimes===0&&S(M)),C.__cacheKey=q,C.__webglTexture=J[q].texture}return z}function je(C,M,z){return Math.floor(Math.floor(C/z)/M)}function Ke(C,M,z,X){const q=C.updateRanges;if(q.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,z,X,M.data);else{q.sort(($,te)=>$.start-te.start);let ge=0;for(let $=1;$<q.length;$++){const te=q[ge],_e=q[$],xe=te.start+te.count,de=je(_e.start,M.width,4),Ve=je(te.start,M.width,4);_e.start<=xe+1&&de===Ve&&je(_e.start+_e.count-1,M.width,4)===de?te.count=Math.max(te.count,_e.start+_e.count-te.start):(++ge,q[ge]=_e)}q.length=ge+1;const re=r.getParameter(r.UNPACK_ROW_LENGTH),we=r.getParameter(r.UNPACK_SKIP_PIXELS),De=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let $=0,te=q.length;$<te;$++){const _e=q[$],xe=Math.floor(_e.start/4),de=Math.ceil(_e.count/4),Ve=xe%M.width,U=Math.floor(xe/M.width),ae=de,ne=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,U),t.texSubImage2D(r.TEXTURE_2D,0,Ve,U,ae,ne,z,X,M.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,re),r.pixelStorei(r.UNPACK_SKIP_PIXELS,we),r.pixelStorei(r.UNPACK_SKIP_ROWS,De)}}function K(C,M,z){let X=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=r.TEXTURE_3D);const J=Ae(C,M),q=M.source;t.bindTexture(X,C.__webglTexture,r.TEXTURE0+z);const ge=n.get(q);if(q.version!==ge.__version||J===!0){t.activeTexture(r.TEXTURE0+z);const re=qe.getPrimaries(qe.workingColorSpace),we=M.colorSpace===ki?null:qe.getPrimaries(M.colorSpace),De=M.colorSpace===ki||re===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let $=_(M.image,!1,i.maxTextureSize);$=ut(M,$);const te=s.convert(M.format,M.colorSpace),_e=s.convert(M.type);let xe=y(M.internalFormat,te,_e,M.colorSpace,M.isVideoTexture);ee(X,M);let de;const Ve=M.mipmaps,U=M.isVideoTexture!==!0,ae=ge.__version===void 0||J===!0,ne=q.dataReady,pe=E(M,$);if(M.isDepthTexture)xe=v(M.format===ls,M.type),ae&&(U?t.texStorage2D(r.TEXTURE_2D,1,xe,$.width,$.height):t.texImage2D(r.TEXTURE_2D,0,xe,$.width,$.height,0,te,_e,null));else if(M.isDataTexture)if(Ve.length>0){U&&ae&&t.texStorage2D(r.TEXTURE_2D,pe,xe,Ve[0].width,Ve[0].height);for(let Q=0,j=Ve.length;Q<j;Q++)de=Ve[Q],U?ne&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,de.width,de.height,te,_e,de.data):t.texImage2D(r.TEXTURE_2D,Q,xe,de.width,de.height,0,te,_e,de.data);M.generateMipmaps=!1}else U?(ae&&t.texStorage2D(r.TEXTURE_2D,pe,xe,$.width,$.height),ne&&Ke(M,$,te,_e)):t.texImage2D(r.TEXTURE_2D,0,xe,$.width,$.height,0,te,_e,$.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){U&&ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,xe,Ve[0].width,Ve[0].height,$.depth);for(let Q=0,j=Ve.length;Q<j;Q++)if(de=Ve[Q],M.format!==Dn)if(te!==null)if(U){if(ne)if(M.layerUpdates.size>0){const be=Su(de.width,de.height,M.format,M.type);for(const Fe of M.layerUpdates){const dt=de.data.subarray(Fe*be/de.data.BYTES_PER_ELEMENT,(Fe+1)*be/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,Fe,de.width,de.height,1,te,dt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,$.depth,te,de.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Q,xe,de.width,de.height,$.depth,0,de.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ne&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,$.depth,te,_e,de.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Q,xe,de.width,de.height,$.depth,0,te,_e,de.data)}else{U&&ae&&t.texStorage2D(r.TEXTURE_2D,pe,xe,Ve[0].width,Ve[0].height);for(let Q=0,j=Ve.length;Q<j;Q++)de=Ve[Q],M.format!==Dn?te!==null?U?ne&&t.compressedTexSubImage2D(r.TEXTURE_2D,Q,0,0,de.width,de.height,te,de.data):t.compressedTexImage2D(r.TEXTURE_2D,Q,xe,de.width,de.height,0,de.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ne&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,de.width,de.height,te,_e,de.data):t.texImage2D(r.TEXTURE_2D,Q,xe,de.width,de.height,0,te,_e,de.data)}else if(M.isDataArrayTexture)if(U){if(ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,xe,$.width,$.height,$.depth),ne)if(M.layerUpdates.size>0){const Q=Su($.width,$.height,M.format,M.type);for(const j of M.layerUpdates){const be=$.data.subarray(j*Q/$.data.BYTES_PER_ELEMENT,(j+1)*Q/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,$.width,$.height,1,te,_e,be)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,te,_e,$.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,xe,$.width,$.height,$.depth,0,te,_e,$.data);else if(M.isData3DTexture)U?(ae&&t.texStorage3D(r.TEXTURE_3D,pe,xe,$.width,$.height,$.depth),ne&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,te,_e,$.data)):t.texImage3D(r.TEXTURE_3D,0,xe,$.width,$.height,$.depth,0,te,_e,$.data);else if(M.isFramebufferTexture){if(ae)if(U)t.texStorage2D(r.TEXTURE_2D,pe,xe,$.width,$.height);else{let Q=$.width,j=$.height;for(let be=0;be<pe;be++)t.texImage2D(r.TEXTURE_2D,be,xe,Q,j,0,te,_e,null),Q>>=1,j>>=1}}else if(Ve.length>0){if(U&&ae){const Q=ye(Ve[0]);t.texStorage2D(r.TEXTURE_2D,pe,xe,Q.width,Q.height)}for(let Q=0,j=Ve.length;Q<j;Q++)de=Ve[Q],U?ne&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,te,_e,de):t.texImage2D(r.TEXTURE_2D,Q,xe,te,_e,de);M.generateMipmaps=!1}else if(U){if(ae){const Q=ye($);t.texStorage2D(r.TEXTURE_2D,pe,xe,Q.width,Q.height)}ne&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,te,_e,$)}else t.texImage2D(r.TEXTURE_2D,0,xe,te,_e,$);g(M)&&p(X),ge.__version=q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function se(C,M,z){if(M.image.length!==6)return;const X=Ae(C,M),J=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+z);const q=n.get(J);if(J.version!==q.__version||X===!0){t.activeTexture(r.TEXTURE0+z);const ge=qe.getPrimaries(qe.workingColorSpace),re=M.colorSpace===ki?null:qe.getPrimaries(M.colorSpace),we=M.colorSpace===ki||ge===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,$=M.image[0]&&M.image[0].isDataTexture,te=[];for(let j=0;j<6;j++)!De&&!$?te[j]=_(M.image[j],!0,i.maxCubemapSize):te[j]=$?M.image[j].image:M.image[j],te[j]=ut(M,te[j]);const _e=te[0],xe=s.convert(M.format,M.colorSpace),de=s.convert(M.type),Ve=y(M.internalFormat,xe,de,M.colorSpace),U=M.isVideoTexture!==!0,ae=q.__version===void 0||X===!0,ne=J.dataReady;let pe=E(M,_e);ee(r.TEXTURE_CUBE_MAP,M);let Q;if(De){U&&ae&&t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,Ve,_e.width,_e.height);for(let j=0;j<6;j++){Q=te[j].mipmaps;for(let be=0;be<Q.length;be++){const Fe=Q[be];M.format!==Dn?xe!==null?U?ne&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,0,0,Fe.width,Fe.height,xe,Fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,Ve,Fe.width,Fe.height,0,Fe.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,0,0,Fe.width,Fe.height,xe,de,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,Ve,Fe.width,Fe.height,0,xe,de,Fe.data)}}}else{if(Q=M.mipmaps,U&&ae){Q.length>0&&pe++;const j=ye(te[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,Ve,j.width,j.height)}for(let j=0;j<6;j++)if($){U?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,te[j].width,te[j].height,xe,de,te[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ve,te[j].width,te[j].height,0,xe,de,te[j].data);for(let be=0;be<Q.length;be++){const dt=Q[be].image[j].image;U?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,0,0,dt.width,dt.height,xe,de,dt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,Ve,dt.width,dt.height,0,xe,de,dt.data)}}else{U?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xe,de,te[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ve,xe,de,te[j]);for(let be=0;be<Q.length;be++){const Fe=Q[be];U?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,0,0,xe,de,Fe.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,Ve,xe,de,Fe.image[j])}}}g(M)&&p(r.TEXTURE_CUBE_MAP),q.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function oe(C,M,z,X,J,q){const ge=s.convert(z.format,z.colorSpace),re=s.convert(z.type),we=y(z.internalFormat,ge,re,z.colorSpace),De=n.get(M),$=n.get(z);if($.__renderTarget=M,!De.__hasExternalTextures){const te=Math.max(1,M.width>>q),_e=Math.max(1,M.height>>q);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,q,we,te,_e,M.depth,0,ge,re,null):t.texImage2D(J,q,we,te,_e,0,ge,re,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Rt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,X,J,$.__webglTexture,0,L(M)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,X,J,$.__webglTexture,q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(C,M,z){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer){const X=M.depthTexture,J=X&&X.isDepthTexture?X.type:null,q=v(M.stencilBuffer,J),ge=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Rt(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,L(M),q,M.width,M.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,L(M),q,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,q,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,C)}else{const X=M.textures;for(let J=0;J<X.length;J++){const q=X[J],ge=s.convert(q.format,q.colorSpace),re=s.convert(q.type),we=y(q.internalFormat,ge,re,q.colorSpace);Rt(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,L(M),we,M.width,M.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,L(M),we,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,we,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ce(C,M,z){const X=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(M.depthTexture);if(J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X){if(J.__webglInit===void 0&&(J.__webglInit=!0,M.depthTexture.addEventListener("dispose",w)),J.__webglTexture===void 0){J.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),ee(r.TEXTURE_CUBE_MAP,M.depthTexture);const De=s.convert(M.depthTexture.format),$=s.convert(M.depthTexture.type);let te;M.depthTexture.format===Ei?te=r.DEPTH_COMPONENT24:M.depthTexture.format===ls&&(te=r.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,te,M.width,M.height,0,De,$,null)}}else N(M.depthTexture,0);const q=J.__webglTexture,ge=L(M),re=X?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,we=M.depthTexture.format===ls?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ei)Rt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,we,re,q,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,we,re,q,0);else if(M.depthTexture.format===ls)Rt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,we,re,q,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,we,re,q,0);else throw new Error("Unknown depthTexture format")}function Le(C){const M=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=X}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let X=0;X<6;X++)Ce(M.__webglFramebuffer[X],C,X);else{const X=C.texture.mipmaps;X&&X.length>0?Ce(M.__webglFramebuffer[0],C,0):Ce(M.__webglFramebuffer,C,0)}else if(z){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=r.createRenderbuffer(),Ne(M.__webglDepthbuffer[X],C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[X];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,q)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Ne(M.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,q)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Nt(C,M,z){const X=n.get(C);M!==void 0&&oe(X.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Le(C)}function Ye(C){const M=C.texture,z=n.get(C),X=n.get(M);C.addEventListener("dispose",A);const J=C.textures,q=C.isWebGLCubeRenderTarget===!0,ge=J.length>1;if(ge||(X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture()),X.__version=M.version,a.memory.textures++),q){z.__webglFramebuffer=[];for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[re]=[];for(let we=0;we<M.mipmaps.length;we++)z.__webglFramebuffer[re][we]=r.createFramebuffer()}else z.__webglFramebuffer[re]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let re=0;re<M.mipmaps.length;re++)z.__webglFramebuffer[re]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(ge)for(let re=0,we=J.length;re<we;re++){const De=n.get(J[re]);De.__webglTexture===void 0&&(De.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&Rt(C)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let re=0;re<J.length;re++){const we=J[re];z.__webglColorRenderbuffer[re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[re]);const De=s.convert(we.format,we.colorSpace),$=s.convert(we.type),te=y(we.internalFormat,De,$,we.colorSpace,C.isXRRenderTarget===!0),_e=L(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,te,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,z.__webglColorRenderbuffer[re])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Ne(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),ee(r.TEXTURE_CUBE_MAP,M);for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)oe(z.__webglFramebuffer[re][we],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,we);else oe(z.__webglFramebuffer[re],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);g(M)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let re=0,we=J.length;re<we;re++){const De=J[re],$=n.get(De);let te=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(te=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(te,$.__webglTexture),ee(te,De),oe(z.__webglFramebuffer,C,De,r.COLOR_ATTACHMENT0+re,te,0),g(De)&&p(te)}t.unbindTexture()}else{let re=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(re=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(re,X.__webglTexture),ee(re,M),M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)oe(z.__webglFramebuffer[we],C,M,r.COLOR_ATTACHMENT0,re,we);else oe(z.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,re,0);g(M)&&p(re),t.unbindTexture()}C.depthBuffer&&Le(C)}function et(C){const M=C.textures;for(let z=0,X=M.length;z<X;z++){const J=M[z];if(g(J)){const q=b(C),ge=n.get(J).__webglTexture;t.bindTexture(q,ge),p(q),t.unbindTexture()}}}const ot=[],Ge=[];function Et(C){if(C.samples>0){if(Rt(C)===!1){const M=C.textures,z=C.width,X=C.height;let J=r.COLOR_BUFFER_BIT;const q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=n.get(C),re=M.length>1;if(re)for(let De=0;De<M.length;De++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const we=C.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let De=0;De<M.length;De++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[De]);const $=n.get(M[De]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$,0)}r.blitFramebuffer(0,0,z,X,0,0,z,X,J,r.NEAREST),l===!0&&(ot.length=0,Ge.length=0,ot.push(r.COLOR_ATTACHMENT0+De),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ot.push(q),Ge.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ge)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),re)for(let De=0;De<M.length;De++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,ge.__webglColorRenderbuffer[De]);const $=n.get(M[De]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,$,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function L(C){return Math.min(i.maxSamples,C.samples)}function Rt(C){const M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ze(C){const M=a.render.frame;d.get(C)!==M&&(d.set(C,M),C.update())}function ut(C,M){const z=C.colorSpace,X=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Jt&&z!==ki&&(qe.getTransfer(z)===nt?(X!==Dn||J!==bn)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",z)),M}function ye(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=D,this.resetTextureUnits=I,this.setTexture2D=N,this.setTexture2DArray=k,this.setTexture3D=B,this.setTextureCube=Z,this.rebindTextures=Nt,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Mv(r,e){function t(n,i=ki){let s;const a=qe.getTransfer(i);if(n===bn)return r.UNSIGNED_BYTE;if(n===Dl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Il)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Id)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ld)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pd)return r.BYTE;if(n===Dd)return r.SHORT;if(n===zr)return r.UNSIGNED_SHORT;if(n===Pl)return r.INT;if(n===ii)return r.UNSIGNED_INT;if(n===en)return r.FLOAT;if(n===yn)return r.HALF_FLOAT;if(n===Fd)return r.ALPHA;if(n===Od)return r.RGB;if(n===Dn)return r.RGBA;if(n===Ei)return r.DEPTH_COMPONENT;if(n===ls)return r.DEPTH_STENCIL;if(n===Ll)return r.RED;if(n===Fl)return r.RED_INTEGER;if(n===Qs)return r.RG;if(n===Ol)return r.RG_INTEGER;if(n===Nl)return r.RGBA_INTEGER;if(n===Ba||n===za||n===Ga||n===Va)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ba)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ba)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===za)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wc||n===Ac||n===Rc||n===Cc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===wc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ac)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pc||n===Dc||n===Ic||n===Lc||n===Fc||n===Oc||n===Nc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Pc||n===Dc)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ic)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Lc)return s.COMPRESSED_R11_EAC;if(n===Fc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Oc)return s.COMPRESSED_RG11_EAC;if(n===Nc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===kc||n===Uc||n===Bc||n===zc||n===Gc||n===Vc||n===Hc||n===Wc||n===jc||n===qc||n===Xc||n===Kc||n===Yc||n===Jc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===kc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zc||n===$c||n===Qc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Zc)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$c)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===el||n===tl||n===nl||n===il)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===el)return s.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Ev=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Yd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ri({vertexShader:Ev,fragmentShader:Tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new me(new Vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Av extends Xi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,h=null,d=null,c=null,u=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",g=new wv,p={},b=t.getContextAttributes();let y=null,v=null;const E=[],w=[],A=new Re;let x=null;const S=new Qt;S.viewport=new pt;const P=new Qt;P.viewport=new pt;const R=[S,P],I=new Tg;let D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let se=E[K];return se===void 0&&(se=new Ro,E[K]=se),se.getTargetRaySpace()},this.getControllerGrip=function(K){let se=E[K];return se===void 0&&(se=new Ro,E[K]=se),se.getGripSpace()},this.getHand=function(K){let se=E[K];return se===void 0&&(se=new Ro,E[K]=se),se.getHandSpace()};function N(K){const se=w.indexOf(K.inputSource);if(se===-1)return;const oe=E[se];oe!==void 0&&(oe.update(K.inputSource,K.frame,h||a),oe.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",B);for(let K=0;K<E.length;K++){const se=w[K];se!==null&&(w[K]=null,E[K].disconnect(se))}D=null,F=null,g.reset();for(const K in p)delete p[K];e.setRenderTarget(y),f=null,u=null,c=null,i=null,v=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return c===null&&_&&(c=new XRWebGLBinding(i,t)),c},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",k),i.addEventListener("inputsourceschange",B),b.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Ne=null,Ce=null;b.depth&&(Ce=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=b.stencil?ls:Ei,Ne=b.stencil?Gr:ii);const Le={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};c=this.getBinding(),u=c.createProjectionLayer(Le),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new ti(u.textureWidth,u.textureHeight,{format:Dn,type:bn,depthTexture:new qr(u.textureWidth,u.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const oe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ti(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await i.requestReferenceSpace(o),Ke.setContext(i),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(K){for(let se=0;se<K.removed.length;se++){const oe=K.removed[se],Ne=w.indexOf(oe);Ne>=0&&(w[Ne]=null,E[Ne].disconnect(oe))}for(let se=0;se<K.added.length;se++){const oe=K.added[se];let Ne=w.indexOf(oe);if(Ne===-1){for(let Le=0;Le<E.length;Le++)if(Le>=w.length){w.push(oe),Ne=Le;break}else if(w[Le]===null){w[Le]=oe,Ne=Le;break}if(Ne===-1)break}const Ce=E[Ne];Ce&&Ce.connect(oe)}}const Z=new O,Y=new O;function ie(K,se,oe){Z.setFromMatrixPosition(se.matrixWorld),Y.setFromMatrixPosition(oe.matrixWorld);const Ne=Z.distanceTo(Y),Ce=se.projectionMatrix.elements,Le=oe.projectionMatrix.elements,Nt=Ce[14]/(Ce[10]-1),Ye=Ce[14]/(Ce[10]+1),et=(Ce[9]+1)/Ce[5],ot=(Ce[9]-1)/Ce[5],Ge=(Ce[8]-1)/Ce[0],Et=(Le[8]+1)/Le[0],L=Nt*Ge,Rt=Nt*Et,Ze=Ne/(-Ge+Et),ut=Ze*-Ge;if(se.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ut),K.translateZ(Ze),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ce[10]===-1)K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const ye=Nt+Ze,C=Ye+Ze,M=L-ut,z=Rt+(Ne-ut),X=et*Ye/C*ye,J=ot*Ye/C*ye;K.projectionMatrix.makePerspective(M,z,X,J,ye,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ue(K,se){se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let se=K.near,oe=K.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(oe=g.depthFar)),I.near=P.near=S.near=se,I.far=P.far=S.far=oe,(D!==I.near||F!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),D=I.near,F=I.far),I.layers.mask=K.layers.mask|6,S.layers.mask=I.layers.mask&-5,P.layers.mask=I.layers.mask&-3;const Ne=K.parent,Ce=I.cameras;ue(I,Ne);for(let Le=0;Le<Ce.length;Le++)ue(Ce[Le],Ne);Ce.length===2?ie(I,S,P):I.projectionMatrix.copy(S.projectionMatrix),ee(K,I,Ne)};function ee(K,se,oe){oe===null?K.matrix.copy(se.matrixWorld):(K.matrix.copy(oe.matrixWorld),K.matrix.invert(),K.matrix.multiply(se.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=er*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(K){return p[K]};let Ae=null;function je(K,se){if(d=se.getViewerPose(h||a),m=se,d!==null){const oe=d.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ne=!1;oe.length!==I.cameras.length&&(I.cameras.length=0,Ne=!0);for(let Ye=0;Ye<oe.length;Ye++){const et=oe[Ye];let ot=null;if(f!==null)ot=f.getViewport(et);else{const Et=c.getViewSubImage(u,et);ot=Et.viewport,Ye===0&&(e.setRenderTargetTextures(v,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(v))}let Ge=R[Ye];Ge===void 0&&(Ge=new Qt,Ge.layers.enable(Ye),Ge.viewport=new pt,R[Ye]=Ge),Ge.matrix.fromArray(et.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(et.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(ot.x,ot.y,ot.width,ot.height),Ye===0&&(I.matrix.copy(Ge.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ne===!0&&I.cameras.push(Ge)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){c=n.getBinding();const Ye=c.getDepthInformation(oe[0]);Ye&&Ye.isValid&&Ye.texture&&g.init(Ye,i.renderState)}if(Ce&&Ce.includes("camera-access")&&_){e.state.unbindTexture(),c=n.getBinding();for(let Ye=0;Ye<oe.length;Ye++){const et=oe[Ye].camera;if(et){let ot=p[et];ot||(ot=new Yd,p[et]=ot);const Ge=c.getCameraImage(et);ot.sourceTexture=Ge}}}}for(let oe=0;oe<E.length;oe++){const Ne=w[oe],Ce=E[oe];Ne!==null&&Ce!==void 0&&Ce.update(Ne,se,h||a)}Ae&&Ae(K,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),m=null}const Ke=new nf;Ke.setAnimationLoop(je),this.setAnimationLoop=function(K){Ae=K},this.dispose=function(){}}}const ns=new si,Rv=new Ue;function Cv(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Jd(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,b,y,v){p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),c(g,p)):p.isMeshPhongMaterial?(s(g,p),d(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,b,y):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===tn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===tn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=e.get(p),y=b.envMap,v=b.envMapRotation;y&&(g.envMap.value=y,ns.copy(v),ns.x*=-1,ns.y*=-1,ns.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),g.envMapRotation.value.setFromMatrix4(Rv.makeRotationFromEuler(ns)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function c(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Pv(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const v=y.program;n.uniformBlockBinding(b,v)}function h(b,y){let v=i[b.id];v===void 0&&(m(b),v=d(b),i[b.id]=v,b.addEventListener("dispose",g));const E=y.program;n.updateUBOMapping(b,E);const w=e.render.frame;s[b.id]!==w&&(u(b),s[b.id]=w)}function d(b){const y=c();b.__bindingPointIndex=y;const v=r.createBuffer(),E=b.__size,w=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,E,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function c(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const y=i[b.id],v=b.uniforms,E=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,A=v.length;w<A;w++){const x=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,P=x.length;S<P;S++){const R=x[S];if(f(R,w,S,E)===!0){const I=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let F=0;for(let N=0;N<D.length;N++){const k=D[N],B=_(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,I+F,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,F),F+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(b,y,v,E){const w=b.value,A=y+"_"+v;if(E[A]===void 0)return typeof w=="number"||typeof w=="boolean"?E[A]=w:E[A]=w.clone(),!0;{const x=E[A];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return E[A]=w,!0}else if(x.equals(w)===!1)return x.copy(w),!0}return!1}function m(b){const y=b.uniforms;let v=0;const E=16;for(let A=0,x=y.length;A<x;A++){const S=Array.isArray(y[A])?y[A]:[y[A]];for(let P=0,R=S.length;P<R;P++){const I=S[P],D=Array.isArray(I.value)?I.value:[I.value];for(let F=0,N=D.length;F<N;F++){const k=D[F],B=_(k),Z=v%E,Y=Z%B.boundary,ie=Z+Y;v+=Y,ie!==0&&E-ie<B.storage&&(v+=E-ie),I.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=B.storage}}}const w=v%E;return w>0&&(v+=E-w),b.__size=v,b.__cache={},this}function _(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Me("WebGLRenderer: Unsupported uniform value type.",b),y}function g(b){const y=b.target;y.removeEventListener("dispose",g);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const b in i)r.deleteBuffer(i[b]);a=[],i={},s={}}return{bind:l,update:h,dispose:p}}const Dv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qn=null;function Iv(){return qn===null&&(qn=new lo(Dv,16,16,Qs,yn),qn.name="DFG_LUT",qn.minFilter=Qe,qn.magFilter=Qe,qn.wrapS=vn,qn.wrapT=vn,qn.generateMipmaps=!1,qn.needsUpdate=!0),qn}class Lv{constructor(e={}){const{canvas:t=Qp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:u=!1,outputBufferType:f=bn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=f,g=new Set([Nl,Ol,Fl]),p=new Set([bn,ii,zr,Gr,Dl,Il]),b=new Uint32Array(4),y=new Int32Array(4);let v=null,E=null;const w=[],A=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let P=!1;this._outputColorSpace=St;let R=0,I=0,D=null,F=-1,N=null;const k=new pt,B=new pt;let Z=null;const Y=new Ie(0);let ie=0,ue=t.width,ee=t.height,Ae=1,je=null,Ke=null;const K=new pt(0,0,ue,ee),se=new pt(0,0,ue,ee);let oe=!1;const Ne=new ql;let Ce=!1,Le=!1;const Nt=new Ue,Ye=new O,et=new pt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function Et(){return D===null?Ae:1}let L=n;function Rt(T,G){return t.getContext(T,G)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rl}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",dt,!1),L===null){const G="webgl2";if(L=Rt(G,T),L===null)throw Rt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Pe("WebGLRenderer: "+T.message),T}let Ze,ut,ye,C,M,z,X,J,q,ge,re,we,De,$,te,_e,xe,de,Ve,U,ae,ne,pe;function Q(){Ze=new Lb(L),Ze.init(),ae=new Mv(L,Ze),ut=new Tb(L,Ze,e,ae),ye=new yv(L,Ze),ut.reversedDepthBuffer&&u&&ye.buffers.depth.setReversed(!0),C=new Nb(L),M=new ov,z=new Sv(L,Ze,ye,M,ut,ae,C),X=new Ib(S),J=new Gg(L),ne=new Mb(L,J),q=new Fb(L,J,C,ne),ge=new Ub(L,q,J,ne,C),de=new kb(L,ut,z),te=new wb(M),re=new av(S,X,Ze,ut,ne,te),we=new Cv(S,M),De=new lv,$=new mv(Ze),xe=new Sb(S,X,ye,ge,m,l),_e=new vv(S,ge,ut),pe=new Pv(L,C,ut,ye),Ve=new Eb(L,Ze,C),U=new Ob(L,Ze,C),C.programs=re.programs,S.capabilities=ut,S.extensions=Ze,S.properties=M,S.renderLists=De,S.shadowMap=_e,S.state=ye,S.info=C}Q(),_!==bn&&(x=new zb(_,t.width,t.height,i,s));const j=new Av(S,L);this.xr=j,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Ze.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ze.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(T){T!==void 0&&(Ae=T,this.setSize(ue,ee,!1))},this.getSize=function(T){return T.set(ue,ee)},this.setSize=function(T,G,W=!0){if(j.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=T,ee=G,t.width=Math.floor(T*Ae),t.height=Math.floor(G*Ae),W===!0&&(t.style.width=T+"px",t.style.height=G+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(ue*Ae,ee*Ae).floor()},this.setDrawingBufferSize=function(T,G,W){ue=T,ee=G,Ae=W,t.width=Math.floor(T*W),t.height=Math.floor(G*W),this.setViewport(0,0,T,G)},this.setEffects=function(T){if(_===bn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let G=0;G<T.length;G++)if(T[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(k)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,G,W,H){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,G,W,H),ye.viewport(k.copy(K).multiplyScalar(Ae).round())},this.getScissor=function(T){return T.copy(se)},this.setScissor=function(T,G,W,H){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,G,W,H),ye.scissor(B.copy(se).multiplyScalar(Ae).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(T){ye.setScissorTest(oe=T)},this.setOpaqueSort=function(T){je=T},this.setTransparentSort=function(T){Ke=T},this.getClearColor=function(T){return T.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,W=!0){let H=0;if(T){let V=!1;if(D!==null){const le=D.texture.format;V=g.has(le)}if(V){const le=D.texture.type,fe=p.has(le),he=xe.getClearColor(),ve=xe.getClearAlpha(),Ee=he.r,Oe=he.g,He=he.b;fe?(b[0]=Ee,b[1]=Oe,b[2]=He,b[3]=ve,L.clearBufferuiv(L.COLOR,0,b)):(y[0]=Ee,y[1]=Oe,y[2]=He,y[3]=ve,L.clearBufferiv(L.COLOR,0,y))}else H|=L.COLOR_BUFFER_BIT}G&&(H|=L.DEPTH_BUFFER_BIT),W&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),xe.dispose(),De.dispose(),$.dispose(),M.dispose(),X.dispose(),ge.dispose(),ne.dispose(),pe.dispose(),re.dispose(),j.dispose(),j.removeEventListener("sessionstart",yh),j.removeEventListener("sessionend",Sh),Yi.stop()};function be(T){T.preventDefault(),Za("WebGLRenderer: Context Lost."),P=!0}function Fe(){Za("WebGLRenderer: Context Restored."),P=!1;const T=C.autoReset,G=_e.enabled,W=_e.autoUpdate,H=_e.needsUpdate,V=_e.type;Q(),C.autoReset=T,_e.enabled=G,_e.autoUpdate=W,_e.needsUpdate=H,_e.type=V}function dt(T){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function tt(T){const G=T.target;G.removeEventListener("dispose",tt),hi(G)}function hi(T){ui(T),M.remove(T)}function ui(T){const G=M.get(T).programs;G!==void 0&&(G.forEach(function(W){re.releaseProgram(W)}),T.isShaderMaterial&&re.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,W,H,V,le){G===null&&(G=ot);const fe=V.isMesh&&V.matrixWorld.determinant()<0,he=up(T,G,W,H,V);ye.setMaterial(H,fe);let ve=W.index,Ee=1;if(H.wireframe===!0){if(ve=q.getWireframeAttribute(W),ve===void 0)return;Ee=2}const Oe=W.drawRange,He=W.attributes.position;let Te=Oe.start*Ee,st=(Oe.start+Oe.count)*Ee;le!==null&&(Te=Math.max(Te,le.start*Ee),st=Math.min(st,(le.start+le.count)*Ee)),ve!==null?(Te=Math.max(Te,0),st=Math.min(st,ve.count)):He!=null&&(Te=Math.max(Te,0),st=Math.min(st,He.count));const Tt=st-Te;if(Tt<0||Tt===1/0)return;ne.setup(V,H,he,W,ve);let yt,rt=Ve;if(ve!==null&&(yt=J.get(ve),rt=U,rt.setIndex(yt)),V.isMesh)H.wireframe===!0?(ye.setLineWidth(H.wireframeLinewidth*Et()),rt.setMode(L.LINES)):rt.setMode(L.TRIANGLES);else if(V.isLine){let Wt=H.linewidth;Wt===void 0&&(Wt=1),ye.setLineWidth(Wt*Et()),V.isLineSegments?rt.setMode(L.LINES):V.isLineLoop?rt.setMode(L.LINE_LOOP):rt.setMode(L.LINE_STRIP)}else V.isPoints?rt.setMode(L.POINTS):V.isSprite&&rt.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)$a("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))rt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Wt=V._multiDrawStarts,Se=V._multiDrawCounts,pn=V._multiDrawCount,Je=ve?J.get(ve).bytesPerElement:1,Fn=M.get(H).currentProgram.getUniforms();for(let Wn=0;Wn<pn;Wn++)Fn.setValue(L,"_gl_DrawID",Wn),rt.render(Wt[Wn]/Je,Se[Wn])}else if(V.isInstancedMesh)rt.renderInstances(Te,Tt,V.count);else if(W.isInstancedBufferGeometry){const Wt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Se=Math.min(W.instanceCount,Wt);rt.renderInstances(Te,Tt,Se)}else rt.render(Te,Tt)};function vh(T,G,W){T.transparent===!0&&T.side===Un&&T.forceSinglePass===!1?(T.side=tn,T.needsUpdate=!0,sa(T,G,W),T.side=sn,T.needsUpdate=!0,sa(T,G,W),T.side=Un):sa(T,G,W)}this.compile=function(T,G,W=null){W===null&&(W=T),E=$.get(W),E.init(G),A.push(E),W.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),T!==W&&T.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights();const H=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const le=V.material;if(le)if(Array.isArray(le))for(let fe=0;fe<le.length;fe++){const he=le[fe];vh(he,W,V),H.add(he)}else vh(le,W,V),H.add(le)}),E=A.pop(),H},this.compileAsync=function(T,G,W=null){const H=this.compile(T,G,W);return new Promise(V=>{function le(){if(H.forEach(function(fe){M.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){V(T);return}setTimeout(le,10)}Ze.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let xo=null;function hp(T){xo&&xo(T)}function yh(){Yi.stop()}function Sh(){Yi.start()}const Yi=new nf;Yi.setAnimationLoop(hp),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(T){xo=T,j.setAnimationLoop(T),T===null?Yi.stop():Yi.start()},j.addEventListener("sessionstart",yh),j.addEventListener("sessionend",Sh),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;const W=j.enabled===!0&&j.isPresenting===!0,H=x!==null&&(D===null||W)&&x.begin(S,D);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(j.cameraAutoUpdate===!0&&j.updateCamera(G),G=j.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,G,D),E=$.get(T,A.length),E.init(G),A.push(E),Nt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ne.setFromProjectionMatrix(Nt,$n,G.reversedDepth),Le=this.localClippingEnabled,Ce=te.init(this.clippingPlanes,Le),v=De.get(T,w.length),v.init(),w.push(v),j.enabled===!0&&j.isPresenting===!0){const fe=S.xr.getDepthSensingMesh();fe!==null&&vo(fe,G,-1/0,S.sortObjects)}vo(T,G,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(je,Ke),Ge=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ge&&xe.addToRenderList(v,T),this.info.render.frame++,Ce===!0&&te.beginShadows();const V=E.state.shadowsArray;if(_e.render(V,T,G),Ce===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&x.hasRenderPass())===!1){const fe=v.opaque,he=v.transmissive;if(E.setupLights(),G.isArrayCamera){const ve=G.cameras;if(he.length>0)for(let Ee=0,Oe=ve.length;Ee<Oe;Ee++){const He=ve[Ee];Eh(fe,he,T,He)}Ge&&xe.render(T);for(let Ee=0,Oe=ve.length;Ee<Oe;Ee++){const He=ve[Ee];Mh(v,T,He,He.viewport)}}else he.length>0&&Eh(fe,he,T,G),Ge&&xe.render(T),Mh(v,T,G)}D!==null&&I===0&&(z.updateMultisampleRenderTarget(D),z.updateRenderTargetMipmap(D)),H&&x.end(S),T.isScene===!0&&T.onAfterRender(S,T,G),ne.resetDefaultState(),F=-1,N=null,A.pop(),A.length>0?(E=A[A.length-1],Ce===!0&&te.setGlobalState(S.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?v=w[w.length-1]:v=null};function vo(T,G,W,H){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ne.intersectsSprite(T)){H&&et.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Nt);const fe=ge.update(T),he=T.material;he.visible&&v.push(T,fe,he,W,et.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ne.intersectsObject(T))){const fe=ge.update(T),he=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),et.copy(T.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),et.copy(fe.boundingSphere.center)),et.applyMatrix4(T.matrixWorld).applyMatrix4(Nt)),Array.isArray(he)){const ve=fe.groups;for(let Ee=0,Oe=ve.length;Ee<Oe;Ee++){const He=ve[Ee],Te=he[He.materialIndex];Te&&Te.visible&&v.push(T,fe,Te,W,et.z,He)}}else he.visible&&v.push(T,fe,he,W,et.z,null)}}const le=T.children;for(let fe=0,he=le.length;fe<he;fe++)vo(le[fe],G,W,H)}function Mh(T,G,W,H){const{opaque:V,transmissive:le,transparent:fe}=T;E.setupLightsView(W),Ce===!0&&te.setGlobalState(S.clippingPlanes,W),H&&ye.viewport(k.copy(H)),V.length>0&&ia(V,G,W),le.length>0&&ia(le,G,W),fe.length>0&&ia(fe,G,W),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Eh(T,G,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){const Te=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new ti(1,1,{generateMipmaps:!0,type:Te?yn:bn,minFilter:Zn,samples:Math.max(4,ut.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const le=E.state.transmissionRenderTarget[H.id],fe=H.viewport||k;le.setSize(fe.z*S.transmissionResolutionScale,fe.w*S.transmissionResolutionScale);const he=S.getRenderTarget(),ve=S.getActiveCubeFace(),Ee=S.getActiveMipmapLevel();S.setRenderTarget(le),S.getClearColor(Y),ie=S.getClearAlpha(),ie<1&&S.setClearColor(16777215,.5),S.clear(),Ge&&xe.render(W);const Oe=S.toneMapping;S.toneMapping=ei;const He=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),Ce===!0&&te.setGlobalState(S.clippingPlanes,H),ia(T,W,H),z.updateMultisampleRenderTarget(le),z.updateRenderTargetMipmap(le),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let st=0,Tt=G.length;st<Tt;st++){const yt=G[st],{object:rt,geometry:Wt,material:Se,group:pn}=yt;if(Se.side===Un&&rt.layers.test(H.layers)){const Je=Se.side;Se.side=tn,Se.needsUpdate=!0,Th(rt,W,H,Wt,Se,pn),Se.side=Je,Se.needsUpdate=!0,Te=!0}}Te===!0&&(z.updateMultisampleRenderTarget(le),z.updateRenderTargetMipmap(le))}S.setRenderTarget(he,ve,Ee),S.setClearColor(Y,ie),He!==void 0&&(H.viewport=He),S.toneMapping=Oe}function ia(T,G,W){const H=G.isScene===!0?G.overrideMaterial:null;for(let V=0,le=T.length;V<le;V++){const fe=T[V],{object:he,geometry:ve,group:Ee}=fe;let Oe=fe.material;Oe.allowOverride===!0&&H!==null&&(Oe=H),he.layers.test(W.layers)&&Th(he,G,W,ve,Oe,Ee)}}function Th(T,G,W,H,V,le){T.onBeforeRender(S,G,W,H,V,le),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(S,G,W,H,T,le),V.transparent===!0&&V.side===Un&&V.forceSinglePass===!1?(V.side=tn,V.needsUpdate=!0,S.renderBufferDirect(W,G,H,V,T,le),V.side=sn,V.needsUpdate=!0,S.renderBufferDirect(W,G,H,V,T,le),V.side=Un):S.renderBufferDirect(W,G,H,V,T,le),T.onAfterRender(S,G,W,H,V,le)}function sa(T,G,W){G.isScene!==!0&&(G=ot);const H=M.get(T),V=E.state.lights,le=E.state.shadowsArray,fe=V.state.version,he=re.getParameters(T,V.state,le,G,W),ve=re.getProgramCacheKey(he);let Ee=H.programs;H.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,H.fog=G.fog;const Oe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;H.envMap=X.get(T.envMap||H.environment,Oe),H.envMapRotation=H.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,Ee===void 0&&(T.addEventListener("dispose",tt),Ee=new Map,H.programs=Ee);let He=Ee.get(ve);if(He!==void 0){if(H.currentProgram===He&&H.lightsStateVersion===fe)return Ah(T,he),He}else he.uniforms=re.getUniforms(T),T.onBeforeCompile(he,S),He=re.acquireProgram(he,ve),Ee.set(ve,He),H.uniforms=he.uniforms;const Te=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Te.clippingPlanes=te.uniform),Ah(T,he),H.needsLights=fp(T),H.lightsStateVersion=fe,H.needsLights&&(Te.ambientLightColor.value=V.state.ambient,Te.lightProbe.value=V.state.probe,Te.directionalLights.value=V.state.directional,Te.directionalLightShadows.value=V.state.directionalShadow,Te.spotLights.value=V.state.spot,Te.spotLightShadows.value=V.state.spotShadow,Te.rectAreaLights.value=V.state.rectArea,Te.ltc_1.value=V.state.rectAreaLTC1,Te.ltc_2.value=V.state.rectAreaLTC2,Te.pointLights.value=V.state.point,Te.pointLightShadows.value=V.state.pointShadow,Te.hemisphereLights.value=V.state.hemi,Te.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Te.spotLightMatrix.value=V.state.spotLightMatrix,Te.spotLightMap.value=V.state.spotLightMap,Te.pointShadowMatrix.value=V.state.pointShadowMatrix),H.currentProgram=He,H.uniformsList=null,He}function wh(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=Wa.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function Ah(T,G){const W=M.get(T);W.outputColorSpace=G.outputColorSpace,W.batching=G.batching,W.batchingColor=G.batchingColor,W.instancing=G.instancing,W.instancingColor=G.instancingColor,W.instancingMorph=G.instancingMorph,W.skinning=G.skinning,W.morphTargets=G.morphTargets,W.morphNormals=G.morphNormals,W.morphColors=G.morphColors,W.morphTargetsCount=G.morphTargetsCount,W.numClippingPlanes=G.numClippingPlanes,W.numIntersection=G.numClipIntersection,W.vertexAlphas=G.vertexAlphas,W.vertexTangents=G.vertexTangents,W.toneMapping=G.toneMapping}function up(T,G,W,H,V){G.isScene!==!0&&(G=ot),z.resetTextureUnits();const le=G.fog,fe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?G.environment:null,he=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Jt,ve=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ee=X.get(H.envMap||fe,ve),Oe=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,He=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Te=!!W.morphAttributes.position,st=!!W.morphAttributes.normal,Tt=!!W.morphAttributes.color;let yt=ei;H.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(yt=S.toneMapping);const rt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Wt=rt!==void 0?rt.length:0,Se=M.get(H),pn=E.state.lights;if(Ce===!0&&(Le===!0||T!==N)){const kt=T===N&&H.id===F;te.setState(H,T,kt)}let Je=!1;H.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==pn.state.version||Se.outputColorSpace!==he||V.isBatchedMesh&&Se.batching===!1||!V.isBatchedMesh&&Se.batching===!0||V.isBatchedMesh&&Se.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Se.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Se.instancing===!1||!V.isInstancedMesh&&Se.instancing===!0||V.isSkinnedMesh&&Se.skinning===!1||!V.isSkinnedMesh&&Se.skinning===!0||V.isInstancedMesh&&Se.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Se.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Se.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Se.instancingMorph===!1&&V.morphTexture!==null||Se.envMap!==Ee||H.fog===!0&&Se.fog!==le||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==te.numPlanes||Se.numIntersection!==te.numIntersection)||Se.vertexAlphas!==Oe||Se.vertexTangents!==He||Se.morphTargets!==Te||Se.morphNormals!==st||Se.morphColors!==Tt||Se.toneMapping!==yt||Se.morphTargetsCount!==Wt)&&(Je=!0):(Je=!0,Se.__version=H.version);let Fn=Se.currentProgram;Je===!0&&(Fn=sa(H,G,V));let Wn=!1,Ji=!1,vs=!1;const ct=Fn.getUniforms(),zt=Se.uniforms;if(ye.useProgram(Fn.program)&&(Wn=!0,Ji=!0,vs=!0),H.id!==F&&(F=H.id,Ji=!0),Wn||N!==T){ye.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ct.setValue(L,"projectionMatrix",T.projectionMatrix),ct.setValue(L,"viewMatrix",T.matrixWorldInverse);const Ri=ct.map.cameraPosition;Ri!==void 0&&Ri.setValue(L,Ye.setFromMatrixPosition(T.matrixWorld)),ut.logarithmicDepthBuffer&&ct.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ct.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),N!==T&&(N=T,Ji=!0,vs=!0)}if(Se.needsLights&&(pn.state.directionalShadowMap.length>0&&ct.setValue(L,"directionalShadowMap",pn.state.directionalShadowMap,z),pn.state.spotShadowMap.length>0&&ct.setValue(L,"spotShadowMap",pn.state.spotShadowMap,z),pn.state.pointShadowMap.length>0&&ct.setValue(L,"pointShadowMap",pn.state.pointShadowMap,z)),V.isSkinnedMesh){ct.setOptional(L,V,"bindMatrix"),ct.setOptional(L,V,"bindMatrixInverse");const kt=V.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),ct.setValue(L,"boneTexture",kt.boneTexture,z))}V.isBatchedMesh&&(ct.setOptional(L,V,"batchingTexture"),ct.setValue(L,"batchingTexture",V._matricesTexture,z),ct.setOptional(L,V,"batchingIdTexture"),ct.setValue(L,"batchingIdTexture",V._indirectTexture,z),ct.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&ct.setValue(L,"batchingColorTexture",V._colorsTexture,z));const Ai=W.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&de.update(V,W,Fn),(Ji||Se.receiveShadow!==V.receiveShadow)&&(Se.receiveShadow=V.receiveShadow,ct.setValue(L,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&G.environment!==null&&(zt.envMapIntensity.value=G.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=Iv()),Ji&&(ct.setValue(L,"toneMappingExposure",S.toneMappingExposure),Se.needsLights&&dp(zt,vs),le&&H.fog===!0&&we.refreshFogUniforms(zt,le),we.refreshMaterialUniforms(zt,H,Ae,ee,E.state.transmissionRenderTarget[T.id]),Wa.upload(L,wh(Se),zt,z)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Wa.upload(L,wh(Se),zt,z),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ct.setValue(L,"center",V.center),ct.setValue(L,"modelViewMatrix",V.modelViewMatrix),ct.setValue(L,"normalMatrix",V.normalMatrix),ct.setValue(L,"modelMatrix",V.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const kt=H.uniformsGroups;for(let Ri=0,ys=kt.length;Ri<ys;Ri++){const Rh=kt[Ri];pe.update(Rh,Fn),pe.bind(Rh,Fn)}}return Fn}function dp(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function fp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,G,W){const H=M.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),M.get(T.texture).__webglTexture=G,M.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){const W=M.get(T);W.__webglFramebuffer=G,W.__useDefaultFramebuffer=G===void 0};const pp=L.createFramebuffer();this.setRenderTarget=function(T,G=0,W=0){D=T,R=G,I=W;let H=null,V=!1,le=!1;if(T){const he=M.get(T);if(he.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(L.FRAMEBUFFER,he.__webglFramebuffer),k.copy(T.viewport),B.copy(T.scissor),Z=T.scissorTest,ye.viewport(k),ye.scissor(B),ye.setScissorTest(Z),F=-1;return}else if(he.__webglFramebuffer===void 0)z.setupRenderTarget(T);else if(he.__hasExternalTextures)z.rebindTextures(T,M.get(T.texture).__webglTexture,M.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Oe=T.depthTexture;if(he.__boundDepthTexture!==Oe){if(Oe!==null&&M.has(Oe)&&(T.width!==Oe.image.width||T.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(T)}}const ve=T.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(le=!0);const Ee=M.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ee[G])?H=Ee[G][W]:H=Ee[G],V=!0):T.samples>0&&z.useMultisampledRTT(T)===!1?H=M.get(T).__webglMultisampledFramebuffer:Array.isArray(Ee)?H=Ee[W]:H=Ee,k.copy(T.viewport),B.copy(T.scissor),Z=T.scissorTest}else k.copy(K).multiplyScalar(Ae).floor(),B.copy(se).multiplyScalar(Ae).floor(),Z=oe;if(W!==0&&(H=pp),ye.bindFramebuffer(L.FRAMEBUFFER,H)&&ye.drawBuffers(T,H),ye.viewport(k),ye.scissor(B),ye.setScissorTest(Z),V){const he=M.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+G,he.__webglTexture,W)}else if(le){const he=G;for(let ve=0;ve<T.textures.length;ve++){const Ee=M.get(T.textures[ve]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ve,Ee.__webglTexture,W,he)}}else if(T!==null&&W!==0){const he=M.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,he.__webglTexture,W)}F=-1},this.readRenderTargetPixels=function(T,G,W,H,V,le,fe,he=0){if(!(T&&T.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){ye.bindFramebuffer(L.FRAMEBUFFER,ve);try{const Ee=T.textures[he],Oe=Ee.format,He=Ee.type;if(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+he),!ut.textureFormatReadable(Oe)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(He)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-H&&W>=0&&W<=T.height-V&&L.readPixels(G,W,H,V,ae.convert(Oe),ae.convert(He),le)}finally{const Ee=D!==null?M.get(D).__webglFramebuffer:null;ye.bindFramebuffer(L.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(T,G,W,H,V,le,fe,he=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve)if(G>=0&&G<=T.width-H&&W>=0&&W<=T.height-V){ye.bindFramebuffer(L.FRAMEBUFFER,ve);const Ee=T.textures[he],Oe=Ee.format,He=Ee.type;if(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+he),!ut.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.bufferData(L.PIXEL_PACK_BUFFER,le.byteLength,L.STREAM_READ),L.readPixels(G,W,H,V,ae.convert(Oe),ae.convert(He),0);const st=D!==null?M.get(D).__webglFramebuffer:null;ye.bindFramebuffer(L.FRAMEBUFFER,st);const Tt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await em(L,Tt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,le),L.deleteBuffer(Te),L.deleteSync(Tt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,W=0){const H=Math.pow(2,-W),V=Math.floor(T.image.width*H),le=Math.floor(T.image.height*H),fe=G!==null?G.x:0,he=G!==null?G.y:0;z.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,fe,he,V,le),ye.unbindTexture()};const mp=L.createFramebuffer(),gp=L.createFramebuffer();this.copyTextureToTexture=function(T,G,W=null,H=null,V=0,le=0){let fe,he,ve,Ee,Oe,He,Te,st,Tt;const yt=T.isCompressedTexture?T.mipmaps[le]:T.image;if(W!==null)fe=W.max.x-W.min.x,he=W.max.y-W.min.y,ve=W.isBox3?W.max.z-W.min.z:1,Ee=W.min.x,Oe=W.min.y,He=W.isBox3?W.min.z:0;else{const zt=Math.pow(2,-V);fe=Math.floor(yt.width*zt),he=Math.floor(yt.height*zt),T.isDataArrayTexture?ve=yt.depth:T.isData3DTexture?ve=Math.floor(yt.depth*zt):ve=1,Ee=0,Oe=0,He=0}H!==null?(Te=H.x,st=H.y,Tt=H.z):(Te=0,st=0,Tt=0);const rt=ae.convert(G.format),Wt=ae.convert(G.type);let Se;G.isData3DTexture?(z.setTexture3D(G,0),Se=L.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(z.setTexture2DArray(G,0),Se=L.TEXTURE_2D_ARRAY):(z.setTexture2D(G,0),Se=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,G.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,G.unpackAlignment);const pn=L.getParameter(L.UNPACK_ROW_LENGTH),Je=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Fn=L.getParameter(L.UNPACK_SKIP_PIXELS),Wn=L.getParameter(L.UNPACK_SKIP_ROWS),Ji=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,yt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),L.pixelStorei(L.UNPACK_SKIP_ROWS,Oe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,He);const vs=T.isDataArrayTexture||T.isData3DTexture,ct=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){const zt=M.get(T),Ai=M.get(G),kt=M.get(zt.__renderTarget),Ri=M.get(Ai.__renderTarget);ye.bindFramebuffer(L.READ_FRAMEBUFFER,kt.__webglFramebuffer),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let ys=0;ys<ve;ys++)vs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,M.get(T).__webglTexture,V,He+ys),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,M.get(G).__webglTexture,le,Tt+ys)),L.blitFramebuffer(Ee,Oe,fe,he,Te,st,fe,he,L.DEPTH_BUFFER_BIT,L.NEAREST);ye.bindFramebuffer(L.READ_FRAMEBUFFER,null),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||M.has(T)){const zt=M.get(T),Ai=M.get(G);ye.bindFramebuffer(L.READ_FRAMEBUFFER,mp),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,gp);for(let kt=0;kt<ve;kt++)vs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,zt.__webglTexture,V,He+kt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,zt.__webglTexture,V),ct?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ai.__webglTexture,le,Tt+kt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ai.__webglTexture,le),V!==0?L.blitFramebuffer(Ee,Oe,fe,he,Te,st,fe,he,L.COLOR_BUFFER_BIT,L.NEAREST):ct?L.copyTexSubImage3D(Se,le,Te,st,Tt+kt,Ee,Oe,fe,he):L.copyTexSubImage2D(Se,le,Te,st,Ee,Oe,fe,he);ye.bindFramebuffer(L.READ_FRAMEBUFFER,null),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ct?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Se,le,Te,st,Tt,fe,he,ve,rt,Wt,yt.data):G.isCompressedArrayTexture?L.compressedTexSubImage3D(Se,le,Te,st,Tt,fe,he,ve,rt,yt.data):L.texSubImage3D(Se,le,Te,st,Tt,fe,he,ve,rt,Wt,yt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,le,Te,st,fe,he,rt,Wt,yt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,le,Te,st,yt.width,yt.height,rt,yt.data):L.texSubImage2D(L.TEXTURE_2D,le,Te,st,fe,he,rt,Wt,yt);L.pixelStorei(L.UNPACK_ROW_LENGTH,pn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Je),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Fn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Wn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ji),le===0&&G.generateMipmaps&&L.generateMipmap(Se),ye.unbindTexture()},this.initRenderTarget=function(T){M.get(T).__webglFramebuffer===void 0&&z.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?z.setTextureCube(T,0):T.isData3DTexture?z.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?z.setTexture2DArray(T,0):z.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){R=0,I=0,D=null,ye.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}class Fv{constructor(){this.width=window.innerWidth,this.height=window.innerHeight,this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<768,this.pixelRatio=this.isMobile?Math.min(window.devicePixelRatio,1.5):Math.min(window.devicePixelRatio,2),this.callbacks=[],window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<768,this.pixelRatio=this.isMobile?Math.min(window.devicePixelRatio,1.5):Math.min(window.devicePixelRatio,2),this.callbacks.forEach(e=>e(this.width,this.height,this.pixelRatio))})}onResize(e){this.callbacks.push(e)}}class Ov{constructor(){this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,this.callbacks=[],window.requestAnimationFrame(()=>this.tick())}tick(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.callbacks.forEach(t=>t(this.delta,this.elapsed)),window.requestAnimationFrame(()=>this.tick())}onTick(e){this.callbacks.push(e)}}var Tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},nc={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */var qu;function Nv(){return qu||(qu=1,(function(r){(function(){var e=function(){this.init()};e.prototype={init:function(){var c=this||t;return c._counter=1e3,c._html5AudioPool=[],c.html5PoolSize=10,c._codecs={},c._howls=[],c._muted=!1,c._volume=1,c._canPlayEvent="canplaythrough",c._navigator=typeof window<"u"&&window.navigator?window.navigator:null,c.masterGain=null,c.noAudio=!1,c.usingWebAudio=!0,c.autoSuspend=!0,c.ctx=null,c.autoUnlock=!0,c._setup(),c},volume:function(c){var u=this||t;if(c=parseFloat(c),u.ctx||d(),typeof c<"u"&&c>=0&&c<=1){if(u._volume=c,u._muted)return u;u.usingWebAudio&&u.masterGain.gain.setValueAtTime(c,t.ctx.currentTime);for(var f=0;f<u._howls.length;f++)if(!u._howls[f]._webAudio)for(var m=u._howls[f]._getSoundIds(),_=0;_<m.length;_++){var g=u._howls[f]._soundById(m[_]);g&&g._node&&(g._node.volume=g._volume*c)}return u}return u._volume},mute:function(c){var u=this||t;u.ctx||d(),u._muted=c,u.usingWebAudio&&u.masterGain.gain.setValueAtTime(c?0:u._volume,t.ctx.currentTime);for(var f=0;f<u._howls.length;f++)if(!u._howls[f]._webAudio)for(var m=u._howls[f]._getSoundIds(),_=0;_<m.length;_++){var g=u._howls[f]._soundById(m[_]);g&&g._node&&(g._node.muted=c?!0:g._muted)}return u},stop:function(){for(var c=this||t,u=0;u<c._howls.length;u++)c._howls[u].stop();return c},unload:function(){for(var c=this||t,u=c._howls.length-1;u>=0;u--)c._howls[u].unload();return c.usingWebAudio&&c.ctx&&typeof c.ctx.close<"u"&&(c.ctx.close(),c.ctx=null,d()),c},codecs:function(c){return(this||t)._codecs[c.replace(/^x-/,"")]},_setup:function(){var c=this||t;if(c.state=c.ctx&&c.ctx.state||"suspended",c._autoSuspend(),!c.usingWebAudio)if(typeof Audio<"u")try{var u=new Audio;typeof u.oncanplaythrough>"u"&&(c._canPlayEvent="canplay")}catch{c.noAudio=!0}else c.noAudio=!0;try{var u=new Audio;u.muted&&(c.noAudio=!0)}catch{}return c.noAudio||c._setupCodecs(),c},_setupCodecs:function(){var c=this||t,u=null;try{u=typeof Audio<"u"?new Audio:null}catch{return c}if(!u||typeof u.canPlayType!="function")return c;var f=u.canPlayType("audio/mpeg;").replace(/^no$/,""),m=c._navigator?c._navigator.userAgent:"",_=m.match(/OPR\/(\d+)/g),g=_&&parseInt(_[0].split("/")[1],10)<33,p=m.indexOf("Safari")!==-1&&m.indexOf("Chrome")===-1,b=m.match(/Version\/(.*?) /),y=p&&b&&parseInt(b[1],10)<15;return c._codecs={mp3:!!(!g&&(f||u.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!f,opus:!!u.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(u.canPlayType('audio/wav; codecs="1"')||u.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!u.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!u.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(u.canPlayType("audio/x-m4a;")||u.canPlayType("audio/m4a;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(u.canPlayType("audio/x-m4b;")||u.canPlayType("audio/m4b;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(u.canPlayType("audio/x-mp4;")||u.canPlayType("audio/mp4;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!y&&u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!y&&u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!u.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(u.canPlayType("audio/x-flac;")||u.canPlayType("audio/flac;")).replace(/^no$/,"")},c},_unlockAudio:function(){var c=this||t;if(!(c._audioUnlocked||!c.ctx)){c._audioUnlocked=!1,c.autoUnlock=!1,!c._mobileUnloaded&&c.ctx.sampleRate!==44100&&(c._mobileUnloaded=!0,c.unload()),c._scratchBuffer=c.ctx.createBuffer(1,1,22050);var u=function(f){for(;c._html5AudioPool.length<c.html5PoolSize;)try{var m=new Audio;m._unlocked=!0,c._releaseHtml5Audio(m)}catch{c.noAudio=!0;break}for(var _=0;_<c._howls.length;_++)if(!c._howls[_]._webAudio)for(var g=c._howls[_]._getSoundIds(),p=0;p<g.length;p++){var b=c._howls[_]._soundById(g[p]);b&&b._node&&!b._node._unlocked&&(b._node._unlocked=!0,b._node.load())}c._autoResume();var y=c.ctx.createBufferSource();y.buffer=c._scratchBuffer,y.connect(c.ctx.destination),typeof y.start>"u"?y.noteOn(0):y.start(0),typeof c.ctx.resume=="function"&&c.ctx.resume(),y.onended=function(){y.disconnect(0),c._audioUnlocked=!0,document.removeEventListener("touchstart",u,!0),document.removeEventListener("touchend",u,!0),document.removeEventListener("click",u,!0),document.removeEventListener("keydown",u,!0);for(var v=0;v<c._howls.length;v++)c._howls[v]._emit("unlock")}};return document.addEventListener("touchstart",u,!0),document.addEventListener("touchend",u,!0),document.addEventListener("click",u,!0),document.addEventListener("keydown",u,!0),c}},_obtainHtml5Audio:function(){var c=this||t;if(c._html5AudioPool.length)return c._html5AudioPool.pop();var u=new Audio().play();return u&&typeof Promise<"u"&&(u instanceof Promise||typeof u.then=="function")&&u.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(c){var u=this||t;return c._unlocked&&u._html5AudioPool.push(c),u},_autoSuspend:function(){var c=this;if(!(!c.autoSuspend||!c.ctx||typeof c.ctx.suspend>"u"||!t.usingWebAudio)){for(var u=0;u<c._howls.length;u++)if(c._howls[u]._webAudio){for(var f=0;f<c._howls[u]._sounds.length;f++)if(!c._howls[u]._sounds[f]._paused)return c}return c._suspendTimer&&clearTimeout(c._suspendTimer),c._suspendTimer=setTimeout(function(){if(c.autoSuspend){c._suspendTimer=null,c.state="suspending";var m=function(){c.state="suspended",c._resumeAfterSuspend&&(delete c._resumeAfterSuspend,c._autoResume())};c.ctx.suspend().then(m,m)}},3e4),c}},_autoResume:function(){var c=this;if(!(!c.ctx||typeof c.ctx.resume>"u"||!t.usingWebAudio))return c.state==="running"&&c.ctx.state!=="interrupted"&&c._suspendTimer?(clearTimeout(c._suspendTimer),c._suspendTimer=null):c.state==="suspended"||c.state==="running"&&c.ctx.state==="interrupted"?(c.ctx.resume().then(function(){c.state="running";for(var u=0;u<c._howls.length;u++)c._howls[u]._emit("resume")}),c._suspendTimer&&(clearTimeout(c._suspendTimer),c._suspendTimer=null)):c.state==="suspending"&&(c._resumeAfterSuspend=!0),c}};var t=new e,n=function(c){var u=this;if(!c.src||c.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}u.init(c)};n.prototype={init:function(c){var u=this;return t.ctx||d(),u._autoplay=c.autoplay||!1,u._format=typeof c.format!="string"?c.format:[c.format],u._html5=c.html5||!1,u._muted=c.mute||!1,u._loop=c.loop||!1,u._pool=c.pool||5,u._preload=typeof c.preload=="boolean"||c.preload==="metadata"?c.preload:!0,u._rate=c.rate||1,u._sprite=c.sprite||{},u._src=typeof c.src!="string"?c.src:[c.src],u._volume=c.volume!==void 0?c.volume:1,u._xhr={method:c.xhr&&c.xhr.method?c.xhr.method:"GET",headers:c.xhr&&c.xhr.headers?c.xhr.headers:null,withCredentials:c.xhr&&c.xhr.withCredentials?c.xhr.withCredentials:!1},u._duration=0,u._state="unloaded",u._sounds=[],u._endTimers={},u._queue=[],u._playLock=!1,u._onend=c.onend?[{fn:c.onend}]:[],u._onfade=c.onfade?[{fn:c.onfade}]:[],u._onload=c.onload?[{fn:c.onload}]:[],u._onloaderror=c.onloaderror?[{fn:c.onloaderror}]:[],u._onplayerror=c.onplayerror?[{fn:c.onplayerror}]:[],u._onpause=c.onpause?[{fn:c.onpause}]:[],u._onplay=c.onplay?[{fn:c.onplay}]:[],u._onstop=c.onstop?[{fn:c.onstop}]:[],u._onmute=c.onmute?[{fn:c.onmute}]:[],u._onvolume=c.onvolume?[{fn:c.onvolume}]:[],u._onrate=c.onrate?[{fn:c.onrate}]:[],u._onseek=c.onseek?[{fn:c.onseek}]:[],u._onunlock=c.onunlock?[{fn:c.onunlock}]:[],u._onresume=[],u._webAudio=t.usingWebAudio&&!u._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(u),u._autoplay&&u._queue.push({event:"play",action:function(){u.play()}}),u._preload&&u._preload!=="none"&&u.load(),u},load:function(){var c=this,u=null;if(t.noAudio){c._emit("loaderror",null,"No audio support.");return}typeof c._src=="string"&&(c._src=[c._src]);for(var f=0;f<c._src.length;f++){var m,_;if(c._format&&c._format[f])m=c._format[f];else{if(_=c._src[f],typeof _!="string"){c._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}m=/^data:audio\/([^;,]+);/i.exec(_),m||(m=/\.([^.]+)$/.exec(_.split("?",1)[0])),m&&(m=m[1].toLowerCase())}if(m||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),m&&t.codecs(m)){u=c._src[f];break}}if(!u){c._emit("loaderror",null,"No codec support for selected audio sources.");return}return c._src=u,c._state="loading",window.location.protocol==="https:"&&u.slice(0,5)==="http:"&&(c._html5=!0,c._webAudio=!1),new i(c),c._webAudio&&a(c),c},play:function(c,u){var f=this,m=null;if(typeof c=="number")m=c,c=null;else{if(typeof c=="string"&&f._state==="loaded"&&!f._sprite[c])return null;if(typeof c>"u"&&(c="__default",!f._playLock)){for(var _=0,g=0;g<f._sounds.length;g++)f._sounds[g]._paused&&!f._sounds[g]._ended&&(_++,m=f._sounds[g]._id);_===1?c=null:m=null}}var p=m?f._soundById(m):f._inactiveSound();if(!p)return null;if(m&&!c&&(c=p._sprite||"__default"),f._state!=="loaded"){p._sprite=c,p._ended=!1;var b=p._id;return f._queue.push({event:"play",action:function(){f.play(b)}}),b}if(m&&!p._paused)return u||f._loadQueue("play"),p._id;f._webAudio&&t._autoResume();var y=Math.max(0,p._seek>0?p._seek:f._sprite[c][0]/1e3),v=Math.max(0,(f._sprite[c][0]+f._sprite[c][1])/1e3-y),E=v*1e3/Math.abs(p._rate),w=f._sprite[c][0]/1e3,A=(f._sprite[c][0]+f._sprite[c][1])/1e3;p._sprite=c,p._ended=!1;var x=function(){p._paused=!1,p._seek=y,p._start=w,p._stop=A,p._loop=!!(p._loop||f._sprite[c][2])};if(y>=A){f._ended(p);return}var S=p._node;if(f._webAudio){var P=function(){f._playLock=!1,x(),f._refreshBuffer(p);var F=p._muted||f._muted?0:p._volume;S.gain.setValueAtTime(F,t.ctx.currentTime),p._playStart=t.ctx.currentTime,typeof S.bufferSource.start>"u"?p._loop?S.bufferSource.noteGrainOn(0,y,86400):S.bufferSource.noteGrainOn(0,y,v):p._loop?S.bufferSource.start(0,y,86400):S.bufferSource.start(0,y,v),E!==1/0&&(f._endTimers[p._id]=setTimeout(f._ended.bind(f,p),E)),u||setTimeout(function(){f._emit("play",p._id),f._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?P():(f._playLock=!0,f.once("resume",P),f._clearTimer(p._id))}else{var R=function(){S.currentTime=y,S.muted=p._muted||f._muted||t._muted||S.muted,S.volume=p._volume*t.volume(),S.playbackRate=p._rate;try{var F=S.play();if(F&&typeof Promise<"u"&&(F instanceof Promise||typeof F.then=="function")?(f._playLock=!0,x(),F.then(function(){f._playLock=!1,S._unlocked=!0,u?f._loadQueue():f._emit("play",p._id)}).catch(function(){f._playLock=!1,f._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),p._ended=!0,p._paused=!0})):u||(f._playLock=!1,x(),f._emit("play",p._id)),S.playbackRate=p._rate,S.paused){f._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}c!=="__default"||p._loop?f._endTimers[p._id]=setTimeout(f._ended.bind(f,p),E):(f._endTimers[p._id]=function(){f._ended(p),S.removeEventListener("ended",f._endTimers[p._id],!1)},S.addEventListener("ended",f._endTimers[p._id],!1))}catch(N){f._emit("playerror",p._id,N)}};S.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(S.src=f._src,S.load());var I=window&&window.ejecta||!S.readyState&&t._navigator.isCocoonJS;if(S.readyState>=3||I)R();else{f._playLock=!0,f._state="loading";var D=function(){f._state="loaded",R(),S.removeEventListener(t._canPlayEvent,D,!1)};S.addEventListener(t._canPlayEvent,D,!1),f._clearTimer(p._id)}}return p._id},pause:function(c){var u=this;if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"pause",action:function(){u.pause(c)}}),u;for(var f=u._getSoundIds(c),m=0;m<f.length;m++){u._clearTimer(f[m]);var _=u._soundById(f[m]);if(_&&!_._paused&&(_._seek=u.seek(f[m]),_._rateSeek=0,_._paused=!0,u._stopFade(f[m]),_._node))if(u._webAudio){if(!_._node.bufferSource)continue;typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),u._cleanBuffer(_._node)}else(!isNaN(_._node.duration)||_._node.duration===1/0)&&_._node.pause();arguments[1]||u._emit("pause",_?_._id:null)}return u},stop:function(c,u){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"stop",action:function(){f.stop(c)}}),f;for(var m=f._getSoundIds(c),_=0;_<m.length;_++){f._clearTimer(m[_]);var g=f._soundById(m[_]);g&&(g._seek=g._start||0,g._rateSeek=0,g._paused=!0,g._ended=!0,f._stopFade(m[_]),g._node&&(f._webAudio?g._node.bufferSource&&(typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),f._cleanBuffer(g._node)):(!isNaN(g._node.duration)||g._node.duration===1/0)&&(g._node.currentTime=g._start||0,g._node.pause(),g._node.duration===1/0&&f._clearSound(g._node))),u||f._emit("stop",g._id))}return f},mute:function(c,u){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"mute",action:function(){f.mute(c,u)}}),f;if(typeof u>"u")if(typeof c=="boolean")f._muted=c;else return f._muted;for(var m=f._getSoundIds(u),_=0;_<m.length;_++){var g=f._soundById(m[_]);g&&(g._muted=c,g._interval&&f._stopFade(g._id),f._webAudio&&g._node?g._node.gain.setValueAtTime(c?0:g._volume,t.ctx.currentTime):g._node&&(g._node.muted=t._muted?!0:c),f._emit("mute",g._id))}return f},volume:function(){var c=this,u=arguments,f,m;if(u.length===0)return c._volume;if(u.length===1||u.length===2&&typeof u[1]>"u"){var _=c._getSoundIds(),g=_.indexOf(u[0]);g>=0?m=parseInt(u[0],10):f=parseFloat(u[0])}else u.length>=2&&(f=parseFloat(u[0]),m=parseInt(u[1],10));var p;if(typeof f<"u"&&f>=0&&f<=1){if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"volume",action:function(){c.volume.apply(c,u)}}),c;typeof m>"u"&&(c._volume=f),m=c._getSoundIds(m);for(var b=0;b<m.length;b++)p=c._soundById(m[b]),p&&(p._volume=f,u[2]||c._stopFade(m[b]),c._webAudio&&p._node&&!p._muted?p._node.gain.setValueAtTime(f,t.ctx.currentTime):p._node&&!p._muted&&(p._node.volume=f*t.volume()),c._emit("volume",p._id))}else return p=m?c._soundById(m):c._sounds[0],p?p._volume:0;return c},fade:function(c,u,f,m){var _=this;if(_._state!=="loaded"||_._playLock)return _._queue.push({event:"fade",action:function(){_.fade(c,u,f,m)}}),_;c=Math.min(Math.max(0,parseFloat(c)),1),u=Math.min(Math.max(0,parseFloat(u)),1),f=parseFloat(f),_.volume(c,m);for(var g=_._getSoundIds(m),p=0;p<g.length;p++){var b=_._soundById(g[p]);if(b){if(m||_._stopFade(g[p]),_._webAudio&&!b._muted){var y=t.ctx.currentTime,v=y+f/1e3;b._volume=c,b._node.gain.setValueAtTime(c,y),b._node.gain.linearRampToValueAtTime(u,v)}_._startFadeInterval(b,c,u,f,g[p],typeof m>"u")}}return _},_startFadeInterval:function(c,u,f,m,_,g){var p=this,b=u,y=f-u,v=Math.abs(y/.01),E=Math.max(4,v>0?m/v:m),w=Date.now();c._fadeTo=f,c._interval=setInterval(function(){var A=(Date.now()-w)/m;w=Date.now(),b+=y*A,b=Math.round(b*100)/100,y<0?b=Math.max(f,b):b=Math.min(f,b),p._webAudio?c._volume=b:p.volume(b,c._id,!0),g&&(p._volume=b),(f<u&&b<=f||f>u&&b>=f)&&(clearInterval(c._interval),c._interval=null,c._fadeTo=null,p.volume(f,c._id),p._emit("fade",c._id))},E)},_stopFade:function(c){var u=this,f=u._soundById(c);return f&&f._interval&&(u._webAudio&&f._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(f._interval),f._interval=null,u.volume(f._fadeTo,c),f._fadeTo=null,u._emit("fade",c)),u},loop:function(){var c=this,u=arguments,f,m,_;if(u.length===0)return c._loop;if(u.length===1)if(typeof u[0]=="boolean")f=u[0],c._loop=f;else return _=c._soundById(parseInt(u[0],10)),_?_._loop:!1;else u.length===2&&(f=u[0],m=parseInt(u[1],10));for(var g=c._getSoundIds(m),p=0;p<g.length;p++)_=c._soundById(g[p]),_&&(_._loop=f,c._webAudio&&_._node&&_._node.bufferSource&&(_._node.bufferSource.loop=f,f&&(_._node.bufferSource.loopStart=_._start||0,_._node.bufferSource.loopEnd=_._stop,c.playing(g[p])&&(c.pause(g[p],!0),c.play(g[p],!0)))));return c},rate:function(){var c=this,u=arguments,f,m;if(u.length===0)m=c._sounds[0]._id;else if(u.length===1){var _=c._getSoundIds(),g=_.indexOf(u[0]);g>=0?m=parseInt(u[0],10):f=parseFloat(u[0])}else u.length===2&&(f=parseFloat(u[0]),m=parseInt(u[1],10));var p;if(typeof f=="number"){if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"rate",action:function(){c.rate.apply(c,u)}}),c;typeof m>"u"&&(c._rate=f),m=c._getSoundIds(m);for(var b=0;b<m.length;b++)if(p=c._soundById(m[b]),p){c.playing(m[b])&&(p._rateSeek=c.seek(m[b]),p._playStart=c._webAudio?t.ctx.currentTime:p._playStart),p._rate=f,c._webAudio&&p._node&&p._node.bufferSource?p._node.bufferSource.playbackRate.setValueAtTime(f,t.ctx.currentTime):p._node&&(p._node.playbackRate=f);var y=c.seek(m[b]),v=(c._sprite[p._sprite][0]+c._sprite[p._sprite][1])/1e3-y,E=v*1e3/Math.abs(p._rate);(c._endTimers[m[b]]||!p._paused)&&(c._clearTimer(m[b]),c._endTimers[m[b]]=setTimeout(c._ended.bind(c,p),E)),c._emit("rate",p._id)}}else return p=c._soundById(m),p?p._rate:c._rate;return c},seek:function(){var c=this,u=arguments,f,m;if(u.length===0)c._sounds.length&&(m=c._sounds[0]._id);else if(u.length===1){var _=c._getSoundIds(),g=_.indexOf(u[0]);g>=0?m=parseInt(u[0],10):c._sounds.length&&(m=c._sounds[0]._id,f=parseFloat(u[0]))}else u.length===2&&(f=parseFloat(u[0]),m=parseInt(u[1],10));if(typeof m>"u")return 0;if(typeof f=="number"&&(c._state!=="loaded"||c._playLock))return c._queue.push({event:"seek",action:function(){c.seek.apply(c,u)}}),c;var p=c._soundById(m);if(p)if(typeof f=="number"&&f>=0){var b=c.playing(m);b&&c.pause(m,!0),p._seek=f,p._ended=!1,c._clearTimer(m),!c._webAudio&&p._node&&!isNaN(p._node.duration)&&(p._node.currentTime=f);var y=function(){b&&c.play(m,!0),c._emit("seek",m)};if(b&&!c._webAudio){var v=function(){c._playLock?setTimeout(v,0):y()};setTimeout(v,0)}else y()}else if(c._webAudio){var E=c.playing(m)?t.ctx.currentTime-p._playStart:0,w=p._rateSeek?p._rateSeek-p._seek:0;return p._seek+(w+E*Math.abs(p._rate))}else return p._node.currentTime;return c},playing:function(c){var u=this;if(typeof c=="number"){var f=u._soundById(c);return f?!f._paused:!1}for(var m=0;m<u._sounds.length;m++)if(!u._sounds[m]._paused)return!0;return!1},duration:function(c){var u=this,f=u._duration,m=u._soundById(c);return m&&(f=u._sprite[m._sprite][1]/1e3),f},state:function(){return this._state},unload:function(){for(var c=this,u=c._sounds,f=0;f<u.length;f++)u[f]._paused||c.stop(u[f]._id),c._webAudio||(c._clearSound(u[f]._node),u[f]._node.removeEventListener("error",u[f]._errorFn,!1),u[f]._node.removeEventListener(t._canPlayEvent,u[f]._loadFn,!1),u[f]._node.removeEventListener("ended",u[f]._endFn,!1),t._releaseHtml5Audio(u[f]._node)),delete u[f]._node,c._clearTimer(u[f]._id);var m=t._howls.indexOf(c);m>=0&&t._howls.splice(m,1);var _=!0;for(f=0;f<t._howls.length;f++)if(t._howls[f]._src===c._src||c._src.indexOf(t._howls[f]._src)>=0){_=!1;break}return s&&_&&delete s[c._src],t.noAudio=!1,c._state="unloaded",c._sounds=[],c=null,null},on:function(c,u,f,m){var _=this,g=_["_on"+c];return typeof u=="function"&&g.push(m?{id:f,fn:u,once:m}:{id:f,fn:u}),_},off:function(c,u,f){var m=this,_=m["_on"+c],g=0;if(typeof u=="number"&&(f=u,u=null),u||f)for(g=0;g<_.length;g++){var p=f===_[g].id;if(u===_[g].fn&&p||!u&&p){_.splice(g,1);break}}else if(c)m["_on"+c]=[];else{var b=Object.keys(m);for(g=0;g<b.length;g++)b[g].indexOf("_on")===0&&Array.isArray(m[b[g]])&&(m[b[g]]=[])}return m},once:function(c,u,f){var m=this;return m.on(c,u,f,1),m},_emit:function(c,u,f){for(var m=this,_=m["_on"+c],g=_.length-1;g>=0;g--)(!_[g].id||_[g].id===u||c==="load")&&(setTimeout((function(p){p.call(this,u,f)}).bind(m,_[g].fn),0),_[g].once&&m.off(c,_[g].fn,_[g].id));return m._loadQueue(c),m},_loadQueue:function(c){var u=this;if(u._queue.length>0){var f=u._queue[0];f.event===c&&(u._queue.shift(),u._loadQueue()),c||f.action()}return u},_ended:function(c){var u=this,f=c._sprite;if(!u._webAudio&&c._node&&!c._node.paused&&!c._node.ended&&c._node.currentTime<c._stop)return setTimeout(u._ended.bind(u,c),100),u;var m=!!(c._loop||u._sprite[f][2]);if(u._emit("end",c._id),!u._webAudio&&m&&u.stop(c._id,!0).play(c._id),u._webAudio&&m){u._emit("play",c._id),c._seek=c._start||0,c._rateSeek=0,c._playStart=t.ctx.currentTime;var _=(c._stop-c._start)*1e3/Math.abs(c._rate);u._endTimers[c._id]=setTimeout(u._ended.bind(u,c),_)}return u._webAudio&&!m&&(c._paused=!0,c._ended=!0,c._seek=c._start||0,c._rateSeek=0,u._clearTimer(c._id),u._cleanBuffer(c._node),t._autoSuspend()),!u._webAudio&&!m&&u.stop(c._id,!0),u},_clearTimer:function(c){var u=this;if(u._endTimers[c]){if(typeof u._endTimers[c]!="function")clearTimeout(u._endTimers[c]);else{var f=u._soundById(c);f&&f._node&&f._node.removeEventListener("ended",u._endTimers[c],!1)}delete u._endTimers[c]}return u},_soundById:function(c){for(var u=this,f=0;f<u._sounds.length;f++)if(c===u._sounds[f]._id)return u._sounds[f];return null},_inactiveSound:function(){var c=this;c._drain();for(var u=0;u<c._sounds.length;u++)if(c._sounds[u]._ended)return c._sounds[u].reset();return new i(c)},_drain:function(){var c=this,u=c._pool,f=0,m=0;if(!(c._sounds.length<u)){for(m=0;m<c._sounds.length;m++)c._sounds[m]._ended&&f++;for(m=c._sounds.length-1;m>=0;m--){if(f<=u)return;c._sounds[m]._ended&&(c._webAudio&&c._sounds[m]._node&&c._sounds[m]._node.disconnect(0),c._sounds.splice(m,1),f--)}}},_getSoundIds:function(c){var u=this;if(typeof c>"u"){for(var f=[],m=0;m<u._sounds.length;m++)f.push(u._sounds[m]._id);return f}else return[c]},_refreshBuffer:function(c){var u=this;return c._node.bufferSource=t.ctx.createBufferSource(),c._node.bufferSource.buffer=s[u._src],c._panner?c._node.bufferSource.connect(c._panner):c._node.bufferSource.connect(c._node),c._node.bufferSource.loop=c._loop,c._loop&&(c._node.bufferSource.loopStart=c._start||0,c._node.bufferSource.loopEnd=c._stop||0),c._node.bufferSource.playbackRate.setValueAtTime(c._rate,t.ctx.currentTime),u},_cleanBuffer:function(c){var u=this,f=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!c.bufferSource)return u;if(t._scratchBuffer&&c.bufferSource&&(c.bufferSource.onended=null,c.bufferSource.disconnect(0),f))try{c.bufferSource.buffer=t._scratchBuffer}catch{}return c.bufferSource=null,u},_clearSound:function(c){var u=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);u||(c.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(c){this._parent=c,this.init()};i.prototype={init:function(){var c=this,u=c._parent;return c._muted=u._muted,c._loop=u._loop,c._volume=u._volume,c._rate=u._rate,c._seek=0,c._paused=!0,c._ended=!0,c._sprite="__default",c._id=++t._counter,u._sounds.push(c),c.create(),c},create:function(){var c=this,u=c._parent,f=t._muted||c._muted||c._parent._muted?0:c._volume;return u._webAudio?(c._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),c._node.gain.setValueAtTime(f,t.ctx.currentTime),c._node.paused=!0,c._node.connect(t.masterGain)):t.noAudio||(c._node=t._obtainHtml5Audio(),c._errorFn=c._errorListener.bind(c),c._node.addEventListener("error",c._errorFn,!1),c._loadFn=c._loadListener.bind(c),c._node.addEventListener(t._canPlayEvent,c._loadFn,!1),c._endFn=c._endListener.bind(c),c._node.addEventListener("ended",c._endFn,!1),c._node.src=u._src,c._node.preload=u._preload===!0?"auto":u._preload,c._node.volume=f*t.volume(),c._node.load()),c},reset:function(){var c=this,u=c._parent;return c._muted=u._muted,c._loop=u._loop,c._volume=u._volume,c._rate=u._rate,c._seek=0,c._rateSeek=0,c._paused=!0,c._ended=!0,c._sprite="__default",c._id=++t._counter,c},_errorListener:function(){var c=this;c._parent._emit("loaderror",c._id,c._node.error?c._node.error.code:0),c._node.removeEventListener("error",c._errorFn,!1)},_loadListener:function(){var c=this,u=c._parent;u._duration=Math.ceil(c._node.duration*10)/10,Object.keys(u._sprite).length===0&&(u._sprite={__default:[0,u._duration*1e3]}),u._state!=="loaded"&&(u._state="loaded",u._emit("load"),u._loadQueue()),c._node.removeEventListener(t._canPlayEvent,c._loadFn,!1)},_endListener:function(){var c=this,u=c._parent;u._duration===1/0&&(u._duration=Math.ceil(c._node.duration*10)/10,u._sprite.__default[1]===1/0&&(u._sprite.__default[1]=u._duration*1e3),u._ended(c)),c._node.removeEventListener("ended",c._endFn,!1)}};var s={},a=function(c){var u=c._src;if(s[u]){c._duration=s[u].duration,h(c);return}if(/^data:[^;]+;base64,/.test(u)){for(var f=atob(u.split(",")[1]),m=new Uint8Array(f.length),_=0;_<f.length;++_)m[_]=f.charCodeAt(_);l(m.buffer,c)}else{var g=new XMLHttpRequest;g.open(c._xhr.method,u,!0),g.withCredentials=c._xhr.withCredentials,g.responseType="arraybuffer",c._xhr.headers&&Object.keys(c._xhr.headers).forEach(function(p){g.setRequestHeader(p,c._xhr.headers[p])}),g.onload=function(){var p=(g.status+"")[0];if(p!=="0"&&p!=="2"&&p!=="3"){c._emit("loaderror",null,"Failed loading audio file with status: "+g.status+".");return}l(g.response,c)},g.onerror=function(){c._webAudio&&(c._html5=!0,c._webAudio=!1,c._sounds=[],delete s[u],c.load())},o(g)}},o=function(c){try{c.send()}catch{c.onerror()}},l=function(c,u){var f=function(){u._emit("loaderror",null,"Decoding audio data failed.")},m=function(_){_&&u._sounds.length>0?(s[u._src]=_,h(u,_)):f()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(c).then(m).catch(f):t.ctx.decodeAudioData(c,m,f)},h=function(c,u){u&&!c._duration&&(c._duration=u.duration),Object.keys(c._sprite).length===0&&(c._sprite={__default:[0,c._duration*1e3]}),c._state!=="loaded"&&(c._state="loaded",c._emit("load"),c._loadQueue())},d=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var c=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),u=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),f=u?parseInt(u[1],10):null;if(c&&f&&f<9){var m=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!m&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};r.Howler=t,r.Howl=n,typeof Tr<"u"?(Tr.HowlerGlobal=e,Tr.Howler=t,Tr.Howl=n,Tr.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var i=n._howls.length-1;i>=0;i--)n._howls[i].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,i){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(n=typeof n!="number"?s._pos[1]:n,i=typeof i!="number"?s._pos[2]:i,typeof t=="number")s._pos=[t,n,i],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(t,n,i,s,a,o){var l=this;if(!l.ctx||!l.ctx.listener)return l;var h=l._orientation;if(n=typeof n!="number"?h[1]:n,i=typeof i!="number"?h[2]:i,s=typeof s!="number"?h[3]:s,a=typeof a!="number"?h[4]:a,o=typeof o!="number"?h[5]:o,typeof t=="number")l._orientation=[t,n,i,s,a,o],typeof l.ctx.listener.forwardX<"u"?(l.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),l.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),l.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),l.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),l.ctx.listener.upY.setTargetAtTime(a,Howler.ctx.currentTime,.1),l.ctx.listener.upZ.setTargetAtTime(o,Howler.ctx.currentTime,.1)):l.ctx.listener.setOrientation(t,n,i,s,a,o);else return h;return l},Howl.prototype.init=(function(t){return function(n){var i=this;return i._orientation=n.orientation||[1,0,0],i._stereo=n.stereo||null,i._pos=n.pos||null,i._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},i._onstereo=n.onstereo?[{fn:n.onstereo}]:[],i._onpos=n.onpos?[{fn:n.onpos}]:[],i._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}})(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(t,n)}}),i;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")i._stereo=t,i._pos=[t,0,0];else return i._stereo;for(var a=i._getSoundIds(n),o=0;o<a.length;o++){var l=i._soundById(a[o]);if(l)if(typeof t=="number")l._stereo=t,l._pos=[t,0,0],l._node&&(l._pannerAttr.panningModel="equalpower",(!l._panner||!l._panner.pan)&&e(l,s),s==="spatial"?typeof l._panner.positionX<"u"?(l._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),l._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),l._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):l._panner.setPosition(t,0,0):l._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),i._emit("stereo",l._id);else return l._stereo}return i},Howl.prototype.pos=function(t,n,i,s){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"pos",action:function(){a.pos(t,n,i,s)}}),a;if(n=typeof n!="number"?0:n,i=typeof i!="number"?-.5:i,typeof s>"u")if(typeof t=="number")a._pos=[t,n,i];else return a._pos;for(var o=a._getSoundIds(s),l=0;l<o.length;l++){var h=a._soundById(o[l]);if(h)if(typeof t=="number")h._pos=[t,n,i],h._node&&((!h._panner||h._panner.pan)&&e(h,"spatial"),typeof h._panner.positionX<"u"?(h._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):h._panner.setPosition(t,n,i)),a._emit("pos",h._id);else return h._pos}return a},Howl.prototype.orientation=function(t,n,i,s){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"orientation",action:function(){a.orientation(t,n,i,s)}}),a;if(n=typeof n!="number"?a._orientation[1]:n,i=typeof i!="number"?a._orientation[2]:i,typeof s>"u")if(typeof t=="number")a._orientation=[t,n,i];else return a._orientation;for(var o=a._getSoundIds(s),l=0;l<o.length;l++){var h=a._soundById(o[l]);if(h)if(typeof t=="number")h._orientation=[t,n,i],h._node&&(h._panner||(h._pos||(h._pos=a._pos||[0,0,-.5]),e(h,"spatial")),typeof h._panner.orientationX<"u"?(h._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):h._panner.setOrientation(t,n,i)),a._emit("orientation",h._id);else return h._orientation}return a},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,i,s,a;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")i=n[0],typeof s>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),t._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:t._panningModel});else return a=t._soundById(parseInt(n[0],10)),a?a._pannerAttr:t._pannerAttr;else n.length===2&&(i=n[0],s=parseInt(n[1],10));for(var o=t._getSoundIds(s),l=0;l<o.length;l++)if(a=t._soundById(o[l]),a){var h=a._pannerAttr;h={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:h.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:h.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:h.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:h.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:h.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:h.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:h.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:h.panningModel};var d=a._panner;d||(a._pos||(a._pos=t._pos||[0,0,-.5]),e(a,"spatial"),d=a._panner),d.coneInnerAngle=h.coneInnerAngle,d.coneOuterAngle=h.coneOuterAngle,d.coneOuterGain=h.coneOuterGain,d.distanceModel=h.distanceModel,d.maxDistance=h.maxDistance,d.refDistance=h.refDistance,d.rolloffFactor=h.rolloffFactor,d.panningModel=h.panningModel}return t},Sound.prototype.init=(function(t){return function(){var n=this,i=n._parent;n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,t.call(this),n._stereo?i.stereo(n._stereo):n._pos&&i.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}})(Sound.prototype.init),Sound.prototype.reset=(function(t){return function(){var n=this,i=n._parent;return n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,n._stereo?i.stereo(n._stereo):n._pos?i.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,i._refreshBuffer(n)),t.call(this)}})(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(nc)),nc}var ic=Nv();class kv{constructor(){this.muted=!1,this.whoosh=new ic.Howl({src:["./sounds/whoosh.mp3"],volume:.6}),this.click=new ic.Howl({src:["./sounds/click.mp3"],volume:.5}),this.bloop=new ic.Howl({src:["./sounds/bloop.mp3"],volume:.4}),this.audioCtx=null}getAudioContext(){if(!this.audioCtx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.audioCtx=new e)}return this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume(),this.audioCtx}playWhoosh(){this.muted||this.whoosh.play()}playClick(){this.muted||this.click.play()}playBloop(){this.muted||this.bloop.play()}playDoorOpen(){if(this.muted)return;const e=this.getAudioContext();if(!e)return;const t=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="triangle",n.frequency.setValueAtTime(820,t),n.frequency.exponentialRampToValueAtTime(320,t+.06),i.gain.setValueAtTime(.4,t),i.gain.exponentialRampToValueAtTime(.001,t+.08),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.08);const s=e.createOscillator(),a=e.createGain();s.type="square",s.frequency.setValueAtTime(450,t+.04),s.frequency.exponentialRampToValueAtTime(180,t+.12),a.gain.setValueAtTime(.25,t+.04),a.gain.exponentialRampToValueAtTime(.001,t+.14),s.connect(a),a.connect(e.destination),s.start(t+.04),s.stop(t+.14),this.playWhoosh()}playDoorClose(){if(this.muted)return;const e=this.getAudioContext();if(!e)return;const t=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.setValueAtTime(95,t),n.frequency.exponentialRampToValueAtTime(38,t+.18),i.gain.setValueAtTime(.65,t),i.gain.exponentialRampToValueAtTime(.001,t+.22),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.22);const s=e.createOscillator(),a=e.createGain();s.type="sawtooth",s.frequency.setValueAtTime(540,t),s.frequency.exponentialRampToValueAtTime(140,t+.05),a.gain.setValueAtTime(.35,t),a.gain.exponentialRampToValueAtTime(.001,t+.06),s.connect(a),a.connect(e.destination),s.start(t),s.stop(t+.06)}playEngineRev(){if(this.muted)return;const e=this.getAudioContext();if(!e)return;const t=e.currentTime,n=1.4,i=e.createOscillator(),s=e.createGain(),a=e.createBiquadFilter();i.type="sawtooth",i.frequency.setValueAtTime(65,t),i.frequency.exponentialRampToValueAtTime(190,t+.6),i.frequency.exponentialRampToValueAtTime(80,t+n),a.type="lowpass",a.frequency.setValueAtTime(220,t),a.frequency.exponentialRampToValueAtTime(750,t+.6),a.frequency.exponentialRampToValueAtTime(300,t+n),s.gain.setValueAtTime(.01,t),s.gain.linearRampToValueAtTime(.45,t+.3),s.gain.exponentialRampToValueAtTime(.001,t+n),i.connect(a),a.connect(s),s.connect(e.destination),i.start(t),i.stop(t+n)}playTireScreech(){if(this.muted)return;const e=this.getAudioContext();if(!e)return;const t=e.currentTime,n=e.sampleRate*.8,i=e.createBuffer(1,n,e.sampleRate),s=i.getChannelData(0);for(let h=0;h<n;h++)s[h]=Math.random()*2-1;const a=e.createBufferSource();a.buffer=i;const o=e.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(2200,t),o.frequency.exponentialRampToValueAtTime(3100,t+.3),o.frequency.exponentialRampToValueAtTime(1800,t+.8),o.Q.value=5;const l=e.createGain();l.gain.setValueAtTime(.18,t),l.gain.exponentialRampToValueAtTime(.001,t+.8),a.connect(o),o.connect(l),l.connect(e.destination),a.start(t),a.stop(t+.8)}playExplodeOpen(){this.muted||(this.playWhoosh(),this.playDoorOpen(),setTimeout(()=>{this.muted||this.playClick()},180),setTimeout(()=>{this.muted||this.playClick()},360))}playExplodeClose(){this.muted||(this.playClick(),setTimeout(()=>{this.muted||this.playDoorClose()},200),setTimeout(()=>{this.muted||this.playClick()},450))}playMechanicalKey(){if(this.muted)return;const e=this.getAudioContext();if(!e){this.playClick();return}const t=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="triangle",n.frequency.setValueAtTime(1200+Math.random()*400,t),n.frequency.exponentialRampToValueAtTime(300,t+.035),i.gain.setValueAtTime(.3,t),i.gain.exponentialRampToValueAtTime(.001,t+.04),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.04)}toggleMute(){return this.muted=!this.muted,this.muted}}const Xu={type:"change"},th={type:"start"},lf={type:"end"},Fa=new hr,Ku=new Ni,Uv=Math.cos(70*zd.DEG2RAD),Dt=new O,rn=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sc=1e-6;class Bv extends Bg{constructor(e,t=null){super(e,t),this.state=at.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ws.ROTATE,MIDDLE:Ws.DOLLY,RIGHT:Ws.PAN},this.touches={ONE:Bs.ROTATE,TWO:Bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new cn,this._lastTargetPosition=new O,this._quat=new cn().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new yu,this._sphericalDelta=new yu,this._scale=1,this._panOffset=new O,this._rotateStart=new Re,this._rotateEnd=new Re,this._rotateDelta=new Re,this._panStart=new Re,this._panEnd=new Re,this._panDelta=new Re,this._dollyStart=new Re,this._dollyEnd=new Re,this._dollyDelta=new Re,this._dollyDirection=new O,this._mouse=new Re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Gv.bind(this),this._onPointerDown=zv.bind(this),this._onPointerUp=Vv.bind(this),this._onContextMenu=Yv.bind(this),this._onMouseWheel=jv.bind(this),this._onKeyDown=qv.bind(this),this._onTouchStart=Xv.bind(this),this._onTouchMove=Kv.bind(this),this._onMouseDown=Hv.bind(this),this._onMouseMove=Wv.bind(this),this._interceptControlDown=Jv.bind(this),this._interceptControlUp=Zv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xu),this.update(),this.state=at.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Dt.copy(t).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=rn:n>Math.PI&&(n-=rn),i<-Math.PI?i+=rn:i>Math.PI&&(i-=rn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Dt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const h=new O(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Fa.origin.copy(this.object.position),Fa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fa.direction))<Uv?this.object.lookAt(this.target):(Ku.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fa.intersectPlane(Ku,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>sc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sc||this._lastTargetPosition.distanceToSquared(this.target)>sc?(this.dispatchEvent(Xu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?rn/60*this.autoRotateSpeed*e:rn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dt.setFromMatrixColumn(t,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,t){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(t,1):(Dt.setFromMatrixColumn(t,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Dt.copy(i).sub(this.target);let s=Dt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function zv(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Gv(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Vv(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lf),this.state=at.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Hv(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=at.DOLLY;break;case Ws.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=at.ROTATE}break;case Ws.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(th)}function Wv(r){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function jv(r){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(r.preventDefault(),this.dispatchEvent(th),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(lf))}function qv(r){this.enabled!==!1&&this._handleKeyDown(r)}function Xv(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Bs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=at.TOUCH_ROTATE;break;case Bs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case Bs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=at.TOUCH_DOLLY_PAN;break;case Bs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(th)}function Kv(r){switch(this._trackPointer(r),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=at.NONE}}function Yv(r){this.enabled!==!1&&r.preventDefault()}function Jv(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zv(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function hf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Xr={duration:.5,overwrite:!1,delay:0},nh,Vt,gt,In=1e8,ht=1/In,dl=Math.PI*2,$v=dl/4,Qv=0,uf=Math.sqrt,ey=Math.cos,ty=Math.sin,Bt=function(e){return typeof e=="string"},Mt=function(e){return typeof e=="function"},Ti=function(e){return typeof e=="number"},ih=function(e){return typeof e>"u"},ai=function(e){return typeof e=="object"},ln=function(e){return e!==!1},sh=function(){return typeof window<"u"},Oa=function(e){return Mt(e)||Bt(e)},df=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Yt=Array.isArray,ny=/random\([^)]+\)/g,iy=/,\s*/g,Yu=/(?:-?\.?\d|\.)+/gi,ff=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Vs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,rc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,pf=/[+-]=-?[.\d]+/,sy=/[^,'"\[\]\s]+/gi,ry=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,bt,Kn,fl,rh,wn={},to={},mf,gf=function(e){return(to=rr(e,wn))&&fn},ah=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Kr=function(e,t){return!t&&console.warn(e)},_f=function(e,t){return e&&(wn[e]=t)&&to&&(to[e]=t)||wn},Yr=function(){return 0},ay={suppressEvents:!0,isStart:!0,kill:!1},ja={suppressEvents:!0,kill:!1},oy={suppressEvents:!0},oh={},Vi=[],pl={},bf,_n={},ac={},Ju=30,qa=[],ch="",lh=function(e){var t=e[0],n,i;if(ai(t)||Mt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=qa.length;i--&&!qa[i].targetTest(t););n=qa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new zf(e[i],n)))||e.splice(i,1);return e},ds=function(e){return e._gsap||lh(Ln(e))[0]._gsap},xf=function(e,t,n){return(n=e[t])&&Mt(n)?e[t]():ih(n)&&e.getAttribute&&e.getAttribute(t)||n},hn=function(e,t){return(e=e.split(",")).forEach(t)||e},wt=function(e){return Math.round(e*1e5)/1e5||0},_t=function(e){return Math.round(e*1e7)/1e7||0},Xs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},cy=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},no=function(){var e=Vi.length,t=Vi.slice(0),n,i;for(pl={},Vi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},hh=function(e){return!!(e._initted||e._startAt||e.add)},vf=function(e,t,n,i){Vi.length&&!Vt&&no(),e.render(t,n,!!(Vt&&t<0&&hh(e))),Vi.length&&!Vt&&no()},yf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(sy).length<2?t:Bt(e)?e.trim():e},Sf=function(e){return e},An=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ly=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},rr=function(e,t){for(var n in t)e[n]=t[n];return e},Zu=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ai(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},io=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},kr=function(e){var t=e.parent||bt,n=e.keyframes?ly(Yt(e.keyframes)):An;if(ln(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},hy=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Mf=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},go=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Wi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},fs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},uy=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ml=function(e,t,n,i){return e._startAt&&(Vt?e._startAt.revert(ja):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},dy=function r(e){return!e||e._ts&&r(e.parent)},$u=function(e){return e._repeat?ar(e._tTime,e=e.duration()+e._rDelay)*e:0},ar=function(e,t){var n=Math.floor(e=_t(e/t));return e&&n===e?n-1:n},so=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},_o=function(e){return e._end=_t(e._start+(e._tDur/Math.abs(e._ts||e._rts||ht)||0))},bo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=_t(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),_o(e),n._dirty||fs(n,e)),e},Ef=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=so(e.rawTime(),t),(!t._dur||na(0,t.totalDuration(),n)-t._tTime>ht)&&t.render(n,!0)),fs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ht}},Jn=function(e,t,n,i){return t.parent&&Wi(t),t._start=_t((Ti(n)?n:n||e!==bt?Cn(e,n,t):e._time)+t._delay),t._end=_t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Mf(e,t,"_first","_last",e._sort?"_start":0),gl(t)||(e._recent=t),i||Ef(e,t),e._ts<0&&bo(e,e._tTime),e},Tf=function(e,t){return(wn.ScrollTrigger||ah("scrollTrigger",t))&&wn.ScrollTrigger.create(t,e)},wf=function(e,t,n,i,s){if(dh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Vt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&bf!==xn.frame)return Vi.push(e),e._lazy=[s,i],1},fy=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},gl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},py=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&fy(e)&&!(!e._initted&&gl(e))||(e._ts<0||e._dp._ts<0)&&!gl(e))?0:1,o=e._rDelay,l=0,h,d,c;if(o&&e._repeat&&(l=na(0,e._tDur,t),d=ar(l,o),e._yoyo&&d&1&&(a=1-a),d!==ar(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Vt||i||e._zTime===ht||!t&&e._zTime){if(!e._initted&&wf(e,t,i,n,l))return;for(c=e._zTime,e._zTime=t||(n?ht:0),n||(n=t&&!c),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,h=e._pt;h;)h.r(a,h.d),h=h._next;t<0&&ml(e,t,n,!0),e._onUpdate&&!n&&Mn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Mn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Wi(e,1),!n&&!Vt&&(Mn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},my=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},or=function(e,t,n,i){var s=e._repeat,a=_t(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:_t(a*(s+1)+e._rDelay*s):a,o>0&&!i&&bo(e,e._tTime=e._tDur*o),e.parent&&_o(e),n||fs(e.parent,e),e},Qu=function(e){return e instanceof an?fs(e):or(e,e._dur)},gy={_start:0,endTime:Yr,totalDuration:Yr},Cn=function r(e,t,n){var i=e.labels,s=e._recent||gy,a=e.duration()>=In?s.endTime(!1):e._dur,o,l,h;return Bt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),h=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),h&&n&&(l=l/100*(Yt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ur=function(e,t,n){var i=Ti(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ln(l.vars.inherit)&&l.parent;a.immediateRender=ln(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Pt(t[0],a,t[s+1])},Ki=function(e,t){return e||e===0?t(e):t},na=function(e,t,n){return n<e?e:n>t?t:n},Xt=function(e,t){return!Bt(e)||!(t=ry.exec(e))?"":t[1]},_y=function(e,t,n){return Ki(n,function(i){return na(e,t,i)})},_l=[].slice,Af=function(e,t){return e&&ai(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ai(e[0]))&&!e.nodeType&&e!==Kn},by=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Bt(i)&&!t||Af(i,1)?(s=n).push.apply(s,Ln(i)):n.push(i)})||n},Ln=function(e,t,n){return gt&&!t&&gt.selector?gt.selector(e):Bt(e)&&!n&&(fl||!cr())?_l.call((t||rh).querySelectorAll(e),0):Yt(e)?by(e,n):Af(e)?_l.call(e,0):e?[e]:[]},bl=function(e){return e=Ln(e)[0]||Kr("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ln(t,n.querySelectorAll?n:n===e?Kr("Invalid scope")||rh.createElement("div"):e)}},Rf=function(e){return e.sort(function(){return .5-Math.random()})},Cf=function(e){if(Mt(e))return e;var t=ai(e)?e:{each:e},n=ps(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,h=t.axis,d=i,c=i;return Bt(i)?d=c={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(d=i[0],c=i[1]),function(u,f,m){var _=(m||t).length,g=a[_],p,b,y,v,E,w,A,x,S;if(!g){if(S=t.grid==="auto"?0:(t.grid||[1,In])[1],!S){for(A=-In;A<(A=m[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(g=a[_]=[],p=l?Math.min(S,_)*d-.5:i%S,b=S===In?0:l?_*c/S-.5:i/S|0,A=0,x=In,w=0;w<_;w++)y=w%S-p,v=b-(w/S|0),g[w]=E=h?Math.abs(h==="y"?v:y):uf(y*y+v*v),E>A&&(A=E),E<x&&(x=E);i==="random"&&Rf(g),g.max=A-x,g.min=x,g.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:h?h==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),g.b=_<0?s-_:s,g.u=Xt(t.amount||t.each)||0,n=n&&_<0?Dy(n):n}return _=(g[u]-g.min)/g.max||0,_t(g.b+(n?n(_):_)*g.v)+g.u}},xl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=_t(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ti(n)?0:Xt(n))}},Pf=function(e,t){var n=Yt(e),i,s;return!n&&ai(e)&&(i=n=e.radius||In,e.values?(e=Ln(e.values),(s=!Ti(e[0]))&&(i*=i)):e=xl(e.increment)),Ki(t,n?Mt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),h=In,d=0,c=e.length,u,f;c--;)s?(u=e[c].x-o,f=e[c].y-l,u=u*u+f*f):u=Math.abs(e[c]-o),u<h&&(h=u,d=c);return d=!i||h<=i?e[d]:a,s||d===a||Ti(a)?d:d+Xt(a)}:xl(e))},Df=function(e,t,n,i){return Ki(Yt(e)?!t:n===!0?!!(n=0):!i,function(){return Yt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},xy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},vy=function(e,t){return function(n){return e(parseFloat(n))+(t||Xt(n))}},yy=function(e,t,n){return Lf(e,t,0,1,n)},If=function(e,t,n){return Ki(n,function(i){return e[~~t(i)]})},Sy=function r(e,t,n){var i=t-e;return Yt(e)?If(e,r(0,e.length),t):Ki(n,function(s){return(i+(s-e)%i)%i+e})},My=function r(e,t,n){var i=t-e,s=i*2;return Yt(e)?If(e,r(0,e.length-1),t):Ki(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Jr=function(e){return e.replace(ny,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(iy);return Df(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Lf=function(e,t,n,i,s){var a=t-e,o=i-n;return Ki(s,function(l){return n+((l-e)/a*o||0)})},Ey=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Bt(e),o={},l,h,d,c,u;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Yt(e)&&!Yt(t)){for(d=[],c=e.length,u=c-2,h=1;h<c;h++)d.push(r(e[h-1],e[h]));c--,s=function(m){m*=c;var _=Math.min(u,~~m);return d[_](m-_)},n=t}else i||(e=rr(Yt(e)?[]:{},e));if(!d){for(l in t)uh.call(o,e,l,"get",t[l]);s=function(m){return mh(m,o)||(a?e.p:e)}}}return Ki(n,s)},ed=function(e,t,n){var i=e.labels,s=In,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Mn=function(e,t,n){var i=e.vars,s=i[t],a=gt,o=e._ctx,l,h,d;if(s)return l=i[t+"Params"],h=i.callbackScope||e,n&&Vi.length&&no(),o&&(gt=o),d=l?s.apply(h,l):s.call(h),gt=a,d},Ir=function(e){return Wi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Vt),e.progress()<1&&Mn(e,"onInterrupt"),e},Hs,Ff=[],Of=function(e){if(e)if(e=!e.name&&e.default||e,sh()||e.headless){var t=e.name,n=Mt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Yr,render:mh,add:uh,kill:Gy,modifier:zy,rawVars:0},a={targetTest:0,get:0,getSetter:ph,aliases:{},register:0};if(cr(),e!==i){if(_n[t])return;An(i,An(io(e,s),a)),rr(i.prototype,rr(s,io(e,a))),_n[i.prop=t]=i,e.targetTest&&(qa.push(i),oh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}_f(t,i),e.register&&e.register(fn,i,un)}else Ff.push(e)},lt=255,Lr={aqua:[0,lt,lt],lime:[0,lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,lt],navy:[0,0,128],white:[lt,lt,lt],olive:[128,128,0],yellow:[lt,lt,0],orange:[lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[lt,0,0],pink:[lt,192,203],cyan:[0,lt,lt],transparent:[lt,lt,lt,0]},oc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*lt+.5|0},Nf=function(e,t,n){var i=e?Ti(e)?[e>>16,e>>8&lt,e&lt]:0:Lr.black,s,a,o,l,h,d,c,u,f,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Lr[e])i=Lr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&lt,i&lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&lt,e&lt]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(Yu),!t)l=+i[0]%360/360,h=+i[1]/100,d=+i[2]/100,a=d<=.5?d*(h+1):d+h-d*h,s=d*2-a,i.length>3&&(i[3]*=1),i[0]=oc(l+1/3,s,a),i[1]=oc(l,s,a),i[2]=oc(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(ff),n&&i.length<4&&(i[3]=1),i}else i=e.match(Yu)||Lr.transparent;i=i.map(Number)}return t&&!m&&(s=i[0]/lt,a=i[1]/lt,o=i[2]/lt,c=Math.max(s,a,o),u=Math.min(s,a,o),d=(c+u)/2,c===u?l=h=0:(f=c-u,h=d>.5?f/(2-c-u):f/(c+u),l=c===s?(a-o)/f+(a<o?6:0):c===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(h*100+.5),i[2]=~~(d*100+.5)),n&&i.length<4&&(i[3]=1),i},kf=function(e){var t=[],n=[],i=-1;return e.split(Hi).forEach(function(s){var a=s.match(Vs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},td=function(e,t,n){var i="",s=(e+i).match(Hi),a=t?"hsla(":"rgba(",o=0,l,h,d,c;if(!s)return e;if(s=s.map(function(u){return(u=Nf(u,t,1))&&a+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(d=kf(e),l=n.c,l.join(i)!==d.c.join(i)))for(h=e.replace(Hi,"1").split(Vs),c=h.length-1;o<c;o++)i+=h[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(d.length?d:s.length?s:n).shift());if(!h)for(h=e.split(Hi),c=h.length-1;o<c;o++)i+=h[o]+s[o];return i+h[c]},Hi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Lr)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Ty=/hsl[a]?\(/,Uf=function(e){var t=e.join(" "),n;if(Hi.lastIndex=0,Hi.test(t))return n=Ty.test(t),e[1]=td(e[1],n),e[0]=td(e[0],n,kf(e[1])),!0},Zr,xn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,h,d,c,u,f,m=function _(g){var p=r()-i,b=g===!0,y,v,E,w;if((p>e||p<0)&&(n+=p-t),i+=p,E=i-n,y=E-a,(y>0||b)&&(w=++c.frame,u=E-c.time*1e3,c.time=E=E/1e3,a+=y+(y>=s?4:s-y),v=1),b||(l=h(_)),v)for(f=0;f<o.length;f++)o[f](E,u,w,g)};return c={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return u/(1e3/(g||60))},wake:function(){mf&&(!fl&&sh()&&(Kn=fl=window,rh=Kn.document||{},wn.gsap=fn,(Kn.gsapVersions||(Kn.gsapVersions=[])).push(fn.version),gf(to||Kn.GreenSockGlobals||!Kn.gsap&&Kn||{}),Ff.forEach(Of)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&c.sleep(),h=d||function(g){return setTimeout(g,a-c.time*1e3+1|0)},Zr=1,m(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(l),Zr=0,h=Yr},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){s=1e3/(g||240),a=c.time*1e3+s},add:function(g,p,b){var y=p?function(v,E,w,A){g(v,E,w,A),c.remove(y)}:g;return c.remove(g),o[b?"unshift":"push"](y),cr(),y},remove:function(g,p){~(p=o.indexOf(g))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},c})(),cr=function(){return!Zr&&xn.wake()},Xe={},wy=/^[\d.\-M][\d.\-,\s]/,Ay=/["']/g,Ry=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,h;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,h=l.substr(0,o),t[i]=isNaN(h)?h.replace(Ay,"").trim():+h,i=l.substr(o+1).trim();return t},Cy=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Py=function(e){var t=(e+"").split("("),n=Xe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Ry(t[1])]:Cy(e).split(",").map(yf)):Xe._CE&&wy.test(e)?Xe._CE("",e):n},Dy=function(e){return function(t){return 1-e(1-t)}},ps=function(e,t){return e&&(Mt(e)?e:Xe[e]||Py(e))||t},xs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return hn(e,function(o){Xe[o]=wn[o]=s,Xe[a=o.toLowerCase()]=n;for(var l in s)Xe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xe[o+"."+l]=s[l]}),s},Bf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},cc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/dl*(Math.asin(1/i)||0),o=function(d){return d===1?1:i*Math.pow(2,-10*d)*ty((d-a)*s)+1},l=e==="out"?o:e==="in"?function(h){return 1-o(1-h)}:Bf(o);return s=dl/s,l.config=function(h,d){return r(e,h,d)},l},lc=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Bf(n);return i.config=function(s){return r(e,s)},i};hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;xs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Xe.Linear.easeNone=Xe.none=Xe.Linear.easeIn;xs("Elastic",cc("in"),cc("out"),cc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};xs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);xs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});xs("Circ",function(r){return-(uf(1-r*r)-1)});xs("Sine",function(r){return r===1?1:-ey(r*$v)+1});xs("Back",lc("in"),lc("out"),lc());Xe.SteppedEase=Xe.steps=wn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-ht;return function(o){return((i*na(0,a,o)|0)+s)*n}}};Xr.ease=Xe["quad.out"];hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ch+=r+","+r+"Params,"});var zf=function(e,t){this.id=Qv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:xf,this.set=t?t.getSetter:ph},$r=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,or(this,+t.duration,1,1),this.data=t.data,gt&&(this._ctx=gt,gt.data.push(this)),Zr||xn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,or(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(cr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(bo(this,n),!s._dp||s.parent||Ef(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Jn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ht||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),vf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+$u(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+$u(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ar(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-ht?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?so(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ht?0:this._rts,this.totalTime(na(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),_o(this),uy(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(cr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ht&&(this._tTime-=ht)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=_t(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Jn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?so(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=oy);var i=Vt;return Vt=n,hh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Vt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Qu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Qu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Cn(this,n),ln(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ln(i)),this._dur||(this._zTime=-ht),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ht:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ht,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ht)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Mt(n)?n:Sf,l=function(){var d=i.then;i.then=null,s&&s(),Mt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=d),a(o),i.then=d};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Ir(this)},r})();An($r.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ht,_prom:0,_ps:!1,_rts:1});var an=(function(r){hf(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ln(n.sortChildren),bt&&Jn(n.parent||bt,bi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Tf(bi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Ur(0,arguments,this),this},t.from=function(i,s,a){return Ur(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Ur(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,kr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Pt(i,s,Cn(this,a),1),this},t.call=function(i,s,a){return Jn(this,Pt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,h,d){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=h,a.onCompleteParams=d,a.parent=this,new Pt(i,a,Cn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,h,d){return a.runBackwards=1,kr(a).immediateRender=ln(a.immediateRender),this.staggerTo(i,s,a,o,l,h,d)},t.staggerFromTo=function(i,s,a,o,l,h,d,c){return o.startAt=a,kr(o).immediateRender=ln(o.immediateRender),this.staggerTo(i,s,o,l,h,d,c)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,h=this._dur,d=i<=0?0:_t(i),c=this._zTime<0!=i<0&&(this._initted||!h),u,f,m,_,g,p,b,y,v,E,w,A;if(this!==bt&&d>l&&i>=0&&(d=l),d!==this._tTime||a||c){if(o!==this._time&&h&&(d+=this._time-o,i+=this._time-o),u=d,v=this._start,y=this._ts,p=!y,c&&(h||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,g=h+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,a);if(u=_t(d%g),d===l?(_=this._repeat,u=h):(E=_t(d/g),_=~~E,_&&_===E&&(u=h,_--),u>h&&(u=h)),E=ar(this._tTime,g),!o&&this._tTime&&E!==_&&this._tTime-E*g-this._dur<=0&&(E=_),w&&_&1&&(u=h-u,A=1),_!==E&&!this._lock){var x=w&&E&1,S=x===(w&&_&1);if(_<E&&(x=!x),o=x?0:d%h?h:d,this._lock=1,this.render(o||(A?0:_t(_*g)),s,!h)._lock=0,this._tTime=d,!s&&this.parent&&Mn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,E=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,l=this._tDur,S&&(this._lock=2,o=x?h:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=my(this,_t(o),_t(u)),b&&(d-=u-(u=b._start))),this._tTime=d,this._time=u,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&h&&!s&&!E&&(Mn(this,"onStart"),this._tTime!==d))return this;if(u>=o&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||u>=f._start)&&f._ts&&b!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,a),u!==this._time||!this._ts&&!p){b=0,m&&(d+=this._zTime=-ht);break}}f=m}else{f=this._last;for(var P=i<0?i:u;f;){if(m=f._prev,(f._act||P<=f._end)&&f._ts&&b!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(P-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(P-f._start)*f._ts,s,a||Vt&&hh(f)),u!==this._time||!this._ts&&!p){b=0,m&&(d+=this._zTime=P?-ht:ht);break}}f=m}}if(b&&!s&&(this.pause(),b.render(u>=o?0:-ht)._zTime=u>=o?1:-1,this._ts))return this._start=v,_o(this),this.render(i,s,a);this._onUpdate&&!s&&Mn(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&o)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!h)&&(d===l&&this._ts>0||!d&&this._ts<0)&&Wi(this,1),!s&&!(i<0&&!o)&&(d||o||!l)&&(Mn(this,d===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Ti(s)||(s=Cn(this,s,i)),!(i instanceof $r)){if(Yt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Bt(i))return this.addLabel(i,s);if(Mt(i))i=Pt.delayedCall(0,i);else return this}return this!==i?Jn(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-In);for(var l=[],h=this._first;h;)h._start>=o&&(h instanceof Pt?s&&l.push(h):(a&&l.push(h),i&&l.push.apply(l,h.getChildren(!0,s,a)))),h=h._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Bt(i)?this.removeLabel(i):Mt(i)?this.killTweensOf(i):(i.parent===this&&go(this,i),i===this._recent&&(this._recent=this._last),fs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_t(xn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Cn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Pt.delayedCall(0,s||Yr,a);return o.data="isPause",this._hasPause=1,Jn(this,o,Cn(this,i))},t.removePause=function(i){var s=this._first;for(i=Cn(this,i);s;)s._start===i&&s.data==="isPause"&&Wi(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Bi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Ln(i),l=this._first,h=Ti(s),d;l;)l instanceof Pt?cy(l._targets,o)&&(h?(!Bi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(d=l.getTweensOf(o,s)).length&&a.push.apply(a,d),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Cn(a,i),l=s,h=l.startAt,d=l.onStart,c=l.onStartParams,u=l.immediateRender,f,m=Pt.to(a,An({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(h&&"time"in h?h.time:a._time))/a.timeScale())||ht,onStart:function(){if(a.pause(),!f){var g=s.duration||Math.abs((o-(h&&"time"in h?h.time:a._time))/a.timeScale());m._dur!==g&&or(m,g,0,1).render(m._time,!0,!0),f=1}d&&d.apply(m,c||[])}},s));return u?m.render(0):m},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,An({startAt:{time:Cn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ed(this,Cn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ed(this,Cn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ht)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,h;for(i=_t(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(h in l)l[h]>=a&&(l[h]+=i);return fs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),fs(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=In,h,d,c;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(c=a.parent;o;)h=o._prev,o._dirty&&o.totalDuration(),d=o._start,d>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Jn(a,o,d-o._delay,1)._lock=0):l=d,d<0&&o._ts&&(s-=d,(!c&&!a._dp||c&&c.smoothChildTiming)&&(a._start+=_t(d/a._ts),a._time-=d,a._tTime-=d),a.shiftChildren(-d,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=h;or(a,a===bt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(bt._ts&&(vf(bt,so(i,bt)),bf=xn.frame),xn.frame>=Ju){Ju+=Tn.autoSleep||120;var s=bt._first;if((!s||!s._ts)&&Tn.autoSleep&&xn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||xn.sleep()}}},e})($r);An(an.prototype,{_lock:0,_hasPause:0,_forcing:0});var Iy=function(e,t,n,i,s,a,o){var l=new un(this._pt,e,t,0,1,qf,null,s),h=0,d=0,c,u,f,m,_,g,p,b;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Jr(i)),a&&(b=[n,i],a(b,e,t),n=b[0],i=b[1]),u=n.match(rc)||[];c=rc.exec(i);)m=c[0],_=i.substring(h,c.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==u[d++]&&(g=parseFloat(u[d-1])||0,l._pt={_next:l._pt,p:_||d===1?_:",",s:g,c:m.charAt(1)==="="?Xs(g,m)-g:parseFloat(m)-g,m:f&&f<4?Math.round:0},h=rc.lastIndex);return l.c=h<i.length?i.substring(h,i.length):"",l.fp=o,(pf.test(i)||p)&&(l.e=0),this._pt=l,l},uh=function(e,t,n,i,s,a,o,l,h,d){Mt(i)&&(i=i(s||0,e,a));var c=e[t],u=n!=="get"?n:Mt(c)?h?e[t.indexOf("set")||!Mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():c,f=Mt(c)?h?ky:Wf:fh,m;if(Bt(i)&&(~i.indexOf("random(")&&(i=Jr(i)),i.charAt(1)==="="&&(m=Xs(u,i)+(Xt(u)||0),(m||m===0)&&(i=m))),!d||u!==i||vl)return!isNaN(u*i)&&i!==""?(m=new un(this._pt,e,t,+u||0,i-(u||0),typeof c=="boolean"?By:jf,0,f),h&&(m.fp=h),o&&m.modifier(o,this,e),this._pt=m):(!c&&!(t in e)&&ah(t,i),Iy.call(this,e,t,u,i,f,l||Tn.stringFilter,h))},Ly=function(e,t,n,i,s){if(Mt(e)&&(e=Br(e,s,t,n,i)),!ai(e)||e.style&&e.nodeType||Yt(e)||df(e))return Bt(e)?Br(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Br(e[o],s,t,n,i);return a},Gf=function(e,t,n,i,s,a){var o,l,h,d;if(_n[e]&&(o=new _n[e]).init(s,o.rawVars?t[e]:Ly(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new un(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Hs))for(h=n._ptLookup[n._targets.indexOf(s)],d=o._props.length;d--;)h[o._props[d]]=l;return o},Bi,vl,dh=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,h=i.onUpdate,d=i.runBackwards,c=i.yoyoEase,u=i.keyframes,f=i.autoRevert,m=e._dur,_=e._startAt,g=e._targets,p=e.parent,b=p&&p.data==="nested"?p.vars.targets:g,y=e._overwrite==="auto"&&!nh,v=e.timeline,E=i.easeReverse||c,w,A,x,S,P,R,I,D,F,N,k,B,Z;if(v&&(!u||!s)&&(s="none"),e._ease=ps(s,Xr.ease),e._rEase=E&&(ps(E)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||u&&!i.stagger){if(D=g[0]?ds(g[0]).harness:0,B=D&&i[D.prop],w=io(i,oh),_&&(_._zTime<0&&_.progress(1),t<0&&d&&o&&!f?_.render(-1,!0):_.revert(d&&m?ja:ay),_._lazy=0),a){if(Wi(e._startAt=Pt.set(g,An({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&ln(l),startAt:null,delay:0,onUpdate:h&&function(){return Mn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt||!o&&!f)&&e._startAt.revert(ja),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&m&&!_){if(t&&(o=!1),x=An({overwrite:!1,data:"isFromStart",lazy:o&&!_&&ln(l),immediateRender:o,stagger:0,parent:p},w),B&&(x[D.prop]=B),Wi(e._startAt=Pt.set(g,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt?e._startAt.revert(ja):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,ht,ht);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&ln(l)||l&&!m,A=0;A<g.length;A++){if(P=g[A],I=P._gsap||lh(g)[A]._gsap,e._ptLookup[A]=N={},pl[I.id]&&Vi.length&&no(),k=b===g?A:b.indexOf(P),D&&(F=new D).init(P,B||w,e,k,b)!==!1&&(e._pt=S=new un(e._pt,P,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(Y){N[Y]=S}),F.priority&&(R=1)),!D||B)for(x in w)_n[x]&&(F=Gf(x,w,e,k,P,b))?F.priority&&(R=1):N[x]=S=uh.call(e,P,x,"get",w[x],k,b,0,i.stringFilter);e._op&&e._op[A]&&e.kill(P,e._op[A]),y&&e._pt&&(Bi=e,bt.killTweensOf(P,N,e.globalTime(t)),Z=!e.parent,Bi=0),e._pt&&l&&(pl[I.id]=1)}R&&Xf(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!Z,u&&t<=0&&v.render(In,!0,!0)},Fy=function(e,t,n,i,s,a,o,l){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,c,u,f;if(!h)for(h=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(d=u[f][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return vl=1,e.vars[t]="+=0",dh(e,o),vl=0,l?Kr(t+" not eligible for reset. Try splitting into individual properties"):1;h.push(d)}for(f=h.length;f--;)c=h[f],d=c._pt||c,d.s=(i||i===0)&&!s?i:d.s+(i||0)+a*d.c,d.c=n-d.s,c.e&&(c.e=wt(n)+Xt(c.e)),c.b&&(c.b=d.s+Xt(c.b))},Oy=function(e,t){var n=e[0]?ds(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=rr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Ny=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Yt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,h){return o.push({t:h/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Br=function(e,t,n,i,s){return Mt(e)?e.call(t,n,i,s):Bt(e)&&~e.indexOf("random(")?Jr(e):e},Vf=ch+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Hf={};hn(Vf+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Hf[r]=1});var Pt=(function(r){hf(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:kr(i))||this;var l=o.vars,h=l.duration,d=l.delay,c=l.immediateRender,u=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,g=l.scrollTrigger,p=i.parent||bt,b=(Yt(n)||df(n)?Ti(n[0]):"length"in i)?[n]:Ln(n),y,v,E,w,A,x,S,P;if(o._targets=b.length?lh(b):Kr("GSAP target "+n+" not found. https://gsap.com",!Tn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,m||u||Oa(h)||Oa(d)){i=o.vars;var R=i.easeReverse||i.yoyoEase;if(y=o.timeline=new an({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:b}),y.kill(),y.parent=y._dp=bi(o),y._start=0,u||Oa(h)||Oa(d)){if(w=b.length,S=u&&Cf(u),ai(u))for(A in u)~Vf.indexOf(A)&&(P||(P={}),P[A]=u[A]);for(v=0;v<w;v++)E=io(i,Hf),E.stagger=0,R&&(E.easeReverse=R),P&&rr(E,P),x=b[v],E.duration=+Br(h,bi(o),v,x,b),E.delay=(+Br(d,bi(o),v,x,b)||0)-o._delay,!u&&w===1&&E.delay&&(o._delay=d=E.delay,o._start+=d,E.delay=0),y.to(x,E,S?S(v,x,b):0),y._ease=Xe.none;y.duration()?h=d=0:o.timeline=0}else if(m){kr(An(y.vars.defaults,{ease:"none"})),y._ease=ps(m.ease||i.ease||"none");var I=0,D,F,N;if(Yt(m))m.forEach(function(k){return y.to(b,k,">")}),y.duration();else{E={};for(A in m)A==="ease"||A==="easeEach"||Ny(A,m[A],E,m.easeEach);for(A in E)for(D=E[A].sort(function(k,B){return k.t-B.t}),I=0,v=0;v<D.length;v++)F=D[v],N={ease:F.e,duration:(F.t-(v?D[v-1].t:0))/100*h},N[A]=F.v,y.to(b,N,I),I+=N.duration;y.duration()<h&&y.to({},{duration:h-y.duration()})}}h||o.duration(h=y.duration())}else o.timeline=0;return f===!0&&!nh&&(Bi=bi(o),bt.killTweensOf(b),Bi=0),Jn(p,bi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(c||!h&&!m&&o._start===_t(p._time)&&ln(c)&&dy(bi(o))&&p.data!=="nested")&&(o._tTime=-ht,o.render(Math.max(0,-d)||0)),g&&Tf(bi(o),g),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,h=this._dur,d=i<0,c=i>l-ht&&!d?l:i<ht?0:i,u,f,m,_,g,p,b,y;if(!h)py(this,i,s,a);else if(c!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(u=c,y=this.timeline,this._repeat){if(_=h+this._rDelay,this._repeat<-1&&d)return this.totalTime(_*100+i,s,a);if(u=_t(c%_),c===l?(m=this._repeat,u=h):(g=_t(c/_),m=~~g,m&&m===g?(u=h,m--):u>h&&(u=h)),p=this._yoyo&&m&1,p&&(u=h-u),g=ar(this._tTime,_),u===o&&!a&&this._initted&&m===g)return this._tTime=c,this;m!==g&&this.vars.repeatRefresh&&!p&&!this._lock&&u!==_&&this._initted&&(this._lock=a=1,this.render(_t(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(wf(this,d?i:u,a,s,c))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==g))return this;if(h!==this._dur)return this.render(i,s,a)}if(this._rEase){var v=u<o;if(v!==this._inv){var E=v?o:h-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=E?(v?-1:1)/E:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(u/h);if(this._from&&(this.ratio=b=1-b),this._tTime=c,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&c&&!s&&!g&&(Mn(this,"onStart"),this._tTime!==c))return this;for(f=this._pt;f;)f.r(b,f.d),f=f._next;y&&y.render(i<0?i:y._dur*y._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(d&&ml(this,i,s,a),Mn(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!s&&this.parent&&Mn(this,"onRepeat"),(c===this._tDur||!c)&&this._tTime===c&&(d&&!this._onUpdate&&ml(this,i,!0,!0),(i||!h)&&(c===this._tDur&&this._ts>0||!c&&this._ts<0)&&Wi(this,1),!s&&!(d&&!o)&&(c||o||p)&&(Mn(this,c===l?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Zr||xn.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||dh(this,h),d=this._ease(h/this._dur),Fy(this,i,s,a,o,d,h,l)?this.resetTo(i,s,a,o,1):(bo(this,0),this.parent||Mf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ir(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Vt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Bi&&Bi.vars.overwrite!==!0)._first||Ir(this),this.parent&&a!==this.timeline.totalDuration()&&or(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Ln(i):o,h=this._ptLookup,d=this._pt,c,u,f,m,_,g,p;if((!s||s==="all")&&hy(o,l))return s==="all"&&(this._pt=0),Ir(this);for(c=this._op=this._op||[],s!=="all"&&(Bt(s)&&(_={},hn(s,function(b){return _[b]=1}),s=_),s=Oy(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){u=h[p],s==="all"?(c[p]=s,m=u,f={}):(f=c[p]=c[p]||{},m=s);for(_ in m)g=u&&u[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&go(this,g,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&d&&Ir(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ur(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Ur(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return bt.killTweensOf(i,s,a)},e})($r);An(Pt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});hn("staggerTo,staggerFrom,staggerFromTo",function(r){Pt[r]=function(){var e=new an,t=_l.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var fh=function(e,t,n){return e[t]=n},Wf=function(e,t,n){return e[t](n)},ky=function(e,t,n,i){return e[t](i.fp,n)},Uy=function(e,t,n){return e.setAttribute(t,n)},ph=function(e,t){return Mt(e[t])?Wf:ih(e[t])&&e.setAttribute?Uy:fh},jf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},By=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},qf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},mh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},zy=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Gy=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?go(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Vy=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Xf=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},un=(function(){function r(t,n,i,s,a,o,l,h,d){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||jf,this.d=l||this,this.set=h||fh,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Vy,this.m=n,this.mt=s,this.tween=i},r})();hn(ch+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return oh[r]=1});wn.TweenMax=wn.TweenLite=Pt;wn.TimelineLite=wn.TimelineMax=an;bt=new an({sortChildren:!1,defaults:Xr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Tn.stringFilter=Uf;var ms=[],Xa={},Hy=[],nd=0,Wy=0,hc=function(e){return(Xa[e]||Hy).map(function(t){return t()})},yl=function(){var e=Date.now(),t=[];e-nd>2&&(hc("matchMediaInit"),ms.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,h;for(o in i)a=Kn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,h=1);h&&(n.revert(),l&&t.push(n))}),hc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),nd=e,hc("matchMedia"))},Kf=(function(){function r(t,n){this.selector=n&&bl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Wy++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Mt(n)&&(s=i,i=n,n=Mt);var a=this,o=function(){var h=gt,d=a.selector,c;return h&&h!==a&&h.data.push(a),s&&(a.selector=bl(s)),gt=a,c=i.apply(a,arguments),Mt(c)&&a._r.push(c),gt=h,a.selector=d,a.isReverted=!1,c};return a.last=o,n===Mt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=gt;gt=null,n(this),gt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Pt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,h;l--;)h=s.data[l],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(d){return o.splice(o.indexOf(d),1)}));for(o.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,c){return c.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),l=s.data.length;l--;)h=s.data[l],h instanceof an?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof Pt)&&h.revert&&h.revert(n);s._r.forEach(function(d){return d(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=ms.length;a--;)ms[a].id===this.id&&ms.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),jy=(function(){function r(t){this.contexts=[],this.scope=t,gt&&gt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){ai(n)||(n={matches:n});var a=new Kf(0,s||this.scope),o=a.conditions={},l,h,d;gt&&!a.selector&&(a.selector=gt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(h in n)h==="all"?d=1:(l=Kn.matchMedia(n[h]),l&&(ms.indexOf(a)<0&&ms.push(a),(o[h]=l.matches)&&(d=1),l.addListener?l.addListener(yl):l.addEventListener("change",yl)));return d&&i(a,function(c){return a.add(null,c)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),ro={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Of(i)})},timeline:function(e){return new an(e)},getTweensOf:function(e,t){return bt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Bt(e)&&(e=Ln(e)[0]);var s=ds(e||{}).get,a=n?Sf:yf;return n==="native"&&(n=""),e&&(t?a((_n[t]&&_n[t].get||s)(e,t,n,i)):function(o,l,h){return a((_n[o]&&_n[o].get||s)(e,o,l,h))})},quickSetter:function(e,t,n){if(e=Ln(e),e.length>1){var i=e.map(function(d){return fn.quickSetter(d,t,n)}),s=i.length;return function(d){for(var c=s;c--;)i[c](d)}}e=e[0]||{};var a=_n[t],o=ds(e),l=o.harness&&(o.harness.aliases||{})[t]||t,h=a?function(d){var c=new a;Hs._pt=0,c.init(e,n?d+n:d,Hs,0,[e]),c.render(1,c),Hs._pt&&mh(1,Hs)}:o.set(e,l);return a?h:function(d){return h(e,l,n?d+n:d,o,1)}},quickTo:function(e,t,n){var i,s=fn.to(e,An((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,h,d){return s.resetTo(t,l,h,d)};return a.tween=s,a},isTweening:function(e){return bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ps(e.ease,Xr.ease)),Zu(Xr,e||{})},config:function(e){return Zu(Tn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!_n[o]&&!wn[o]&&Kr(t+" effect requires "+o+" plugin.")}),ac[t]=function(o,l,h){return n(Ln(o),An(l||{},s),h)},a&&(an.prototype[t]=function(o,l,h){return this.add(ac[t](o,ai(l)?l:(h=l)&&{},this),h)})},registerEase:function(e,t){Xe[e]=ps(t)},parseEase:function(e,t){return arguments.length?ps(e,t):Xe},getById:function(e){return bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new an(e),i,s;for(n.smoothChildTiming=ln(e.smoothChildTiming),bt.remove(n),n._dp=0,n._time=n._tTime=bt._time,i=bt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Pt&&i.vars.onComplete===i._targets[0]))&&Jn(n,i,i._start-i._delay),i=s;return Jn(bt,n,0),n},context:function(e,t){return e?new Kf(e,t):gt},matchMedia:function(e){return new jy(e)},matchMediaRefresh:function(){return ms.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||yl()},addEventListener:function(e,t){var n=Xa[e]||(Xa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Xa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Sy,wrapYoyo:My,distribute:Cf,random:Df,snap:Pf,normalize:yy,getUnit:Xt,clamp:_y,splitColor:Nf,toArray:Ln,selector:bl,mapRange:Lf,pipe:xy,unitize:vy,interpolate:Ey,shuffle:Rf},install:gf,effects:ac,ticker:xn,updateRoot:an.updateRoot,plugins:_n,globalTimeline:bt,core:{PropTween:un,globals:_f,Tween:Pt,Timeline:an,Animation:$r,getCache:ds,_removeLinkedListItem:go,reverting:function(){return Vt},context:function(e){return e&&gt&&(gt.data.push(e),e._ctx=gt),gt},suppressOverwrites:function(e){return nh=e}}};hn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ro[r]=Pt[r]});xn.add(an.updateRoot);Hs=ro.to({},{duration:0});var qy=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Xy=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=qy(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},uc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,h;if(Bt(s)&&(l={},hn(s,function(d){return l[d]=1}),s=l),t){l={};for(h in s)l[h]=t(s[h]);s=l}Xy(o,s)}}}},fn=ro.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Vt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},uc("roundProps",xl),uc("modifiers"),uc("snap",Pf))||ro;Pt.version=an.version=fn.version="3.15.0";mf=1;sh()&&cr();Xe.Power0;Xe.Power1;Xe.Power2;Xe.Power3;Xe.Power4;Xe.Linear;Xe.Quad;Xe.Cubic;Xe.Quart;Xe.Quint;Xe.Strong;Xe.Elastic;Xe.Back;Xe.SteppedEase;Xe.Bounce;Xe.Sine;Xe.Expo;Xe.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var id,zi,Ks,gh,hs,sd,_h,Ky=function(){return typeof window<"u"},wi={},as=180/Math.PI,Ys=Math.PI/180,Us=Math.atan2,rd=1e8,bh=/([A-Z])/g,Yy=/(left|right|width|margin|padding|x)/i,Jy=/[\s,\(]\S/,Qn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Sl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Zy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$y=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Qy=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},eS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Yf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Jf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},tS=function(e,t,n){return e.style[t]=n},nS=function(e,t,n){return e.style.setProperty(t,n)},iS=function(e,t,n){return e._gsap[t]=n},sS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},rS=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},aS=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},xt="transform",dn=xt+"Origin",oS=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in wi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Qn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=xi(i,o)}):this.tfm[e]=a.x?a[e]:xi(i,e),e===dn&&(this.tfm.zOrigin=a.zOrigin);else return Qn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(xt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(dn,t,"")),e=xt}(s||t)&&this.props.push(e,t,s[e])},Zf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},cS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(bh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=_h(),(!s||!s.isStart)&&!n[xt]&&(Zf(n),i.zOrigin&&n[dn]&&(n[dn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},$f=function(e,t){var n={target:e,props:[],revert:cS,save:oS};return e._gsap||fn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Qf,Ml=function(e,t){var n=zi.createElementNS?zi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):zi.createElement(e);return n&&n.style?n:zi.createElement(e)},En=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(bh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,lr(t)||t,1)||""},ad="O,Moz,ms,Ms,Webkit".split(","),lr=function(e,t,n){var i=t||hs,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(ad[a]+e in s););return a<0?null:(a===3?"ms":a>=0?ad[a]:"")+e},El=function(){Ky()&&window.document&&(id=window,zi=id.document,Ks=zi.documentElement,hs=Ml("div")||{style:{}},Ml("div"),xt=lr(xt),dn=xt+"Origin",hs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qf=!!lr("perspective"),_h=fn.core.reverting,gh=1)},od=function(e){var t=e.ownerSVGElement,n=Ml("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ks.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ks.removeChild(n),s},cd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ep=function(e){var t,n;try{t=e.getBBox()}catch{t=od(e),n=1}return t&&(t.width||t.height)||n||(t=od(e)),t&&!t.width&&!t.x&&!t.y?{x:+cd(e,["x","cx","x1"])||0,y:+cd(e,["y","cy","y1"])||0,width:0,height:0}:t},tp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ep(e))},ji=function(e,t){if(t){var n=e.style,i;t in wi&&t!==dn&&(t=xt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(bh,"-$1").toLowerCase())):n.removeAttribute(t)}},Gi=function(e,t,n,i,s,a){var o=new un(e._pt,t,n,0,1,a?Jf:Yf);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},ld={deg:1,rad:1,turn:1},lS={grid:1,flex:1},qi=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=hs.style,l=Yy.test(t),h=e.tagName.toLowerCase()==="svg",d=(h?"client":"offset")+(l?"Width":"Height"),c=100,u=i==="px",f=i==="%",m,_,g,p;if(i===a||!s||ld[i]||ld[a])return s;if(a!=="px"&&!u&&(s=r(e,t,n,"px")),p=e.getCTM&&tp(e),(f||a==="%")&&(wi[t]||~t.indexOf("adius")))return m=p?e.getBBox()[l?"width":"height"]:e[d],wt(f?s/m*c:s/100*m);if(o[l?"width":"height"]=c+(u?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!h?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===zi||!_.appendChild)&&(_=zi.body),g=_._gsap,g&&f&&g.width&&l&&g.time===xn.time&&!g.uncache)return wt(s/g.width*c);if(f&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=c+i,m=e[d],b?e.style[t]=b:ji(e,t)}else(f||a==="%")&&!lS[En(_,"display")]&&(o.position=En(e,"position")),_===e&&(o.position="static"),_.appendChild(hs),m=hs[d],_.removeChild(hs),o.position="absolute";return l&&f&&(g=ds(_),g.time=xn.time,g.width=_[d]),wt(u?m*s/c:m&&s?c/m*s:0)},xi=function(e,t,n,i){var s;return gh||El(),t in Qn&&t!=="transform"&&(t=Qn[t],~t.indexOf(",")&&(t=t.split(",")[0])),wi[t]&&t!=="transform"?(s=ea(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:oo(En(e,dn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ao[t]&&ao[t](e,t,n)||En(e,t)||xf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?qi(e,t,s,n)+n:s},hS=function(e,t,n,i){if(!n||n==="none"){var s=lr(t,e,1),a=s&&En(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=En(e,"borderTopColor"))}var o=new un(this._pt,e.style,t,0,1,qf),l=0,h=0,d,c,u,f,m,_,g,p,b,y,v,E;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=En(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=En(e,t)||i,_?e.style[t]=_:ji(e,t)),d=[n,i],Uf(d),n=d[0],i=d[1],u=n.match(Vs)||[],E=i.match(Vs)||[],E.length){for(;c=Vs.exec(i);)g=c[0],b=i.substring(l,c.index),m?m=(m+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(m=1),g!==(_=u[h++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),g.charAt(1)==="="&&(g=Xs(f,g)+v),p=parseFloat(g),y=g.substr((p+"").length),l=Vs.lastIndex-y.length,y||(y=y||Tn.units[t]||v,l===i.length&&(i+=y,o.e+=y)),v!==y&&(f=qi(e,t,_,y)||0),o._pt={_next:o._pt,p:b||h===1?b:",",s:f,c:p-f,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Jf:Yf;return pf.test(i)&&(o.e=0),this._pt=o,o},hd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},uS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=hd[n]||n,t[1]=hd[i]||i,t.join(" ")},dS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,h;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),h=s.length;--h>-1;)o=s[h],wi[o]&&(l=1,o=o==="transformOrigin"?dn:xt),ji(n,o);l&&(ji(n,xt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ea(n,1),a.uncache=1,Zf(i)))}},ao={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new un(e._pt,t,n,0,0,dS);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Qr=[1,0,0,1,0,0],np={},ip=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ud=function(e){var t=En(e,xt);return ip(t)?Qr:t.substr(7).match(ff).map(wt)},xh=function(e,t){var n=e._gsap||ds(e),i=e.style,s=ud(e),a,o,l,h;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Qr:s):(s===Qr&&!e.offsetParent&&e!==Ks&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,o=e.nextElementSibling,Ks.appendChild(e)),s=ud(e),l?i.display=l:ji(e,"display"),h&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ks.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Tl=function(e,t,n,i,s,a){var o=e._gsap,l=s||xh(e,!0),h=o.xOrigin||0,d=o.yOrigin||0,c=o.xOffset||0,u=o.yOffset||0,f=l[0],m=l[1],_=l[2],g=l[3],p=l[4],b=l[5],y=t.split(" "),v=parseFloat(y[0])||0,E=parseFloat(y[1])||0,w,A,x,S;n?l!==Qr&&(A=f*g-m*_)&&(x=v*(g/A)+E*(-_/A)+(_*b-g*p)/A,S=v*(-m/A)+E*(f/A)-(f*b-m*p)/A,v=x,E=S):(w=ep(e),v=w.x+(~y[0].indexOf("%")?v/100*w.width:v),E=w.y+(~(y[1]||y[0]).indexOf("%")?E/100*w.height:E)),i||i!==!1&&o.smooth?(p=v-h,b=E-d,o.xOffset=c+(p*f+b*_)-p,o.yOffset=u+(p*m+b*g)-b):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[dn]="0px 0px",a&&(Gi(a,o,"xOrigin",h,v),Gi(a,o,"yOrigin",d,E),Gi(a,o,"xOffset",c,o.xOffset),Gi(a,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+E)},ea=function(e,t){var n=e._gsap||new zf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),h=En(e,dn)||"0",d,c,u,f,m,_,g,p,b,y,v,E,w,A,x,S,P,R,I,D,F,N,k,B,Z,Y,ie,ue,ee,Ae,je,Ke;return d=c=u=_=g=p=b=y=v=0,f=m=1,n.svg=!!(e.getCTM&&tp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[xt]!=="none"?l[xt]:"")),i.scale=i.rotate=i.translate="none"),A=xh(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),h=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),Tl(e,B||h,!!B||n.originIsAbsolute,n.smooth!==!1,A)),E=n.xOrigin||0,w=n.yOrigin||0,A!==Qr&&(R=A[0],I=A[1],D=A[2],F=A[3],d=N=A[4],c=k=A[5],A.length===6?(f=Math.sqrt(R*R+I*I),m=Math.sqrt(F*F+D*D),_=R||I?Us(I,R)*as:0,b=D||F?Us(D,F)*as+_:0,b&&(m*=Math.abs(Math.cos(b*Ys))),n.svg&&(d-=E-(E*R+w*D),c-=w-(E*I+w*F))):(Ke=A[6],Ae=A[7],ie=A[8],ue=A[9],ee=A[10],je=A[11],d=A[12],c=A[13],u=A[14],x=Us(Ke,ee),g=x*as,x&&(S=Math.cos(-x),P=Math.sin(-x),B=N*S+ie*P,Z=k*S+ue*P,Y=Ke*S+ee*P,ie=N*-P+ie*S,ue=k*-P+ue*S,ee=Ke*-P+ee*S,je=Ae*-P+je*S,N=B,k=Z,Ke=Y),x=Us(-D,ee),p=x*as,x&&(S=Math.cos(-x),P=Math.sin(-x),B=R*S-ie*P,Z=I*S-ue*P,Y=D*S-ee*P,je=F*P+je*S,R=B,I=Z,D=Y),x=Us(I,R),_=x*as,x&&(S=Math.cos(x),P=Math.sin(x),B=R*S+I*P,Z=N*S+k*P,I=I*S-R*P,k=k*S-N*P,R=B,N=Z),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,p=180-p),f=wt(Math.sqrt(R*R+I*I+D*D)),m=wt(Math.sqrt(k*k+Ke*Ke)),x=Us(N,k),b=Math.abs(x)>2e-4?x*as:0,v=je?1/(je<0?-je:je):0),n.svg&&(B=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!ip(En(e,xt)),B&&e.setAttribute("transform",B))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(f*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=d-((n.xPercent=d&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=c-((n.yPercent=c&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-c)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=wt(f),n.scaleY=wt(m),n.rotation=wt(_)+o,n.rotationX=wt(g)+o,n.rotationY=wt(p)+o,n.skewX=b+o,n.skewY=y+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(h.split(" ")[2])||!t&&n.zOrigin||0)&&(i[dn]=oo(h)),n.xOffset=n.yOffset=0,n.force3D=Tn.force3D,n.renderTransform=n.svg?pS:Qf?sp:fS,n.uncache=0,n},oo=function(e){return(e=e.split(" "))[0]+" "+e[1]},dc=function(e,t,n){var i=Xt(t);return wt(parseFloat(t)+parseFloat(qi(e,"x",n+"px",i)))+i},fS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,sp(e,t)},is="0deg",wr="0px",ss=") ",sp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,h=n.rotation,d=n.rotationY,c=n.rotationX,u=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,g=n.transformPerspective,p=n.force3D,b=n.target,y=n.zOrigin,v="",E=p==="auto"&&e&&e!==1||p===!0;if(y&&(c!==is||d!==is)){var w=parseFloat(d)*Ys,A=Math.sin(w),x=Math.cos(w),S;w=parseFloat(c)*Ys,S=Math.cos(w),a=dc(b,a,A*S*-y),o=dc(b,o,-Math.sin(w)*-y),l=dc(b,l,x*S*-y+y)}g!==wr&&(v+="perspective("+g+ss),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(E||a!==wr||o!==wr||l!==wr)&&(v+=l!==wr||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ss),h!==is&&(v+="rotate("+h+ss),d!==is&&(v+="rotateY("+d+ss),c!==is&&(v+="rotateX("+c+ss),(u!==is||f!==is)&&(v+="skew("+u+", "+f+ss),(m!==1||_!==1)&&(v+="scale("+m+", "+_+ss),b.style[xt]=v||"translate(0, 0)"},pS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,h=n.skewX,d=n.skewY,c=n.scaleX,u=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,g=n.xOffset,p=n.yOffset,b=n.forceCSS,y=parseFloat(a),v=parseFloat(o),E,w,A,x,S;l=parseFloat(l),h=parseFloat(h),d=parseFloat(d),d&&(d=parseFloat(d),h+=d,l+=d),l||h?(l*=Ys,h*=Ys,E=Math.cos(l)*c,w=Math.sin(l)*c,A=Math.sin(l-h)*-u,x=Math.cos(l-h)*u,h&&(d*=Ys,S=Math.tan(h-d),S=Math.sqrt(1+S*S),A*=S,x*=S,d&&(S=Math.tan(d),S=Math.sqrt(1+S*S),E*=S,w*=S)),E=wt(E),w=wt(w),A=wt(A),x=wt(x)):(E=c,x=u,w=A=0),(y&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(y=qi(f,"x",a,"px"),v=qi(f,"y",o,"px")),(m||_||g||p)&&(y=wt(y+m-(m*E+_*A)+g),v=wt(v+_-(m*w+_*x)+p)),(i||s)&&(S=f.getBBox(),y=wt(y+i/100*S.width),v=wt(v+s/100*S.height)),S="matrix("+E+","+w+","+A+","+x+","+y+","+v+")",f.setAttribute("transform",S),b&&(f.style[xt]=S)},mS=function(e,t,n,i,s){var a=360,o=Bt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?as:1),h=l-i,d=i+h+"deg",c,u;return o&&(c=s.split("_")[1],c==="short"&&(h%=a,h!==h%(a/2)&&(h+=h<0?a:-a)),c==="cw"&&h<0?h=(h+a*rd)%a-~~(h/a)*a:c==="ccw"&&h>0&&(h=(h-a*rd)%a-~~(h/a)*a)),e._pt=u=new un(e._pt,t,n,i,h,Zy),u.e=d,u.u="deg",e._props.push(n),u},dd=function(e,t){for(var n in t)e[n]=t[n];return e},gS=function(e,t,n){var i=dd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,h,d,c,u,f,m;i.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),a[xt]=t,o=ea(n,1),ji(n,xt),n.setAttribute("transform",h)):(h=getComputedStyle(n)[xt],a[xt]=t,o=ea(n,1),a[xt]=h);for(l in wi)h=i[l],d=o[l],h!==d&&s.indexOf(l)<0&&(f=Xt(h),m=Xt(d),c=f!==m?qi(n,l,h,m):parseFloat(h),u=parseFloat(d),e._pt=new un(e._pt,o,l,c,u-c,Sl),e._pt.u=m||0,e._props.push(l));dd(o,i)};hn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});ao[e>1?"border"+r:r]=function(o,l,h,d,c){var u,f;if(arguments.length<4)return u=a.map(function(m){return xi(o,m,h)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(d+"").split(" "),f={},a.forEach(function(m,_){return f[m]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(l,f,c)}});var rp={name:"css",register:El,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,h,d,c,u,f,m,_,g,p,b,y,v,E,w,A,x,S;gh||El(),this.styles=this.styles||$f(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(d=t[_],!(_n[_]&&Gf(_,t,n,i,e,s)))){if(f=typeof d,m=ao[_],f==="function"&&(d=d.call(n,i,e,s),f=typeof d),f==="string"&&~d.indexOf("random(")&&(d=Jr(d)),m)m(this,e,_,d,n)&&(A=1);else if(_.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(_)+"").trim(),d+="",Hi.lastIndex=0,Hi.test(h)||(g=Xt(h),p=Xt(d),p?g!==p&&(h=qi(e,_,h,p)+p):g&&(d+=g)),this.add(o,"setProperty",h,d,i,s,0,0,_),a.push(_),x.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(h=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Bt(h)&&~h.indexOf("random(")&&(h=Jr(h)),Xt(h+"")||h==="auto"||(h+=Tn.units[_]||Xt(xi(e,_))||""),(h+"").charAt(1)==="="&&(h=xi(e,_))):h=xi(e,_),u=parseFloat(h),b=f==="string"&&d.charAt(1)==="="&&d.substr(0,2),b&&(d=d.substr(2)),c=parseFloat(d),_ in Qn&&(_==="autoAlpha"&&(u===1&&xi(e,"visibility")==="hidden"&&c&&(u=0),x.push("visibility",0,o.visibility),Gi(this,o,"visibility",u?"inherit":"hidden",c?"inherit":"hidden",!c)),_!=="scale"&&_!=="transform"&&(_=Qn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in wi,y){if(this.styles.save(_),S=d,f==="string"&&d.substring(0,6)==="var(--"){if(d=En(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var P=e.style.perspective;e.style.perspective=d,d=En(e,"perspective"),P?e.style.perspective=P:ji(e,"perspective")}c=parseFloat(d)}if(v||(E=e._gsap,E.renderTransform&&!t.parseTransform||ea(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,v=this._pt=new un(this._pt,o,xt,0,1,E.renderTransform,E,0,-1),v.dep=1),_==="scale")this._pt=new un(this._pt,E,"scaleY",E.scaleY,(b?Xs(E.scaleY,b+c):c)-E.scaleY||0,Sl),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(dn,0,o[dn]),d=uS(d),E.svg?Tl(e,d,0,w,0,this):(p=parseFloat(d.split(" ")[2])||0,p!==E.zOrigin&&Gi(this,E,"zOrigin",E.zOrigin,p),Gi(this,o,_,oo(h),oo(d)));continue}else if(_==="svgOrigin"){Tl(e,d,1,w,0,this);continue}else if(_ in np){mS(this,E,_,u,b?Xs(u,b+d):d);continue}else if(_==="smoothOrigin"){Gi(this,E,"smooth",E.smooth,d);continue}else if(_==="force3D"){E[_]=d;continue}else if(_==="transform"){gS(this,d,e);continue}}else _ in o||(_=lr(_)||_);if(y||(c||c===0)&&(u||u===0)&&!Jy.test(d)&&_ in o)g=(h+"").substr((u+"").length),c||(c=0),p=Xt(d)||(_ in Tn.units?Tn.units[_]:g),g!==p&&(u=qi(e,_,h,p)),this._pt=new un(this._pt,y?E:o,_,u,(b?Xs(u,b+c):c)-u,!y&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?eS:Sl),this._pt.u=p||0,y&&S!==d?(this._pt.b=h,this._pt.e=S,this._pt.r=Qy):g!==p&&p!=="%"&&(this._pt.b=h,this._pt.r=$y);else if(_ in o)hS.call(this,e,_,h,b?b+d:d);else if(_ in e)this.add(e,_,h||e[_],b?b+d:d,i,s);else if(_!=="parseTransform"){ah(_,d);continue}y||(_ in o?x.push(_,0,o[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,h||e[_])),a.push(_)}}A&&Xf(this)},render:function(e,t){if(t.tween._time||!_h())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:xi,aliases:Qn,getSetter:function(e,t,n){var i=Qn[t];return i&&i.indexOf(",")<0&&(t=i),t in wi&&t!==dn&&(e._gsap.x||xi(e,"x"))?n&&sd===n?t==="scale"?sS:iS:(sd=n||{})&&(t==="scale"?rS:aS):e.style&&!ih(e.style[t])?tS:~t.indexOf("-")?nS:ph(e,t)},core:{_removeProperty:ji,_getMatrix:xh}};fn.utils.checkPrefix=lr;fn.core.getStyleSaver=$f;(function(r,e,t,n){var i=hn(r+","+e+","+t,function(s){wi[s]=1});hn(e,function(s){Tn.units[s]="deg",np[s]=1}),Qn[i[13]]=r+","+e,hn(n,function(s){var a=s.split(":");Qn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Tn.units[r]="px"});fn.registerPlugin(rp);var ap=fn.registerPlugin(rp)||fn;ap.core.Tween;class _S{constructor(e){this.experience=e,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.setInstance(),this.setControls()}setInstance(){this.instance=new Qt(45,this.sizes.width/this.sizes.height,.1,100),this.updateFov(),this.instance.position.set(-4.8,1.9,4.4),this.scene.add(this.instance)}updateFov(){const e=this.sizes.width/this.sizes.height;if(e<1){const t=58*Math.PI/180,n=2*Math.atan(Math.tan(t/2)/e)*(180/Math.PI);this.instance.fov=Math.min(70,Math.max(45,n))}else this.instance.fov=45;this.instance.updateProjectionMatrix()}setControls(){this.controls=new Bv(this.instance,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.rotateSpeed=.85,this.controls.maxDistance=9.5,this.controls.minDistance=2,this.controls.maxPolarAngle=Math.PI/2-.04,this.controls.minPolarAngle=.15,this.controls.enablePan=!1,this.controls.target.set(0,.65,0),this.controls.autoRotate=!1,this.controls.autoRotateSpeed=.8}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.updateFov()}update(){this.controls.update()}transitionTo(e,t,n=1.4){this.controls.enabled=!1;const i=ap.timeline({onComplete:()=>{this.controls.enabled=!0}});return i.to(this.instance.position,{x:e.x,y:e.y,z:e.z,duration:n,ease:"power2.inOut"},0),i.to(this.controls.target,{x:t.x,y:t.y,z:t.z,duration:n,ease:"power2.inOut"},0),i}}class bS{constructor(e){this.experience=e,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.camera=this.experience.camera,this.setInstance()}setInstance(){this.instance=new Lv({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.instance.toneMapping=Cl,this.instance.toneMappingExposure=1.22,this.instance.shadowMap.enabled=!0,this.instance.shadowMap.type=vd,this.instance.outputColorSpace=St,this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}update(){this.instance.render(this.scene,this.camera.instance)}}class xS{constructor(e){this.experience=e,this.scene=this.experience.scene,this.group=new on,this.scene.add(this.group),this.createSkyDome(),this.createPenthouseStructure()}createSkyDome(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,e.height);n.addColorStop(0,"#0f2942"),n.addColorStop(.35,"#1e5f8a"),n.addColorStop(.65,"#569cd6"),n.addColorStop(.78,"#cbd5e1"),n.addColorStop(.85,"#fef08a"),n.addColorStop(.92,"#fdba74"),n.addColorStop(1,"#1e293b"),t.fillStyle=n,t.fillRect(0,0,e.width,e.height),t.fillStyle="rgba(255, 255, 255, 0.25)";for(let h=0;h<28;h++){const d=h*85%e.width,c=340+Math.sin(h*1.5)*80,u=180+h%5*45,f=28+h%3*12;t.beginPath(),t.ellipse(d,c,u,f,0,0,Math.PI*2),t.fill()}const i=e.height*.82;t.fillStyle="#0f172a";let s=0;for(;s<e.width;){const h=14+s%7*6,d=40+s%11*12+s*3%45;t.fillRect(s,i-d,h,d),s%5===0&&(t.fillStyle="#cbd5e1",t.fillRect(s+h/2-1,i-d-22,2,22),t.fillStyle="#ef4444",t.fillRect(s+h/2-2,i-d-24,4,3),t.fillStyle="#0f172a"),t.fillStyle="rgba(254, 240, 138, 0.45)";for(let c=i-d+8;c<i-4;c+=8)for(let u=s+3;u<s+h-3;u+=6)(u+c)%2===0&&t.fillRect(u,c,2,3);t.fillStyle="#0f172a",s+=h+2+s%3*4}const a=new ho(e);a.colorSpace=St,a.wrapS=_s,a.wrapT=vn;const o=new Yl(65,36,24),l=new Sn({map:a,side:tn,fog:!1});this.skyDome=new me(o,l),this.skyDome.position.y=10,this.group.add(this.skyDome)}createPenthouseStructure(){const e=new mt({color:2042167,metalness:.88,roughness:.22}),t=new mt({color:13934648,metalness:.85,roughness:.3}),n=new mt({color:9684477,transparent:!0,opacity:.16,roughness:.04,metalness:.1,side:Un}),i=16.5,s=10.5,a=new Kt(i,i,s,32,1,!0),o=new me(a,n);o.position.y=s/2,this.group.add(o);const l=12;for(let f=0;f<l;f++){const m=f/l*Math.PI*2,_=Math.cos(m)*i,g=Math.sin(m)*i,p=new Kt(.12,.14,s,16),b=new me(p,e);b.position.set(_,s/2,g),this.group.add(b);const y=new Kt(.15,.15,.08,16),v=new me(y,t);v.position.set(_,s*.45,g),this.group.add(v)}const h=new us(i,.22,16,48),d=new me(h,e);d.rotation.x=Math.PI/2,d.position.y=s,this.group.add(d);const c=new us(i,.14,16,48),u=new me(c,e);u.rotation.x=Math.PI/2,u.position.y=.08,this.group.add(u),this.skyLight=new $l(14742270,1.2),this.skyLight.position.set(-8,14,6),this.group.add(this.skyLight)}}class vS{constructor(e){this.experience=e,this.scene=this.experience.scene,this.setFloor()}setFloor(){const e=new Vn(80,80),t=new mt({color:1580844,roughness:.32,metalness:.55});this.baseMesh=new me(e,t),this.baseMesh.rotation.x=-Math.PI/2,this.baseMesh.position.y=-.005,this.baseMesh.receiveShadow=!0,this.scene.add(this.baseMesh);const n=new Kl(9,64),i=new mt({color:1119780,roughness:.16,metalness:.88,envMapIntensity:1.5});this.groundMirror=new me(n,i),this.groundMirror.position.set(0,.005,0),this.groundMirror.rotation.x=-Math.PI/2,this.groundMirror.receiveShadow=!0,this.scene.add(this.groundMirror);const s=new ur(8.92,9.04,64),a=new mt({color:13934648,metalness:.85,roughness:.28}),o=new me(s,a);o.position.set(0,.007,0),o.rotation.x=-Math.PI/2,this.scene.add(o)}}class yS{constructor(e){this.experience=e,this.scene=this.experience.scene,this.group=new on,this.scene.add(this.group),this.isRotating=!1,this.rotationSpeed=.15,this.setPlatform(),this.setLighting()}setPlatform(){const e=new Kt(3.5,3.65,.08,64),t=new mt({color:658708,metalness:.85,roughness:.25});this.podium=new me(e,t),this.podium.position.y=.04,this.podium.receiveShadow=!0,this.group.add(this.podium);const n=new us(3.6,.02,16,64),i=new mt({color:2042167,metalness:.9,roughness:.15}),s=new me(n,i);s.rotation.x=Math.PI/2,s.position.y=.08,this.group.add(s);const a=new us(3.55,.015,16,64);this.rimMat=new mt({color:61695,emissive:61695,emissiveIntensity:2.2,roughness:.2}),this.rim=new me(a,this.rimMat),this.rim.rotation.x=Math.PI/2,this.rim.position.y=.082,this.group.add(this.rim);const o=new us(2.8,.008,16,64);this.innerRimMat=new mt({color:16755200,emissive:16755200,emissiveIntensity:1.4,roughness:.3});const l=new me(o,this.innerRimMat);l.rotation.x=Math.PI/2,l.position.y=.082,this.group.add(l);const h=12,d=new Gt(.04,.005,.2),c=new Sn({color:61695});for(let u=0;u<h;u++){const f=u/h*Math.PI*2,m=new me(d,c);m.position.set(Math.cos(f)*3.35,.083,Math.sin(f)*3.35),m.rotation.y=-f,this.group.add(m)}}setLighting(){const e=new ta(61695,1.5,6,2);e.position.set(0,.15,0),this.group.add(e)}toggleRotation(){return this.isRotating=!this.isRotating,this.isRotating}update(e){const t=performance.now()*.0015;this.rimMat&&(this.rimMat.emissiveIntensity=2+Math.sin(t*2)*.5),this.isRotating&&this.experience.world.car&&this.experience.world.car.model&&(this.experience.world.car.model.rotation.y+=e*3e-4*this.rotationSpeed,this.group.rotation.y+=e*3e-4*this.rotationSpeed)}}class SS{constructor(e){this.experience=e,this.scene=this.experience.scene,this.group=new on,this.group.position.set(-4.2,0,-1.8),this.group.rotation.y=Math.PI/3,this.scene.add(this.group),this.canvasWidth=2048,this.canvasHeight=1152,this.imageLoaded=!1,this.drawn=!1,this.setupCanvas(),this.loadImage(),this.setMesh(),this.setLighting()}setupCanvas(){this.canvas=document.createElement("canvas"),this.canvas.width=this.canvasWidth,this.canvas.height=this.canvasHeight,this.ctx=this.canvas.getContext("2d"),this.texture=new ho(this.canvas),this.texture.colorSpace=St,this.texture.minFilter=Qe,this.texture.magFilter=Qe,this.texture.generateMipmaps=!0,this.drawSignboard()}loadImage(){this.profileImg=new Image,this.profileImg.crossOrigin="anonymous",this.profileImg.src="./images/jubayer.jpg",this.profileImg.onload=()=>{this.imageLoaded=!0,this.drawSignboard(),this.texture&&(this.texture.needsUpdate=!0)}}setMesh(){const e=new mt({color:1841431,metalness:.92,roughness:.22}),t=new mt({color:13934648,metalness:.85,roughness:.28}),n=new Gt(1.5,.04,.7),i=new me(n,e);i.position.y=.02,i.receiveShadow=!0,this.group.add(i);const s=2.36,a=1.33,o=.08,l=1.5,d=l-a/2,c=new Kt(.04,.04,d,24),u=new me(c,e);u.position.set(-.6,d/2,0),this.group.add(u);const f=new me(c,e);f.position.set(.6,d/2,0),this.group.add(f);const m=new Kt(.05,.05,.03,24),_=new me(m,t);_.position.set(-.6,.42,0),this.group.add(_);const g=new me(m,t);g.position.set(.6,.42,0),this.group.add(g);const p=new Kt(.02,.02,1,16),b=new me(p,e);b.position.set(0,.45,-.22),b.rotation.x=-Math.PI/6,this.group.add(b);const y=new Gt(s,a,o),v=new me(y,e);v.position.set(0,l,0),v.castShadow=!0,this.group.add(v);const E=new Gt(s+.02,a+.02,.016),w=new mt({color:13934648,metalness:.84,roughness:.3}),A=new me(E,w);A.position.set(0,l,.036),this.group.add(A);const x=new Vn(s-.03,a-.03);this.screenMat=new Sn({map:this.texture,toneMapped:!1,side:sn}),this.screenMesh=new me(x,this.screenMat),this.screenMesh.position.set(0,l,.045),this.group.add(this.screenMesh);const S=new Vn(s-.02,a-.02),P=new mt({color:1117966,metalness:.95,roughness:.2,side:sn}),R=new me(S,P);R.position.set(0,l,-.042),R.rotation.y=Math.PI,this.group.add(R);const I=new ur(.1,.13,32),D=new me(I,t);D.position.set(0,l,-.044),D.rotation.y=Math.PI,this.group.add(D)}setLighting(){this.screenLight=new ta(16708551,1.3,5,1.8),this.screenLight.position.set(0,1.5,.8),this.group.add(this.screenLight)}update(e,t){!this.drawn&&this.imageLoaded&&(this.drawSignboard(),this.drawn=!0,this.texture&&(this.texture.needsUpdate=!0))}drawSignboard(){const e=this.ctx,t=this.canvasWidth,n=this.canvasHeight,i=e.createLinearGradient(0,0,0,n);i.addColorStop(0,"#F8F4EC"),i.addColorStop(.5,"#EFE4D2"),i.addColorStop(1,"#E4D5BC"),e.fillStyle=i,e.fillRect(0,0,t,n);const s=e.createRadialGradient(t*.5,n*.2,50,t*.5,n*.4,t*.6);s.addColorStop(0,"rgba(253, 230, 138, 0.18)"),s.addColorStop(1,"rgba(253, 230, 138, 0)"),e.fillStyle=s,e.fillRect(0,0,t,n),e.strokeStyle="#D4A038",e.lineWidth=4,e.strokeRect(32,32,t-64,n-64),e.strokeStyle="rgba(120, 83, 30, 0.2)",e.lineWidth=1.5,e.strokeRect(46,46,t-92,n-92);const a=32;e.fillStyle="#D4A038",e.fillRect(28,28,a,4),e.fillRect(28,28,4,a),e.fillRect(t-28-a,28,a,4),e.fillRect(t-32,28,4,a),e.fillRect(28,n-32,a,4),e.fillRect(28,n-28-a,4,a),e.fillRect(t-28-a,n-32,a,4),e.fillRect(t-32,n-28-a,4,a);const o=140,l=120,h=660,d=912;if(e.save(),e.shadowColor="rgba(12, 10, 9, 0.18)",e.shadowBlur=32,e.shadowOffsetX=0,e.shadowOffsetY=12,e.fillStyle="#FFFFFF",e.fillRect(o-14,l-14,h+28,d+28),e.restore(),e.strokeStyle="#FFFFFF",e.lineWidth=4,e.strokeRect(o-14,l-14,h+28,d+28),this.imageLoaded&&this.profileImg){e.save(),e.beginPath(),e.rect(o,l,h,d),e.clip();const f=this.profileImg,m=f.width/f.height,_=h/d;let g,p,b,y;m>_?(p=d,g=d*m,b=o+(h-g)/2,y=l):(g=h,p=h/m,b=o,y=l+(d-p)*.18),e.drawImage(f,b,y,g,p),e.restore()}else e.fillStyle="#E8DFD0",e.fillRect(o,l,h,d),e.fillStyle="#78716C",e.font='600 32px "Plus Jakarta Sans", sans-serif',e.textAlign="center",e.fillText("LOADING PORTRAIT...",o+h/2,l+d/2);const c=890,u=n*.5;e.fillStyle="#0A0908",e.font='800 96px "Outfit", "Plus Jakarta Sans", sans-serif',e.textAlign="left",e.letterSpacing="0.01em",e.fillText("Jubayer Ahmad",c,u-80),e.fillStyle="#D4A038",e.fillRect(c,u-10,560,4),e.fillStyle="#9A3412",e.font='700 64px "Outfit", "Plus Jakarta Sans", sans-serif',e.letterSpacing="0.02em",e.fillText("Full Stack Developer",c,u+65),e.fillStyle="#064E3B",e.font='700 64px "Outfit", "Plus Jakarta Sans", sans-serif',e.letterSpacing="0.02em",e.fillText("AI Content Creator",c,u+175)}}class MS{constructor(e){this.experience=e,this.scene=this.experience.scene,this.camera=this.experience.camera.instance,this.raycaster=new tf,this.mouse=new Re,this.group=new on,this.group.position.set(0,.25,-4.6),this.group.rotation.y=0,this.scene.add(this.group),this.canvasWidth=2048,this.canvasHeight=1152,this.hoveredIndex=-1,this.currentSlide=0,this.projects=[{id:"special-agent",title:"Special Agent One",tag:"AI AUTONOMOUS AGENT",desc:"Autonomous Remote Job Hunter & Pitch Engine with terminal reasoning loops and multi-tool scheduling.",url:"https://special-agent-one.vercel.app",tech:"Next.js 15 • Python FastAPI • Multi-Agent",badge:"LIVE ON VERCEL",color:"#10B981"},{id:"electronics-importers",title:"Electronics Importers BD",tag:"B2B COMMERCIAL PORTAL",desc:"Enterprise commercial electronics import directory, product search, and verified supplier matchmaking portal.",url:"https://electronics-importers-bd.vercel.app",tech:"Next.js 15 • React • Tailwind CSS",badge:"LIVE ON VERCEL",color:"#0284C7"},{id:"affan-labib",title:"Affan Labib Editorial Blog",tag:"CONTENT PUBLICATION",desc:"High-performance modern blog & editorial publication with MDX engine and edge caching.",url:"https://affan-labib-blog.vercel.app",tech:"Next.js 15 • Cloudflare Edge • Tailwind",badge:"LIVE ON VERCEL",color:"#7C3AED"},{id:"mesk-studio",title:"Mesk Creative Studio",tag:"DIGITAL AGENCY",desc:"Agency showcase with dynamic project reels, modern UI architecture, and responsive layouts.",url:"https://mesk-nine.vercel.app",tech:"Next.js 15 • WebGL • TypeScript",badge:"LIVE ON VERCEL",color:"#D97706"},{id:"ibrahim-profile",title:"Ibrahim Portfolio Showcase",tag:"EXECUTIVE SHOWCASE",desc:"Modern personal portfolio with client deliverables, testimonials, and verified skill matrix.",url:"https://ibrahim-jade.vercel.app",tech:"React 19 • Tailwind CSS • Vercel Edge",badge:"LIVE ON VERCEL",color:"#2563EB"},{id:"world-platform",title:"World 3D Spatial Canvas",tag:"3D WEBGL PLATFORM",desc:"Interactive 3D geospatial environment visualization with real-time camera controls.",url:"https://world-flame.vercel.app",tech:"Three.js • WebGL • GSAP",badge:"LIVE ON VERCEL",color:"#059669"}],this.cardRects=[{x:120,y:280,w:860,h:360},{x:1068,y:280,w:860,h:360},{x:120,y:680,w:860,h:360},{x:1068,y:680,w:860,h:360}],this.setupCanvas(),this.setMesh(),this.setLighting(),this.bindEvents(),setInterval(()=>{this.currentSlide=this.currentSlide===0?1:0,this.draw()},6e3)}setupCanvas(){this.canvas=document.createElement("canvas"),this.canvas.width=this.canvasWidth,this.canvas.height=this.canvasHeight,this.ctx=this.canvas.getContext("2d"),this.texture=new ho(this.canvas),this.texture.colorSpace=St,this.texture.minFilter=Qe,this.texture.magFilter=Qe,this.texture.generateMipmaps=!0,this.draw()}setMesh(){const e=new mt({color:1841431,metalness:.92,roughness:.22}),t=new mt({color:13934648,metalness:.85,roughness:.28}),n=new Gt(1.5,.04,.7),i=new me(n,e);i.position.y=.02,i.receiveShadow=!0,this.group.add(i);const s=2.36,a=1.33,o=.08,l=1.5,d=l-a/2,c=new Kt(.04,.04,d,24),u=new me(c,e);u.position.set(-.6,d/2,0),this.group.add(u);const f=new me(c,e);f.position.set(.6,d/2,0),this.group.add(f);const m=new Kt(.05,.05,.03,24),_=new me(m,t);_.position.set(-.6,.42,0),this.group.add(_);const g=new me(m,t);g.position.set(.6,.42,0),this.group.add(g);const p=new Kt(.02,.02,1,16),b=new me(p,e);b.position.set(0,.45,-.22),b.rotation.x=-Math.PI/6,this.group.add(b);const y=new Gt(s,a,o),v=new me(y,e);v.position.set(0,l,0),v.castShadow=!0,this.group.add(v);const E=new Gt(s+.02,a+.02,.016),w=new mt({color:13934648,metalness:.84,roughness:.3}),A=new me(E,w);A.position.set(0,l,.036),this.group.add(A);const x=new Vn(s-.03,a-.03);this.screenMat=new Sn({map:this.texture,toneMapped:!1,side:sn}),this.screenMesh=new me(x,this.screenMat),this.screenMesh.position.set(0,l,.045),this.group.add(this.screenMesh);const S=new Vn(s-.02,a-.02),P=new mt({color:1117966,metalness:.95,roughness:.2,side:sn}),R=new me(S,P);R.position.set(0,l,-.042),R.rotation.y=Math.PI,this.group.add(R);const I=new ur(.1,.13,32),D=new me(I,t);D.position.set(0,l,-.044),D.rotation.y=Math.PI,this.group.add(D)}setLighting(){this.screenLight=new ta(16708551,1.4,6,1.8),this.screenLight.position.set(0,1.5,.8),this.group.add(this.screenLight)}draw(){const e=this.ctx,t=this.canvasWidth,n=this.canvasHeight,i=e.createLinearGradient(0,0,0,n);i.addColorStop(0,"#F8F4EC"),i.addColorStop(.5,"#EFE4D2"),i.addColorStop(1,"#E4D5BC"),e.fillStyle=i,e.fillRect(0,0,t,n);const s=e.createRadialGradient(t*.5,120,40,t*.5,200,t*.6);s.addColorStop(0,"rgba(253, 230, 138, 0.22)"),s.addColorStop(1,"rgba(253, 230, 138, 0)"),e.fillStyle=s,e.fillRect(0,0,t,n),e.strokeStyle="#D4A038",e.lineWidth=4,e.strokeRect(32,32,t-64,n-64),e.strokeStyle="rgba(120, 83, 30, 0.2)",e.lineWidth=1.5,e.strokeRect(46,46,t-92,n-92);const a=32;e.fillStyle="#D4A038",e.fillRect(28,28,a,4),e.fillRect(28,28,4,a),e.fillRect(t-28-a,28,a,4),e.fillRect(t-32,28,4,a),e.fillRect(28,n-32,a,4),e.fillRect(28,n-28-a,4,a),e.fillRect(t-28-a,n-32,a,4),e.fillRect(t-32,n-28-a,4,a),e.save(),e.textAlign="center",e.fillStyle="#10B981",e.font='700 28px "Outfit", "Plus Jakarta Sans", sans-serif',e.fillText("VERIFIED PRODUCTION DEPLOYMENTS • VERCEL CLOUD",t/2,105),e.fillStyle="#0A0908",e.font='800 64px "Outfit", "Plus Jakarta Sans", sans-serif',e.fillText("Live Engineering Projects",t/2,180),e.fillStyle="#57534E",e.font='500 30px "Plus Jakarta Sans", sans-serif';const o=this.currentSlide===0?"Featured Projects (1-4 of 6)":"Enterprise & 3D Web (5-6 of 6)";e.fillText(`Click any card to launch the live application • ${o}`,t/2,235),e.restore();const l=this.currentSlide*2,h=[this.projects[(l+0)%this.projects.length],this.projects[(l+1)%this.projects.length],this.projects[(l+2)%this.projects.length],this.projects[(l+3)%this.projects.length]];this.cardRects.forEach((f,m)=>{const _=h[m];if(!_)return;const g=this.hoveredIndex===m,{x:p,y:b,w:y,h:v}=f;e.save(),e.shadowColor=g?"rgba(212, 160, 56, 0.45)":"rgba(12, 10, 9, 0.12)",e.shadowBlur=g?36:20,e.shadowOffsetY=g?6:8,e.fillStyle=g?"#FFFFFF":"#FCFAF7",this.roundRect(e,p,b,y,v,20),e.fill(),e.restore(),e.lineWidth=g?4:2,e.strokeStyle=g?"#D4A038":"rgba(120, 83, 30, 0.22)",this.roundRect(e,p,b,y,v,20),e.stroke(),e.save(),e.textAlign="left",e.fillStyle=_.color||"#0284C7",e.font='700 24px "Outfit", "Plus Jakarta Sans", sans-serif',e.fillText(_.tag,p+36,b+55),e.textAlign="right",e.fillStyle="#10B981",e.font='700 22px "Plus Jakarta Sans", sans-serif',e.fillText(`●  ${_.badge}`,p+y-36,b+55),e.restore(),e.save(),e.textAlign="left",e.fillStyle="#0A0908",e.font='800 42px "Outfit", "Plus Jakarta Sans", sans-serif',e.fillText(_.title,p+36,b+115),e.fillStyle="#57534E",e.font='500 26px "Plus Jakarta Sans", sans-serif',this.wrapText(e,_.desc,p+36,b+165,y-72,34),e.fillStyle="#0284C7",e.font='600 24px "Plus Jakarta Sans", sans-serif',e.fillText(_.tech,p+36,b+v-42),e.restore();const E=210,w=56,A=p+y-E-36,x=b+v-w-24;e.save(),e.fillStyle=g?"#0A0908":"#10B981",this.roundRect(e,A,x,E,w,14),e.fill(),e.fillStyle="#FFFFFF",e.font='700 24px "Outfit", "Plus Jakarta Sans", sans-serif',e.textAlign="center",e.fillText("Launch Live ↗",A+E/2,x+36),e.restore()}),e.save();const d=n-55,c=30,u=t/2-c/2;for(let f=0;f<2;f++)e.fillStyle=this.currentSlide===f?"#D4A038":"rgba(120, 83, 30, 0.28)",e.beginPath(),e.arc(u+f*c,d,this.currentSlide===f?8:6,0,Math.PI*2),e.fill();e.restore(),this.texture&&(this.texture.needsUpdate=!0)}wrapText(e,t,n,i,s,a){const o=t.split(" ");let l="",h=i;for(let d=0;d<o.length;d++){const c=l+o[d]+" ";if(e.measureText(c).width>s&&d>0){if(e.fillText(l,n,h),l=o[d]+" ",h+=a,h>i+a*2)break}else l=c}e.fillText(l,n,h)}roundRect(e,t,n,i,s,a){e.beginPath(),e.moveTo(t+a,n),e.lineTo(t+i-a,n),e.quadraticCurveTo(t+i,n,t+i,n+a),e.lineTo(t+i,n+s-a),e.quadraticCurveTo(t+i,n+s,t+i-a,n+s),e.lineTo(t+a,n+s),e.quadraticCurveTo(t,n+s,t,n+s-a),e.lineTo(t,n+a),e.quadraticCurveTo(t,n,t+a,n),e.closePath()}bindEvents(){const e=n=>{if(this.mouse.x=n.clientX/window.innerWidth*2-1,this.mouse.y=-(n.clientY/window.innerHeight)*2+1,!this.screenMesh)return;this.raycaster.setFromCamera(this.mouse,this.camera);const i=this.raycaster.intersectObject(this.screenMesh);if(i.length>0&&i[0].uv){const s=i[0].uv,a=s.x*this.canvasWidth,o=(1-s.y)*this.canvasHeight;let l=-1;this.cardRects.forEach((h,d)=>{const{x:c,y:u,w:f,h:m}=h;a>=c&&a<=c+f&&o>=u&&o<=u+m&&(l=d)}),this.hoveredIndex!==l&&(this.hoveredIndex=l,document.body.style.cursor=l!==-1?"pointer":"default",this.draw())}else this.hoveredIndex!==-1&&(this.hoveredIndex=-1,document.body.style.cursor="default",this.draw())},t=n=>{if(this.mouse.x=n.clientX/window.innerWidth*2-1,this.mouse.y=-(n.clientY/window.innerHeight)*2+1,!this.screenMesh)return;this.raycaster.setFromCamera(this.mouse,this.camera);const i=this.raycaster.intersectObject(this.screenMesh);if(i.length>0&&i[0].uv){const s=i[0].uv,a=s.x*this.canvasWidth,o=(1-s.y)*this.canvasHeight,l=this.currentSlide*2,h=[this.projects[(l+0)%this.projects.length],this.projects[(l+1)%this.projects.length],this.projects[(l+2)%this.projects.length],this.projects[(l+3)%this.projects.length]];this.cardRects.forEach((d,c)=>{const{x:u,y:f,w:m,h:_}=d;if(a>=u&&a<=u+m&&o>=f&&o<=f+_){const g=h[c];g&&g.url&&(this.experience.sounds&&this.experience.sounds.playClick(),window.open(g.url,"_blank"))}})}};window.addEventListener("pointermove",e,{passive:!0}),window.addEventListener("pointerdown",t)}update(e,t){}}class ES{constructor(e){this.experience=e,this.scene=this.experience.scene,this.camera=this.experience.camera.instance,this.raycaster=new tf,this.mouse=new Re,this.group=new on,this.group.position.set(4.2,0,-1.8),this.group.rotation.y=-Math.PI/3,this.scene.add(this.group),this.canvasWidth=2048,this.canvasHeight=1152,this.hoveredIndex=-1,this.cards=[{id:"youtube",name:"YouTube",handle:"@jubayeraispecialist",desc:"Official AI & Creative Tech Channel",color:"#FF0000",url:"https://www.youtube.com/@jubayeraispecialist",actionText:"Subscribe ↗",rect:{x:120,y:280,w:860,h:360}},{id:"tiktok",name:"TikTok",handle:"@jubayer_ahmad_2002",desc:"Short AI Videos & Creative Reels",color:"#000000",url:"https://www.tiktok.com/@jubayer_ahmad_2002",actionText:"Follow ↗",rect:{x:1068,y:280,w:860,h:360}},{id:"facebook",name:"Facebook",handle:"Jubayer Ahmad & Studio Page",desc:"Personal Profile & Official Studio Page",color:"#1877F2",url:"https://www.facebook.com/share/1CopAWZnyX/",actionText:"Connect ↗",rect:{x:120,y:680,w:860,h:360}},{id:"instagram",name:"Instagram",handle:"@jubayer_ahmad_2002",desc:"Visual Stories & Lifestyle",color:"#E1306C",url:"https://www.instagram.com/jubayer_ahmad_2002/",actionText:"Follow ↗",rect:{x:1068,y:680,w:860,h:360}}],this.setupCanvas(),this.setMesh(),this.setLighting(),this.bindEvents()}setupCanvas(){this.canvas=document.createElement("canvas"),this.canvas.width=this.canvasWidth,this.canvas.height=this.canvasHeight,this.ctx=this.canvas.getContext("2d"),this.texture=new ho(this.canvas),this.texture.colorSpace=St,this.texture.minFilter=Qe,this.texture.magFilter=Qe,this.texture.generateMipmaps=!0,this.draw()}setMesh(){const e=new mt({color:1841431,metalness:.92,roughness:.22}),t=new mt({color:13934648,metalness:.85,roughness:.28}),n=new Gt(1.5,.04,.7),i=new me(n,e);i.position.y=.02,i.receiveShadow=!0,this.group.add(i);const s=2.36,a=1.33,o=.08,l=1.5,d=l-a/2,c=new Kt(.04,.04,d,24),u=new me(c,e);u.position.set(-.6,d/2,0),this.group.add(u);const f=new me(c,e);f.position.set(.6,d/2,0),this.group.add(f);const m=new Kt(.05,.05,.03,24),_=new me(m,t);_.position.set(-.6,.42,0),this.group.add(_);const g=new me(m,t);g.position.set(.6,.42,0),this.group.add(g);const p=new Kt(.02,.02,1,16),b=new me(p,e);b.position.set(0,.45,-.22),b.rotation.x=-Math.PI/6,this.group.add(b);const y=new Gt(s,a,o),v=new me(y,e);v.position.set(0,l,0),v.castShadow=!0,this.group.add(v);const E=new Gt(s+.02,a+.02,.016),w=new mt({color:13934648,metalness:.84,roughness:.3}),A=new me(E,w);A.position.set(0,l,.036),this.group.add(A);const x=new Vn(s-.03,a-.03);this.screenMat=new Sn({map:this.texture,toneMapped:!1,side:sn}),this.screenMesh=new me(x,this.screenMat),this.screenMesh.position.set(0,l,.045),this.group.add(this.screenMesh);const S=new Vn(s-.02,a-.02),P=new mt({color:1117966,metalness:.95,roughness:.2,side:sn}),R=new me(S,P);R.position.set(0,l,-.042),R.rotation.y=Math.PI,this.group.add(R);const I=new ur(.1,.13,32),D=new me(I,t);D.position.set(0,l,-.044),D.rotation.y=Math.PI,this.group.add(D)}setLighting(){this.screenLight=new ta(16708551,1.2,5,1.8),this.screenLight.position.set(0,1.5,.8),this.group.add(this.screenLight)}draw(){const e=this.ctx,t=this.canvasWidth,n=this.canvasHeight,i=e.createLinearGradient(0,0,0,n);i.addColorStop(0,"#F8F4EC"),i.addColorStop(.5,"#EFE4D2"),i.addColorStop(1,"#E4D5BC"),e.fillStyle=i,e.fillRect(0,0,t,n);const s=e.createRadialGradient(t*.5,120,40,t*.5,200,t*.6);s.addColorStop(0,"rgba(253, 230, 138, 0.22)"),s.addColorStop(1,"rgba(253, 230, 138, 0)"),e.fillStyle=s,e.fillRect(0,0,t,n),e.strokeStyle="#D4A038",e.lineWidth=4,e.strokeRect(32,32,t-64,n-64),e.strokeStyle="rgba(120, 83, 30, 0.2)",e.lineWidth=1.5,e.strokeRect(46,46,t-92,n-92);const a=32;e.fillStyle="#D4A038",e.fillRect(28,28,a,4),e.fillRect(28,28,4,a),e.fillRect(t-28-a,28,a,4),e.fillRect(t-32,28,4,a),e.fillRect(28,n-32,a,4),e.fillRect(28,n-28-a,4,a),e.fillRect(t-28-a,n-32,a,4),e.fillRect(t-32,n-28-a,4,a),e.save(),e.textAlign="center",e.fillStyle="#9A3412",e.font='700 30px "Outfit", "Plus Jakarta Sans", sans-serif',e.fillText("OFFICIAL CHANNELS • VERIFIED SOCIAL HUBS",t/2,115),e.fillStyle="#0A0908",e.font='800 68px "Outfit", "Plus Jakarta Sans", sans-serif',e.fillText("Connect with Jubayer Ahmad",t/2,195),e.fillStyle="#57534E",e.font='500 32px "Plus Jakarta Sans", sans-serif',e.fillText("Click any card to open the verified official platform directly",t/2,255),e.restore(),this.cards.forEach((o,l)=>{const h=this.hoveredIndex===l,{x:d,y:c,w:u,h:f}=o.rect;e.save(),e.shadowColor=h?"rgba(212, 160, 56, 0.45)":"rgba(12, 10, 9, 0.12)",e.shadowBlur=h?36:22,e.shadowOffsetY=h?6:8,e.fillStyle=h?"#FFFFFF":"#FCFAF7",this.roundRect(e,d,c,u,f,24),e.fill(),e.restore(),e.lineWidth=h?4:2,e.strokeStyle=h?"#D4A038":"rgba(120, 83, 30, 0.22)",this.roundRect(e,d,c,u,f,24),e.stroke();const m=d+40,_=c+45,g=130;o.id==="youtube"?this.drawYouTubeIcon(e,m,_,g):o.id==="tiktok"?this.drawTikTokIcon(e,m,_,g):o.id==="facebook"?this.drawFacebookIcon(e,m,_,g):o.id==="instagram"&&this.drawInstagramIcon(e,m,_,g);const p=m+g+36;e.save(),e.textAlign="left",e.fillStyle="#0A0908",e.font='800 48px "Outfit", "Plus Jakarta Sans", sans-serif',e.fillText(o.name,p,c+90),e.fillStyle=o.color==="#000000"?"#1E293B":o.color,e.font='700 32px "Plus Jakarta Sans", sans-serif',e.fillText(o.handle,p,c+140),e.fillStyle="#78716C",e.font='500 28px "Plus Jakarta Sans", sans-serif',e.fillText(o.desc,p,c+190),e.restore();const b=260,y=68,v=d+u-b-36,E=c+f-y-36;e.save(),e.fillStyle=h?"#0A0908":o.color==="#000000"?"#0F172A":o.color,this.roundRect(e,v,E,b,y,16),e.fill(),e.fillStyle="#FFFFFF",e.font='700 28px "Outfit", "Plus Jakarta Sans", sans-serif',e.textAlign="center",e.fillText(o.actionText,v+b/2,E+44),e.restore()}),this.texture&&(this.texture.needsUpdate=!0)}drawYouTubeIcon(e,t,n,i){e.save(),e.fillStyle="#FF0000",this.roundRect(e,t,n+10,i,i-20,28),e.fill(),e.fillStyle="#FFFFFF",e.beginPath();const s=i*.32,a=i*.36,o=t+(i-s)/2+4,l=n+i/2;e.moveTo(o,l-a/2),e.lineTo(o+s,l),e.lineTo(o,l+a/2),e.closePath(),e.fill(),e.restore()}drawTikTokIcon(e,t,n,i){e.save(),e.fillStyle="#000000",this.roundRect(e,t,n,i,i,28),e.fill();const s=t+i/2-2,a=n+i/2+2,o=i*.007,l=(h,d,c)=>{e.fillStyle=h,e.beginPath(),e.fillRect(s+8*o+d,a-35*o+c,14*o,48*o),e.beginPath(),e.arc(s+26*o+d,a-32*o+c,22*o,Math.PI,Math.PI*.45,!0),e.lineTo(s+22*o+d,a-14*o+c),e.arc(s+22*o+d,a-24*o+c,12*o,Math.PI*.45,Math.PI,!1),e.closePath(),e.fill(),e.beginPath(),e.arc(s-10*o+d,a+14*o+c,20*o,0,Math.PI*2),e.fill()};l("#00F2FE",-3,-2),l("#FE0979",3,2),l("#FFFFFF",0,0),e.restore()}drawFacebookIcon(e,t,n,i){e.save(),e.fillStyle="#1877F2",e.beginPath(),e.arc(t+i/2,n+i/2,i/2,0,Math.PI*2),e.fill(),e.fillStyle="#FFFFFF",e.font=`800 ${Math.round(i*.78)}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,e.textAlign="center",e.textBaseline="middle",e.fillText("f",t+i/2+6,n+i/2+8),e.restore()}drawInstagramIcon(e,t,n,i){e.save();const s=e.createLinearGradient(t,n+i,t+i,n);s.addColorStop(0,"#FFDC80"),s.addColorStop(.25,"#F77737"),s.addColorStop(.5,"#F56040"),s.addColorStop(.75,"#FD1D1D"),s.addColorStop(1,"#833AB4"),e.fillStyle=s,this.roundRect(e,t,n,i,i,28),e.fill(),e.strokeStyle="#FFFFFF",e.lineWidth=Math.round(i*.08);const a=i*.22;this.roundRect(e,t+a,n+a,i-a*2,i-a*2,20),e.stroke(),e.beginPath(),e.arc(t+i/2,n+i/2,i*.22,0,Math.PI*2),e.stroke(),e.fillStyle="#FFFFFF",e.beginPath(),e.arc(t+i*.74,n+i*.28,i*.05,0,Math.PI*2),e.fill(),e.restore()}roundRect(e,t,n,i,s,a){e.beginPath(),e.moveTo(t+a,n),e.lineTo(t+i-a,n),e.quadraticCurveTo(t+i,n,t+i,n+a),e.lineTo(t+i,n+s-a),e.quadraticCurveTo(t+i,n+s,t+i-a,n+s),e.lineTo(t+a,n+s),e.quadraticCurveTo(t,n+s,t,n+s-a),e.lineTo(t,n+a),e.quadraticCurveTo(t,n,t+a,n),e.closePath()}bindEvents(){const e=n=>{if(this.mouse.x=n.clientX/window.innerWidth*2-1,this.mouse.y=-(n.clientY/window.innerHeight)*2+1,!this.screenMesh)return;this.raycaster.setFromCamera(this.mouse,this.camera);const i=this.raycaster.intersectObject(this.screenMesh);if(i.length>0&&i[0].uv){const s=i[0].uv,a=s.x*this.canvasWidth,o=(1-s.y)*this.canvasHeight;let l=-1;this.cards.forEach((h,d)=>{const{x:c,y:u,w:f,h:m}=h.rect;a>=c&&a<=c+f&&o>=u&&o<=u+m&&(l=d)}),this.hoveredIndex!==l&&(this.hoveredIndex=l,document.body.style.cursor=l!==-1?"pointer":"default",this.draw())}else this.hoveredIndex!==-1&&(this.hoveredIndex=-1,document.body.style.cursor="default",this.draw())},t=n=>{if(this.mouse.x=n.clientX/window.innerWidth*2-1,this.mouse.y=-(n.clientY/window.innerHeight)*2+1,!this.screenMesh)return;this.raycaster.setFromCamera(this.mouse,this.camera);const i=this.raycaster.intersectObject(this.screenMesh);if(i.length>0&&i[0].uv){const s=i[0].uv,a=s.x*this.canvasWidth,o=(1-s.y)*this.canvasHeight;this.cards.forEach(l=>{const{x:h,y:d,w:c,h:u}=l.rect;a>=h&&a<=h+c&&o>=d&&o<=d+u&&(this.experience.sounds&&this.experience.sounds.playClick(),window.open(l.url,"_blank"))})}};window.addEventListener("pointermove",e,{passive:!0}),window.addEventListener("pointerdown",t)}update(e,t){}}class TS extends _g{constructor(e){super(e),this.type=yn}parse(e){const a=function(x,S){switch(x){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(S||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(S||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(S||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(S||""))}},c=function(x,S,P){S=S||1024;let I=x.pos,D=-1,F=0,N="",k=String.fromCharCode.apply(null,new Uint16Array(x.subarray(I,I+128)));for(;0>(D=k.indexOf(`
`))&&F<S&&I<x.byteLength;)N+=k,F+=k.length,I+=128,k+=String.fromCharCode.apply(null,new Uint16Array(x.subarray(I,I+128)));return-1<D?(x.pos+=F+D+1,N+k.slice(0,D)):!1},u=function(x){const S=/^#\?(\S+)/,P=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*FORMAT=(\S+)\s*$/,D=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,F={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let N,k;for((x.pos>=x.byteLength||!(N=c(x)))&&a(1,"no header found"),(k=N.match(S))||a(3,"bad initial token"),F.valid|=1,F.programtype=k[1],F.string+=N+`
`;N=c(x),N!==!1;){if(F.string+=N+`
`,N.charAt(0)==="#"){F.comments+=N+`
`;continue}if((k=N.match(P))&&(F.gamma=parseFloat(k[1])),(k=N.match(R))&&(F.exposure=parseFloat(k[1])),(k=N.match(I))&&(F.valid|=2,F.format=k[1]),(k=N.match(D))&&(F.valid|=4,F.height=parseInt(k[1],10),F.width=parseInt(k[2],10)),F.valid&2&&F.valid&4)break}return F.valid&2||a(3,"missing format specifier"),F.valid&4||a(3,"missing image size specifier"),F},f=function(x,S,P){const R=S;if(R<8||R>32767||x[0]!==2||x[1]!==2||x[2]&128)return new Uint8Array(x);R!==(x[2]<<8|x[3])&&a(3,"wrong scanline width");const I=new Uint8Array(4*S*P);I.length||a(4,"unable to allocate buffer space");let D=0,F=0;const N=4*R,k=new Uint8Array(4),B=new Uint8Array(N);let Z=P;for(;Z>0&&F<x.byteLength;){F+4>x.byteLength&&a(1),k[0]=x[F++],k[1]=x[F++],k[2]=x[F++],k[3]=x[F++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=R)&&a(3,"bad rgbe scanline format");let Y=0,ie;for(;Y<N&&F<x.byteLength;){ie=x[F++];const ee=ie>128;if(ee&&(ie-=128),(ie===0||Y+ie>N)&&a(3,"bad scanline data"),ee){const Ae=x[F++];for(let je=0;je<ie;je++)B[Y++]=Ae}else B.set(x.subarray(F,F+ie),Y),Y+=ie,F+=ie}const ue=R;for(let ee=0;ee<ue;ee++){let Ae=0;I[D]=B[ee+Ae],Ae+=R,I[D+1]=B[ee+Ae],Ae+=R,I[D+2]=B[ee+Ae],Ae+=R,I[D+3]=B[ee+Ae],D+=4}Z--}return I},m=function(x,S,P,R){const I=x[S+3],D=Math.pow(2,I-128)/255;P[R+0]=x[S+0]*D,P[R+1]=x[S+1]*D,P[R+2]=x[S+2]*D,P[R+3]=1},_=function(x,S,P,R){const I=x[S+3],D=Math.pow(2,I-128)/255;P[R+0]=ua.toHalfFloat(Math.min(x[S+0]*D,65504)),P[R+1]=ua.toHalfFloat(Math.min(x[S+1]*D,65504)),P[R+2]=ua.toHalfFloat(Math.min(x[S+2]*D,65504)),P[R+3]=ua.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;const p=u(g),b=p.width,y=p.height,v=f(g.subarray(g.pos),b,y);let E,w,A;switch(this.type){case en:A=v.length/4;const x=new Float32Array(A*4);for(let P=0;P<A;P++)m(v,P*4,x,P*4);E=x,w=en;break;case yn:A=v.length/4;const S=new Uint16Array(A*4);for(let P=0;P<A;P++)_(v,P*4,S,P*4);E=S,w=yn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:b,height:y,data:E,header:p.string,gamma:p.gamma,exposure:p.exposure,type:w}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(a,o){switch(a.type){case en:case yn:a.colorSpace=Jt,a.minFilter=Qe,a.magFilter=Qe,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,s,n,i)}}class wS extends TS{constructor(e){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(e)}}class AS{constructor(e){this.experience=e,this.scene=this.experience.scene,this.renderer=this.experience.renderer.instance,this.setHDRI(),this.setLights()}setHDRI(){new wS().load("./textures/studio.hdr",t=>{t.mapping=ka,this.scene.environment=t,this.scene.environmentIntensity=.85})}setLights(){var l;const e=new Sg(16777215,.4);this.scene.add(e);const n=((l=this.experience.sizes)==null?void 0:l.isMobile)?1024:2048,i=new $l(16774634,1.8);i.position.set(2,8,4),i.castShadow=!0,i.shadow.mapSize.width=n,i.shadow.mapSize.height=n,i.shadow.camera.near=.5,i.shadow.camera.far=25,i.shadow.bias=-8e-5,i.shadow.radius=2,this.scene.add(i);const s=new Ha(16777215,3,15,Math.PI/3,.5,1);s.position.set(0,6,0),s.target.position.set(0,.5,0),this.scene.add(s);const a=new Ha(61695,4.5,20,Math.PI/4,.4,1);a.position.set(-6,3.5,0),a.target.position.set(0,.5,0),this.scene.add(a),this.scene.add(a.target);const o=new Ha(16755200,3.8,20,Math.PI/4,.4,1);o.position.set(5,3.5,-2),o.target.position.set(0,.5,0),this.scene.add(o),this.scene.add(o.target)}}function fd(r,e){if(e===Vp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===sl||e===kd){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===sl)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function RS(r){const e=new Map,t=new Map,n=r.clone();return op(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function op(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)op(r.children[n],e.children[n],t)}class CS extends bs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new FS(t)}),this.register(function(t){return new OS(t)}),this.register(function(t){return new WS(t)}),this.register(function(t){return new jS(t)}),this.register(function(t){return new qS(t)}),this.register(function(t){return new kS(t)}),this.register(function(t){return new US(t)}),this.register(function(t){return new BS(t)}),this.register(function(t){return new zS(t)}),this.register(function(t){return new LS(t)}),this.register(function(t){return new GS(t)}),this.register(function(t){return new NS(t)}),this.register(function(t){return new HS(t)}),this.register(function(t){return new VS(t)}),this.register(function(t){return new DS(t)}),this.register(function(t){return new pd(t,We.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new pd(t,We.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new XS(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const h=Nr.extractUrlBase(e);a=Nr.resolveURL(h,this.path)}else a=Nr.extractUrlBase(e);this.manager.itemStart(e);const o=function(h){i?i(h):console.error(h),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Jl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){try{s.parse(h,a,function(d){t(d),s.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===cp){try{a[We.KHR_BINARY_GLTF]=new KS(e)}catch(c){i&&i(c);return}s=JSON.parse(a[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new oM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const c=this.pluginCallbacks[d](h);c.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[c.name]=c,a[c.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const c=s.extensionsUsed[d],u=s.extensionsRequired||[];switch(c){case We.KHR_MATERIALS_UNLIT:a[c]=new IS;break;case We.KHR_DRACO_MESH_COMPRESSION:a[c]=new YS(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:a[c]=new JS;break;case We.KHR_MESH_QUANTIZATION:a[c]=new ZS;break;default:u.indexOf(c)>=0&&o[c]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}h.setExtensions(a),h.setPlugins(o),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function PS(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function At(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class DS{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let h;const d=new Ie(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],Jt);const c=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new $l(d),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new ta(d),h.distance=c;break;case"spot":h=new Ha(d),h.distance=c,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),Xn(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class IS{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return Sn}extendParams(e,t,n){const i=[];e.color=new Ie(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Jt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,St))}return Promise.all(i)}}class LS{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class FS{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return At(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Re(s,s)}return Promise.all(i)}}class OS{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){return At(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class NS{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return At(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class kS{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){return At(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Jt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,St)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class US{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return At(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class BS{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){return At(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(s[0],s[1],s[2],Jt),Promise.all(i)}}class zS{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){return At(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class GS{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){return At(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(s[0],s[1],s[2],Jt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,St)),Promise.all(i)}}class VS{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){return At(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class HS{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return At(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class WS{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class jS{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const h=n.options.manager.getHandler(o.uri);h!==null&&(l=h)}return n.loadTextureImage(e,a.source,l)}}class qS{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const h=n.options.manager.getHandler(o.uri);h!==null&&(l=h)}return n.loadTextureImage(e,a.source,l)}}class pd{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,h=i.byteLength||0,d=i.count,c=i.byteStride,u=new Uint8Array(o,l,h);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,c,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(d*c);return a.decodeGltfBuffer(new Uint8Array(f),d,c,u,i.mode,i.filter),f})})}else return null}}class XS{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==Pn.TRIANGLES&&h.mode!==Pn.TRIANGLE_STRIP&&h.mode!==Pn.TRIANGLE_FAN&&h.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const h in a)o.push(this.parser.getDependency("accessor",a[h]).then(d=>(l[h]=d,l[h])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(h=>{const d=h.pop(),c=d.isGroup?d.children:[d],u=h[0].count,f=[];for(const m of c){const _=new Ue,g=new O,p=new cn,b=new O(1,1,1),y=new jm(m.geometry,m.material,u);for(let v=0;v<u;v++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&b.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,_.compose(g,p,b));for(const v in l)if(v==="_COLOR_0"){const E=l[v];y.instanceColor=new al(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,l[v]);vt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}}const cp="glTF",Ar=12,md={JSON:1313821514,BIN:5130562};class KS{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ar),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==cp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ar,s=new DataView(e,Ar);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===md.JSON){const h=new Uint8Array(e,Ar+a,o);this.content=n.decode(h)}else if(l===md.BIN){const h=Ar+a;this.body=e.slice(h,h+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class YS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},h={};for(const d in a){const c=wl[d]||d.toLowerCase();o[c]=a[d]}for(const d in e.attributes){const c=wl[d]||d.toLowerCase();if(a[d]!==void 0){const u=n.accessors[e.attributes[d]],f=Js[u.componentType];h[c]=f.name,l[c]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(d){return new Promise(function(c,u){i.decodeDracoFile(d,function(f){for(const m in f.attributes){const _=f.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}c(f)},o,h,Jt,u)})})}}class JS{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ZS{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class lp extends dr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,h=o*3,d=i-t,c=(n-t)/d,u=c*c,f=u*c,m=e*h,_=m-h,g=-2*f+3*u,p=f-u,b=1-g,y=p-u+c;for(let v=0;v!==o;v++){const E=a[_+v+o],w=a[_+v+l]*d,A=a[m+v+o],x=a[m+v]*d;s[v]=b*E+y*w+g*A+p*x}return s}}const $S=new cn;class QS extends lp{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return $S.fromArray(s).normalize().toArray(s),s}}const Pn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Js={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gd={9728:It,9729:Qe,9984:Cd,9985:Ua,9986:Cr,9987:Zn},_d={33071:vn,33648:Ka,10497:_s},fc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Oi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},eM={CUBICSPLINE:void 0,LINEAR:Hr,STEP:Vr},pc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tM(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new mt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:sn})),r.DefaultMaterial}function rs(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Xn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function nM(r,e,t){let n=!1,i=!1,s=!1;for(let h=0,d=e.length;h<d;h++){const c=e[h];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(i=!0),c.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let h=0,d=e.length;h<d;h++){const c=e[h];if(n){const u=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):r.attributes.position;a.push(u)}if(i){const u=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):r.attributes.normal;o.push(u)}if(s){const u=c.COLOR_0!==void 0?t.getDependency("accessor",c.COLOR_0):r.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(h){const d=h[0],c=h[1],u=h[2];return n&&(r.morphAttributes.position=d),i&&(r.morphAttributes.normal=c),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function iM(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sM(r){let e;const t=r.extensions&&r.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+mc(t.attributes):e=r.indices+":"+mc(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+mc(r.targets[n]);return e}function mc(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Al(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rM(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const aM=new Ue;class oM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new PS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new bg(this.options.manager):this.textureLoader=new Mg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Jl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return rs(s,o,i),Xn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[h,d]of a.children.entries())s(d,o.children[h])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Nr.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=fc[i.type],o=Js[i.componentType],l=i.normalized===!0,h=new o(i.count*a);return Promise.resolve(new nn(h,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=fc[i.type],h=Js[i.componentType],d=h.BYTES_PER_ELEMENT,c=d*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,g;if(f&&f!==c){const p=Math.floor(u/f),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(b);y||(_=new h(o,p*f,i.count*f/d),y=new Um(_,f/d),t.cache.add(b,y)),g=new Wl(y,l,u%f/d,m)}else o===null?_=new h(i.count*l):_=new h(o,u,i.count*l),g=new nn(_,l,m);if(i.sparse!==void 0){const p=fc.SCALAR,b=Js[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,E=new b(a[1],y,i.sparse.count*p),w=new h(a[2],v,i.sparse.count*l);o!==null&&(g=new nn(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,x=E.length;A<x;A++){const S=E[A];if(g.setX(S,w[A*l]),l>=2&&g.setY(S,w[A*l+1]),l>=3&&g.setZ(S,w[A*l+2]),l>=4&&g.setW(S,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const u=(s.samplers||{})[a.sampler]||{};return d.magFilter=gd[u.magFilter]||Qe,d.minFilter=gd[u.minFilter]||Zn,d.wrapS=_d[u.wrapS]||_s,d.wrapT=_d[u.wrapT]||_s,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==It&&d.minFilter!==Qe,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(c=>c.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",h=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(c){h=!0;const u=new Blob([c],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(c){return new Promise(function(u,f){let m=u;t.isImageBitmapLoader===!0&&(m=function(_){const g=new Lt(_);g.needsUpdate=!0,u(g)}),t.load(Nr.resolveURL(c,s.path),m,void 0,f)})}).then(function(c){return h===!0&&o.revokeObjectURL(l),Xn(c,a),c.userData.mimeType=a.mimeType||rM(a.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),c});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Xd,ni.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new qd,ni.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return mt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},h=[];if(l[We.KHR_MATERIALS_UNLIT]){const c=i[We.KHR_MATERIALS_UNLIT];a=c.getMaterialType(),h.push(c.extendParams(o,s,t))}else{const c=s.pbrMetallicRoughness||{};if(o.color=new Ie(1,1,1),o.opacity=1,Array.isArray(c.baseColorFactor)){const u=c.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Jt),o.opacity=u[3]}c.baseColorTexture!==void 0&&h.push(t.assignTexture(o,"map",c.baseColorTexture,St)),o.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,o.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(o,"metalnessMap",c.metallicRoughnessTexture)),h.push(t.assignTexture(o,"roughnessMap",c.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Un);const d=s.alphaMode||pc.OPAQUE;if(d===pc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===pc.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Sn&&(h.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Re(1,1),s.normalTexture.scale!==void 0)){const c=s.normalTexture.scale;o.normalScale.set(c,c)}if(s.occlusionTexture!==void 0&&a!==Sn&&(h.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Sn){const c=s.emissiveFactor;o.emissive=new Ie().setRGB(c[0],c[1],c[2],Jt)}return s.emissiveTexture!==void 0&&a!==Sn&&h.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,St)),Promise.all(h).then(function(){const c=new a(o);return s.name&&(c.name=s.name),Xn(c,s),t.associations.set(c,{materials:e}),s.extensions&&rs(i,c,s),c})}createUniqueName(e){const t=$e.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return bd(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const h=e[o],d=sM(h),c=i[d];if(c)a.push(c.promise);else{let u;h.extensions&&h.extensions[We.KHR_DRACO_MESH_COMPRESSION]?u=s(h):u=bd(new Ht,h,t),i[d]={primitive:h,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,h=a.length;l<h;l++){const d=a[l].material===void 0?tM(this.cache):this.getDependency("material",a[l].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const h=l.slice(0,l.length-1),d=l[l.length-1],c=[];for(let f=0,m=d.length;f<m;f++){const _=d[f],g=a[f];let p;const b=h[f];if(g.mode===Pn.TRIANGLES||g.mode===Pn.TRIANGLE_STRIP||g.mode===Pn.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new Vm(_,b):new me(_,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Pn.TRIANGLE_STRIP?p.geometry=fd(p.geometry,kd):g.mode===Pn.TRIANGLE_FAN&&(p.geometry=fd(p.geometry,sl));else if(g.mode===Pn.LINES)p=new Ym(_,b);else if(g.mode===Pn.LINE_STRIP)p=new Xl(_,b);else if(g.mode===Pn.LINE_LOOP)p=new Jm(_,b);else if(g.mode===Pn.POINTS)p=new Zm(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&iM(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Xn(p,s),g.extensions&&rs(i,p,g),t.assignFinalMaterial(p),c.push(p)}for(let f=0,m=c.length;f<m;f++)t.associations.set(c[f],{meshes:e,primitives:f});if(c.length===1)return s.extensions&&rs(i,c[0],s),c[0];const u=new on;s.extensions&&rs(i,u,s),t.associations.set(u,{meshes:e});for(let f=0,m=c.length;f<m;f++)u.add(c[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Qt(zd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new fo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Xn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let h=0,d=a.length;h<d;h++){const c=a[h];if(c){o.push(c);const u=new Ue;s!==null&&u.fromArray(s.array,h*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new jl(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],h=[],d=[];for(let c=0,u=i.channels.length;c<u;c++){const f=i.channels[c],m=i.samplers[f.sampler],_=f.target,g=_.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,b=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),h.push(m),d.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(h),Promise.all(d)]).then(function(c){const u=c[0],f=c[1],m=c[2],_=c[3],g=c[4],p=[];for(let y=0,v=u.length;y<v;y++){const E=u[y],w=f[y],A=m[y],x=_[y],S=g[y];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const P=n._createAnimationTracks(E,w,A,x,S);if(P)for(let R=0;R<P.length;R++)p.push(P[R])}const b=new cl(s,void 0,p);return Xn(b,i),b})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,h=i.weights.length;l<h;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let h=0,d=o.length;h<d;h++)a.push(n.getDependency("node",o[h]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(h){const d=h[0],c=h[1],u=h[2];u!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(u,aM)});for(let f=0,m=c.length;f<m;f++)d.add(c[f]);if(d.userData.pivot!==void 0&&c.length>0){const f=d.userData.pivot,m=c[0];d.pivot=new O().fromArray(f),d.position.x-=f[0],d.position.y-=f[1],d.position.z-=f[2],m.position.set(0,0,0),delete d.userData.pivot}return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(h){return i._getNodeRef(i.cameraCache,s.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){o.push(h)}),this.nodeCache[e]=Promise.all(o).then(function(h){let d;if(s.isBone===!0?d=new jd:h.length>1?d=new on:h.length===1?d=h[0]:d=new vt,d!==h[0])for(let c=0,u=h.length;c<u;c++)d.add(h[c]);if(s.name&&(d.userData.name=s.name,d.name=a),Xn(d,s),s.extensions&&rs(n,d,s),s.matrix!==void 0){const c=new Ue;c.fromArray(s.matrix),d.applyMatrix4(c)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);if(!i.associations.has(d))i.associations.set(d,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const c=i.associations.get(d);i.associations.set(d,{...c})}return i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new on;n.name&&(s.name=i.createUniqueName(n.name)),Xn(s,n),n.extensions&&rs(t,s,n);const a=n.nodes||[],o=[];for(let l=0,h=a.length;l<h;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let d=0,c=l.length;d<c;d++){const u=l[d];u.parent!==null?s.add(RS(u)):s.add(u)}const h=d=>{const c=new Map;for(const[u,f]of i.associations)(u instanceof ni||u instanceof Lt)&&c.set(u,f);return d.traverse(u=>{const f=i.associations.get(u);f!=null&&c.set(u,f)}),c};return i.associations=h(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];Oi[s.path]===Oi.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(o);let h;switch(Oi[s.path]){case Oi.weights:h=nr;break;case Oi.rotation:h=ir;break;case Oi.translation:case Oi.scale:h=sr;break;default:switch(n.itemSize){case 1:h=nr;break;case 2:case 3:default:h=sr;break}break}const d=i.interpolation!==void 0?eM[i.interpolation]:Hr,c=this._getArrayFromAccessor(n);for(let u=0,f=l.length;u<f;u++){const m=new h(l[u]+"."+Oi[s.path],t.array,c,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Al(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ir?QS:lp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function cM(r,e,t){const n=e.attributes,i=new oi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,h=o.max;if(l!==void 0&&h!==void 0){if(i.set(new O(l[0],l[1],l[2]),new O(h[0],h[1],h[2])),o.normalized){const d=Al(Js[o.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new O,l=new O;for(let h=0,d=s.length;h<d;h++){const c=s[h];if(c.POSITION!==void 0){const u=t.json.accessors[c.POSITION],f=u.min,m=u.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),u.normalized){const _=Al(Js[u.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new ci;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function bd(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=wl[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return qe.workingColorSpace!==Jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),Xn(r,e),cM(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?nM(r,e.targets,t):r})}var lM=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuec:W:Odkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq;lZkdbk;jYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbhodnawTmbaxa8Acd4fRbbhokaocFeGh5cbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q1jjbfcj1jjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bbarcwf9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfag9c8F1:NghcKtc8F91aicdfa8J9c8N1:Nfg8KRbbG86bbarcVfcba8KahcjeGcr4fghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fag9c8F1:NgicKtc8F91aha8J9c8N1:NfghRbbG86bbarc96fcbahaicjeGcr4fgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbb83bbarcwfaicwf8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbcbaocl49Rh8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E93aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:XseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbaxcefgOavaiaqaDcsGfRbbgscl49RcsGcdtfydbascz6gPEhDavaias9RcsGcdtfydbaOaPfgzascsGgOEhsaOThOdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiaPfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaOfhiazaOfhxxekaxcbalRbbgHEgAaDc;:eSgDfhzaHcsGhCaHcl4hXdndnaHcs0mbazcefhOxekazhOavaiaX9RcsGcdtfydbhzkdndnaCmbaOcefhxxekaOhxavaiaH9RcsGcdtfydbhOkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhAascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaAhDxekaDcefhDkasce4cbasceG9R7amfgmhAkdndnaXcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhzaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkazhsxekascefhskaPce4cbaPceG9R7amfgmhzkdndnaCcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhOaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkaOhlxekalcefhlkaPce4cbaPceG9R7amfgmhOkdndnadcd9hmbabarcetfgDaA87ebaDclfaO87ebaDcdfaz87ebxekabarcdtfgDaABdbaDcwfaOBdbaDclfazBdbkavc;abfaocitfgDazBdbaDaABdlavaicdtfaABdbavc;abfaocefcsGcitfgDaOBdbaDazBdlavaicefgicsGcdtfazBdbavc;abfaocdfcsGcitfgDaABdbaDaOBdlavaiaHcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnaecvfal9nmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk::ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxabaiarcefciGfcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGfgkcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkabaiarcufciGfcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkabakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K1jjbgeabcifc98GfgbBd:K1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;teeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk:3eedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdxaialBdwaialBdlaialBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk81dbcjwk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:Kwkl8WNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuec:q:6dkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:Ctklbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:183lYud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxavaialfgmar9Rgoad;8qbbcj;abad9Uc;WFbGcjdadca0EhPdndndnadTmbaoadfhscbhzinaeaz9nmdamax9RaD6miabazad2fhHaxaDfhOaPaeaz9RazaPfae6EgAcsfgocl4cifcd4hCavcj;cbfaoc9WGgXcetfhQavcj;cbfaXci2fhLavcj;cbfaXfhKcbhYaoc;ab6h8AincbhodnawTmbaxaYcd4fRbbhokaocFeGhEcbh3avcj;cbfh5indndndndnaEa3cet4ciGgoc9:fPdebdkamaO9RaX6mwavcj;cbfa3aX2faOaX;8qbbaOaAfhOxdkavcj;cbfa3aX2fcbaX;8kbxekamaO9RaC6moaoclVcbawEhraOaCfhocbhidna8Ambamao9Rc;Gb6mbcbhlina5alfhidndndndndndnaOalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaoclffahc:q:yjjbfRbbfhoxikaiaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaocwffahc:q:yjjbfRbbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaaaocdffahc:q:yjjbfRbbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaoclffahc:q:yjjbfRbbfhoxikaiczfaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaocwffahc:q:yjjbfRbbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaaaocdffahc:q:yjjbfRbbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaoclffahc:q:yjjbfRbbfhoxikaicafaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaocwffahc:q:yjjbfRbbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaaaocdffahc:q:yjjbfRbbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngicitc:q1jjbfpbibaic:q:yjjbfRbbgipsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaiaoclffaqc:q:yjjbfRbbfhoxikaic8Wfaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngicitc:q1jjbfpbibaic:q:yjjbfRbbgipsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaiaocwffaqc:q:yjjbfRbbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitc:q1jjbfpbibaic:q:yjjbfRbbgipsaoRbegqcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqc:q:yjjbfRbbfhokalc;abfhialcjefaX0meaihlamao9Rc;Fb0mbkkdnaiaX9pmbaici4hlinamao9RcK6mwa5aifhqdndndndndndnaOaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spkbbaaaoclffahc:q:yjjbfRbbfhoxikaqaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spkbbaaaocwffahc:q:yjjbfRbbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpkbbaaaocdffahc:q:yjjbfRbbfhokalcdfhlaiczfgiaX6mbkkaohOaoTmoka5aXfh5a3cefg3cl9hmbkdndndndnawTmbasaYcd4fRbbglciGPlbedwbkaXTmdavcjdfaYfhlavaYfpbdbhgcbhoinalavcj;cbfaofpblbg8JaKaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaQaofpblbg8MaLaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Ecep9Ta8Epxeeeeeeeeeeeeeeeeg8Fp9op9Hp9rg8Eagp9Uggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp9Uggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp9Uggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9Abbbaladfglaga8LaypmwDKYqk8AExm35Ps8E8Fg8Ecep9Ta8Ea8Fp9op9Hp9rg8Ep9Uggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp9Uggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp9Uggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9Abbbaladfglaga8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Ecep9Ta8Ea8Fp9op9Hp9rg8Ep9Uggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp9Uggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp9Uggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9Abbbaladfglaga8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Ecep9Ta8Ea8Fp9op9Hp9rg8Ep9Ug8Fp9Abbbaladfgla8Fa8Ea8Epmlvorlvorlvorlvorp9Ug8Fp9Abbbaladfgla8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9Ug8Fp9Abbbaladfgla8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9AbbbaladfhlaoczfgoaX6mbxikkaXTmeavcjdfaYfhlavaYfpbdbhgcbhoinalavcj;cbfaofpblbg8JaKaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaQaofpblbg8MaLaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Ecep:nea8Epxebebebebebebebebg8Fp9op:bep9rg8Eagp:oeggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp:oeggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp:oeggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9Abbbaladfglaga8LaypmwDKYqk8AExm35Ps8E8Fg8Ecep:nea8Ea8Fp9op:bep9rg8Ep:oeggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp:oeggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp:oeggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9Abbbaladfglaga8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Ecep:nea8Ea8Fp9op:bep9rg8Ep:oeggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp:oeggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp:oeggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9Abbbaladfglaga8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Ecep:nea8Ea8Fp9op:bep9rg8Ep:oeg8Fp9Abbbaladfgla8Fa8Ea8Epmlvorlvorlvorlvorp:oeg8Fp9Abbbaladfgla8Fa8Ea8EpmwDqkwDqkwDqkwDqkp:oeg8Fp9Abbbaladfgla8Fa8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9AbbbaladfhlaoczfgoaX6mbxdkkaXTmbcbhocbalcl4gl9Rc8FGhiavcjdfaYfhravaYfpbdbh8Finaravcj;cbfaofpblbggaKaofpblbg8JpmbzeHdOiAlCvXoQrLg8KaQaofpblbg8LaLaofpblbg8MpmbzeHdOiAlCvXoQrLg8NpmbezHdiOAlvCXorQLg8Eaip:Rea8Ealp:Sep9qg8Ea8Fp9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9Abbbaradfgra8Fa8Ka8NpmwDKYqk8AExm35Ps8E8Fg8Eaip:Rea8Ealp:Sep9qg8Ep9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9Abbbaradfgra8Faga8JpmwKDYq8AkEx3m5P8Es8Fgga8La8MpmwKDYq8AkEx3m5P8Es8Fg8JpmbezHdiOAlvCXorQLg8Eaip:Rea8Ealp:Sep9qg8Ep9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9Abbbaradfgra8Faga8JpmwDKYqk8AExm35Ps8E8Fg8Eaip:Rea8Ealp:Sep9qg8Ep9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9AbbbaradfhraoczfgoaX6mbkkaYclfgYad6mbkaHavcjdfaAad2;8qbbavavcjdfaAcufad2fad;8qbbaAazfhzc9:hoaOhxaOmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdaPaeao9RaoaPfae6Eaofgoae6mbkaial9Rhxkcbc99amax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbk:TseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbaxcefgOavaiaqaDcsGfRbbgscl49RcsGcdtfydbascz6gPEhDavaias9RcsGcdtfydbaOaPfgzascsGgOEhsaOThOdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiaPfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaOfhiazaOfhxxekaxcbalRbbgHEgAaDc;:eSgDfhzaHcsGhCaHcl4hXdndnaHcs0mbazcefhOxekazhOavaiaX9RcsGcdtfydbhzkdndnaCmbaOcefhxxekaOhxavaiaH9RcsGcdtfydbhOkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhAascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaAhDxekaDcefhDkasce4cbasceG9R7amfgmhAkdndnaXcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhzaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkazhsxekascefhskaPce4cbaPceG9R7amfgmhzkdndnaCcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhOaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkaOhlxekalcefhlkaPce4cbaPceG9R7amfgmhOkdndnadcd9hmbabarcetfgDaA87ebaDclfaO87ebaDcdfaz87ebxekabarcdtfgDaABdbaDcwfaOBdbaDclfazBdbkavc;abfaocitfgDazBdbaDaABdlavaicdtfaABdbavc;abfaocefcsGcitfgDaOBdbaDazBdlavaicefgicsGcdtfazBdbavc;abfaocdfcsGcitfgDaABdbaDaOBdlavaiaHcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnaecvfal9nmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:2Pliur97eue978Jjjjjbc8W9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskaipxFubbFubbFubbFubbgxpklbdnalTmbcbhvabhdinadczfgmampbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraipblbaDaopmlvorxmPsCXQL358E8Fp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgPp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;MeawaqawaPp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiczfpxbbbbbbbbbbbbbbbbgopklbaiaopklbaiabalcitfgdaeciGglcitgv;8qbbaiaxpkladnalTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraipblaaDaopmlvorxmPsCXQL358E8Fp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgPp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;MeawaqawaPp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkadaiav;8qbbkk:Iwllue97euo978Jjjjjbca9Rhidnaec98GglTmbcbhvabhoinaocKfpx:ji:1S:ji:1S:ji:1S:ji:1SaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkpxibbbibbbibbbibbbp9qgxp;6ep;Negmaxaxp:1ep;7egxaxp;KearaDpmbediwDqkzHOAKY8AEgxczp:Reczp:Sep;6egrarp;Meaxczp:Sep;6egDaDp;Meaqczp:Reczp:Sep;6egqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gxp;KepxFFbbFFbbFFbbFFbbgPp9oamaDp;Meaxp;Keczp:Rep9qgDamarp;Meaxp;KeaPp9oamaqp;Meaxp;Keczp:Rep9qgxpmwDKYqk8AExm35Ps8E8Fgrp5eakclp:RegmpEi:T:j83ibawarp5bampEd:T:j83ibaocwfaDaxpmbezHdiOAlvCXorQLgxp5eampEe:T:j83ibaoaxp5bampEb:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiczfpxbbbbbbbbbbbbbbbbgmpklbaiampklbaiabalcitfgoaeciGgvcitgw;8qbbdnavTmbaipx:ji:1S:ji:1S:ji:1S:ji:1SaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkpxibbbibbbibbbibbbp9qgxp;6ep;Negmaxaxp:1ep;7egxaxp;KearaDpmbediwDqkzHOAKY8AEgxczp:Reczp:Sep;6egrarp;Meaxczp:Sep;6egDaDp;Meaqczp:Reczp:Sep;6egqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gxp;KepxFFbbFFbbFFbbFFbbgPp9oamaDp;Meaxp;Keczp:Rep9qgDamarp;Meaxp;KeaPp9oamaqp;Meaxp;Keczp:Rep9qgxpmwDKYqk8AExm35Ps8E8Fgrp5eakclp:RegmpEi:T:j83iKaiarp5bampEd:T:j83izaiaDaxpmbezHdiOAlvCXorQLgxp5eampEe:T:j83iwaiaxp5bampEb:T:j83ibkaoaiaw;8qbbkk;uddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaic8WfpxbbbbbbbbbbbbbbbbgopklbaicafaopklbaiczfaopklbaiaopklbaiabavcdtfgdalciGgecdtgv;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkadaiav;8qbbkk:CPvdue97euw97eu8Jjjjjbc8W9Rhiaec98Ghldndnadcl9hmbaipxbbbbbbbbbbbbbbbbgvpklbdnalTmbcbhoabhdinadpbbbhradpxbbuJbbuJbbuJbbuJaipblbarcKp:Tep9qgwcep:Seawp9qgDcdp:SeaDp9qgDclp:SeaDp9qgqp;6ep;NegDarcwp:RecKp:SegkarpxFbbbFbbbFbbbFbbbgxp9ogmp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gPp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oaDamakp:Xearczp:RecKp:Segrp:Uep;6ep;MeaPp;Keaxp9op9qaDamakarp:Uep:Xep;6ep;MeaPp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qaDaqawcep:Rep9oawpxebbbebbbebbbebbbp9op9qp;6ep;MeaPp;KecKp:Rep9qpkbbadczfhdaoclfgoal6mbkkalaeSmeaiavpklaaicafabalcdtfgdaeciGglcdtgo;8qbbaiavpklbdnalTmbaipblahraipxbbuJbbuJbbuJbbuJaipblbarcKp:Tep9qgwcep:Seawp9qgDcdp:SeaDp9qgDclp:SeaDp9qgqp;6ep;NegDarcwp:RecKp:SegkarpxFbbbFbbbFbbbFbbbgxp9ogmp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gPp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oaDamakp:Xearczp:RecKp:Segrp:Uep;6ep;MeaPp;Keaxp9op9qaDamakarp:Uep:Xep;6ep;MeaPp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qaDaqawcep:Rep9oawpxebbbebbbebbbebbbp9op9qp;6ep;MeaPp;KecKp:Rep9qpklakadaicafao;8qbbskaipxbbbbbbbbbbbbbbbbgvpklbdnalTmbcbhoabhdinadczfgspxbFu9hbFu9hbFu9hbFu9hadpbbbgDaspbbbgPpmlvorxmPsCXQL358E8Fgmczp:Teaipblbp9qgrcep:Searp9qgwcdp:Seawp9qgwclp:Seawp9qgwcwp:Seawp9qgqp;6ep;NegwaDaPpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbgPp9ogkaDczp:Segxp:Ueamczp:Reczp:Segmp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gDp;KeaPp9oawakaxamp:Uep:Xep;6ep;MeaDp;Keczp:Rep9qgxawaqarcep:Rep9oarpxebbbebbbebbbebbbp9op9qp;6ep;MeaDp;Keczp:Reawamakp:Uep;6ep;MeaDp;KeaPp9op9qgrpmwDKYqk8AExm35Ps8E8FpkbbadaxarpmbezHdiOAlvCXorQLpkbbadcafhdaoclfgoal6mbkkalaeSmbaiczfpxbbbbbbbbbbbbbbbbgrpklbaiarpklbaiabalcitfgdaeciGglcitgo;8qbbaiavpkladnalTmbaipxbFu9hbFu9hbFu9hbFu9haipblbgDaipblzgPpmlvorxmPsCXQL358E8Fgmczp:Teaipblap9qgrcep:Searp9qgwcdp:Seawp9qgwclp:Seawp9qgwcwp:Seawp9qgqp;6ep;NegwaDaPpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbgPp9ogkaDczp:Segxp:Ueamczp:Reczp:Segmp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gDp;KeaPp9oawakaxamp:Uep:Xep;6ep;MeaDp;Keczp:Rep9qgxawaqarcep:Rep9oarpxebbbebbbebbbebbbp9op9qp;6ep;MeaDp;Keczp:Reawamakp:Uep;6ep;MeaDp;KeaPp9op9qgrpmwDKYqk8AExm35Ps8E8FpklzaiaxarpmbezHdiOAlvCXorQLpklbkadaiao;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(r),s,a=WebAssembly.instantiate(i,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var b=new Uint8Array(p.length),y=0;y<p.length;++y){var v=p.charCodeAt(y);b[y]=v>96?v-97:v>64?v-39:v+4}for(var E=0,y=0;y<p.length;++y)b[E++]=b[y]<60?n[b[y]]:(b[y]-60)*64+b[++y];return b.buffer.slice(0,E)}function l(p,b,y,v,E,w,A){var x=p.exports.sbrk,S=v+3&-4,P=x(S*E),R=x(w.length),I=new Uint8Array(p.exports.memory.buffer);I.set(w,R);var D=b(P,v,E,R,w.length);if(D==0&&A&&A(P,S,E),y.set(I.subarray(P,P+v*E)),x(P-x(0)),D!=0)throw new Error("Malformed buffer data: "+D)}var h={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},d={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},c=[],u=0;function f(p){var b={object:new Worker(p),pending:0,requests:{}};return b.object.onmessage=function(y){var v=y.data;b.pending-=v.count,b.requests[v.id][v.action](v.value),delete b.requests[v.id]},b}function m(p){for(var b="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+l.toString()+g.toString(),y=new Blob([b],{type:"text/javascript"}),v=URL.createObjectURL(y),E=c.length;E<p;++E)c[E]=f(v);for(var E=p;E<c.length;++E)c[E].object.postMessage({});c.length=p,URL.revokeObjectURL(v)}function _(p,b,y,v,E){for(var w=c[0],A=1;A<c.length;++A)c[A].pending<w.pending&&(w=c[A]);return new Promise(function(x,S){var P=new Uint8Array(y),R=++u;w.pending+=p,w.requests[R]={resolve:x,reject:S},w.object.postMessage({id:R,count:p,size:b,source:P,mode:v,filter:E},[P.buffer])})}function g(p){var b=p.data;if(!b.id)return self.close();self.ready.then(function(y){try{var v=new Uint8Array(b.count*b.size);l(y,y.exports[b.mode],v,b.count,b.size,b.source,y.exports[b.filter]),self.postMessage({id:b.id,count:b.count,action:"resolve",value:v},[v.buffer])}catch(E){self.postMessage({id:b.id,count:b.count,action:"reject",value:E})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,b,y,v,E){l(s,s.exports.meshopt_decodeVertexBuffer,p,b,y,v,s.exports[h[E]])},decodeIndexBuffer:function(p,b,y,v){l(s,s.exports.meshopt_decodeIndexBuffer,p,b,y,v)},decodeIndexSequence:function(p,b,y,v){l(s,s.exports.meshopt_decodeIndexSequence,p,b,y,v)},decodeGltfBuffer:function(p,b,y,v,E,w){l(s,s.exports[d[E]],p,b,y,v,s.exports[h[w]])},decodeGltfBufferAsync:function(p,b,y,v,E){return c.length>0?_(p,b,y,d[v],h[E]):a.then(function(){var w=new Uint8Array(p*b);return l(s,s.exports[d[v]],w,p,b,y,s.exports[h[E]]),w})}}})();class hM{constructor(e){this.experience=e,this.scene=this.experience.scene,this.loader=new CS,this.loader.setMeshoptDecoder(lM),this.animations={},this.state={doorOpen:!1,doorRFOpen:!1,hoodOpen:!1,trunkOpen:!1,fuelOpen:!1,allOpen:!1,wheelsSpinning:!0},this.wheelPivots=[],this.wheelRotationSpeed=8.5,this.setupHolographicProxy(),this.setModel()}setupHolographicProxy(){this.proxyGroup=new on;const e=new Gt(1.68,.48,3.8),t=new Sn({color:13934648,wireframe:!0,transparent:!0,opacity:.55}),n=new me(e,t);n.position.set(0,.44,0),this.proxyGroup.add(n);const i=new Gt(1.35,.4,1.5),s=new me(i,t);s.position.set(0,.84,-.2),this.proxyGroup.add(s);const a=new Kt(.32,.32,.22,16);a.rotateZ(Math.PI/2),[[-.78,.34,1.2],[.78,.34,1.2],[-.78,.34,-1.2],[.78,.34,-1.2]].forEach(([l,h,d])=>{const c=new me(a,t);c.position.set(l,h,d),this.proxyGroup.add(c)}),this.scene.add(this.proxyGroup)}setModel(){this.loader.load("./models/mercedes-benz_slk_55_amg_2012.glb",e=>{this.model=e.scene;const n=-new oi().setFromObject(this.model).min.y;this.model.position.set(0,n+.04,0),this.mixer=new Ug(this.model),e.animations.forEach(i=>{const s=this.mixer.clipAction(i);s.clampWhenFinished=!0,s.loop=Pr,this.animations[i.name]=s}),this.animations.speedometer&&(this.animations.speedometer.clampWhenFinished=!1,this.animations.speedometer.loop=Nd,this.animations.speedometer.play()),this.setupWheelPivots(),this.model.traverse(i=>{if(i.isMesh&&(i.castShadow=!0,i.receiveShadow=!0,i.material)){const s=(i.material.name||"").toLowerCase(),a=(i.name||"").toLowerCase();let o=!1,l=i;for(;l;){if(l.name&&/tyre|tire/i.test(l.name)){o=!0;break}l=l.parent}i.material.envMapIntensity=1.6,o?(i.material=i.material.clone(),i.material.color.setHex(1579549),i.material.emissive.setHex(0),i.material.emissiveIntensity=0,i.material.roughness=.92,i.material.metalness=.02,i.material.envMapIntensity=.2):s.includes("carpaint")||s.includes("paint")||s.includes("body")?(i.material.roughness=.14,i.material.metalness=.85,i.material.envMapIntensity=1.9,"clearcoat"in i.material&&(i.material.clearcoat=1,i.material.clearcoatRoughness=.06)):s.includes("chrome")||s.includes("badge")||s.includes("screw")?(i.material.roughness=.08,i.material.metalness=.98,i.material.envMapIntensity=2.4):s.includes("glass")||s.includes("windshield")?(i.material.transparent=!0,i.material.opacity=.48,i.material.roughness=.04,i.material.metalness=.12,i.material.envMapIntensity=2.5):s.includes("rotor")||s.includes("aluminum")||s.includes("machined")||a.includes("rim_")?(i.material.roughness=.18,i.material.metalness=.92,i.material.envMapIntensity=1.8):s.includes("leather")||s.includes("alcantara")||s.includes("carpet")||s.includes("fabric")?(i.material.roughness=.85,i.material.metalness=.05,i.material.envMapIntensity=.5):s.includes("carbonfiber")&&(i.material.roughness=.28,i.material.metalness=.4,i.material.envMapIntensity=1.3),!o&&!a.includes("rim_")&&(s.includes("lbk_led")||s.includes("gaugeface")||s.includes("int_symbols_emissive")||a.includes("headlight")||a.includes("taillight"))&&(i.material.emissive=new Ie(14217471),i.material.emissiveIntensity=.8)}}),this.proxyGroup&&(this.scene.remove(this.proxyGroup),this.proxyGroup=null),this.scene.add(this.model),this.experience.preloader&&this.experience.preloader.onItemLoaded("car")},e=>{this.experience.preloader&&this.experience.preloader.onProgress("car",e.loaded,e.total)},e=>{console.error("Error loading car model:",e),this.experience.preloader&&this.experience.preloader.onItemLoaded("car")})}setupWheelPivots(){const e=[{key:"RF",center:new O(-.7483,.1882,1.1912),regex:/rim_RF|tyre_RF/i},{key:"LF",center:new O(.7483,.1882,1.1912),regex:/rim_LF|tyre_LF/i},{key:"RR",center:new O(-.7513,.184,-1.2346),regex:/rim_RR|tyre_RR/i},{key:"LR",center:new O(.7513,.184,-1.2346),regex:/rim_LR|tyre_LR/i}];this.wheelPivots=[],e.forEach(t=>{const n=new on;n.position.copy(t.center),this.model.add(n);const i=[];this.model.traverse(s=>{t.regex.test(s.name)&&i.push(s)}),i.forEach(s=>{s.parent&&s.parent!==n&&!t.regex.test(s.parent.name)&&(s.position.sub(t.center),n.add(s))}),this.wheelPivots.push(n)})}toggleWheelSpin(){return this.state.wheelsSpinning=!this.state.wheelsSpinning,this.state.wheelsSpinning}playPairAction(e,t,n){if(!this.animations)return;const i=this.animations[e],s=this.animations[t];!i||!s||(n?(s.stop(),s.reset(),i.reset(),i.clampWhenFinished=!0,i.loop=Pr,i.play()):(i.stop(),i.reset(),s.reset(),s.clampWhenFinished=!0,s.loop=Pr,s.play()))}openDoor(){this.state.doorOpen=!0,this.playPairAction("doorLF_open","doorLF_close",!0),this.experience.sounds&&this.experience.sounds.playDoorOpen(),this.updateAllOpenStatus()}closeDoor(){this.state.doorOpen=!1,this.playPairAction("doorLF_open","doorLF_close",!1),this.experience.sounds&&this.experience.sounds.playDoorClose(),this.updateAllOpenStatus()}toggleDoor(){return this.state.doorOpen?this.closeDoor():this.openDoor(),this.state.doorOpen}openDoorRF(){this.state.doorRFOpen=!0,this.playPairAction("doorRF_open","doorRF_close",!0)}closeDoorRF(){this.state.doorRFOpen=!1,this.playPairAction("doorRF_open","doorRF_close",!1)}openHood(){this.state.hoodOpen=!0,this.playPairAction("hood_open","hood_close",!0),this.experience.sounds&&this.experience.sounds.playDoorOpen(),this.updateAllOpenStatus()}closeHood(){this.state.hoodOpen=!1,this.playPairAction("hood_open","hood_close",!1),this.experience.sounds&&this.experience.sounds.playDoorClose(),this.updateAllOpenStatus()}toggleHood(){return this.state.hoodOpen?this.closeHood():this.openHood(),this.state.hoodOpen}openTrunk(){this.state.trunkOpen=!0,this.playPairAction("trunk_open","trunk_close",!0),this.experience.sounds&&this.experience.sounds.playDoorOpen(),this.updateAllOpenStatus()}closeTrunk(){this.state.trunkOpen=!1,this.playPairAction("trunk_open","trunk_close",!1),this.experience.sounds&&this.experience.sounds.playDoorClose(),this.updateAllOpenStatus()}toggleTrunk(){return this.state.trunkOpen?this.closeTrunk():this.openTrunk(),this.state.trunkOpen}toggleFuel(){if(this.state.fuelOpen=!this.state.fuelOpen,this.animations.fuel){const e=this.animations.fuel;e.reset(),e.clampWhenFinished=!0,e.loop=Pr,e.play()}return this.experience.sounds&&this.experience.sounds.playClick(),this.state.fuelOpen}openAll(){return this.state.allOpen=!0,this.state.doorOpen=!0,this.state.doorRFOpen=!0,this.state.hoodOpen=!0,this.state.trunkOpen=!0,this.playPairAction("doorLF_open","doorLF_close",!0),this.playPairAction("doorRF_open","doorRF_close",!0),this.playPairAction("hood_open","hood_close",!0),this.playPairAction("trunk_open","trunk_close",!0),this.experience.sounds&&this.experience.sounds.playExplodeOpen(),!0}closeAll(){return this.state.allOpen=!1,this.state.doorOpen=!1,this.state.doorRFOpen=!1,this.state.hoodOpen=!1,this.state.trunkOpen=!1,this.state.fuelOpen=!1,this.playPairAction("doorLF_open","doorLF_close",!1),this.playPairAction("doorRF_open","doorRF_close",!1),this.playPairAction("hood_open","hood_close",!1),this.playPairAction("trunk_open","trunk_close",!1),this.experience.sounds&&this.experience.sounds.playExplodeClose(),!1}toggleAll(){return this.state.allOpen?this.closeAll():this.openAll()}updateAllOpenStatus(){this.state.allOpen=this.state.doorOpen&&this.state.hoodOpen&&this.state.trunkOpen}update(e){if(this.mixer&&this.mixer.update(e*.001),this.state.wheelsSpinning&&this.wheelPivots.length>0){const t=e*.001*this.wheelRotationSpeed;for(let n=0;n<this.wheelPivots.length;n++)this.wheelPivots[n].rotation.x+=t}}}class uM{constructor(e){this.experience=e,this.scene=this.experience.scene,this.camera=this.experience.camera.instance,this.sizes=this.experience.sizes,this.points=[{id:"projects",name:"Live Vercel Projects",position:new O(0,2.3,-4.5),camPos:{x:0,y:1.65,z:-1.8},camTarget:{x:0,y:1.65,z:-4.6},action:"projects"},{id:"driver",name:"About Jubayer",position:new O(-4.2,2.3,-1.8),camPos:{x:-1.2,y:1.62,z:.2},camTarget:{x:-4.2,y:1.5,z:-1.8},action:"signboard"},{id:"social",name:"Social Media",position:new O(4.2,2.3,-1.8),camPos:{x:1.2,y:1.62,z:.2},camTarget:{x:4.2,y:1.5,z:-1.8},action:"social"},{id:"hood",name:"Full-Stack Core",position:new O(0,.95,1.45),camPos:{x:1.2,y:1.6,z:2.8},camTarget:{x:0,y:.85,z:1.1},action:"hood"},{id:"dashboard",name:"AI & Content Stack",position:new O(-.5,1.05,.1),camPos:{x:-1.6,y:1.35,z:.8},camTarget:{x:-.2,y:.9,z:.1},action:"dashboard"},{id:"trunk",name:"GitHub Repos (22)",position:new O(0,.95,-1.45),camPos:{x:-1,y:1.6,z:-2.8},camTarget:{x:0,y:.8,z:-1.1},action:"trunk"}],this.container=document.createElement("div"),this.container.className="hotspots-container",document.body.appendChild(this.container),this.createElements()}createElements(){this.points.forEach(e=>{const t=document.createElement("div");t.className="hotspot-pin",t.dataset.id=e.id,t.innerHTML=`
        <div class="hotspot-inner">
          <span class="hotspot-beacon"></span>
          <span>${e.name}</span>
        </div>
      `,t.addEventListener("click",()=>{this.onHotspotClick(e)}),this.container.appendChild(t),e.element=t})}onHotspotClick(e){if(this.experience.sounds&&this.experience.sounds.playWhoosh(),this.experience.world&&this.experience.world.car){const t=this.experience.world.car;t.state.allOpen||(e.action==="door"?t.openDoor():t.closeDoor(),e.action==="hood"?t.openHood():t.closeHood(),e.action==="trunk"?t.openTrunk():t.closeTrunk(),e.action==="fuel"&&t.toggleFuel())}this.experience.camera.transitionTo(e.camPos,e.camTarget),this.experience.ui&&this.experience.ui.openModal(e.id)}update(){this.points.forEach(e=>{if(!e.element)return;const t=e.position.clone();if(t.project(this.camera),t.z>1)e.element.style.display="none";else{e.element.style.display="block";const i=(t.x*.5+.5)*this.sizes.width,s=(-t.y*.5+.5)*this.sizes.height;e.element.style.left=`${i}px`,e.element.style.top=`${s}px`}})}setVisible(e){this.container.style.display=e?"block":"none"}}class dM{constructor(e){this.experience=e,this.scene=this.experience.scene,this.camera=this.experience.camera.instance,this.sizes=this.experience.sizes,this.visible=!1,this.cards=[{id:"engine",targetId:"hood",anchor:new O(0,1.2,1.35),badge:"V8 ENGINE BAY",badgeBg:"#FDE68A",badgeText:"#451A03",title:"Full-Stack & Cloud Architecture",desc:"Next.js 15 • React 19 • TypeScript • PostgreSQL • Drizzle ORM • Microservices",screenOffset:{x:-220,y:-130}},{id:"cockpit",targetId:"driver",anchor:new O(-1.25,1.15,.15),badge:"DRIVER COCKPIT",badgeBg:"#FDE68A",badgeText:"#451A03",title:"Jubayer Ahmad (Lead Developer)",desc:"Full-Stack Developer • AI Content Creator • System Architect • Creative Lead",screenOffset:{x:-250,y:40}},{id:"trunk",targetId:"trunk",anchor:new O(0,1.35,-1.45),badge:"CARGO VAULT",badgeBg:"#FDE68A",badgeText:"#451A03",title:"22+ GitHub Repositories",desc:"NoorHub SaaS • 2D/3D Games • AI Automations • Open-World Racing Engines",screenOffset:{x:210,y:-70}},{id:"cinema",targetId:"dashboard",anchor:new O(1.25,1.15,.15),badge:"AI CONTENT & VFX",badgeBg:"#A7F3D0",badgeText:"#064E3B",title:"AI Content & Autonomous Agents",desc:"Google Veo 3.1 & Gemini 3.7 • Autonomous Video & Content Engines • Shono AI Jarvis",screenOffset:{x:220,y:80}}],this.setupDOM()}setupDOM(){this.container=document.createElement("div"),this.container.className="exploded-callouts-container",this.container.style.display="none",this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.setAttribute("class","exploded-lines-svg"),this.container.appendChild(this.svg),this.cards.forEach(e=>{const t=document.createElement("div");t.className="exploded-beacon",t.innerHTML='<span class="beacon-pulse"></span><span class="beacon-core"></span>',this.container.appendChild(t),e.beaconEl=t;const n=document.createElement("div");n.className="exploded-card",n.dataset.target=e.targetId,n.innerHTML=`
        <div class="exploded-card-badge" style="background:${e.badgeBg}; color:${e.badgeText};">${e.badge}</div>
        <div class="exploded-card-title">${e.title}</div>
        <div class="exploded-card-desc">${e.desc}</div>
        <div class="exploded-card-action"><span>Explore Details &nearr;</span></div>
      `,n.addEventListener("click",()=>{this.experience.ui&&(this.experience.ui.openModal(e.targetId),this.experience.ui.navigateToTarget(e.targetId))}),this.container.appendChild(n),e.cardEl=n;const i=document.createElementNS("http://www.w3.org/2000/svg","line");i.setAttribute("class","exploded-tether-line"),this.svg.appendChild(i),e.lineEl=i}),document.body.appendChild(this.container)}show(){this.visible=!0,this.container.style.display="block",this.container.classList.add("active"),this.update()}hide(){this.visible=!1,this.container.classList.remove("active"),setTimeout(()=>{this.visible||(this.container.style.display="none")},400)}toggle(){return this.visible?this.hide():this.show(),this.visible}update(){if(!this.visible)return;const e=this.sizes.width,t=this.sizes.height;this.cards.forEach(n=>{const i=n.anchor.clone();if(i.project(this.camera),i.z>1){n.beaconEl.style.display="none",n.cardEl.style.display="none",n.lineEl.setAttribute("visibility","hidden");return}n.beaconEl.style.display="block",n.cardEl.style.display="block",n.lineEl.setAttribute("visibility","visible");const s=(i.x*.5+.5)*e,a=(-i.y*.5+.5)*t;n.beaconEl.style.left=`${s}px`,n.beaconEl.style.top=`${a}px`;const o=s+n.screenOffset.x,l=a+n.screenOffset.y,h=Math.max(140,Math.min(e-140,o)),d=Math.max(120,Math.min(t-100,l));n.cardEl.style.left=`${h}px`,n.cardEl.style.top=`${d}px`,n.lineEl.setAttribute("x1",s),n.lineEl.setAttribute("y1",a),n.lineEl.setAttribute("x2",h),n.lineEl.setAttribute("y2",d)})}}class fM{constructor(e){this.experience=e,this.scene=this.experience.scene,this.skyStudio=new xS(this.experience),this.floor=new vS(this.experience),this.turntable=new yS(this.experience),this.studioScreen=new SS(this.experience),this.projectsScreen=new MS(this.experience),this.socialScreen=new ES(this.experience),this.environment=new AS(this.experience),this.car=new hM(this.experience),this.hotspots=new uM(this.experience),this.explodedCallouts=new dM(this.experience)}update(e,t){this.car&&this.car.update(e),this.turntable&&this.turntable.update(e),this.studioScreen&&this.studioScreen.update(e,t),this.projectsScreen&&this.projectsScreen.update(e,t),this.socialScreen&&this.socialScreen.update(e,t),this.hotspots&&this.hotspots.update(),this.explodedCallouts&&this.explodedCallouts.update()}}class pM{constructor(e){this.experience=e,this.loaderElement=document.getElementById("loader"),this.barElement=document.getElementById("loader-bar"),this.statusElement=document.getElementById("loader-status"),this.speedElement=document.getElementById("loader-speed"),this.gearElement=document.getElementById("loader-gear"),this.rpmElement=document.getElementById("loader-rpm"),this.revBtn=document.getElementById("loader-rev-btn"),this.quickBtn=document.getElementById("loader-quick-launch"),this.items={car:{loaded:0,total:5234628,ready:!1}},this.totalBytes=this.items.car.total,this.targetProgress=18,this.displayProgress=0,this.soundPlayed=!1,this.finished=!1,this.fallbackTimer=setTimeout(()=>{this.finish()},2800),this.revBtn&&this.revBtn.addEventListener("click",t=>{t.stopPropagation(),this.tryPlayAudio(!0)}),this.quickBtn&&this.quickBtn.addEventListener("click",t=>{t.stopPropagation(),this.finish()}),window.addEventListener("click",()=>this.tryPlayAudio(),{once:!0}),window.addEventListener("touchstart",()=>this.tryPlayAudio(),{once:!0}),this.animateLoop()}tryPlayAudio(e=!1){(!this.soundPlayed||e)&&this.experience.sounds&&(this.soundPlayed=!0,this.experience.sounds.playEngineRev())}onProgress(e,t,n){this.items[e]&&(this.items[e].loaded=t,n&&n>0&&(this.items[e].total=n,this.totalBytes=n));const i=this.items.car.loaded,s=this.totalBytes||5234628,a=Math.min(i/s,1);this.targetProgress=Math.max(this.targetProgress,Math.round(15+a*79)),this.displayProgress>45&&!this.soundPlayed&&this.tryPlayAudio()}onItemLoaded(e){if(this.items[e]&&(this.items[e].ready=!0,this.items[e].loaded=this.items[e].total),this.items.car.ready){this.targetProgress=100;const t=()=>{this.displayProgress>=98?setTimeout(()=>this.finish(),80):setTimeout(t,30)};t()}}animateLoop(){if(this.finished)return;const e=this.targetProgress-this.displayProgress,t=Math.max(e*.45,2.5);this.displayProgress=Math.min(this.displayProgress+t,this.targetProgress);const n=Math.min(Math.round(this.displayProgress),100);this.barElement&&(this.barElement.style.width=`${this.displayProgress}%`);const i=Math.round(this.displayProgress/100*260);if(this.speedElement&&(this.speedElement.textContent=String(i).padStart(3,"0")),this.gearElement&&(n<15?this.gearElement.textContent="1":n<35?this.gearElement.textContent="2":n<55?this.gearElement.textContent="3":n<75?this.gearElement.textContent="4":n<90?this.gearElement.textContent="5":n<99?this.gearElement.textContent="6":this.gearElement.textContent="MAX"),this.rpmElement){const s=(1.2+this.displayProgress/100*6.6).toFixed(1);this.rpmElement.textContent=`${s}K`}this.statusElement&&(n<25?this.statusElement.textContent=`Igniting AMG V8 Biturbo Engine... ${n}%`:n<50?this.statusElement.textContent=`Calibrating 60 FPS Mobile GPU Shaders... ${n}%`:n<75?this.statusElement.textContent=`Accelerating Telemetry (${i} KM/H)...`:n<95?this.statusElement.textContent=`Engaging Aerodynamics & Launch Control... ${n}%`:this.statusElement.textContent="Launch Control Ready • Welcome, Jubayer Ahmad"),requestAnimationFrame(()=>this.animateLoop())}finish(){this.finished||(this.finished=!0,clearTimeout(this.fallbackTimer),clearTimeout(this.quickLaunchTimer),this.displayProgress=100,this.barElement&&(this.barElement.style.width="100%"),this.speedElement&&(this.speedElement.textContent="260"),this.gearElement&&(this.gearElement.textContent="MAX"),this.statusElement&&(this.statusElement.textContent="Studio Online • Welcome, Jubayer Ahmad"),this.experience.sounds&&this.experience.sounds.playTireScreech(),setTimeout(()=>{this.loaderElement&&this.loaderElement.classList.add("hidden"),this.experience.sounds&&this.experience.sounds.playWhoosh()},180))}}const xd=[{name:"NoorHub-Madrasa-Management-SaaS",category:"saas",lang:"TypeScript",stars:1,url:"https://github.com/Jubayer-AI-Studio/NoorHub-Madrasa-Management-SaaS",desc:"Universal Islamic Education Management & Cloud SaaS Platform built with Next.js 15, React 19, TypeScript, Tailwind CSS, PWA, Drizzle ORM, Leaflet GIS & Noor AI."},{name:"Two-Friends-Driving-Masters-Video-Studio",category:"ai",lang:"TypeScript",stars:0,url:"https://github.com/Jubayer-AI-Studio/Two-Friends-Driving-Masters-Video-Studio",desc:"AI Video Generation Studio with Google Veo 3.1 & Gemini 3.7 Flash + TTS, animating the automotive story of Shafin and Nafis."},{name:"Dhaka-Open-World-Racing",category:"games",lang:"Kotlin",stars:0,url:"https://github.com/Jubayer-AI-Studio/Dhaka-Open-World-Racing",desc:"Dhaka open world racing game featuring Shafin and Nafis, realistic vehicle damage, dynamic weather, and 10+ Dhaka drive routes."},{name:"Shafin-Blade-Fighter-Game",category:"games",lang:"JavaScript",stars:1,url:"https://github.com/Jubayer-AI-Studio/Shafin-Blade-Fighter-Game",desc:"Epic 2D/3D Cyber Anime Fighting Combat Web Game built with HTML5 Canvas, JavaScript, Web Audio API & PWA offline support."},{name:"Shafin-and-Nafis-Racing-3D",category:"games",lang:"Kotlin",stars:0,url:"https://github.com/Jubayer-AI-Studio/Shafin-and-Nafis-Racing-3D",desc:"High-octane Android 3D racing game featuring Shafin and Nafis with smooth touch steering, nitro boosts, and car selection."},{name:"Iron-Strike-2D-Fighter",category:"games",lang:"HTML5/JS",stars:0,url:"https://github.com/Jubayer-AI-Studio/Iron-Strike-2D-Fighter",desc:"An arcade 2D fighting game featuring intense martial arts combat, special moves, combos, diverse arenas, and multiple game modes."},{name:"Jubayer-Legends-3D-Runner",category:"games",lang:"WebGL/3D",stars:0,url:"https://github.com/Jubayer-AI-Studio/Jubayer-Legends-3D-Runner",desc:"Cinematic 3D endless-runner game featuring Shafin, Nafis, and police chaser Jubayer through futuristic neon cities, vehicles, and sky flight."},{name:"Shono-AI-Bangladeshi-Jarvis",category:"ai",lang:"HTML/JS",stars:1,url:"https://github.com/Jubayer-AI-Studio/Shono-AI-Bangladeshi-Jarvis",desc:"Shono AI (শোনো এআই) - Bangladeshi Dialect-Aware Jarvis Voice Assistant Architecture Blueprint & Interactive Cyberpunk HUD."},{name:"Jubayer-Jarvis-AI-Automation",category:"ai",lang:"Python",stars:1,url:"https://github.com/Jubayer-AI-Studio/Jubayer-Jarvis-AI-Automation",desc:"100% Hands-Free Desktop AI Assistant with Arc Reactor Orb, Biometric Voice Lock, Mobile QR Remote & System Automation in Bengali & English."},{name:"YouTube-Automation-Bot",category:"ai",lang:"Python",stars:1,url:"https://github.com/Jubayer-AI-Studio/YouTube-Automation-Bot",desc:"YouTube Automation Engine - Autonomous Video Production, Dynamic Thumbnail Card Generator & Automated Upload Pipeline."},{name:"Reels-Video-Automation",category:"ai",lang:"Python",stars:1,url:"https://github.com/Jubayer-AI-Studio/Reels-Video-Automation",desc:"Automated Reels & Shorts Video Generator - Cloud-Operated Video Production with GitHub Actions CI/CD & Telegram Delivery."},{name:"AI__automation",category:"ai",lang:"Python/HTML",stars:2,url:"https://github.com/Jubayer-AI-Studio/AI__automation",desc:"Unified AI Social Media & Content Automator - 24/7 Telegram Worker, Smart Reels Commenter & Automated Content Pipeline."},{name:"special-agent",category:"ai",lang:"Python / Next.js",stars:2,url:"https://github.com/Jubayer-AI-Studio/special-agent",liveUrl:"https://special-agent-one.vercel.app",desc:"Autonomous Agent Framework with terminal reasoning loops, multi-tool scheduling, and contextual workspace synthesis. Live production deployment on Vercel."},{name:"auto-reels",category:"ai",lang:"Python",stars:1,url:"https://github.com/Jubayer-AI-Studio/auto-reels",desc:"Short-form algorithmic video creation engine targeting viral social media deployment."},{name:"super-chat",category:"saas",lang:"JavaScript",stars:1,url:"https://github.com/Jubayer-AI-Studio/super-chat",desc:"Real-time WebSocket chat application with end-to-end message routing and room management."},{name:"full-chat",category:"saas",lang:"JavaScript",stars:1,url:"https://github.com/Jubayer-AI-Studio/full-chat",desc:"Production-ready instant messaging platform featuring rich-text, media upload, and status broadcasts."},{name:"chat-all",category:"saas",lang:"JavaScript",stars:1,url:"https://github.com/Jubayer-AI-Studio/chat-all",desc:"Omnichannel multi-platform chat aggregator bridging social communication endpoints."},{name:"chat-app",category:"saas",lang:"JavaScript",stars:1,url:"https://github.com/Jubayer-AI-Studio/chat-app",desc:"Clean UI real-time communication portal built with responsive socket infrastructure."},{name:"chatapp",category:"saas",lang:"JavaScript",stars:1,url:"https://github.com/Jubayer-AI-Studio/chatapp",desc:"High-speed messaging client engine optimized for low-latency web interactions."},{name:"my-first-site",category:"saas",lang:"CSS/HTML",stars:1,url:"https://github.com/Jubayer-AI-Studio/my-first-site",desc:"Smritir Canvas - Author and Literary Website."},{name:"madrasa-managment-software",category:"saas",lang:"Full-Stack",stars:1,url:"https://github.com/Jubayer-AI-Studio/madrasa-managment-software",desc:"Core Madrasa & Academic Accounting software architecture."},{name:"monisharani333022-eng",category:"ai",lang:"Markdown/Python",stars:1,url:"https://github.com/Jubayer-AI-Studio/monisharani333022-eng",desc:"Jubayer Ahmad's Official GitHub Profile Architecture & Automated Stats Engine."}];class mM{constructor(e){this.experience=e,this.modalEl=document.getElementById("content-modal"),this.cardEl=this.modalEl?this.modalEl.querySelector(".modal-card"):null,this.bodyEl=document.getElementById("modal-body"),this.closeBtn=document.getElementById("modal-close"),this.backdrop=this.modalEl?this.modalEl.querySelector(".modal-backdrop"):null,this.navPills=document.querySelectorAll(".nav-pill"),this.resetBtn=document.getElementById("reset-cam"),this.audioBtn=document.getElementById("audio-toggle"),this.turntableBtn=document.getElementById("turntable-toggle"),this.wheelsBtn=document.getElementById("wheels-toggle"),this.explodeBtn=document.getElementById("explode-toggle"),this.clockEl=document.getElementById("live-clock"),this.focusBanner=document.getElementById("hud-focus-banner"),this.focusReturnBtn=document.getElementById("focus-return-btn"),this.focusTitle=document.getElementById("focus-title"),this.initEvents(),this.initClock()}initClock(){const e=()=>{if(this.clockEl){const t=new Date;this.clockEl.textContent=t.toLocaleTimeString()}};e(),setInterval(e,1e3)}initEvents(){this.closeBtn&&this.closeBtn.addEventListener("click",()=>this.closeModal()),this.backdrop&&this.backdrop.addEventListener("click",()=>this.closeModal()),this.resetBtn&&this.resetBtn.addEventListener("click",()=>{this.resetView()}),this.focusReturnBtn&&this.focusReturnBtn.addEventListener("click",()=>{this.resetView()}),this.explodeBtn&&this.explodeBtn.addEventListener("click",()=>{this.toggleExplodeMode()}),this.wheelsBtn&&this.wheelsBtn.addEventListener("click",()=>{if(this.experience.world&&this.experience.world.car){const e=this.experience.world.car.toggleWheelSpin();this.wheelsBtn.classList.toggle("active",e),this.wheelsBtn.querySelector(".btn-text").textContent=e?"WHEELS: SPIN":"WHEELS: OFF",this.experience.sounds&&(e?this.experience.sounds.playEngineRev():this.experience.sounds.playClick())}}),this.turntableBtn&&this.turntableBtn.addEventListener("click",()=>{const e=this.experience.camera.controls;e.autoRotate=!e.autoRotate;const t=e.autoRotate;this.turntableBtn.classList.toggle("active",t),this.turntableBtn.querySelector(".btn-text").textContent=t?"ROTATING: ON":"ROTATE 360°",this.experience.sounds&&this.experience.sounds.playClick()}),this.audioBtn&&this.audioBtn.addEventListener("click",()=>{const e=this.experience.sounds.toggleMute(),t=this.audioBtn.querySelector(".btn-text");t&&(t.textContent=e?"SOUND OFF":"SOUND ON"),this.audioBtn.classList.toggle("muted",e)}),this.navPills.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.target;this.navPills.forEach(n=>n.classList.remove("active")),e.classList.add("active"),t==="overview"?this.resetView():t==="explode"?this.toggleExplodeMode(!0):(this.experience.world&&this.experience.world.car&&this.experience.world.car.state.allOpen&&this.toggleExplodeMode(!1),this.openModal(t),this.navigateToTarget(t))})})}toggleExplodeMode(e=null){if(!this.experience.world||!this.experience.world.car)return;const t=this.experience.world.car,n=this.experience.world.explodedCallouts;if(e!==null?e:!t.state.allOpen){if(t.openAll(),n&&n.show(),this.explodeBtn){this.explodeBtn.classList.add("active");const a=this.explodeBtn.querySelector(".btn-text");a&&(a.textContent="CLOSE ALL PARTS")}this.closeModal(),document.body.classList.remove("signboard-focus"),document.body.classList.add("exploded-mode"),this.focusBanner&&(this.focusTitle&&(this.focusTitle.textContent="Showroom Blueprint • All Vehicle Components Open"),this.focusBanner.classList.add("active")),this.experience.camera.transitionTo({x:3.2,y:2.1,z:2.8},{x:0,y:.65,z:0}),this.navPills.forEach(a=>a.classList.remove("active"));const s=document.querySelector('.nav-pill[data-target="explode"]');s&&s.classList.add("active")}else{if(t.closeAll(),n&&n.hide(),document.body.classList.remove("exploded-mode"),this.explodeBtn){this.explodeBtn.classList.remove("active");const a=this.explodeBtn.querySelector(".btn-text");a&&(a.textContent="OPEN ALL PARTS")}this.focusBanner&&this.focusBanner.classList.remove("active"),this.experience.camera.transitionTo({x:-4.5,y:1.8,z:4.2},{x:0,y:.65,z:0}),this.navPills.forEach(a=>a.classList.remove("active"));const s=document.querySelector('.nav-pill[data-target="overview"]');s&&s.classList.add("active")}}resetView(){if(this.closeModal(),document.body.classList.remove("signboard-focus"),document.body.classList.remove("social-focus"),document.body.classList.remove("projects-focus"),document.body.classList.remove("exploded-mode"),this.focusBanner&&this.focusBanner.classList.remove("active"),this.experience.world&&(this.experience.world.car&&this.experience.world.car.closeAll(),this.experience.world.explodedCallouts&&this.experience.world.explodedCallouts.hide()),this.explodeBtn){this.explodeBtn.classList.remove("active");const t=this.explodeBtn.querySelector(".btn-text");t&&(t.textContent="OPEN ALL PARTS")}this.experience.camera.transitionTo({x:-4.8,y:1.9,z:4.4},{x:0,y:.65,z:0}),this.navPills.forEach(t=>t.classList.remove("active"));const e=document.querySelector('.nav-pill[data-target="overview"]');e&&e.classList.add("active"),this.experience.sounds&&this.experience.sounds.playWhoosh()}navigateToTarget(e){const t=this.experience.world.hotspots,n=t.points.find(i=>i.id===e);n&&t.onHotspotClick(n)}renderRepoCards(e="all"){return(e==="all"?xd:xd.filter(n=>n.category===e)).map(n=>`
      <div class="repo-card">
        <div class="repo-card-top">
          <span class="repo-lang-badge">${n.lang}</span>
          ${n.liveUrl?'<span class="repo-live-tag"><span class="pulse-dot"></span> LIVE VERCEL</span>':""}
          ${n.stars>0?`<span class="repo-star-badge">STAR ${n.stars}</span>`:""}
        </div>
        <h3 class="repo-title">
          <a href="${n.liveUrl||n.url}" target="_blank" class="repo-link">${n.name}</a>
        </h3>
        <p class="repo-desc">${n.desc}</p>
        <div class="repo-footer">
          ${n.liveUrl?`
            <a href="${n.liveUrl}" target="_blank" class="repo-btn-live">
              <span>Live App</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          `:""}
          <a href="${n.url}" target="_blank" class="repo-btn-gold">
            <span>Source Code</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          </a>
        </div>
      </div>
    `).join("")}openModal(e){if(e==="projects"){this.closeModal(),document.body.classList.remove("signboard-focus"),document.body.classList.remove("social-focus"),document.body.classList.add("projects-focus"),this.focusBanner&&(this.focusTitle&&(this.focusTitle.textContent="Live Vercel Projects • Production Deployments"),this.focusBanner.classList.add("active")),this.experience.sounds&&this.experience.sounds.playBloop();return}if(e==="social"){this.closeModal(),document.body.classList.remove("signboard-focus"),document.body.classList.remove("projects-focus"),document.body.classList.add("social-focus"),this.focusBanner&&(this.focusTitle&&(this.focusTitle.textContent="Official Social Media (YouTube • TikTok • Facebook • Instagram)"),this.focusBanner.classList.add("active")),this.experience.sounds&&this.experience.sounds.playBloop();return}if(e==="driver"){this.closeModal(),document.body.classList.remove("social-focus"),document.body.classList.remove("projects-focus"),document.body.classList.add("signboard-focus"),this.focusBanner&&(this.focusTitle&&(this.focusTitle.textContent="VIP Showroom Signboard • Jubayer Ahmad"),this.focusBanner.classList.add("active")),this.experience.sounds&&this.experience.sounds.playBloop();return}if(document.body.classList.remove("signboard-focus"),document.body.classList.remove("social-focus"),document.body.classList.remove("projects-focus"),this.focusBanner&&this.focusBanner.classList.remove("active"),!this.bodyEl)return;this.bodyEl.innerHTML=this.getContent(e),this.cardEl&&(this.cardEl.classList.remove("drawer-mode","micro-mode"),e==="trunk"||e==="workstation"?this.cardEl.classList.add("drawer-mode"):this.cardEl.classList.add("micro-mode")),this.modalEl.classList.add("active"),document.body.classList.add("modal-open");const t=this.bodyEl.querySelector("#modal-toggle-hood-btn");if(t){const h=this.experience.world.car.state.hoodOpen;t.textContent=h?"Close Hood":"Open Hood",t.addEventListener("click",()=>{if(this.experience.world&&this.experience.world.car){const d=this.experience.world.car.toggleHood();t.textContent=d?"Close Hood":"Open Hood"}})}const n=this.bodyEl.querySelector("#modal-toggle-door-btn");if(n){const h=this.experience.world.car.state.doorOpen;n.textContent=h?"Close Driver Door":"Open Driver Door",n.addEventListener("click",()=>{if(this.experience.world&&this.experience.world.car){const d=this.experience.world.car.toggleDoor();n.textContent=d?"Close Driver Door":"Open Driver Door"}})}const i=this.bodyEl.querySelector("#modal-toggle-trunk-btn");if(i){const h=this.experience.world.car.state.trunkOpen;i.textContent=h?"Close Trunk":"Open Trunk",i.addEventListener("click",()=>{if(this.experience.world&&this.experience.world.car){const d=this.experience.world.car.toggleTrunk();i.textContent=d?"Close Trunk":"Open Trunk"}})}const s=this.bodyEl.querySelector("#modal-side-close-btn");s&&s.addEventListener("click",()=>this.closeModal());const a=this.bodyEl.querySelector("#modal-explore-repos-btn");a&&a.addEventListener("click",()=>{this.openModal("trunk")});const o=this.bodyEl.querySelectorAll(".repo-filter-btn"),l=this.bodyEl.querySelector("#repos-grid-container");o.length&&l&&o.forEach(h=>{h.addEventListener("click",()=>{o.forEach(c=>c.classList.remove("active")),h.classList.add("active");const d=h.dataset.category;l.innerHTML=this.renderRepoCards(d),this.experience.sounds&&this.experience.sounds.playClick()})}),this.experience.sounds&&this.experience.sounds.playBloop()}closeModal(){this.modalEl&&(this.modalEl.classList.remove("active"),document.body.classList.remove("modal-open")),this.experience.world&&this.experience.world.car&&(this.experience.world.car.state.allOpen||(this.experience.world.car.state.doorOpen&&this.experience.world.car.closeDoor(),this.experience.world.car.state.hoodOpen&&this.experience.world.car.closeHood(),this.experience.world.car.state.trunkOpen&&this.experience.world.car.closeTrunk()))}getContent(e){switch(e){case"social":return`
          <div class="drawer-header-row">
            <div>
              <div class="modal-badge gold-badge">OFFICIAL SOCIAL CHANNELS</div>
              <h2 class="modal-title gold-gradient-text" style="font-size: 1.35rem; margin-bottom: 4px;">Connect with Jubayer Ahmad</h2>
            </div>
            <div class="workstation-status-pill">
              <span class="pulse-dot"></span>
              <span>VERIFIED DIRECT ACCESS</span>
            </div>
          </div>

          <div class="workstation-container">
            <!-- 4 Main Social Media Cards Requested by User -->
            <div class="workstation-social-grid" style="grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));">
              <!-- 1. YouTube -->
              <a href="https://www.youtube.com/@jubayeraispecialist" target="_blank" class="profile-card yt-card" style="border-left: 4px solid #FF0000;">
                <div class="profile-icon-wrap" style="background: rgba(255, 0, 0, 0.15); color: #FF0000;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </div>
                <div class="profile-info">
                  <div class="profile-name">YouTube Channel</div>
                  <div class="profile-meta">@jubayeraispecialist • Subscribe ↗</div>
                </div>
              </a>

              <!-- 2. TikTok -->
              <a href="https://www.tiktok.com/@jubayer_ahmad_2002" target="_blank" class="profile-card tiktok-card" style="border-left: 4px solid #00F2FE;">
                <div class="profile-icon-wrap" style="background: #000000; color: #FFFFFF;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743 2.895 2.895 0 0 1 3.12-4.524V9.37a6.34 6.34 0 0 0-4.043 1.05 6.338 6.338 0 0 0-2.33 4.671 6.342 6.342 0 0 0 2.378 5.176 6.335 6.335 0 0 0 5.485 1.344 6.34 6.34 0 0 0 4.66-4.992c.07-.468.106-.944.106-1.42V8.653a8.214 8.214 0 0 0 5.04 1.705v-3.48a4.832 4.832 0 0 1-2.005-.192z" fill="#00F2FE"/>
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743 2.895 2.895 0 0 1 3.12-4.524V9.37a6.34 6.34 0 0 0-4.043 1.05 6.338 6.338 0 0 0-2.33 4.671 6.342 6.342 0 0 0 2.378 5.176 6.335 6.335 0 0 0 5.485 1.344 6.34 6.34 0 0 0 4.66-4.992c.07-.468.106-.944.106-1.42V8.653a8.214 8.214 0 0 0 5.04 1.705v-3.48a4.832 4.832 0 0 1-2.005-.192z" fill="#FE0979" style="mix-blend-mode: screen; transform: translate(1px, 1px);"/>
                  </svg>
                </div>
                <div class="profile-info">
                  <div class="profile-name">TikTok Profile</div>
                  <div class="profile-meta">@jubayer_ahmad_2002 • Follow ↗</div>
                </div>
              </a>

              <!-- 3. Facebook Profile & Page -->
              <a href="https://www.facebook.com/share/1CopAWZnyX/" target="_blank" class="profile-card fb-card" style="border-left: 4px solid #1877F2;">
                <div class="profile-icon-wrap" style="background: rgba(24, 119, 242, 0.15); color: #1877F2;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <div class="profile-info">
                  <div class="profile-name">Facebook Profile</div>
                  <div class="profile-meta">Jubayer Ahmad (Official ID) ↗</div>
                </div>
              </a>

              <!-- Facebook Studio Page -->
              <a href="https://www.facebook.com/share/1C8RmiURup/" target="_blank" class="profile-card fb-card" style="border-left: 4px solid #1877F2;">
                <div class="profile-icon-wrap" style="background: rgba(24, 119, 242, 0.15); color: #1877F2;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <div class="profile-info">
                  <div class="profile-name">Facebook Studio Page</div>
                  <div class="profile-meta">Official Developer Studio ↗</div>
                </div>
              </a>

              <!-- 4. Instagram -->
              <a href="https://www.instagram.com/jubayer_ahmad_2002/" target="_blank" class="profile-card ig-card" style="border-left: 4px solid #E1306C;">
                <div class="profile-icon-wrap" style="background: linear-gradient(135deg, rgba(131, 58, 180, 0.2) 0%, rgba(253, 29, 29, 0.2) 50%, rgba(252, 176, 69, 0.2) 100%); color: #E1306C;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <div class="profile-info">
                  <div class="profile-name">Instagram</div>
                  <div class="profile-meta">@jubayer_ahmad_2002 • Follow ↗</div>
                </div>
              </a>

              <!-- 5. Upwork Profile -->
              <a href="https://www.upwork.com/freelancers/~0185d56d4075d701a6" target="_blank" class="profile-card upwork-card" style="border-left: 4px solid #14A800;">
                <div class="profile-icon-wrap" style="background: rgba(20, 168, 0, 0.15); color: #14A800;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-3.715 0-5.596 2.493-6.236 4.351-.837-1.636-1.464-3.528-1.748-4.99H7.63v6.529c0 1.95-1.587 3.537-3.537 3.537-1.95 0-3.537-1.587-3.537-3.537V4.378H0v6.529c0 3.57 2.903 6.473 6.473 6.473 2.274 0 4.275-1.177 5.429-2.966.528 1.411 1.444 2.68 2.802 3.522 1.272.788 2.756 1.222 4.316 1.222 4.333 0 7.857-3.524 7.857-7.857 0-4.333-3.524-7.857-7.857-7.857z"/></svg>
                </div>
                <div class="profile-info">
                  <div class="profile-name">Upwork Profile</div>
                  <div class="profile-meta">Verified Freelancer • Hire Me ↗</div>
                </div>
              </a>
            </div>

            <!-- Featured Live App Card: Special Agent One -->
            <div class="workstation-hero-card" style="margin-top: 14px;">
              <div class="hero-top-row">
                <span class="hero-live-pill"><span class="pulse-dot"></span> LIVE WEB APP (VERCEL)</span>
                <span class="hero-framework-badge">Next.js 15 • Python • Multi-Agent</span>
              </div>
              <h3 class="hero-app-title">Special Agent One</h3>
              <p class="hero-app-desc">Autonomous Agent Framework with terminal reasoning loops, multi-tool scheduling, and contextual workspace synthesis. Live production deployment verified on Vercel.</p>
              <div class="hero-action-row">
                <a href="https://special-agent-one.vercel.app" target="_blank" class="hero-btn-launch">
                  <span>LAUNCH LIVE APP ↗</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
                <a href="https://github.com/Jubayer-AI-Studio/special-agent" target="_blank" class="hero-btn-code">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>

          <div class="modal-footer-bar" style="margin-top: 14px; padding-top: 12px; display:flex; gap:8px; flex-wrap:wrap;">
            <button class="card-btn-door gold-btn" id="modal-explore-repos-btn" style="font-size: 0.74rem; padding: 8px 14px;">Browse 22 Repositories &nearr;</button>
            <button class="card-btn-close" id="modal-side-close-btn" style="font-size: 0.74rem; padding: 8px 14px;">Close Drawer</button>
          </div>
        `;case"hood":return`
          <div class="modal-badge gold-badge">V8 Engine Power</div>
          <h2 class="modal-title gold-gradient-text" style="font-size: 1.25rem; margin-bottom: 8px;">Engineering & Tech Stack</h2>
          <div class="card-grid">
            <div class="info-item gold-card" style="padding: 10px 14px;">
              <div class="info-item-title gold-text" style="font-size: 0.88rem;">Frontend & 3D WebGL</div>
              <div class="info-item-sub" style="font-size: 0.74rem;">Next.js 15 • React 19 • TypeScript • Three.js • GSAP</div>
            </div>
            <div class="info-item gold-card" style="padding: 10px 14px;">
              <div class="info-item-title gold-text" style="font-size: 0.88rem;">Backend, APIs & Cloud</div>
              <div class="info-item-sub" style="font-size: 0.74rem;">Node.js • Python FastAPI • PostgreSQL • Cloudflare Zero Trust</div>
            </div>
          </div>
          <div class="modal-footer-bar" style="margin-top: 12px; padding-top: 10px; display:flex; gap:8px; flex-wrap:wrap;">
            <button class="card-btn-door gold-btn" id="modal-toggle-hood-btn" style="font-size: 0.74rem; padding: 8px 12px;">Close Hood</button>
            <a href="https://github.com/Jubayer-AI-Studio" target="_blank" class="card-btn-door gold-btn" style="text-decoration:none; font-size: 0.74rem; padding: 8px 12px;">GitHub &nearr;</a>
            <button class="card-btn-close" id="modal-side-close-btn" style="font-size: 0.74rem; padding: 8px 14px;">Close</button>
          </div>
        `;case"dashboard":return`
          <div class="modal-badge gold-badge">Cockpit & Telemetry</div>
          <h2 class="modal-title gold-gradient-text" style="font-size: 1.25rem; margin-bottom: 8px;">AI Content & Intelligent Agents</h2>
          <div class="card-grid">
            <div class="info-item gold-card" style="padding: 10px 14px;">
              <div class="info-item-title gold-text" style="font-size: 0.88rem;">Two Friends Driving Studio</div>
              <div class="info-item-sub" style="font-size: 0.74rem;">AI Video Generation with Google Veo 3.1 & Gemini 3.7 Flash + TTS.</div>
            </div>
            <div class="info-item gold-card" style="padding: 10px 14px;">
              <div class="info-item-title gold-text" style="font-size: 0.88rem;">Shono AI (Bangladeshi Jarvis)</div>
              <div class="info-item-sub" style="font-size: 0.74rem;">Bangla Dialect-Aware Voice AI & Desktop Automation Assistant.</div>
            </div>
          </div>
          <div class="modal-footer-bar" style="margin-top: 12px; padding-top: 10px; display:flex; gap:8px; flex-wrap:wrap;">
            <button class="card-btn-door gold-btn" id="modal-toggle-door-btn" style="font-size: 0.74rem; padding: 8px 12px;">Toggle Driver Door</button>
            <a href="https://www.youtube.com/@jubayeraispecialist" target="_blank" class="card-btn-door gold-btn" style="text-decoration:none; font-size: 0.74rem; padding: 8px 12px;">YouTube Theater &nearr;</a>
            <button class="card-btn-close" id="modal-side-close-btn" style="font-size: 0.74rem; padding: 8px 14px;">Close</button>
          </div>
        `;case"trunk":return`
          <div class="drawer-header-row">
            <div>
              <div class="modal-badge gold-badge">OFFICIAL GITHUB REPOSITORIES</div>
              <h2 class="modal-title gold-gradient-text" style="font-size: 1.25rem; margin-bottom: 4px;">GitHub Repositories (22 Projects)</h2>
            </div>
            <!-- Category Filter Bar -->
            <div class="repo-filter-bar" style="margin-bottom: 0;">
              <button class="repo-filter-btn active" data-category="all">All (22)</button>
              <button class="repo-filter-btn" data-category="saas">SaaS (8)</button>
              <button class="repo-filter-btn" data-category="ai">AI (8)</button>
              <button class="repo-filter-btn" data-category="games">Games (6)</button>
            </div>
          </div>

          <!-- Horizontal scrolling / compact drawer grid -->
          <div class="repos-drawer-grid" id="repos-grid-container">
            ${this.renderRepoCards("all")}
          </div>

          <div class="modal-footer-bar" style="margin-top: 12px; padding-top: 10px; display:flex; gap:8px; flex-wrap:wrap;">
            <button class="card-btn-door gold-btn" id="modal-toggle-trunk-btn" style="font-size: 0.74rem; padding: 8px 12px;">Toggle Trunk</button>
            <a href="https://github.com/Jubayer-AI-Studio" target="_blank" class="card-btn-door gold-btn" style="text-decoration:none; font-size: 0.74rem; padding: 8px 12px;">Visit GitHub (@Jubayer-AI-Studio)</a>
            <button class="card-btn-close" id="modal-side-close-btn" style="font-size: 0.74rem; padding: 8px 14px;">Close Drawer</button>
          </div>
        `;case"fuel":return`
          <div class="modal-badge gold-badge">Direct Inquiries</div>
          <h2 class="modal-title gold-gradient-text" style="font-size: 1.25rem; margin-bottom: 8px;">Connect with Jubayer</h2>
          <div class="card-grid">
            <div class="info-item gold-card" style="padding: 10px 14px;">
              <div class="info-item-title gold-text" style="font-size: 0.88rem;">Email</div>
              <div class="info-item-sub"><a href="mailto:jubayerahmad2002@gmail.com" class="direct-mail-link gold-link" style="font-size: 0.85rem;">jubayerahmad2002@gmail.com</a></div>
            </div>
            <div class="info-item gold-card" style="padding: 10px 14px;">
              <div class="info-item-title gold-text" style="font-size: 0.88rem;">Official Profiles & Hire Channels</div>
              <div class="tag-list" style="margin-top: 6px;">
                <a href="https://www.upwork.com/freelancers/~0185d56d4075d701a6" target="_blank" class="social-tag upwork gold-social" style="font-size: 0.72rem; padding: 4px 10px;">Upwork (Verified Freelancer)</a>
                <a href="https://www.facebook.com/share/1CopAWZnyX/" target="_blank" class="social-tag facebook gold-social" style="font-size: 0.72rem; padding: 4px 10px;">Facebook Profile</a>
                <a href="https://www.facebook.com/share/1C8RmiURup/" target="_blank" class="social-tag facebook gold-social" style="font-size: 0.72rem; padding: 4px 10px;">Facebook Page</a>
                <a href="https://github.com/Jubayer-AI-Studio" target="_blank" class="social-tag github gold-social" style="font-size: 0.72rem; padding: 4px 10px;">GitHub (@Jubayer-AI-Studio)</a>
                <a href="https://www.youtube.com/@jubayeraispecialist" target="_blank" class="social-tag youtube gold-social" style="font-size: 0.72rem; padding: 4px 10px;">YouTube (@jubayeraispecialist)</a>
                <a href="https://www.instagram.com/jubayer_ahmad_2002/" target="_blank" class="social-tag instagram gold-social" style="font-size: 0.72rem; padding: 4px 10px;">Instagram</a>
              </div>
            </div>
          </div>
          <div class="modal-footer-bar" style="margin-top: 12px; padding-top: 10px;">
            <a href="mailto:jubayerahmad2002@gmail.com" class="card-btn-door gold-btn" style="text-decoration:none; font-size: 0.74rem; padding: 8px 12px;">Send Email</a>
            <button class="card-btn-close" id="modal-side-close-btn" style="font-size: 0.74rem; padding: 8px 14px;">Close</button>
          </div>
        `;default:return""}}}let gc=null;class gM{constructor(e){if(gc)return gc;gc=this,window.experience=this,this.canvas=e,this.sizes=new Fv,this.time=new Ov,this.sounds=new kv,this.scene=new Dm,this.scene.background=new Ie(263688),this.scene.fog=new Hl(263688,6,22),this.camera=new _S(this),this.renderer=new bS(this),this.preloader=new pM(this),this.world=new fM(this),this.ui=new mM(this),this.sizes.onResize(()=>this.resize()),this.time.onTick((t,n)=>this.update(t,n))}resize(){this.camera.resize(),this.renderer.resize()}update(e,t){this.camera.update(),this.world&&this.world.update(e,t),this.renderer.update()}}const _M=document.querySelector("canvas.webgl");new gM(_M);
