import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyCM6az2QF3X3hetkfs2vjOMUzZSD4v1h8g'
    }
})