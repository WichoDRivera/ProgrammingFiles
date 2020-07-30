"""
 Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. 
 If there are two or more words that are the same length, return the first word from the string with that length.
 Ignore punctuation and assume sen will not be empty.
"""

# Big O          Complexity: O(n)       Space: O(n)

def LongestWord(sen):

  # With re library
  import re
  # code goes here
  sen = re.sub("[^0-9a-zA-Z]+", " ", sen)
  tempSen = sen.split(" ")

  largest = ""
  for word in tempSen:
    if len(word) > len(largest):
      largest = word
  return largest

# keep this function call here 
print(LongestWord(input()))


# Without Re library
def LongestWord(sen):

  newSen = ""
  for letter in sen:
    if letter.isalnum() == True or letter == " ":
      newSen += letter

  newSen = newSen.split(" ")
  largest = ""

  for word in newSen:
    if len(word) > len(largest):
      largest = word
  return largest 

# keep this function call here 
print(LongestWord(input()))



