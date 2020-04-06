const CAVEAT = "Caveat";
const ENGLISH = "English";
const JAPANESE = "Japanese";
const JAP_CERT_TITLE = "免許・資格";
const GARAMOND = "EB Garamond";
const LIST_ITEM_PADDING = "9px";
const NOTOSERIF = "Noto Serif JP";
const SATISFY = "Satisfy";

const MEDMAX = 1025;
const SMALLMAX = 481;
const MYNAME = "Wandal Cooper";
const MYJAPANESENAME = "クーパー　ワンダル";

const getFont = (lang) => {
  const japaneseFont = { fontFamily: NOTOSERIF };
  const englishFont = { fontFamily: `${CAVEAT}, ${SATISFY}` };
  if (lang === ENGLISH) {
    return englishFont;
  } else {
    return japaneseFont;
  }
};

export {
  getFont,
  CAVEAT,
  ENGLISH,
  GARAMOND,
  JAPANESE,
  JAP_CERT_TITLE,
  LIST_ITEM_PADDING,
  MEDMAX,
  MYNAME,
  MYJAPANESENAME,
  NOTOSERIF,
  SATISFY,
  SMALLMAX,
};
