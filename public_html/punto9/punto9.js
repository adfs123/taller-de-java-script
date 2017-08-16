var num=parseInt(prompt('enter the number', ''));
if (num == 1 || num == 2) {
alert(' the numbert' +num+ ' is cousin'); 
}else{
for (var i=2;i<num;i++) {
if(num % i == 0) {
alert('the numbert ' +num+ ' he is not cousin');

break;
}else{
alert('the numbert ' +num+ ' is cousin'); 
break;
}
}
 
 
}