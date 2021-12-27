import Select from 'react-select';
import './styles.css';

function Filter() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <div className="filter-container base-card">
      <div className="filter-input">
        <Select
          options={options}
          classNamePrefix="filter-input-select"
          placeholder="Selecione a loja"
          isMulti
        />
      </div>
    </div>
  );
}

export default Filter;
