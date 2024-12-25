<template>
    <div>
         <div class="app">
            <home/>
            <Calendar />
         </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Calendar from '../components/calendar.vue';
 export default defineComponent( {
    name: 'app'
 });
</script>