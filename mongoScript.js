
print("Iniciando Script");

coneccion = new Mongo("localhost");

var dbName = 'foundapidb';
var db = coneccion.getDB(dbName);

db.dropDatabase();

/*coleciones de nuestro modelo de datos*/
db.createCollection('series');
db.createCollection('libros');
//db.createCollection('capitulos');
//db.createCollection('relatos');
//db.createCollection('personajes');

/* Libros */
print("::::::::::::creando libros::::::::::::");

libro1 = {
    "_id" : "1",
    "nombre" : "yo, robot",
    "publicacion" : 1950
}

libro2 = {
    "_id" : "2",
    "nombre" : "las bovedas de acero",
    "publicacion" : 1954
}

libro3 = {
    "_id" : "2",
    "nombre" : "el sol desnudo",
    "publicacion" : 1957
}

libro4 = {
    "_id" : "4",
    "nombre" : "los robots del amanecer",
    "publicacion" : 1983
}

libro5 = {
    "_id" : "5",
    "nombre" : "robots e imperio",
    "publicacion" : 1985
}

libro6 = {
    "_id" : "6",
    "nombre" : "en la arena estelar",
    "publicacion" : 1951
}

libro7 = {
    "_id" : "7",
    "nombre" : "las corrientes del espacio",
    "publicacion" : 1952
}

libro8 = {
    "_id" : "8",
    "nombre" : "un guijarro en el cielo",
    "publicacion" : 1950
}

/* Series */
print("::::::::::::creando series::::::::::::");

serie1 = {
    "_id" : "1",
    "nombre" : "serie de los robots",
    "descripcion" : "inicio de la era de los robots positronicos y las colonias espaciales",
    "libros" : [
        libro1, libro2, libro3, libro4, libro5
    ]
}

serie2 = {
    "_id" : "2",
    "nombre" : "trilogia del imperio galactico",
    "descripcion" : "inicios del imperio galactico y su desarrollo como el imperio de trantor",
    "libros" : [
        libro6, libro7, libro8
    ]
}

serie3 = {
    "_id" : "3",
    "nombre" : "ciclo de la fundacion",
    "descripcion" : "inicio de la era de las fundaciones y desarrollo de la saga principal",
    "libros" : []
}

print("::::::::::::guardando libros::::::::::::");
db.libros.save(libro1);
db.libros.save(libro2);
db.libros.save(libro3);
db.libros.save(libro4);
db.libros.save(libro5);
db.libros.save(libro6);
db.libros.save(libro7);
db.libros.save(libro8);

print("::::::::::::guardando series::::::::::::");
db.series.save(serie1);
db.series.save(serie2);
db.series.save(serie3);