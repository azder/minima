import curry from './curry';

const UNWANTED_CHARS = /[^a-z0-9-]/g;
const MULTIPLE_DOTS = /\.+/g;
const FINAL_DOT = /\.$/g;


export default curry(
    (parent, ecode) => (
        String(ecode ? `${parent}.${String(ecode)}` : parent)
            .toLowerCase()
            .replace(UNWANTED_CHARS, '.')
            .replace(MULTIPLE_DOTS, '.')
            .replace(FINAL_DOT, '')
    )
);
