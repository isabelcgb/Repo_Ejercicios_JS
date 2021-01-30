
class Cliente {
    constructor (nombre, direccion, telefono, nif) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }
};

class Elementos {
    constructor (descripcion, cantidad, precio) {
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    }
};

class Factura {
    constructor (Cliente, Elementos) {
        this.Cliente = Cliente;
        this.Elementos = Elementos;
        this.informacion = {
            baseImponible: 0,
            iva: 21,
            total: 0,
            formaPago: "contado"
        };

        this.calculoTotal = () => {
            for (var i = 0; i < this.Elementos.length; i++) {
                this.informacion.baseImponible += this.Elementos[i].cantidad * this.Elementos[i].precio;
            }
            this.informacion.total = this.informacion.baseImponible * (1+(this.informacion.iva/100));
        }

        this.muestraTotal = function () {
            this.calculoTotal();
            alert("total = " + this.informacion.total + " euros");
        }
    };
}

var primerCliente = new Cliente ('Isabel','Donostia','654343400', '1234567W');
var LosElementos = [new Elementos ("Objeto1",1,1), new Elementos ("Objeto 2", 3,4)];
var LaFactura = new Factura (primerCliente, LosElementos);
LaFactura.muestraTotal();


/*class Cliente {
    constructor(nombre, direccion, telefono, nif) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.telefono = telefono;
      this.nif = nif;
    }
  }
  
  class Elemento {
    constructor(descripcion, cantidad, precio) {
      this.descripcion = descripcion;
      this.cantidad = cantidad;
      this.precio = precio;
    }
  }
  
  class Factura {
    constructor(cliente, elementos) {
      this.cliente = cliente;
      this.elementos = elementos;
      this.informacion = {
        baseImponible: 0,
        iva: 21,
        total:0,
        formaPago: "contado"
      };
  
      this.calculaTotal = () => {
        for (var i = 0; i <this.elementos.length; i++) {
          this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
        }
        this.informacion.total = this.informacion.baseImponible * (1+(this.informacion.iva/100));
      }
  
      this.muestraTotal = function () {
        this.calculaTotal();
        alert("total = " + this.informacion.total + " euros");
      }
    };
  }
  
  var elCliente = new Cliente("Cliente 1", "", "", "");
  var losElementos = [new Elemento("elemento1", "1", "5"), new Elemento("elemento2", "2", "12")];
  var laFactura = new Factura(elCliente, losElementos);
  laFactura.muestraTotal();*/
