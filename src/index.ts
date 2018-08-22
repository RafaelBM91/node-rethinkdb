import * as Thinky from 'thinky';

const thinky: any = Thinky({ db: 'hostel' });

const { r, type }: any = thinky;

const Libro = thinky.createModel("Libro", {
    id: type.string(),
    name: type.string(),
    idAutor: type.string()
});

const Autor = thinky.createModel("Autor", {
    id: type.string(),
    name: type.string()
});

Libro.belongsTo(Autor, "autor", "idAutor", "id");

// let libro = new Libro({
//     name: "cien años de soledad"
// });

// let autor = new Autor({
//     name: "Gabriel Garcia Marquez"
// });

// libro.autor = autor;

// libro.saveAll({autor: true}).then((e: any) => {
//     console.log( e );
// });

// Model.save({ name: "Michel" })
//     .then((result: any) => {});

// Model.run()
//     .then((e: any) => {
//         console.log( e );
//     });

// Libro.run()
//     .then((e: any) => {
//         console.log( e );
//     });

// Autor.run()
//     .then((e: any) => {
//         console.log( e );
//     });

// Libro.get('1a35f990-7928-4691-851c-b8f8e39699ca')
//     .getJoin({autor: true}).then((libro: any) => {
//         console.log( libro );
//     });

// r.table('Modelo').run()
//     .then((e: any) => {
//         console.log('select ~> ', e );
//     });

// r.tableList().run()
//     .then((e: any) => {
//         console.log('tables ~> ', e );
//     });

// r.dbList().run()
//     .then((e: any) => {
//         console.log('dbs ~> ', e );
//     });

// r.tableDrop('Libro').run();
// r.tableDrop('Autor').run();

// r.dbDrop('inter').run();
