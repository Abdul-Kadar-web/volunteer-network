import React, { useState } from 'react';

const Events = ({ event }) => {
    const deleteEvent = (id) => {
        fetch(`http://localhost:5055/deleteEvent/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                // console.log('delete')
                if (result) {
                    e.target.parentNode.style.display = 'none';
                }
            })

        // const updateEvent = (id) => {
        //     fetch(`http://localhost:5055/updateEvent/${id}`)
        //         .then(res => res.json())
        //         .then(data => {
        //             const update = document.getElementById('container');
        //             update.innerHTML = `
        //         <h3>Update: ${data._id}</h3>
        //         Name: <input type="text" value="${data.name}" id="name" />
        //         <br>
        //         Image: <input type="file" value="${data.imageURL}" id="img" />
        //         <br>
        //         <button onclick="updateProduct('${data._id}')">submit</button>
        //         `
        //         })

            // const  updateProduct = (id) => {
            //     const Name = document.getElementById('name').value;
            //     const Image = document.getElementById('img').value;
            //     const product = { id, price, quantity };
            //     fetch(`http://localhost:5055/update/${id}`, {
            //         method: 'PATCH',
            //         headers: { 'Content-Type': 'application/json' },
            //         body: JSON.stringify(product)
            //     })
            //         .then(res => res.json())
            //         .then(result => {
            //             // console.log('updated')
            //             if (result) {
            //                 document.getElementById('container').innerHTML = '';
            //                 //     const update = document.getElementById('update');
            //                 // update.innerHTML = '';
            //             }
            //         })
            // }

        }
        return (
            <div className="col-md-3">
                <div id="container">
                    {/* <input type="text" value="${event.name}" id="price"/>
                <img src={event.imageURL} alt=""/> */}

                </div>
                {/* <img style={{height: '300px'}} src={require(`../../../images/${event.imgUrl}`)} alt=""/> */}
                <img style={{ height: '300px' }} src={event.imageURL} alt="" />
                <h3>{event.name} <button onClick={() => deleteEvent(event._id)}>Delete</button></h3>
                <button onClick={() => updateEvent(event._id)}>update</button>

            </div>
        );
    };

    export default Events;