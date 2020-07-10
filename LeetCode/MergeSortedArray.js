//mergesort를 이용하여 풀었다.
//시간복잡도는 O(nlogn)
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

var merge = function(nums1, m, nums2, n) {
  let j = 0;
  const sorted = new Array(m + n).fill(0);
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[j++];
  }

  const merge = (start, middle, end) => {
    let index = start;
    let center = middle + 1;

    while (start <= middle && center <= end) {
      if (nums1[start] <= nums1[center]) {
        sorted[index] = nums1[start];
        start++;
      } else {
        sorted[index] = nums1[center];
        center++;
      }
      index++;
    }

    if (start > middle) {
      for (let t = center; t <= end; t++) {
        sorted[index] = nums1[t];
        index++;
      }
    } else {
      for (let t = start; t <= middle; t++) {
        sorted[index] = nums1[t];
        index++;
      }
    }

    for (let i = 0; i <= end; i++) {
      nums1[i] = sorted[i];
    }
  };
  const mergeSort = (start, end) => {
    if (start < end) {
      let middle = parseInt((start + end) / 2);
      mergeSort(start, middle);
      mergeSort(middle + 1, end);
      merge(start, middle, end);
    }
  };
  mergeSort(0, nums1.length - 1);

  return nums1;
};
console.log(merge(nums1, m, nums2, n));
