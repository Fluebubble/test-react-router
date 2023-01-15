export const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <input
        value={value}
        type="text"
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};
