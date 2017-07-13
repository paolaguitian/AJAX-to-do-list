// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


//turbolinks-aware page load
$(document).on('turbolinks:load',function(){

  console.log('document ready', new Date());
  $('#task_name').focus();

  $('.modal-footer .btn-primary').click(function(){
    console.log('click');
    console.log($('.modal-body form'));
    $('.modal-body form').submit();

  });



});
