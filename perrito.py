# Este es un código básico en Python

def saludo(nombre):
    return f"Hola, {nombre}! Bienvenido al mundo de Python."

if __name__ == "__main__":
    nombre_usuario = input("¿Cuál es tu nombre? ")
    print(saludo(nombre_usuario))