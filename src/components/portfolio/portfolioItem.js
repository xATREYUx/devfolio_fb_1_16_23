import { styled } from "@mui/system";
import { comps } from "./portfolioCompList";

const PortfolioItem = ({ componentIndex, children }) => {
  const ItemContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    minHeight: "600px",
    // backgroundColor: "red",
  });
  console.log("componentIndex", componentIndex);
  return <ItemContainer>{comps[componentIndex]}</ItemContainer>;
};
export default PortfolioItem;
