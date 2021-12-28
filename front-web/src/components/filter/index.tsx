import { useState } from 'react';
import { FilterData, Stores } from '../../types';
import './styles.css';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const [stores, setStore] = useState<Stores>();

  const onChangeStore = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStore = event.target.value as Stores;
    setStore(selectedStore);
    onFilterChange({ store: selectedStore });
  };

  return (
    <div className="filter-container base-card">
      <div className="filter-input">

        <select className="filter-input" value={String(stores)} onChange={onChangeStore}>
          <option>Selecione a loja</option>
          <option value="Araguari">Araguari</option>
          <option value="Ituiutaba">Ituiutaba</option>
          <option value="Uberaba">Uberaba</option>
          <option value="Uberlândia">Uberlândia</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
