function lowercase(arr){
    let lower=[];
    for(let i=0;i<arr.length;i++){
       lower.push(arr[i].toLowerCase());
       

    }
    return lower;
};
let ans = lowercase(["MA", "SA", "I", "SCH", "OOL"])
console.log(ans)