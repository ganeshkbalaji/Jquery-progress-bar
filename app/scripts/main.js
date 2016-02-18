var count = 0;
  function progress(percent, $element) {
  var progressBarWidth = percent * $element.width() / 100;
  $element.find('div').animate({width: progressBarWidth}, 5000).html(percent + "%");
  };

// progress(100, $("#progressBar"));

$('#addBar').click(function() {
  $(".container").append('<div id="progressBar'+count+'"><div></div></div>');
  progress(100, $("#progressBar"+count));
  count++;
})
