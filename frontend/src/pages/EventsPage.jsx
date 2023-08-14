import { useLoaderData, json } from "react-router-dom"
import EventsList from '../components/EventsList'
import axios from 'axios'

const EventsPage = props => {

    const events = useLoaderData()

    console.log('loaderdata---->>>>>', events)

    return <>
        <EventsList events={events} />
    </>
}

export default EventsPage

export const loader = async () => {
    const res = await axios.get('http://localhost:8080/events')

    if (res.statusText !== 'OK') {
        // without using json utility function 
        // throw new Response(JSON.stringify({ message: "Could not fetch events." }), { status: 500 })

        // using json utility function 
        throw json({ message: "Could not fetch events." }, {
            status: 500
        })

    } else {
        console.log("events------->>>>>", res)
        return res.data.events
    }
}