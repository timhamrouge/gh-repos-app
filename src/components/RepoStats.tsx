import { Grid, Typography } from "@mui/material/";
import ForkRightIcon from '@mui/icons-material/ForkRight';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styled from "styled-components";

interface Props {
  forks?: number;
  issues?: number;
  stars?: number;
  watchers?: number;
}

const RepoListItemStats = styled(Grid)`
  display: flex;
  width: 60%;
  justify-content: space-between;
  padding-top: 4px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RepoListStatItem = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: #e7ebf0;
  padding: 4px;
  border: 1px solid #cdd5e0;
  border-radius: 6px;
`;

const RepoListStatItemText = styled(Typography)`
  background-color: white;
  border: 1px solid #cdd5e0;
  border-radius: 6px;
  padding: 4px;
  margin-left: 8px;
`;

const RepoStats = ({ forks, issues, stars, watchers }: Props) => {
  return (
    <RepoListItemStats container>
      <RepoListStatItem item xs={3} md={2}>
        <ForkRightIcon />
        <RepoListStatItemText>{forks}</RepoListStatItemText>
      </RepoListStatItem>

      <RepoListStatItem item xs={3} md={2}>
        <ReportProblemIcon />
        <RepoListStatItemText>{issues}</RepoListStatItemText>
      </RepoListStatItem>

      <RepoListStatItem item xs={3} md={2}>
        <StarIcon />
        <RepoListStatItemText>{stars}</RepoListStatItemText>
      </RepoListStatItem>

      <RepoListStatItem item xs={3} md={2}>
        <VisibilityIcon />
        <RepoListStatItemText>{watchers}</RepoListStatItemText>
      </RepoListStatItem>
    </RepoListItemStats>
  );
};

export default RepoStats;
