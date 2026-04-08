def read_graph(filename):
    graph = []
    with open(filename) as f:
        n = int(f.readline())
        for line in f:
            line=line.strip()
            line=line[2:]
            line = list(map(int, line.split(" ")))
            graph.append(line)
    return graph
def write_neighbours_list(graph):
    j=-1
    for i in graph:
        sasiedzi=""
        for ii in i:
            sasiedzi+=str(ii)
            sasiedzi=sasiedzi+" "
        j=j+1
        print(f"Sasiadami wierzcholka: {j} sa: {sasiedzi}")
def list_to_matrix(graph):
    n = len(graph)
    matrix = []
    for i in range(n):
        row = []
        for j in range(n):
            row.append(0)
        matrix.append(row)
    for i in range(n):
        for j in graph[i]:
            matrix[i][j] = 1
    return matrix
def write_matrix(matrix):
    for row in matrix:
        print(" ".join(map(str, row)))

def write_graph(graph):
    for i in graph:
        print(i)

graph = read_graph("grafy.txt")
write_graph(graph)
write_neighbours_list(graph)
matrix=list_to_matrix(graph)
write_matrix(matrix)