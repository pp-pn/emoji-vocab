// The top ten emoji used worldwide are đ â¤ī¸ đ¤Ŗ đ đ­ đ đ đĨ° đ đ
// https://home.unicode.org/emoji/emoji-frequency/
// https://emojitracker.com/
// TODO: implement bloom filter
const items: {emoji: string, synonyms: string[]}[] = [
  {emoji: 'đ', synonyms: ['wave']},
  {emoji: 'đ', synonyms: ['joy']},
  {emoji: 'đ­', synonyms: ['sob', 'crying']},
  {emoji: 'â¤ī¸', synonyms: ['heart']},
  {emoji: 'đī¸', synonyms: ['pray']},
  {emoji: 'đī¸', synonyms: ['kiss']},
  {emoji: 'đĨ°ī¸', synonyms: ['hearts']},
  {emoji: 'đī¸', synonyms: ['hearteyes']},
  {emoji: 'đ¤ī¸', synonyms: ['thinking']},
  {emoji: 'đī¸', synonyms: ['smile']},
  {emoji: 'đŠī¸', synonyms: ['weary']},
  {emoji: 'âģī¸', synonyms: ['recycle']},
  {emoji: 'đī¸', synonyms: ['thumbsup', 'thumb']},
  {emoji: 'đ', synonyms: ['eyes']},
  {emoji: 'đ', synonyms: ['ok_hand', 'ok']},
  {emoji: 'đ', synonyms: ['rocket']},
  {emoji: 'âĄī¸', synonyms: ['zap']},
  {emoji: 'đ¤', synonyms: ['hug', 'hugging']},
  {emoji: 'đ¤Ģ', synonyms: ['hush', 'shushing']},
  {emoji: 'đŠ', synonyms: ['poop']},
  {emoji: 'đŽ', synonyms: ['taco']},
  {emoji: 'đĄ', synonyms: ['idea', 'light bulb']},
  /* {emoji: 'đĻ', synonyms: ['sweat']},
   * {emoji: 'đ', synonyms: ['tongue']},
   * {emoji: 'đ', synonyms: ['eggplant']},
   * {emoji: 'đ', synonyms: ['peach']}, */
  {emoji: 'đ', synonyms: ['imp', 'devil', 'demon']},
  {emoji: 'đš', synonyms: ['oni', 'demon', 'orge']},
  {emoji: 'đŧ', synonyms: ['tower', 'tokyo']},
  {emoji: 'â¨', synonyms: ['sparkles']},
  {emoji: 'đĨ', synonyms: ['fire', 'flame']},
]


export default items;
