app

.controller('GatheringTypes', function($scope, $http){
    function init(){
        function load_data(into, name, store_as) {
            if (store_as === undefined) {
                store_as = name;
            }
            return $http.get('static/data/' + name + '.json').success(function(data){
                into[store_as] = data;
            });
        }

        load_data($scope, "locations");
        load_data($scope, "icons");
        load_data($scope, "types").success(function(){
            // Now load the gathering class's nodes into its type object
            for (var type in $scope.types) {
                load_data($scope.types[type], type, 'objects');
            }
        });
    }

    init();
})

.controller('Node', function($scope){
    $scope.get_location_name = function(){
        return $scope.$parent.locations[$scope.location];
    }
})
