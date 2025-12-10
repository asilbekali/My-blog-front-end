import { MessageSquare } from 'lucide-react';

const HomePage = () => {
  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=600&fit=crop',
      title: 'Beautiful Sunset',
      description: 'Amazing sunset view from the mountains',
      likes: 234,
      comments: 45,
      date: '2 hours ago'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1682687221038-404cb8830901?w=800&h=600&fit=crop',
      title: 'City Lights',
      description: 'Night photography of downtown',
      likes: 189,
      comments: 32,
      date: '5 hours ago'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&h=600&fit=crop',
      title: 'Nature Walk',
      description: 'Exploring the forest trails',
      likes: 312,
      comments: 67,
      date: '8 hours ago'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1682687220566-5599dbbebf11?w=800&h=600&fit=crop',
      title: 'Coffee Time',
      description: 'Morning coffee and good vibes',
      likes: 456,
      comments: 89,
      date: '1 day ago'
    }
  ];

  return (
    <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">last added posts</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            {/* Image */}
            <div className="h-64 bg-gray-100">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    {post.likes}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    {post.comments}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">{post.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;