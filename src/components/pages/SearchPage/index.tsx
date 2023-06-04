import { useEffect, useState } from "react";
import styled from 'styled-components';
import { TextField, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { Repo } from "../../../types";

const Header = styled("div")`
  width: 100%;
  flex-direction: column;
`;

const ImageContainer = styled("div")`
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LookupBox = styled("form")`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #CDD5E0;
  border-radius: 6px;
  background-color: #E7EBF0;
`;

const RepoList = styled("div")`
  // width: 80%;
  // margin-top: 16px;
  // min-height: 70%;
  // margin: 0 auto;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // border: 1px solid #CDD5E0;
  // border-radius: 6px;
  // background-color: #E7EBF0;
`;

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [reposList, setReposList] = useState<Repo[] | null>(null);
  const [resultsNum, setResultsNum] = useState<number | null>(null);

  const handleSearchInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event: any) => {
    event.preventDefault();
    const response = await fetch(`https://api.github.com/search/repositories?q=${searchQuery}`);
    const json = await response.json();
    console.log(json);
    setReposList(json.items);
    setResultsNum(json.total_count);
  };

  return (
    <>
      <Header>
        <ImageContainer>
          <img
            height={100}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbitemycoin.com%2Fwp-content%2Fuploads%2F2018%2F06%2FGitHub-Logo.png&f=1&nofb=1&ipt=6dc514210ede3c48bf4042a933d8deea1396399879dafd593d0d17bb15c20676&ipo=images"
            alt="github-logo"
          />
        </ImageContainer>
        <TitleContainer>
          <h2 style={{ marginRight: "8px" }}>Repo lookup</h2>
          <h5>powered by the GitHub API</h5>
        </TitleContainer>
      </Header>

      <LookupBox onSubmit={handleSearchSubmit}>
        <TextField
          label="Search"
          value={searchQuery}
          onChange={handleSearchInputChange}
          variant="outlined"
          sx={{ margin: "16px" }}
        />
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
      </LookupBox>

      {resultsNum && <p>{`${resultsNum} results found for ${searchQuery}`}</p>}

      <RepoList>
        {!reposList && !reposList && <p>Search for repos above</p>}
        {reposList && reposList.length && reposList.map(repo => (
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={repo.name} />
          </ListItem>
        ))}
      </RepoList>

    </>
  );
};

export default SearchPage;
