sygnal=[]
i=0
with open('sygnaly.txt','r', encoding='utf-8') as file:
    for line in file:
        sygnal.append(line.strip())
        i+=1
odpowiedza=''
for i in range(39, len(sygnal)-1, 40):
    odpowiedza+=sygnal[i][9]
print(odpowiedza)
slowomax=""
maxliter=0
for slowo in sygnal:
    litery=[]
    for litera in slowo:
        if not litera in litery:
            litery.append(litera)
        lliter=len(litery)
        if lliter>maxliter:
            maxliter=lliter
            slowomax=slowo
print(slowomax)
print(maxliter)
alfabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
for slowo in sygnal:
    litery=[]
    for litera in slowo:
        litery.append(litera)
    litery.sort()
    poczadek=litery[0]
    koniec=litery[len(litery)-1]
    poczadekk=alfabet.index(poczadek)+1
    koniecc=alfabet.index(koniec)+1
    if koniecc-poczadekk<=10:
        print(slowo)