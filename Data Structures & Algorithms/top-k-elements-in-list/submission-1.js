class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const topFrequents = nums.reduce((acc, curr) => {
            if (acc[curr]) {
                acc[curr]+=1
            } else {
                acc[curr] = 1
            }

            return acc
        }, {})


        var sortable = []

        for (var number in topFrequents) {
            sortable.push([number, topFrequents[number]])
        }

        const sorted = sortable.sort((a, b) => b[1] - a[1])

        const topKFrequents = []

        for (var i = 0; i < k; i++) {
            topKFrequents.push(Number(sorted[i][0]))
        }

        return topKFrequents
    }
}
