// import database adapter here
// import all models here

export interface ConnectionOpts {
    user: string,
    password: string,
    host: string,
    database: string,
};

export function connect(opts: ConnectionOpts) {
    // connect to database using adapter
}

export const models = {

};