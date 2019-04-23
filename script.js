var sites = [
        'http://www.stefkors.com',
        'http://www.zavidova.com',
        'http://titusknegtel.nl',
        'https://puckey.studio',
        'http://www.nicolelavelle.com',
        'http://allielinn.com',
        'http://www.martonkabai.com',
        'https://frankchimero.com',
        'http://www.harrisontyler.com',
    'http://theunkarelse.net'

    ];

    function randomSite() {
        var i = parseInt(Math.random() * sites.length);
        location.href = sites[i];
    };



  function correspondance() {
        $("#first_link").hide();
      $("#second_link").show();
        $("#third_link").show();
      console.log('works?')
  };

  function bio() {
     $("#first_bio").hide();
     $("#first_bio").show();
      $("#second_bio").show();
      console.log('works?')
  };
  function bye() {
     $("#first_bio").hide();
     $("#first_bio").show();
      $("#second_bio").hide();
      console.log('works?')
  };
  function book() {
     $("#book_state").hide();
     $("#second_book").show();
     $("#third_book").show();
     $("#purchase").show();
      console.log('works?')
  };
  function bye_book() {
     $("#book_state").show();
     $("#second_book").hide();
     $("#third_book").hide();
     $("#purchase").hide();
      console.log('works?')
  };

// MOBILE

function menu() {
   // $("#menu_bio").toggle();
    $("#menu_bio").toggleClass('showbio');
    console.log('works?')
}

function menu_correspondance() {
      $("#menu_first_link").hide();
    $("#menu_second_link").show();
      $("#menu_third_link").show();
    console.log('works?')
};
function menu_book() {
   $("#menu_book_state").hide();
   $("#menu_second_book").toggle();
   $("#menu_third_book").toggle();
   $("#menu_purchase").toggle();
    console.log('works?')
};
