'use strict';

console.log('App.js is running');

var app = {
  title: 'Decision',
  subtitle: 'For binary life decisions, put your trust in a computer',
  options: []
};
//
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  //
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};
//
var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};
// // create "Remove All" button above list
// // on click -> wipe the array -> rerender
//
var appRoot = document.getElementById('app');
//
var numbers = [55, 101, 1000];
//
var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ),
    numbers.map(function (number) {
      return React.createElement(
        'p',
        { key: number },
        'Number: ',
        number
      );
    }),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        'Item one'
      ),
      React.createElement(
        'li',
        null,
        'Item two'
      )
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
