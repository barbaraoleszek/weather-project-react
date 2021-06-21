import React from "react";

export default function Search() {
  return (
    <div className="row p-2 justify-content-center">
      <div className="col col-md-4">
        <form id="search-form">
          <input
            type="search"
            className="form-control"
            placeholder="Choose city..."
          />
        </form>
      </div>
    </div>
  );
}