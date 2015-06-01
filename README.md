# ieUserAgent
Detect whether or not the browser is IE

Example of use:

```javascript
  
        if (!ieUserAgent.isIE) {
            window.location.href = '/connect';
        }

        var val = "IE" + ieUserAgent.version;
        if (ieUserAgent.compatibilityMode && ieUserAgent.version >= 9) {
            val += " Compatibility Mode (IE" + ieUserAgent.renderVersion + " emulation)";
        } else if(!ieUserAgent.compatibilityMode && ieUserAgent.version >= 9) {
            alert('Internet Explorer Newer '+ieUserAgent.version);
        } 
        if(ieUserAgent.compatibilityMode){
            alert('Internet Explorer '+ieUserAgent.version);
        }
