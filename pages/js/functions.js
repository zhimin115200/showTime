function myFunction()
{

}

function onLoad(){
	$.get("http://cloud.bmob.cn/5795bfceb00ba9ea/getTotalPV",function(data,status){
			 $("#pv").text(data.results[0].totalPV);  
		});
	$.get("http://cloud.bmob.cn/5795bfceb00ba9ea/totalPVpp",function(data,status){
			 console.log(JSON.stringify(data)) 
		});
}