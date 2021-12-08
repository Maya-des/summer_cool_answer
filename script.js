$(function() {

  let fileName1 = [
    // 画像ファイルのフルパスを記載して下さい。外れ
    'images/special_wrong.jpg',
  ]

  let fileName2 = [
    // 画像ファイルのフルパスを記載して下さい。正解
    'images/special_right.jpg',
  ]

  let current = 0;

  $('.select-button1').each(function(i) {
    $('.select-button1').eq(i).on('click', function() {
      current = i;
      $('#picture1').attr('src', fileName1[current]);
    });
  });

  $('.select-button2').each(function(i) {
    $('.select-button2').eq(i).on('click', function() {
      current = i;
      $('#picture1').attr('src', fileName2[current]);
    });
  });

  $('.select-button3').each(function(i) {
    $('.select-button3').eq(i).on('click', function() {
      current = i;
      $('#picture1').attr('src', fileName1[current]);
    });
  });

  $('.select-button4').each(function(i) {
    $('.select-button4').eq(i).on('click', function() {
      current = i;
      $('#picture1').attr('src', fileName1[current]);
    });
  });

  $('.select-button5').each(function(i) {
    $('.select-button5').eq(i).on('click', function() {
      current = i;
      $('#picture1').attr('src', fileName1[current]);
    });
  });

});
