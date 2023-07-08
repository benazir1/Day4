//a)Print odd numbers in an array

var number=function()
{
  const numbers=[8,19,14,9,13];
  const odd=[];
  for(const num of numbers)
  {
    if(num%2==0);
    {
      odd.push(num);
    }
  }
    console.log(odd);
  
}  
number();

//b)Convert all the strings to title caps in a string array

var upper=function(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
    }
    
    console.log(upper("GEEKS FOR GEEKS"));
  

//c)Sum of all numbers in an array

var sum =function(){
    var  res=0;
    var arr=[12,3,5]
    for(var i=0;i<arr.length;i++)
    {
            res+=arr[i]
    }
    return res;
 
}
console.log(sum())

//d)Return all the prime numbers in an array

var sum =function(a){
    var  res="";
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
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

var palind=function(a){
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

f)Return median of two sorted arrays of the same size.

var arr=function(a,b){
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }
    
     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(b[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
     return med;
    
}
console.log(arr([1,2,3,7],[4,5,6,8]));

g)Remove duplicates from an array

var duplicate =function getUnique(arr){
    
    let uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

// calling the function
// passing array argument
duplicate(array);
h)Rotate an array by k times

var rotate=function(a,k){
   var n=a.length;
var c=[];
 var d="";
  for(var i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(var i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  return d;
}
console.log(rotate([1,2,3,4,5],2))
