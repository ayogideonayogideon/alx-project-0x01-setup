import { PostData, PostModalProps } from "../../interfaces";
import React, { useState } from "react";

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const [post, setPost] = useState<PostData>({
    userId: 1,
    title: "",
    body: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="userId" className="block mb-2 font-medium text-gray-700">User ID</label>
            <input
              type="number"
              id="userId"
              name="userId"
              value={post.userId}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2 font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="body" className="block mb-2 font-medium text-gray-700">Body</label>
            <textarea
              id="body"
              name="body"
              value={post.body}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post content"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-white transition bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;