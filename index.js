document.addEventListener('DOMContentLoaded', function () {

    function getUrlParameter(name) {
        name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }


    function updateNavbarContent(elementId, label, value) {
        var element = document.getElementById(elementId);
        if (element) {
            element.textContent = `${label}: ${value}`;
        }
    }


    var destination = getUrlParameter('destination');
    var date = getUrlParameter('date');
    var budget = getUrlParameter('budget');
    var activities = getUrlParameter('activities');


    updateNavbarContent('navbarDestination', 'DESTINATION', destination);
    updateNavbarContent('navbarDate', 'DATE', date);
    updateNavbarContent('navbarBudget', 'BUDGET', budget);
    updateNavbarContent('navbarActivities', 'ACTIVITIES', activities);
});
