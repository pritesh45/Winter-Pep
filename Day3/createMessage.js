function createMessage(message,...args){
  for(const arg of args){
    console.log(message+arg);
  }

}
createMessage("Good Morning","Ram","Shyam","Mantu");