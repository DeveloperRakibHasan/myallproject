$(document).ready(function ($){

	$("#web-designprogressbar").circleProgress({
      value: 0.9,
      size: 200,
      fill: '#FF481F',
      thickness: 2,
      emptyFill: '#fafafa',
   }).on('circle-animation-progress', function(event,progress){
      $(this).find('.progressbar-percentence').html(Math.round(90*progress) + '<i>%</i>');
   });
   $("#grapic-designprogressbar").circleProgress({
      value: 0.65,
      size: 200,
      fill: '#177cf2',
      thickness: 2,
      emptyFill: '#fafafa',
   }).on('circle-animation-progress', function(event,progress){
      $(this).find('.progressbar-percentence').html(Math.round(65*progress) + '<i>%</i>');
   });
   $("#digital-marketprogressbar").circleProgress({
      value: 0.3,
      size: 200,
      fill: '#1A975B',
      thickness: 2,
      emptyFill: '#fafafa',
   }).on('circle-animation-progress', function(event,progress){
      $(this).find('.progressbar-percentence').html(Math.round(30*progress) + '<i>%</i>');
   });
});