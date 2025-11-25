import React from "react";
import { useForm, useWatch } from "react-hook-form";

import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

import useAxiosSeceure from "..//..//Hooks/useAxiosSeceure";
import UseAuth from "../../Hooks/UseAuth";


const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
  //  formState: { errors },
  } = useForm();

  const {user} = UseAuth()
  const axiosSecure = useAxiosSeceure();

  const serviceCenter = useLoaderData();
  const regionsDuplicate = serviceCenter.map((c) => c.region);
  // region nem bar bar repite na woyer jonno [ ] use
  const regions = [...new Set(regionsDuplicate)];
  // onek gulo fild memage korar jonno useWatch use kora hay.
  const senderRegion = useWatch({ control, name: "senderRegion" });
  // const receiverRegion = useWatch({ control, name:'receiverRegion'});
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  // district selet
  const districtByRegion = (region) => {
    const regionDistricts = serviceCenter.filter((c) => c.region === region);
    const district = regionDistricts.map((d) => d.district);
    return district;
  };
  //  console.log(regions);

  const hendleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "Document";
    const isSameDistrict = data.sanderDistrict === data.receiverDistrict;
    const parcelWight = parseFloat(data.parcelWight);
    // console.log(sameDistrict);

    // cost calculation
    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWight = parcelWight - 3;
        const extraCharge = isSameDistrict
          ? extraWight * 40
          : extraWight * 40 + 40;

        cost = minCharge + extraCharge;
      }
    }
    console.log("cost", cost);
    data.cost = cost ;
    
   // console.log("cost", cost);
    Swal.fire({
      title: "agree with the cost?",
      text: `You well be charged! ${cost} taka` ,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I agree",
    }).then((result) => {
      if (result.isConfirmed) {

        // save parcel info to database

       axiosSecure.post('/parcels', data)
       .then(res => {
        console.log("after saveing data " , res.data);
        
       })

        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mt-4 p-5">Send A Parcel</h1>

      <form onSubmit={handleSubmit(hendleSendParcel)}>
        <h2 className="text-2xl py-4">Enter your parcel details</h2>
        <div className="text-black">
          {/* parcel type */}
          <div className="">
            <label className="label mr-6">
              <input
                type="radio"
                {...register("parcelType")}
                value="document"
                className="radio"
                defaultChecked
              />
              Document
            </label>
            <label className="label">
              <input
                type="radio"
                {...register("parcelType")}
                value="non-document"
                className="radio"
              />
              Non-Document
            </label>
          </div>

          {/* parcel info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 p-3">
            <fieldset className="fieldset">
              <label className="label font-bold">Parcel Name </label>
              <input
                type="text"
                {...register("parcelName")}
                className="input w-full"
                placeholder="parcel name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-bold">Parcel Wight (Kg) </label>
              <input
                type="number"
                {...register("parcelWight")}
                className="input w-full"
                placeholder="parcel wight"
              />
            </fieldset>
          </div>
        </div>
        {/* two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-3">
          {/* sender info */}
          <div>
            {/* sender name */}
            <fieldset className="fieldset">
              <h2 className="text-2xl font-semibold mt-3">Sender Details</h2>
              <label className="label font-bold">Sender Name </label>
              <input
                type="text"
                {...register("senderName")}
                defaultValue={user?.displayName}
                className="input w-full"
                placeholder="sender name"
              />
            </fieldset>
            {/* sender email */}

            <label className="label font-bold">Sender email </label>
            <input
              type="email"
              {...register("senderEmail")}
              defaultValue={user?.email}
              className="input w-full"
              placeholder="sender email"
            />

            {/* sender region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Regions</legend>
              <select
                {...register("senderRegion")}
                defaultValue="Pick a region"
                className="select"
              >
                <option disabled={true}>Pick a regions</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender district */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender district</legend>
              <select
                {...register("senderDistrict")}
                defaultValue="Pick a district"
                className="select"
              >
                <option disabled={true}>Pick a district</option>
                {districtByRegion(senderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender address */}
            <fieldset className="fieldset">
              <label className="label font-bold"> Address </label>
              <input
                type="text"
                {...register("senderAddress")}
                className="input w-full"
                placeholder="sender address"
              />
            </fieldset>
            {/* sender phone no */}
            <fieldset className="fieldset">
              <label className="label font-bold">Sender Phone No. </label>
              <input
                type="number"
                {...register("senderPhone")}
                className="input w-full"
                placeholder="sender phono"
              />
            </fieldset>
            {/* sender district
            <fieldset className="fieldset">
              <label className="label font-bold">Sender District </label>
              <input
                type="text"
                {...register("senderDistrict")}
                className="input w-full"
                placeholder="district"
              />
            </fieldset> */}
            {/* sender pickup */}
            <fieldset className="fieldset">
              <label className="label font-bold">PickUp Instruction </label>
              <input
                type="text"
                {...register("pickupName")}
                className="input w-full"
                placeholder="pickup instruction"
              />
            </fieldset>
          </div>

          {/* receiver info */}
          <div>
            {/* receiver name */}
            <fieldset className="fieldset">
              <h2 className="text-2xl font-semibold mt-3">Receiver Details</h2>
              <label className="label font-bold">Receiver Name </label>
              <input
                type="text"
                {...register("receiverName")}
                className="input w-full"
                placeholder="receiver name"
              />
            </fieldset>
            {/* receiver email */}
            <fieldset className="fieldset">
              <label className="label font-bold">Receiver email </label>
              <input
                type="email"
                {...register("receiverEmail")}
                className="input w-full"
                placeholder="receiver email"
              />
            </fieldset>

            {/* receiver region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver Regions</legend>
              <select
                {...register("receiverRegion")}
                defaultValue="Pick a region"
                className="select"
              >
                <option disabled={true}>Pick a regions</option>
                {regions.map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* receiver district */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver district</legend>
              <select
                {...register("receiverDistrict")}
                defaultValue="Pick a district"
                className="select"
              >
                <option disabled={true}>Pick a regions</option>
                {districtByRegion(receiverRegion).map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* receiver district
            <fieldset className="fieldset">
              <label className="label font-bold">Receiver District </label>
              <input
                type="text"
                {...register("receiverDistrict")}
                className="input w-full"
                placeholder="district"
              />
            </fieldset>  */}

            {/* receiver address */}
            <fieldset className="fieldset">
              <label className="label font-bold"> Address </label>
              <input
                type="text"
                {...register("receiverAddress")}
                className="input w-full"
                placeholder=" address"
              />
            </fieldset>
            {/* receiver phone no */}
            <fieldset className="fieldset">
              <label className="label font-bold">receiver contact No. </label>
              <input
                type="number"
                {...register("receiverPhone")}
                className="input w-full"
                placeholder="receiver phono"
              />
            </fieldset>

            {/* delivery*/}
            <fieldset className="fieldset">
              <label className="label font-bold">Delivery Instruction </label>
              <input
                type="text"
                {...register("deliveryName")}
                className="input w-full"
                placeholder="delivery instruction"
              />
            </fieldset>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-primary my-3 text-black"
          value="send parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
