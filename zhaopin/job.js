$(function(){   
    $(".icon").click(function(){
    var searchVal=$(".search").val()
    $.get("http://oa.derucci.net:8901/derucci/workflow/controller/queryPositionPage.jsp", 
    {size:30,type:3,jobTitle:searchVal},
    function(data){
    var dAtA = JSON.parse(data) 
    console.log(dAtA)
    var temP=dAtA.records 
    var liS=''
    for(i=0;i<temP.length;i++){
    var lI=
    '<li id='+temP[i].id+'>'+
    '<div class="li_1">'+
    '<div class="p1">'+temP[i].jobTitle+'</div>'+
    '<div class="p2">'+temP[i].salary+'</div>'+
    '</div>'+
    '<div class="li_2">'+
    '<div class="box">'+'<img src="././img/1-cut/a.jpg">'+temP[i].city+'</div>'+
    '<div class="content">'+temP[i].department+'</div>'+
    '<div class="date">'+temP[i].time+'</div>'+
    '</div>'+
    '</li>'
    liS+=lI
    }  
    $(".num").empty().prepend(liS)
    $("#more").empty()    
    $("li").click(function(){
        // console.log($(this).attr("id"))
        var id1=$(this).attr("id")       
        location.href="job.html"+"?id="+id1
        })  
    })
    })  
   
    
    $.get("http://oa.derucci.net:8901/derucci/workflow/controller/queryPositionPage.jsp", 
    {size:10,type:3},
    function(data){
    var data = JSON.parse(data) 
    var temp=data.records 
    var lis=''
    for(i=0;i<temp.length;i++){
    var li=
    '<li id="'+temp[i].id+'">'+
    '<div class="li_1">'+
    '<div class="p1">'+temp[i].jobTitle+'</div>'+
    '<div class="p2">'+temp[i].salary+'</div>'+
    '</div>'+
    '<div class="li_2">'+
    '<div class="box">'+'<img src="././img/1-cut/a.jpg">'+temp[i].city+'</div>'+
    '<div class="content">'+temp[i].department+'</div>'+
    '<div class="date">'+temp[i].time+'</div>'+
    '</div>'+
    '</li>'
    lis+=li
    }   
    $(".num").prepend(lis)
    $(".p3").click(function(){ 
    $.get("http://oa.derucci.net:8901/derucci/workflow/controller/queryPositionPage.jsp", 
    {size:20,type:3},
    function(data){
    var dataa = JSON.parse(data)
    var tempp=dataa.records
    var liss=""
    for(i=0;i<tempp.length;i++){
    var lii=
    '<li id="'+tempp[i].id+'">'+
    '<div class="li_1">'+
    '<div class="p1">'+tempp[i].jobTitle+'</div>'+
    '<div class="p2">'+tempp[i].salary+'</div>'+
    '</div>'+
    '<div class="li_2">'+
    '<div class="box">'+'<img src="././img/1-cut/a.jpg">'+tempp[i].city+'</div>'+
    '<div class="content">'+tempp[i].department+'</div>'+
    '<div class="date">'+tempp[i].time+'</div>'+
    '</div>'+
    '</li>'
    liss+=lii
    }   
    $('.num').empty().append(liss)
    $("#more").empty().append('<p class="p4">获取更多职位<p>')  
    $(".p4").click(function(){ 
    $.get("http://oa.derucci.net:8901/derucci/workflow/controller/queryPositionPage.jsp", 
    {size:30,type:3},
    function(data){
    var dataaa = JSON.parse(data)
    var temppp=dataaa.records
    var lisss=""
    for(i=0;i<temppp.length;i++){
    var liii=
    '<li id="'+temppp[i].id+'">'+
    '<div class="li_1">'+
    '<div class="p1">'+temppp[i].jobTitle+'</div>'+
    '<div class="p2">'+temppp[i].salary+'</div>'+
    '</div>'+
    '<div class="li_2">'+
    '<div class="box">'+'<img src="././img/1-cut/a.jpg">'+temppp[i].city+'</div>'+
    '<div class="content">'+temppp[i].department+'</div>'+
    '<div class="date">'+temppp[i].time+'</div>'+
    '</div>'+
    '</li>'
    lisss+=liii
    }   
    $('.num').empty().append(lisss)
    $("#more").empty()
    $("li").click(function(){
    // console.log($(this).attr("id"))
    var ider=$(this).attr("id")     
    location.href="job.html"+"?id="+ider
    })          
    })
    })
    $("li").click(function(){
    // console.log($(this).attr("id"))
    var iderr=$(this).attr("id")     
    location.href="job.html"+"?id="+iderr
    })          
    })
    })
    $("li").click(function(){
    // console.log($(this).attr("id"))
    var ide=$(this).attr("id")       
    location.href="job.html"+"?id="+ide
    })  
    })
})
