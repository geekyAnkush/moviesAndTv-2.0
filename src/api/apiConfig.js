const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apikey: process.env.REACT_APP_KEY,
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
