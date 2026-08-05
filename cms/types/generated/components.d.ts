import type { Schema, Struct } from '@strapi/strapi';

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    rel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'noopener noreferrer'>;
    target: Schema.Attribute.Enumeration<
      ['_self', '_blank', '_parent', '_top']
    >;
  };
}

export interface SharedLinkWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_with_icons';
  info: {
    displayName: 'Link with icon';
  };
  attributes: {
    icon: Schema.Attribute.String;
    link: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.link': SharedLink;
      'shared.link-with-icon': SharedLinkWithIcon;
      'shared.rich-text': SharedRichText;
    }
  }
}
