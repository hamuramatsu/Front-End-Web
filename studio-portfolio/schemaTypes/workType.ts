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
        name: 'mainImage',
        type: 'image',
        options: {
          hotspot: true, // Enables cropping and positioning
        },
      }),
      defineField({
        name: 'moreImages',
        title: 'Images',
        type: 'array',
        of: [
          {
            type: 'image',
            options: {
              hotspot: true, // Enables cropping and positioning
            },
          },
        ],
      }),
      defineField({
        name: 'body',
        type: 'array',
        of: [{type: 'block'}],
      }),
    ],
  })