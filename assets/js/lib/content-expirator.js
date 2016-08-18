 // see http://dansnetwork.com/content-expirator-jquery-content-expiration-plugin/

define(['jquery','moment'], function($, moment) {

  $.fn.loadEvenements = function(urlJson) {

    var evenementJson;
    var timeApiLocal;
    var requestEvent = $.ajax({
        dataType: 'json',
        type: 'GET',
        url: '/peb01/evenement.json',
        success: function (data) {
            evenementJson = data;
            timeApiLocal = moment().format('lll');
        },
        error: function () {
            console.log('evenement.json non disponible');
        }
    });
    // requete lente, a voir mise en place desync confirmation de la date
    // confirmation date en desynchro, refresh si
    // var requestTime = requestEvent.then(function(){
    //   return $.ajax({
    //     dataType: 'jsonp',
    //     type: 'GET',
    //     url: 'http://www.timeapi.org/utc/now.json',
    //     success: function (data) {
    //         timeApi = moment(data).format('lll');
    //         // console.log('timeapi: '+timeApi);
    //         // console.log(' moment(): '+ moment().format('lll'));
    //         // console.log(moment('20160129','YYYYMMDD').fromNow());
    //     },
    //     error: function () {
    //         timeApi = moment().format('lll');
    //         console.log('local time');
    //     }
    //   });
    // });

    // var display = requestTime.then( function(){
    var display = requestEvent.then( function(){
      return $.each( evenementJson, function( i, item ) {
        $( '<li>' ).html( item.title ).appendTo( '#aside-events' ).fadeIn();
        if ( i === 3 ) {
          return false;
        }
      });
    });

    display.done(function() {
      // data retrieved from url2 as provided by the first request
    });

  };



  // $.fn.contentExpirator = function(prfx) {
  //   var pfix = prfx || 'exp';
  //   $('[class|='+pfix+']').each(function(){
  //     var eString = $(this).attr('class').split(' ')[0];
  //     var dString = eString.split('-');
  //     console.log('dString: '+dString);
  //     var d = new Date(dString[1],dString[2].toString()-1,dString[3]);
  //     console.log('d: '+d);
  //     var today = new Date();
  //     console.log('new Date: '+today);
  //     if(d < today){
  //       $(this).css('display','none');
  //     }
  //   });
  // };
});


