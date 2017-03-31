
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function formatError(message,err) {
    var html = '<p>';
    html += message;
    if (err) {
        html += ': <pre><code>' + JSON.stringify(err) + '</code></pre>';
    }
    html += '</p>';
    return html;
}

jQuery.extend({
    postJSON: function(url, data, callback) {
      return jQuery.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(data),
        success: callback,
        dataType: "json",
        contentType: "application/json",
        processData: false
      });
    }
});

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

(function(){
    var cookies;

    function readCookie(name,c,C,i){
        if(cookies){ return cookies[name]; }

        c = document.cookie.split('; ');
        cookies = {};

        for(i=c.length-1; i>=0; i--){
           C = c[i].split('=');
           cookies[C[0]] = C[1];
        }

        return cookies[name];
    }

    window.readCookie = readCookie;
})();

function buildQueryString(data)
{
   var ret = [];
   for (var d in data)
      ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
   return ret.join("&");
}

function setCookie(cname,cvalue) {
    document.cookie = cname+'='+cvalue+'; path=/';
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires+"; path=/";
}

function getCookie(cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function isLocalStorageNameSupported() {
    var testKey = 'test', storage = window.sessionStorage;
    try {
      storage.setItem(testKey, '1');
      storage.removeItem(testKey);
      return localStorageName in win && win[localStorageName];
    } catch (error) {
      return false;
    }
}

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.CMA = root.CMA || factory();
  }
})(this, function () {
  "use strict";

  function saveUser(u) {
    try {
      setCookie('cmasnap',JSON.stringify(u));
    } catch (error) {
      // NOOP
    }
  }

  function getUser() {
    var user = {firstName: "", admin: false, superuser: false};
    try {
        user = JSON.parse(getCookie('cmasnap'))
        if (user.admin) user.showAdminMenu = 'show';
        if (user.superuser) user.showSuperuserMenu = 'show';
    } catch (error) {
        return user;
    }
    return user;
  }

  return {
    saveUser:saveUser,
    getUser:getUser
  }
});
