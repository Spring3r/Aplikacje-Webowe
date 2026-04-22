from models.Teacher import Teacher
from models.Student import Student
from models.Subject import Subject
from models.Grades import Grades

teachers: list[Teacher] = []
subjects: list[Subject] = []
students: list[Student] = []
grades: list[Grades] = []

with open("teachers.txt","r") as file:
    for line in file:
        parts=line.strip().split()
        id=int(parts[0])
        name=parts[1]
        surname=parts[2]
        teacher=Teacher(id,name,surname)
        teachers.append(teacher)
with open("subjects.txt","r") as file:
    for line in file:
        parts=line.strip().split()
        id=int(parts[0])
        name=parts[1]
        teacher_id=parts[2]
        teacher=teachers[int(teacher_id)-1]
        subject=Subject(id,name,teacher)
        subjects.append(subject)
print(subjects[1].teacher.name)
with open("students.txt","r") as file:
    for line in file:
        parts=line.strip().split()
        student_id=int(parts[0])
        name=parts[1]
        surname=parts[2]
        birth_date=parts[3]
        student=Student(student_id,name,surname,birth_date)
        students.append(student)
print(students[1].first_name)
with open("grades.txt","r") as file:
    for line in file:
        parts = line.strip().split()

        student_id = int(parts[0])
        subject_id = int(parts[1])
        grades_list = parts[2].split(",")
        grades_list = [int(g) for g in grades_list]
        student = students[student_id - 1]
        subject = subjects[subject_id - 1]
        grade = Grades(student, subject.teacher)
        grade.grades = grades_list
        grades.append(grade)
