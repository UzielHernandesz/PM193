from fastapi import FastAPI #importar la clase principal
from fastapi.middleware.cors import CORSMiddleware #va a permitir que aplicaciones externas puedan 
#entrar y acceder a la informacion que tenemos 
from routes import router #importamos las rutas que tenemos en routes.py

app = FastAPI() #instancia de la clase FastAPI principal la app principal

#Hacer el filtro de seguridad 

app.add_middleware(
    CORSMiddleware,  #Permite que aplicaciones externas puedan acceder a nuestra app
    allow_origins=["*"],  #Permite que cualquier origen pueda acceder a nuestra app
    allow_credentials=True,  #Permite que las credenciales sean compartidas
    allow_methods=["*"],  #Permite que cualquier metodo pueda acceder a nuestra app
    allow_headers=["*"],  #Permite que cualquier encabezado pueda acceder a nuestra app
    
)

app.include_router(router)  #Incluimos las rutas que tenemos en routes.py
#Queremos que use todas lass rutas que se encuentran en el Router creado

