import { Container } from "../../core/Container";
import * as S from "./BodyCopy.styles";
import { SimpleBodyCopy } from "./SimpleBodyCopy";

function getLayout(type, data) {
  const layouts = {
    body: <SimpleBodyCopy data={data} />,
  };
  return layouts[type] || layouts.body;
}

export function BodyCopy({ data }) {
  return (
    <S.BodyCopy columns={data?.columns}>
      <Container style={data?.columns === 1 ? { maxWidth: "68rem" } : {}}>
        {getLayout(data?.layoutType, data)}
      </Container>
    </S.BodyCopy>
  );
}
