function StaffController(){
  var vm = this;
      vm.name = "Connie Contactor",
      vm.email = "connie@gmail.com",
      vm.phone = '6464368077';
}

angular
    .module('app')
    .controller('StaffController', StaffController);