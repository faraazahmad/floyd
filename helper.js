export function checkInputs(name, path) {
    return new Promise((resolve, reject) => {
        if (name === '' || path === '') {
            reject(new Error("arguments cannot be empty"));
        }
        resolve();
    });       
}

export function createProject() {
    
}