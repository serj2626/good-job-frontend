<script lang="ts" setup></script>

<template>
  <div class="flex flex-col justify-between h-full min-h-screen">
    <Header />
    <div class="h-full pb-12">
      <DefaultSidebar />
      <div class="grid grid-cols-1 sm:grid-cols-[minmax(0,300px),1fr] gap-5">
        <div class="left-block flex flex-col gap-6">
          <slot name="left"></slot>
        </div>
        <main id="right" class="right-block flex flex-col gap-8">
          <slot name="right"></slot>
        </main>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped></style>
