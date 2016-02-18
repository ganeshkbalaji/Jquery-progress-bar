// var count = 0;
//   function progress(percent, $element) {
//   var progressBarWidth = percent * $element.width() / 100;
//   $element.find('div').animate({width: progressBarWidth}, 5000).html(percent + "%");
//   };

// progress(100, $("#progressBar"));

// $('#addBar').click(function() {
//   $(".container").append('<div id="progressBar'+count+'"><div></div></div>');
//   progress(100, $("#progressBar"+count));
//   count++;
// })

(function ($) {
    $.fn.progressbar = function (options)
    {
        var settings = $.extend({
        width:'200px',
        height:'22px',
        color:'#292929',
        padding:'0px',
        border:'1px solid #ddd'},options);

        //Set css to container
        $(this).css({
          'width':settings.width,
          'border':settings.border,
          'border-radius':'5px',
          'overflow':'hidden',
          'display':'inline-block',
          'padding': settings.padding,
          'margin':'0px 10px 5px 5px'
          });


        // add progress bar to container
        var progressbar =$("<div></div>");
        progressbar.css({
        'height':settings.height,
        'text-align': 'right',
        'vertical-align':'middle',
        'color': '#fff',
        'width': '0px',
        'border-radius': '3px',
        'background-color': settings.color
        });

        $(this).append(progressbar);

        this.progress = function(percent, $element)
        {
          var progressBarWidth =percent * $element.width() / 100;
          $element.find('div').animate({width: progressBarWidth}, 5000).html(percent + "%");
        }
        return this;
    };

}(jQuery));

var bar1 =  $("#progress").progressbar({color:'#145ABA'})

bar1.progress(100, $("#progress"));
