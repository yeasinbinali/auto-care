import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const BookingCarts = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const url = `http://localhost:5000/carts?email=${user?.email}`
        axios.get(url)
            .then(res => {
                setBookings(res.data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [])

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
                            bookings.map(booking => <tr>
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