
import VtexHelpers from './class/VtexHelpers.js';
import GlobalHelpers from './class/GlobalHelpers.js';
import './utils/rivets-formatters.js';

class VtexUtils {
    constructor() {
        this.version = '0.1.0';
        this.globalHelpers = new GlobalHelpers();
        this.vtexHelpers = new VtexHelpers();
    }
}

export default VtexUtils;
