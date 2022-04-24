<script setup lang="ts">
import forumData from "@/assets/data.json";
import { reactive } from "vue";

const threads = reactive(forumData.threads);
const posts = reactive(forumData.posts);
const users = reactive(forumData.users);
</script>

<template>
  <div class="max-w-md mx-auto" v-for="thread in threads" :key="thread.id">
    <h2 class="text-xl mb-6">Thread: {{ thread.title }}</h2>
    <div class="mb-10" v-for="postId in thread.posts" :key="postId">
      <p class="text-sm font-bold mb-2">
        User:
        {{
          users.find(
            (user) => user.id === posts.find((p) => p.id === postId)?.userId
          )?.name
        }}
      </p>
      <p>
        {{ posts.find((p) => p.id === postId)?.text }}
      </p>
    </div>
  </div>
</template>
