app

.directive('gatheringNode', function(){
    return {
        'restrict': 'E',
        'require': 'Node',
        'templateUrl': '/static/app/templates/node.html',
        // 'transclude': true,
        // 'scope': {
        //     'node': '='
        // },
        // 'link': function(scope, element, attrs, controller){
        //     // scope.get_location_name = controller.get_location_name;
        // }
    }
})
