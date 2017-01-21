Vue.config.keyCodes.f1 = 112;

var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        name: 'Vue.js'
    },
    methods: {
        greet: function (event) {
            alert(`Hello ${this.name}!`);

            if (event) alert(event.target.tagName);
        },
        say: function (message) {
            alert(message);
        },
        warn: function (message, event) {
            if (event) event.preventDefault();
            alert(message);
        },
        log: function (input) {
            console.log(input);
        },
        isNotCalled: function () {
            console.log('This never happens.');
        }
    }
});
