

$(document).ready(function() {

  for(let i = 2020; i >= 1900; i--) {
    $('.year').append(`<option>${i}</option>`);
  }

});
