import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home page")
        .child(S.editor().schemaType("home_page").documentId("home_page")),
      S.listItem()
        .title("Navigation bar")
        .child(S.editor().schemaType("nav_bar").documentId("nav_bar")),
      S.listItem()
        .title("Career page")
        .child(S.editor().schemaType("career_page").documentId("career_page")),
      S.listItem()
        .title("Blog home page")
        .child(S.editor().schemaType("blog_home").documentId("blog_home")),
      S.listItem()
        .title("Birdle")
        .child(S.editor().schemaType("birdle").documentId("birdle")),
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "home_page",
            "career_page",
            "expandable_text",
            "nav_bar",
            "error_404",
            "error_500",
            "birdle",
            "blog_home",
          ].includes(listItem.getId())
      ),
      S.divider(),
      S.listItem()
        .title("Page not found")
        .child(S.editor().schemaType("error_404").documentId("error_404")),
      S.listItem()
        .title("Internal server error")
        .child(S.editor().schemaType("error_500").documentId("error_500")),
      // Add a visual divider (optional)
    ]);
