import{_ as d}from"./SectionHeader-DDTVbWx-.js";import{c as l,o as r,b as e,f,t as m,y as u,r as p,a as y,d as a,F as h,e as b}from"./index-D_uBNab_.js";import{B as x}from"./Button-BY20_W_m.js";const _={class:"relative z-10"},g=["for"],w={__name:"Input",props:{id:{type:String,required:!0},label:{type:String,required:!0},type:{type:String,default:"text"},placeholder:{type:String,default:""},rows:{type:Number,default:4}},setup(t){return(n,c)=>(r(),l("div",_,[e("label",{for:t.id,class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"},m(t.label),9,g),(r(),f(u(t.type==="textarea"?"textarea":"input"),{id:t.id,rows:t.type==="textarea"?t.rows:void 0,placeholder:t.placeholder,class:"shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-500 focus:border-primary-500 border border-secondary dark:bg-[#ffffff29] bg-primary"},null,8,["id","rows","placeholder"]))]))}},v={class:"mt-32",id:"contact"},k={class:"py-8 lg:py-16 px-4 mx-auto max-w-screen-md"},S={class:"space-y-8"},B={class:"flex justify-between"},z={class:"mt-2 flex justify-center space-x-3 md:space-x-8"},j={href:"",class:"text-gray-600 hover:text-blue-500"},C={href:"",class:"text-gray-600 hover:text-blue-700"},$={href:"",class:"text-gray-600 hover:text-gray-800"},I={href:"",class:"text-gray-600 hover:text-pink-500"},F={__name:"Contact",setup(t){const n=p([{id:"email",label:"Your email",type:"email",placeholder:"email@example.com",rows:void 0},{id:"subject",label:"Subject",type:"text",placeholder:"Let us know how we can help you",rows:void 0},{id:"message",label:"Message",type:"textarea",placeholder:"Leave a comment",rows:6}]);return(c,L)=>{const o=y("Icon");return r(),l("section",v,[a(d,{title:"Contact Me"}),e("div",k,[e("form",S,[(r(!0),l(h,null,b(n.value,(s,i)=>(r(),l("div",{key:i},[a(w,{id:s.id,label:s.label,type:s.type,placeholder:s.placeholder,rows:s.rows},null,8,["id","label","type","placeholder","rows"])]))),128)),e("div",B,[a(x,{label:"Send"}),e("div",z,[e("a",j,[a(o,{icon:"fa-brands:twitter",style:{"font-size":"2rem"}})]),e("a",C,[a(o,{icon:"fa-brands:linkedin",style:{"font-size":"2rem"}})]),e("a",$,[a(o,{icon:"fa-brands:github",style:{"font-size":"2rem"}})]),e("a",I,[a(o,{icon:"fa-brands:instagram",style:{"font-size":"2rem"}})])])])])])])}}};export{F as default};
