
def anagram(pool):

    arrAnagram = []

    for i in range(0, len(pool)-1):
        if (sorted(pool[i]) == sorted(pool[i+1])):
            arrAnagram.append([pool[i],pool[i+1]])

    print(arrAnagram)
    print(len(arrAnagram))


pool = ["the", "bats" ,"tabs" ,"in" ,"the" ,"act","cat"]
anagram(pool)

