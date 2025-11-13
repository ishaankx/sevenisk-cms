// /schemaTypes/blockContent.ts
import { defineType, defineArrayMember } from 'sanity'
import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify
} from 'lucide-react'

export default defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Code', value: 'code' },

          // 👇 Alignment decorators (using Lucide icons)
          {
            title: 'Align Left',
            value: 'alignLeft',
            icon: AlignLeft,
          },
          {
            title: 'Align Center',
            value: 'alignCenter',
            icon: AlignCenter,
          },
          {
            title: 'Align Right',
            value: 'alignRight',
            icon: AlignRight,
          },
          {
            title: 'Justify',
            value: 'alignJustify',
            icon: AlignJustify,
          },
        ],

        annotations: [
          defineArrayMember({
            name: 'link',
            title: 'URL',
            type: 'object',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
              {
                name: 'openInNewTab',
                type: 'boolean',
                title: 'Open in new tab',
              },
            ],
          }),
        ],
      },
    }),

    // 👇 Optional image support
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
        },
      ],
    }),
  ],
})
