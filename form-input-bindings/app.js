var app = new Vue({
    el: '#app',
    data: {
        message: '',
        multilineMessage: '',
        checked: false,
        checkedNames: [],
        picked: null,
        selected: null,
        multipleSelected: [],
        options: [
            { text: 'One', value: 'A'},
            { text: 'Two', value: 'B'},
            { text: 'Three', value: 'C'}
        ],
        dynamicSelected: null,
        a: { custom: { value: true } },
        b: { custom: { value: false } },
        toggle: null,
        pick: null,
        boundSelected: null,
        lazy: '',
        age: null,
        trim: ''
    }
});
