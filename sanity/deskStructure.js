import S from "@sanity/desk-tool/structure-builder";
 
export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home page')
        .child(
          S.editor()
            .schemaType('home_page')
            .documentId('home_page')
        ),
      // Add a visual divider (optional)
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems()
        .filter(listItem => !['home_page'].includes(listItem.getId()))
    ])