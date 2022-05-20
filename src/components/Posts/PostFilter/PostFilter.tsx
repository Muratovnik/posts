import { FormEvent } from "react";

import UISelect from "@UI/select/UISelect";
import UIInput from "@UI/input/UIInput";

import { FilterType, SortType } from "@types";

import classes from "./PostFilter.module.css";

interface Props {
  filter: FilterType;
  setFilter: (value: FilterType) => void;
}

const PostFilter = ({ filter, setFilter }: Props) => {
  const searchChangeHandler = (evt: FormEvent) => {
    setFilter({ ...filter, query: (evt.target as HTMLInputElement).value });
  };

  const sortChangeHandler = (selectedSort: SortType) => {
    setFilter({ ...filter, sort: selectedSort });
  };

  const sortPotions = [
    {
      value: "title",
      name: "By name",
    },
    {
      value: "body",
      name: "By description",
    },
  ];

  return (
    <div className={classes["post-filter"]}>
      <UIInput
        placeholder="Поиск..."
        value={filter.query}
        onChange={searchChangeHandler}
      ></UIInput>
      <UISelect
        defaultOption="Sorting"
        value={filter.sort}
        onChange={sortChangeHandler}
        options={sortPotions}
      ></UISelect>
    </div>
  );
};

export default PostFilter;
