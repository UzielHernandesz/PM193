from fastapi import APIRouter #sistema de rutas
from data import nombres #importamos los datos del data.py osea los nombres que colocamos en la bd

router = APIRouter() #Esta creando un objeto para poder definir rutas 

@router.get("/nombres") #Esta es la ruta definida por nosotros GET llamada nombres

def get_nombre(): # esta funcion se ejecuta cuando alguien usa el /nombres
    return nombres #Retorna los nombres que estan dentro del data.py

#Sirve como buena practica para secionar bien las rutas que tenemos
#y asi no amontonar todo en el main.py



