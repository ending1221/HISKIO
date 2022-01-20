exports.ids = [11,1,13];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Button.vue?vue&type=template&id=6d3c0558&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"flex items-center justify-center w-16 h-8 text-sm border-solid rounded mx-2",on:{"click":_vm.handleClick}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Button.vue?vue&type=template&id=6d3c0558&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var Buttonvue_type_script_lang_js_ = ({
  props: {
    click: {
      type: Function
    }
  },
  methods: {
    handleClick() {
      this.click();
    }

  }
});
// CONCATENATED MODULE: ./components/Button.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Buttonvue_type_script_lang_js_ = (Buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Button.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "333bdc97"
  
)

/* harmony default export */ var Button = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Button: __webpack_require__(27).default})


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title.vue?vue&type=template&id=6518478a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{staticClass:"text-2xl font-medium text-blueGray-4"},[_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.label)))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Title.vue?vue&type=template&id=6518478a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var Titlevue_type_script_lang_js_ = ({
  props: {
    label: {
      type: String
    }
  }
});
// CONCATENATED MODULE: ./components/Title.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Titlevue_type_script_lang_js_ = (Titlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Title.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Titlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6090cf83"
  
)

/* harmony default export */ var Title = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SubTotal.vue?vue&type=template&id=34865ac7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex-grow max-w-380 sn-1000:max-w-none"},[_c('Title',{staticClass:"sn-1000:text-xl sn-1000:leading-none mb-5",attrs:{"label":"小計"}}),_vm._ssrNode(" <div class=\"pt-3 px-4 pb-5 bg-white rounded-xl sn-1000:pt-5\" style=\"box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 15px;\"><div class=\"mb-5\"><label for=\"coupon-code\" class=\"block mb-3 leading-none text-gray-400\">輸入折扣代碼</label> <div class=\"flex\"><input id=\"coupon-code\" type=\"text\" class=\"flex-grow mr-2 p-2 h-10 border border-gray-400 focus:border-gray-700 focus:text-gray-700 rounded sn-1000:mr-0 text-gray-700\"> <button class=\"flex-shrink-0 w-[76px] h-10 bg-[#FFE6E6] text-red-1 rounded sn-1000:hidden font-normal\">確定</button></div></div> <button class=\"flex items-center text-lg leading-5 text-gray-700 font-medium hover:text-gray-500 focus:text-gray-700\"><span class=\"mr-1 underline\">選擇抵用券</span> <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"arrow-right\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"text-gray-700 svg-inline--fa fa-arrow-right fa-w-14\"><path fill=\"currentColor\" d=\"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z\"></path></svg></button> <div class=\"flex justify-between mt-5 mb-4 pt-5 border-t border-gray-400\"><div class=\"flex-shrink-0 text-gray-400 leading-none\">金額</div> <div class=\"text-gray-700 leading-none\"><span class=\"text-sm leading-4\">$</span>"+_vm._ssrEscape(_vm._s(_vm.formatTotal.subtotal)+"\n            ")+"</div></div> <div class=\"mb-5 text-right text-32px leading-none text-blueGray-4 font-medium\"><span class=\"text-2xl leading-8\">$</span>"+_vm._ssrEscape(_vm._s(_vm.formatTotal.total)+"\n        ")+"</div> <button class=\"block mb-3 w-full h-10 bg-gray-200 text-gray-500 cursor-not-allowed\">前往結帳</button> <p class=\"text-xs leading-5 text-gray-600\">\n            點擊上方按鈕即表示您已閱讀並同意\n            <a href=\"/user-policy\" target=\"_blank\" class=\"underline\">「HiSKIO購買與退費政策」</a></p></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SubTotal.vue?vue&type=template&id=34865ac7&

// EXTERNAL MODULE: ./components/Title.vue + 4 modules
var Title = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SubTotal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SubTotalvue_type_script_lang_js_ = ({
  components: {
    Title: Title["default"]
  },

  data() {
    let cartCourseData = this.$store.state.cartCourseData;
    return {
      prices: {
        total: cartCourseData.total ? cartCourseData.total : 0,
        subtotal: cartCourseData.subtotal ? cartCourseData.subtotal : 0
      }
    };
  },

  computed: {
    carts() {
      return this.$store.state.cartCourseData;
    },

    formatTotal() {
      return {
        total: this.$carts.addThousand(this.prices.total),
        subtotal: this.$carts.addThousand(this.prices.subtotal)
      };
    }

  },
  watch: {
    carts(newCarts, oldCarts) {
      if (newCarts) this.prices = {
        total: newCarts.total,
        subtotal: newCarts.subtotal
      };
    }

  }
});
// CONCATENATED MODULE: ./components/SubTotal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SubTotalvue_type_script_lang_js_ = (SubTotalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/SubTotal.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SubTotalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "96ea3bee"
  
)

/* harmony default export */ var SubTotal = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Title: __webpack_require__(28).default,Button: __webpack_require__(27).default})


/***/ })

};;
//# sourceMappingURL=sub-total.js.map