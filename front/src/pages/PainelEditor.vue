<script lang="ts"  setup>
import Editor from '../views/Editor.vue'
import Preview from '../views/Preview.vue'
</script>

<template>
    <Contianer>
        <div  class="grid grid-cols-2 ">
            <Editor />
            <Preview />
        </div>
    </Contianer>
</template>