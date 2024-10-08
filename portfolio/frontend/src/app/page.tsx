"use client"; 
import { useEffect, useState } from 'react';

interface ApiResponse {
    success: boolean;
    message: string;
}

export default function Home() {
    const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/test');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: ApiResponse = await response.json();
                setApiResponse(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>API Response</h1>
            <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
          
        </div>
    );
}
