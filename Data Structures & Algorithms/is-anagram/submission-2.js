class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let foundAllForS = true;
        let sArr = s.split('')
        let tArr = t.split('')

        sArr.forEach(letter => {
            if (tArr.includes(letter)) {
                let indexOfLetter = tArr.indexOf(letter)

                tArr.splice(indexOfLetter, 1)
            } else {
                foundAllForS = false
            }
        })

        let foundAllForT = true;
        sArr = s.split('')
        tArr = t.split('')

        tArr.forEach(letter => {
            if (sArr.includes(letter)) {
                let indexOfLetter = sArr.indexOf(letter)

                sArr.splice(indexOfLetter, 1)
            } else {
                foundAllForT = false
            }
        })

        return foundAllForS && foundAllForT
    }
}
