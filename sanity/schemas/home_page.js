export const home_page= {
  name: 'home_page',
  title: 'Home page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
type:'string'
    },
    {name:'about_me',title:'About me','type':'text'}
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
