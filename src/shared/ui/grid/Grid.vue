<template>
  <div class="grid grid-cols-1 sm:grid-cols-[minmax(0,300px),1fr] gap-3">
    <div class="left-block flex flex-col gap-6">
      <slot name="left"></slot>
    </div>
    <main
      id="right"
      class="right-block flex flex-col gap-6 shadow-md bg-gray-100 p-3 pb-8 dark:bg-white"
    >
      <slot name="right"></slot>
    </main>
  </div>
</template>
