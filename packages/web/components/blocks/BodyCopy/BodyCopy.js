import * as S from "./BodyCopy.styles";
import { ListBodyCopy } from "./ListBodyCopy";
import { MediaBodyCopy } from "./MediaBodyCopy";
import { SimpleBodyCopy } from "./SimpleBodyCopy";

function getLayout(type, data) {
  const layouts = {
    body: <SimpleBodyCopy data={data} />,
    list: <ListBodyCopy data={data} />,
    media: <MediaBodyCopy data={data} />,
  };
  return layouts[type] || layouts.body;
}

export function BodyCopy({ data }) {
  return (
    <S.BodyCopy columns={data?.columns}>
      {getLayout(data?.layoutType, data)}
    </S.BodyCopy>
  );
}
