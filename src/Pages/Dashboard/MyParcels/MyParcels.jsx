import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseAuth from "../../../Hooks/UseAuth";
import useAxiosSeceure from "../../../Hooks/useAxiosSeceure";
import { LiaEdit } from "react-icons/lia";
import { MdPreview } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSeceure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myparcels", user?.email],

    queryFn: async () => {
      const res = await axiosSecure.get(`parcels?email=${user.email}`);
      return res.data;
    },
  });

  const handleParcelDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        axiosSecure.delete(`/parcels/${id}`)
        .then(res => {
          console.log(res.data);

          if(res.data.deletedCount){

            // refetch the data in the ui
             refetch();

             Swal.fire({
          title: "Deleted!",
          text: "Your parcel has been deleted.",
          icon: "success",
        });
          }
          
        })

       
      }
    });
  };

  const hendlePayment =  async(parcel) => {
      const paymentInfo = {
        cost : parcel.cost ,
        parcelId : parcel._id,
        senderEmail: parcel.senderEmail,
        parcelName: parcel.parcelName

      }
      const res = await axiosSecure.post('/payment-checkout-session', paymentInfo);

      console.log(res.data.url);
      
    window.location.href = res.data.url;
      
  }

  return (
    <div>
      <h2>all of my parcels: {parcels.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>cost</th>
              <th>payment</th>
              <th>delivery status</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>
                   
                   {
                    parcel.paymentStatus === 'paid' ? 
                   <span className="text-green-700 font-semibold">Paid</span>
                    : 
                  
                    <button onClick={() => hendlePayment(parcel)} className="btn btn-sm btn-primary text-black">Pay</button>
                

                    // <Link to={`/dashboard/payment/${parcel._id}`}>
                    //     <div className="btn btn-sm btn-primary text-black">Pay</div>
                    // </Link>
                   }

                </td>
                <td>
                  {parcel.deliveryStatus}
                </td>
                <td>
                  <button className="btn btn-square hover:bg-primary">
                    <MdPreview />
                  </button>
                  <button className="btn btn-square hover:bg-primary mx-3">
                    <LiaEdit />
                  </button>
                  <button
                    onClick={() => handleParcelDelete(parcel._id)}
                    className="btn btn-square hover:bg-primary"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
