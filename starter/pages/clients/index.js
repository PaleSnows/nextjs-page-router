import Link from "next/link";
import React from "react";

const CLientsPage = () => {
  const clients = [
    { id: 1, name: "ren" },
    { id: 2, name: "ran" },
  ];
  return (
    <div>
      <h1>CLientsPage</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{ pathname: "/clients/[id]", query: { id: client.id } }}
            >
                {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CLientsPage;
