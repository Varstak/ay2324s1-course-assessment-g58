// FilterComponent.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

interface FilterProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  onFilterApply: () => void;
}

const FilterComponent: React.FC<FilterProps> = ({
  categories,
  selectedCategories,
  onCategoryChange,
  onFilterApply,
}) => {
  return (
    <>
      <Box style={{ marginTop: '10px' }}>
        {categories.map((category) => (
          <FormControlLabel
            key={category}
            control={
              <Checkbox
                checked={selectedCategories.includes(category)}
                onChange={() => onCategoryChange(category)}
              />
            }
            label={category}
          />
        ))}
      </Box>
      <Button onClick={onFilterApply} variant="contained">
        Apply Filters
      </Button>
    </>
  );
};

export default FilterComponent;
