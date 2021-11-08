import useHttp from "../../hooks/use-http";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const { isLoading, error, sendRequest } = useHttp();
  
  const createTask = (taskText, task) => {
    const generatedId = task.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {

    const requestConfig = {
      method: "POST",
      url: "https://react-http-tutorial-1d145-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
      body: { text: taskText },
      headers: {
        "Content-Type": "application/json",
      },
    };

    sendRequest(requestConfig, createTask.bind(null, taskText));
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
