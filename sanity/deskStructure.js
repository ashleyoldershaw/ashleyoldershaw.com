import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home page")
        .child(S.editor().schemaType("home_page").documentId("home_page")),
      S.listItem()
        .title("Career page")
        .child(S.editor().schemaType("career_page").documentId("career_page")),
      // Add a visual divider (optional)
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["home_page", "career_page", "expandable_text"].includes(
            listItem.getId()
          )
      ),
    ]);
