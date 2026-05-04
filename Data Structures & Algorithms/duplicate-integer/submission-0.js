class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let duplicated = false;
        let alreadyPassed = []

        nums.forEach(num => {
            if (alreadyPassed.includes(num)) {
                duplicated = true
            } else {
                alreadyPassed.push(num)
            }
        })
        return duplicated
    }
}
