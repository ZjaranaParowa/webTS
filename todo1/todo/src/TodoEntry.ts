class TodoEntry{
    id: number;
    title: string;
    description?: string;
    status?: string;
    isDone?: boolean;


    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }
    render(){
        return `
        <div class="card card-body mt-1 shadow">
            <p class="small">id: ${this.id}</p>
            <h3 class="h3">${this.title}</h3>
            <button class="btn btn-dnger">Delete</button>
            <select class="w-100">
                <option>Doing</option>
                <option>Done</option>
            </select>
            <h3 class="h3">${this.status}</h3>
            
        </div>
        `;
    }
}
export default TodoEntry;
