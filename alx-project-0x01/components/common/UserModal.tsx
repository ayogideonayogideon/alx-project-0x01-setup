import React, { useState } from "react";
import { UserData, UserModalProps } from "../../interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    id: Date.now(),
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="w-full max-w-md max-h-screen p-8 overflow-y-auto bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          {/* Basic Info */}
          <input name="name" value={user.name} onChange={handleChange} placeholder="Name" className="input" />
          <input name="username" value={user.username} onChange={handleChange} placeholder="Username" className="input" />
          <input name="email" value={user.email} onChange={handleChange} placeholder="Email" className="input" />
          <input name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" className="input" />
          <input name="website" value={user.website} onChange={handleChange} placeholder="Website" className="input" />

          {/* Address */}
          <input name="street" value={user.address.street} onChange={(e) => setUser({ ...user, address: { ...user.address, street: e.target.value } })} placeholder="Street" className="input" />
          <input name="suite" value={user.address.suite} onChange={(e) => setUser({ ...user, address: { ...user.address, suite: e.target.value } })} placeholder="Suite" className="input" />
          <input name="city" value={user.address.city} onChange={(e) => setUser({ ...user, address: { ...user.address, city: e.target.value } })} placeholder="City" className="input" />
          <input name="zipcode" value={user.address.zipcode} onChange={(e) => setUser({ ...user, address: { ...user.address, zipcode: e.target.value } })} placeholder="Zipcode" className="input" />
          <input name="lat" value={user.address.geo.lat} onChange={(e) => setUser({ ...user, address: { ...user.address, geo: { ...user.address.geo, lat: e.target.value } } })} placeholder="Latitude" className="input" />
          <input name="lng" value={user.address.geo.lng} onChange={(e) => setUser({ ...user, address: { ...user.address, geo: { ...user.address.geo, lng: e.target.value } } })} placeholder="Longitude" className="input" />

          {/* Company */}
          <input name="companyName" value={user.company.name} onChange={(e) => setUser({ ...user, company: { ...user.company, name: e.target.value } })} placeholder="Company Name" className="input" />
          <input name="catchPhrase" value={user.company.catchPhrase} onChange={(e) => setUser({ ...user, company: { ...user.company, catchPhrase: e.target.value } })} placeholder="Catch Phrase" className="input" />
          <input name="bs" value={user.company.bs} onChange={(e) => setUser({ ...user, company: { ...user.company, bs: e.target.value } })} placeholder="Business Slogan" className="input" />

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button type="button" onClick={onClose} className="text-gray-600 hover:text-gray-800">Cancel</button>
            <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;