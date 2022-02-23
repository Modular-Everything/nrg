import { PortableText } from "@portabletext/react";

export function SimpleBodyCopy({ data }) {
  return <PortableText value={data?.bodyCopy?.copy} />;
}
