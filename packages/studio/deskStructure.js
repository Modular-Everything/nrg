import S from "@sanity/desk-tool/structure-builder";
import {
  GiHouse as HomepageIcon,
  GiScrollQuill as PageIcon,
  GiNewspaper as BlogIcon,
  GiMining as ServiceIcon,
  GiPaintRoller as ProjectIcon,
  GiTreasureMap as SettingsIcon,
} from "react-icons/gi";
import Iframe from "sanity-plugin-iframe-pane";

import resolveProductionUrl from "./resolveProductionUrl";

// ---

export const getDefaultDocumentNode = () =>
  S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc) => resolveProductionUrl(doc),
      })
      .title("Preview"),
  ]);

// ---

export default function deskStructure() {
  return S.list()
    .title("Content Manager")
    .items([
      S.listItem()
        .title("Homepage")
        .icon(HomepageIcon)
        .child(
          S.document()
            .schemaType("homepage")
            .documentId("defaultHomepage")
            .title("Homepage")
            .views([
              S.view.form(),
              S.view
                .component(Iframe)
                .options({
                  url: (doc) => resolveProductionUrl(doc),
                })
                .title("Preview"),
            ])
        ),
      S.listItem()
        .title("Pages")
        .icon(PageIcon)
        .child(() => S.documentTypeList("page")),
      S.listItem()
        .title("Blog Posts")
        .icon(BlogIcon)
        .child(() => S.documentTypeList("blogPost")),
      S.listItem()
        .title("Projects")
        .icon(ProjectIcon)
        .child(() => S.documentTypeList("project")),
      S.listItem()
        .title("Services")
        .icon(ServiceIcon)
        .child(() => S.documentTypeList("service")),
      S.divider(),
      S.listItem()
        .title("Site Settings")
        .icon(SettingsIcon)
        .child(
          S.document()
            .schemaType("globalSettings")
            .documentId("globalSettings")
            .title("Site Settings")
        ),
    ]);
}
