<script lang="ts" setup>
import { HeroIcons } from "~/src/shared/types/icons/hero-icons";
import Grid from "~/src/shared/ui/grid/Grid.vue";
import SelectAction from "~/src/features/select-action/ui/SelectAction.vue";
import MessageDetail from "./MessageDetail.vue";
</script>

<template>
  <Grid class="h-[600px] w-full overflow-hidden">
    <template #left>
      <div
        class="flex flex-col gap-6 dark:shadow-[-5px_15px_10px_2px_rgba(251,251,251,0.115)]
        h-full w-full overflow-y-auto"
      >
        <!-- Header -->
        <div
          class="py-2 px-2 bg-grey-lighter flex justify-between items-center gap-2"
        >
          <UInput
            size="sm"
            class="flex-grow"
            color="white"
            variant="outline"
            placeholder="Начните вводить..."
          />

          <div class="flex items-center gap-1">
            <Icon
              :name="HeroIcons.RELOAD"
              class="w-5 h-5 hover:scale-105 transition-all duration-200 ease-in cursor-pointer"
            />
            <SelectAction action="resume" />
          </div>
        </div>

        <!-- Contacts -->
        <div class="flex-1 overflow-auto">
          <MessageDetail />
          <MessageDetail />
          <MessageDetail />
          <MessageDetail />
          <MessageDetail />
          <MessageDetail />
          <MessageDetail />
          <MessageDetail />
          <MessageDetail />
          <MessageDetail />
          <MessageDetail />
        </div>
      </div>
    </template>
    <template #right>
      <div
        class="flex flex-col shadow-2xl rounded-md dark:shadow-[5px_5px_10px_2px_rgba(251,251,251,0.115)]"
      >
        <!-- Header -->
        <div class="py-2 px-3 flex flex-row justify-between items-center">
          <div class="flex items-center">
            <div>
              <img
                class="w-10 h-10 rounded-full"
                src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
              />
            </div>
            <div class="ml-4">
              <p class="text-grey-darkest">New Movie! Expendables 4</p>
              <p class="text-grey-darker text-xs mt-1">
                Andrés, Tom, Harrison, Arnold, Sylvester
              </p>
            </div>
          </div>

          <div class="ml-6">
            <SelectAction action="resume" />
          </div>
        </div>

        <!-- Messages -->
        <div class="flex-1 overflow-auto">
          <div class="py-2 px-3">
            <div class="flex justify-center mb-2">
              <div class="rounded py-2 px-4" style="background-color: #ddecf2">
                <p class="text-sm uppercase">February 20, 2018</p>
              </div>
            </div>

            <div class="flex justify-center mb-4">
              <div class="rounded py-2 px-4" style="background-color: #fcf4cb">
                <p class="text-xs">
                  Messages to this chat and calls are now secured with
                  end-to-end encryption. Tap for more info.
                </p>
              </div>
            </div>

            <div class="flex mb-2">
              <div class="rounded py-2 px-3" style="background-color: #f2f2f2">
                <p class="text-sm text-teal">Sylverter Stallone</p>
                <p class="text-sm mt-1">
                  Hi everyone! Glad you could join! I am making a new movie.
                </p>
                <p class="text-right text-xs text-grey-dark mt-1">12:45 pm</p>
              </div>
            </div>

            <div class="flex mb-2">
              <div class="rounded py-2 px-3" style="background-color: #f2f2f2">
                <p class="text-sm text-purple">Tom Cruise</p>
                <p class="text-sm mt-1">
                  Hi all! I have one question for the movie
                </p>
                <p class="text-right text-xs text-grey-dark mt-1">12:45 pm</p>
              </div>
            </div>

            <div class="flex mb-2">
              <div class="rounded py-2 px-3" style="background-color: #f2f2f2">
                <p class="text-sm text-orange">Harrison Ford</p>
                <p class="text-sm mt-1">Again?</p>
                <p class="text-right text-xs text-grey-dark mt-1">12:45 pm</p>
              </div>
            </div>

            <div class="flex mb-2">
              <div class="rounded py-2 px-3" style="background-color: #f2f2f2">
                <p class="text-sm text-orange">Russell Crowe</p>
                <p class="text-sm mt-1">Is Andrés coming for this one?</p>
                <p class="text-right text-xs text-grey-dark mt-1">12:45 pm</p>
              </div>
            </div>

            <div class="flex mb-2">
              <div class="rounded py-2 px-3" style="background-color: #f2f2f2">
                <p class="text-sm text-teal">Sylverter Stallone</p>
                <p class="text-sm mt-1">He is. Just invited him to join.</p>
                <p class="text-right text-xs text-grey-dark mt-1">12:45 pm</p>
              </div>
            </div>

            <div class="flex justify-end mb-2">
              <div class="rounded py-2 px-3" style="background-color: #e2f7cb">
                <p class="text-sm mt-1">Hi guys.</p>
                <p class="text-right text-xs text-grey-dark mt-1">12:45 pm</p>
              </div>
            </div>

            <div class="flex justify-end mb-2">
              <div class="rounded py-2 px-3" style="background-color: #e2f7cb">
                <p class="text-sm mt-1">Count me in</p>
                <p class="text-right text-xs text-grey-dark mt-1">12:45 pm</p>
              </div>
            </div>

            <div class="flex mb-2">
              <div class="rounded py-2 px-3" style="background-color: #f2f2f2">
                <p class="text-sm text-purple">Tom Cruise</p>
                <p class="text-sm mt-1">Get Andrés on this movie ASAP!</p>
                <p class="text-right text-xs text-grey-dark mt-1">12:45 pm</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Input -->
        <div class="px-4 py-4 flex items-center gap-3">
          <div>
            <Icon :name="HeroIcons.SMILE" class="h-7 w-7 text-yellow-700" />
          </div>
          <div class="flex-1 mx-4">
            <UTextarea
              placeholder="Type your message here..."
              size="lg"
              class="w-full"
              :rows="1"
              :maxrows="5"
              autoresize
              color="blue"
            />
          </div>
          <div>
            <Icon
              :name="HeroIcons.PAPER_AIRPLANE"
              class="h-7 w-7 text-blue-600"
            />
          </div>
        </div>
      </div>
    </template>
  </Grid>
</template>

<style lang="scss" scoped></style>
