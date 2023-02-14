<script lang="ts" setup>
import { ref } from 'vue';
import Links from '../components/Links/Links.vue'
import Sidebar from "primevue/sidebar"
import TextAreaType from "../components/TextAreaType.vue"
const visibleLeft = ref(false)
</script>
<template>
   <div class="editorArea" >
        <h1 class="text-center text-lg font-bold mt-2 mb-2" >MyResume</h1>
        <section class="mb-2">
            <h3 class="font-bold ">Informações pessoais</h3>
            <div class="grid grid-cols-2 gap-4">
                <InputType typeInput="text" label="Primeiro nome" />
                <InputType typeInput="text" label="Último nome" />
                <InputType typeInput="email" label="E-mail" />
                <InputType typeInput="number" label="Número de telefone" />
                <InputType typeInput="text" label="País" />
                <InputType typeInput="text" label="Cidade/Provincia" />
            </div>
        </section>

        <section class="mb-2">
            <h3 class="font-bold ">Links</h3>
            <div class="flex flex-wrap flex-1 gap-4">
               <Links v-for="item in 5" title="github" url="https://github.com/edson2001" />
            </div>
            <a href="" class="block mt-2 mb-3 font-bold">Adicionar links</a>
        </section>
        <section class="mb-2">
            <h3 class="font-bold ">Hablidades</h3>
            <div class="flex flex-wrap flex-1 gap-4">
               <Links v-for="item in 5" title="Electron.js" url="https://github.com/edson2001" />
            </div>
            <a href="" class="block mt-2 mb-3 font-bold">Adicionar hablidades</a>
        </section>
        <section class="mb-2">
            <h3 class="font-bold ">Sobre mim</h3>
            <div class="grid grid-cols-1 gap-4">
               <TextAreaType />
            </div>
        </section>

        <section class="mb-2">
            <h3 class="font-bold ">Experiências</h3>
            
            <a href="" class="block mt-2 mb-3 font-bold">Adicionar experiências</a>
        </section>
        <section class="mb-2">
            <h3 class="font-bold ">Projectos</h3>
            
            <a href="" @click.prevent="visibleLeft=true" class="block mt-2 mb-3 font-bold">Adicionar projectos</a>
        </section>

        <section class="mb-2">
            <h3 class="font-bold ">Formação Académica/Cursos</h3>
            
            <a href="" class="block mt-2 mb-3 font-bold">Adicionar Formação</a>
        </section>
    </div>
    <Sidebar v-model:visible="visibleLeft">
        Content
    </Sidebar>
</template>