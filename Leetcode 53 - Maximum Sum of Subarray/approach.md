> Subarray: A subarray is a contiguous non-empty sequence of elements within an array.

## Approach

We use the `Kadane's Algorithm`

1. We take two variables `maxSum=nums[0]` and `sum=0`

2. then we iterate over the array, and add the elements to the sum, if the sum is greater than maxSum we assign `maxSum=sum`

3. and if `sum < 0`, we assign `sum = 0`.

4. at last, the maxSum that we get is the maxSum we desire.

Refer Image for dry run

![subarray](/images/IMG_20230922_195912788.jpg)
