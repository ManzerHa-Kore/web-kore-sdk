class BrandingManager {
    applyBranding(data: any) {
        for (var key in data) {
            for (var subKey in data[key]) {
                switch (key) {
                    case 'welcome_screen':
                        if (key == 'welcome_screen' && typeof data[key][subKey] === 'object') {
                            for (var property in data[key][subKey]) {
                                if (property.includes('color')) {
                                  this.applyVariableValue(property, data[key][subKey][property], key, subKey);
                                }
                                if (property == 'starter_box') {
                                    this.applyVariableValue(property, data[key][subKey][property], key, subKey);
                                }
                            }
                        }
                    case 'body':
                        if (key == 'body' && (subKey == 'user_message' || subKey == 'bot_message') && typeof data[key][subKey] === 'object') {
                            for (var property in data[key][subKey]) {
                                this.applyVariableValue(property, data[key][subKey][property], key, subKey);
                            }
                        }
                        break;
                    default:
                        break;
                }
            }
        }
    }

    applyVariableValue(property: any, value: any, key: any, subKey: any) {
        try {
            var cssPrefix = "--v3-sdk-chat-branding-";
            var cssVariable = "";
            cssVariable = cssPrefix + '-' + key + '-' + subKey + '-' + property;
            console.log(cssVariable + ": ", value);
            if (cssVariable) {
                document.documentElement.style.setProperty(cssVariable, value);
            }
        } catch (e) {
            console.log(e);
        }

    }
}

export default BrandingManager