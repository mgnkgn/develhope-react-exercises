import React, { useMemo } from "react";

const FilteredList = (props) => {
  const filter = (array) => {
    return array.filter((el) => el.age > 18);
  };
  const filteredResult = useMemo(() => filter(props.people), [props.people]);

  return (
    <div>
      {filteredResult.map((el) => {
        return (
          <div key={el.id}>
            {el.name} - {el.id}
          </div>
        );
      })}
    </div>
  );
};

export default FilteredList;
