var t,i=null;function o(){return(i===null||i.buffer!==t.memory.buffer)&&(i=new Int32Array(t.memory.buffer)),i}var s=null;function l(){return(s===null||s.buffer!==t.memory.buffer)&&(s=new Uint8Array(t.memory.buffer)),s}function y(e,n){return l().subarray(e/1,e/1+n)}function c(){try{let r=t.__wbindgen_add_to_stack_pointer(-16);t.render(r);var e=o()[r/4+0],n=o()[r/4+1],a=y(e,n).slice();return t.__wbindgen_free(e,n*1),a}finally{t.__wbindgen_add_to_stack_pointer(16)}}async function u(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}let a=await e.arrayBuffer();return await WebAssembly.instantiate(a,n)}else{let a=await WebAssembly.instantiate(e,n);return a instanceof WebAssembly.Instance?{instance:a,module:e}:a}}async function f(e){typeof e=="undefined"&&(e=new URL("wasm_bg.wasm",import.meta.url));let n={};(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));let{instance:a,module:r}=await u(await e,n);return t=a.exports,f.__wbindgen_wasm_module=r,t}var m=f;console.log("wasm-render module");async function w(){console.time("tracing rays");let e=c();return console.timeEnd("tracing rays"),new ImageData(new Uint8ClampedArray(e),500)}async function b(){console.time("init"),await m(),console.timeEnd("init")}export{b as wasmInit,w as wasmRender};
