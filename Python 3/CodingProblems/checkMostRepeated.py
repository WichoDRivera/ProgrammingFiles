

def contDuplicates(numbers):
    dic = {}
    for n in numbers:
        if n in dic:
            dic[n] = dic[n] + 1
        else:
            dic[n] = 1

    count = 0
    for a in dic:
        if dic[a] > 1:
            count += 1

    print(count)

    return dic
numbers = [1,3,3,4,4]
contDuplicates(numbers)
