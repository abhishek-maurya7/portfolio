import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsAboutMe extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_mes';
  info: {
    displayName: 'About Me';
    icon: 'alien';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
    footnote: Schema.Attribute.Component<'shared.foot-note', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsGallery extends Struct.ComponentSchema {
  collectionName: 'components_sections_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'shared.media-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    greeting: Schema.Attribute.String;
    location: Schema.Attribute.String;
    name: Schema.Attribute.String;
    openToWork: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    resume: Schema.Attribute.Component<'shared.link', false>;
    role: Schema.Attribute.String;
    shortIntro: Schema.Attribute.Blocks;
    showCase: Schema.Attribute.Component<'sections.gallery', false>;
    socials: Schema.Attribute.Component<'shared.link-with-icon', true>;
  };
}

export interface SectionsMyBackpack extends Struct.ComponentSchema {
  collectionName: 'components_sections_my_backpacks';
  info: {
    displayName: 'My Backpack';
    icon: 'grid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    footnote: Schema.Attribute.Component<'shared.foot-note', false>;
    tech_stacks: Schema.Attribute.Relation<
      'oneToMany',
      'api::tech-stack.tech-stack'
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsProjects extends Struct.ComponentSchema {
  collectionName: 'components_sections_projects';
  info: {
    displayName: 'Card Collection';
    icon: 'apps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.project-card', true>;
    description: Schema.Attribute.String;
    footnote: Schema.Attribute.Component<'shared.foot-note', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFootNote extends Struct.ComponentSchema {
  collectionName: 'components_shared_foot_notes';
  info: {
    displayName: 'Foot Note';
  };
  attributes: {
    body: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    rel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'noopener noreferrer'>;
    target: Schema.Attribute.Enumeration<
      ['_self', '_blank', '_parent', '_top']
    > &
      Schema.Attribute.DefaultTo<'_self'>;
    variant: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary', 'flat']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedLinkWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_with_icons';
  info: {
    displayName: 'Link with icon';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      [
        'faBehance',
        'faBlogger',
        'faBluesky',
        'faCodepen',
        'faDev',
        'faDigitalOcean',
        'faDiscord',
        'faDribbble',
        'faFacebook',
        'faFigma',
        'faFreeCodeCamp',
        'faGithub',
        'faGitlab',
        'faHackerrank',
        'faHuggingFace',
        'faInstagram',
        'faItunesNote',
        'faKaggle',
        'faLastfm',
        'faLeetcode',
        'faLine',
        'faLinkedinIn',
        'faLinktree',
        'faMedium',
        'faMeta',
        'faNotion',
        'faNpm',
        'faPinterestP',
        'faPlaystation',
        'faProductHunt',
        'faQuora',
        'faReddit',
        'faSnapchat',
        'faSpotify',
        'faSteam',
        'faThreads',
        'faTiktok',
        'faTumblr',
        'faUpwork',
        'faWhatsapp',
        'faXbox',
        'faXTwitter',
        'faYCombinator',
        'faYoutube',
      ]
    > &
      Schema.Attribute.Required;
    iconOnly: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface SharedMediaItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_media_items';
  info: {
    displayName: 'Media Item';
    icon: 'dashboard';
  };
  attributes: {
    label: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    openWithPopup: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    showTooltip: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedProjectCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_project_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    banner: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.String;
    links: Schema.Attribute.Component<'shared.link-with-icon', true>;
    tags: Schema.Attribute.Relation<'oneToMany', 'api::tech-stack.tech-stack'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
      'sections.about-me': SectionsAboutMe;
      'sections.gallery': SectionsGallery;
      'sections.hero': SectionsHero;
      'sections.my-backpack': SectionsMyBackpack;
      'sections.projects': SectionsProjects;
      'shared.foot-note': SharedFootNote;
      'shared.link': SharedLink;
      'shared.link-with-icon': SharedLinkWithIcon;
      'shared.media-item': SharedMediaItem;
      'shared.project-card': SharedProjectCard;
      'shared.rich-text': SharedRichText;
    }
  }
}
