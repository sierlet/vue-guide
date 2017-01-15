var app = new Vue({
    el: '#app',
    data: {
        msg: 'Hello Vue!',
        firstName: 'Abel',
        lastName: 'Apple',
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    computed: {
        reversedMsg: function () {
            return this.msg.split('').reverse().join('')
        },
        nowComputed: function () {
            return Date.now()
        },
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            set: function (name) {
                names = name.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    },
    methods: {
        nowMethod: function () {
            return Date.now()
        },
        getAnswer: _.debounce(
            function () {
                if (this.question === '') {
                    this.answer = 'I cannot give you an answer until you ask a question!'
                    return
                }
                if (this.question.indexOf('?') === -1) {
                    this.answer = 'Questions usually contain a question mark. ;-)'
                    return
                }
                this.answer = 'Thinking...'
                axios.get('https://yesno.wtf/api')
                    .then((response) => {
                        this.answer = _.capitalize(response.data.answer)
                    })
                    .catch((error) => {
                        this.answer = 'Error! Could not reach the API. ' + error
                    })
            },
             1000
        )
    },
    watch: {
        question: function (newQuestion) {
            this.answer = 'Waiting for you to stop typing...'
            this.getAnswer()
        }
    },
    mounted: function () {
        setTimeout(() => {
            this.msg = 'Goodby'
            this.fullName = 'Bob Banana'
        }, 5000)
    }
})
