class Course:
    def __init__(self,id,coursename):
        self.id = id
        self.coursename = coursename
    def info(self):
        print(self.id + " " + self.coursename)
class Student:
    def __init__(self, id, name, surname, age, courses=None):
        self.id = id
        self.name = name
        self.surname = surname
        self.age = age
        self.courses = courses if courses is not None else []
    def info(self):
        course_names = [c.coursename for c in self.courses]
        print(self.name + " " + self.surname + "(" + self.age + ") - " + ", ".join(course_names))
studenci =[]
kursy = []
with open("courses.txt") as f:
    for course in f:
        course = course.strip()
        id = course.split(",")[0]
        course_name = course.split(",")[1]
        kursy.append(Course(id, course_name))
with open("students.txt","r") as f:
    students = f.readlines()
    for student in students:
        student = student.strip()
        id=student.split(",")[0]
        name=student.split(",")[1]
        surname=student.split(",")[2]
        age=student.split(",")[3]
        st=Student(id,name,surname,age)
        studenci.append(st)

studzencikursy=[]
for student in studenci:
    lista_kursow = []
    idstudenta=student.id
    namestudenta=student.name
    surnamestudenta=student.surname
    agestudenta=student.age
    for course in kursy:
        if course.id == idstudenta:
            lista_kursow.append(course)
    studzencikursy.append(Student(idstudenta,namestudenta,surnamestudenta,agestudenta,lista_kursow))
for student in studzencikursy:
    filename = student.name + "_" + student.surname + ".txt"
    course_names = [c.coursename for c in student.courses]
    content = ", ".join(course_names)
    with open(filename, "w", encoding="utf-8") as f:
        f.write(content)





