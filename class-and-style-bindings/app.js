Vue.component('custom-component', {
    template: '<div class="inside"></div>'
});

var app = new Vue({
    el: '#app',
    data: {
        isActive: true,
        hasError: false,
        classObject: {
            active: true,
            'has-error': false
        },
        error: null,
        activeClass: 'active',
        errorClass: 'has-error',
        activeColor: 'red',
        fontSize: 12,
        styleObject: {
            color: 'red',
            fontSize: '12px'
        },
        baseStyles: {
            transform: 'rotate(7deg)'
        },
        overridingStyles: {
            transform: 'rotate(15deg)'
        }
    },
    computed: {
        classObjectComputed: function () {
            return {
                active: !this.error && this.isActive,
                'has-fatal-error': this.error && this.error.type === 'fatal'
            };
        }
    },
    methods: {
    },
    mounted: function () {
        setTimeout(() => {
            this.isActive = false;
            this.hasError = true;
            this.error = {type: 'fatal'};
        }, 5000);
    }
});
