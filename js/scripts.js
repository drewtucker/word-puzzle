$(document).ready(function(){
  var vowels = ['a','e','i','o','u'];
  var puzzle = "";

  $("#form1").submit(function(event){
    event.preventDefault();
    var userSentence = $("#input1").val();
    var count = 0;
    for (var count = 0; count < userSentence.length; count++){
      for (var vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++){
        var sentenceChar = userSentence[count];
        var vowelChar = vowels[vowelIndex];
        if (sentenceChar === vowelChar){
          puzzle += '-';
          count++;
        }
      }
      if (userSentence[count] === undefined){
        puzzle += "";
      } else {
        puzzle += userSentence[count];
      }
    }

    console.log(puzzle);

  });
});
