

import Button from '@/components/basic/Button'
import Bento from '@/components/utils/Bento'

interface Posts {
  title: string;
  content: number;
}
export default async function Page() {
  let data = await fetch('http://localhost:8000/api/posts') 
  console.log('I am inside server');
  
  let posts = await data.json() 


  return (
 
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">API Response</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post._id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4">{post.content}</p>
            <p className="text-sm text-gray-500">Author: {post.author}</p>
            <p className="text-sm text-gray-500">
              Created At: {new Date(post.createdAt).toLocaleString()}
            </p>
            <div className='mt-4'>
            <Button/>
            </div>
          
          </div>
        ))}
      </div>
      <div>
              <Bento/>
            </div>
    </div>
  );
}
