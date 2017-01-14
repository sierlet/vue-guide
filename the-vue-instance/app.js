var CustomComponent = Vue.extend({
    methods: {
        consoleLog: function () {
            console.log('Inherited');
        }
    }
});

var app = new CustomComponent({
    el: '#app'
});

var data = { a: 1 };
var vm = new Vue({
    data: data
});

console.log(data.a === vm.a); // true

vm.a = 2;
console.log(data.a === vm.a); // true

data.a = 3;
console.log(data.a === vm.a); // true

var data2 = { a: 1 };
var app2 = new Vue({
    el: '#app-2',
    data: data2
});

console.log(app2.$data === data2); // true
console.log(app2.$el === document.getElementById('app-2')); // true

app2.$watch('a', function (newValue, oldValue) {
    console.log("Attribute 'a' changed from '" + oldValue + "' to '" + newValue + "'");
});
app2.a = 2;

var app3 = new Vue({
    el: '#app-3',
    data: {
        a: 1
    },
    beforeCreate: function () {
        console.log('beforeCreate');
    },
    created: function () {
        console.log('created');
    },
    beforeMount: function () {
        console.log('beforeMount');
    },
    mounted: function () {
        console.log('mounted');
        this.a = 2;
    },
    beforeUpdate: function () {
        console.log('beforeUpdate');
    },
    updated: function () {
        console.log('updated');
        this.$destroy();
    },
    beforeDestroy: function () {
        console.log('beforeDestroy');
    },
    destroyed: function () {
        console.log('destroyed');
    }
});
