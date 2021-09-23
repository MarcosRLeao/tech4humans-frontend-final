import React from "react";
import { ContentStyled, ContentListStyled } from "./styled";

import ContentLatestResearch from "../latestResearch";
import ContentTop5 from "../top5";

function ContentComponent(props) {


  return (
    <ContentStyled>
      <ContentListStyled className="listBox">
        <ContentTop5 />
        <ContentLatestResearch />
      </ContentListStyled>
    </ContentStyled>
  );
}

export default ContentComponent;
