/*for(var i = 100; i <= 200; i++){
  if((i % 3 == 0) && (i % 4 == 0)){
    console.log("LoopyLighthouse");
  }else if(i % 3 == 0){
    console.log("Loopy");
  }else if(i % 4 == 0){
    console.log("Lighthouse");
  }else{
    console.log(i);
  }
}
*/

/*var start = 0;
var end = 0;
var mult1 = 0;
var mult2 = 0;
var word1 = "";
var word2 = "";
*/

/*
var loopyLighthouse = function(range = [start, end], multiples = [mult1, mult2], words = [word1, word2]){

  for(var i = range[0]; i <= range[1]; i++){
    if((i % multiples[0] === 0) && (i % multiples[1] === 0)){
      console.log(words[0] + words[1]);
    }else if(i % multiples[0] === 0){
      console.log(words[0]);
    }else if(i % multiples[1] === 0){
      console.log(words[1]);
    }else{
      console.log(i);
    }
  }
};

loopyLighthouse([100, 200], [3, 4], ["Loopy", "Lighthouse"]);
*/
/*
var range = [];
var loopyLighthouse = function(range, multiples, words){
  var start;
  var end;
  var mult1;
  var mult2;
  var word1;
  var word2;
  range = [start, end];
  multiples = [mult1, mult2];
  words = [word1, word2];

  for(var i = range[0]; i <= range[1]; i++){
    if((i % multiples[0] == 0) && (i % multiples[1] == 0)){
      console.log(words[0] + words[1]);
    }else if(i % multiples[0] == 0){
      console.log(words[0]);
    }else if(i % multiples[1] == 0){
      console.log(words[1]);
    }else{
      console.log(i);
    }
  }
}

loopyLighthouse([100, 200], [3, 4], ["Loopy", "Lighthouse"]);
*/
//DID NOT NEED TO CREATE ARRAY INSIDE FUNCTION!!
var loopyLighthouse = function(range, multiples, words){
  for(var i = range[0]; i <= range[1]; i++){
    if((i % multiples[0] === 0) && (i % multiples[1] === 0)){
      console.log(words[0] + words[1]);
    }else if(i % multiples[0] === 0){
      console.log(words[0]);
    }else if(i % multiples[1] === 0){
      console.log(words[1]);
    }else{
      console.log(i);
    }
  }
};

loopyLighthouse([100, 200], [3, 4], ["Loopy", "Lighthouse"]);
