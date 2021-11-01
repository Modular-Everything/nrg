import S from '@sanity/desk-tool/structure-builder';
import { FcDocument as PageIcon, FcSettings as SettingsIcon } from 'react-icons/fc';

// ---

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .icon(PageIcon)
        .child(S.documentTypeList('page')),

      S.divider(),

      S.listItem()
        .title('Site Settings')
        .icon(SettingsIcon)
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings').title('Site Settings')
        )
    ])