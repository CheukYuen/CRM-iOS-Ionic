
var contactFactory = angular.module('contacts.factory', []);
//
contactFactory.factory('contactFactory', ['$http', function ($http) {
    return {
        addContact: function (contact) {
            return $http.post('http://contact-demo.herokuapp.com/api/contact/', contact);
        },
        getContacts: function () {
            return $http.get('http://contact-demo.herokuapp.com/api/contact/');
        },
        getContact: function (id) {
            return $http.get('http://contact-demo.herokuapp.com/api/contact/' + id);
        },
        updateContact: function (id, contact) {
            return $http.put('http://contact-demo.herokuapp.com/api/contact/' + id, contact);
        },
        deleteContact: function (id) {
            return $http.delete('http://contact-demo.herokuapp.com/api/contact/' + id);
        },
        contactId: function (id) {
            return $http.get('http://contact-demo.herokuapp.com/api/contact/' + id).data.contact._id;
        }
    }
}]);


