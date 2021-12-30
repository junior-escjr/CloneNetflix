const API_KEY = "38c007f28d5b66f36b9c3cf8d8452a4b";
const API_BASE = "https://api.themoviedb.org/3";
const LANGUAGE = "language=pt-br";

const basicFetch = async ( endpoint ) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&${LANGUAGE}&api_key=${API_KEY}`)
            },

            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?${LANGUAGE}&api_key=${API_KEY}`)
            },

            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?${LANGUAGE}&api_key=${API_KEY}`)
            },

            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&${LANGUAGE}&api_key=${API_KEY}`)
            },

            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&${LANGUAGE}&api_key=${API_KEY}`)
            },

            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&${LANGUAGE}&api_key=${API_KEY}`)
            },

            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&${LANGUAGE}&api_key=${API_KEY}`)
            },

            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&${LANGUAGE}&api_key=${API_KEY}`)
            }
        ];
    },

    getMovieInfo: async ( movieId, type ) => {
        let info = {};

        if( movieId ) {
            switch( type ) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?${LANGUAGE}&api_key=${API_KEY}`);
                break;

                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?${LANGUAGE}&api_key=${API_KEY}`);
                break;

                default:
                    info = null;
                break;
            }
        }

        return info;
    }
}