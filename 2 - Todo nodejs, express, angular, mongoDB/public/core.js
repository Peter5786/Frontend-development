var nodeTodo = angular.module('nodeTodo', []);

function mainController($scope, $http) {
    $scope.formData = {};
    $scope.nic = true;

    $scope.cos = 'Kot ma ale';
    // when landing on the page, get all todos and show them
    $http.get('/api/todos')
        .success(function (data) {
            $scope.todos = data;
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function () {
        $http.post('/api/todos', $scope.formData)
            .success(function (data) {
                $('input').val('');
                $scope.todos = data;
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    $scope.updateTodo = function (todo) {
        $http.put('/api/todos/' + todo._id, {done: todo.done})
            .success(function (data) {
                $scope.todos = data;
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function (id) {
        $http.delete('/api/todos/' + id)
            .success(function (data) {
                $scope.todos = data;
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
}