leonCRM.controller('contactCtrl', function ($scope, contactFactory, $ionicModal, $window, $http) {

    contactFactory.getContacts().success(function (contacts) {
        $scope.contacts = contacts;
    });


    // Create and load the Modal
    $ionicModal.fromTemplateUrl('new-contact.html', function (modal) {
        $scope.contactModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    //$ionicModal.fromTemplateUrl('detail-contact.html', function (modal) {
    //    $scope.contactModal = modal;
    //}, {
    //    scope: $scope,
    //    animation: 'slide-right-left'
    //});

    // Called when the form is submitted
    $scope.createContact = function (form) {



        $scope.form = form;

        contactFactory.addContact($scope.form).success(function () {
            console.log('hello');
        });

        $scope.contactModal.hide();
        $scope.contacts.push(form);


    };

    $scope.updateContact = function(data){
        //angular.copy(contacts).update();
        contactFactory.getContacts().success(function (contacts) {
            $scope.contacts = contacts;
        });
        //$scope.contact = data;
        console.log('hello');
        console.log($scope.contacts );

    };


    // Open our new task modal
    $scope.newContact = function () {
        $scope.contactModal.show();
    };

    // Close the new task modal
    $scope.closeNewContact = function () {
        $scope.contactModal.hide();
    };

})
    .controller('contactDetailCtrl', function ($scope, $stateParams, contactFactory) {


        var contactId = $stateParams.contactId;


        contactFactory.getContact(contactId).success(function (data) {
            $scope.contact = data.contact;
        });


        $scope.deleteCurrentContact = function(id){





            contactFactory.deleteContact(id).success(function(){
                console.log('delete');


            });


        };


    });