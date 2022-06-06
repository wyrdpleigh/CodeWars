// call function friend which takes in an array of friends
// return array friends with names only 4 characters in length
// do this by using the filter mthod on friends,
// calling a function name within the filter to return names only 4 characters in length

function friend(friends){
    return friends.filter(function (name) {return name.length === 4})
  }