import Airtable from "@/components/Airtable"
import { fetchTasks } from "@/utils/airtable";

export default async function Page() {
  const tasks = await fetchTasks();
 return (
    <Airtable tasksFromServer={tasks}/>
 )
}