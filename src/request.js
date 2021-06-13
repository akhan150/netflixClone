const uniqueApiKey = "b324281f5f13732d2ff8596d3cd1e046";
const request = {
    fetchAction: `/discover/movie?api_key=${uniqueApiKey}&with_genres=28`,
    fetchComedy: `/discover/movie?api_key=${uniqueApiKey}&with_genres=35`,
    fetchDocumentaries: `/discover/movie?api_key=${uniqueApiKey}&with_genres=99`,
    fetchNetflixOriginals:  `/discover/tv?api_key=${uniqueApiKey}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${uniqueApiKey}&language=en-US`,
    fetchTrending: `/trending/all/week?api_key=${uniqueApiKey}&language=en-US`,
    fetchRomance: `/discover/movie?api_key=${uniqueApiKey}&with_genres=10749`

}

export default request;