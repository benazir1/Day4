a)Print odd numbers in an array
(function()
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
  
} )(); 

b)Convert all the strings to title caps in a string array

(function(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
    })
    console.log(("GREEK FOR GEEKS"));

C)Sum of all numbers in an array
(function(){
    var  res=0;
    var arr=[12,3,5]
    for(var i=0;i<arr.length;i++)
    {
            res+=arr[i]
    }
    console.log( res);
 
})();

d)Return all the prime numbers in an array
(function(a){
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
    console.log( res);
 
})([1,2,3,4,5,6,7,8,9,11]);
e)Return all the palindromes in an array
(function(a){
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
    console.log(ans);
 
}) ([1,11,343,411,575,600,7887,80108,999,11]);
f)Return median of two sorted arrays of the same size.

(function(a,b){
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
     console.log( med);
    
})([1,2,3,7],[4,5,6,8]);

g)Remove duplicates from an array

(function(a){
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
    }
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%10===Math.floor(a[i]%10))
        {
            b.push(a[i])
        }
    }
    let c=""
    for(let i=0;i<b.length-1;i++)
     {
         c+=b[i]+" ";
    }
    c+=b[b.length-1];
     console.log(c);
    
})([1,1,2,1,2,3,3,3,4,3,3,3,3,2,2,2]);

h)Rotate an array by k times

(function(a,k){
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
  console.log(d);
}) ([1,2,3,4,5],3);


