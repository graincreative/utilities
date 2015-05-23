document.addEventListener('DOMContentLoaded', function() {
  var state = {
    positionV: '',
    positionH: '',
    algo: ''
  };

  var boxEl = document.querySelector('.box');

  function updateBox(state) {
    boxEl.style.backgroundPosition = state.positionV + ' ' + state.positionH;
    boxEl.style.backgroundSize = state.algo;
  }

  function update(el, property) {
    state[property] = el.options[el.selectedIndex].value;
    updateBox(state);
  }

  function bindState(el, property) {
    var updateBind = update.bind({}, el, property);
    el.addEventListener('change', updateBind);
    updateBind();
  }

  bindState(document.querySelector('.js-horz'), 'positionH');
  bindState(document.querySelector('.js-vert'), 'positionV');
  bindState(document.querySelector('.js-size'), 'algo');
});
