
function goBaidu(){

  var search = "https://www.baidu.com/s?wd=+"+document.searchform.search.value;
  alert(search);
  window.location.href=search;
}
function goGoogle1(){

  var search = "http://www.acgn.ren/search?q=+"+document.searchform.search.value;
  alert(search);
  window.location.href=search;
}
function goGoogle2(){

  var search = "http://g.odbook.com/search?q=+"+document.searchform.search.value;
  alert(search);
  window.location.href=search;
}
function goYunPan(){

  var search = "http://www.panc.cc/s/"+document.searchform.search.value+"/td_0";
  alert(search);
  window.location.href=search;
}
function goGitHub(){

  var search = "https://github.com/search?q="+document.searchform.search.value;
  alert(search);
  window.location.href=search;
}
