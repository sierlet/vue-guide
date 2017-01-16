var app = new Vue({
    el: '#app',
    data: {
        ok: true,
        loginType: 'username'
    },
    methods: {
        toggleType: function () {
            if (this.loginType === 'username') {
                this.loginType = 'email';
            } else {
                this.loginType = 'username';
            }
        }
    },
    mounted: function () {
        setTimeout(() => {
            this.ok = false;
        }, 5000);
    }
});
