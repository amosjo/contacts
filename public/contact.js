

var app = angular.module('myApp', []);

app.controller("myAppController", function($scope) {

// this is the contacts object

    $scope.contacts = [
    {
        id:1,
        name: "Friends",
        type: "Group",
        contacts: [
            {id:2, name: "Udi", type: "Contact"},
            {id:3, name: "Tommy", type: "Contact"},
            {
                id:6,
                name: "Old Friends",
                type: "Group",
                contacts: [
                    {id:7, name: "Itay", type: "Contact"},
                ]
            },
        ]
    },
    {
        id:4,
        name: "Family",
        type: "Group",
        contacts: [
            {id:5, name: "Roni", type: "Contact"},
        ]
    },
    {id: 8, name: "Ori", type: "Contact"},
];


// this is the open and close function


    $scope.toggleChildren = function(data) {
      data.childrenVisible = !data.childrenVisible;
      data.folderClass = data.contacts&&data.childrenVisible?"paint":"unpaint";
    };
});