$(function(){  
    // console.log(window.location.href)
    var len=window.location.href.split("=").length
    var id=window.location.href.split("=")[len-1]  
//     function GetQueryString(name){
//      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
//      var r = window.location.search.substr(1).match(reg);
//      if(r!=null)return  unescape(r[2]); return null;
// }
//         var iddd= GetQueryString("id")    
    // $.get("http://oa.derucci.net:8901/derucci/workflow/controller/queryPositionPage.jsp", 
    // {size:30,type:3},
    // function(data){
    // var data = JSON.parse(data)     
    // var temp=data.records 
    // for(i=0;i<temp.length;i++){
    // if(temp[i].id==id){
    // var p=i        
    // }
    // }
    $.get("http://oa.derucci.net:8901/derucci/workflow/controller/getPositionById.jsp",
    {id},function(data){
    var data2= JSON.parse(data)
    console.log(data2)
    var job='<div class="content">'+
    '<i>'+'<img src="././img/1-cut/phone.png">'+'</i>'+
    '<ul>'+
    '<h class="title">'+data2.jobTitle+'</h>'+
    '<li>'+'<img src="././img/1-cut/address.jpg">'+"工作地点:"+data2.city+'</li>'+
    '<li>'+'<img src="././img/1-cut/department.jpg">'+"需求部门:"+data2.department+'</li>'+
    '<li>'+'<img src="././img/1-cut/count.jpg">'+'招聘人数:'+data2.count+'</li>'+
    '<li>'+'<img src="././img/1-cut/salary.jpg">'+'薪资范围:'+data2.salary+'</li>'+
    '<li>'+'<img src="././img/1-cut/time.jpg">'+'发布时间:'+data2.startTime+'</li>'+
    '<li>'+'<img src="././img/1-cut/time.jpg">'+'截止时间:'+data2.endTime+'</li>'+
    '<h class="job">'+"工作职责:"+'<h>'+
    '<li>'+data2.descript+'</li>'+
    '<h class="qur">'+"任职资格:"+'<h>'+
    '<li>'+data2.qualification+'</li>'+
    '</ul>'+
    '</div>'     
    $("#content").append(job)       
    })
// })
})