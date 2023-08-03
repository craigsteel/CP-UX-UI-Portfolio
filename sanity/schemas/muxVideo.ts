import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Video For frontend',
  name: 'videofrontend',
  type: 'document',
    fields: [
    defineField({
        title: 'Title',
        name: 'title',
        type: 'string',
        }),
    defineField({
      title: 'Video file',
      name: 'video',
      type: 'mux.video'
    }),
  ],
})