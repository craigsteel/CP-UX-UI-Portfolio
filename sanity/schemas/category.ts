import {defineField, defineType} from 'sanity'

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "text",
    }),
    defineField({
      name: "sector",
      title: "Sector",
      type: "text",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
