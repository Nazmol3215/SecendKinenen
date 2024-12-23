import React from 'react';
import FilterCatagoori from '../FilterCatagoori/FilterCatagoori';
import AppTen from '../filteredProducts/filteredProducts';
import TrendingAndRecommended from '../TrendingAndRecommended/TrendingAndRecommended';

export default function Page() {
  return (
    <div>
      <FilterCatagoori />
      <TrendingAndRecommended />
      <AppTen />
    </div>
  )
}
