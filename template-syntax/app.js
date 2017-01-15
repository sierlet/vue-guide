var app = new Vue({
    el: '#app',
    data: {
        msg: 'Hello Vue!',
        rawHtml: '<b>raw html</b>',
        dynamicId: 'dyn-id-1',
        dynamicCondition: false,
        number: 1,
        url: 'https://www.google.com'
    },
    methods: {
        consoleLog: function () {
            console.log(this);
        }
    },
    filters: {
        toUpper: function (value) {
            if (!value) return '';
            return value.toString().toUpperCase();
        },
        toLower: function (value) {
            if (!value) return '';
            return value.toString().toLowerCase();
        },
        repeat: function repeat(value, times) {
            value = value.toString();
            if (times < 1) {
                return value;
            } else {
                return repeat(value, times - 1) + value;
            }
        }
    }
});

setTimeout(function () {
    app.msg = 'Updated Hello Vue!';
    app.dynamicId = 'dyn-id-2';
    app.dynamicCondition = true;
}, 5000);
