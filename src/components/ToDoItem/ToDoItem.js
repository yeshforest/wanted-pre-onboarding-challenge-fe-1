import { ItemWrapper, TitleText, ContentText, ExtraText } from "./styled";
import { useNavigate } from "react-router-dom";
const ToDoItem = ({ title, content, createdAt, updatedAt }) => {
  const ca = new Date(createdAt).toLocaleDateString();
  const ua = new Date(updatedAt).toLocaleDateString();
  const textLimit = 70;
  const navigate = useNavigate();
  return (
    <ItemWrapper onClick={() => navigate("/update")}>
      <TitleText>[{title}]</TitleText>
      <ContentText>
        {content.length < textLimit
          ? content.slice(0, textLimit)
          : content.slice(0, textLimit) + "..."}
      </ContentText>
      <ExtraText>
        (생성일: {ca} 수정일: {ua})
      </ExtraText>
    </ItemWrapper>
  );
};

export default ToDoItem;
