<script setup>
import { onBeforeUnmount, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Sidebar from "./Sidebar.vue";

const route = useRoute();
const menuOpen = ref(false);

watch(
    () => route.fullPath,
    () => {
        menuOpen.value = false;
    }
);

watch(menuOpen, (isOpen, _, onCleanup) => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
        if (event.key === "Escape") menuOpen.value = false;
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    onCleanup(() => {
        document.body.style.overflow = previousOverflow;
        document.removeEventListener("keydown", closeOnEscape);
    });
});

onBeforeUnmount(() => {
    menuOpen.value = false;
});
</script>

<template>
    <main class="container-fluid min-vh-100 p-0">
        <header class="d-flex d-md-none align-items-center bg-dark p-2">
            <button type="button" class="btn btn-outline-light" aria-controls="mobileSidebar" :aria-expanded="menuOpen" aria-label="Открыть меню" @click="menuOpen = true">
                <i class="bi bi-list" aria-hidden="true"></i>
            </button>
        </header>

        <div class="row g-0">
            <aside class="d-none d-md-block col-md-3 min-vh-100">
                <Sidebar />
            </aside>
            <section
                class="col-12 col-md-9 min-vh-100 overflow-x-hidden bg-secondary d-flex flex-column align-items-center gap-4 p-3 p-md-4"
                style="min-width: 0"
            >
                <slot />
            </section>
        </div>

        <template v-if="menuOpen">
            <div class="offcanvas-backdrop fade show" @click="menuOpen = false"></div>
            <aside id="mobileSidebar" class="offcanvas offcanvas-start w-100 show d-flex flex-column p-0" tabindex="-1" role="dialog" aria-modal="true" aria-label="Навигационное меню" style="visibility: visible" @keydown.esc="menuOpen = false" >
                <div class="d-flex flex-shrink-0 justify-content-end p-2 bg-dark">
                    <button type="button" class="btn btn-outline-light" aria-label="Закрыть меню" @click="menuOpen = false">
                        <i class="bi bi-x-lg" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="flex-grow-1 overflow-y-auto">
                    <Sidebar />
                </div>
            </aside>
        </template>
    </main>
</template>
