import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

(function () {

  var templateString = $('#itemTemplate').text();

  var renderTemplate = _.template(templateString);

  // bring up items I want


  _.each( etsy.results, function(item){
    var itemInfo = renderTemplate(item);
    $('.results-area').append(itemInfo);
  });

}());
