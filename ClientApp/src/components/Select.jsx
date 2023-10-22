const Select = ({
  options,
  Selectclass,
  SelectName,
  SelectRef,
  SelectOnChange,
  DefaultValue,
  oneOptionText,
}) => {
  return (
    <select
      className={Selectclass}
      name={SelectName}
      ref={SelectRef}
      onChange={SelectOnChange}
      defaultValue={DefaultValue}
    >
      <option value="" disabled>{oneOptionText}</option>
      {options.map((option,index)=> (<option key={index} value={option}>{option}</option>))}
    </select>
  );
};

export default Select;