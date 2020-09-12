// LRU cache needs to check the frequency, so hash table will tak O(N) to do that.
// Doublely Linked List is a better solution, because we can shift it by O(1) time.
// but finding the specific key-value pair take O(N) time in linked list
// we can combine two data structures and use advantages of them
// using hash table to map key and the node, then using linked list to shift
