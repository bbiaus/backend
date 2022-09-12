class Usuario {
	//atributos
	nombre = ""
	apellido = ""
	libros = []
	mascotas = []

	//inicializador de atributos
	constructor(nombre, apellido, libros, mascotas){
		this.nombre = nombre
		this.apellido = apellido
		this.libros = libros
		this.mascotas = mascotas
	}

	//metodos
	getFullName(){
		return `${this.nombre} ${this.apellido}`
	}

	addMascota(input){
		this.mascotas.push(input)
	}

	countMascotas(){
		return this.mascotas.length
	}

	addBook(libro, autor){
		const newBook = {nombre: libro, autor: autor}
		this.libros.push(newBook)
	}

	getBookNames(){
		const nombreLibros = this.libros.map((libro) => libro.nombre)
		return nombreLibros
	}
}

const boris = new Usuario('Boris', 'Gaspar', [], [])
boris.getFullName()
boris.addMascota('Tortuguita')
boris.addBook('Enders Game', 'Autorazo')
boris.countMascotas()
boris.getBookNames()

