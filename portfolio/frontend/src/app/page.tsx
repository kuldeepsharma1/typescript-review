"use client";
import { useEffect, useState } from "react";

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
        const response = await fetch("http://localhost:8000/api/posts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
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
    // <div>
    //     <h1>API Response</h1>
    //     <pre>{JSON.stringify(apiResponse, null, 2)}</pre>

    // </div>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">API Response</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apiResponse.map((post) => (
          <div key={post._id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4">{post.content}</p>
            <p className="text-sm text-gray-500">Author: {post.author}</p>
            <p className="text-sm text-gray-500">
              Created At: {new Date(post.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
