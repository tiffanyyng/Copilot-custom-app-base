
// const Airtable = () => {
//   const [tasks, setTasks] = useState<any[]>([]);

import Airtable from "@/components/Airtable"
import { fetchTasks } from "@/utils/airtable";

//   useEffect(() => {
//     fetchTasks().then(
//       tasks => setTasks(tasks)
//     )
//   }, [])

//   const handleOnChange = (taskId: string, event: any) => {
//     const eventValue = event.target.value
//     updateStatus(taskId, event.target.value)
//       .then(() => {
//         setTasks(prevTasks => {
//           const taskIndex = prevTasks.findIndex((task: any) => task.id === taskId);
//           if (taskIndex !== -1) {
//             const newTasks = [...prevTasks]
//             newTasks[taskIndex].fields.Status = eventValue;
//             return newTasks
//           }
//           return prevTasks
//         })
//       })
//   }
  
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-between p-24" style={{backgroundColor: "#D6EFFB"}}>
//       <div className="container mx-auto py-6">
//       <h1 className="text-black text-3xl font-bold mb-8">Tasks</h1>
//       <div className="flex flex-col">
//         {tasks.map((task: any) => {
//           console.log(task.id)
//           return (<div key={task.id} className="bg-white shadow-md rounded-lg p-6 mb-4">
//             <h2 className="text-black font-bold mb-2" style={{fontSize: "20px"}}>{task.fields['Task Name']}</h2>
//             <p className="text-black mb-2" style={{fontSize: "14px"}}>{task.fields['Description']}</p>
//             <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
//               <div>
//                 <h1 className="text-gray-500" style={{fontWeight: "700"}}>Status</h1>
//                 <select className="text-black" style={{background: getBackgroundColor(task.fields.Status), borderRadius: "5px"}} name="status" id="status" value={task.fields.Status} onChange={e => handleOnChange(task.id, e)}>
//                   <option value="To Do">To Do</option>
//                   <option value="In Progress">In Progress</option>
//                   <option value="Done">Done</option>
//                 </select>
//               </div>
//               <div>
//                 <h1 className="text-gray-500" style={{fontWeight: "700"}}>Deadline</h1>
//                 <h2 className="text-black">{task.fields['Deadline']}</h2>
//               </div>
//               <div>
//                 <h1 className="text-gray-500" style={{fontWeight: "700"}}>Priority</h1>
//                 <h2 className="text-black">{task.fields.Priority}</h2>
//               </div>
//             </div>
//           </div>
//           )
//         })}
//       </div>
//     </div>
//     </div>
//   )
// }


export default async function Page() {
  const tasks = await fetchTasks();
 return (
    <Airtable tasksFromServer={tasks}/>
 )
}