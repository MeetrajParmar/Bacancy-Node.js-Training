let str = "Meet";

let reverseString = (str) => {
  let revstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    let a = str.charAt(i);
    revstr = revstr.concat("", a);
  }
  return revstr;
};

let revStr = (str) => {
  let rev = "";
  rev = Array.from(str).reduce((acc, cul) => [cul, ...acc], []);
  rev = rev.toString().replaceAll(",", "");
  return rev;
};
// console.log(reverseString(str));

let palidromeString = (str) => {
  let rev = revStr(str);
  return rev.match(str) ? true : false;
};

let anagram = (str1, str2) => {
  str1 = Array.from(str1).sort().toString().replaceAll(",", "");
  str2 = Array.from(str2).sort().toString().replaceAll(",", "");
  str1.match(str2) ? console.log("Match") : console.log("Unmatched");
};

let legthlastword = (str) => {
  str = str.split(" ");
  return str[str.length - 1].length;
};

let RevWord = (str) => {
  str = str.trim().split(" ");
  return str[str.length - 1].length;
};

let longst = (str) => {
  let str1 = "";
  str = Array.from(str).sort().toString().replaceAll(",", "");
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charAt(i) !== str.charAt(i + 1)) {
      str1 = str1.concat(str.charAt(i), "");
    }
  }
  str1 = str1.concat(str.charAt(str.length - 1), "");
  return str1;
};
// console.log(revStr("Meet"));
// console.log(palidromeString("abb"));
// anagram("abbaaaa", "bbaadaaa");
// console.log(legthlastword("Hello World!!"));
// console.log(RevWord("a good   example"));
console.log(longst("b"));
