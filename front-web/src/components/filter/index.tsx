import { useEffect, useState } from 'react';
import Select from 'react-select';
import { FilterData, Stores } from '../../types';
import { makeRequest } from '../../utils/request';
import './styles.css';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const [store, setStore] = useState<Stores[]>([]);

  useEffect(() => {
    makeRequest({ url: `/stores` }).then((response) => {
      setStore(response.data);
    });
  }, []);

  const onChangeStore = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStore = event.target.value as Stores;
    setStore(selectedStore);
    onFilterChange({ stores: selectedStore });
  };

  return (
    <div className="filter-container base-card">
      <div className="filter-input">
        <Select
          options={store}
          classNamePrefix="filter-input-select"
          placeholder="Selecione a loja"
          isMulti
          getOptionLabel={(category: Stores) => String(category.name)}
          getOptionValue={(category: Stores) => String(category.id)}
        />
      </div>
    </div>
  );
}

export default Filter;
