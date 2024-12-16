<script setup lang="ts">
import { UserMenu } from "~/src/features/menu/user-menu";
import { Footer } from "~/src/widgets/footer";
import { Header } from "~/src/widgets/header";
import BaseModal from "~/src/shared/ui/modal/BaseModal.vue";

const toast = useToast();
const modal = useModal();
const count = ref(0);

function openModal() {
  count.value += 1;
  modal.open(BaseModal, {});
}
</script>
<template>
  <UButton class="absolute top-12 left-12" label="Reveal modal" @click="openModal" />
  <UContainer>
    <div class="flex flex-col justify-between h-full min-h-screen">
      <Header />
      <div class="h-full pb-12">
        <UserMenu />
        <slot></slot>
      </div>
      <Footer />
    </div>
  </UContainer>
</template>
