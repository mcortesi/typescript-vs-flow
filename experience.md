### Flow

#### Experiencia en Automate

##### Setup
Rapido, corres flow desde la consola en minutos, algunos errores con node_modules existentes que pueden ser ignorados desde el .flowconfig.

##### Primeros pasos

La tarea al incio es frustrante, los mensajes de error parecen cripticos si uno se lanza a tipar las cosas asi sin mas.

##### Pensar los tipos

Resulto importante elegir bien el lugar por el cual empezamos, demasiadas dependencias pueden volver         la tarea inmanejable, una buena decision es tomarse el tiempo para definir los tipos de antemano y comenzar con modulos de la aplicacion con pocas dependencias.

##### Refactor obligado

Al ser un lenguaje dinamico nos vamos a encontrar con cosas que van a necesitar ser refactorizadas para beneficiarse de los tipos de Flow

- reutilizacion de variables
- variables agregadas a objetos dinamicamente
- las clases tienen que definir el tipo de sus properties

##### Primeras alegrias

Una vez pensado los tipos y agregados algunos de estos, es muy probable que encontremos errores en nuestro codigo

- en Automate nos dimos cuenta que los pipes de procesamiento de mentions no siempre reciben el mismo "tipo" de Mention

##### Usar el WEAK mode

Flow nos permite un modo mas laxo, este valida cosas basicas como posibilidad de undefined o null, de esta forma podemos empezar a tipar nuestros archivos usando el modo weak, y cuando estamos conformes con la cantidad de tipos agregados y mas seguros de lo que estamos haciendo cambiar al modo default.

##### Plugins e IDE

La tarea se simplifica en gran manera con el IDE correcto, en Ubuntu la mejor opcion es Nuclide, un plugin de Atom desarrollado por Facebook con soporte para Flow

##### Librerias externas:

Cuando utilizamos librerias externas, es sencillo definir las interfaces en el .flowconfig en general, algunas en particular no son tan simples como Immutable o Bluebird, por suerte Immutable tiene sus interfaces definidas, en cuanto a Bluebird, en principio solo esta funcionando el chequeo de tipos en los "then" cuando definimos un return type Promise<A>

##### Tarea incremental

Hoy en dia ya podemos tener codigo tipado en Automate e ir agregandolo paulatinamente, el codigo es productivo, ya hay una version de Automate en staging funcionando con codigo con annotations.

##### Realizar pruebas

Siempre que vayan tipando realizan pruebas de que flow
entiende lo que estan haciendo, cambien el return type
de una funcion para ver que putee, etc.
