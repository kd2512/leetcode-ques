## Approach

We make use of left array and right array.</br>

LeftArray: the product of elements of all left side of the current element

RightArray: the product of elements of all right side of the current element

Refer Image: <br/>

![product array](/images/IMG-20230922-WA0000.jpeg)

#### Creating left Array

Iterating from the left, we see there is no element on the left side of first element hence, we keep the first element as it is.

then the further elements will be the product of the current element and the previos element of the left array.

#### Creating Right Array

Iterating from the right, we see there is no element at the right of the last element hence, we keep the last element as it is.

then the further elements will be the peoduct of the current element and the previous element of the right array.

#### Creating Output Array

We see there is no element on the lef t and right of the firat and last element of the array respectively, hence, first element of the output array should be 1th index of the right array(since 1st element should be neglected(because product except self)).

Similarly, last element of the output array will be second last element of the left array.

Rest all the elements will be filled as per shown in image i.e.

`leftArr[i - 1] * rightArr[i + 1]`
