function getInfo(name) {
  $.ajax({
    url: 'https://wind-bow.glitch.me/twitch-api/channels/' + name,
    type: 'GET',
    dataType: 'JSON',
    success: function(data) {
      $.ajax({
        url: 'https://wind-bow.glitch.me/twitch-api/streams/' + name,
        dataType:'JSON',
        success: function(d) {
          var state = (d.stream == null)? "Offline":"Online";
          var sign = (state == "Online")? '<i class="fa fa-circle green" aria-hidden="true"></i>':'<i class="fa fa-circle grey" aria-hidden="true"></i>'
          $('.container').append('<div class="element"><img src="'+ data.logo +'" alt="logo" width="50px" height="50px"><h4><a href="'+data.url+'">'+data.name+'</a></h4><p>'+sign+ " " +state+'</p></div>');
          $('footer').show();
        }
      });
    }
  });
}


var elements = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];


$(document).ready(function() {
  $('.container').hide();
  $('footer').hide();
  setTimeout(function(){
    $('img').hide();
    $('.container').show();
    // getInfo('freecodecamp');
  $.each(elements, function(i, val) {
    getInfo(val);
  });

  }, 2500);

  $("#search").click(function(e) {
    e.preventDefault();

    var searchVal = $('input').val();
    if(searchVal != "") {
        $(".element").hide();
        getInfo($('input').val());
    } else {
      $('.element').show();
    }

  });



});
