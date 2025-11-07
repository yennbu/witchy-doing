import "./addTaskForm.css";

export default function AddTaskForm() {

    return (
        <form className="addTaskForm" >
            <input
                type="text"
                className="addTaskForm__input"
                placeholder="New task..."
            />
            <button type="submit" className="addTaskForm__btn" >Add</button>
        </form>
    );
}