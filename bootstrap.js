/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.wasm": function() {
/******/ 			return {
/******/ 				"./ski_tycoon_v2_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_59cb74e423758ede": function() {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_new_59cb74e423758ede"]();
/******/ 					},
/******/ 					"__wbg_stack_558ba5917b466edd": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_stack_558ba5917b466edd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_4bb6c2a97407129a": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_error_4bb6c2a97407129a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_WebGl2RenderingContext_acac10ed74c696cb": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_instanceof_WebGl2RenderingContext_acac10ed74c696cb"](p0i32);
/******/ 					},
/******/ 					"__wbg_bindVertexArray_520c05423d3d6641": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_bindVertexArray_520c05423d3d6641"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_bufferData_80963d2bd1ecb1bc": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_bufferData_80963d2bd1ecb1bc"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_createVertexArray_5cbff3d8bbe1c324": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_createVertexArray_5cbff3d8bbe1c324"](p0i32);
/******/ 					},
/******/ 					"__wbg_deleteVertexArray_3f37aabaae61ca26": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_deleteVertexArray_3f37aabaae61ca26"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_texImage2D_a5dad82b8f689bbd": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32,p7i32,p8i32,p9i32,p10i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_texImage2D_a5dad82b8f689bbd"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32,p7i32,p8i32,p9i32,p10i32);
/******/ 					},
/******/ 					"__wbg_texImage2D_87d321d6a73a1d4d": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32,p7i32,p8i32,p9i32,p10i32,p11i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_texImage2D_87d321d6a73a1d4d"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32,p7i32,p8i32,p9i32,p10i32,p11i32);
/******/ 					},
/******/ 					"__wbg_uniformMatrix4fv_82825540b9315680": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_uniformMatrix4fv_82825540b9315680"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_activeTexture_32edab6336bd38a9": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_activeTexture_32edab6336bd38a9"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_attachShader_5d53b7b00823cafb": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_attachShader_5d53b7b00823cafb"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_bindBuffer_4a7874f09df12419": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_bindBuffer_4a7874f09df12419"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_bindFramebuffer_abbc9985c473f160": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_bindFramebuffer_abbc9985c473f160"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_bindTexture_d659843380f373b5": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_bindTexture_d659843380f373b5"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_checkFramebufferStatus_b51201e69ce1e6b9": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_checkFramebufferStatus_b51201e69ce1e6b9"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_clear_25e035ed3961f1c6": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_clear_25e035ed3961f1c6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_clearColor_fc22409197a5bd68": function(p0i32,p1f32,p2f32,p3f32,p4f32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_clearColor_fc22409197a5bd68"](p0i32,p1f32,p2f32,p3f32,p4f32);
/******/ 					},
/******/ 					"__wbg_clearDepth_a6a786791b213475": function(p0i32,p1f32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_clearDepth_a6a786791b213475"](p0i32,p1f32);
/******/ 					},
/******/ 					"__wbg_compileShader_f7e245515fa1405d": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_compileShader_f7e245515fa1405d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createBuffer_4302ddbcbfc99048": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_createBuffer_4302ddbcbfc99048"](p0i32);
/******/ 					},
/******/ 					"__wbg_createFramebuffer_edeb035499d73077": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_createFramebuffer_edeb035499d73077"](p0i32);
/******/ 					},
/******/ 					"__wbg_createProgram_128698dd90ec070d": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_createProgram_128698dd90ec070d"](p0i32);
/******/ 					},
/******/ 					"__wbg_createShader_26e4f959d5d64d80": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_createShader_26e4f959d5d64d80"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createTexture_8ba2e566eb313fcf": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_createTexture_8ba2e566eb313fcf"](p0i32);
/******/ 					},
/******/ 					"__wbg_deleteBuffer_988823f4e76e697d": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_deleteBuffer_988823f4e76e697d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_deleteFramebuffer_bb908c3959201f9b": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_deleteFramebuffer_bb908c3959201f9b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_deleteTexture_cf22af6782ebc54f": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_deleteTexture_cf22af6782ebc54f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_depthFunc_5878b522bb47c2c1": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_depthFunc_5878b522bb47c2c1"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_drawArrays_f6e7af9c06f4f4ae": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_drawArrays_f6e7af9c06f4f4ae"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_enable_65590f4951fd0112": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_enable_65590f4951fd0112"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_enableVertexAttribArray_413ef49912a23f9e": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_enableVertexAttribArray_413ef49912a23f9e"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_framebufferTexture2D_bb45b3c3d234ddcd": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_framebufferTexture2D_bb45b3c3d234ddcd"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32);
/******/ 					},
/******/ 					"__wbg_getAttribLocation_422da253e02c78ac": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_getAttribLocation_422da253e02c78ac"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_getError_680e89c5233fe570": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_getError_680e89c5233fe570"](p0i32);
/******/ 					},
/******/ 					"__wbg_getProgramInfoLog_f8f65be65281f691": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_getProgramInfoLog_f8f65be65281f691"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getProgramParameter_b949ba1d9662f6a2": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_getProgramParameter_b949ba1d9662f6a2"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getShaderInfoLog_5412e8bc642139e8": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_getShaderInfoLog_5412e8bc642139e8"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getShaderParameter_cced0ff8ba83f3e7": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_getShaderParameter_cced0ff8ba83f3e7"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getUniformLocation_472b7459010900a5": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_getUniformLocation_472b7459010900a5"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_linkProgram_370ed11b34456c89": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_linkProgram_370ed11b34456c89"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_shaderSource_96ace5133c032f2f": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_shaderSource_96ace5133c032f2f"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_texParameteri_c0b2b665319f6a16": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_texParameteri_c0b2b665319f6a16"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_uniform1i_a1e8f5ad954fa6b5": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_uniform1i_a1e8f5ad954fa6b5"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_uniform3f_a7c04d3d1c2b18aa": function(p0i32,p1i32,p2f32,p3f32,p4f32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_uniform3f_a7c04d3d1c2b18aa"](p0i32,p1i32,p2f32,p3f32,p4f32);
/******/ 					},
/******/ 					"__wbg_uniform4f_9941fe9c32da60ea": function(p0i32,p1i32,p2f32,p3f32,p4f32,p5f32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_uniform4f_9941fe9c32da60ea"](p0i32,p1i32,p2f32,p3f32,p4f32,p5f32);
/******/ 					},
/******/ 					"__wbg_useProgram_b1cc885b00b8f52c": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_useProgram_b1cc885b00b8f52c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_vertexAttribPointer_3bb013e284cd07bf": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_vertexAttribPointer_3bb013e284cd07bf"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32);
/******/ 					},
/******/ 					"__wbg_viewport_86b156d5858adab9": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_viewport_86b156d5858adab9"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_fa4595281eb5ba83": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_instanceof_Window_fa4595281eb5ba83"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_d8cce4c1031c64eb": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_document_d8cce4c1031c64eb"](p0i32);
/******/ 					},
/******/ 					"__wbg_getElementById_aeb1b7331ed88a97": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_getElementById_aeb1b7331ed88a97"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_debug_733679f61d937b18": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_debug_733679f61d937b18"](p0i32);
/******/ 					},
/******/ 					"__wbg_error_c81c8d172df3cb18": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_error_c81c8d172df3cb18"](p0i32);
/******/ 					},
/******/ 					"__wbg_info_23f7f04053448bbc": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_info_23f7f04053448bbc"](p0i32);
/******/ 					},
/******/ 					"__wbg_log_8485ead621ceded9": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_log_8485ead621ceded9"](p0i32);
/******/ 					},
/******/ 					"__wbg_warn_eb158fa0859088bf": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_warn_eb158fa0859088bf"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlCanvasElement_c9f334afe4eed430": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_instanceof_HtmlCanvasElement_c9f334afe4eed430"](p0i32);
/******/ 					},
/******/ 					"__wbg_getContext_d277f710e8035242": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_getContext_d277f710e8035242"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_get_40375c2067f479fc": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_get_40375c2067f479fc"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_length_8f15bbb4ecbf7e33": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_length_8f15bbb4ecbf7e33"](p0i32);
/******/ 					},
/******/ 					"__wbg_call_8487a9f580e47219": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_call_8487a9f580e47219"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_179d393e4626fcf7": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_newnoargs_179d393e4626fcf7"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_get_4b320b7f63b925d0": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_get_4b320b7f63b925d0"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_self_eeabd9085c04fc17": function() {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_self_eeabd9085c04fc17"]();
/******/ 					},
/******/ 					"__wbg_window_f110c13310da2c8f": function() {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_window_f110c13310da2c8f"]();
/******/ 					},
/******/ 					"__wbg_globalThis_a2669bee93faee43": function() {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_globalThis_a2669bee93faee43"]();
/******/ 					},
/******/ 					"__wbg_global_a5584d717f4d6761": function() {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_global_a5584d717f4d6761"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_buffer_e35e010c3ba9f945": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_buffer_e35e010c3ba9f945"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithbyteoffsetandlength_7b9a415096aef9c1": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbg_newwithbyteoffsetandlength_7b9a415096aef9c1"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_number_get": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbindgen_number_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_boolean_get": function(p0i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbindgen_boolean_get"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.js"].exports["__wbindgen_memory"]();
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../ski_tycoon_v2/pkg/ski_tycoon_v2_bg.wasm":"10d649843b2fcec78594"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\n// asynchronously. This `bootstrap.js` file does the single async import, so\n// that no one else needs to worry about it again.\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\"))\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });