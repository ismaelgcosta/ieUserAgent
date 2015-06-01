// Author : Ismael Gomes Costa

var ieUserAgent = {
    init : function() {
        // Get the user agent string
        var ua = navigator.userAgent;
        this.compatibilityMode = false;
        this.isIE = true;
        
        window;

        // Detect whether or not the browser is IE
        var ieRegex = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        ieRegex.exec(ua);

        // Get the current "emulated" version of IE
        this.renderVersion = parseFloat(RegExp.$1);
        if (isNaN(parseFloat(RegExp.$1))) {
            var array = new RegExp('rv:([0-9]{1,}[\.0-9]{0,})').exec(ua);
            if (array === null) {
                this.isIE = false;
            } else {
                this.renderVersion = parseFloat(array[1]);
            }
        }
        
        if(ua.indexOf("Firefox") > -1){
            this.isIE = false;
        }
        this.version = this.renderVersion;

        if (this.isIE) {

            // Check the browser version with the rest of the agent string to
            // detect
            // compatibility mode
            if ((ua.indexOf("compatible;") > -1 && this.renderVersion !== 10 && this.renderVersion !== 9)
                    || (ua.indexOf("compatible;") > -1 && ua.indexOf("MSIE 7.0") > -1 && ua.indexOf("Trident/4.0") > -1)
                    || (ua.indexOf("compatible;") > -1 && ua.indexOf("MSIE 7.0") > -1 && ua.indexOf("Mozilla/4.0") > -1)
                    || (ua.indexOf("compatible;") > -1 && ua.indexOf("Mozilla/5.0") > -1 && ua.indexOf("Trident/7.0") > -1)
                    ) {
                this.compatibilityMode = true;
            }

            if (ua.indexOf("Trident/7.0") > -1) {
                if (ua.indexOf("MSIE 7.0") > -1 || (ua.indexOf("compatible;") > -1 && ua.indexOf("Mozilla/5.0") > -1)) {
                    this.version = 11; // IE 11
                }
            } else if (ua.indexOf("Trident/6.0") > -1) {
                if (ua.indexOf("MSIE 10.0") > -1 || (ua.indexOf("compatible;") > -1 && ua.indexOf("MSIE 7.0") > -1 && ua.indexOf("Mozilla/4.0") > -1)) {
                    this.version = 10; // IE 10
                }
            } else if (ua.indexOf("Trident/5.0") > -1) {
                if ((ua.indexOf("compatible;") > -1 && ua.indexOf("MSIE 7.0") > -1 && ua.indexOf("Mozilla/4.0") > -1) || ua.indexOf("MSIE 9.0") > -1) {
                    this.version = 9; // IE 9
                }
            } else if (ua.indexOf("Trident/4.0") > -1 && ua.indexOf("MSIE 8.0") > -1) {
                this.version = 8; // IE 8
            } else if (ua.indexOf("MSIE 7.0") > -1)
                this.version = 7; // IE 7
            else {
                this.version = 6; // IE 6
            }
            
            if(document.documentMode !== this.version){
                this.compatibilityMode = true;
                if (document.documentMode > this.version) {
                    this.version = document.documentMode;
                }
            }

        }
    }
};

// Initialize the ieUserAgent object
ieUserAgent.init();