<script lang="ts" setup>
import forumData from "@/assets/data.json";
import { computed, reactive } from "@vue/reactivity";

const props = defineProps<{
  threadId: string;
}>();

/* DATA */
const threads = reactive(forumData.threads);
const posts = reactive(forumData.posts);

/* COMPUTED */
const thread = computed(() => {
  return threads.find((thread) => thread.id === props.threadId);
});

const postsByThread = computed(() => {
  return posts.filter((post) => thread.value?.posts.includes(post.id));
});
</script>

<template>
  <h2 class="text-xl mb-4">{{ thread?.title }}</h2>
  <ul>
    <li class="mb-4" v-for="post in postsByThread" :key="post.id">
      <span>{{ post.text }}</span>
    </li>
  </ul>
</template>

<style></style>
