import axios from "axios";
import { API_BASE_URL } from '../config';

export async function getSongs(searchTerm, pageNumber, pageLimit) {
    try {
        const url = `${API_BASE_URL}/search?term=${searchTerm}&offset=${pageNumber}&limit=${pageLimit}`;
        const response = await axios.get(url);
        
        return response.data;
    }
    catch (err) {
        throw err;
    }
}
