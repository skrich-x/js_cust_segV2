(function(){
  'use strict';

  $(document).ready(function(){

  Parse.initialize("CTe7IvPIO7sLsKdCMkgHkBdm0NgHHeZaKlGDWo5d", "6YgTyO839OLfAEZTY2mt8E3rDMtFQ2v8yCn0NGYj");

  var Customer = Parse.Object.extend("Customer");

  $("#customer-form").submit(function(event){
      event.preventDefault();
        var branch = $("#branch-name").val();
        var companyName = $("#company-name").val();
        var accountNumber = $("#account-number").val();
        var customerName = $("#customer-name").val();
        var customerTitle = $("#customer-title").val();
        var customerEmail = $("#customer-email").val();
        var customerOfficePhone = $("#customer-office-phone").val();
        var customerMobilePhone = $("#customer-mobile-phone").val();
        var companyDescription = $("#company-description").val();
        var companyInstallers = $("#company-installers").val();
        var companyPrimary = $("#company-primary").val();
        var companySecondary = $("#company-secondary").val();
        var newConstruction = $("#new-construction").val();
        var retrofit = $("#retrofit").val();
        var repair = $("#repair").val();

        var newCustomer = new Customer();
        newCustomer.set("branch", branch);
        newCustomer.set("companyName", companyName);
        newCustomer.set("accountNumber", accountNumber);
        newCustomer.set("customerName", customerName);
        newCustomer.set("customerTitle", customerTitle);
        newCustomer.set("customerEmail", customerEmail);
        newCustomer.set("customerOfficePhone", customerOfficePhone);
        newCustomer.set("customerMobilePhone", customerMobilePhone);
        newCustomer.set("companyDescription", companyDescription);
        newCustomer.set("companyInstallers", companyInstallers);
        newCustomer.set("companyPrimary", companyPrimary);
        newCustomer.set("companySecondary", companySecondary);
        newCustomer.set("newConstruction", newConstruction);
        newCustomer.set("retrofit", retrofit);
        newCustomer.set("repair", repair);

        newCustomer.save({
          success: function (){
            console.log("saved");
            $("#customer-form").hide();
            $("#thank-you").removeClass("hidden");

          }, error: function(error){
            console.log("Error:"+error.message);
          }
        });
      });
    });
})();
