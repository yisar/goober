export const addStyledProps = (styled, tagNames) =>
  tagNames.forEach(
    tagName => !styled[tagName] && (styled[tagName] = styled(tagName))
  ) || styled;
