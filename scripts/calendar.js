    (function ($) {
        function init() {
            mobiscroll.scroller('#event-date-input', {
                theme: 'mobiscroll-dark',
                display: 'bottom',
                lang: lang,
                wheels: [
                    [{
                        label: 'First wheel',
                        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    }, {
                        label: 'Second wheel',
                        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
                    }, {
                        label: 'Third wheel',
                        data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']
                    }]
                ]
            });
            
            mobiscroll.scroller('#event-time-input', {
                theme: 'mobiscroll-dark',
                display: 'bottom',
                lang: lang,
                wheels: [
                    [{
                        label: 'First wheel',
                        data: ['12', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11']
                    }, {
                        label: 'Second wheel',
                        data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '00',]
                    }, {
                        label: 'Third wheel',
                        data: ['AM', 'PM']
                    }]
                ]
            });
            
        }
        var theme, display, lang;
        init();
    })(mobiscroll.$);

    mobiscroll.eventcalendar('#date-calendar', {
    onMonthLoading: function (event, inst) {
        var year = event.year,
            month = event.month;

        // Load events for (year, month), (year, month - 1), (year, month + 1)
        $.ajax({
            url: 'http://www.example.com/getevents?year=' + year + '&month=' + month,
            dataType: 'json',
            success : function (data) {

                var events = [];

                for (var i = 0; i < data.length; i++) {
                    events.push({
                        d: new Date(data[i].date), // Make sure that a javascript date object is passed
                        text: data[i].text
                    });
                }

                inst.setEvents(events);
            }
        });
    }
});