function ContactController(){
  var vm = this;
      vm.name = "Seema Shariat",
      vm.email = "seemashariat@gmail.com",
      vm.phone = '8502285558';

  this.changeName = function(){
    vm.name = 'new name';
    console.log('vm: ', vm);
  }

  this.changeEmail = function(){
    vm.email = 'new email';
  }

  this.changePhone = function(){
    vm.phone = 'new phone';
  }
}

angular
    .module('app')
    .controller('ContactController', ContactController);