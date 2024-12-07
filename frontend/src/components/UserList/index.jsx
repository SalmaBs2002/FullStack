import React from "react";
import styles from "./UserList.module.css";

const UserList = ({ users, onDelete }) => {
  return (
    <div className={styles.container}>
      <h3>User List</h3>
      {users.length > 0 ? (
        <ul className={styles.list}>
          {users.map((user) => (
            <li key={user.id} className={styles.listItem}>
              <span>{user.name}</span>
              <button
                className={styles.deleteBtn}
                onClick={() => onDelete(user.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noUsers}>No users available</p>
      )}
    </div>
  );
};

export default UserList;
