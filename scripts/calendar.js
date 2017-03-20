(function ($) {

        function init() {

            mobiscroll.scroller('#test', {
                theme: theme,
                display: display,
                lang: lang,
                wheels: [
                    [{
                        label: 'First wheel',
                        data: ['0', '1', '2', '3', '4', '5', '6', '7']
                    }, {
                        label: 'Second wheel',
                        data: [{
                            value: 0,
                            display: 'a'
                        }, {
                            value: 1,
                            display: 'b'
                        }, {
                            value: 2,
                            display: 'c'
                        }, {
                            value: 3,
                            display: 'd'
                        }]
                    }]
                ]
            });
        }

        var theme, display, lang;

        $('.settings').on('change', function () {
            theme = $('#theme').val() || mobiscroll.settings.theme;
            display = $('#display').val();
            lang = $('#language').val();

            init();
        });

        $('#theme').trigger('change');
    })(mobiscroll.$);
