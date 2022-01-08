(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6],{258:function(t,e,r){"use strict";r.r(e);var l={methods:{addCarts:function(t){event.preventDefault(),this.$store.dispatch("addCarts",t)}},props:{carouse:{type:Object,default:function(){return{}}}},computed:{formatFundraisingPercent:function(){var t=this.carouse.fundraising_tickets,e=this.carouse.consumers;if(t&&e)return Math.round(e/t*100)}}},n=r(47),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"border-b-default border-gray-400 lg:border-b-0"},[r("a",{staticClass:"block w-full pt-5 rounded-[10px] lg:p-0 lg:bg-white lg:drop-shadow-[0px_10px_15px_rgba(0,0,0,0.05)] pb-[26px]",attrs:{href:"https://hiskio.com/fundraising/"+t.carouse.id+"/about"}},[r("div",{staticClass:"flex w-full lg:flex-col lg:mb-0 mb-4"},[r("div",{staticClass:"relative flex-shrink-0 mr-4 bg-center bg-cover rounded-md course-card-image w-[114px] h-64px lg:mr-0 lg:pt-[54.64285%] lg:w-full lg:h-auto lg:rounded-t-[10px] lg:rounded-b-none",style:'background-image: url("'+t.carouse.thumbnails.w300+'");',attrs:{"data-src":""+t.carouse.thumbnails.w300,lazy:"loaded"}},[r("div",{staticClass:"absolute inset-x-0 bottom-0 flex items-end justify-end p-2 leading-none course-card-cover h-1/2 text-22px md:hidden",staticStyle:{"background-image":"linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(250, 250, 250, 0))"}},[r("svg",{staticClass:"mr-3 text-white hover:text-[#ffd26b] svg-inline--fa fa-bell fa-w-14",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"bell",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[r("path",{attrs:{fill:"currentColor",d:"M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"}})]),t._v(" "),r("svg",{staticClass:"text-white hover:text-yellow-3 svg-inline--fa fa-shopping-cart fa-w-18",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"shopping-cart",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},on:{click:function(e){return t.addCarts(t.carouse.id)}}},[r("path",{attrs:{fill:"currentColor",d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"}})])])]),t._v(" "),r("div",{staticClass:"flex flex-col flex-grow lg:pt-3 lg:pb-[9px] lg:px-3 lg:w-full"},[r("h3",{staticClass:"h-[38px] text-sm leading-[19px] font-medium -order-1 line-clamp-2 text-gray-700 lg:mb-[4.34px] lg:h-[58px] lg:text-xl lg:leading-[29px] lg:text-hi-price"},[t._v(t._s(t.carouse.title)+"\n                ")]),t._v(" "),r("div",{staticClass:"hidden justify-between items-center flex-wrap mb-[7.5px] lg:flex lg:w-full lg:order-2 lg:mb-[10px]"},[r("p",{staticClass:"hidden text-sm leading-[19px] text-gray-700 lg:block lg:mb-[6px]"},[t._v("剩 3 天")]),t._v(" "),r("p",{staticClass:"text-sm leading-[19px] text-gray-700 lg:mb-6px"},[t._v("已募資 "+t._s(t.formatFundraisingPercent)+"%")]),t._v(" "),r("div",{staticClass:"relative w-[39.54%] h-[6px] bg-hi-input-gray rounded-md overflow-hidden lg:w-full lg:h-[10px]"},[r("div",{staticClass:"absolute inset-y-0 left-0 rounded-md",style:"background: linear-gradient(90deg, rgb(235, 103, 103) 0%, rgb(227, 74, 74) 100%); width: "+t.formatFundraisingPercent+"%;"})])]),t._v(" "),r("div",{staticClass:"flex justify-between items-center mt-auto lg:justify-start lg:mt-0 lg:order-1 lg:mb-[4.81px]"},[r("div",{staticClass:"flex-shrink-0 hidden bg-center bg-cover rounded-full mr-[5px] w-[23px] h-[23px] lg:block lg:mr-[10px] lg:w-[37.25px] lg:h-[37.25px]",style:'background-image: url("'+t.carouse.lecturers[0].avatar+'");',attrs:{"data-src":t.carouse.lecturers[0].avatar,lazy:"loaded"}}),t._v(" "),r("p",{staticClass:"text-xs leading-[14px] text-gray-600 lg:text-base lg:leading-[27.64px]"},[t._v(t._s(t.carouse.lecturers[0].username))]),t._v(" "),r("p",{staticClass:"font-bold leading-none lg:hidden text-red-1"},[t._v("$"+t._s(t.$carts.addThousand(t.carouse.price)))])]),t._v(" "),r("div",{staticClass:"hidden items-center lg:flex lg:items-end lg:order-3"},[r("span",{staticClass:"mr-[5px] text-sm leading-[17px] text-blueGray-4 font-bold lg:mr-1 lg:text-22px lg:leading-[24px]"},[t._v("$1,190")]),t._v(" "),r("del",{staticClass:"text-sm leading-[17px] text-gray-500 lg:leading-[18px]"},[t._v("$"+t._s(t.$carts.addThousand(t.carouse.fixed_price)))])])])]),t._v(" "),r("div",{staticClass:"flex lg:hidden"},[r("div",{staticClass:"flex items-center justify-center flex-shrink-0 mr-4 w-100px"},[r("p",{staticClass:"text-sm leading-none text-gray-700"},[t._v("已募資 "+t._s(t.formatFundraisingPercent)+"%")])]),t._v(" "),r("div",{staticClass:"flex items-center justify-center flex-grow"},[r("div",{staticClass:"relative flex-grow overflow-hidden rounded-md h-[6px] bg-gray-400 lg:bg-hi-input-gray"},[r("div",{staticClass:"absolute inset-y-0 left-0 rounded-md bg-red-1",style:"width: "+t.formatFundraisingPercent+"%;"})])])])])])}),[],!1,null,null,null);e.default=component.exports},266:function(t,e,r){"use strict";r.r(e);var l=r(6),n=(r(48),r(20)),d={components:{FundraisingCard:r(258).default},data:function(){return{carousesData:[]}},fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(n.c)();case 3:r=e.sent,t.carousesData=r.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("fundraising api error: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},c=r(47),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.carousesData?r("div",{staticClass:"pt-5 pb-[44px] bg-hi-courses-box md:pb-[36px] lg:pt-[40px] lg:pb-[60px]"},[r("div",{staticClass:"mx-auto px-[15px] max-w-1200"},[r("h2",{staticClass:"mb-6 font-medium text-22px text-hi-price sn-1000:text-xl"},[t._v("正在募資中的課程")]),t._v(" "),r("ul",{staticClass:"global-card-list grid grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-4"},t._l(t.carousesData,(function(t){return r("FundraisingCard",{key:t.id,attrs:{carouse:t}})})),1)])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FundraisingCard:r(258).default})}}]);