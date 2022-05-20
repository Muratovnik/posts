import classes from "./UISelect.module.css";

type Option = {
  name: string;
  value: string;
};

interface Props {
  options: Option[];
  defaultOption: string;
  value: string;
  onChange: (value: any) => void;
}

const UISelect = ({ options = [], defaultOption, value, onChange }: Props) => {
  return (
    <select
      className={classes["ui-select"]}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option disabled value="">
        {defaultOption}
      </option>
      {options.map((option: Option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default UISelect;
