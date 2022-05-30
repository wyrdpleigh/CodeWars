# def nb_year(p0, percent, aug, p):

# define nb_year with given parameters
# we're returning number of years, so include a years paramater set to 0
# use an if statement to loop through nb_years 
# don't forget to return yearly percentage growth as an integer
# add a year for each loop for as long as p0 < p
# return years

def nb_year(p0, percent, aug, p, years = 0):
    if p0 < p:
        return nb_year(p0 + int(p0 * percent / 100) + aug, percent, aug, p, years + 1)
    return years
    