angular.module("scheduleModule").controller("registerUser", function ($scope) {

    angular.element()


    angular.element(document).ready(function () {
        $(".datepicker").datepicker({ 
            firstDay: true, 
            format: "dd/mm/yyyy",
            i18n: {
                months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                weekdays: ["Domingo","Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
                weekdaysShort: ["Dom","Seg", "Ter", "Quar", "Qui", "Sex", "Sab"],
                weekdaysAbbrev: ["D","S", "T", "Q", "Q", "S", "S"],
                cancel: "Cancelar",
                done: "Confirmar",
            }
        });

    })
})

