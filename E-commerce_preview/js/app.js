"use strict";window.onload=function(){var a=document.querySelector(".prev-slide"),b=document.querySelector(".next-slide"),c=new Siema({selector:".siema",duration:400,easing:"cubic-bezier(.17,.67,.32,1.34)",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!0,rtl:!1,onInit:function(){},onChange:function(){}});a.addEventListener("click",function(){return c.prev()}),b.addEventListener("click",function(){return c.next()})};var paginationLi=document.getElementsByClassName("content-pagination-page");function changePaginationPage(a){a.preventDefault(),a.stopPropagation();var b=document.getElementsByClassName("active__page");b[0].className=b[0].className.replace(" active__page",""),a.target.className+=" active__page"}for(var i=0;i<paginationLi.length;i++)paginationLi[i].addEventListener("click",changePaginationPage);