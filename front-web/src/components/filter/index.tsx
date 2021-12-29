import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { FilterData, Stores } from '../../types';
import { makeRequest } from '../../utils/request';
import './styles.css';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const [stores, setStore] = useState<Stores[]>([]);

  const { setValue, getValues, control } = useForm<FilterData>();

  const handleChangeStores = (value: Stores) => {
    setValue('store', value);

    const obj: FilterData = {
      store: getValues('store')
    };

    onFilterChange(obj);
  };

  useEffect(() => {
    makeRequest({ url: `/stores` }).then((response) => {
      setStore(response.data);
    });
  }, [])

  return (
    <div className="filter-container base-card">
      <div className="filter-input">
        <Controller
          name="store"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={stores}
              classNamePrefix="filter-input-select"
              placeholder="Selecione a loja"
              onChange={(value) => handleChangeStores(value as Stores)}
              getOptionLabel={(category: Stores) => String(category.name)}
              getOptionValue={(category: Stores) => String(category.id)}
            />
          )}
        />
      </div>
    </div>
  );
}

export default Filter;
