export const MEDIA_ITEM_FRAGMENT = `
  fragment MediaItem on ComponentSharedMediaItem {
    label
    showTooltip
    openWithPopup
    media {
      ext
      url
      formats
      mime
      width
      height
    }
  }
`;
