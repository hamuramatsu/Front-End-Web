import {defineField, defineType} from 'sanity'

export const workType = defineType({
    name: 'work',
    title: 'Work',
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
        name: 'order',
        type: 'number', // Use 'number' for manual ordering
        description: 'Specify the order for displaying this work.',
      }),
      defineField({
        name: 'publishedAt',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'yearCreated',
        type: 'string',
      }),
      defineField({
        name: 'medium',
        type: 'string',
      }),
      defineField({
        name: 'image1',
        type: 'image',
      }),
      defineField({
        name: 'image2',
        type: 'image',
      }),
      defineField({
        name: 'image3',
        type: 'image',
      }),
      defineField({
        name: 'image4',
        type: 'image',
      }),
      defineField({
        name: 'body',
        type: 'array',
        of: [{type: 'block'}],
      }),
    ],
  })