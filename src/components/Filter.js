import React from "react";
import "./component-styles/filter.scss";

export default () => {
  return (
    <div className="filter">
      <h4>Filter</h4>
      <select name="neighbourhood" className="filters neighbourhood">
        <option>Ridgewood</option>
      </select>
      <select name="housetype" className="filters housetype">
        ><option>Mansion</option>
      </select>
      <select name="bedrooms" className="filters bedroom">
        ><option>2BR</option>
      </select>
      <div className="filters price">
        <span className="title">Price</span>
        <input type="text" name="min-price" className="min-price" />
        <input type="text" name="max-price" className="max-price" />
      </div>
      <div className="filters floor-space">
        <span className="title">Floor Space</span>
        <input type="text" name="min-floor-space" className="min-floor-space" />
        <input type="text" name="max-floor-space" className="max-floor-space" />
      </div>
      <div className="filters extras">
        <span className="title">Extras</span>
        <label for="extras">
          <span>Elevators</span>
          <input type="checkbox" value="elevator" name="extras" />
        </label>
        <label for="extras">
          <span>Swimming pool</span>
          <input type="checkbox" value="swimming-pool" name="extras" />
        </label>
        <label for="extras">
          <span>Finished Basement</span>
          <input type="checkbox" value="finished-basement" name="extras" />
        </label>
        <label for="extras">
          <span>Gym</span>
          <input type="checkbox" value="gym" name="extras" />
        </label>
      </div>
    </div>
  );
};
