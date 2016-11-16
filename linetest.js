
function linetest()
{
var width = 500;
var height = 500;
var ctrl=d3.select("body").append("svg").attr("width",width).attr("height",height);
	d3.csv("https://shejiawei.github.io/D3/20151222.csv",function(data){
		var ln = data.length;
		console.log(data);
 	var maxy = 1030
	 var lines = d3.line().x(function(d,i){return i*(width/ln);
	 	}).y(function(d){return height*(1-d.StnPres/maxy)});
	 ctrl.append("path").data([data]).attr("d",lines).attr("stroke","red").attr("fill","none");
	}
	)
}
