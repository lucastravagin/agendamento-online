angular.module('scheduleModule').controller('onlineScheduleController', function ($scope) {

    $scope.selecionado = function() {
        var dia = document.querySelector('.grid-dia');
        dia.classList.toggle("grid-dia");
        dia.classList.toggle("selecionado");
        console.log(dia);
    }
    
    angular.element(document).ready(function () {
        $('.stepper').activateStepper();
        $('select').material_select();
        $('.collapsible').collapsible();
    })
})