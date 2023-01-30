import { styled } from "@mui/system";
import Clock from "./clock/Clock";

const PortfolioItem = () => {
  const comps = [<Clock />, "this is number 2"];

  const ItemContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    minHeight: "600px",
    // justifyContent: "center",
    backgroundColor: "red",
  });

  return (
    <ItemContainer>
      {comps.map((c, i) => {
        return (
          <div style={{ backgroundColor: i % 2 === 0 ? "blue" : "yellow" }}>
            {c}
          </div>
        );
      })}
    </ItemContainer>
  );
};
export default PortfolioItem;
