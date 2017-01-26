<template>
    <div>
        <p>Hello component!</p>
        <p @click="increment">
            You clicked this element {{ counter }} {{ counter | pluralize('time', 'times') }}
        </p>
    </div>
</template>

<script>
export default {
    data () {
        return { counter: 0 };
    },
    methods: {
        increment () {
            this.counter += 1;
        }
    },
    filters: {
        pluralize (count, single, multiple) {
            return count === 1 ? single : multiple;
        }
    }
};
</script>
