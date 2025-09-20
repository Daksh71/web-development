var app = angular.module('currencyApp', []);

app.controller('CurrencyController', function($scope, $http) {
    $scope.amount = null;
    $scope.fromCurrency = 'INR';
    $scope.toCurrency = 'USD';
    $scope.convertedAmount = null; 
    $scope.error = null;
    $scope.currencies = ['USD', 'EUR', 'GBP', 'INR', 'CAD', 'AUD', 'JPY', 'CHF'];

    $scope.convert = function() {
        const apiURL = `https://open.er-api.com/v6/latest/${$scope.fromCurrency}`;

        $http.get(apiURL).then(function(response) {
            const rates = response.data.rates;
            if (rates && rates[$scope.toCurrency]) {
                $scope.convertedAmount = $scope.amount * rates[$scope.toCurrency];{}
                $scope.error = null;
            } else {
                $scope.error = "Conversion rate not available.";
                $scope.convertedAmount = null;
            }
        }, function(error) {
            $scope.error = "API request failed. Please check your connection.";
            $scope.convertedAmount = null;
        });
    };
});
