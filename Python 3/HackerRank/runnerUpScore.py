num = 5
a = [2,6,3,5,6]
print("Num: " + str(num))
print("List: " + str(a))

highest = None
second = None
for i in range(0, len(a)):
    temp = int(a[i])
    print("temp: " + str(temp))
    if highest == None or highest < temp:
        second = highest
        highest = temp
        print(second)
        print(highest)
    else: 
        if second == None or second == highest or (second < temp and temp != highest):
            second = temp
            print(second)
    print("====")
print(second)
