 var a="Welcome to this Javascript Guide!".split(" ");
 let temp=" ";
 for(var i=0;i<a.length;i++){
    for(var j=a[i].length-1;j>=0;j--){
        temp+=a[i].charAt(j);

    }
    temp+=" ";
 }
 console.log(temp);
