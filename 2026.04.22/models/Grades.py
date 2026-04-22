from models.Student import Student
from models.Teacher import Teacher


class Grades:
    def __init__(self, Student:Student, Teacher:Teacher):
        self.grades: list[int] = []
        self.student=Student
        self.teacher=Teacher
    def add_grade(self, grade:int):
        if(grade<1 or grade>6):
            raise ValueError('Grade must be between 1 and 6')
        self.grades.append(grade)

    def get_grades(self):
        return self.grades
    def get_average(self):
        return sum(self.grades)/len(self.grades)