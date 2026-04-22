def year_grade(avarge:float) ->int:
    if(avarge>=5.5):
        return 6
    elif(avarge>=4.7):
        return 5
    elif(avarge>=3.7):
        return 4
    elif(avarge>=2.7):
        return 3
    elif(avarge>=1.85):
        return 2
    elif(avarge<1.85):
        return 1