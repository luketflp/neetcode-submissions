class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let foundAll = true;
        let sArr = s.split('')
        let tArr = t.split('')

        sArr.forEach(letter => {
            let indexForT = tArr.indexOf(letter)

            if (indexForT !== -1) {
                tArr.splice(indexForT, 1)
            } else {
                foundAll = false
            }
        })

        if (tArr.length) {
            return false
        }

        return foundAll
    }
}
