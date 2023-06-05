import { useState } from "react";
import styled from "styled-components";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Repo } from "../../../types";

import { Button } from "@mui/material";
import SearchForm from "../../SearchForm";
import RepoStats from "../../RepoStats";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;



const RepoList = styled(List)`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const RepoListItem = styled(ListItem)`
  border: 1px solid #cdd5e0;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const SearchMessage = styled("div")`
  text-align: center;
`;

const RepoListItemHeader = styled("div")`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid #cdd5e0;
`;

const RepoListItemTitle = styled("div")`
  display: flex;
  align-items: center;
  align-content: center;
`;

const StyledAvatarImage = styled("img")`
  margin-left: 8px;
  height: 30px;
  border-radius: 100px;
  border: 1px solid #cdd5e0;
`;

const SearchPage = () => {
  const [reposList, setReposList] = useState<Repo[] | null>(null);
  const [resultsNum, setResultsNum] = useState<number | null>(null);
  const [query, setQuery] = useState<string | null>(null);

  const handleSearch = async (searchQuery: string, url: string) => {
    setQuery(searchQuery);
    const response = await fetch(`https://api.github.com/search/repositories?q=${url}`);
    const json = await response.json();
    setReposList(json.items);
    setResultsNum(json.total_count);
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSearch} />

      <SearchMessage>
        {resultsNum && <p>{`${resultsNum} results found for '${query}'`}</p>}
        {!reposList && <p>Search for repos above</p>}
        {reposList && !reposList.length && <p>No repos found! Please try another search</p>}
      </SearchMessage>


      <RepoList>
        {reposList &&
          reposList.length > 0 &&
          reposList.map((repo, index) => (
            <RepoListItem key={repo.id}>

              <RepoListItemHeader>
                <RepoListItemTitle>
                <Typography>
                  <Link href={repo.html_url}>{repo.name}</Link> by <Link href={repo.owner.html_url}>{repo.owner.login}</Link>
                </Typography>
                <StyledAvatarImage src={repo.owner.avatar_url} alt={`${repo.owner.login}-avatar`}/>

                </RepoListItemTitle>
                <Button href={`/repo/${repo.owner.login}/${repo.name}`} sx={{height: "36px"}}variant="contained">
                  View
                </Button>

              </RepoListItemHeader>
              <RepoStats forks={repo.forks_count} issues={repo.open_issues} stars={repo.stargazers_count} watchers={repo.watchers_count}/>

            </RepoListItem>
          ))}
      </RepoList>
    </Container>
  );
};

export default SearchPage;
