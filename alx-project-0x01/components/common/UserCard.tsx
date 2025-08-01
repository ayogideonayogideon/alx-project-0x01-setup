import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-md p-6 mx-auto my-4 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
      <h2 className="mb-2 text-xl font-bold text-gray-800">{name}</h2>
      <p className="mb-1 text-gray-600">Username: {username}</p>
      <p className="mb-1 text-gray-600">Email: {email}</p>
      <p className="mb-1 text-gray-600">Phone: {phone}</p>
      <p className="mb-1 text-gray-600">Website: {website}</p>
      <p className="mb-1 text-gray-600">Company: {company.name}</p>
      <p className="text-gray-600">Address: {address.street}, {address.city}</p>
    </div>
  );
};

export default UserCard;