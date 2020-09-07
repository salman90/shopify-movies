import axios from 'axios';
import { URL, API_KEY, PARAM_TYPE } from '../constants/constant';

export const fetchMoviesNew = async (text) => {
    console.log(text, " text")
    return axios.get(`${URL}apikey=${API_KEY}`, {
        params: {
            s: text,
            type: PARAM_TYPE
        }
    })
    .then((res) => {
        console.log(res, "res")
        if (res.data.Response === "True") {
            console.log(res.data.Search, " in true")
            return res.data.Search;
        }
        else
        {
            throw new Error(res.data.Error);
        }
    })
    .catch((err) => {
        return err;
    })
}
