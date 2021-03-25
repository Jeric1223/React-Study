import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function User() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers(null);
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return null;

  return (
    <ul>
      {users.map((users) => (
        <div>
          <li key={users.id}>
            {users.username}({users.name})
          </li>
          <li key={users.id}>{users.phone}</li>
        </div>
      ))}
    </ul>
  );
}
export default User;
