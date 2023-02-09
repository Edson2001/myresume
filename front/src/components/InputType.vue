<script lang="ts" setup>
import { toRefs } from 'vue'
const props = defineProps(['label', 'placeholder', 'typeInput'])
const {label, placeholder, typeInput} = toRefs(props)

</script>

<template>
    <div class="flex flex-col mt-5 w-100">
        <label v-if="label" class="text-sm mb-1" for="">{{label}}</label>
        <input :placeholder="placeholder" :type="typeInput" class="p-2 rounded"  name="" id="">
    </div>
</template>