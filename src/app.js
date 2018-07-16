(function () {
    'use strict';

    var app = {
        buttons: document.querySelectorAll('button'),
        inputs: document.querySelectorAll('input'),
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

            console.log(app.number);

            document.getElementById('temp-c-original').value = app.number;
            document.getElementById('temp-f-converted').value = app.number * 9 / 5 + 32;
            document.getElementById('temp-f-original').value = app.number;
            document.getElementById('temp-c-converted').value = (app.number - 32) * 5 / 9;
        });
    });

    // if ('serviceWorker' in navigator) {
    //     navigator.serviceWorker
    //         .register('./service-worker.js')
    //         .then(function () { console.log('Service Worker Registered'); });
    // }

})();
