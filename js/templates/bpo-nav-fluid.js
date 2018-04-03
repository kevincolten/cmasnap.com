(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['bpo-nav-fluid'] = template({"1":function(depth0,helpers,partials,data) {
  return "active";
  },"3":function(depth0,helpers,partials,data) {
  return "           <li><a href=\"/admin\">Admin</a></li>\n";
  },"5":function(depth0,helpers,partials,data) {
  return "           <li><a href=\"/superuser\">Superuser</a></li>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "  <nav class=\"navbar navbar-default navbar-fixed-top\">\n     <div class=\"container-fluid\">\n       <div class=\"navbar-header\">\n         <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n           <span class=\"icon-bar\"></span>\n           <span class=\"icon-bar\"></span>\n           <span class=\"icon-bar\"></span>\n         </button>\n         <a class=\"navbar-brand\" href=\"/page/home\"><img src=\"/images/cmasnap-251x50TM.png\" style=\"max-height: 22px; max-width: 120px;\" alt=\"CMAsnap\"/></a>\n       </div>\n       <div class=\"navbar-collapse collapse\">\n         <ul class=\"nav navbar-nav\">\n           <li class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.active_home : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " home\"><a href=\"/page/home\">Dashboard</a></li>\n           <li class=\"dropdown\">\n             <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Support <span class=\"caret\"></span></a>\n             <ul class=\"dropdown-menu\" role=\"menu\">\n               <li><a href=\"/page/support_faq\">FAQ</a></li>\n               <li><a href=\"/page/support_form\">Contact Support</a></li>\n             </ul>\n           </li>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.showAdminMenu : stack1), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.showSuperuserMenu : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "         </ul>\n         <ul class=\"nav navbar-nav navbar-right\">\n           <li class=\"dropdown\">\n             <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Welcome, "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.firstName : stack1), depth0))
    + " <span class=\"caret\"></span></a>\n             <ul class=\"dropdown-menu\" role=\"menu\">\n               <li><a href=\"/page/user_change_password\">Change Password</a></li>\n               <li><a href=\"/page/user_profile\">User Profile</a></li>\n               <li><a href=\"/page/pay_detail\">Payment Info</a></li>\n               <li role=\"separator\" class=\"divider\"></li>\n               <li><a href=\"/logout\">Logout</a></li>\n             </ul>\n           </li>\n         </ul>\n       </div>\n     </div>\n   </nav>\n";
},"useData":true});
})();