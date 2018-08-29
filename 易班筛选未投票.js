//@jiang

//目前测试 v1.0

//获取当前页面所有已投票的用户
function get(){
		var op=document.getElementsByTagName("p");
		for(var j=0;j<op.length;j++){
		
			var a = op[j].innerHTML;
			//判断收集的用户是否为姓名，假设姓名长度一般不会大于5
			if(a.length<5){
				//将循环出来的用户放入集合
				opArr[opArr.length] = op[j].innerHTML;
			}
			
		}
	return opArr;
}

//去除一个数组中相同的项
function first(args){
		for(i=0;i<args.length;i++){
			if(str1.indexOf(args[i])<0){
				str1.push(args[i]);
			}
		}
			return str1;
		}
		
//比对两个集合，返回不同的	
 function getdiffarr(A,B){  
        var C = new Array();  
        var E = new Array();  
        var Bstr = ","+ B.toString() +",";  
        for(var i in A ){  
            if(Bstr.indexOf(","+A[i]+",") >=0){
            }else{  
                C.push(A[i]);  
            }  
        }  
        E.push(C);  
       
        return E;  
    }  
  	

//获取所有查看投票按钮的class
var clickBt=document.getElementsByClassName("progress-info");
//此数组用于收集所有已投票用户
var opArr=[];
//按顺序点击查看投票按钮
for(var i=0;i<clickBt.length;i++){
	    //自动点击
		clickBt[i].click();
		alert("收集数据成功");//必须需要弹出，否则会造成自动点击不超过
		
	   	get();
		
		//获取页当前页面的翻页按钮
		var clickNum=document.getElementsByClassName("pro_pop_pnum");
		//获取页面投票详情关闭按钮
		var closeBt=document.getElementsByClassName("pro_pop_close");
		//是否有第二页
		if(clickNum.length>1){
 		//当这个循环的值为0，则从第一页开始收集，为1则从第二页开始收集
		for(var t=0;t<clickNum.length;t++){
			clickNum[t].click();
			alert("正在获取翻页的数据，请稍等1s鼠标,否则会造成取得不成功");
			
			get();
			
		}
		//关闭当前查看投票详情页面
		for(var j=0;j<closeBt.length;j++){
		closeBt[j].click();
		}
	}
}
	//用于接收去除重复数据的已投票用户
	var str1 = [];
	
	//去除重复数据
	first(opArr);
	
	alert("已经投票的有以下人："+str1);
	console.log("去除重复的数据，已经投票的人有:"+str1);
	//班级总人数
	var array1 = ["张三","李四"];
	
	//比对两个数组，筛选出未投票用户
    var F = getdiffarr(array1,str1);  
	
    alert("筛选出未投票的有："+F)
	console.log("未投："+F);
	
	
	
	
	



