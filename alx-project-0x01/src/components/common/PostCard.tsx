import { PostProps } from "../../../interfaces/post";
const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
  return (
    <div className="max-w-xl p-6 mx-auto my-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600">{body}</p>
      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        <span>User ID: {userId}</span>
        <span>Post ID: {id}</span>
      </div>
    </div>
  );
};

export default PostCard;