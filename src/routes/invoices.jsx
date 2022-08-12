import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import QueryNavLink from "../queryLink";

import { getInvoices } from "../data";

const Invoices = () => {
  const invoices = getInvoices();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
        <input
          type="text"
          value={searchParams.get("search") || ""}
          onChange={(event) => {
            let search = event.target.value;
            if (search) {
              setSearchParams({ search });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices
          .filter((invoice) => {
            let search = searchParams.get("search");
            if (!search) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(search.toLowerCase());
          })
          .map((invoice) => (
            <QueryNavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                };
              }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Invoices;
