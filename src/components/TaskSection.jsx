export default function TaskSection(taskList) {

    return (
        <div id='taskSection'>
            <h2>Task Section Here</h2>
            <p>{JSON.stringify(taskList)}</p>
        </div>
    );
}