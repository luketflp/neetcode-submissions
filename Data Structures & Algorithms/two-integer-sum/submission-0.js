class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let result = [];
        nums.forEach((firstNum, firstIndex) => {
            nums.forEach((secondNum, secondIndex) => {
                const numsSum = firstNum + secondNum
                if (firstIndex !== secondIndex && numsSum == target) {
                    result = [firstIndex, secondIndex]
                }

                return
            })
            if (result.length) return
        })

        return result
    }
}
