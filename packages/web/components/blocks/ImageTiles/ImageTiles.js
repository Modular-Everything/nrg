import Link from "next/link";

import { Container } from "../../core/Container";
import { Copy } from "../../elements/Copy/Copy";
import { Image } from "../../elements/Image";
import { LinkToRef } from "../../elements/LinkToRef";
import * as S from "./ImageTiles.styles";

function Tile({ data }) {
  return (
    <div className="tile">
      <div className="tile__image">
        {data.image && (
          <Image src={data.image} alt="" objectFit="cover" quality={95} />
        )}
      </div>
      {data?.bodyCopy?.copy && (
        <div className="tile__meta">
          <Copy data={data.bodyCopy.copy} />
          {data?.linkToRef?.link && (
            <LinkToRef label={data?.linkToRef?.label || "Find out more"} />
          )}
        </div>
      )}
    </div>
  );
}

export function ImageTiles({ data }) {
  return (
    <S.ImageTiles>
      <Container>
        {data?.tiles?.map((tile) => (
          <article key={tile._key}>
            {tile?.linkToRef?.link ? (
              <Link href={tile.linkToRef.link}>
                <a>
                  <Tile data={tile} />
                </a>
              </Link>
            ) : (
              <Tile data={tile} />
            )}
          </article>
        ))}
      </Container>
    </S.ImageTiles>
  );
}
