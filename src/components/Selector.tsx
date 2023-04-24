interface Props {
  title: string;
  items: { value: string; label: string }[];
  onSelect: (item: string) => void;
}

const Selector = ({ title, items, onSelect }: Props) => {
  return (
    <div className="mb-3">
      <select
        onChange={(event) => onSelect(event.target.value)}
        id="category"
        className="form-select"
      >
        <option defaultValue="">{title}</option>
        {items.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
