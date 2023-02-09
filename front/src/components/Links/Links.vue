<script lang="ts" setup>
    import { toRefs } from 'vue';
    const props = defineProps(['title', 'url'])

    const {title, url} = toRefs(props)

</script>

<template>
    <div class="links p-2 rounded" >
        <span class="block">{{ title }}</span>        
    </div>
</template>