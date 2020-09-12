// Longest Substring Without Repeating Characters

const assert = require("assert");

var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let right = 0;
  let maxLength = 1;
  if (s.length < 2) return s.length;
  let map = new Map();
  while (right < s.length) {
    if (map.has(s[right]) && map.get(s[right]) >= left) {
      maxLength = Math.max(maxLength, right - left);
      left = map.get(s[right]) + 1;
    }
    map.set(s[right], right);
    right++;
  }
  maxLength = Math.max(maxLength, right - left);
  return maxLength;
};

assert(lengthOfLongestSubstring("abcabcbb") === 3);
assert(lengthOfLongestSubstring("dvdf") === 3);
assert(lengthOfLongestSubstring("abba") === 2);

// hash table and sliding window
// O(N) time

// sliding window means you have 2 pointers, and move them properly
// In this case, the right one will keep sliding and the left one will find a percise position.
