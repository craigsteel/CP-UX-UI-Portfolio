import { DocumentIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "number",
      title: "Number",
      type: "number",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "text",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
    defineField({
      title: "Video",
      name: "video",
      type: "mux.video",
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "mainImageProject",
      title: "Main image Project page",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "mobileImage",
      title: "Mobile image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
        to: {
          type: "author",
        },
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
        of: [
          defineArrayMember({
            type: "reference",
            to: [
              {
                type: "category",
              },
            ],
          }),
        ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
