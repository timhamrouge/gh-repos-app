import { useState } from "react";
import styled from "styled-components";
import {
  TextField,
  Button,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
  Select
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const LookupBox = styled("form")`
  width: 50%;
  margin: 0 auto;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #cdd5e0;
  border-radius: 6px;
  background-color: #e7ebf0;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const SearchRow = styled("div")`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #cdd5e0;
`;

const FilterRow = styled("div")`
  width: 80%;
  margin: 0 auto;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 976px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledSelect = styled(Select)`
  width: 300px;

  @media (max-width: 976px) {
    width: 320px;
  }
`;

interface Props {
  onSubmit: (x: any, y: any) => void;
}

const SearchForm = ({ onSubmit }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("best-match");
  const [order, setOrder] = useState("desc");

  const handleSearchInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleOrderSelectChange = (event: any) => {
    setOrder(event.target.value);
  };

  const handleSortSelectChange = (event: any) => {
    setSort(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let url = `${searchQuery}&order=${order}`;
    if (sort !== "best-match") {
      url = url + `&sort=${sort}`;
    }
    onSubmit(searchQuery, url);
  };

  return (
    <LookupBox onSubmit={handleSubmit}>
      <SearchRow>
        <TextField
          label="Search"
          value={searchQuery}
          onChange={handleSearchInputChange}
          variant="outlined"
          sx={{ margin: "16px" }}
        />
        <Button type="submit" variant="contained">
          <SearchIcon />
        </Button>
      </SearchRow>

      <FilterRow>
        <FormControl>
          <InputLabel id="sort-label">Sort by</InputLabel>
          <StyledSelect
            labelId="sort-label"
            value={sort}
            label="Sort by"
            onChange={handleSortSelectChange}
          >
            <MenuItem value="best-match">Best match</MenuItem>
            <MenuItem value="stars">Stars</MenuItem>
            <MenuItem value="forks">Forks</MenuItem>
            <MenuItem value="help-wanted-issues">Issues</MenuItem>
            <MenuItem value="updated">Updated</MenuItem>
          </StyledSelect>
          <FormHelperText></FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel id="order-label">Order</InputLabel>
          <StyledSelect
            disabled={sort === "best-match" ? true : false}
            labelId="order-label"
            value={sort === "best-match" ? "desc" : order}
            label="Order"
            onChange={handleOrderSelectChange}
          >
            <MenuItem value="desc">{`Descending (Most -> Least)`}</MenuItem>
            <MenuItem value="asc">{`Ascending (Least -> Most)`}</MenuItem>
          </StyledSelect>
          <FormHelperText>Note: Cannot order 'Best match' search results</FormHelperText>
        </FormControl>
      </FilterRow>
    </LookupBox>
  );
};

export default SearchForm;
