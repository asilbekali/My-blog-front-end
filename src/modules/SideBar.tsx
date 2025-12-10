import { useState } from 'react';
import { Plus, Users, MessageSquare, LayoutDashboard, X, Upload, Image, Video } from 'lucide-react';

const BlogAdminPanel = () => {
  const [currentPage, setCurrentPage] = useState('posts');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postData, setPostData] = useState({
    title: '',
    description: '',
    mediaType: 'imediaPreviewmage',
    mediaFile: null,
    mediaPreview: ''
  });


  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setPostData({
        ...postData,
        mediaFile: file,
        mediaPreview: URL.createObjectURL(file)
      });
    }
  };

  const handleSubmit = () => {
    if (!postData.title || !postData.description || !postData.mediaFile) {
      alert('Please fill all fields!');
      return;
    }
    alert('Post successfully uploaded!');
    setIsModalOpen(false);
    setPostData({
      title: '',
      description: '',
      mediaType: 'image',
      mediaFile: null,
      mediaPreview: ''
    });
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">SofDev admin</h1>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full flex items-center gap-3 px-4 py-3 text-white bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>add post</span>
          </button>

          <button
            onClick={() => setCurrentPage('posts')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${currentPage === 'posts' ? 'text-gray-900 bg-gray-100' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>all posts</span>
          </button>

          <button
            onClick={() => setCurrentPage('users')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${currentPage === 'users' ? 'text-gray-900 bg-gray-100' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
          >
            <Users className="w-5 h-5" />
            <span>show users</span>
          </button>

          <button
            onClick={() => setCurrentPage('comments')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${currentPage === 'comments' ? 'text-gray-900 bg-gray-100' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
          >
            <MessageSquare className="w-5 h-5" />
            <span>show comments</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">


      </div>

      {/* Add Post Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Add New Post</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Media Type</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setPostData({ ...postData, mediaType: 'image', mediaFile: null, mediaPreview: '' })}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${postData.mediaType === 'image' ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                      }`}
                  >
                    <Image className="w-5 h-5" />
                    <span className="font-medium">Image</span>
                  </button>
                  <button
                    onClick={() => setPostData({ ...postData, mediaType: 'video', mediaFile: null, mediaPreview: '' })}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${postData.mediaType === 'video' ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                      }`}
                  >
                    <Video className="w-5 h-5" />
                    <span className="font-medium">Video</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Upload {postData.mediaType === 'image' ? 'Image' : 'Video'}
                </label>
                <input type="file" accept={postData.mediaType === 'image' ? 'image/*' : 'video/*'} onChange={handleFileChange} className="hidden" id="fileInput" />
                <label htmlFor="fileInput" className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-purple-400 hover:bg-purple-50/30 transition-all">
                  {postData.mediaPreview ? (
                    <div className="w-full h-full p-2">
                      {postData.mediaType === 'image' ? (
                        <img src={postData.mediaPreview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                      ) : (
                        <video src={postData.mediaPreview} controls className="w-full h-full object-cover rounded-lg" />
                      )}
                    </div>
                  ) : (
                    <>
                      <Upload className="w-12 h-12 text-gray-400 mb-3" />
                      <p className="text-sm font-medium text-gray-600 mb-1">Click to upload {postData.mediaType}</p>
                      <p className="text-xs text-gray-400">{postData.mediaType === 'image' ? 'PNG, JPG, GIF up to 10MB' : 'MP4, AVI, MOV up to 50MB'}</p>
                    </>
                  )}
                </label>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Post Title</label>
                <input
                  type="text"
                  value={postData.title}
                  onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                  placeholder="Enter post title..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Description</label>
                <textarea
                  value={postData.description}
                  onChange={(e) => setPostData({ ...postData, description: e.target.value })}
                  placeholder="Write post description..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button onClick={() => setIsModalOpen(false)} className="flex-1 px-6 py-3 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button onClick={handleSubmit} className="flex-1 px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors">
                  Upload Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogAdminPanel;