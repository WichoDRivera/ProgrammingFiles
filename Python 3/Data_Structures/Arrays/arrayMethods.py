# Arrays : Organize items sequentially

strings = ['a','b','c','d']
# 4 per each item = 16 bytes of storage used

print(strings[2])

# Push: Add item at the end 
strings.append('e')      # O(1)

# Pop: Delete item at the end
strings.pop() 
strings.pop()            # O(1)

# Addfirstelement: Add element at the beggining (position 0)
strings.insert(0,'x')    #O(n)

# Splice: Divide the array
# Insert: its used to insert in the desire position
strings.insert(2,'alien')   #O(n)

print(strings)
