import { useState } from "react"
import { FiMessageCircle, FiX } from "react-icons/fi"
import axios from "axios"

function AIConsultant(){

const [open,setOpen] = useState(false)
const [messages,setMessages] = useState([
{sender:"bot",text:"Hi 👋 I'm your Spark Vision assistant. How can I help?"}
])

const [input,setInput] = useState("")

const sendMessage = async () => {

if(!input.trim()) return

const userMsg = {sender:"user",text:input}

setMessages(prev=>[...prev,userMsg])

let botReply = "Thanks for your question. Our consulting team will review this."

if(input.toLowerCase().includes("sap"))
botReply="We specialize in SAP S/4HANA implementation and enterprise transformation."

if(input.toLowerCase().includes("analytics"))
botReply="Our analytics consulting helps businesses unlock insights from enterprise data."

if(input.toLowerCase().includes("services"))
botReply="We offer Cloud, Analytics, Managed IT, and Digital Transformation services."

setMessages(prev=>[...prev,userMsg,{sender:"bot",text:botReply}])

setInput("")

}

return(

<>

{/* FLOATING BUTTON */}

<button
onClick={()=>setOpen(!open)}
className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50"
>

{open ? <FiX size={22}/> : <FiMessageCircle size={22}/>}

</button>


{/* CHAT WINDOW */}

{open && (

<div className="fixed bottom-20 right-6 w-[320px] md:w-[360px] bg-white rounded-xl shadow-2xl z-50 flex flex-col">

{/* HEADER */}

<div className="bg-blue-600 text-white p-4 rounded-t-xl font-semibold">
Spark Vision Assistant
</div>


{/* MESSAGES */}

<div className="p-4 h-[300px] overflow-y-auto space-y-3">

{messages.map((m,i)=>(

<div
key={i}
className={`text-sm p-3 rounded-lg max-w-[80%] ${
m.sender==="user"
? "bg-blue-600 text-white ml-auto"
: "bg-gray-100 text-gray-800"
}`}
>

{m.text}

</div>

))}

</div>


{/* INPUT */}

<div className="flex border-t">

<input
value={input}
onChange={(e)=>setInput(e.target.value)}
placeholder="Ask about services..."
className="flex-1 p-3 text-sm outline-none"
/>

<button
onClick={sendMessage}
className="px-4 text-blue-600 font-semibold"
>

Send

</button>

</div>

</div>

)}

</>

)

}

export default AIConsultant