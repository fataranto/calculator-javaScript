

let formula = '';

$( document ).ready(function() {
        $('input').val(formula);
    
        // Asociar un evento click a todos los botones que tienen la clase .btn, de momento mostrar el valor del atributo data-num por consola

        $('.btn').click(function(){
            let buttonPressed = $(this).data('num');
            formula += buttonPressed;
            $('input').val(formula);
        });

        $('.btn-equal').click(function(){
            let result = eval(formula);
            $('input').val(result);
            formula = '';
        });

        $('.btn-clear').click(function(){
            formula = '';
            $('input').val(formula);
        });

        //asignar función a la tecla 'c'  para borrar el valor de la caja de texto
        $('body').keyup(function(e){
            if(e.which == 67) {
                formula = '';
                $('input').val(formula);
            }
        }
        );

        // Limitar que las teclas no sean letras ni caracteres especiales
        $('body').keyup(function(e){
            let key = e.key;
            if(key.match(/[a-zñçº'¡\\ª|!@"#·$&\?\¿%{}_[\]:,;<>]/i)){
                e.preventDefault();
                return
            }
            formula += key;
            $('input').val(formula);
        });

});

