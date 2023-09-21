## Approach

We use hash map

1. Check if `target - nums[i]` is present in the map as key, then we get the answer as the currentindex and the value of the key

> Why? because nums[currentIndex] + some_num = target, so subtacting the nums[currentIndex] from target gives our value.

2. If not present, set the map as key as nums[i] and the value as the current index i.
