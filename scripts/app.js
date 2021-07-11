var _banano_bananoprojectdashboard=new banano_bananoprojectdashboard();
/* App */
function banano_bananoprojectdashboard() {var _B;this.__1="bananopm";this.__2="BANanoProjectManager";this.__3="c:\laragon\www";this.__4="1.00";this.__5="";this.banano_ready=function() {if (_B==null) _B=this;var __6,__7,__8,__9,__a;__6=null;__6=u("#body");__7={};__7={};__7.mode="no-cors";__8={};__9="";__a={};__a=fetch("./assets/index.html",__7);__a.then(async function(__8) {return __8.text();}).then(async function(__9) {__6.html(__9);});};} 
document.addEventListener('DOMContentLoaded', function () { 
  var modeSwitch = document.querySelector('.mode-switch'); 
 
  modeSwitch.addEventListener('click', function () {    
    document.documentElement.classList.toggle('dark'); 
    modeSwitch.classList.toggle('active'); 
  }); 
   
  var listView = document.querySelector('.list-view'); 
  var gridView = document.querySelector('.grid-view'); 
  var projectsList = document.querySelector('.project-boxes'); 
   
  listView.addEventListener('click', function () { 
    gridView.classList.remove('active'); 
    listView.classList.add('active'); 
    projectsList.classList.remove('jsGridView'); 
    projectsList.classList.add('jsListView'); 
  }); 
   
  gridView.addEventListener('click', function () { 
    gridView.classList.add('active'); 
    listView.classList.remove('active'); 
    projectsList.classList.remove('jsListView'); 
    projectsList.classList.add('jsGridView'); 
  }); 
   
  document.querySelector('.messages-btn').addEventListener('click', function () { 
    document.querySelector('.messages-section').classList.add('show'); 
  }); 
   
  document.querySelector('.messages-close').addEventListener('click', function() { 
    document.querySelector('.messages-section').classList.remove('show'); 
  }); 
}); 
window.addEventListener('online', function() {if (typeof _banano_bananoprojectdashboard['banano_online']==="function") {_banano_bananoprojectdashboard.banano_online();}});window.addEventListener('offline', function() {if (typeof _banano_bananoprojectdashboard['banano_offline']==="function") {_banano_bananoprojectdashboard.banano_offline();}});var BANversion=1626035447356;window.document.addEventListener("readystatechange", BANLoadChecker, true);function BANLoadChecker() {if (window.document.readyState=="complete") {_banano_bananoprojectdashboard.banano_ready();}}