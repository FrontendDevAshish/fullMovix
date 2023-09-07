import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = process.env.REACT_APP_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

//This is the api of the original tmdb page this might have the potential error that data does not exist.

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};