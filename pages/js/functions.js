function myFunction()
{


}

function onLoad(){
	$.get("http://cloud.bmob.cn/5795bfceb00ba9ea/getTotalPV",function(data,status){
			alert("数据: " + data.results[0].totalPV + "\n状态: " + status);
			 $("#pv").text(data.results[0].totalPV);  
		});
}