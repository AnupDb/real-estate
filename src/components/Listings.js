import React from "react";
import "./component-styles/listings.scss";
export default () => {
  return (
    <div className="listings">
      <section className="search-area">
        <input type="text" name="search" />
      </section>
      <section className="sortby-area">
        <div>390 results fount</div>
        <div className="sort-options">
          <select name="sortby" className="sortby">
            <option value="price-asc">Highest Price</option>
            <option value="price-dsc">Lowest Price</option>
          </select>
          <div className="view">
            <i className="fas fa-th-list" />
            <i className="fas fa-th" />
          </div>
        </div>
      </section>
      <section className="listings-rsults">
        <div />
      </section>
      <section className="pagination" />
    </div>
  );
};
