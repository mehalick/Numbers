(function () {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function () { console.log('Service Worker Registered'); });
    }

    var app = {
        buttons: document.querySelectorAll('button'),
        inputs: document.querySelectorAll('input'),
        originals: document.querySelectorAll('input.original'),
        input: '',
        number: 0
    };

    app.buttons.forEach(button => {
        button.addEventListener('click', function (e) {

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

            document.getElementById('10%').value = app.round(app.number + app.number * 0.10);
            document.getElementById('15%').value = app.round(app.number + app.number * 0.15);
            document.getElementById('20%').value = app.round(app.number + app.number * 0.20);

            document.getElementById('f').value = app.round(app.number * 9 / 5 + 32);
            document.getElementById('c').value = app.round((app.number - 32) * 5 / 9);

            document.getElementById('mi').value = app.round(app.number * 0.62137);
            document.getElementById('km').value = app.round(app.number / 0.62137);

            document.getElementById('ft').value = app.round(app.number * 3.2808);
            document.getElementById('m').value = app.round(app.number / 3.2808);

            document.getElementById('in').value = app.round(app.number * 0.3937);
            document.getElementById('cm').value = app.round(app.number / 0.3937);

            document.getElementById('lbs').value = app.round(app.number * 2.2046);
            document.getElementById('kg').value = app.round(app.number / 2.2046);
        });
    });

    app.round = function (i) {
        return Math.round(i * 100) / 100;
    };

    app.copy = function () {
        console.log(this.value);
        this.select();
        document.execCommand('copy');
    };

    app.inputs.forEach(input => {
        console.log(input);
        input.addEventListener('click', app.copy);
    });

})();
