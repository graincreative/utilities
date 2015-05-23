document.addEventListener('DOMContentLoaded', function() {

  var preEl = document.querySelector('.js-pre');
  var postEl = document.querySelector('.js-post');
  var resultEl = document.querySelector('.js-result');

  function proccess() {
    var bigList = [];
    var postList = postEl.value.trim().split('\n');
    preEl.value.trim().split('\n').forEach(function(preItem) {
      postList.forEach(function(postItem) {
        bigList.push(preItem + '' + postItem);
      });
    })

    resultEl.value = bigList.join('\n');
  }

  proccess();

  postEl.addEventListener('input', proccess);
  preEl.addEventListener('input', proccess);

});
