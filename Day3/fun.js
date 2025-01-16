function fun(a,b){
  return a+b;
}
res=fun(5,10);
console.log(res);

function multiply(a,b){
  return a*b;
}
res1=multiply(5,9);
console.log(res1)

function func(x,y=7,z=42){
  console.log({x,y,z});
  return x+y+z;
}
console.log(func(1,null));    //null is assigned to y

function myFunc(x,y,...a){
  console.log(x,y,a);

}
myFunc(1,2,"hello",true,6);

function sum(...theArgs){
  let total=0;
  for(const arg of theArgs){
    total+=arg;
  }
  return total;
}
console.log(sum(1,2,3));

function one(...a){
  let total=0;
  for(const b of a){
    total+=b;
  }
  return total;


}
console.log(one(4,5,7,8,9));

function myFunc(a,b,...manyMoreArgs){
  console.log("a",a);
  console.log("b",b);
  console.log("manyMoreArgs",manyMoreArgs);
}
myFunc("one","two","three","four","five","six");