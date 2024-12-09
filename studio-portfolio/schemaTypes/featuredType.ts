import {defineField, defineType} from 'sanity'

export const featuredType = defineType({
    name: 'featured',
    title: 'Featured',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'slug',
        type: 'slug',
        options: {source: 'title'},
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'publishedAt',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'image1',
        type: 'image',
      }),
      defineField({
        name: 'order',
        type: 'number', // Use 'number' for manual ordering
        title: 'Order',
        description: 'Specify the order for displaying this work.',
      }),
    ],
  })