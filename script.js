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
  
