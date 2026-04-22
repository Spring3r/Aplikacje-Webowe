class Teacher:
    def __init__(self, id:int, name:str, surname:str):
        self.id = id
        self.name = name
        self.surname = surname

    def __str__(self):
        return f'{self.id} {self.name} {self.surname}'