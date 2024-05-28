<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-4">Latest News</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(article, index) in articles" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden">
          <router-link :to="{ name: 'Article', params: { id: article.id }}" class="block">
            <img :src="article.urlToImage" :alt="article.title" class="w-full h-48 object-cover">
            <div class="p-4">
              <h2 class="text-xl font-semibold mb-2 hover:text-blue-500">{{ article.title }}</h2>
              <p class="text-gray-700">{{ article.description }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const articles = ref([]);
  
  const fetchArticles = () => {
    axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'bitcoin',
        apiKey: '4fd53a8edc1b4cbbae075cdcdd0097f5'
      }
    })
    .then(response => {
      articles.value = response.data.articles;
    })
    .catch(error => {
      console.error('Error fetching articles:', error);
    });
  };
  
  onMounted(() => {
    fetchArticles();
  });
  </script>
  