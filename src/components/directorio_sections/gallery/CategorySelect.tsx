interface CategorySelectProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  categoryColors: Record<string, string>;
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  value,
  onChange,
  categoryColors,
}) => {
  return (
    <select value={value} onChange={onChange} className='p-2 border w-full'>
      <option value='Todos'>Todos</option>
      {Object.keys(categoryColors).map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
