import { Container } from "../../core/Container";
import { Card } from "../../elements/Card/Card";
import * as S from "./Cards.styles";

export function Cards({ data }) {
  return (
    <S.Cards>
      <Container>
        {data?.allCards?.map((card) => {
          const { _key, image, linkToRef, subtitle, title } = card;
          return (
            <Card key={_key} data={{ image, linkToRef, subtitle, title }} />
          );
        })}
      </Container>
    </S.Cards>
  );
}
