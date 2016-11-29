function getKey()
{
    if(event.keyCode==13){
      var search = "https://www.baidu.com/s?wd=+"+document.getElementById('search').value;
      // alert(search);
       window.location.href=search;
      // return true;

    }
}
function getURL(url) {
  $.ajax({
  		type: "get",
  		url: "http://www.cnblogs.com/rss",

  		success: function(data, textStatus){
  			$(".ajax.ajaxResult").html("");
  			$("item",data).each(function(i, domEle){
  				$(".ajax.ajaxResult").append("<li>"+$(domEle).children("title").text()+"</li>");
  			});
  		},
  		complete: function(XMLHttpRequest, textStatus){
  			//HideLoading();
  		},
  		error: function(){
  			//请求出错处理
  		}
  });

}

function goBaidu(){

  var search = "https://www.baidu.com/s?wd=+"+document.getElementById('search').value;
  // alert(search);
  window.location.href=search;
}
function goGoogle1(){
   var search = "http://www.acgn.ren/search?q=+"+document.getElementById('search').value;
   window.location.href=search;

}



function goGoogle2(){

  var search = "http://g.odbook.com/search?q=+"+document.getElementById('search').value;
  // alert(search);
  window.location.href=search;
}
function goYunPan(){

  var search = "http://218.50.4.4/s/"+document.getElementById('search').value+"/td_0";
  // alert(search);
  window.location.href=search;
}
function goGitHub(){

  var search = "https://github.com/search?q=+"+document.getElementById('search').value;
  // alert(search);
  window.location.href=search;
}
