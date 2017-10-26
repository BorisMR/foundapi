
print("Iniciando script de la fundacion");

coneccion = new Mongo("localhost");

var dbName = 'foundapidb';
var db = coneccion.getDB(dbName);

db.dropDatabase();

//db.createCollection('capitulos');
//db.createCollection('relatos');
db.createCollection('libros');
db.createCollection('series');
//db.createCollection('personajes');

/* Libros */
print("::::::::::::creando libros::::::::::::");

librosAsimov = [
    libro1 = {
        "_id" : "1",
        "nombre" : "yo, robot",
        "publicacion" : 1950
    },
    libro2 = {
        "_id" : "2",
        "nombre" : "las bovedas de acero",
        "publicacion" : 1954
    },
    libro3 = {
        "_id" : "2",
        "nombre" : "el sol desnudo",
        "publicacion" : 1957
    },
    libro4 = {
        "_id" : "4",
        "nombre" : "los robots del amanecer",
        "publicacion" : 1983
    },
    libro5 = {
        "_id" : "5",
        "nombre" : "robots e imperio",
        "publicacion" : 1985
    },
    libro6 = {
        "_id" : "6",
        "nombre" : "en la arena estelar",
        "publicacion" : 1951
    },
    libro7 = {
        "_id" : "7",
        "nombre" : "las corrientes del espacio",
        "publicacion" : 1952
    },
    libro8 = {
        "_id" : "8",
        "nombre" : "un guijarro en el cielo",
        "publicacion" : 1950
    },
    libro9 = {
        "_id" : "9",
        "nombre" : "preludio a la fundacion",
        "publicacion" : 1988
    },
    libro10 = {
        "_id" : "10",
        "nombre" : "hacia la fundacion",
        "publicacion" : 1993
    },
    libro11 = {
        "_id" : "11",
        "nombre" : "fundacion",
        "publicacion" : 1951
    },
    libro12 = {
        "_id" : "12",
        "nombre" : "fundacion e imperio",
        "publicacion" : 1952
    },
    libro13 = {
        "_id" : "13",
        "nombre" : "segunda fundacion",
        "publicacion" : 1953
    },
    libro14 = {
        "_id" : "14",
        "nombre" : "los limites de la fundacion",
        "publicacion" : 1982
    },
    libro15 = {
        "_id" : "15",
        "nombre" : "fundacion y tierra",
        "publicacion" : 1986
    }
];

/* Series */
print("::::::::::::creando series::::::::::::");

seriesAsimov = [
    serie1 = {
        "_id" : "1",
        "nombre" : "serie de los robots",
        "descripcion" : "inicio de la era de los robots positronicos y las colonias espaciales",
        "libros" : [
            libro1, libro2, libro3, libro4, libro5
        ]
    },
    serie2 = {
        "_id" : "2",
        "nombre" : "trilogia del imperio galactico",
        "descripcion" : "inicios del imperio galactico y su desarrollo como el imperio de trantor",
        "libros" : [
            libro6, libro7, libro8
        ]
    },
    serie3 = {
        "_id" : "3",
        "nombre" : "ciclo de la fundacion",
        "descripcion" : "inicio de la era de las fundaciones y desarrollo de la saga principal",
        "libros" : [
            libro9, libro10, libro11, libro12, libro13, libro14, libro15
        ]
    }
];

print("::::::::::::guardando libros::::::::::::");
for (libro of librosAsimov){
    db.libros.save(libro);
}

print("::::::::::::guardando series::::::::::::");
for (serie of seriesAsimov){
    db.series.save(serie);
}