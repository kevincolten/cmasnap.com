#!/bin/sh
#
# NOTE: this requires "handlebars" to be installed as follows:
#
# $ npm install handlebars@2.0.0 -g
#
handlebars bpo-nav-fluid.handlebars -f bpo-nav-fluid.js
handlebars bpo-nav.handlebars -f bpo-nav.js
