import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link, Redirect, useParams } from "react-router-dom";
import { loadBooking, cancelBooking } from "../../store/bookingsReducer";
import { fetchUserSpots } from "../../store/spotReducer";


const UserBookings = () => {
    //const {userId} = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user)
    const userId = user?.id
    const bookings = useSelector((state) => Object.values(state.bookingsReducer.booking))


    useEffect(() => {
        dispatch(loadBooking(userId));
        dispatch(fetchUserSpots(userId))

    },[])


    return (
        <div>
            <h1>hello from here </h1>
            <ul>
                {bookings?.map((booking,i) => <li key={i}>{booking.startDate}{booking?.Spot?.name}
                <button onClick={(() => dispatch(cancelBooking(booking.id, userId)))}>Cancel Booking</button></li>)}

            </ul>
            <Link to='/'>Return Home</Link>
        </div>
    )
}


export default UserBookings;
