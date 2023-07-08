a)Print odd numbers in an array
var odd=()=>{
  var num=[2,3,4,5,6]
  var c=[];
  
    for(const n of num)
    {
      if(n%2==0)
      {
        c.push(n);
      }
    
    }
     console.log(c);
}
odd();
b)Convert all the strings to title caps in a string array
var upper=(str)=> {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
    }
    
    console.log(upper("GEEKS FOR GEEKS"));
c)Sum of all numbers in an array
var sum =()=>{
    var  res=0;
    var arr=[12,3,5]
    for(var i=0;i<arr.length;i++)
    {
            res+=arr[i]
    }
    return res;
 
}
console.log(sum())
d)Return all the prime numbers in an array
var sum =(a)=>{
    var  res="";
    for(var i=0;i<a.length;i++)
    {
        var count=0;
        for(var j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=a[i]+" "
        }
    }
    return res;
 
}
console.log(sum([1,2,3,4,5,6,7,8,9,11]))

e)Return all the palindromes in an array

var palind=(a)=>{
    var res="";
    var ans="";
    for(var i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(var j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    return ans;
 
}
console.log(palind([1,11,343,200,798,80108,8008,999,7171,700007]))

