// Import React and the `useQuery` hook from TanStack React Query (used for data fetching)
import React from "react";
import { useQuery } from "@tanstack/react-query";
import "../styles/Users.css"
// Import our custom fetch function that gets user data from an API endpoint
import { fetchUsers } from "../api/users";

const Users = () => {
  /**
   * useQuery is a powerful data-fetching hook provided by React Query.
   *
   * - queryKey: A unique key that identifies the query in the React Query cache.
   *   Here, "users" is the key — React Query uses it to store and retrieve cached data.
   *
   * - queryFn: The actual function that performs the data fetching.
   *   This should return a Promise (e.g., our `fetchUsers` async function).
   *
   * useQuery automatically:
   *   ✅ Fetches the data when the component mounts
   *   ✅ Tracks loading and error states
   *   ✅ Caches the data (so revisiting the same component doesn’t re-fetch unnecessarily)
   *   ✅ Refetches in the background when the tab/window regains focus
   */
  const { data: userData, isLoading } = useQuery({
    queryKey: ["users"], // unique key to identify this data
    queryFn: fetchUsers, // function that actually fetches the users
  });

  /**
   * Example of what `fetchUsers()` returns:
   * {
   *   users: [
   *     { id: 1, firstName: "John", lastName: "Doe" },
   *     { id: 2, firstName: "Emily", lastName: "Smith" }
   *   ],
   *   total: 100,
   *   skip: 0,
   *   limit: 30
   * }
   *
   * So:
   * - `userData.users` → array of users
   * - `userData.users[0].firstName` → first user's first name
   * - `userData.total` → total user count
   */

  /**
   * Conditional rendering:
   * - While data is being fetched → show "Loading..."
   * - Once fetched → map through `userData.users` and display first names
   */
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
      <div className="users-grid">
        {userData?.users?.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.image} alt={user.firstName} className="user-avatar" />
            <h3>{user.firstName} {user.lastName}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Company: {user.company?.name}</p>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default Users;

/**
 * 🧠 Summary: Why React Query over useEffect
 *
 * Normally, with useEffect you’d write:
 *
 *   const [users, setUsers] = useState([]);
 *   const [loading, setLoading] = useState(true);
 *
 *   useEffect(() => {
 *     fetch("https://dummyjson.com/users")
 *       .then(res => res.json())
 *       .then(data => {
 *         setUsers(data.users);
 *         setLoading(false);
 *       });
 *   }, []);
 *
 * This works, but React Query simplifies it:
 *   ✅ Auto caching (no duplicate API calls)
 *   ✅ Built-in loading & error states
 *   ✅ Background refetching
 *   ✅ Cleaner, scalable code
 *
 * TL;DR:
 *   useEffect + useState = manual fetching
 *   useQuery = automatic, optimized fetching
 */
