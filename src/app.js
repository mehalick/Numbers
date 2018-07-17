(function () {
    'use strict';

    var app = {
        buttons: document.querySelectorAll('button'),
        inputs: document.querySelectorAll('input'),
        originals: document.querySelectorAll('input.original'),
        input: '',
        number: 0
    };

    app.buttons.forEach(button => {
        button.addEventListener('click', function(e){
            
            var value = button.value;
            if (value === 'x') {
                app.input = '';
                app.number = 0;

                app.inputs.forEach(input => {
                    input.value = '';
                })

                return;
            }
            
            app.input = app.input.concat(button.value);
            app.number = parseFloat(app.input);

            app.originals.forEach(input => {
                input.value = app.number;
            })

            document.getElementById('f').value = app.round(app.number * 9 / 5 + 32);
            document.getElementById('c').value = app.round((app.number - 32) * 5 / 9);

            document.getElementById('mi').value = app.round(app.number * 0.62137);
            document.getElementById('km').value = app.round(app.number / 0.62137);
        });
    });

    app.round = function(i) {
        return Math.round(i * 100) /100;
    }

    // if ('serviceWorker' in navigator) {
    //     navigator.serviceWorker
    //         .register('./service-worker.js')
    //         .then(function () { console.log('Service Worker Registered'); });
    // }

})();
