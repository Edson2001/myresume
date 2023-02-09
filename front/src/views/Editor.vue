<script lang="ts" setup>

import Links from '../components/Links/Links.vue';
import TextAreaType from "../components/TextAreaType.vue"
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
            <div class="flex flex-1 gap-4">
               <Links title="github" url="https://github.com/edson2001" />
               <Links title="LinkEdin" url="https://linkedin.com/edson2001" />
            </div>
            <a href="" class="block mt-2 mb-3 font-bold">Adicionar links</a>
        </section>
        <section class="mb-2">
            <h3 class="font-bold ">Sobre mim</h3>
            <div class="grid grid-cols-1 gap-4">
               <TextAreaType />
            </div>
        </section>
    </div>
</template>