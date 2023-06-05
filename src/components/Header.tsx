import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Header;
