"use strict";
class TodoEntry {
    id;
    title;
    description;
    status;
    isDone;
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
    render() {
        return `
        <div class="card card-body mt-1 shadow">
            <p class="smallś">id: ${this.id}</p>
            <h3 class="h3">${this.title}</h3>
            <button class="btn btn-dwnger">Delete</button>
            
        </div>
        `;
    }
}
