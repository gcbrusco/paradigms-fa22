function computeEnumeration(termPositions) {
    let startNum = 2;
    let diagonalCount = 2;
    if (termPositions.length == 0) {
        // error checking when termPositions = []
        return [];
    }
    let maxTerms = Math.max(...termPositions); // max number of positions needed

    if (maxTerms >= 1) {
        var terms = new Array(maxTerms).fill(null);
        var termPositionValues = new Array(termPositions.length);
    } else {
        // when termPositions are all negative numbers
        return new Array(termPositions.length).fill(null);
    }

    let numTerms = 1; //counts number of terms or positions calculated

    while (numTerms <= maxTerms) {
        // continue until max number of terms reached
        for (let i = diagonalCount, j = startNum; j <= diagonalCount; i -= 2, j += 2) {
            terms[numTerms] = i + '/' + j;
            numTerms++;
            if (numTerms > maxTerms) {
                break;
            }
        }
        diagonalCount += 2;
        //same for loop as before, but the top and bottom numbers are replaced
        for (let i = diagonalCount, j = startNum; j <= diagonalCount; i -= 2, j += 2) {
            terms[numTerms] = j + '/' + i;
            numTerms++;
            if (numTerms > maxTerms) {
                break;
            }
        }
        diagonalCount += 2;
    }
    for (let k = 0; k < termPositions.length; k++) {
        // place term Position values in correct place in outputted array
        termPositionValues[k] = terms[termPositions[k]] || null;
    }
    return termPositionValues;
}