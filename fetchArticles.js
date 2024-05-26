const axios = require('axios');
const fs = require('fs');

const fetchArticles = async () => {
  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'bitcoin',
        apiKey: '4fd53a8edc1b4cbbae075cdcdd0097f5',
      },
    });
    const articles = response.data.articles;
    fs.writeFileSync('static/articles.json', JSON.stringify(articles, null, 2));
    console.log('Articles saved to articles.json');
  } catch (error) {
    console.error('Error fetching articles:', error);
  }
};

fetchArticles();
