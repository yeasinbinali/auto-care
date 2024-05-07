import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const BookingCarts = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/carts?email=${user?.email}`
    useEffect(() => {

        axios.get(url, { withCredentials: true })
            .then(res => {
                setBookings(res.data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [url])

    console.log(bookings);

    return (
        <div className='mt-10 mb-20'>
            <h1 className='text-4xl font-bold text-center mb-5'>Booking carts</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Time</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <tr key={booking._id}>
                                <th>{booking.title}</th>
                                <td>{booking.price}</td>
                                <td>{booking.time}</td>
                                <td>Pending</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingCarts;