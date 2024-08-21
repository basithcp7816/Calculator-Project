let check=true
function clickingNum(num){
    var text=document.getElementById("result").innerText
    if(text=="CALCULATOR"||check){
        document.getElementById("result").innerText=num
        check=false
    }
    else{
        var temp=text.concat(num)
        document.getElementById("result").innerText=temp
    }
}
function clickingOpt(opt){
    var text=document.getElementById("result").innerText
    if(text=="CALCULATOR"){
        return
    }
    if(text.charAt(text.length-1)=="+"||text.charAt(text.length-1)=="-"||text.charAt(text.length-1)=="x"||text.charAt(text.length-1)=="/"||text.charAt(text.length-1)=="%"){
        return
    }
    var temp=text.concat(opt)
    document.getElementById("result").innerText=temp
    check=false
}
function getAns(){
    var text=document.getElementById("result").innerText
    if(text=="CALCULATOR"){
        return
    }
    if(text.charAt(text.length-1)=="+"||text.charAt(text.length-1)=="-"||text.charAt(text.length-1)=="x"||text.charAt(text.length-1)=="/"||text.charAt(text.length-1)=="%"){
        return
    }
    var temp=text.replace("x","*")
    var res=eval(temp)
    if(res==Infinity||res==NaN) res="Syntax Error"
    document.getElementById("result").innerText=res
    check=true
}
function AC(){
    document.getElementById("result").innerText="CALCULATOR"
    check=true
}
function dot(){
    var text=document.getElementById("result").innerText
    if(text=="CALCULATOR"){
        return
    }
    if(text.charAt(text.length-1)=="+"||text.charAt(text.length-1)=="-"||text.charAt(text.length-1)=="x"||text.charAt(text.length-1)=="/"||text.charAt(text.length-1)=="%"){
        return
    }
    if(text.charAt(text.length-1)=="."){
        return
    }
    var temp=text.concat(".")
    document.getElementById("result").innerText=temp
}
function del(){
    var text=document.getElementById("result").innerText
    var temp=text.substring(0,text.length-1)
    if(temp.length==0){
         document.getElementById("result").innerText="CALCULATOR"
         check=true
         return
    }
    document.getElementById("result").innerText=temp;
}