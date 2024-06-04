import { useEffect, useState } from "react";
import axios from "axios";

export default function useSetting() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('/api/auth/setting', {
                    withCredentials: true
                });
                setUser(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.response.data);
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    return { user, loading, error };
}
