import ecode from './ecode';


const SUCCESS = 0;
const ERROR = 1;

// noinspection JSUnusedGlobalSymbols
export default (

    ec => {

        if (!ec) {
            return ERROR;
        }

        if (ec.startsWith(ecode.k[ecode.ANY])) {
            return SUCCESS;
        }

        return ERROR;

    }

);
