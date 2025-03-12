import React from "react";

export const loginData = (username:string, password: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(`http://localhost:3000/users?username=${username}&password=${password}`)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        }, 2000);
    });
};