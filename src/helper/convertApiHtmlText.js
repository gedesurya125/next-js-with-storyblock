export const convertApiHtmlText = (htmlText) => {
  // replace the </p><p> tag with <br/>
  const replacedPasByPTagWithNewLine = htmlText.replace(
    /\<\/p\>\n\<p\>/g,
    '<br/><br/>'
  );
  const replacedPasByPTag = replacedPasByPTagWithNewLine.replace(
    /\<\/p\>\<p\>/g,
    '<br/><br/>'
  );

  const replacedNewLine = replacedPasByPTag.replace(/\n/g, '<br/>');

  // remove the p tag
  const removedFrontPTag = replacedNewLine.replace(/\<p\>/g, '');
  const removedBackPTag = removedFrontPTag.replace(/\<\/p\>/g, '');

  // change strong tag to be span tag
  const switchedStrongTag = removedBackPTag.replace(/strong\>/g, 'span>');

  const switchedEmTag = switchedStrongTag.replace(/em\>/g, 'span>');

  return switchedEmTag;
};
