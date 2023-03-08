import React, { useState } from "react";
import Job from "./Job";
import Header from "./Header";
import Footer from "./Footer";
import data from "./data.json";

function App() {
  const [jobs, setJobs] = useState(data);
  const [filter, setFilter] = useState({});

  function addFilter(category, item) {
    // if the filter obj does not contain the category for the filter
    if (!Object.keys(filter).includes(category)) {
      setFilter((prevFilter) => {
        return { ...prevFilter, [category]: [item] };
      });
      // if the current item is not in the filter category
    } else if (!filter[category].includes(item)) {
      setFilter((prevFilter) => {
        return { ...prevFilter, [category]: [...prevFilter[category], item] };
      });
    }
  }

  function removeFilter(category, item) {
    console.log("remove " + item + " from " + category);
    setFilter((prevFilter) => {
      //if the category contains only one item in the array
      if (prevFilter[category].length === 1) {
        const { [category]: removedCategory, ...newObject } = prevFilter;
        return newObject;
      } else {
        // if category contains more than one item in the array
        // remove only the item from the object
        const newArray = prevFilter[category].filter(
          (filterItem) => filterItem !== item
        );
        return { ...prevFilter, [category]: newArray };
      }
    });
  }

  function clearFilter() {
    setFilter({});
  }

  const jobElements = jobs.map((job) => {
    if (Object.values(filter).length === 0) {
      return <Job key={job.id} info={job} addFilter={addFilter} />;
    } else {
      const checked = [];
      for (let key in filter) {
        let check = filter[key].every((item) => {
          return job[key].includes(item);
        });
        check && checked.push(key);
        // make sure all categories of a job satisfy the filters for the render
        if (checked.length === Object.keys(filter).length) {
          return <Job key={job.id} info={job} addFilter={addFilter} />;
        }
      }
    }
    return null;
  });

  return (
    <>
      <Header
        filter={filter}
        removeFilter={removeFilter}
        clearFilter={clearFilter}
      />
      <main className="container">{jobElements}</main>
      <Footer />
    </>
  );
}

export default App;
