function myFunction()
{
$.get("http://cloud.bmob.cn/5795bfceb00ba9ea/getTotalPV",function(data,status){
alert("Data: " + data + "nStatus: " + status);
});
}