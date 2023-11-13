import axios from "axios";

export const m = axios.create(
    {
       baseURL:process.env.REACT_APP_API_UR,
       headers:{
       Authorization:"bearer " + process.env.REACT_APP_API_TOKEN,
       },
    }
    );