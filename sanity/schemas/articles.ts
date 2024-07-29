// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'articles',
    type: 'document',
    title: "News Articles",
    fields: [
      {
          name: 'title',
          type: 'string',
          title: 'Article Title',
          validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
          name: 'slug',
          type: 'slug',
          description: "Click 'Generate' button to generate slug based off article title. URL path for the article.",
          title: 'Slug',
          options: {
              source: "title",
              slugify: (input: string) => {
                // Custom slugify function to properly format the slug as a URL path.
                const newSlug = input.toLowerCase().replace(/\s+/g, '-');
                return `/${newSlug}`;
              },
          },
          validation: (Rule: { required: () => any; }) => Rule.required()
      },
      {
          name: 'mainText',
          type: 'array',
          title: "Main Text",
          of: [{
              type: 'block',
              // The marks declaration below adds an additional option to the Sanity text editor.
              // This option will allow us to attach files to highlighted pieces of text.
              marks: {
                annotations: [{
                  // This can be the name of your choice but make note of it
                  // as you will reference it when writing your front end code
                  name: 'assetReference',
                  type: 'object',
                  title: 'File Reference',
                  description: 'Link pieces of text to a previously uploaded file.',
                  fields: [{
                      name: 'file',
                      // Notice the the type here is 'file'.
                      // In the unsuccessful approach, it was originally 'reference'
                      type: 'file',
                      title: 'File Attachment',
                  }]
                }]
              }
          }]
      }
    ]
}