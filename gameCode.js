//array contains possible ways
var possible_ways1= [];
function loadAnswers() {
//row-wise
//1
    possible_ways1.push([1,2,3,4,5]);  
    possible_ways1.push([2,3,4,5,6]);
    possible_ways1.push([3,4,5,6,7]);
    possible_ways1.push([4,5,6,7,8]);
    possible_ways1.push([5,6,7,8,9]);
//2
    possible_ways1.push([10,11,12,13,14]);  
    possible_ways1.push([11,12,13,14,15]);  
    possible_ways1.push([12,13,14,15,16]);  
    possible_ways1.push([13,14,15,16,17]); 
    possible_ways1.push([14,15,16,17,18]);
//3 
    possible_ways1.push([19,20,21,22,23]);
    possible_ways1.push([20,21,22,23,24]);
    possible_ways1.push([21,22,23,24,25]);
    possible_ways1.push([22,23,24,25,26]);
    possible_ways1.push([23,24,25,26,27]);
//4
    possible_ways1.push([28,29,30,31,32]);
    possible_ways1.push([29,30,31,32,33]);
    possible_ways1.push([30,31,32,33,34]);
    possible_ways1.push([31,32,33,34,35]);
    possible_ways1.push([32,33,34,35,36]);
//5
    possible_ways1.push([37,38,39,40,41]);
    possible_ways1.push([38,39,40,41,42]);
    possible_ways1.push([39,40,41,42,43]);
    possible_ways1.push([40,41,42,43,44]);
    possible_ways1.push([41,42,43,44,45]);
////6
possible_ways1.push([46,47,48,49,50]);
possible_ways1.push([47,48,49,50,51]);
possible_ways1.push([48,49,50,51,52]);
possible_ways1.push([49,50,51,52,53]);
possible_ways1.push([50,51,52,53,54]);
//7
possible_ways1.push([55,56,57,58,59]);
possible_ways1.push([56,57,58,59,60]);
possible_ways1.push([57,58,59,60,61]);
possible_ways1.push([58,59,60,61,62]);
possible_ways1.push([59,60,61,62,63]);
////8
possible_ways1.push([64,65,66,67,68]);
possible_ways1.push([65,66,67,68,69]);
possible_ways1.push([66,67,68,69,70]);
possible_ways1.push([67,68,69,70,71]);
possible_ways1.push([68,69,70,71,72]);
////9
possible_ways1.push([73,74,75,76,77]);
possible_ways1.push([74,75,76,77,78]);
possible_ways1.push([75,76,77,78,79]);
possible_ways1.push([76,77,78,79,80]);
possible_ways1.push([77,78,79,80,81]);

////column-wise
////1
possible_ways1.push([1,10,19,28,37]);
possible_ways1.push([10,19,28,37,46]);  
possible_ways1.push([19,28,37,46,55]);
possible_ways1.push([28,37,46,55,64]);
possible_ways1.push([37,46,55,64,73]);
////2
possible_ways1.push([2,11,20,29,38]);
possible_ways1.push([11,20,29,38,47]);
possible_ways1.push([20,29,38,47,56]);
possible_ways1.push([29,38,47,56,65]);
possible_ways1.push([38,47,56,65,74]);
////3
possible_ways1.push([3,12,21,30,39]);
possible_ways1.push([12,21,30,39,48]);
possible_ways1.push([21,30,39,48,57]);
possible_ways1.push([30,39,48,57,66]);
possible_ways1.push([39,48,57,66,75]);
////4
possible_ways1.push([4,13,22,31,40]);
possible_ways1.push([13,22,31,40,49]);
possible_ways1.push([22,31,40,49,58]);
possible_ways1.push([31,40,49,58,67]);
possible_ways1.push([40,49,58,67,76]);
////5
possible_ways1.push([5,14,23,32,41]);
possible_ways1.push([14,23,32,41,50]);
possible_ways1.push([23,32,41,50,59]);
possible_ways1.push([32,41,50,59,68]);
possible_ways1.push([41,50,59,68,77]);
////6
possible_ways1.push([6,15,24,33,42]);
possible_ways1.push([15,24,33,42,51]);
possible_ways1.push([24,33,42,51,60]);
possible_ways1.push([33,42,51,60,69]);
possible_ways1.push([42,51,60,69,78]);
////7
possible_ways1.push([7,16,25,34,43]);
possible_ways1.push([16,25,34,43,52]);
possible_ways1.push([25,34,43,52,61]);
possible_ways1.push([34,43,52,61,70]);
possible_ways1.push([43,52,61,70,79]);
////8
possible_ways1.push([8,17,26,35,44]);
possible_ways1.push([17,26,35,44,53]);
possible_ways1.push([26,35,44,53,62]);
possible_ways1.push([35,44,53,62,71]);
possible_ways1.push([44,53,62,71,80]);
////9
possible_ways1.push([9,18,27,36,45]);
possible_ways1.push([18,27,36,45,54]);
possible_ways1.push([27,36,45,54,63]);
possible_ways1.push([36,45,54,63,72]);
possible_ways1.push([45,54,63,72,81]);

////diagonal left-right(1)
possible_ways1.push([5,15,25,35,45]);

possible_ways1.push([4,14,24,34,44]);
possible_ways1.push([14,24,34,44,54]);

possible_ways1.push([3,13,23,33,43]);
possible_ways1.push([13,23,33,43,53]);
possible_ways1.push([23,33,43,53,63]);

possible_ways1.push([2,12,22,32,42]);
possible_ways1.push([12,22,32,42,52]);
possible_ways1.push([22,32,42,52,62]);
possible_ways1.push([32,42,52,62,72]);

possible_ways1.push([1,11,21,31,41]);
possible_ways1.push([11,21,31,41,51]);
possible_ways1.push([21,31,41,51,61]);
possible_ways1.push([31,41,51,61,71]);
possible_ways1.push([41,51,61,71,81]);

possible_ways1.push([10,20,30,40,50]);
possible_ways1.push([20,30,40,50,60]);
possible_ways1.push([30,40,50,60,70]);
possible_ways1.push([40,50,60,70,80]);

possible_ways1.push([19,29,39,49,59]);
possible_ways1.push([29,39,49,59,69]);
possible_ways1.push([39,49,59,69,79]);

possible_ways1.push([28,38,48,58,68]);
possible_ways1.push([38,48,58,68,78]);

possible_ways1.push([37,47,57,67,77]);

////diagonal right-left(2)
possible_ways1.push([5,13,21,29,37]);

possible_ways1.push([6,14,22,30,38]);
possible_ways1.push([14,22,30,38,46]);

possible_ways1.push([7,15,23,31,39]);
possible_ways1.push([15,23,31,39,47]);
possible_ways1.push([23,31,39,47,55]);

possible_ways1.push([8,16,24,32,40]);
possible_ways1.push([16,24,32,40,48]);
possible_ways1.push([24,32,40,48,56]);
possible_ways1.push([32,40,48,56,64]);

possible_ways1.push([9,17,25,33,41]);
possible_ways1.push([17,25,33,41,49]);
possible_ways1.push([25,33,41,49,57]);
possible_ways1.push([33,41,49,57,65]);
possible_ways1.push([41,49,57,65,73]);

possible_ways1.push([18,26,34,42,50]);
possible_ways1.push([26,34,42,50,58]);
possible_ways1.push([34,42,50,58,60]);
possible_ways1.push([42,50,58,60,74]);

possible_ways1.push([27,35,43,51,59]);
possible_ways1.push([35,43,51,59,67]);
possible_ways1.push([43,51,59,67,75]);

possible_ways1.push([36,44,52,60,68]);
possible_ways1.push([44,52,60,68,76]);

possible_ways1.push([45,53,61,69,77]);


}
document.getElementById('gameover').style.display = "none";
document.getElementById('message').innerHTML="Blue's TURN";
loadAnswers();  
//making X as first move    
var currentPlayer = [];
currentPlayer.push('X');
//xo click
var game=function (s)
{   
    var c=s.id;
    var data=document.getElementById(c);
    var play=currentPlayer[currentPlayer.length-1];
    if(play === 'X' && data.value==null) { 
        document.getElementById(c).style.color = "darkblue";
        document.getElementById(c).value="X";
        document.getElementById(c).innerHTML="X";  
currentPlayer.push('O');
        document.getElementById('message').innerHTML="Red's TURN";
    } else if(play === 'O' && data.value==null) {
        document.getElementById(c).style.color = "red";
        document.getElementById(c).value="O";
        document.getElementById(c).innerHTML="O";
currentPlayer.push('X');
        document.getElementById('message').innerHTML="Blue's TURN";
    }
if(currentPlayer.length-1>=80)  
{
 alert('Draw');
location.reload();
}  
    if(play === 'X') {
 winCombo1();
        
    } else {      
 winCombo2();
        
    }
};
var winCombo1 = function() {  
for (var i = 0; i < possible_ways1.length; i++) {    
   var g=document.getElementById(possible_ways1[i][0]).value==='X' && document.getElementById(possible_ways1[i][1]).value==='X' && document.getElementById(possible_ways1[i][2]).value==='X' && document.getElementById(possible_ways1[i][3]).value==='X' && document.getElementById(possible_ways1[i][4]).value==='X';    
        if (g==true){
             alert('Blue WON');
document.getElementById('message').innerHTML="Blue WON";
            gameplayagain();
        }       
    }    
};

var winCombo2 = function() {    
for (var i = 0; i < possible_ways1.length; i++) {    
   var g=document.getElementById(possible_ways1[i][0]).value==='O' && document.getElementById(possible_ways1[i][1]).value==='O' && document.getElementById(possible_ways1[i][2]).value==='O' && document.getElementById(possible_ways1[i][3]).value==='O' && document.getElementById(possible_ways1[i][4]).value==='O';    
        if (g==true){
alert('Red WON');
document.getElementById('message').innerHTML="Red WON";
             gameplayagain();
        }       
    }    
};
function  gameplayagain(){
    document.getElementById('gameplay').style.display = "none";
    document.getElementById('gameover').style.display = "block";
}
