import React from "react";

function Suggestions({ suggestions, setValue }) {
  return (
    <div className="search__suggestions">
      {suggestions.map((e) => {
        return (
          <button
            tabIndex="0"
            type="submit"
            form="searchForm"
            key={e.globalIdLocal}
            onClick={() => {
              setValue(e.local);
            }}
          >
            {e.local}
          </button>
        );
      })}
    </div>
  );
}

export default Suggestions;
