import React, { useState } from "react";
import UserForm from "../../components/UserForm";
import UserList from "../../components/UserList";

const UserManagementPage = () => {
  const [users, setUsers] = useState([]);

  const handleAddUser = (name) => {
    setUsers([...users, { id: Date.now(), name }]);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm onAdd={handleAddUser} />
      <UserList users={users} onDelete={handleDeleteUser} />
    </div>
  );
};

export default UserManagementPage;
