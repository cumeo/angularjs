"use strict";
const common = angular.module("common", []);
common.factory("myService", function () {
  console.log("common service");
  const myService = {};
  myService.checkin = function () {
    console.log("common service: checkin");
  };
  return myService;
});
common.service("utils", [
  "$http",
  function ($http) {
    var service = {};
    service.check_login = function () {
      if (isLogin !== "true") {
        alert("Please login!");
        return false;
      }
      return true;
    };
    service.check_login_init = function () {
      if (isLogin !== "true") {
        return false;
      }
      return true;
    };
    return service;
  },
]);
