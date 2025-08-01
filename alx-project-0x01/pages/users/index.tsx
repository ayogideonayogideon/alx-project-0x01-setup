import React, { useState } from "react";
import UserModal from "../../components/common/UserModal";
import { UserData } from "../../interfaces";

const UsersPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState<UserData[]>([]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddUser = (newUser: UserData) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    handleCloseModal();
  };

  return (
    <div className="p-6">
      <h1 className="mb-4 text-3xl font-bold">Users</h1>
      <button
        onClick={handleOpenModal}
        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Add User
      </button>

      {/* User List */}
      <ul className="mt-6 space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-4 bg-gray-100 rounded shadow">
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>

      {/* Modal */}
      <UserModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddUser}
      />
    </div>
  );
};

export default UsersPage;