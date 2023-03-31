import {
  GiHouse as HomepageIcon,
  GiScrollQuill as PageIcon,
  GiNewspaper as NewsIcon,
  GiMining as ServiceIcon,
  GiPaintRoller as ProjectIcon,
  GiTreasureMap as SettingsIcon,
} from "react-icons/gi";
import Iframe from "sanity-plugin-iframe-pane";

import resolveProductionUrl from "./resolveProductionUrl";

// ---

export const getDefaultDocumentNode = (S) =>
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

const deskStructure = (S) =>
  S.list()
    .title("Content")
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
        .child(() => S.documentTypeList("page").title("Pages")),
      S.listItem()
        .title("News")
        .icon(NewsIcon)
        .child(() => S.documentTypeList("newsPost").title("News")),
      S.listItem()
        .title("Projects")
        .icon(ProjectIcon)
        .child(() => S.documentTypeList("project").title("Projects")),
      S.listItem()
        .title("Services")
        .icon(ServiceIcon)
        .child(() => S.documentTypeList("service").title("Services")),
      S.divider(),
      S.listItem()
        .title("Site Settings")
        .icon(SettingsIcon)
        .child(
          S.document().schemaType("globalSettings").documentId("globalSettings")
        ),
    ]);

export default deskStructure;
