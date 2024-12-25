<template>
    <div class="calendar">
        <h1>{{ formattedDate }}</h1>
        <h2>{{ time }}</h2>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            date:
                new Date(),
            time: ''
        };
    },
    computed: {
        formattedDate():
            string {
            return this.date.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        }
    }, mounted() { 
        this.updateTime(); 
        setInterval(this.updateTime, 1000); 
    }, methods: {
        updateTime() {
             this.date = new Date(); 
             this.time = this.date.toLocaleTimeString('pt-BR');
            } 
}
});
</script>
