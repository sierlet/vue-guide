var Local = {
    template: '<p>A local component!</p>'
};

var Posts = {
    template: '<h1>posts</h1>'
};

var cheat = { counter: 0 };

var bus = new Vue();

Vue.component('global-component', {
    template: '<p>A global component!</p>'
});

Vue.component('custom-tr', {
    template: '<tr>Custom tr component</tr>'
});

Vue.component('simple-counter-cheat', {
    template: '<button @click="counter += 1">{{ counter }}</button>',
    data: function () {
        return cheat;
    }
});

Vue.component('simple-counter', {
    props: ['initialCounter'],
    template: '<button @click="increment">{{ counter }}</button>',
    data: function () {
        return { counter: this.initialCounter || 0 };
    },
    methods: {
        increment: function () {
            this.counter += 1;
            this.$emit('increment');
            bus.$emit('increment');
        }
    }
});

Vue.component('child', {
    props: ['message', 'literal', 'dynamic'],
    template: '<span>{{ normalizedMessage }}</span>',
    computed: {
        normalizedMessage: function () {
            return this.message.trim().toLowerCase();
        }
    },
    mounted: function () {
        if (this.literal) console.log(typeof this.literal);
        if (this.dynamic) console.log(typeof this.dynamic);
    }
});

Vue.component('bus-counter', {
    template: '<span>{{ counter }}</span>',
    data: function () {
        return { counter: 0 };
    },
    created: function () {
        bus.$on('increment', () => {
            this.counter += 1;
        });
    }
});

Vue.component('validation', {
    props: {
        propA: Number,
        propB: [String, Number, Boolean, Function, Object, Array], // `null` for all of those
        propC: {
            type: String,
            required: true
        },
        propD: {
            type: Number,
            default: 100
        },
        propE: {
            type: Object,
            default: function () {
                return { message: 'hello' };
            }
        },
        propF: {
            validator: function (value) {
                return value > 10;
            }
        }
    }
});

Vue.component('currency-input', {
    template: `
        <span>
            $
            <input
                ref="input"
                :value="value"
                @input="updateValue($event.target.value)"
            >
        </span>
    `,
    props: ['value'],
    methods: {
        updateValue: function (value) {
            var formattedValue = value.trim().slice(0, value.indexOf('.') + 3);
            if (formattedValue !== value) {
                this.$refs.input.value = formattedValue;
            }
            this.$emit('input', Number(formattedValue));
        }
    }
});

Vue.component('child-with-slot', {
    template: `
        <div>
            <header>
                <h2>I'm the child title</h2>
                <slot name="header"></slot>
            </header>
            <main>
                <slot>
                    This will only be displayed if there is no content
                    to be distributed.
                </slot>
                <slot name="scoped" text="hello from child"></slot>
            </main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>
    `
});

Vue.component('async-component', function (resolve, reject) {
    setTimeout(function () {
        resolve({
            template: '<p>Async!</p>'
        });
    }, 1000);
});

Vue.component('inline-component', {});

Vue.component('x-template-component', {
    template: '#x-template-ref'
});

Vue.component('cheap-static-component', {
    template: `
        <div v-once>
            <p>Only rendered once</p>
        </div>
    `
});

var app = new Vue({
    el: '#app',
    components: {
        'local-component': Local,
        home: {
            template: '<h1 @click="count += 1">home: {{ count }}</h1>',
            data: function () {
                return { count: 0 };
            }
        }
    },
    data: {
        parentMsg: 'Message from parent',
        total: 0,
        currentView: 'home'
    },
    methods: {
        incrementTotal: function () {
            this.total += 1;
        },
        log: function (message) {
            console.log(message);
        }
    },
    mounted: function () {
        console.log(this.$refs.child);
        setTimeout(() => {
            this.currentView = Posts;
            setTimeout(() => {
                this.currentView = 'home';
            }, 5000);
        }, 5000);
    }
});
