import { Container } from "../../core/Container";
import { Image } from "../../elements/Image";
import * as S from "./ImageTiles.styles";

export function ImageTiles({ data }) {
  return (
    <S.ImageTiles>
      <Container>
        {data?.tiles?.map((tile) => (
          <Image
            key={tile._key}
            src={tile}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        ))}
      </Container>
    </S.ImageTiles>
  );
}
