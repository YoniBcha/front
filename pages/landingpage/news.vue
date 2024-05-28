<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4">Latest News</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(article, index) in articles"
        :key="index"
        class="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <router-link
          :to="{ name: 'Article', params: { id: article.id } }"
          class="block"
        >
          <img
            :src="article.image"
            :alt="article.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2 hover:text-blue-500">
              {{ article.title }}
            </h2>
            <p class="text-gray-700">{{ article.description }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "News about Job creation",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor aliquet velit, eu tempus libero rhoncus nec.",
          image:
            "https://www.clipartkey.com/mpngs/m/115-1153056_job-creation.png",
        },
        {
          id: 2,
          title: "News about manifucturing ",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
          image:
            "https://th.bing.com/th/id/OIP.70PJ__Dh3qilG_R0RKP-QQHaE8?rs=1&pid=ImgDetMain",
        },
        {
          id: 3,
          title: "News about empowering womens",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          image:
            "https://th.bing.com/th/id/OIP.npEHdRzToYyf9G1o_zCg9AHaE4?rs=1&pid=ImgDetMain",
        },
        {
          id: 3,
          title: "News about empowering womens",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          image:
            "https://th.bing.com/th/id/OIP.npEHdRzToYyf9G1o_zCg9AHaE4?rs=1&pid=ImgDetMain",
        },
        {
          id: 3,
          title: "News about empowering womens",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          image:
            "https://th.bing.com/th/id/OIP.npEHdRzToYyf9G1o_zCg9AHaE4?rs=1&pid=ImgDetMain",
        },
        // Add more articles as needed
      ],
    };
  },
};
</script>
