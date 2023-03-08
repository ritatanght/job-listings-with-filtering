export default function Header(props) {
  let filterElements = [];

  for (let category in props.filter) {
    const array = props.filter[category];
    array.map((item) =>
      filterElements.push(
        <div key={item} className="filter-category flex">
          <p>{item}</p>
          <button
            className="remove-btn"
            onClick={() => props.removeFilter(category, item)}
          >
            <img src="./images/icon-remove.svg" alt="remove filter" />
          </button>
        </div>
      )
    );
  }

  return (
    <header>
      {filterElements.length > 0 && (
        <div className="container filters-div flex">
          <div className="filters flex">{filterElements}</div>
          <button className="clear-btn" onClick={props.clearFilter}>
            clear
          </button>
        </div>
      )}
    </header>
  );
}
