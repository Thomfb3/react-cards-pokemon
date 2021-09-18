import { useState, useEffect } from "react";
import axios from "axios";



function useFlip(initialFlip = true) {
    const [isFlipped, setFlipped] = useState(initialFlip);

    const flip = () => {
        setFlipped(isFlipped => !isFlipped);
    };

    return [isFlipped, flip];
};



const useAxios = (baseUrl) => {
    const [responses, setResponses] = useState([]);
    const [error, setError] = useState(null);

    const addResponses = async (formatter = data => data, moreUrl = "") => {
        try {
            const response = await axios.get(`${baseUrl}/${moreUrl}`);

            setResponses(data => [...data, formatter(response.data)]);

        } catch(error) {
            setError(error)
        };
    };

    const clearResponses = () => setResponses([]);

    return [responses, addResponses, clearResponses];
};



export { useFlip, useAxios };