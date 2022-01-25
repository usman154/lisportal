import { Injectable } from "@angular/core";

@Injectable()
export class LocalstorageService {
    getUserData() {
        let user = localStorage.getItem("user");
        if (user) {
            return JSON.parse(user);
        }
        return { token: "" }
    }
    getProjectData() {
        let project = localStorage.getItem("project");
        return JSON.parse(project);
    }
    clearStorage(){
        localStorage.clear();
    }
}