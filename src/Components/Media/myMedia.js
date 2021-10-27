const myMedia = {
  mobileS: '@media(min-width: 320px)',
  mobileM: '@media(min-width: 375px)',
  mobileL: '@media(min-width: 425px)',
  tablet: '@media(min-width: 768px)',
  laptop: '@media(min-width: 1024px)',
  laptopL: '@media(min-width: 1440px)',
  desktop: '@media(min-width: 2560px)',
};

export default myMedia;

/* ${myMedia.mobileS}{} 
${myMedia.mobileM}{} // 375
${myMedia.mobileL}{}  // 425
${myMedia.tablet}{} //768
${myMedia.lapTop}{} 
${myMedia.lapTopL}{} // 1440px
${myMedia.desktop}{}
*/
