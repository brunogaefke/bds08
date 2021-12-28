import { useEffect, useState } from 'react';
import Select from 'react-select';
import { FilterData, Stores } from '../../types';
import { makeRequest } from '../../utils/request';
import './styles.css';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const [stores, setStore] = useState<Stores>();

  useEffect(() => {
    makeRequest({ url: `/stores` }).then((response) => {
      setStore(response.data);
    });
  }, []);

  const handleChange = (Stores: any) => {
    if (Stores != null) {
      setStore(stores?.name);
      setStore(stores?.id)
    }
    if (Stores == null) {
      setStore('caso', [])
      setStore(undefined);
    }

  }

  return (
    <div className="filter-container base-card">
      <div className="filter-input">
        <Select
          options={stores}
          onChange={handleChange}
          classNamePrefix="filter-input-select"
          placeholder="Selecione a loja"
          getOptionLabel={(category: Stores) => String(category.name)}
          getOptionValue={(category: Stores) => String(category.id)}
        />
      </div>
    </div>
  );
}

export default Filter;
