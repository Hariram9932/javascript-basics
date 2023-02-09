var a="mary";
var b="army";
if(a.length!==b.length){
    console.log("not a crct  input");
}
if(a.length===b.length){
    let str1=a.split(" ").sort().join(" ");
    let str2=b.split(" ").sort().join(" ");
    if(str1===str2){
        console.log("anagram");
    }
}