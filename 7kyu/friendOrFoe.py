# define function friend which takes in array x of friends
# return array with real friends by
# selecting friends f for each friend f in array of friends x
# but only if length of friend f is equal to 4 

def friends(x):
    return [f for f in x if len(f) == 4 ]