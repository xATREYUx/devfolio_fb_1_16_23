import { Box, styled } from "@mui/system";

const height = window.innerHeight;

export const PageContainer = ({ children }) => {
  const Container = styled(Box)({
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: height,
    minHeight: "500px",
    // backgroundColor: "red",
  });
  return <Container>{children}</Container>;
};
