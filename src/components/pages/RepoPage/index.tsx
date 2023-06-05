import { Paper, Typography, Link } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import RepoStats from "../../RepoStats";

import { Repo } from "../../../types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledPaper = styled(Paper)`
  width: 80%;
  margin: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const ReadMeSection = styled(Typography)`
  border: 1px solid #cdd5e0;
  border-radius: 6px;
  background-color: #e7ebf0;
  padding: 8px;
`;

const RepoPage = () => {
  const { repo_owner_name: owner, repo_name: repoName } = useParams();
  const [loading, setLoading] = useState(true);
  const [repo, setRepo] = useState<Repo | null>(null);
  const [readMe, setReadMe] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repoName}`);
        const json = await response.json();
        setRepo(json);
      } catch (error) {
        console.error("Error fetching repository:", error);
      }
    };

    const fetchReadMe = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repoName}/readme`);
        const json = await response.json();
        setReadMe(atob(json.content));
      } catch (error) {
        console.error("Error fetching repository:", error);
      }
    };

    fetchRepo();
    fetchReadMe();
    setLoading(false);
  }, [owner, repoName]);

  return (
    <Container>
      {!loading && repo && readMe && (
        <StyledPaper>
          <Typography variant="h4">
            <Link href={repo.html_url}>{repo.name}</Link> by{" "}
            <Link href={repo.owner.html_url}>{repo.owner.login}</Link>
          </Typography>

          <Typography my={"16px"} variant="h6">
            Read me:
          </Typography>
          <ReadMeSection>{readMe}</ReadMeSection>

          <Typography my={"16px"} variant="h6">
            Repo Stats:
          </Typography>
          <RepoStats
            forks={repo.forks_count}
            issues={repo.open_issues_count}
            stars={repo.stargazers_count}
            watchers={repo.watchers_count}
          />
        </StyledPaper>
      )}
    </Container>
  );
};

export default RepoPage;
