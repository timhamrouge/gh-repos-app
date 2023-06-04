import { useEffect, useState } from "react";
import styled from "styled-components";

import { TextField, MenuItem, InputLabel, IconButton, FormControl, RadioGroup, FormControlLabel, Radio, Select } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";


const LookupBox = styled("form")`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cdd5e0;
  border-radius: 6px;
  background-color: #e7ebf0;
`;

interface Props {
  onSubmit: (x: any, y: any) => void;
}

const SearchForm = ({onSubmit}: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState('best-match');
  const [order, setOrder] = useState('desc');

  const handleSearchInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleOrderRadioChange = (event:any) => {
    setOrder(event.target.value)
  }

  const handleSortSelectChange = (event:any) => {
    console.log(event.target.value)
    setSort(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit(searchQuery, searchQuery)
  }



  return (
    <LookupBox onSubmit={handleSubmit}>
      <TextField
        label="Search"
        value={searchQuery}
        onChange={handleSearchInputChange}
        variant="outlined"
        sx={{ margin: "16px" }}
      />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort by"
          onChange={handleSortSelectChange}
        >
          <MenuItem value={'best-match'}>Best match</MenuItem>
          <MenuItem value={'stars'}>Stars</MenuItem>
          <MenuItem value={'forks'}>Forks</MenuItem>
          <MenuItem value={'help-wanted-issues'}>Issues</MenuItem>
          <MenuItem value={'updated'}>Updated</MenuItem>
        </Select>
      </FormControl>

      <FormControl component="fieldset">
        <RadioGroup
          row
          value={order}
          onChange={handleOrderRadioChange}
        >
          <FormControlLabel
            value="asc"
            control={<Radio color="primary" />}
            label="Ascending"
          />
          <FormControlLabel
            value="desc"
            control={<Radio color="primary" />}
            label="Descending"
          />
        </RadioGroup>
      </FormControl>
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </LookupBox>
  );
};

export default SearchForm;
