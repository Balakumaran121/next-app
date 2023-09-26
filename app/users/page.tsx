import React from "react";
import UserTable from "./UserTable";
interface Props {
  searchParams: { sortOrder: string };
}
const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder, "so");
  return (
    <div>
      <h1>Users</h1>
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default UsersPage;
