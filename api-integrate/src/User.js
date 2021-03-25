import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function User() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return null;

  return (
    <div>
      <ul>
        {users.map((users) => (
          <li key={users.id}>
            <p>{users.username}(user.name)</p>
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </div>
  );
}
export default User;
