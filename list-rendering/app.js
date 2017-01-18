Vue.component('custom-component', {
    props: ['item', 'index'],
    template: '<div>{{ index }} - {{ item.message }}</div>'
});

Vue.component('todo-item', {
    props: ['title'],
    template: '<li>{{ title }}<button @click="$emit(\'remove\')">X</button></li>'
});

var app = new Vue({
    el: '#app',
    data: {
        items: [
            { id: 1, message: 'Foo' },
            { id: 2, message: 'Bar' }
        ],
        parentMessage: 'Parent',
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        },
        todos: [],
        newTodoText: '',
        shouldRenderTodos: false,
        numbers: [ 1, 2, 3, 4, 5 ]
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                text: this.newTodoText,
                isComplete: Math.random() > 0.5
            });
            this.newTodoText = '';
        },
        even: function (numbers) {
            return numbers.filter(function (number) {
                return number % 2 === 0;
            });
        }
    },
    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0;
            });
        }
    },
    mounted: function () {
        setTimeout(() => {
            this.shouldRenderTodos = true;
            this.items = this.items.filter(function (item) {
                return item.message.match(/Foo/);
            });

            let newValue = { id: 3, message: 'Baz' };
            // this.items[1] = newValue;
            Vue.set(this.items, 1, newValue);
            this.items.splice(1, 1, newValue);

            let newLength = 1;
            // this.items.length = newLength;
            this.items.splice(newLength);
        }, 5000);
    }
});
