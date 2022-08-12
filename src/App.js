import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to={"/"}>
        <h1>Book-Keeper</h1>
      </Link>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to={"/invoices"}>Invoices</Link>
        <Link to={"/expenses"}>Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
