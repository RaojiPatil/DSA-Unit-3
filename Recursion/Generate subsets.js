function allSubsets(pos, len, [], subset) {
    if (pos == N)
        return (subset)



    subset[len] = S[pos]
    allSubsets(pos + 1, len + 1, subset)

    allSubsets(pos + 1, len, subset)
}