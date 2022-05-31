# define spin_words for a sentence
# return a string that is
# joined as a string array after
# reversing words w[::-1] after
# selecting all words >= 5 letters 
# else leave w for w in sentence.split()

# working backwards
# split the sentence
# w can stay w in sentence split unless
# if len(w) is 5 equal to 5 or more
# reverse the word with w[::-1]
# return the joined sentence

def spin_words(sentence):
    return " ".join([w[::-1] if len(w) >= 5 else w for w in sentence.split()])
