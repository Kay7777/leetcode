// Longest Palindromic Substring

var longestPalindrome = function (s) {
  let longest = "";
  if (s.length < 2) return s;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      let left = i - 1;
      let right = i;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      if (right - left - 1 > longest.length) {
        longest = s.slice(left + 1, right);
      }
    }
    let left = i;
    let right = i;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    if (right - left - 1 > longest.length) {
      longest = s.slice(left + 1, right);
    }
  }
  return longest;
};

console.log(longestPalindrome("ccc") === "ccc");

// O(N2) time
