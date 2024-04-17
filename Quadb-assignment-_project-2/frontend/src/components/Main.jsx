import React from "react";
import Tables from "./table";
import "./main.scss";

export const Main = () => {
  return (
    <div
      className="bg-dark"
      style={{ fontFamily: "sans-serif", backgroundColor: "#191D28" }}
    >
      <div id="bc" className="table-responsive">
        <main>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Platform</th>
                <th>Last Trade Price</th>
                <th>Buy / Sell Price</th>
                <th>Difference</th>
                <th>Savings</th>
              </tr>
            </thead>
            <Tables />
          </table>
        </main>
      </div>
    </div>
  );
};
