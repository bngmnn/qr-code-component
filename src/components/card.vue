<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  desc: String
})
</script>

<template>
    
        <div class="bg-white rounded-2xl shadow-2xl shadow-black/10 w-80 py-5 font-outfit">
            <div class="px-5">
                <img src="../assets/images/image-qr-code.png" alt="QR code leading to frontendmentor.io" class="rounded-xl" />
            </div>
            <div class="px-7 my-4">
                <h1 class="text-2xl font-bold text-headline text-center my-4">{{ title }}</h1>
                <p class="text-base text-copy text-center">{{ desc }}</p>
            </div>
        </div>

</template>