import { useState, useMemo } from 'react';

const useSortableData = (data, config = null) => {
    const [sortConfig, setSortConfig] = useState(config);
    const [styleClass, setStyleClass] = useState(null);
    
    const sortedData = useMemo(() => {
      let sortableData = [...data];
      if (sortConfig !== null) {
        sortableData.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableData;
    }, [data, sortConfig]);
  
    const requestSort = key => {
      let direction = 'ascending';
      if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
      setStyleClass(key);
    }

    const getClassNamesFor = name => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };
  
    return { data: sortedData, requestSort, styleClass, getClassNamesFor };
  }

  export default useSortableData;