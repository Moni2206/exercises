function sfw() {
  curseWords.forEach((curseWords) => {
    theText = theText.replaceAll(curseWords, "****");
  });
}
