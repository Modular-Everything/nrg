import S from "@sanity/desk-tool/structure-builder";
import Iframe from "sanity-plugin-iframe-pane";
import {
  FcDocument as PageIcon,
  FcAreaChart as SettingsIcon,
  FcList as MenuIcon,
} from "react-icons/fc";
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

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Pages")
        .icon(PageIcon)
        .child(S.documentTypeList("page")),

      S.divider(),

      S.listItem()
        .title("Menu Settings")
        .icon(MenuIcon)
        .child(
          S.document()
            .schemaType("menu")
            .documentId("menuSettings")
            .title("Menu Settings")
        ),

      S.listItem()
        .title("SEO Settings")
        .icon(SettingsIcon)
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("SEO Settings")
        ),
    ]);
