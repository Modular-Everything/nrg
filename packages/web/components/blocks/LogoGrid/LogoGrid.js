import { Container } from "../../core/Container";
import { Copy } from "../../elements/Copy";
import { Image } from "../../elements/Image";
import * as S from "./LogoGrid.styles";

export function LogoGrid({ data }) {
  return (
    <S.LogoGrid>
      <Container>
        <Copy data={data?.bodyCopy?.copy} />
        <div className="grid">
          {data?.logos?.map((logo) => (
            <article key={logo._key}>
              <Image src={logo} objectFit="contain" />
            </article>
          ))}
        </div>
      </Container>
    </S.LogoGrid>
  );
}
