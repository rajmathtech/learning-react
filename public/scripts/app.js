'use strict';

var ele = document.getElementById('root');
var title = 'Welcome to ExpenseApp';
var options = ['one item', 'two item'];
var picked = undefined;
var formSubmitHandler = function formSubmitHandler(e) {
    e.preventDefault();
    options.push(e.target.elements.option.value);
    e.target.elements.option.value = '';
    render();
};
var resetAllHandler = function resetAllHandler() {
    options = [];
    render();
};
var pickOneHandler = function pickOneHandler() {
    var index = Math.floor(Math.random() * options.length) + 1;
    picked = options[index - 1];
    render();
};
render();
function render() {
    var jsx = React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
            'h1',
            null,
            ' ',
            title,
            ' '
        ),
        React.createElement(
            'ol',
            null,
            options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: formSubmitHandler },
            React.createElement('input', { placeholder: 'enter item name', name: 'option' }),
            React.createElement(
                'button',
                null,
                ' Add '
            )
        ),
        React.createElement(
            'button',
            { onClick: resetAllHandler },
            'ResetAll'
        ),
        React.createElement(
            'button',
            { onClick: pickOneHandler },
            'PickOne'
        ),
        React.createElement(
            'p',
            null,
            'you picked: ',
            picked
        )
    );
    ReactDOM.render(jsx, ele);
};
