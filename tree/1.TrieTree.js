// when thousands of strings, we can use trie tree to orgnize the stings.
// https://www.youtube.com/watch?v=AXjmTQ8LEoI&t=120s

// Insert
// O(L) time for one insert, the totally is O(L * N) l is average length, N is number of words
// TrieNode: map<character, trieNode>, boolean endOfWord.
// if "assert" and "word", then the root node should have a and w two characters
// if "ab" and "ad", then root node is "a" and points to a child node which contains "b" and "d";
// finally the last character in the word should point to an empty node with T;

// Search
// O(L) time
// prefix search (as long as there is a path), trie tree is better
// whole word search (must end with T), hash table is better

// Delete
// O(L) time
// delete whole word
// delete "abc" but there is a "abcd", so we only need to turn the TrieNode "d" to F, instead delete
// delete "abgl" but there is "abcd", so we delete last T empty node and "l" node, and delete "g" in "c" node.
