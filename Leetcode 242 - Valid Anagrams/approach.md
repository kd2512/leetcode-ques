> Anagrams: An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Approach 1

We make the string as array sort it and again conver it into string and straight away check if both strings are equal then they are anagrams.

## Approach 2

We make use of hash map.

-   First String iteration:

    1.  Check if the character is present in the map, increase the value with 1 or else set the map with key as the character and value as 1.

-   Second string iteration:
    1. Check if the character is present in the map, decrease its value by 1
    2. If the value of any character in the map reaches 0, delete the key.

Now if the map size is 0, it is anagram.
