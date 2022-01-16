import S from "@sanity/desk-tool/structure-builder";
// import Iframe from "sanity-plugin-iframe-pane";
import {
  FcDocument as PageIcon,
  FcLike as ServicesIcon,
  FcFlashOn as ProjectsIcon,
  FcNews as BlogIcon,
  FcAreaChart as SettingsIcon,
  FcList as MenuIcon,
} from "react-icons/fc";
// import resolveProductionUrl from "./resolveProductionUrl";

// ---

export const getDefaultDocumentNode = () =>
  S.document().views([
    S.view.form(),
    // S.view
    //   .component(Iframe)
    //   .options({
    //     url: (doc) => resolveProductionUrl(doc),
    //   })
    //   .title("Preview"),
  ]);

// ---

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Pages")
        .icon(PageIcon)
        .child(() => S.documentTypeList("page")),

      S.listItem()
        .title("Services")
        .icon(ServicesIcon)
        .child(() => S.documentTypeList("services")),

      S.listItem()
        .title("Projects")
        .icon(ProjectsIcon)
        .child(() => S.documentTypeList("projects")),

      S.listItem()
        .title("Blog")
        .icon(BlogIcon)
        .child(() => S.documentTypeList("blog")),

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
