interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <div className='relative w-full'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 19.9 19.7'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        role='img'
        className='absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400'
      >
        <path strokeLinecap='square' d='M18.5 18.3l-5.4-5.4' />
        <circle cx='8' cy='8' r='7' />
      </svg>

      <input
        type='text'
        value={value}
        onChange={onChange}
        placeholder='Buscar tiendas'
        className='pl-10 p-2 border-b-2 border-gray-400 w-full focus:outline-none'
      />
    </div>
  );
};

export default SearchInput;
