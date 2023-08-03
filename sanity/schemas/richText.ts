import {defineType} from 'sanity'
export default defineType({
  title: 'Video',
  name: 'richText',
  type: 'array',
    of: [
      {
        type: 'block',
      },
      {
        title: 'Video file',
        name: 'videofrontend',
        type: 'mux.video'
      },
    ],
  },
)