$('#change-color').click(function() {
  $('#target').css('color', 'blue'); // 色は任意で、ここでは青色に変更
});

$('#change-text').click(function() {
  $('#target').text('こんばんは！'); // 文字内容は任意
});

$('#fade-out').click(function() {
  $('#target').fadeOut('slow'); // 「slow」はフェードアウト速度。速度は任意で調整可能
});

$('#fade-in').click(function() {
  $('#target').fadeIn('slow'); // 「slow」はフェードイン速度。速度は任意で調整可能
});