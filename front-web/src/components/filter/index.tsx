import { useCallback, useEffect, useState } from 'react';
import Select from 'react-select';
import { FilterData, Stores } from '../../types';
import { makeRequest } from '../../utils/request';
import './styles.css';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const [stores, setStore] = useState<Stores[]>([]);

  const getStores = useCallback(() => {
    makeRequest.get('/stores').then((response) => {
      setStore(response.data);
    });
  }, []);

  useEffect(() => {
    getStores();
  }, [getStores]);

  const handleChangeStore = (value?: Stores) => {
    const selectedStore = value as Stores;
    console.log(selectedStore);
    onFilterChange({ store: selectedStore });
  };

  return (
    <div className="filter-container base-card">
      <div className="filter-input">
        <Select
          options={stores}
          classNamePrefix="store-select"
          isClearable
          placeholder="Selecione uma loja"
          getOptionLabel={(store) => store.name}
          getOptionValue={(store) => String(store.id)}
          onChange={(value) => handleChangeStore(value as Stores)}
        />
      </div>
    </div>
  );
}

export default Filter;
