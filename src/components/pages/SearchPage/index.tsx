import { useEffect, useState } from "react";

import { TextField, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

import { Repo } from "../../../types";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [reposList, setReposList] = useState< Repo[] | null>(null)

  const handleSearchInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event: any) => {
    event.preventDefault();
    const response = await fetch(`https://api.github.com/search/repositories?q=${searchQuery}`);
    const json = await response.json();
    setReposList(json.items)
  };

  console.log(reposList)

  return <>
    <form onSubmit={handleSearchSubmit}>
  <TextField
    label="Search"
    value={searchQuery}
    onChange={handleSearchInputChange}
    variant="outlined"
  />
  <IconButton type="submit">
    <SearchIcon />
  </IconButton>

  {reposList && reposList.length && reposList.map(repo => {
    return <>{repo.name}</>
  })}
</form>
  </>
}

export default SearchPage;