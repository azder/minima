import ecode from './ecode';
import isstr from './is/string';


const MINIMA_ERROR = 128;

const SUCCESS = 0;
const ERROR = 1;

// noinspection JSUnusedGlobalSymbols
export default (

    ec => {

        if (!isstr(ec)) {
            return MINIMA_ERROR;
        }

        if (ec.startsWith(ecode.ok)) {
            return SUCCESS;
        }

        return ERROR;

    }

);
