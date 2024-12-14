<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-[minmax(0,300px),1fr] gap-6 relative"
  >
    <div class="left-block flex flex-col gap-16 mt-5 h-full">
      <slot name="left"></slot>
    </div>
    <div id="right" class="right-block flex flex-col gap-10 mt-5">
      <slot name="right"></slot>
    </div>
  </div>
</template>
