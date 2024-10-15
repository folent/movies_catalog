export const getMovies = async (query, currentPage) => {
    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${query}&page=${currentPage}`);

    return await response.json();
}